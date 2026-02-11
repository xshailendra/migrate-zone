'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/* ─── SVG Flowing Wave Text ─── */
const FlowingWave = ({ text, fontSize = 42, gradientId = 'waveGrad', springX, springY, sectionRef, className = '' }) => {
    const pathRef = useRef(null);
    const svgRef = useRef(null);
    const [viewBoxScale, setViewBoxScale] = useState({ x: 1, y: 1 });

    useEffect(() => {
        const updateScale = () => {
            if (!svgRef.current) return;
            const rect = svgRef.current.getBoundingClientRect();
            setViewBoxScale({
                x: 2000 / rect.width,
                y: 110 / rect.height
            });
        };
        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const localX = useMotionValue(-1000);
    const localY = useMotionValue(-1000);

    useEffect(() => {
        const updatePoints = () => {
            if (!svgRef.current || !sectionRef.current) return;
            const rect = svgRef.current.getBoundingClientRect();
            const sRect = sectionRef.current.getBoundingClientRect();
            const sx = springX.get();
            const sy = springY.get();
            const lx = (sRect.left + sx) - rect.left;
            const ly = (sRect.top + sy) - rect.top;
            localX.set(lx * viewBoxScale.x - (75 * viewBoxScale.x));
            localY.set(ly * viewBoxScale.y - (26 * viewBoxScale.y));
        };
        const unsubX = springX.on('change', updatePoints);
        const unsubY = springY.on('change', updatePoints);
        return () => { unsubX(); unsubY(); };
    }, [springX, springY, viewBoxScale, sectionRef]);

    const generateWavePath = () => {
        const width = 6000;
        const amplitude = 14;
        const wavelength = 500;
        let d = `M 0 55`;
        for (let x = 0; x <= width; x += 8) {
            const y = 55 + amplitude * Math.sin((x / wavelength) * 2 * Math.PI);
            d += ` L ${x} ${y.toFixed(2)}`;
        }
        return d;
    };

    return (
        <div className={`overflow-hidden w-full ${className}`}>
            <svg
                ref={svgRef}
                viewBox="0 0 2000 110"
                preserveAspectRatio="xMinYMid slice"
                className="w-full"
                style={{ height: fontSize * 1.8 }}
            >
                <defs>
                    <linearGradient id={`${gradientId}-blue`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1f406d" stopOpacity="0.7" />
                        <stop offset="30%" stopColor="#1f406d" stopOpacity="1" />
                        <stop offset="55%" stopColor="#e41e25" stopOpacity="0.85" />
                        <stop offset="75%" stopColor="#1f406d" stopOpacity="1" />
                        <stop offset="100%" stopColor="#1f406d" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id={`${gradientId}-red`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e41e25" />
                        <stop offset="100%" stopColor="#e41e25" />
                    </linearGradient>
                    <clipPath id={`clip-${gradientId}`}>
                        <motion.rect
                            x={localX}
                            y={localY}
                            width={150 * viewBoxScale.x}
                            height={52 * viewBoxScale.y}
                            rx={26 * viewBoxScale.y}
                        />
                    </clipPath>
                </defs>
                <path id={`wavePath-${gradientId}`} d={generateWavePath()} fill="none" stroke="none" />
                <text fill={`url(#${gradientId}-blue)`} fontSize={fontSize} fontWeight="900" fontFamily="var(--font-syne), sans-serif" letterSpacing="-0.02em">
                    <textPath href={`#wavePath-${gradientId}`} startOffset="0%" className={`wave-tp-${gradientId}`}>
                        {text}
                    </textPath>
                </text>
                <text fill={`url(#${gradientId}-red)`} fontSize={fontSize} fontWeight="900" fontFamily="var(--font-syne), sans-serif" letterSpacing="-0.02em" clipPath={`url(#clip-${gradientId})`}>
                    <textPath href={`#wavePath-${gradientId}`} startOffset="0%" className={`wave-tp-${gradientId}`}>
                        {text}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default function AwesomeFacts() {
    const containerRef = useRef(null);

    // Mouse tracking with springs to match CustomCursor
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        mouseX.set(-1000);
        mouseY.set(-1000);
    };

    const line1 = "Aiming to migrate to Australia or Canada, then find yourself in the safe and efficient hands of Migrate Zone with experienced and motivated professionals ever ready to be of help.";
    const line2 = "With 21 and more years of experience in the field of immigration and with umpteen numbers of satisfied clients, we stand out when it comes to leading immigration consultants.";

    useGSAP(() => {
        const tp1 = containerRef.current.querySelectorAll('.wave-tp-wg1');
        const tp2 = containerRef.current.querySelectorAll('.wave-tp-wg2');

        if (tp1.length) {
            gsap.fromTo(tp1, { attr: { startOffset: '0%' } }, {
                attr: { startOffset: '-100%' },
                duration: 35,
                ease: 'none',
                repeat: -1,
            });
        }
        if (tp2.length) {
            gsap.fromTo(tp2, { attr: { startOffset: '-100%' } }, {
                attr: { startOffset: '0%' },
                duration: 40,
                ease: 'none',
                repeat: -1,
            });
        }

        gsap.to('.af-shape', {
            y: (i, el) => -80 * parseFloat(el.dataset.speed || 1),
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, { scope: containerRef });

    // Synchronize title reveal inset with smoothed cursor
    const titleClip = useSpring(useMotionValue(0), springConfig); // Placeholder for triggering update
    const [clipPathStr, setClipPathStr] = useState('inset(0 100% 100% 0)');

    useEffect(() => {
        const updateTitleClip = () => {
            const x = springX.get();
            const y = springY.get();
            setClipPathStr(`inset(${y - 26}px calc(100% - ${x + 75}px) calc(100% - ${y + 26}px) ${x - 75}px round 26px)`);
        };
        const unsubX = springX.on('change', updateTitleClip);
        const unsubY = springY.on('change', updateTitleClip);
        return () => { unsubX(); unsubY(); };
    }, [springX, springY]);

    return (
        <section
            ref={containerRef}
            data-cursor="minimal"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-14 md:py-16 bg-white overflow-hidden"
        >
            {/* Background Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div data-speed="0.3" className="af-shape absolute top-10 left-[8%] w-24 h-24 bg-[#1f406d]/[0.03] rounded-full blur-2xl" />
                <div data-speed="0.5" className="af-shape absolute bottom-12 right-[10%] w-36 h-36 bg-[#e41e25]/[0.03] rounded-full blur-3xl" />
                <div data-speed="0.7" className="af-shape absolute top-1/3 right-[5%] w-8 h-8 border border-[#1f406d]/10 rotate-45 opacity-15" />
            </div>

            <div className="relative z-10">
                {/* Title Segment */}
                <div className="relative text-center mb-10 px-6 h-12 md:h-16 flex items-center justify-center">
                    <h2 className="absolute text-3xl md:text-5xl font-black font-syne uppercase tracking-tighter leading-none text-[#1f406d] whitespace-nowrap">
                        See Our <span className="text-[#e41e25]">Awesome Facts</span>
                    </h2>
                    <div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        style={{ clipPath: clipPathStr }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tighter leading-none text-[#e41e25] whitespace-nowrap">
                            See Our Awesome Facts
                        </h2>
                    </div>
                </div>

                {/* Flowing Wave Row 1 */}
                <div className="relative w-full">
                    <FlowingWave
                        text={`${line1}  ◆  ${line1}  ◆  ${line1}  ◆  ${line1}  ◆  `}
                        fontSize={34}
                        gradientId="wg1"
                        springX={springX}
                        springY={springY}
                        sectionRef={containerRef}
                    />
                </div>

                {/* Flowing Wave Row 2 (reverse, slightly smaller) */}
                <div className="relative w-full -mt-2">
                    <FlowingWave
                        text={`${line2}  ◆  ${line2}  ◆  ${line2}  ◆  ${line2}  ◆  `}
                        fontSize={28}
                        gradientId="wg2"
                        springX={springX}
                        springY={springY}
                        sectionRef={containerRef}
                        className="opacity-50"
                    />
                </div>
            </div>
        </section>
    );
}
