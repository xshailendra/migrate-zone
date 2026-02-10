'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    TrendingUp,
    Landmark,
    FileCheck,
    Shield,
    Building,
    Briefcase,
    Plane,
    ArrowUpRight,
    Plus
} from 'lucide-react';

const expertiseItems = [
    {
        number: "01",
        icon: TrendingUp,
        label: 'High Visa Success Ratio',
        description: 'Our 21-year legacy is built on a foundation of consistently high success rates across Australia and Canada.',
        featured: true,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
        number: "02",
        icon: BookOpen,
        label: 'Career Counselling',
        description: 'Expert academic and professional guidance tailored to your specific global ambitions.'
    },
    {
        number: "03",
        icon: Landmark,
        label: 'Bank Loan Assistance',
        description: 'Streamlined financial support coordination to ensure your migration path is fully funded.'
    },
    {
        number: "04",
        icon: FileCheck,
        label: 'Visa Preparation',
        description: 'Rigorous file auditing and mock interview sessions to maximize embassy approval.'
    },
    {
        number: "05",
        icon: Shield,
        label: 'Errorless Documentation',
        description: 'Precision-first documentation handling utilizing our proprietary hi-tech verification system.'
    },
    {
        number: "06",
        icon: Building,
        label: 'Tech Infrastructure',
        description: 'State-of-the-art case management tools providing transparent, real-time tracking.'
    },
    {
        number: "07",
        icon: Briefcase,
        label: 'Professional Approach',
        description: 'Ethical, transparent, and result-oriented consulting that adheres to international standards.'
    },
    {
        number: "08",
        icon: Plane,
        label: 'Travel Assistance',
        description: 'End-to-end post-visa support including flight coordination and arrival orientation.'
    }
];

const EditorialCard = ({ item, index }) => (
    <div
        className={`relative group bg-white/40 backdrop-blur-sm border-b border-r border-gray-100 p-12 min-h-[350px] flex flex-col justify-between overflow-hidden transition-colors hover:bg-gray-50/50 ${item.featured ? 'md:col-span-2 md:row-span-1' : ''}`}
    >
        {/* Large Decorative Number */}
        <span className="absolute top-10 right-10 text-[10rem] font-syne font-black text-[#1f406d]/[0.03] leading-none pointer-events-none select-none transition-all duration-700 group-hover:text-[#e41e25]/[0.05] group-hover:scale-110">
            {item.number}
        </span>

        {/* Hover Highlight Line */}
        <div className="absolute top-0 left-0 w-0 h-1 bg-[#e41e25] transition-all duration-700 group-hover:w-full"></div>

        <div>
            <div className="mb-10 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#1f406d] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1f406d] group-hover:text-white">
                <item.icon size={28} />
            </div>
            <h3 className="text-3xl font-black font-syne text-[#1f406d] uppercase tracking-tighter leading-none mb-6">
                {item.label}
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed max-w-[280px]">
                {item.description}
            </p>
        </div>

        <div className="flex items-center gap-4 text-[#1f406d] font-black text-[10px] uppercase tracking-[0.2em] transition-all group-hover:gap-6 mt-8">
            Learn More
            <div className="w-8 h-8 rounded-full border border-[#1f406d]/20 flex items-center justify-center group-hover:bg-[#e41e25] group-hover:border-[#e41e25] group-hover:text-white transition-all">
                <ArrowUpRight size={14} />
            </div>
        </div>
    </div>
);

export default function ExpertiseSection() {
    return (
        <section className="py-32 bg-transparent relative">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Block */}
                <div className="px-6 mb-32 flex flex-col items-center text-center max-w-5xl mx-auto">
                    <span className="inline-block text-[#e41e25] font-black text-[10px] uppercase tracking-[0.4em] mb-8">
                        Domain Excellence
                    </span>
                    <h2 className="text-7xl md:text-6xl lg:text-6xl font-black font-syne text-[#1f406d] tracking-tighter leading-[0.85] mb-10 uppercase">
                        Our Strategic <br />
                        Expertise<span className="text-[#e41e25]">.</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-[#e41e25]/20 rounded-full mb-10"></div>
                    <p className="text-[#1f406d] text-base font-bold leading-relaxed opacity-60 max-w-2xl">
                        Leveraging over two decades of localized intelligence to ensure your global transition is seamless, professional, and successful.
                    </p>
                </div>

                {/* Editorial Modular Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100">
                    {expertiseItems.map((item, index) => (
                        <EditorialCard key={item.number} item={item} index={index} />
                    ))}

                    {/* Unique Grid Filler / Stats Piece */}
                    <div className="bg-[#1f406d] p-12 flex flex-col justify-center text-white lg:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <Plus className="text-[#e41e25]" size={32} />
                            <span className="text-5xl font-black font-syne tracking-tighter uppercase">50k+ success stories</span>
                        </div>
                        <p className="text-white/40 text-lg font-medium leading-relaxed max-w-sm mb-10">
                            Our expertise isn't just theory—it's proven in the successful lives of thousands of families globally.
                        </p>
                        <button className="flex items-center gap-6 group">
                            <span className="font-black text-xs uppercase tracking-[0.3em]">Request Assessment</span>
                            <div className="w-12 h-12 bg-[#e41e25] rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight size={20} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
