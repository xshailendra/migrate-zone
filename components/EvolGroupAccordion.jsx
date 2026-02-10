'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const ventures = [
    {
        id: 'migrate-zone',
        title: 'Migrate Zone',
        subtitle: 'Global Immigration Masters',
        description: 'Leading consultants since 1998, specializing in Australian & Canadian immigration with a focus on seamless transitions.',
        image: '/evol-group/migrate-zone.png',
        logo: '/logos/logo-wide.webp',
        color: '#e41e25',
        url: 'https://migratezone.com'
    },
    {
        id: 'technobits',
        title: 'Technobits Digital',
        subtitle: 'Elite IT Solutions',
        description: 'Your partner for innovative digital transformation, custom software development, and strategic IT consulting.',
        image: '/evol-group/technobits.png',
        logo: '/logos/logo-TBD.webp',
        color: '#1f406d',
        url: 'https://technobitsdigital.com'
    },
    {
        id: 'evol-network',
        title: 'Evol Network',
        subtitle: 'Affiliate Marketing Ecosystem',
        description: 'A revolutionary platform connecting brands with influencers to drive growth through transparent affiliate structures.',
        image: '/evol-group/evol-network.png',
        logo: '/logos/logo-EN.webp',
        color: '#d4ff3f',
        url: 'https://evolnetwork.com'
    },
    {
        id: 'evol-trader',
        title: 'Evol Trader',
        subtitle: 'Algorithmic Trading Innovation',
        description: 'Advanced cloud-based trading solutions utilizing AI and machine learning for market-beating algorithmic strategies.',
        image: '/evol-group/evol-trader.png',
        logo: '/logos/logo-ET.webp',
        color: '#1f406d',
        url: 'https://evoltrader.com'
    },
    {
        id: 'marketrill',
        title: 'Marketrill',
        subtitle: 'Revenue Share Platforms',
        description: 'Decentralized revenue sharing protocols that maximize stakeholder yield through optimized DeFi farming strategies.',
        image: '/evol-group/marketrill.png',
        logo: '/logos/logo-EGC.webp',
        color: '#e41e25',
        url: 'https://marketrill.com'
    },
    {
        id: 'truevalue',
        title: 'Truevalue CRM',
        subtitle: 'Enterprise SaaS Automation',
        description: 'Comprehensive CRM systems that streamline customer relations and automate complex business workflows.',
        image: '/evol-group/truevalue-crm.png',
        logo: '/logos/logo-TVCRM.webp',
        color: '#1f406d',
        url: 'https://truevaluecrm.com'
    },
    {
        id: 'evol-jobs',
        title: 'Evol Jobs',
        subtitle: 'Overseas HR Services',
        description: 'An overseas HR services firm, connected to providing recruitment services for authentic and secure employment opportunities globally.',
        image: '/evol-group/evol-jobs.png',
        logo: '/logos/logo-EJ.webp',
        color: '#e41e25',
        url: 'https://evoljobs.com'
    },
    {
        id: 'evol-assistant',
        title: 'Evol Assistant',
        subtitle: 'Virtual Administrative Support',
        description: 'A virtual assistant specializes in offering administrative services to clients from remote location. A virtual back office to manage your appointments, travelling, and schedules.',
        image: '/evol-group/evol-assistant.png',
        logo: '/logos/logo-EA.webp',
        color: '#1f406d',
        url: 'https://evolassistant.com'
    }
];

export default function EvolGroupAccordion() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <section className="py-24 bg-transparent w-full overflow-hidden cursor-none">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="mb-12">
                    <h2 className="text-5xl md:text-5xl font-black text-center font-syne text-[#1f406d] uppercase tracking-tighter">
                        Evol <span className="text-[#e41e25]">Group</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row md:h-[600px] gap-4 w-full justify-center">
                    {ventures.map((venture, index) => (
                        <motion.div
                            key={venture.id}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] explore-card ${expandedIndex === index ? 'flex-[4] cursor-default' : 'flex-1 h-[120px] md:h-full'}`}
                            data-cursor="visit"
                            onClick={() => setExpandedIndex(index)}
                            onMouseEnter={() => document.body.setAttribute('data-cursor', 'visit')}
                            onMouseLeave={() => document.body.removeAttribute('data-cursor')}
                            layout
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={venture.image}
                                    alt=""
                                    className={`w-full h-full object-cover transition-transform duration-[1200ms] ${expandedIndex === index ? 'scale-105' : ''}`}
                                />
                                <div className={`absolute inset-0 transition-all duration-700 ${expandedIndex === index ? 'bg-gradient-to-b md:bg-gradient-to-r from-black/90 to-black/40' : 'bg-black/40'}`}></div>
                            </div>

                            <div className="relative z-10 w-full h-full">
                                <AnimatePresence mode="wait">
                                    {expandedIndex === index ? (
                                        <motion.div
                                            key="expanded"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="h-full flex flex-col justify-center p-8 md:p-12 text-white max-w-2xl"
                                        >
                                            <div className="flex flex-col items-start gap-4 mb-8">
                                                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center p-4">
                                                    <img src={venture.logo} alt={venture.title} className="max-w-full max-h-full object-contain" />
                                                </div>
                                                <span className="text-xs font-extrabold uppercase text-[#d4ff3f] tracking-widest">Active Partner</span>
                                            </div>

                                            <div className="mb-10">
                                                <h3 className="text-4xl md:text-5xl font-black mb-2 font-syne leading-none uppercase tracking-tighter">{venture.title}</h3>
                                                <p className="text-lg font-bold text-[#e41e25] mb-4 uppercase tracking-wider">{venture.subtitle}</p>
                                                <p className="text-base leading-relaxed text-white/80">{venture.description}</p>
                                            </div>

                                            <a
                                                href={venture.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-fit"
                                            >
                                                <button className="bg-white text-[#1f406d] border-none px-8 py-4 rounded-full text-sm font-extrabold flex items-center gap-3 w-fit transition-all duration-300 hover:bg-[#e41e25] hover:text-white hover:translate-x-1">
                                                    <span>Visit Portfolio</span>
                                                    <ArrowRight size={18} />
                                                </button>
                                            </a>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="collapsed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-full flex md:flex-col items-center justify-between md:justify-end p-8 md:py-10 text-white"
                                        >
                                            <div className="w-10 h-10 md:mb-8 opacity-80">
                                                <img src={venture.logo} alt="" className="w-full h-full object-contain" />
                                            </div>
                                            <h3 className="md:[writing-mode:vertical-rl] md:rotate-180 text-xl font-black font-syne uppercase tracking-widest whitespace-nowrap m-0">
                                                {venture.title}
                                            </h3>
                                            <div className="md:mt-8 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center opacity-50">
                                                <Plus size={20} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
