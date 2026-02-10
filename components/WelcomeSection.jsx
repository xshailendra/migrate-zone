'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const TextSpan = ({ text, className, isChar = true }) => {
    if (!isChar) return <span className={className}>{text}</span>;
    return text.split("").map((char, i) => (
        <span key={i} className={`char inline-block ${className}`} style={{ opacity: 0.2 }}>
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

export default function WelcomeSection() {
    const containerRef = useRef(null);
    const textContainerRef = useRef(null);
    const cursorRef = useRef(null);

    useGSAP(() => {
        const chars = textContainerRef.current.querySelectorAll('.char');
        const cursor = cursorRef.current;

        if (!chars.length || !cursor) return;

        // Reset scroll trigger to ensure clean state
        ScrollTrigger.refresh();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%", // Starts earlier
                end: "+=500",    // Completes the entire animation in 600px of scrolling
                scrub: 0.5,
                markers: false,
            }
        });

        // Loop through characters to animate them and the cursor
        chars.forEach((char, i) => {
            tl.to(char, {
                opacity: 1,
                duration: 0.05,
                ease: "none",
            }, i * 0.05);

            tl.to(cursor, {
                left: char.offsetLeft,
                top: char.offsetTop,
                height: char.offsetHeight,
                opacity: 1,
                duration: 0.05,
                ease: "none",
            }, i * 0.05);
        });

        // Hide cursor at the end
        tl.to(cursor, { opacity: 0, duration: 0.1 });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative py-24 bg-transparent text-neutral-900 overflow-hidden">
            <div className="relative max-w-4xl mx-auto px-6 text-center md:text-left">

                {/* Editor Line (Cursor) */}
                <div
                    ref={cursorRef}
                    className="absolute w-[2px] bg-[#e41e25] pointer-events-none opacity-0 z-10"
                    style={{
                        transition: 'opacity 0.1s',
                    }}
                ></div>

                <div ref={textContainerRef} className="relative">
                    {/* Headline */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-black font-syne leading-tight text-[#1f406d]">
                            <TextSpan text="Welcome To " />
                            <br className="hidden md:block" />
                            <TextSpan text="Migrate Zone" className="text-[#e41e25]" />
                        </h2>
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed md:text-xl font-medium">
                        <p>
                            <TextSpan text="Migrate Zone" className="text-[#1f406d] font-bold" />
                            <TextSpan text=" is one of the leading immigration consultants founded in the year 1998 with a motive to provide expert international immigration guidance and counseling to our esteemed clients eager to fulfill their dream of settling abroad. We at Migrate Zone are equipped with richly experienced and caring professionals always ready to adhere to clients' aspirations." />
                        </p>
                        <p>
                            <TextSpan text="We provide the best-contended process with our experts guiding you from time to time throughout the process by analyzing your profile and suggesting you the best option to move abroad. We also have the best customer support team always on the heels of supporting you at one call." />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
