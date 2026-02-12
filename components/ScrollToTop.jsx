'use client';

import { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isFlying, setIsFlying] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        setIsFlying(true);

        if (lenis) {
            lenis.scrollTo(0, { duration: 3 });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        setTimeout(() => {
            setIsFlying(false);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {(isVisible || isFlying) && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed bottom-8 right-8 z-50 cursor-pointer group w-14 h-14"
                    onClick={scrollToTop}
                >
                    {/* Background & Ripple Container */}
                    <div className="absolute inset-0 bg-[#e41e25] rounded-full shadow-lg hover:shadow-xl hover:bg-[#c41920] transition-colors overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    </div>

                    {/* Icon Container (Not clipped) */}
                    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                        <motion.div
                            animate={isFlying ? {
                                y: -window.innerHeight + 100,
                                opacity: 0,
                                scale: 0.5
                            } : {
                                y: 0,
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <Plane
                                className={`w-6 h-6 text-black transform transition-transform duration-300 ${!isFlying ? '-rotate-45 group-hover:rotate-0 group-hover:-translate-y-1' : '-rotate-45'}`}
                                strokeWidth={2.5}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
