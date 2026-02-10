'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Plane } from 'lucide-react';
import { initTextLoader, animateLoadingLine, splitReveal } from '@/animations/textLoader';
export default function TextLoader({ onComplete, onTransitionStart }) {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const lineRef = useRef(null);
    const topCurtainRef = useRef(null);
    const bottomCurtainRef = useRef(null);

    const text = 'MIGRATEZONE';

    useEffect(() => {
        if (!containerRef.current || !textRef.current || !lineRef.current || !topCurtainRef.current || !bottomCurtainRef.current) return;

        const letters = textRef.current.querySelectorAll('.letter');

        // Initialize the staggered letter reveal AND line fill parallelly
        const timeline = initTextLoader(containerRef.current, letters, lineRef.current);

        // Animate Plane Color
        const planeIcon = lineRef.current.querySelector('.plane-icon');
        if (planeIcon) {
            timeline.to(planeIcon, {
                color: '#e41e25',
                fill: '#e41e25',
                duration: 2.0,
                ease: 'power2.inOut'
            }, '<'); // Sync with line fill
        }

        // When the combined animation is done, hide and trigger split reveal
        timeline.eventCallback('onComplete', () => {
            // Signal that the transition (splitting) is about to start
            if (onTransitionStart) onTransitionStart();

            gsap.to([textRef.current, lineRef.current.parentElement.parentElement], {
                opacity: 0,
                duration: 0.4,
                delay: 0.2,
                onComplete: () => {
                    const revealTl = splitReveal(topCurtainRef.current, bottomCurtainRef.current);
                    revealTl.eventCallback('onComplete', () => {
                        if (onComplete) onComplete();
                    });
                }
            });
        });

        return () => {
            timeline.kill();
        };
    }, [onComplete, onTransitionStart]);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Curtains */}
            <div ref={topCurtainRef} className="absolute top-0 left-0 w-full h-1/2 bg-[#f3f4f6] z-10" />
            <div ref={bottomCurtainRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-[#f3f4f6] z-10" />

            {/* Content (Z-index 20 to be on top of curtains initially) */}
            <div
                ref={containerRef}
                className="relative z-20 flex flex-col items-center justify-center min-h-screen w-full"
            >
                {/* Loading Line - Center */}
                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
                    <div className="w-full h-[2px] bg-neutral-900">
                        <div
                            ref={lineRef}
                            className="h-full bg-[#e41e25] relative"
                            style={{ width: '0%' }}
                        >
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-30">
                                <Plane className="plane-icon w-8 h-8 md:w-16 md:h-16 text-[#1f406d] fill-current rotate-45 drop-shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text - Bottom */}
                <div
                    ref={textRef}
                    className="absolute bottom-[5vh] flex items-center justify-center font-[family-name:var(--font-oxanium)] font-bold text-[clamp(2.5rem,10vw,8rem)] tracking-[0.1em] uppercase"
                >
                    <span className="text-[#1f406d]">
                        {'MIGRATE'.split('').map((char, index) => (
                            <span key={`migrate-${index}`} className="letter inline-block">
                                {char}
                            </span>
                        ))}
                    </span>
                    <span className="text-[#e41e25]">
                        {'ZONE'.split('').map((char, index) => (
                            <span key={`zone-${index}`} className="letter inline-block">
                                {char}
                            </span>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
}


