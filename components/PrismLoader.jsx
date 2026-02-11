'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';

const PrismLoader = ({ onComplete, onTransitionStart }) => {
    const [scope, animate] = useAnimate();
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const hasRunRef = useRef(false);

    const runSequence = async () => {
        if (isAnimating || !isMounted || hasRunRef.current) return;
        hasRunRef.current = true;
        setIsAnimating(true);

        // Premium easing curves
        const appleEase = [0.23, 1, 0.32, 1];
        const spectralEase = [0.6, 0.05, 0.01, 0.9];
        const smoothEase = [0.25, 0.1, 0.25, 1];

        // Set all initial states synchronously to prevent flash
        await Promise.all([
            animate(".prism-bg", { opacity: 1 }, { duration: 0 }),
            animate(".prism-curtain", { y: "0%" }, { duration: 0 }),
            animate("#prism-sweep", { x: "-120%", opacity: 0 }, { duration: 0 }),
            animate("#brand-text-silver", {
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)"
            }, { duration: 0 }),
            animate("#brand-text-color", {
                opacity: 0,
                clipPath: "inset(0 100% 0 0)",
                filter: "blur(5px)"
            }, { duration: 0 }),
            animate("#glass-glint", { x: "-100%", opacity: 0 }, { duration: 0 }),
            animate("#bloom-flash", { opacity: 0 }, { duration: 0 })
        ]);

        // Small delay to ensure render
        await new Promise(r => setTimeout(r, 50));

        // 1. Silver Emergence - smoother, more gradual
        await animate("#brand-text-silver",
            {
                opacity: 0.4,
                scale: 1,
                y: 0,
                filter: "blur(0px)"
            },
            { duration: 1.2, ease: smoothEase }
        );

        // 2. The Prism Sweep, Color Reveal & Refraction
        await Promise.all([
            // Prism sweep with smoother travel
            animate("#prism-sweep",
                {
                    x: "240%",
                    opacity: [0, 0.8, 1, 0.8, 0]
                },
                { duration: 2.4, ease: spectralEase, delay: 0.1 }
            ),
            // Glass glint with smoother opacity curve
            animate("#glass-glint",
                {
                    x: "280%",
                    opacity: [0, 0.6, 0.9, 0.6, 0]
                },
                { duration: 2.0, ease: smoothEase, delay: 0.15 }
            ),
            // Color reveal with micro-scale bounce
            animate("#brand-text-color",
                {
                    clipPath: "inset(0 0% 0 0)",
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: [1, 1.015, 1.005, 1]
                },
                { duration: 2.4, ease: spectralEase, delay: 0.1 }
            ),
            // Silver fadeout with slight scale
            animate("#brand-text-silver",
                {
                    opacity: 0,
                    scale: 1.03,
                    filter: "blur(8px)"
                },
                { duration: 1.6, ease: smoothEase, delay: 0.3 }
            )
        ]);

        // 3. Atmospheric Pulse - subtle breathing effect
        await animate("#brand-text-color",
            {
                scale: [1, 1.008, 1],
                filter: "brightness(1.08)"
            },
            { duration: 1.0, ease: smoothEase }
        );

        // Hold state
        await new Promise(r => setTimeout(r, 800));

        // 4. Transition Out - Sequential Curtain Reveal (TextLoader Style)
        if (onTransitionStart) onTransitionStart();

        const curtainEase = [0.77, 0, 0.175, 1]; // power4.inOut equivalent

        // Phase A: Dissolve the brand content entirely
        await Promise.all([
            animate("#bloom-flash", { opacity: [0, 0.4, 0] }, { duration: 1.2, ease: "easeInOut" }),
            animate("#brand-text-color", {
                opacity: 0,
                scale: 1.05,
                filter: "blur(40px) brightness(1.5)"
            }, { duration: 0.8, ease: smoothEase }),
            animate(".prism-bg", { opacity: 0, filter: "blur(30px)" }, { duration: 1.0 }),
            animate("p", { opacity: 0, y: 10 }, { duration: 0.6 }), // Sub-text
            animate(".digital-overlay", { opacity: 0 }, { duration: 0.5 })
        ]);

        // Phase B: The Final Reveal - Split the solid curtains to reveal the site
        // This is identical to the TextLoader splitReveal mechanism
        await Promise.all([
            animate(".curtain-top",
                { y: "-100%" },
                { duration: 1.4, ease: curtainEase }
            ),
            animate(".curtain-bottom",
                { y: "100%" },
                { duration: 1.4, ease: curtainEase }
            )
        ]);

        if (onComplete) onComplete();
        setIsAnimating(false);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted && !hasRunRef.current) {
            runSequence();
        }
    }, [isMounted]);

    return (
        <div
            ref={scope}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-auto bg-[#f3f4f6]"
            style={{
                opacity: 1,
                willChange: 'opacity'
            }}
        >
            {/* Split Curtains */}
            <div
                className="prism-curtain curtain-top absolute top-0 left-0 w-full h-1/2 bg-[#f3f4f6] z-10"
                style={{ willChange: 'transform' }}
            />
            <div
                className="prism-curtain curtain-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#f3f4f6] z-10"
                style={{ willChange: 'transform' }}
            />

            {/* Bloom Flash Overlay - Prism Energy Surge */}
            <div
                id="bloom-flash"
                className="absolute inset-0 z-[90] bg-[#1f406d]/5 pointer-events-none"
                style={{
                    opacity: 0,
                    willChange: 'opacity'
                }}
            />

            {/* Atmospheric Background */}
            <div className="prism-bg absolute inset-0 z-20" style={{ willChange: 'opacity, transform, filter' }}>
                {/* Deeper Radial Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,64,109,0.05)_0%,transparent_70%)]" />

                {/* Optimized bokeh particles - Darker for visibility on white */}
                {isMounted && [...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-[#1f406d]"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 1.5 + 0.8,
                            opacity: 0.015
                        }}
                        animate={{
                            y: [null, (Math.random() * 100) + "%"],
                            opacity: [0.015, 0.04, 0.015]
                        }}
                        transition={{
                            duration: Math.random() * 12 + 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 2
                        }}
                        style={{
                            width: "120px",
                            height: "120px",
                            filter: "blur(50px)",
                            willChange: 'transform, opacity'
                        }}
                    />
                ))}
            </div>

            {/* High-End Prism Container */}
            <div className="relative z-30 flex flex-col items-center">

                {/* The Branding Stack */}
                <div className="relative px-12 py-6">
                    {/* 1. Base Silver State */}
                    <h1
                        id="brand-text-silver"
                        className="text-6xl md:text-9xl font-black font-outfit tracking-[-0.08em] uppercase text-gray-400 select-none"
                        style={{
                            background: "linear-gradient(135deg, #777 0%, #bbb 50%, #777 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: "drop-shadow(0 0 10px rgba(0,0,0,0.08))",
                            opacity: 0,
                            willChange: 'opacity, transform, filter'
                        }}
                    >
                        MIGRATEZONE
                    </h1>

                    {/* 2. Color State */}
                    <div className="absolute inset-0 flex items-center justify-center px-12 py-6 text-center">
                        <h1
                            id="brand-text-color"
                            className="text-6xl md:text-9xl font-black font-outfit tracking-[-0.08em] uppercase select-none flex items-baseline gap-1"
                            style={{
                                opacity: 0,
                                willChange: 'opacity, transform, filter, clip-path'
                            }}
                        >
                            <span className="text-[#1f406d]" style={{ textShadow: '0 0 30px rgba(31,64,109,0.15)' }}>MIGRATE</span>
                            <span className="text-[#e41e25]" style={{ textShadow: '0 0 30px rgba(228,30,37,0.15)' }}>ZONE</span>
                        </h1>
                    </div>

                    {/* 3. Prism Sweep - Enhanced spectrum */}
                    <motion.div
                        id="prism-sweep"
                        className="absolute top-0 bottom-0 w-72 z-40 pointer-events-none"
                        style={{
                            background: "linear-gradient(90deg, transparent 0%, rgba(138,43,226,0.12) 8%, rgba(75,0,130,0.18) 18%, rgba(0,0,255,0.25) 30%, rgba(255,255,255,1) 50%, rgba(255,255,0,0.18) 70%, rgba(255,127,0,0.12) 82%, rgba(255,0,0,0.1) 92%, transparent 100%)",
                            boxShadow: "0 0 200px rgba(255,255,255,0.7)",
                            filter: "blur(25px) brightness(1.3) contrast(1.1) saturate(1.8)",
                            opacity: 0,
                            willChange: 'transform, opacity'
                        }}
                    />

                    {/* 4. Glass Glint */}
                    <motion.div
                        id="glass-glint"
                        className="absolute top-0 bottom-0 w-2 z-40 pointer-events-none"
                        style={{
                            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.95), transparent)",
                            boxShadow: "0 0 40px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)",
                            filter: "blur(1.5px)",
                            opacity: 0,
                            willChange: 'transform, opacity'
                        }}
                    />
                </div>

                {/* Sub-text - Smoother appearance */}
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "1em", y: 10 }}
                    animate={{ opacity: 0.2, letterSpacing: "0.5em", y: 0 }}
                    transition={{ delay: 2.0, duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-black/40 text-[10px] md:text-sm font-light uppercase mt-6"
                >
                    Precision • Reliability • Excellence
                </motion.p>
            </div>

            {/* Premium Digital Overlays - Optimized */}
            <div className="digital-overlay absolute inset-0 pointer-events-none z-50">
                {/* Scanlines - reduced opacity for smoothness */}
                <div
                    className="absolute inset-0 opacity-[0.01]"
                    style={{
                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)",
                        mixBlendMode: 'multiply'
                    }}
                />

                {/* Subtle grain */}
                <div
                    className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" /%3E%3C/svg%3E')",
                        backgroundSize: '200px 200px'
                    }}
                />

                {/* Chromatic aberration - very subtle */}
                <div className="absolute inset-0 mix-blend-screen opacity-[0.06]">
                    <div className="absolute inset-0 bg-red-500/30 translate-x-[0.3px]" style={{ filter: 'blur(0.3px)' }} />
                    <div className="absolute inset-0 bg-blue-500/30 -translate-x-[0.3px]" style={{ filter: 'blur(0.3px)' }} />
                </div>
            </div>
        </div>
    );
};

export default PrismLoader;