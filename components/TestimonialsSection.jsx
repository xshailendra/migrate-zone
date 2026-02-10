'use client';

import React, { useState, useRef, useEffect, useMemo } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    animate,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Training SSASIT",
        review:
            "The team was very professional, informative, and supportive throughout the process. Highly recommended.",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "PATEL JINESH",
        review:
            "A friend recommended Migrate Zone to me. I got the exact guidance I needed for the Australia Visitor Visa.",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Pratik Mahant",
        review:
            "Migratezone gives the best advice and service. The team ensured my entire process went smoothly.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Harsha Kawde (Harshu)",
        review:
            "I like the growth opportunities offered in Migrate Zone. A great place to gain experience.",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop",
        rating: 5,
    },
    {
        name: "Bhumi Raulji",
        review:
            "Finally got my UK work visa after years of trying. Thank you Migrate Zone team!",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
        rating: 5,
    },
];

export default function TestimonialsSection() {
    const infiniteTestimonials = useMemo(
        () => [...testimonials, ...testimonials, ...testimonials],
        []
    );

    const [activeIndex, setActiveIndex] = useState(testimonials.length);
    const [viewportWidth, setViewportWidth] = useState(0);
    const containerRef = useRef(null);

    const [hasMounted, setHasMounted] = useState(false);

    const avatarWidth = 300;
    const centerY = 225;
    const amplitude = 120;

    useEffect(() => {
        setHasMounted(true);
        const updateWidth = () => {
            if (containerRef.current) {
                setViewportWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const trackX = useMotionValue(0);
    const isJumping = useRef(false);

    const calculateX = (index) => {
        const center = viewportWidth / 2;
        const avatarCenter = index * avatarWidth + avatarWidth / 2;
        return center - avatarCenter;
    };

    const animateTo = (index, instant = false) => {
        const targetX = calculateX(index);
        if (instant) return trackX.set(targetX);

        animate(trackX, targetX, {
            type: "spring",
            stiffness: 70,
            damping: 20,
            mass: 0.8,
        });
    };

    const nextReview = () => {
        if (!isJumping.current) setActiveIndex((p) => p + 1);
    };
    const prevReview = () => {
        if (!isJumping.current) setActiveIndex((p) => p - 1);
    };

    useEffect(() => {
        const interval = setInterval(nextReview, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const baseLen = testimonials.length;

        animateTo(activeIndex);

        setTimeout(() => {
            if (activeIndex >= baseLen * 2 || activeIndex < baseLen) {
                isJumping.current = true;
                const nextIndex = (activeIndex % baseLen) + baseLen;
                setActiveIndex(nextIndex);
                animateTo(nextIndex, true);
                setTimeout(() => {
                    isJumping.current = false;
                }, 60);
            }
        }, 800);
    }, [activeIndex, viewportWidth]);

    const pathData = useMemo(() => {
        if (!hasMounted) return "";
        const total = infiniteTestimonials.length * avatarWidth;
        const points = [];
        const resolution = 10;

        for (let x = 0; x <= total; x += avatarWidth / resolution) {
            const y =
                centerY + Math.sin((x / avatarWidth) * Math.PI) * amplitude;
            points.push(`${x},${y}`);
        }

        return `M${points.join(" L")}`;
    }, [infiniteTestimonials.length, avatarWidth, centerY, amplitude, hasMounted]);

    const activeTestimonial =
        infiniteTestimonials[activeIndex] || infiniteTestimonials[0];

    if (!hasMounted) return null;

    return (
        <section className="py-24 bg-transparent overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
                <h2 className="text-6xl font-black text-[#1f406d] uppercase tracking-tight mb-12">
                    Our Client's Say
                </h2>

                {/* Moving wave container */}
                <div
                    ref={containerRef}
                    className="relative h-[480px] mb-20 overflow-hidden"
                >
                    <motion.div
                        style={{ x: trackX }}
                        className="absolute top-0 left-0 h-full flex items-center"
                    >
                        {/* SVG Wavy Line */}
                        <svg
                            className="absolute h-full w-auto"
                            viewBox={`0 0 ${infiniteTestimonials.length * avatarWidth
                                } 450`}
                            style={{
                                width: infiniteTestimonials.length * avatarWidth,
                            }}
                        >
                            <path
                                d={pathData}
                                fill="none"
                                stroke="#acadafff"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                className="opacity-100"
                            />
                            {/* ZERO-CROSSING BLACK DOTS */}
                            {infiniteTestimonials.map((_, i) => {
                                const bx = i * avatarWidth;
                                const by = centerY;
                                return (
                                    <circle
                                        key={`dot-${i}`}
                                        cx={bx}
                                        cy={by}
                                        r="5"
                                        fill="black"
                                    />
                                );
                            })}
                        </svg>

                        {/* AVATARS */}
                        <div
                            className="relative h-full"
                            style={{
                                width: infiniteTestimonials.length * avatarWidth,
                            }}
                        >
                            {infiniteTestimonials.map((item, index) => {
                                const isActive = activeIndex === index - 2;
                                const x = index * avatarWidth + avatarWidth / 2;
                                const y = centerY + Math.sin((x / avatarWidth) * Math.PI) * amplitude;

                                return (
                                    <motion.div
                                        key={index}
                                        animate={{
                                            scale: isActive ? 1.3 : 0.8,
                                            zIndex: isActive ? 50 : 10,
                                        }}
                                        onClick={() => setActiveIndex(index)}
                                        className="absolute cursor-pointer"
                                        style={{
                                            left: x,
                                            top: y,
                                            translateX: "-50%",
                                            translateY: "-50%",
                                        }}
                                    >
                                        <div className="relative isolate group">
                                            {/* OPAQUE WHITE MASK - Hides the line behind perfectly */}
                                            <div className="absolute -inset-[15px] rounded-full bg-white z-0" />

                                            {/* WRAPPER FOR SEMI-TRANSPARENCY & FILTERS */}
                                            <motion.div
                                                animate={{
                                                    opacity: isActive ? 1 : 0.5,
                                                    filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                                                }}
                                                className="relative z-10"
                                            >
                                                {/* ACTIVE STATE PREMIUM "HIGH-TECH HALO" */}
                                                <AnimatePresence mode="wait">
                                                    {isActive && (
                                                        <motion.div
                                                            key="halo"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="absolute inset-0 z-0"
                                                        >
                                                            {/* ATMOSPHERIC GLOW */}
                                                            <motion.div
                                                                animate={{ opacity: [0.3, 0.5, 0.3] }}
                                                                transition={{
                                                                    duration: 4,
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut"
                                                                }}
                                                                className="absolute -inset-[20px] rounded-full bg-red-500/10 blur-xl z-10"
                                                            />

                                                            {/* SOLID INNER RING */}
                                                            <motion.div
                                                                initial={{ scale: 0.8, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                className="absolute -inset-[10px] rounded-full border border-red-500 z-30"
                                                            />

                                                            {/* TECH ORBITAL (ROTATING DASH) */}
                                                            <motion.div
                                                                initial={{ rotate: 0 }}
                                                                animate={{ rotate: 360 }}
                                                                transition={{
                                                                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                                                                }}
                                                                className="absolute -inset-[15px] rounded-full border border-dashed border-red-400/50 z-20"
                                                            />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* AVATAR IMAGE */}
                                                <div
                                                    className={`relative z-20 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 ${isActive ? "border-transparent" : "border-gray-200"
                                                        } bg-white shadow-sm`}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}


                        </div>
                    </motion.div>

                    <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
                </div>

                {/* Review text section */}
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(activeTestimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        className="fill-red-600 text-red-600"
                                    />
                                ))}
                            </div>

                            <p className="text-xl md:text-2xl font-semibold italic text-[#1f406d] mb-4 leading-relaxed">
                                "{activeTestimonial.review}"
                            </p>

                            <h4 className="text-[#1f406d] font-black tracking-widest uppercase text-sm">
                                {activeTestimonial.name}
                            </h4>
                        </motion.div>
                    </AnimatePresence>

                    {/* PROGRESS BAR */}
                    <div className="mt-10 w-full max-w-sm h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            animate={{
                                width: `${((activeIndex % testimonials.length) + 1) /
                                    testimonials.length *
                                    100
                                    }%`,
                            }}
                            className="h-full bg-[#1f406d]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
