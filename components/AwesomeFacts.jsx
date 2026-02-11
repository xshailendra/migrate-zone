'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/* ─── SVG Flowing Wave Text ─── */
const FlowingWave = ({ text, fontSize = 42, gradientId = 'waveGrad', className = '' }) => {
    const pathRef = useRef(null);

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
                viewBox="0 0 2000 110"
                preserveAspectRatio="xMidYMid meet"
                className="w-full"
                style={{ height: fontSize * 1.8 }}
            >
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1f406d" stopOpacity="0.7" />
                        <stop offset="30%" stopColor="#1f406d" stopOpacity="1" />
                        <stop offset="55%" stopColor="#e41e25" stopOpacity="0.85" />
                        <stop offset="75%" stopColor="#1f406d" stopOpacity="1" />
                        <stop offset="100%" stopColor="#1f406d" stopOpacity="0.6" />
                    </linearGradient>
                </defs>

                <path
                    ref={pathRef}
                    id={`wavePath-${gradientId}`}
                    d={generateWavePath()}
                    fill="none"
                    stroke="none"
                />

                <text
                    fill={`url(#${gradientId})`}
                    fontSize={fontSize}
                    fontWeight="900"
                    fontFamily="var(--font-syne), sans-serif"
                    letterSpacing="-0.02em"
                >
                    <textPath
                        href={`#wavePath-${gradientId}`}
                        startOffset="0%"
                        className={`wave-tp wave-tp-${gradientId}`}
                    >
                        {text}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default function AwesomeFacts() {
    const containerRef = useRef(null);

    const line1 = "Aiming to migrate to Australia or Canada, then find yourself in the safe and efficient hands of Migrate Zone with experienced and motivated professionals ever ready to be of help.";
    const line2 = "With 21 and more years of experience in the field of immigration and with umpteen numbers of satisfied clients, we stand out when it comes to leading immigration consultants.";

    useGSAP(() => {
        // Animate wave text paths — smooth flowing offset
        const tp1 = containerRef.current.querySelectorAll('.wave-tp-wg1');
        const tp2 = containerRef.current.querySelectorAll('.wave-tp-wg2');

        if (tp1.length) {
            gsap.fromTo(tp1, { attr: { startOffset: '5%' } }, {
                attr: { startOffset: '-60%' },
                duration: 25,
                ease: 'none',
                repeat: -1,
            });
        }
        if (tp2.length) {
            gsap.fromTo(tp2, { attr: { startOffset: '-60%' } }, {
                attr: { startOffset: '5%' },
                duration: 30,
                ease: 'none',
                repeat: -1,
            });
        }

        // Parallax shapes
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

    return (
        <section ref={containerRef} className="relative py-14 md:py-16 bg-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">


                <div data-speed="0.3" className="af-shape absolute top-10 left-[8%] w-24 h-24 bg-[#1f406d]/[0.03] rounded-full blur-2xl" />
                <div data-speed="0.5" className="af-shape absolute bottom-12 right-[10%] w-36 h-36 bg-[#e41e25]/[0.03] rounded-full blur-3xl" />
                <div data-speed="0.7" className="af-shape absolute top-1/3 right-[5%] w-8 h-8 border border-[#1f406d]/10 rotate-45 opacity-15" />
            </div>

            <div className="relative z-10">
                {/* Title */}
                <div className="text-center mb-4 px-6">
                    <h2 className="text-3xl md:text-5xl font-black font-syne text-[#1f406d] uppercase tracking-tighter leading-none mb-10">
                        See Our <span className="text-[#e41e25]">Awesome Facts</span>
                    </h2>

                </div>

                {/* Flowing Wave Row 1 */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    <FlowingWave
                        text={`${line1}  ◆  ${line1}  ◆  ${line1}  ◆  `}
                        fontSize={34}
                        gradientId="wg1"
                    />
                </div>

                {/* Flowing Wave Row 2 (reverse, slightly smaller) */}
                <div className="relative -mt-2">
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    <FlowingWave
                        text={`${line2}  ◆  ${line2}  ◆  ${line2}  ◆  `}
                        fontSize={28}
                        gradientId="wg2"
                        className="opacity-50"
                    />
                </div>
            </div>


        </section>
    );
}
