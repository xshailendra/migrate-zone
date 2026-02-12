'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, Globe, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
    const bannerRef = useRef(null);

    useEffect(() => {
        if (!bannerRef.current) return;

        gsap.fromTo(bannerRef.current,
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: 'top 85%',
                },
            }
        );
    }, []);

    return (
        <section className="py-24 px-6 bg-white">
            <div
                ref={bannerRef}
                className="max-w-7xl mx-auto bg-[#1f406d] rounded-[3rem] overflow-hidden relative min-h-[450px] flex items-center shadow-2xl"
            >
                {/* Visual Overlay Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1f406d] via-[#1f406d]/90 to-transparent z-10" />
                    <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 opacity-[0.05]">
                        <ShieldCheck className="w-[40rem] h-[40rem] text-white" strokeWidth={0.5} />
                    </div>
                </div>

                <div className="relative z-10 w-full px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Content */}
                    <div className="text-white max-w-2xl text-center md:text-left">
                        <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/60 text-[10px] items-center font-black uppercase tracking-[0.2em] mb-8">
                            Join 10k+ Successful Applicants
                        </span>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight"
                        >
                            Start Your Free <br />
                            Immigration <br />
                            <span className="text-[#e41e25]">Assessment</span> Today
                        </motion.h3>
                        <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed">
                            Our expert solicitors will evaluate your case and provide tailored advice to ensure a seamless process.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Link href="/contact">
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-6 px-12 py-6 bg-[#e41e25] text-white rounded-2xl font-black text-sm uppercase tracking-[0.1em] whitespace-nowrap shadow-2xl shadow-black/20 transition-all group"
                        >
                            Check My Eligibility
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 text-white/5 text-9xl font-black select-none pointer-events-none">
                    MIGRATEZONE
                </div>
            </div>
        </section>
    );
}
