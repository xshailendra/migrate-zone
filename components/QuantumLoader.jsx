'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';

const RoamingFlights = ({ isVisible }) => {
    // 25 distinct paths with calculated rotations for a "busy sky" effect
    const flightPaths = [
        { start: { left: "-10%", top: "10%" }, end: { left: "110%", top: "90%" }, rot: 33 },   // 1
        { start: { left: "110%", top: "15%" }, end: { left: "-10%", top: "85%" }, rot: 150 },  // 2
        { start: { left: "25%", top: "-10%" }, end: { left: "75%", top: "110%" }, rot: 67 },   // 3
        { start: { left: "-10%", top: "50%" }, end: { left: "110%", top: "50%" }, rot: 0 },    // 4
        { start: { left: "85%", top: "110%" }, end: { left: "15%", top: "-10%" }, rot: -120 }, // 5
        { start: { left: "110%", top: "60%" }, end: { left: "-10%", top: "30%" }, rot: -166 }, // 6
        { start: { left: "-10%", top: "85%" }, end: { left: "110%", top: "15%" }, rot: -30 },  // 7
        { start: { left: "55%", top: "110%" }, end: { left: "45%", top: "-10%" }, rot: -95 },  // 8
        { start: { left: "-10%", top: "30%" }, end: { left: "110%", top: "70%" }, rot: 19 },   // 9
        { start: { left: "110%", top: "40%" }, end: { left: "-10%", top: "40%" }, rot: 180 },  // 10
        { start: { left: "40%", top: "-10%" }, end: { left: "60%", top: "110%" }, rot: 80 },   // 11
        { start: { left: "0%", top: "110%" }, end: { left: "100%", top: "-10%" }, rot: -50 },  // 12
        { start: { left: "110%", top: "5%" }, end: { left: "40%", top: "110%" }, rot: 125 },   // 13
        { start: { left: "-10%", top: "75%" }, end: { left: "80%", top: "-10%" }, rot: -43 },  // 14
        { start: { left: "70%", top: "-10%" }, end: { left: "10%", top: "110%" }, rot: 115 },  // 15
        { start: { left: "-15%", top: "25%" }, end: { left: "115%", top: "75%" }, rot: 21 },   // 16
        { start: { left: "90%", top: "-10%" }, end: { left: "10%", top: "110%" }, rot: 125 },  // 17
        { start: { left: "115%", top: "90%" }, end: { left: "-15%", top: "10%" }, rot: -148 }, // 18
        { start: { left: "-10%", top: "95%" }, end: { left: "110%", top: "35%" }, rot: -29 },  // 19
        { start: { left: "5%", top: "-10%" }, end: { left: "95%", top: "110%" }, rot: 53 },    // 20
        { start: { left: "115%", top: "50%" }, end: { left: "-15%", top: "55%" }, rot: 181 },  // 21
        { start: { left: "30%", top: "115%" }, end: { left: "70%", top: "-15%" }, rot: -71 },  // 22
        { start: { left: "110%", top: "80%" }, end: { left: "-10%", top: "20%" }, rot: -150 }, // 23
        { start: { left: "-15%", top: "60%" }, end: { left: "115%", top: "40%" }, rot: -9 },    // 24
        { start: { left: "50%", top: "-15%" }, end: { left: "50%", top: "115%" }, rot: 90 },   // 25
    ];

    return (
        <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {flightPaths.map((path, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                        left: path.start.left,
                        top: path.start.top,
                        rotate: path.rot,
                        opacity: 0
                    }}
                    animate={isVisible ? {
                        left: path.end.left,
                        top: path.end.top,
                        opacity: [0, 1, 1, 0]
                    } : {}}
                    transition={{
                        duration: 6 + (i % 5) * 1.5,
                        delay: (i * 0.4),
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    <div className="relative">
                        {/* Contrail - Subtle white/blue tail */}
                        <div
                            className="absolute right-full top-1/2 -translate-y-1/2 h-[2px] origin-right"
                            style={{
                                width: '180px',
                                background: 'linear-gradient(90deg, transparent, rgba(31,64,109,0.3))',
                                filter: 'blur(2px)'
                            }}
                        />
                        {/* Plane SVG - ENLARGED */}
                        <svg width="36" height="36" viewBox="0 0 24 24" className={`${i % 2 === 0 ? 'fill-[#1f406d]' : 'fill-[#e41e25]'} rotate-90 drop-shadow-lg`}>
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const QuantumLoader = ({ onComplete, onTransitionStart }) => {
    const [scope, animate] = useAnimate();
    const [isMounted, setIsMounted] = useState(false);
    const hasRunRef = useRef(false);

    const runSequence = async () => {
        if (!isMounted || hasRunRef.current) return;
        hasRunRef.current = true;

        // Premium Easing
        const luxEase = [0.16, 1, 0.3, 1]; // power4.out equivalent
        const beamEase = [0.22, 1, 0.36, 1];

        // 1. Initial State
        await Promise.all([
            animate(".curtain-top", { y: "0%" }, { duration: 0 }),
            animate(".curtain-bottom", { y: "0%" }, { duration: 0 }),
            animate("#brand-text-solid", { clipPath: "inset(100% 0 0 0)" }, { duration: 0 }),
            animate("#brand-text-wireframe", { clipPath: "inset(100% 0 0 0)", opacity: 0 }, { duration: 0 }),
            animate(".grid-dots", { opacity: 0 }, { duration: 0 }),
            animate(".locations-bg", { opacity: 0, scale: 0.95 }, { duration: 0 }),
            animate(".flights-layer", { opacity: 0 }, { duration: 0 })
        ]);

        await new Promise(r => setTimeout(r, 100));

        // 2. Map & Planes Activation (Base layers)
        await Promise.all([
            animate(".locations-bg", { opacity: 0.6, scale: 1 }, { duration: 1.2, ease: "easeOut" }),
            animate(".flights-layer", { opacity: 1 }, { duration: 1.0, delay: 0.4 })
        ]);

        // 3. The Rising Horizon Reveal
        // The reveal happens invisibly, showing wireframe just ahead and solid just behind
        await Promise.all([
            // Wireframe reveal (slightly ahead of solid)
            animate("#brand-text-wireframe",
                {
                    clipPath: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
                    opacity: [0, 0.4, 0.6, 0]
                },
                { duration: 1.6, ease: "easeInOut", delay: 0.05 }
            ),
            // Solid red/blue reveal
            animate("#brand-text-solid",
                {
                    clipPath: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"],
                },
                { duration: 1.4, ease: "easeInOut" }
            )
        ]);

        // Hold for impact
        await new Promise(r => setTimeout(r, 400));

        // 4. Transition Out - Curtain Split (Standardized)
        if (onTransitionStart) onTransitionStart();

        const curtainEase = [0.77, 0, 0.175, 1]; // power4.inOut

        await Promise.all([
            // Dissolve content
            animate("#brand-text-solid", { opacity: 0, scale: 1.05, filter: "blur(20px)" }, { duration: 0.6 }),
            animate(".grid-dots", { opacity: 0 }, { duration: 0.6 }),
            animate(".locations-bg", { opacity: 0, scale: 1.1, filter: "blur(10px)" }, { duration: 0.8 }),
            animate(".flights-layer", { opacity: 0 }, { duration: 0.6 }),
            animate(".digital-overlay", { opacity: 0 }, { duration: 0.6 }),

            // Split curtains (Theater style)
            animate(".curtain-top", { y: "-100%" }, { duration: 1.0, ease: curtainEase, delay: 0.1 }),
            animate(".curtain-bottom", { y: "100%" }, { duration: 1.0, ease: curtainEase, delay: 0.1 }),

            // Fade out entire component
            animate(scope.current, { opacity: 0 }, { duration: 1.0, delay: 0.2 })
        ]);

        if (onComplete) onComplete();
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            runSequence();
        }
    }, [isMounted]);

    if (!isMounted) return null;

    return (
        <div
            ref={scope}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-auto bg-white"
            style={{
                opacity: 1,
                willChange: 'opacity'
            }}
        >
            {/* Curtains - Lowest z-index within the loader, covers site until split */}
            <div className="curtain-top absolute top-0 left-0 w-full h-1/2 bg-white z-10" />
            <div className="curtain-bottom absolute bottom-0 left-0 w-full h-1/2 bg-white z-10" />

            {/* Background Grid Landscape */}
            <div className="grid-dots absolute inset-0 z-20 flex items-center justify-center opacity-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                    }}
                />
            </div>

            {/* 1. Base Layer: World Map Image */}
            <div className="locations-bg absolute inset-0 z-10 opacity-0 overflow-hidden scale-[0.98] flex items-center justify-center">
                <img
                    src="/world-map-coloured.png"
                    alt="World Map"
                    className="w-full h-full object-contain opacity-70 "
                />
            </div>

            {/* 2. Over Map: Roaming Flights */}
            <div className="flights-layer absolute inset-0 z-20 pointer-events-none opacity-0">
                <RoamingFlights isVisible={isMounted} />
            </div>

            {/* Branding Container */}
            <div className="relative z-30 px-12 py-6">
                {/* 1. Wireframe State (Subtle gray stroke) */}
                <h1
                    id="brand-text-wireframe"
                    className="text-6xl md:text-9xl font-black font-outfit tracking-[-0.08em] uppercase select-none opacity-0 pointer-events-none"
                    style={{
                        WebkitTextStroke: '1px rgba(0,0,0,0.1)',
                        color: 'transparent',
                        filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.03))'
                    }}
                >
                    MIGRATEZONE
                </h1>

                {/* 2. Solid Brand State (Appears above beam) */}
                <div className="absolute inset-0 flex items-center justify-center px-12 py-6">
                    <h1
                        id="brand-text-solid"
                        className="text-6xl md:text-9xl font-black font-outfit tracking-[-0.08em] uppercase select-none flex items-baseline gap-1"
                    >
                        <span className="text-[#1f406d]" style={{ textShadow: '0 0 40px rgba(31,64,109,0.1)' }}>MIGRATE</span>
                        <span className="text-[#e41e25]" style={{ textShadow: '0 0 40px rgba(228,30,37,0.1)' }}>ZONE</span>
                    </h1>
                </div>
            </div>

            {/* HUD Elements */}
            <div className="digital-overlay absolute inset-0 pointer-events-none z-50">
                {/* Subtle digital noise - Multiplied for white */}
                <div
                    className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" /%3E%3C/svg%3E')",
                    }}
                />
            </div>
        </div>
    );
};

export default QuantumLoader;
