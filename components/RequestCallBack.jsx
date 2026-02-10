'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, PhoneCall, Plus, Sparkles } from 'lucide-react';

export default function RequestCallBack() {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">
                <motion.div
                    ref={containerRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-[#1f406d] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#1f406d]/20 group"
                >
                    {/* Background Layer (Solid with subtle texture) */}
                    <div className="absolute inset-0 z-0">
                        {/* Modern Grid Texture */}
                        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
                    </div>

                    {/* Horizontal Ribbon Content */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16 gap-12">

                        {/* Zone 1: Brand Marker */}
                        <div className="flex-shrink-0 flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                <Sparkles size={24} className="text-[#e41e25]" />
                            </div>
                            <div className="h-10 w-[1px] bg-white/20 hidden lg:block" />
                            <div className="flex flex-col">
                                <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Action / 09</span>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-2 h-2 bg-[#e41e25] transform rotate-45" />
                                    <div className="w-12 h-[1px] bg-white/40" />
                                </div>
                            </div>
                        </div>

                        {/* Zone 2: Core Messaging */}
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-4xl lg:text-5xl font-black font-syne text-white uppercase tracking-tighter leading-none mb-4">
                                Request <span className="text-[#e41e25]">A Call Back</span>.
                            </h2>
                            <p className="text-white/60 text-base lg:text-lg font-medium max-w-xl uppercase tracking-tight">
                                Professional guidance tailored to your ambitions. Fill out the form and check your eligibility now for free!
                            </p>
                        </div>

                        {/* Zone 3: High-Energy CTA */}
                        <div className="flex-shrink-0 flex items-center gap-8">
                            {/* Detailed Metric */}
                            <div className="hidden xl:flex flex-col items-end">
                                <span className="text-white font-black text-xl font-syne tracking-tight">24H Response</span>
                                <span className="text-[9px] font-bold text-[#e41e25] uppercase tracking-widest text-right">Success Verified</span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group/btn relative px-12 py-6 bg-[#e41e25] rounded-[2rem] overflow-hidden "
                            >
                                {/* Fluid Hover Fill */}
                                <div className="hover:bg-white absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />

                                <span className="relative z-10 text-white font-black text-xs group-hover/btn:text-[#e41e25] transition-colors duration-500 uppercase tracking-[0.3em] flex items-center gap-4">
                                    Send Inquiry
                                    <ArrowUpRight size={18} className="transition-transform duration-500 group-hover/btn:rotate-45" />
                                </span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Interactive Animated Borders */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e41e25]/30 to-transparent" />
                </motion.div>

                {/* Decorative Sub-footer */}
                <div className="mt-8 flex justify-center lg:justify-end gap-12 opacity-30">
                    <div className="flex items-center gap-3">
                        <Plus className="text-[#1f406d]" size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f406d]">Global Expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Plus className="text-[#1f406d]" size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f406d]">Legally Certified</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
