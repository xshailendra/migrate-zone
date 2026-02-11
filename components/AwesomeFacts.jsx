'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/* ─── SVG Flowing Wave Text ─── */
const FlowingWave = ({ text, fontSize = 42, gradientId = 'waveGrad', isRed = false, className = '' }) => {
    const pathRef = useRef(null);

    const redGradient = (
        <linearGradient id={`${gradientId}-red`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e41e25" />
            <stop offset="100%" stopColor="#e41e25" />
        </linearGradient>
    );

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
                preserveAspectRatio="xMinYMid slice"
                className="w-full"
                style={{ height: fontSize * 1.8 }}
            >
                <defs>
                    {isRed ? redGradient : (
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1f406d" stopOpacity="0.7" />
                            <stop offset="30%" stopColor="#1f406d" stopOpacity="1" />
                            <stop offset="55%" stopColor="#e41e25" stopOpacity="0.85" />
                            <stop offset="75%" stopColor="#1f406d" stopOpacity="1" />
                            <stop offset="100%" stopColor="#1f406d" stopOpacity="0.6" />
                        </linearGradient>
                    )}
                </defs>

                <path
                    ref={pathRef}
                    id={`wavePath-${gradientId}-${isRed ? 'red' : 'base'}`}
                    d={generateWavePath()}
                    fill="none"
                    stroke="none"
                />

                <text
                    fill={isRed ? `url(#${gradientId}-red)` : `url(#${gradientId})`}
                    fontSize={fontSize}
                    fontWeight="900"
                    fontFamily="var(--font-syne), sans-serif"
                    letterSpacing="-0.02em"
                >
                    <textPath
                        href={`#wavePath-${gradientId}-${isRed ? 'red' : 'base'}`}
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
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
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

    return (
        <section
            ref={containerRef}
            data-cursor="minimal"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
            className="relative py-14 md:py-16 bg-white overflow-hidden"
        >
            {/* Background Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div data-speed="0.3" className="af-shape absolute top-10 left-[8%] w-24 h-24 bg-[#1f406d]/[0.03] rounded-full blur-2xl" />
                <div data-speed="0.5" className="af-shape absolute bottom-12 right-[10%] w-36 h-36 bg-[#e41e25]/[0.03] rounded-full blur-3xl" />
                <div data-speed="0.7" className="af-shape absolute top-1/3 right-[5%] w-8 h-8 border border-[#1f406d]/10 rotate-45 opacity-15" />
            </div>

            {/* Layer 1: Base (Blue/Gradient) */}
            <div className="relative">
                <FactsContent isRed={false} line1={line1} line2={line2} />
            </div>

            {/* Layer 2: Reveal (Red) */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    clipPath: `inset(${mousePos.y - 26}px calc(100% - ${mousePos.x + 75}px) calc(100% - ${mousePos.y + 26}px) ${mousePos.x - 75}px round 26px)`
                }}
            >
                <FactsContent isRed={true} line1={line1} line2={line2} />
            </div>
        </section>
    );
}

const FactsContent = ({ isRed = false, line1, line2 }) => (
    <div className="relative z-10">
        {/* Title */}
        <div className={`text-center mb-4 px-6 ${isRed ? 'pointer-events-none' : ''}`}>
            <h2 className={`text-3xl md:text-5xl font-black font-syne uppercase tracking-tighter leading-none mb-10 ${isRed ? 'text-[#e41e25]' : 'text-[#1f406d]'}`}>
                See Our <span className={isRed ? 'text-[#e41e25]' : 'text-[#e41e25]'}>Awesome Facts</span>
            </h2>
        </div>

        {/* Flowing Wave Row 1 */}
        <div className="relative w-full">
            <FlowingWave
                text={`${line1}  ◆  ${line1}  ◆  ${line1}  ◆  ${line1}  ◆  `}
                fontSize={34}
                gradientId="wg1"
                isRed={isRed}
            />
        </div>

        {/* Flowing Wave Row 2 (reverse, slightly smaller) */}
        <div className="relative w-full -mt-2">
            <FlowingWave
                text={`${line2}  ◆  ${line2}  ◆  ${line2}  ◆  ${line2}  ◆  `}
                fontSize={28}
                gradientId="wg2"
                isRed={isRed}
                className={isRed ? 'opacity-90' : 'opacity-50'}
            />
        </div>
    </div>
);
