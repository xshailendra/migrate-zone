'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';

const PlaneCloudLoader = ({ onComplete, onTransitionStart }) => {
    const [scope, animate] = useAnimate();
    const [isMounted, setIsMounted] = useState(false);
    const hasRunRef = useRef(false);

    const runSequence = async () => {
        if (!isMounted || hasRunRef.current) return;
        hasRunRef.current = true;

        const luxuryEase = [0.19, 1.0, 0.22, 1.0];
        const smoothEase = [0.25, 0.1, 0.25, 1];

        // Set initial states
        await Promise.all([
            animate("#plane", { x: "-15%", y: "0%", opacity: 1 }, { duration: 0 }),
            animate("#contrail", { scaleX: 0, opacity: 0 }, { duration: 0 }),
            animate(".cloud-layer", { x: "0%", opacity: 0 }, { duration: 0 }),
            animate("#brand-text", { opacity: 0, filter: "blur(20px)", scale: 0.95 }, { duration: 0 }),
            animate("#tagline", { opacity: 0, y: 20 }, { duration: 0 }),
            animate("#departure-pin", { scale: 0, opacity: 0 }, { duration: 0 }),
            animate("#arrival-pin", { scale: 0, opacity: 0 }, { duration: 0 })
        ]);

        await new Promise(r => setTimeout(r, 300));

        // 1. Clouds fade in with parallax
        await Promise.all([
            animate(".cloud-back", { opacity: 0.15, x: "0%" }, { duration: 1.5, ease: smoothEase }),
            animate(".cloud-mid", { opacity: 0.25, x: "0%" }, { duration: 1.5, ease: smoothEase, delay: 0.1 }),
            animate(".cloud-front", { opacity: 0.4, x: "0%" }, { duration: 1.5, ease: smoothEase, delay: 0.2 })
        ]);

        // 2. Departure pin drops
        await animate("#departure-pin",
            { scale: [0, 1.2, 1], opacity: 1, y: [0, 5, 0] },
            { duration: 0.6, ease: luxuryEase }
        );

        await new Promise(r => setTimeout(r, 200));

        // 3. Plane journey with contrail
        await Promise.all([
            // Plane flies across in elegant arc
            animate("#plane",
                {
                    x: "115%",
                    y: ["0%", "-8%", "-5%", "0%"],
                    rotate: [0, -2, -1, 0]
                },
                { duration: 3.5, ease: luxuryEase }
            ),
            // Contrail grows behind plane
            animate("#contrail",
                { scaleX: 1, opacity: [0, 0.6, 0.6, 0.4] },
                { duration: 3.5, ease: luxuryEase, delay: 0.2 }
            ),
            // Clouds drift with parallax during flight
            animate(".cloud-back", { x: "15%" }, { duration: 3.5, ease: "linear" }),
            animate(".cloud-mid", { x: "25%" }, { duration: 3.5, ease: "linear" }),
            animate(".cloud-front", { x: "35%" }, { duration: 3.5, ease: "linear" })
        ]);

        // 4. Arrival pin drops
        await animate("#arrival-pin",
            { scale: [0, 1.2, 1], opacity: 1, y: [0, 5, 0] },
            { duration: 0.6, ease: luxuryEase }
        );

        await new Promise(r => setTimeout(r, 100));

        // 5. Clouds part dramatically to reveal brand
        await Promise.all([
            animate(".cloud-back",
                { x: "-100%", opacity: 0 },
                { duration: 1.8, ease: luxuryEase }
            ),
            animate(".cloud-mid",
                { x: "100%", opacity: 0 },
                { duration: 1.8, ease: luxuryEase, delay: 0.1 }
            ),
            animate(".cloud-front",
                { x: "-120%", opacity: 0 },
                { duration: 1.8, ease: luxuryEase, delay: 0.2 }
            ),
            animate("#contrail",
                { opacity: 0, scaleY: 0.5 },
                { duration: 1.2, ease: "easeOut" }
            ),
            animate("#plane",
                { opacity: 0, scale: 0.8 },
                { duration: 1.0, ease: "easeOut" }
            ),
            animate("#departure-pin",
                { opacity: 0, scale: 0.5 },
                { duration: 0.8, ease: "easeOut" }
            ),
            animate("#arrival-pin",
                { opacity: 0, scale: 0.5 },
                { duration: 0.8, ease: "easeOut" }
            )
        ]);

        // 6. Brand emerges with elegant reveal
        await Promise.all([
            animate("#brand-text",
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                    y: [20, 0]
                },
                { duration: 1.5, ease: luxuryEase }
            ),
            animate("#tagline",
                { opacity: 0.7, y: 0 },
                { duration: 1.2, ease: luxuryEase, delay: 0.4 }
            )
        ]);

        // 7. Hold for impact
        await new Promise(r => setTimeout(r, 1200));

        // 8. Elegant exit
        if (onTransitionStart) onTransitionStart();

        await animate(scope.current,
            { opacity: 0, scale: 1.05 },
            { duration: 1.2, ease: smoothEase }
        );

        if (onComplete) onComplete();
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
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#162842]"
            style={{ willChange: 'opacity, transform' }}
        >
            {/* Atmospheric Background */}
            <div className="absolute inset-0">
                {/* Subtle radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />

                {/* Ambient stars/particles */}
                {isMounted && [...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.3,
                            opacity: Math.random() * 0.3 + 0.1
                        }}
                        animate={{
                            opacity: [null, Math.random() * 0.4 + 0.2, null],
                            scale: [null, Math.random() * 0.6 + 0.4, null]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                        style={{
                            width: "2px",
                            height: "2px",
                            willChange: 'opacity, transform'
                        }}
                    />
                ))}
            </div>

            {/* Journey Path Markers */}
            <div className="absolute inset-0 flex items-center justify-between px-[15%] pointer-events-none">
                {/* Departure Pin */}
                <div id="departure-pin" style={{ willChange: 'transform, opacity' }}>
                    <div className="relative">
                        <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-lg shadow-blue-500/50" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white animate-pulse" />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-blue-200 font-semibold tracking-wide">
                            DEPARTURE
                        </div>
                    </div>
                </div>

                {/* Arrival Pin */}
                <div id="arrival-pin" style={{ willChange: 'transform, opacity' }}>
                    <div className="relative">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white shadow-lg shadow-emerald-500/50" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white animate-pulse" />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-emerald-200 font-semibold tracking-wide">
                            ARRIVAL
                        </div>
                    </div>
                </div>
            </div>

            {/* Cloud Layers with Parallax */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Back Layer */}
                <div className="cloud-layer cloud-back absolute inset-0" style={{ willChange: 'transform, opacity' }}>
                    <svg className="absolute top-[20%] left-[5%] w-96 h-48 opacity-60" viewBox="0 0 400 200">
                        <path d="M50,100 Q80,60 120,80 T200,90 Q250,70 300,100 T380,110 L380,200 L50,200 Z" fill="url(#cloudGrad1)" />
                        <defs>
                            <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="absolute top-[60%] right-[10%] w-80 h-40 opacity-50" viewBox="0 0 400 200">
                        <path d="M40,120 Q70,80 110,100 T180,110 Q230,90 280,120 T360,130 L360,200 L40,200 Z" fill="url(#cloudGrad2)" />
                        <defs>
                            <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Mid Layer */}
                <div className="cloud-layer cloud-mid absolute inset-0" style={{ willChange: 'transform, opacity' }}>
                    <svg className="absolute top-[35%] left-[15%] w-[500px] h-56" viewBox="0 0 500 220">
                        <path d="M60,130 Q100,80 150,100 T250,110 Q310,85 370,115 T460,125 L460,220 L60,220 Z" fill="url(#cloudGrad3)" />
                        <defs>
                            <linearGradient id="cloudGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#f0f9ff" stopOpacity="0.15" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="absolute top-[50%] right-[5%] w-[450px] h-48" viewBox="0 0 450 200">
                        <path d="M50,110 Q90,70 140,90 T220,100 Q270,80 330,110 T420,120 L420,200 L50,200 Z" fill="url(#cloudGrad4)" />
                        <defs>
                            <linearGradient id="cloudGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Front Layer */}
                <div className="cloud-layer cloud-front absolute inset-0" style={{ willChange: 'transform, opacity' }}>
                    <svg className="absolute top-[25%] right-[20%] w-[600px] h-64" viewBox="0 0 600 250">
                        <path d="M70,140 Q120,85 180,110 T290,120 Q360,90 440,130 T560,140 L560,250 L70,250 Z" fill="url(#cloudGrad5)" />
                        <defs>
                            <linearGradient id="cloudGrad5" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="absolute top-[55%] left-[10%] w-[550px] h-56" viewBox="0 0 550 220">
                        <path d="M60,120 Q110,75 170,95 T270,105 Q340,80 410,120 T520,130 L520,220 L60,220 Z" fill="url(#cloudGrad6)" />
                        <defs>
                            <linearGradient id="cloudGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Plane with Contrail */}
            <div className="absolute inset-0 flex items-center pointer-events-none">
                <div className="relative w-full h-24">
                    {/* Contrail */}
                    <div
                        id="contrail"
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-2 origin-left"
                        style={{
                            width: '100%',
                            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 80%, rgba(255,255,255,0) 100%)',
                            filter: 'blur(8px)',
                            willChange: 'transform, opacity'
                        }}
                    />

                    {/* Plane */}
                    <div
                        id="plane"
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-2xl">
                            {/* Plane body */}
                            <path d="M20,50 L50,40 L80,50 L50,52 Z" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1.5" />
                            {/* Wings */}
                            <path d="M35,50 L30,45 L30,55 Z" fill="#c7d2fe" stroke="#818cf8" strokeWidth="1" />
                            <path d="M65,50 L70,45 L70,55 Z" fill="#c7d2fe" stroke="#818cf8" strokeWidth="1" />
                            {/* Tail */}
                            <path d="M20,50 L15,48 L15,52 Z" fill="#a5b4fc" stroke="#818cf8" strokeWidth="1" />
                            {/* Window highlights */}
                            <circle cx="45" cy="48" r="2" fill="#ffffff" opacity="0.8" />
                            <circle cx="55" cy="48" r="2" fill="#ffffff" opacity="0.8" />
                            {/* Engine glow */}
                            <circle cx="75" cy="50" r="4" fill="#fef08a" opacity="0.6" filter="blur(2px)" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Brand Reveal */}
            <div className="relative z-30 flex flex-col items-center text-center px-8">
                <h1
                    id="brand-text"
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #ffffff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 60px rgba(255,255,255,0.3)",
                        letterSpacing: "-0.05em",
                        willChange: 'opacity, transform, filter',
                        opacity: 0
                    }}
                >
                    <span className="inline-block" style={{ color: '#3b82f6', WebkitTextFillColor: '#3b82f6', textShadow: '0 0 40px rgba(59,130,246,0.4)' }}>MIGRATE</span>
                    <span className="inline-block" style={{ color: '#ef4444', WebkitTextFillColor: '#ef4444', textShadow: '0 0 40px rgba(239,68,68,0.4)' }}>ZONE</span>
                </h1>

                <p
                    id="tagline"
                    className="text-blue-100 text-sm md:text-base font-light uppercase tracking-[0.3em] mt-6"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        willChange: 'opacity, transform',
                        opacity: 0
                    }}
                >
                    Your Journey to New Horizons
                </p>
            </div>

            {/* Premium overlay effects */}
            <div className="absolute inset-0 pointer-events-none z-50">
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

                {/* Film grain */}
                <div
                    className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" /%3E%3C/svg%3E')",
                        backgroundSize: '200px 200px'
                    }}
                />
            </div>

            {/* Font preload */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
        </div>
    );
};

export default PlaneCloudLoader;