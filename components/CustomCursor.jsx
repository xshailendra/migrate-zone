'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLenis } from 'lenis/react';

const CustomCursor = () => {
    const [cursorType, setCursorType] = useState('default');
    const [hoverColor, setHoverColor] = useState('#e42e25');
    const [isVisible, setIsVisible] = useState(false);

    // Mouse coordinates
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Snappier springs for the standard cursor
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const haloX = useSpring(mouseX, springConfig);
    const haloY = useSpring(mouseY, springConfig);

    const updateCursor = (target) => {
        if (!target) return;

        // 1. Detection based on data-cursor on current element or parents
        // We prioritize the card's specific data-cursor for accurate scroll/hover detection
        const targetCursor = target.closest('[data-cursor]')?.getAttribute('data-cursor');

        if (targetCursor === 'visit' || targetCursor === 'explore' || targetCursor === 'play' || targetCursor === 'pause' || targetCursor === 'location' || targetCursor === 'minimal') {
            setCursorType(targetCursor);
            if (targetCursor === 'pause' || targetCursor === 'location') {
                setHoverColor('#1f406d');
            } else {
                setHoverColor('#e42e25');
            }
            return;
        }

        // 2. Interactive elements detection
        const interactiveEl =
            target.closest('a') ||
            target.closest('button') ||
            target.closest('.btn') ||
            target.closest('.interactive');

        const isPointer = window.getComputedStyle(target).cursor === 'pointer';

        if (interactiveEl || isPointer) {
            setCursorType('hover');
            const el = interactiveEl || target;
            const bgColor = window.getComputedStyle(el).backgroundColor;
            const isRed = el.classList.contains('text-[#e41e25]') || el.classList.contains('bg-[#e41e25]') || bgColor.includes('228, 30, 37') || bgColor.includes('red');
            setHoverColor(isRed ? '#1f406d' : '#e42e25');
        } else {
            setCursorType('default');
        }
    };

    // Use Lenis hook for scroll-based updates (perfect sync)
    useLenis(() => {
        const el = document.elementFromPoint(mouseX.get(), mouseY.get());
        if (el) updateCursor(el);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const checkMobile = () => {
            const isMobile = window.matchMedia("(max-width: 1024px)").matches;
            setIsVisible(!isMobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e) => {
            if (!isVisible) return;
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            updateCursor(e.target);
        };

        const handleMouseDown = () => setCursorType('click');
        const handleMouseUp = (e) => {
            // Delay re-detection slightly so React state (e.g. data-cursor) has time to update
            setTimeout(() => {
                const el = document.elementFromPoint(mouseX.get(), mouseY.get());
                if (el) updateCursor(el);
                else updateCursor(e.target);
            }, 50);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [mouseX, mouseY, isVisible]);

    if (!isVisible) return null;

    const variants = {
        default: {
            width: 16,
            height: 16,
            backgroundColor: '#e42e25',
            border: '0px solid transparent',
            borderRadius: '50%',
            opacity: 1
        },
        hover: {
            width: 80,
            height: 80,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            border: `1.5px solid ${hoverColor}`,
            borderRadius: '50%',
            opacity: 1
        },
        visit: {
            width: 150,
            height: 52,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '26px',
            border: '1.5px solid #e42e25',
            scale: 1,
            boxShadow: 'none',
            opacity: 1
        },
        explore: {
            width: 150,
            height: 52,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '26px',
            border: '1.5px solid #e42e25',
            scale: 1,
            boxShadow: 'none',
            opacity: 1
        },
        play: {
            width: 100,
            height: 100,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '50%',
            border: '1.5px solid #e42e25',
            scale: 1,
            boxShadow: 'none',
            opacity: 1
        },
        pause: {
            width: 100,
            height: 100,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '50%',
            border: '1.5px solid #1f406d',
            scale: 1,
            boxShadow: 'none',
            opacity: 1
        },
        location: {
            width: 160,
            height: 52,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '26px',
            border: '1.5px solid #1f406d',
            scale: 1,
            boxShadow: 'none',
            opacity: 1
        },
        minimal: {
            width: 150,
            height: 52,
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '26px',
            border: `2px solid ${hoverColor}`,
            scale: 1,
            boxShadow: 'none',
            opacity: 1
        },
        click: {
            width: 16,
            height: 16,
            borderRadius: '50%',
            scale: 0.8,
            backgroundColor: hoverColor,
            opacity: 1,
            transition: { duration: 0.1 }
        }
    };

    const dotVariants = {
        default: { scale: 1, backgroundColor: '#1f406d', opacity: 1 },
        hover: { scale: 1.4, backgroundColor: hoverColor, opacity: 1 },
        visit: { scale: 1, backgroundColor: '#e42e25', opacity: 1 },
        explore: { scale: 1, backgroundColor: '#e42e25', opacity: 1 },
        play: { scale: 1.2, backgroundColor: '#e42e25', opacity: 1 },
        pause: { scale: 1.2, backgroundColor: '#1f406d', opacity: 1 },
        location: { scale: 1.2, backgroundColor: '#1f406d', opacity: 1 },
        minimal: { scale: 1.2, backgroundColor: hoverColor, opacity: 1 },
        click: {
            scale: [1, 12, 1],
            backgroundColor: ['#e42e25', 'rgba(228, 46, 37, 0)', '#1f406d'],
            border: ['0px solid #e42e25', '0px solid #e42e25', '0px solid #e42e25'],
            transition: {
                duration: 0.5,
                ease: "circOut",
                times: [0, 0.4, 1]
            }
        }
    };

    return (
        <>
            <style jsx global>{`
                @media (min-width: 1025px) {
                    * {
                        cursor: none !important;
                    }
                    html, body {
                        cursor: none !important;
                    }
                }
            `}</style>

            {/* Halo / Trailing Pill/Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
                animate={cursorType}
                variants={variants}
                style={{
                    x: haloX,
                    y: haloY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{
                    // Movement transition
                    x: { type: 'spring', damping: 25, stiffness: 300, mass: 0.5 },
                    y: { type: 'spring', damping: 25, stiffness: 300, mass: 0.5 },
                    // Expansion transition (smoothing the grows/shrinks)
                    default: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
                }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                        opacity: (cursorType === 'visit' || cursorType === 'explore' || cursorType === 'play' || cursorType === 'pause' || cursorType === 'location') ? 1 : 0,
                        y: (cursorType === 'visit' || cursorType === 'explore' || cursorType === 'play' || cursorType === 'pause' || cursorType === 'location') ? 0 : 15,
                        scale: (cursorType === 'visit' || cursorType === 'explore' || cursorType === 'play' || cursorType === 'pause' || cursorType === 'location') ? 1 : 0.8
                    }}
                    className={`${(cursorType === 'pause' || cursorType === 'location') ? 'text-[#1f406d]' : 'text-[#e42e25]'} text-[11px] font-black tracking-tight px-1 font-syne uppercase`}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <motion.span
                        key={cursorType === 'explore' ? 'explore' : 'visit'}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {cursorType === 'explore' ? 'Explore' :
                            cursorType === 'play' ? 'Play' :
                                cursorType === 'pause' ? 'Pause' :
                                    cursorType === 'location' ? 'Location' : 'Visit'}
                    </motion.span>
                </motion.span>
            </motion.div>

            {/* Core Small Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                animate={cursorType}
                variants={dotVariants}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
};

export default CustomCursor;
