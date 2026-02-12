'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Globe, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Github, Bitcoin } from 'lucide-react';

const iconMap = {
    globe: Globe,
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube,
    send: Send,
    github: Github,
    bitcoin: Bitcoin
};

const ventures = [
    {
        id: 'migrate-zone',
        title: 'Migrate Zone',
        subtitle: 'Global Immigration Masters',
        description: 'Leading consultants since 1998, specializing in Australian & Canadian immigration with a focus on seamless transitions.',
        image: '/evol-group/MZLogo-02.png',
        logo: '/logos/logo-wide.webp',
        logoShort: '/evol-group/MZLogo-02.png',
        color: '#e41e25',
        url: 'https://migratezone.com',
        socials: ['globe', 'facebook', 'twitter', 'instagram', 'linkedin']
    },
    {
        id: 'technobits',
        title: 'Technobits Digital',
        subtitle: 'Elite IT Solutions',
        description: 'Your partner for innovative digital transformation, custom software development, and strategic IT consulting.',
        image: '/evol-group/Technobits_Digital_Logo1-02.png',
        logo: '/logos/1-01.png',
        logoShort: '/evol-group/Technobits_Digital_Logo1-02.png',
        color: '#1f406d',
        url: 'https://technobitsdigital.com',
        socials: ['globe', 'facebook', 'twitter', 'instagram', 'linkedin', 'youtube']
    },
    {
        id: 'evol-network',
        title: 'Evol Network',
        subtitle: 'Affiliate Marketing Ecosystem',
        description: 'A revolutionary platform connecting brands with influencers to drive growth through transparent affiliate structures.',
        image: '/evol-group/EVOL_NETWORK_ICON.png',
        logo: '/logos/EVOL_NETWORK_LOGO.png',
        logoShort: '/evol-group/EVOL_NETWORK_ICON.png',
        color: '#d4ff3f',
        url: 'https://evolnetwork.com',
        socials: ['globe', 'facebook', 'twitter', 'instagram', 'linkedin', 'send', 'github', 'bitcoin']
    },
    {
        id: 'evol-trader',
        title: 'Evol Trader',
        subtitle: 'Algorithmic Trading Innovation',
        description: 'Advanced cloud-based trading solutions utilizing AI and machine learning for market-beating algorithmic strategies.',
        image: '/evol-group/EvolTradeLogo_Final_1-03.png',
        logo: '/logos/EvolTradeLogo_Final_1-02.png',
        logoShort: '/evol-group/EvolTradeLogo_Final_1-03.png',
        color: '#1f406d',
        url: 'https://evoltrader.com',
        socials: ['globe', 'facebook', 'twitter', 'instagram', 'youtube', 'linkedin']
    },
    {
        id: 'evol-jobs',
        title: 'Evol Jobs',
        subtitle: 'Global Talent Acquisition',
        description: 'Connecting top-tier talent with world-class organizations through AI-driven recruitment and staffing solutions.',
        image: '/evol-group/EVOL_JOBS_ICON.png',
        logo: '/logos/EVOL_JOBS_LOGO.png',
        logoShort: '/evol-group/EVOL_JOBS_ICON.png',
        color: '#e41e25',
        url: 'https://evoljobs.com',
        socials: ['globe', 'facebook', 'twitter', 'instagram', 'linkedin']
    },
    {
        id: 'evol-assistant',
        title: 'Evol Assistant',
        subtitle: 'AI Personal Concierge',
        description: 'Next-generation AI assistants designed to streamline productivity and automate daily tasks for individuals and businesses.',
        image: '/evol-group/EvolAssistant_Logo_90x90.png',
        logo: '/logos/EvolAssistant_Logo_5-05.png',
        logoShort: '/evol-group/EvolAssistant_Logo_90x90.png',
        color: '#1f406d',
        url: 'https://evolassistant.com',
        socials: ['globe', 'facebook', 'twitter', 'instagram', 'linkedin']
    },
    {
        id: 'truevalue',
        title: 'Truevalue CRM',
        subtitle: 'Enterprise SaaS Automation',
        description: 'Comprehensive CRM systems that streamline customer relations and automate complex business workflows.',
        image: '/evol-group/TRUE VALUE CRM_ICON.png',
        logo: '/logos/TRUE VALUE CRM_ICON.png',
        logoShort: '/evol-group/truevalue-crm.png',
        color: '#1f406d',
        url: 'https://truevaluecrm.com',
        socials: ['globe', 'facebook', 'twitter', 'linkedin', 'youtube']
    },
    {
        id: 'evol-entertainment',
        title: 'Evol Entertainment',
        subtitle: 'Media & Production House',
        description: 'Creating immersive content and entertainment experiences that captivate audiences across digital and traditional platforms.',
        image: '/evol-group/Color_Logo-12.png',
        logo: '/logos/Color_Logo-12.png',
        logoShort: '/evol-group/evol-entertainment.png',
        color: '#d4ff3f',
        url: '#',
        socials: ['globe', 'facebook', 'twitter', 'instagram', 'youtube']
    }
];

