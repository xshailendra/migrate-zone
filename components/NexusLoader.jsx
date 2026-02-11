'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import * as THREE from 'three';

const NexusLoader = ({ onComplete, onTransitionStart }) => {
    const [scope, animate] = useAnimate();
    const mountRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // --- Three.js Setup ---
        const width = window.innerWidth;
        const height = window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 15;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // --- Globe Creation ---
        // 1. Core Sphere (Wireframe)
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: 0x1f406d, // Brand Navy
            wireframe: true,
            transparent: true,
            opacity: 0.3,
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // 2. Glowing Nodes
        const nodesGeometry = new THREE.IcosahedronGeometry(5.1, 2);
        const nodesMaterial = new THREE.PointsMaterial({
            color: 0x1f406d,
            size: 0.15,
            transparent: true,
            opacity: 0.8,
        });
        const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
        globe.add(nodes);

        // 3. Migration Particles (Red)
        const particleCount = 200;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount);

        for (let i = 0; i < particleCount * 3; i += 3) {
            const phi = Math.random() * Math.PI * 2;
            const theta = Math.random() * Math.PI;
            const radius = 5 + Math.random() * 0.5;

            positions[i] = radius * Math.sin(theta) * Math.cos(phi);
            positions[i + 1] = radius * Math.sin(theta) * Math.sin(phi);
            positions[i + 2] = radius * Math.cos(theta);

            velocities[i / 3] = Math.random() * 0.02 + 0.01;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0xe41e25, // Brand Red
            size: 0.1,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // 4. Nexus Arcs (Connecting nodes)
        const arcGroup = new THREE.Group();
        const createArc = () => {
            const start = new THREE.Vector3().setFromSphericalCoords(5, Math.random() * Math.PI, Math.random() * Math.PI * 2);
            const end = new THREE.Vector3().setFromSphericalCoords(5, Math.random() * Math.PI, Math.random() * Math.PI * 2);
            const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(7);

            const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
            const arcGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
            const arcMaterial = new THREE.LineBasicMaterial({
                color: 0xe41e25,
                transparent: true,
                opacity: 0.2,
                blending: THREE.AdditiveBlending
            });
            return new THREE.Line(arcGeometry, arcMaterial);
        };

        for (let i = 0; i < 15; i++) arcGroup.add(createArc());
        globe.add(arcGroup);

        // --- Animation Loop ---
        const animateThree = () => {
            requestAnimationFrame(animateThree);

            globe.rotation.y += 0.002;
            globe.rotation.x += 0.001;

            nodes.rotation.y -= 0.001;
            arcGroup.rotation.y += 0.001;

            // Animate particles
            const posAttr = particlesGeometry.attributes.position;
            for (let i = 0; i < particleCount; i++) {
                const ix = i * 3;
                // Subtle pulse or movement
                const time = Date.now() * 0.001;
                posAttr.array[ix] += Math.sin(time + i) * 0.005;
                posAttr.array[ix + 1] += Math.cos(time + i) * 0.005;
            }
            posAttr.needsUpdate = true;

            renderer.render(scene, camera);
        };

        animateThree();

        // --- Handoff to Framer Motion ---
        const runSequence = async () => {
            // Initial states
            await animate(".curtain-top", { y: "0%" }, { duration: 0 });
            await animate(".curtain-bottom", { y: "0%" }, { duration: 0 });
            await animate("#brand-name", { opacity: 0, scale: 0.9, filter: "blur(10px)" }, { duration: 0 });
            await animate("#globe-container", { opacity: 0, scale: 0.8 }, { duration: 0 });

            // 1. Fade in Globe
            await animate("#globe-container", { opacity: 1, scale: 1 }, { duration: 1.5, ease: "easeOut" });

            // 2. Reveal Brand
            await animate("#brand-name",
                { opacity: 1, scale: 1, filter: "blur(0px)" },
                { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
            );

            // Wait for viewing
            await new Promise(r => setTimeout(r, 2000));

            // 3. Transition Out
            if (onTransitionStart) onTransitionStart();

            await Promise.all([
                animate("#globe-container", { opacity: 0, scale: 1.2, filter: "blur(20px)" }, { duration: 1 }),
                animate("#brand-name", { opacity: 0, y: -20, filter: "blur(10px)" }, { duration: 0.8 }),
                animate(".curtain-top", { y: "-100%" }, { duration: 1, delay: 0.2, ease: [0.645, 0.045, 0.355, 1] }),
                animate(".curtain-bottom", { y: "100%" }, { duration: 1, delay: 0.2, ease: [0.645, 0.045, 0.355, 1] })
            ]);

            if (onComplete) onComplete();
        };

        runSequence();

        // Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={scope} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f3f4f6]">
            {/* Split Curtains */}
            <div className="curtain-top absolute top-0 left-0 w-full h-1/2 bg-[#1f406d]" />
            <div className="curtain-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#1f406d]" />

            {/* 3D Globe Container */}
            <div id="globe-container" ref={mountRef} className="absolute inset-0 z-0" />

            {/* Ambient Haze */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,64,109,0.1),transparent_70%)] pointer-events-none" />

            {/* Brand Overlay */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                <motion.div id="brand-name" className="flex items-baseline gap-2">
                    <h1 className="text-6xl md:text-8xl font-black font-oxanium tracking-tighter uppercase text-white drop-shadow-2xl">
                        <span>MIGRATE</span>
                        <span className="text-[#e41e25] italic">ZONE</span>
                    </h1>
                </motion.div>

                {/* Tech Line */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "200px", opacity: 1 }}
                    transition={{ delay: 2, duration: 1.5 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-[#e41e25] to-transparent"
                />
            </div>

            {/* HUD Elements for Premium Feel */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 border-l border-t border-white w-20 h-20" />
                <div className="absolute top-10 right-10 border-r border-t border-white w-20 h-20" />
                <div className="absolute bottom-10 left-10 border-l border-b border-white w-20 h-20" />
                <div className="absolute bottom-10 right-10 border-r border-b border-white w-20 h-20" />
            </div>
        </div>
    );
};

export default NexusLoader;
