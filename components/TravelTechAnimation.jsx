'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

const TravelTechAnimation = ({ onComplete, onTransitionStart }) => {
    const [scope, animate] = useAnimate();
    const [isAnimating, setIsAnimating] = useState(false);

    const runSequence = async () => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Reset positions
        await animate("#plane-pivot", { rotate: 0 }, { duration: 0 });
        await animate("#plane-wrapper", { x: 0, y: 0, rotate: 90, scale: 1, filter: "blur(0px)", opacity: 1 }, { duration: 0 });
        await animate("#brand-text", { opacity: 0, scale: 0.8, filter: "blur(20px)" }, { duration: 0 });
        await animate(".curtain-top", { y: "0%" }, { duration: 0 });
        await animate(".curtain-bottom", { y: "0%" }, { duration: 0 });

        // 1. Text Entry
        await animate("#brand-text",
            { opacity: 1, scale: 1, filter: "blur(0px)" },
            { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
        );

        // 2. Smooth Orbit - Pointing Forward (trail draws itself via SVG animation)
        await animate("#plane-pivot",
            { rotate: 360 },
            { duration: 4, ease: [0.45, 0, 0.55, 1] }
        );

        // 3. Takeoff Prep - Staying horizontal but banking slightly
        await animate("#plane-wrapper", { rotate: 80 }, { duration: 0.5, ease: "backOut" });

        // Signal transition start (header reveal etc)
        if (onTransitionStart) onTransitionStart();

        // 4. Blast Off horizontally with Momentum
        await Promise.all([
            animate("#plane-wrapper",
                { x: 2000, y: -200, scale: 4, opacity: 0, filter: "blur(30px)" },
                { duration: 0.8, ease: [0.32, 0, 0.67, 0] }
            ),
            animate("#trail",
                { opacity: 0 },
                { duration: 0.6, ease: "easeIn" }
            ),
            animate("#brand-text", { opacity: 0, scale: 1.15, filter: "blur(15px)" }, { duration: 0.8, ease: "easeIn" }),
            // Split Curtains
            animate(".curtain-top", { y: "-100%" }, { duration: 0.8, delay: 0.1, ease: [0.645, 0.045, 0.355, 1] }),
            animate(".curtain-bottom", { y: "100%" }, { duration: 0.8, delay: 0.1, ease: [0.645, 0.045, 0.355, 1] })
        ]);

        if (onComplete) onComplete();
        setIsAnimating(false);
    };

    useEffect(() => {
        runSequence();
    }, []);

    return (
        <div ref={scope} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none select-none">
            {/* Split Curtains */}
            <div className="curtain-top absolute top-0 left-0 w-full h-1/2 bg-[#f3f4f6]" />
            <div className="curtain-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#f3f4f6]" />

            {/* Ambient Lighting Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)] z-0" />

            {/* MIGRATEZONE Text */}
            <motion.div
                id="brand-text"
                className="relative z-10 flex items-baseline gap-1"
                initial={{ opacity: 0, scale: 0.8 }}
                style={{ filter: "blur(20px)" }}
            >
                <h1 className="text-5xl md:text-8xl font-black font-oxanium tracking-tighter uppercase">
                    <span className="text-[#1f406d]">MIGRATE</span>
                    <span className="text-[#e41e25] italic">ZONE</span>
                </h1>
            </motion.div>

            {/* Animation Overlay Environment */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    id="plane-pivot"
                    className="relative w-[650px] h-[650px] flex items-center justify-center"
                >
                    {/* Dynamic Curved Trail Effect */}
                    <motion.div
                        id="trail"
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0 }}
                    >
                        {/* SVG Curved Trail */}
                        <svg
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            width="650"
                            height="650"
                            viewBox="0 0 650 650"
                            style={{ overflow: 'visible' }}
                        >
                            <defs>
                                {/* Gradient for main trail */}
                                <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#e41e25" stopOpacity="0" />
                                    <stop offset="30%" stopColor="#e41e25" stopOpacity="0.3" />
                                    <stop offset="70%" stopColor="#e41e25" stopOpacity="0.7" />
                                    <stop offset="100%" stopColor="#e41e25" stopOpacity="0.9" />
                                </linearGradient>

                                {/* Gradient for glow */}
                                <linearGradient id="trailGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#e41e25" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#ff4d54" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#e41e25" stopOpacity="0.6" />
                                </linearGradient>

                                {/* Blue accent gradient */}
                                <linearGradient id="trailBlue" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1f406d" stopOpacity="0" />
                                    <stop offset="60%" stopColor="#1f406d" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#1f406d" stopOpacity="0.5" />
                                </linearGradient>
                            </defs>

                            {/* Outer glow layer */}
                            <circle
                                cx="325"
                                cy="325"
                                r="325"
                                fill="none"
                                stroke="url(#trailGlow)"
                                strokeWidth="8"
                                strokeDasharray="2042"
                                strokeDashoffset="2042"
                                strokeLinecap="round"
                                filter="blur(4px)"
                                opacity="0.6"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from="2042"
                                    to="0"
                                    dur="4s"
                                    begin="1s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Main trail */}
                            <circle
                                cx="325"
                                cy="325"
                                r="325"
                                fill="none"
                                stroke="url(#trailGradient)"
                                strokeWidth="4"
                                strokeDasharray="2042"
                                strokeDashoffset="2042"
                                strokeLinecap="round"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from="2042"
                                    to="0"
                                    dur="4s"
                                    begin="1s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Core bright line */}
                            <circle
                                cx="325"
                                cy="325"
                                r="325"
                                fill="none"
                                stroke="#ff4d54"
                                strokeWidth="1.5"
                                strokeDasharray="2042"
                                strokeDashoffset="2042"
                                strokeLinecap="round"
                                opacity="0.8"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from="2042"
                                    to="0"
                                    dur="4s"
                                    begin="1s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Blue accent trail */}
                            <circle
                                cx="325"
                                cy="325"
                                r="328"
                                fill="none"
                                stroke="url(#trailBlue)"
                                strokeWidth="3"
                                strokeDasharray="2060"
                                strokeDashoffset="2060"
                                strokeLinecap="round"
                                filter="blur(2px)"
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from="2060"
                                    to="0"
                                    dur="4s"
                                    begin="1s"
                                    fill="freeze"
                                />
                            </circle>

                            {/* Animated particles along the trail */}
                            {[...Array(8)].map((_, i) => (
                                <circle
                                    key={i}
                                    cx="325"
                                    cy="0"
                                    r="2"
                                    fill="#e41e25"
                                    opacity="0"
                                >
                                    <animateMotion
                                        path="M 325,0 A 325,325 0 1,1 325,0"
                                        dur="4s"
                                        begin={`${1 + i * 0.15}s`}
                                        fill="freeze"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;0.8;0"
                                        dur="0.8s"
                                        begin={`${1 + i * 0.15}s`}
                                        fill="freeze"
                                    />
                                    <animate
                                        attributeName="r"
                                        values="2;3;1"
                                        dur="0.8s"
                                        begin={`${1 + i * 0.15}s`}
                                        fill="freeze"
                                    />
                                </circle>
                            ))}
                        </svg>
                    </motion.div>

                    {/* The Plane - Enhanced with Brand Colors */}
                    <motion.div
                        id="plane-wrapper"
                        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ rotate: 90 }}
                        style={{ rotate: 90 }}
                    >
                        <div className="relative group filter drop-shadow-[0_12px_24px_rgba(31,64,109,0.3)]">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Main Body - Navy Blue with gradient */}
                                <defs>
                                    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#2c5282" />
                                        <stop offset="50%" stopColor="#1f406d" />
                                        <stop offset="100%" stopColor="#1a365d" />
                                    </linearGradient>

                                    <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#e41e25" />
                                        <stop offset="100%" stopColor="#ff4d54" />
                                    </linearGradient>

                                    <radialGradient id="glowGradient">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                    </radialGradient>
                                </defs>

                                {/* Shadow/Depth layer */}
                                <path
                                    d="M21 16L13 11L13 3C13 2.17 12.33 1.5 11.5 1.5C10.67 1.5 10 2.17 10 3L10 11L2 16L2 17.5L10 15.5L10 20.5L8 22L8 23L11.5 22.25L15 23L15 22L13 20.5L13 15.5L21 17.5L21 16Z"
                                    fill="#0a1929"
                                    opacity="0.2"
                                    transform="translate(0.5, 0.5)"
                                />

                                {/* Main Body with Gradient */}
                                <path
                                    d="M21 16L13 11L13 3C13 2.17 12.33 1.5 11.5 1.5C10.67 1.5 10 2.17 10 3L10 11L2 16L2 17.5L10 15.5L10 20.5L8 22L8 23L11.5 22.25L15 23L15 22L13 20.5L13 15.5L21 17.5L21 16Z"
                                    fill="url(#bodyGradient)"
                                />

                                {/* Red Wing Accent - Vibrant */}
                                <path
                                    d="M13 11L21 16V17L13 13V11Z"
                                    fill="url(#wingGradient)"
                                />

                                {/* Left wing accent */}
                                <path
                                    d="M10 11L2 16V17L10 13V11Z"
                                    fill="#e41e25"
                                    fillOpacity="0.7"
                                />

                                {/* Glossy Highlight - Top */}
                                <path
                                    d="M11.5 1.5C10.67 1.5 10 2.17 10 3V8L11.5 7L13 8V3C13 2.17 12.33 1.5 11.5 1.5Z"
                                    fill="white"
                                    fillOpacity="0.3"
                                />

                                {/* Sharp Reflection on Nose */}
                                <ellipse
                                    cx="11.5"
                                    cy="3"
                                    rx="1"
                                    ry="2"
                                    fill="white"
                                    fillOpacity="0.5"
                                />

                                {/* Cockpit Window */}
                                <circle
                                    cx="11.5"
                                    cy="6"
                                    r="1.2"
                                    fill="#64b5f6"
                                    fillOpacity="0.6"
                                />
                                <circle
                                    cx="11.5"
                                    cy="6"
                                    r="0.8"
                                    fill="white"
                                    fillOpacity="0.4"
                                />

                                {/* Edge highlights for 3D effect */}
                                <path
                                    d="M13 11L13 15.5L21 17.5V16.5L13 11.5V11Z"
                                    fill="white"
                                    fillOpacity="0.15"
                                />
                            </svg>

                            {/* Enhanced Heat Distortion with brand colors */}
                            <motion.div
                                className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-2 h-10"
                                animate={{
                                    height: [8, 16, 8],
                                    opacity: [0.4, 0.7, 0.4],
                                    scaleX: [1, 1.2, 1]
                                }}
                                transition={{ repeat: Infinity, duration: 0.15 }}
                            >
                                <div className="w-full h-full bg-gradient-to-b from-[#e41e25]/70 via-[#ff4d54]/50 to-transparent blur-[3px]" />
                            </motion.div>

                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 -z-10"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <div className="w-full h-full bg-[radial-gradient(circle,rgba(228,30,37,0.4)_0%,transparent_70%)] blur-xl" />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default TravelTechAnimation;