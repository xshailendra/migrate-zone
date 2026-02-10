'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const comparisonData = [
    {
        category: 'Immigration Law Expertise',
        migrateZone: [
            'Specialists in immigration',
            'Fully regulated solicitors',
            'Updated latest UKVI rules'
        ],
        diy: [
            'No legal expertise required',
            'Missing critical changes',
            'High chance of mistakes'
        ],
        others: [
            'Not pure specialists',
            'May lack depth in niche',
            'Regulated, divide focus'
        ]
    },
    {
        category: 'Fixed Fees & Transparency',
        migrateZone: [
            'Fixed-fee pricing',
            'No hidden costs',
            'Clear fee agreements'
        ],
        diy: [
            'Cheapest upfront cost',
            'Hidden costs',
            'No professional guidance'
        ],
        others: [
            'Often charge hourly rates',
            'Costs can spiral',
            'Less predictable pricing'
        ]
    },
    {
        category: 'Same-Day Services & Speed',
        migrateZone: [
            'Same-day services',
            'Rapid document checking',
            'Proactive follow-ups'
        ],
        diy: [
            'Entirely self-managed',
            'Delays if paperwork incorrect',
            'No expedited processing'
        ],
        others: [
            'May offer urgent services',
            'Less focus',
            'Standard speed processing'
        ]
    },
];

export default function ComparisonSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(sectionRef.current.querySelectorAll('.comparison-row'),
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-block px-5 py-2 bg-[#1f406d]/5 rounded-full text-[#1f406d] text-[10px] items-center font-black uppercase tracking-[0.2em] mb-6">
                        Competitive Analysis
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1f406d] leading-[1.05] tracking-tight">
                        Why We Are the <br />
                        <span className="text-[#e41e25]">Trusted Choice</span>
                    </h2>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto pb-10">
                    {/* Headers */}
                    <div className="grid grid-cols-4 gap-6 mb-10 min-w-[900px]">
                        <div></div>
                        <div className="bg-[#1f406d] rounded-2xl p-6 text-center shadow-xl shadow-[#1f406d]/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Check className="w-12 h-12 text-white" />
                            </div>
                            <span className="text-white font-black text-xs uppercase tracking-widest relative z-10">Migrate Zone</span>
                            <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-bold mt-2 relative z-10">Premier Solicitors</p>
                        </div>
                        <div className="bg-[#f8fafc] rounded-2xl p-6 text-center border border-gray-100 flex flex-col justify-center items-center">
                            <span className="text-gray-400 font-black text-xs uppercase tracking-widest">DIY Support</span>
                        </div>
                        <div className="bg-[#f8fafc] rounded-2xl p-6 text-center border border-gray-100 flex flex-col justify-center items-center">
                            <span className="text-gray-400 font-black text-xs uppercase tracking-widest">Other Agencies</span>
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="space-y-6">
                        {comparisonData.map((row, rowIndex) => (
                            <div key={rowIndex} className="comparison-row grid grid-cols-4 gap-6 min-w-[900px] group">
                                {/* Category */}
                                <div className="flex items-center pr-8">
                                    <h3 className="text-[#1f406d] font-black text-sm uppercase tracking-wider leading-snug">
                                        {row.category}
                                    </h3>
                                </div>

                                {/* Migrate Zone Column */}
                                <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 shadow-sm border border-[#1f406d]/10 group-hover:border-[#1f406d]/30 transition-all duration-500 relative ring-4 ring-transparent group-hover:ring-[#1f406d]/5">
                                    <div className="absolute top-4 right-4">
                                        <div className="w-6 h-6 bg-[#1f406d] rounded-full flex items-center justify-center">
                                            <Check className="w-3.5 h-3.5 text-white" />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        {row.migrateZone.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1f406d] mt-1.5 flex-shrink-0" />
                                                <span className="text-[#1f406d] text-[13px] font-bold tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* DIY Column */}
                                <div className="bg-[#f8fafc]/50 rounded-[2rem] p-8 border border-gray-100">
                                    <div className="space-y-4">
                                        {row.diy.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 opacity-60">
                                                <X className="w-4 h-4 text-[#e41e25] mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-500 text-[13px] font-medium leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Others Column */}
                                <div className="bg-[#f8fafc]/50 rounded-[2rem] p-8 border border-gray-100">
                                    <div className="space-y-4">
                                        {row.others.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 opacity-60">
                                                <X className="w-4 h-4 text-[#e41e25] mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-500 text-[13px] font-medium leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