export default function EvolGroupAccordion() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        if (expandedIndex === null) return;

        const startScrollY = window.scrollY;

        const handleScroll = () => {
            if (Math.abs(window.scrollY - startScrollY) > 100) {
                setExpandedIndex(null);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [expandedIndex]);

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
                                <div className={`absolute inset-0 transition-all duration-700 ${expandedIndex === index ? 'bg-white/40' : 'bg-white/0'}`}></div>
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
                                            className="h-full flex flex-col justify-center p-8 md:p-12 text-[#1f406d] max-w-2xl"
                                        >
                                            <div className="flex flex-col items-start gap-4 mb-8">
                                                <div className="w-40 h-20 flex items-center justify-start">
                                                    <img src={venture.logo} alt={venture.title} className="max-w-full max-h-full object-contain" />
                                                </div>
                                                <span className="text-xs font-extrabold uppercase text-[#1f406d] bg-gray-100 px-3 py-1 rounded-lg tracking-widest">Active Partner</span>
                                            </div>

                                            <div className="mb-10">
                                                <h3 className="text-4xl md:text-5xl font-black mb-2 font-syne leading-none uppercase tracking-tighter">{venture.title}</h3>
                                                <p className="text-lg font-bold text-[#e41e25] mb-4 uppercase tracking-wider">{venture.subtitle}</p>
                                                <p className="text-base leading-relaxed text-black font-bold">{venture.description}</p>
                                            </div>

                                            <a
                                                href={venture.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-fit"
                                            >
                                                <button className="bg-[#1f406d] text-white border-none px-8 py-4 rounded-full text-sm font-extrabold flex items-center gap-3 w-fit transition-all duration-300 hover:bg-[#e41e25] hover:text-white hover:translate-x-1">
                                                    <span>Visit Portfolio</span>
                                                    <ArrowRight size={18} />
                                                </button>
                                            </a>
                                            <div className="flex gap-4 flex-wrap mt-8">
                                                {venture.socials && venture.socials.map((social, i) => {
                                                    const Icon = iconMap[social];
                                                    return Icon ? (
                                                        <div key={i} className="text-[#1f406d]/70 hover:text-[#e41e25] transition-colors cursor-pointer">
                                                            <Icon size={20} />
                                                        </div>
                                                    ) : null;
                                                })}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="collapsed"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-full flex md:flex-col items-center justify-between md:justify-end p-8 md:py-10 text-[#1f406d]"
                                        >
                                            <div className="w-20 h-12 md:mb-8 flex items-center justify-center px-2">
                                                <img src={venture.logoShort} alt="" className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                                            </div>
                                            <h3 className="md:[writing-mode:vertical-rl] md:rotate-180 text-xl font-black font-syne uppercase tracking-widest whitespace-nowrap m-0 text-[#e41e25]">
                                                {venture.title}
                                            </h3>
                                            {/* <div className="md:mt-8 w-10 h-10 border border-[#1f406d]/30 rounded-full flex items-center justify-center opacity-50">
                                                <Plus size={20} />
                                            </div> */}
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
