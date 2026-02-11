'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';

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
            animate(".grid-dots", { opacity: 0 }, { duration: 0 })
        ]);

        await new Promise(r => setTimeout(r, 100));

        // 2. Grid Activation
        await animate(".grid-dots", { opacity: 0.2 }, { duration: 0.6, ease: "easeOut" });

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
