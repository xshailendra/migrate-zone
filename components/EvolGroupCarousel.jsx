'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const ventures = [
    {
        id: 'migrate-zone',
        title: 'Migrate Zone',
        subtitle: 'Global Immigration Masters',
        description: 'Leading consultants since 1998, specializing in Australian & Canadian immigration with a focus on seamless transitions.',
        image: '/logos/logo-wide.webp',
        logo: '/logos/logo-wide.webp',
        color: '#e41e25'
    },
    {
        id: 'technobits',
        title: 'Technobits Digital',
        subtitle: 'Elite IT Solutions',
        description: 'Your partner for innovative digital transformation, custom software development, and strategic IT consulting.',
        image: '/logos/tbt-bg.png',
        logo: '/logos/logo-TBD.webp',
        color: '#1f406d'
    },
    {
        id: 'evol-network',
        title: 'Evol Network',
        subtitle: 'Affiliate Marketing Ecosystem',
        description: 'A revolutionary platform connecting brands with influencers to drive growth through transparent affiliate structures.',
        image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
        logo: '/logos/logo-EN.webp',
        color: '#d4ff3f'
    },
    {
        id: 'evol-trader',
        title: 'Evol Trader',
        subtitle: 'Algorithmic Trading Innovation',
        description: 'Advanced cloud-based trading solutions utilizing AI and machine learning for market-beating algorithmic strategies.',
        image: 'https://images7.alphacoders.com/878/878663.jpg',
        logo: '/logos/logo-ET.webp',
        color: '#1f406d'
    },
    {
        id: 'marketrill',
        title: 'Marketrill',
        subtitle: 'Revenue Share Platforms',
        description: 'Decentralized revenue sharing protocols that maximize stakeholder yield through optimized DeFi farming strategies.',
        image: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
        logo: '/logos/logo-EGC.webp',
        color: '#e41e25'
    },
    {
        id: 'truevalue',
        title: 'Truevalue CRM',
        subtitle: 'Enterprise SaaS Automation',
        description: 'Comprehensive CRM systems that streamline customer relations and automate complex business workflows.',
        image: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
        logo: '/logos/logo-TVCRM.webp',
        color: '#1f406d'
    }
];

export default function EvolGroupCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideNext = () => {
        setCurrentIndex((prev) => (prev + 1) % ventures.length);
    };

    const slidePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + ventures.length) % ventures.length);
    };

    return (
        <section className="py-20 bg-white w-full overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <span className="block text-sm font-bold uppercase tracking-widest text-[#e41e25] mb-3">Evol Group Ventures</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1f406d] font-syne uppercase tracking-tighter m-0">Explore Our Ecosystem</h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#1f406d] hover:text-white hover:border-[#1f406d] hover:scale-105 text-[#1f406d]" onClick={slidePrev} aria-label="Previous slide">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#1f406d] hover:text-white hover:border-[#1f406d] hover:scale-105 text-[#1f406d]" onClick={slideNext} aria-label="Next slide">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative py-5 -mx-5 overflow-visible">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: `calc(-${currentIndex * (100 / (ventures.length > 3 ? 3.2 : ventures.length))}%)` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {ventures.map((venture, index) => (
                            <motion.div
                                key={venture.id}
                                className={`flex-[0_0_calc(100%/3.2)] min-w-[350px] h-[500px] rounded-[30px] overflow-hidden relative bg-gray-100 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group explore-card ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}`}
                                data-cursor="visit"
                                onMouseEnter={(e) => {
                                    document.body.setAttribute('data-cursor', 'visit');
                                }}
                                onMouseLeave={(e) => {
                                    document.body.removeAttribute('data-cursor');
                                }}
                            >
                                <div className="w-full h-full relative">
                                    <div className="absolute inset-0 z-0">
                                        <img src={venture.image} alt="" className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90"></div>
                                    </div>

                                    <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                                        <div className="flex justify-between items-start">
                                            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center p-2.5">
                                                <img src={venture.logo} alt={venture.title} className="max-w-full max-h-full object-contain" />
                                            </div>
                                            <span className="text-[10px] font-bold uppercase bg-[#d4ff3f] text-[#1f406d] px-2.5 py-1 rounded-full">Active</span>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-black mb-1 font-syne uppercase tracking-tighter">{venture.title}</h3>
                                            <p className="text-sm font-semibold text-[#e41e25] mb-4 uppercase tracking-wider">{venture.subtitle}</p>
                                            <p className="text-sm leading-relaxed text-white/70 line-clamp-3 mb-0">{venture.description}</p>
                                        </div>

                                        <div className="flex justify-end">
                                            <button className="bg-white text-[#1f406d] border-none px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-[#e41e25] hover:text-white hover:-translate-y-0.5">
                                                <span>Visit Venture</span>
                                                <ExternalLink size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-10 flex items-center justify-between gap-8">
                    <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#e41e25] rounded-full"
                            animate={{ width: `${((currentIndex + 1) / ventures.length) * 100}%` }}
                        />
                    </div>
                    <div className="font-syne font-bold flex items-baseline gap-1.5">
                        <span className="text-2xl text-[#1f406d]">{String(currentIndex + 1).padStart(2, '0')}</span>
                        <span className="text-sm text-gray-400">/ {String(ventures.length).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
