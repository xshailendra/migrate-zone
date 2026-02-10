'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const TextSpan = ({ text, className }) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className={`word inline-block mr-[0.25em] ${className}`} style={{ opacity: 0.1 }}>
            {word}
        </span>
    ));
};

export default function AwesomeFacts() {
    const containerRef = useRef(null);
    const textContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useGSAP(() => {
        const words = textContainerRef.current.querySelectorAll('.word');
        if (!words.length) return;

        ScrollTrigger.refresh();

        const rows = {};
        words.forEach(word => {
            const top = Math.round(word.offsetTop);
            if (!rows[top]) rows[top] = [];
            rows[top].push(word);
        });

        const sortedRowTops = Object.keys(rows).sort((a, b) => Number(a) - Number(b));
        const rowArrays = sortedRowTops.map(top => rows[top]);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                end: "bottom 30%",
                scrub: 1,
            }
        });

        rowArrays.forEach((rowWords, i) => {
            tl.to(rowWords, {
                opacity: 1,
                duration: 1,
                ease: "none",
            });
        });

        // Parallax effects for decorative elements
        gsap.to(".floating-shape", {
            y: (i, el) => -100 * parseFloat(el.dataset.speed || 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

    }, { scope: containerRef, dependencies: [isMobile] });

    return (
        <section ref={containerRef} className="relative min-h-[50vh] h-[calc(50vh-15px)] flex items-center justify-center bg-[#1f406d] overflow-hidden">
            {/* Base Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/professional_solicitor_team.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10 brightness-50 scale-110"
                />

                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>

                {/* Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,30,37,0.15)_0%,transparent_70%)] pointer-events-none"></div>

                {/* Main Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1f406d]/95 via-[#1f406d]/90 to-[#1f406d]/95"></div>

                {/* Floating Decorative Shapes */}
                <div data-speed="0.2" className="floating-shape absolute top-20 left-[10%] w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 blur-xl"></div>
                <div data-speed="0.5" className="floating-shape absolute bottom-20 right-[15%] w-48 h-48 bg-[#e41e25]/10 backdrop-blur-2xl rounded-full border border-white/5 blur-2xl"></div>

                {/* Moving Branded Diamonds */}
                <div data-speed="0.8" className="floating-shape absolute top-1/4 right-[5%] w-12 h-12 border border-white/20 rotate-45 opacity-20"></div>
                <div data-speed="0.3" className="floating-shape absolute bottom-1/3 left-[5%] w-8 h-8 border border-[#e41e25]/40 rotate-12 opacity-30"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Top Badge Overlay */}
                <div className="mb-6 flex justify-center">
                    <div className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#e41e25] rounded-full animate-pulse shadow-[0_0_8px_#e41e25]"></div>
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/60">Migrate Zone Insights</span>
                    </div>
                </div>

                <div ref={textContainerRef} className="relative">
                    <div className="mb-10">
                        <h2 className="text-4xl md:text-6xl font-black font-syne text-white uppercase tracking-tighter leading-none">
                            <TextSpan text="See Our" /> <TextSpan text="Awesome Facts" className="text-[#e41e25]" />
                        </h2>
                        {/* Refined subtle underline for title accent */}
                        <div className="h-[4px] w-24 bg-gradient-to-r from-transparent via-[#e41e25] to-transparent mx-auto mt-6 opacity-50"></div>
                    </div>

                    <div className="relative px-4">
                        {/* Text Frame Corner Accents (Subtle) */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#e41e25]/20"></div>
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#e41e25]/20"></div>

                        <div className="mb-3 text-white/80 text-xl md:text-2xl font-medium leading-[1.6] max-w-5xl mx-auto mt-0">
                            <p>
                                <TextSpan text="Aiming to migrate to Australia or Canada, then find yourself in the safe and efficient hands of Migrate Zone with experienced and motivated professionals ever ready to be of help. With 21 and more years of experience in the field of immigration and with umpteen numbers of satisfied clients, we stand out when it comes to leading immigration consultants." />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section Transition Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </section>
    );
}
