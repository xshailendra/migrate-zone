'use client';

import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Plane, GraduationCap, Briefcase, Users, Building2, Star, TrendingUp, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

// Country images and data
const countryData = {
    'AUSTRALIA': {
        image: '/australia_country_1770386989728.png',
        flag: 'https://flagcdn.com/w640/au.png',
        tagline: 'Land of Opportunities',
        highlight: 'Skilled Migration Hub',
        color: '#00843D',
        flagColors: ['#00008B', '#FFFFFF', '#FF0000'],
        stats: { visas: '50K+', success: '98%', processing: '8-12 weeks' }
    },
    'CANADA': {
        image: '/canada_country_1770386923730.png',
        flag: 'https://flagcdn.com/w640/ca.png',
        tagline: 'Your Gateway to PR',
        highlight: 'Express Entry Experts',
        color: '#FF0000',
        flagColors: ['#FF0000', '#FFFFFF', '#FF0000'],
        stats: { visas: '40K+', success: '97%', processing: '6-8 months' }
    },
    'NEW ZEALAND': {
        image: '/newzealand_country_1770386941714.png',
        flag: 'https://flagcdn.com/w640/nz.png',
        tagline: 'Natural Paradise',
        highlight: 'Quality of Life',
        color: '#00247D',
        flagColors: ['#00247D', '#CC142B', '#FFFFFF'],
        stats: { visas: '15K+', success: '96%', processing: '4-6 weeks' }
    },
    'USA': {
        image: '/usa_country_1770386959388.png',
        flag: 'https://flagcdn.com/w640/us.png',
        tagline: 'The American Dream',
        highlight: 'Study & Work Visas',
        color: '#3C3B6E',
        flagColors: ['#3C3B6E', '#FFFFFF', '#B22234'],
        stats: { visas: '30K+', success: '95%', processing: '3-6 months' }
    },
    'UK': {
        image: '/uk_country_1770387018157.png',
        flag: 'https://flagcdn.com/w640/gb.png',
        tagline: 'World-Class Education',
        highlight: 'Student Visa Experts',
        color: '#012169',
        flagColors: ['#012169', '#FFFFFF', '#C8102E'],
        stats: { visas: '25K+', success: '97%', processing: '3-8 weeks' }
    },
    'EUROPE': {
        image: '/europe_country_1770387043225.png',
        flag: 'https://flagcdn.com/w640/eu.png',
        tagline: 'Explore the Continent',
        highlight: 'Schengen Specialists',
        color: '#003399',
        flagColors: ['#003399', '#FFD700', '#003399'],
        stats: { visas: '35K+', success: '96%', processing: '2-4 weeks' }
    },
};

// Category icons with colors
const categoryConfig = {
    'Employer Sponsored': { icon: Briefcase, color: '#1f406d', bg: '#e8f0fe' },
    'Skilled Migration': { icon: TrendingUp, color: '#00843D', bg: '#e6f4ea' },
    'Work Visa': { icon: Building2, color: '#7c3aed', bg: '#f3e8ff' },
    'Student Visa': { icon: GraduationCap, color: '#dc2626', bg: '#fee2e2' },
    'Tourist Visa': { icon: Plane, color: '#0891b2', bg: '#cffafe' },
    'Visitor Visa': { icon: Plane, color: '#0891b2', bg: '#cffafe' },
    'Business Visa': { icon: Building2, color: '#ca8a04', bg: '#fef9c3' },
    'Family Visa': { icon: Users, color: '#db2777', bg: '#fce7f3' },
    'Skilled Worker': { icon: Users, color: '#059669', bg: '#d1fae5' },
    'Travel Visa': { icon: Plane, color: '#0891b2', bg: '#cffafe' },
    'Canadian Experience Class': { icon: Star, color: '#ea580c', bg: '#ffedd5' },
    'Tourist Schengen Visa': { icon: Globe, color: '#003399', bg: '#dbeafe' },
};

const navItems = [
    { label: 'HOME', href: '/' },
    {
        label: 'AUSTRALIA', href: '/australia', subItems: [
            {
                label: 'Employer Sponsored', href: '/australia/employer-sponsored', description: 'Employer-sponsored visa pathways for skilled workers.', subItems: [
                    { label: 'Employer Nomination Scheme (ENS) - 186', href: '/australia/employer-sponsored/ens-186' },
                    { label: 'Skilled Employer Sponsored Regional - 494', href: '/australia/employer-sponsored/sesr-494' },
                ]
            },
            {
                label: 'Skilled Migration', href: '/australia/skilled-migration', description: 'Points-based skilled migration programs.', subItems: [
                    { label: 'Skilled Independent Visa - 189', href: '/australia/skilled-migration/visa-189' },
                    { label: 'Skilled Nomination Visa - 190', href: '/australia/skilled-migration/visa-190' },
                    { label: 'Skilled Regional (Provisional) Visa - 491', href: '/australia/skilled-migration/visa-491' },
                ]
            },
            {
                label: 'Work Visa', href: '/australia/work-visa', description: 'Temporary work visa options available.', subItems: [
                    { label: 'NTDAMA - 482', href: '/australia/work-visa/ntdama-482' },
                ]
            },
            { label: 'Student Visa', href: '/australia/student-visa', description: 'Study in world-class Australian universities.' },
            { label: 'Tourist Visa', href: '/australia/tourist-visa', description: 'Visit Australia for tourism and holidays.' },
            {
                label: 'Business Visa', href: '/australia/business-visa', description: 'Business and investor visa categories.', subItems: [
                    { label: 'Business Talent (Permanent) Visa - 132', href: '/australia/business-visa/visa-132' },
                    {
                        label: 'Provisional Business Innovation and Investment Visa - 188', href: '/australia/business-visa/visa-188', subItems: [
                            { label: 'Entrepreneur Visa', href: '/australia/business-visa/visa-188/entrepreneur' },
                        ]
                    },
                ]
            },
        ]
    },
    {
        label: 'CANADA', href: '/canada', subItems: [
            {
                label: 'Business Visa', href: '/canada/business-visa', description: 'Business and investor immigration to Canada.', subItems: [
                    { label: 'Federal Business Immigration', href: '/canada/business-visa/federal-business' },
                    { label: 'Provincial Nominee Investor Visa', href: '/canada/business-visa/pnp-investor' },
                ]
            },
            {
                label: 'Family Visa', href: '/canada/family-visa', description: 'Family sponsorship programs.', subItems: [
                    { label: 'Family-based Provincial Nominee Visa', href: '/canada/family-visa/pnp-family' },
                    { label: 'Parents and Grandparents Visa', href: '/canada/family-visa/parents-grandparents' },
                    { label: 'Spouse, Partner, Dependent Child', href: '/canada/family-visa/spouse-partner-child' },
                ]
            },
            {
                label: 'Skilled Worker', href: '/canada/skilled-worker', description: 'Federal Skilled Worker Program.', subItems: [
                    { label: 'Express Entry', href: '/canada/skilled-worker/express-entry' },
                    { label: 'Federal Skilled Trade Program (FSTP)', href: '/canada/skilled-worker/fstp' },
                    { label: 'Federal Skilled Worker (FSW)', href: '/canada/skilled-worker/fsw' },
                    { label: 'Provincial Nominee Programs (PNP)', href: '/canada/skilled-worker/pnp' },
                    { label: 'Quebec Skilled Worker', href: '/canada/skilled-worker/quebec' },
                ]
            },
            { label: 'Student Visa', href: '/canada/student-visa', description: 'Study permits for Canadian institutions.' },
            {
                label: 'Travel Visa', href: '/canada/travel-visa', description: 'Temporary resident visa for tourism.', subItems: [
                    { label: 'Canada Visitor Visa', href: '/canada/travel-visa/visitor' },
                    { label: 'Tourist Visa', href: '/canada/travel-visa/tourist' },
                ]
            },
            { label: 'Work Visa', href: '/canada/work-visa', description: 'Work permits and employment pathways.' },
            { label: 'Canadian Experience Class', href: '/canada/canadian-experience-class', description: 'PR pathway for Canadian work experience.' },
        ]
    },
    {
        label: 'NEW ZEALAND', href: '/new-zealand', subItems: [
            { label: 'Student Visa', href: '/new-zealand/student-visa', description: 'Study in New Zealand institutions.' },
            { label: 'Visitor Visa', href: '/new-zealand/visitor-visa', description: 'Visit New Zealand for tourism.' },
        ]
    },
    {
        label: 'USA', href: '/usa', subItems: [
            { label: 'Student Visa', href: '/usa/student-visa', description: 'F-1 student visa for US universities.' },
            { label: 'Visitor Visa', href: '/usa/visitor-visa', description: 'B1/B2 visas for tourism and business.' },
        ]
    },
    {
        label: 'UK', href: '/uk', subItems: [
            { label: 'Student Visa', href: '/uk/student-visa', description: 'Student visa for UK education.' },
            { label: 'Visitor Visa', href: '/uk/visitor-visa', description: 'Standard visitor visa for UK.' },
        ]
    },
    {
        label: 'EUROPE', href: '/europe', subItems: [
            { label: 'Tourist Schengen Visa', href: '/europe/tourist-schengen-visa', description: 'Schengen visa for European travel.' },
        ]
    },
    { label: 'BLOG', href: '/blog' },
    { label: 'CAREER', href: '/career' },
    { label: 'EVENTS', href: '/events' },
];

// Category Column for the Jewell-style mega menu
const CategoryColumn = ({ item, index }) => {
    const config = categoryConfig[item.label] || { icon: Briefcase, color: '#1f406d', bg: '#e8f0fe' };
    const IconComponent = config.icon;

    // Collect all linkable items: the item itself (if no sub-items, it's a direct link) + sub-items
    const allLinks = [];
    if (item.subItems && item.subItems.length > 0) {
        item.subItems.forEach(sub => {
            allLinks.push(sub);
            // Include nested sub-items too
            if (sub.subItems && sub.subItems.length > 0) {
                sub.subItems.forEach(nested => allLinks.push(nested));
            }
        });
    }

    return (
        <div className="mega-col flex flex-col">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{ borderColor: config.color, color: config.color }}
                >
                    <IconComponent className="w-[18px] h-[18px]" />
                </div>
                <Link href={item.href}>
                    <h3 className="text-[15px] font-bold text-gray-900 leading-tight hover:text-[#1f406d] transition-colors cursor-pointer">
                        {item.label}
                    </h3>
                </Link>
            </div>

            {/* Service Links */}
            <div className="space-y-0">
                {allLinks.length > 0 ? (
                    allLinks.map((link) => (
                        <Link key={link.label} href={link.href}>
                            <div className="group flex items-center justify-between py-[10px] cursor-pointer">
                                <span className="text-[13px] text-gray-500 group-hover:text-[#1f406d] transition-colors duration-200 leading-snug">
                                    {link.label}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1f406d] flex-shrink-0 ml-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                        </Link>
                    ))
                ) : (
                    <Link href={item.href}>
                        <div className="group flex items-center justify-between py-[10px] cursor-pointer">
                            <span className="text-[13px] text-gray-500 group-hover:text-[#1f406d] transition-colors duration-200">
                                Learn More
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#1f406d] flex-shrink-0 ml-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

// Jewell-style Mega Dropdown
const MegaDropdown = ({ items, isOpen, parentLabel }) => {
    const dropdownRef = useRef(null);
    const country = countryData[parentLabel];

    useLayoutEffect(() => {
        if (!dropdownRef.current) return;

        const ctx = gsap.context(() => {
            if (isOpen) {
                gsap.set(dropdownRef.current, { display: 'block', pointerEvents: 'auto' });
                // Smooth slide down like Jewell
                gsap.fromTo(dropdownRef.current,
                    { opacity: 0, y: -15, clipPath: 'inset(0 0 100% 0)' },
                    {
                        opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)',
                        duration: 0.45, ease: 'power3.out'
                    }
                );
                // Stagger columns
                const cols = dropdownRef.current.querySelectorAll('.mega-col');
                gsap.fromTo(cols,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, stagger: 0.06, duration: 0.4, ease: 'power2.out', delay: 0.15 }
                );
            } else {
                gsap.to(dropdownRef.current, {
                    opacity: 0, y: -10, clipPath: 'inset(0 0 100% 0)',
                    duration: 0.25, ease: 'power2.in',
                    onComplete: () => {
                        if (dropdownRef.current) {
                            gsap.set(dropdownRef.current, { display: 'none', pointerEvents: 'none' });
                        }
                    }
                });
            }
        }, dropdownRef);

        return () => ctx.revert();
    }, [isOpen]);

    if (!items || items.length === 0) return null;

    // Split items into rows of 3 for grid layout
    const topRow = items.slice(0, 3);
    const bottomRow = items.slice(3);

    return (
        <div
            ref={dropdownRef}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50"
            style={{ display: 'none', width: 'min(1200px, 95vw)' }}
        >
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-gray-100">
                <div className="flex">

                    {/* Left Sidebar – Country Info Panel */}
                    <div
                        className="w-[280px] flex-shrink-0 p-8 flex flex-col justify-between relative overflow-hidden"
                    >
                        {/* Base gradient mixing all flag colors */}
                        <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${country?.flagColors?.[0] || '#1f406d'} 0%, ${country?.flagColors?.[2] || '#e41e25'}99 45%, ${country?.flagColors?.[0] || '#1f406d'}dd 65%, ${country?.flagColors?.[1] || '#FFFFFF'}22 100%)` }} />

                        {/* Glowing orb */}
                        <div
                            className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-[0.25]"
                            style={{ background: country?.flagColors?.[2] || '#e41e25' }}
                        />
                        <div
                            className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full blur-3xl opacity-[0.15]"
                            style={{ background: country?.flagColors?.[1] || '#FFFFFF' }}
                        />

                        {/* Topographic contour lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 280 500" fill="none">
                            <ellipse cx="140" cy="250" rx="120" ry="180" stroke={country?.flagColors?.[1] || '#FFF'} strokeWidth="1" />
                            <ellipse cx="140" cy="250" rx="95" ry="145" stroke={country?.flagColors?.[1] || '#FFF'} strokeWidth="1" />
                            <ellipse cx="140" cy="250" rx="70" ry="110" stroke={country?.flagColors?.[1] || '#FFF'} strokeWidth="1" />
                            <ellipse cx="140" cy="250" rx="45" ry="75" stroke={country?.flagColors?.[1] || '#FFF'} strokeWidth="1" />
                            <ellipse cx="140" cy="250" rx="20" ry="40" stroke={country?.flagColors?.[1] || '#FFF'} strokeWidth="1" />
                        </svg>

                        {/* Accent vertical bar */}
                        <div
                            className="absolute left-0 top-8 bottom-8 w-1 rounded-full opacity-30"
                            style={{ background: `linear-gradient(to bottom, ${country?.flagColors?.[2] || '#e41e25'}, transparent)` }}
                        />

                        {/* Corner accent triangle */}
                        <svg className="absolute bottom-0 right-0 w-20 h-20 opacity-[0.08]" viewBox="0 0 80 80">
                            <polygon points="80,0 80,80 0,80" fill={country?.flagColors?.[2] || '#e41e25'} />
                        </svg>

                        {/* Small cross marks */}
                        <svg className="absolute top-20 right-8 w-4 h-4 opacity-[0.15]" viewBox="0 0 12 12">
                            <line x1="6" y1="0" x2="6" y2="12" stroke={country?.flagColors?.[1] || '#FFF'} strokeWidth="1.5" />
                            <line x1="0" y1="6" x2="12" y2="6" stroke={country?.flagColors?.[1] || '#FFF'} strokeWidth="1.5" />
                        </svg>
                        <svg className="absolute bottom-36 left-8 w-3 h-3 opacity-[0.1]" viewBox="0 0 12 12">
                            <line x1="6" y1="0" x2="6" y2="12" stroke={country?.flagColors?.[2] || '#e41e25'} strokeWidth="1.5" />
                            <line x1="0" y1="6" x2="12" y2="6" stroke={country?.flagColors?.[2] || '#e41e25'} strokeWidth="1.5" />
                        </svg>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                            >
                                <div className="inline-block px-3 py-1 bg-white/15 rounded-full text-[10px] font-bold text-white/90 tracking-wider uppercase mb-4">
                                    Migrate Zone
                                </div>
                            </motion.div>
                            <motion.h2
                                className="text-2xl font-black text-white mb-3 leading-tight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {parentLabel}<br />
                                <span className="text-white/70 text-lg font-semibold">Services</span>
                            </motion.h2>
                            <motion.p
                                className="text-white/60 text-[13px] leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25 }}
                            >
                                {country?.tagline || 'Expert immigration services'}. We provide end-to-end visa consultation and support for a seamless migration journey.
                            </motion.p>
                        </div>

                        {/* Quick Stats */}
                        <motion.div
                            className="relative z-10 mt-5 flex gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg py-2.5 text-center">
                                <div className="text-base font-black text-white">{country?.stats?.visas || '20K+'}</div>
                                <div className="text-[10px] text-white/50 uppercase tracking-wider">Visas</div>
                            </div>
                            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-lg py-2.5 text-center">
                                <div className="text-base font-black text-white">{country?.stats?.success || '95%'}</div>
                                <div className="text-[10px] text-white/50 uppercase tracking-wider">Success</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right – Categories Grid */}
                    <div className="flex-1 py-8 px-10 flex flex-col">
                        {/* Top Row */}
                        <div
                            className="grid gap-x-10 gap-y-8"
                            style={{
                                gridTemplateColumns: `repeat(${Math.min(topRow.length, 3)}, 1fr)`
                            }}
                        >
                            {topRow.map((item, index) => (
                                <CategoryColumn key={item.label} item={item} index={index} />
                            ))}
                        </div>

                        {/* Divider between rows */}
                        {bottomRow.length > 0 && (
                            <div className="border-t border-gray-100 my-7" />
                        )}

                        {/* Bottom Row */}
                        {bottomRow.length > 0 && (
                            <div
                                className="grid gap-x-10 gap-y-8"
                                style={{
                                    gridTemplateColumns: `repeat(${Math.min(bottomRow.length, 3)}, 1fr)`
                                }}
                            >
                                {bottomRow.map((item, index) => (
                                    <CategoryColumn key={item.label} item={item} index={index + 3} />
                                ))}
                            </div>
                        )}

                        {/* Featured Content — fills space for countries with few categories */}
                        {items.length <= 3 && (
                            <div className="mega-col mt-auto pt-6 border-t border-gray-100">
                                {/* Quick Info Pills */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1f406d]/5 text-[#1f406d] rounded-full text-[11px] font-semibold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        {country?.stats?.processing || 'Fast Processing'}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1f406d]/5 text-[#1f406d] rounded-full text-[11px] font-semibold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {country?.highlight || 'Expert Guidance'}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1f406d]/5 text-[#1f406d] rounded-full text-[11px] font-semibold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                        {country?.stats?.success || '95%'} Success Rate
                                    </span>
                                </div>

                                {/* CTA Card */}
                                <Link href={`/${parentLabel.toLowerCase().replace(' ', '-')}`}>
                                    <motion.div
                                        className="relative overflow-hidden rounded-2xl p-6 cursor-pointer group"
                                        style={{ background: 'linear-gradient(135deg, #1f406d 0%, #2a5a96 50%, #1f406d 100%)' }}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        {/* Decorative elements */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                                        <div className="relative z-10 flex items-center justify-between">
                                            <div>
                                                <h4 className="text-white font-bold text-[15px] mb-1">
                                                    Start Your {parentLabel} Journey
                                                </h4>
                                                <p className="text-white/60 text-[12px] leading-relaxed max-w-xs">
                                                    Get personalized visa guidance from our certified immigration experts. Free initial assessment.
                                                </p>
                                            </div>
                                            <motion.div
                                                className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 ml-4"
                                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
                                            >
                                                <ArrowRight className="w-4 h-4 text-white" />
                                            </motion.div>
                                        </div>

                                        {/* Why Choose Us - compact row */}
                                        <div className="relative z-10 mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                                            <div className="text-center">
                                                <div className="text-white text-[13px] font-bold">{country?.stats?.visas || '20K+'}</div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-wider">Visas Processed</div>
                                            </div>
                                            <div className="text-center border-x border-white/10">
                                                <div className="text-white text-[13px] font-bold">10+ Years</div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-wider">Experience</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-white text-[13px] font-bold">24/7</div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-wider">Support</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-gray-50/80 px-8 py-3.5 flex items-center justify-between border-t border-gray-100">
                    <div className="flex items-center gap-4">
                        <span className="text-[13px] text-gray-400">Need expert guidance?</span>
                        <Link href="/contact">
                            <motion.div
                                className="flex items-center gap-2 px-5 py-2 bg-[#1f406d] text-white rounded-full text-[12px] font-bold tracking-wide"
                                whileHover={{ scale: 1.03, backgroundColor: '#16325a' }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Free Consultation
                                <ArrowRight className="w-3 h-3" />
                            </motion.div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-6 text-[12px] text-gray-400">
                        <a href="tel:1800-123-4567" className="hover:text-[#1f406d] transition-colors flex items-center gap-1.5">
                            <span>📞</span> 1800-123-4567
                        </a>
                        <a href="mailto:info@migratezone.com" className="hover:text-[#1f406d] transition-colors flex items-center gap-1.5">
                            <span>📧</span> info@migratezone.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [expandedMobileItems, setExpandedMobileItems] = useState([]);
    const [navTheme, setNavTheme] = useState('white'); // 'black', 'white', 'glass'
    const pathname = usePathname();
    const hoverTimeoutRef = useRef(null);
    const navContainerRef = useRef(null);

    useEffect(() => {
        const detectTheme = () => {
            if (window.scrollY >= 60) {
                setNavTheme('glass');
                return;
            }

            // Detect background under navbar
            const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
            const bgEl = elements.find(el =>
                el &&
                !navContainerRef.current?.contains(el) &&
                !el.closest('header')
            );

            if (bgEl) {
                const style = window.getComputedStyle(bgEl);
                let bgColor = style.backgroundColor;

                // If current element is transparent, find nearest parent with color
                let parent = bgEl;
                while ((bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') && parent.parentElement) {
                    parent = parent.parentElement;
                    bgColor = window.getComputedStyle(parent).backgroundColor;
                }

                const match = bgColor.match(/\d+/g);
                if (match) {
                    const [r, g, b] = match.map(Number);
                    const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

                    if (r === 255 && g === 255 && b === 255) {
                        setNavTheme('black');
                    } else if (luminance > 240) {
                        setNavTheme('glass');
                    } else if (luminance < 140) {
                        setNavTheme('white');
                    } else {
                        // For complex backgrounds, default to white for contrast
                        setNavTheme('white');
                    }
                } else {
                    setNavTheme('white');
                }
            } else {
                setNavTheme('white');
            }
        };

        const handleScroll = () => {
            detectTheme();
        };

        window.addEventListener('scroll', handleScroll);
        // Initial detection after a small delay to ensure DOM is ready
        const timer = setTimeout(detectTheme, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const handleMouseEnter = useCallback((index) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setHoveredIndex(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredIndex(null);
        }, 300);
    }, []);

    const toggleMobileExpand = (label) => {
        setExpandedMobileItems(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    const handleNavClick = (e, href) => {
        if (href === '/' && pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        } else {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="fixed top-6 left-0 w-full z-50 px-6">
            <header className="max-w-[90rem] mx-auto">

                {/* Navbar Container */}
                <div ref={navContainerRef} className="relative flex items-center justify-center">
                    {/* Logo Container */}
                    <motion.div
                        className={`relative z-20 flex items-center justify-center px-6 h-14 rounded-full mr-4 transition-all duration-500 ease-in-out
                            ${navTheme === 'glass'
                                ? 'bg-white/70 backdrop-blur-xl border border-black/10 shadow-[0px_8px_32px_rgba(0,0,0,0.06)]'
                                : navTheme === 'black'
                                    ? 'bg-transparent border border-black/20 shadow-none'
                                    : 'bg-transparent border-none shadow-none'}`}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/" className="flex items-center justify-center" onClick={(e) => handleNavClick(e, '/')}>
                            <img
                                src="/logo-wide-removebg-preview.png"
                                alt="Migrate Zone Logo"
                                className="h-10 w-auto max-w-[180px] object-contain transition-all duration-500"
                            />
                        </Link>
                    </motion.div>

                    {/* Navigation Container */}
                    <div className={`relative z-10 rounded-full px-4 py-3 transition-all duration-500 ease-in-out
                        ${navTheme === 'glass'
                            ? 'bg-white/70 backdrop-blur-xl border border-black/10 shadow-[0px_8px_32px_rgba(0,0,0,0.06)]'
                            : navTheme === 'black'
                                ? 'bg-transparent border border-black/20 shadow-none'
                                : 'bg-transparent border-none shadow-none'}`}>
                        <div className="hidden xl:flex items-center gap-0.5">
                            {navItems.map((item, index) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                                        <motion.div
                                            className={`relative flex items-center gap-1.5 py-2 px-3 text-[12px] font-black tracking-widest uppercase 
                                                       transition-all duration-500 rounded-full
                                                       ${hoveredIndex === index
                                                    ? (navTheme === 'glass' ? 'bg-[#1f406d]/10 text-[#1f406d]' : navTheme === 'black' ? 'bg-black/5 text-slate-950' : 'bg-white/15 text-white')
                                                    : (navTheme === 'glass' ? 'text-[#1f406d]/80 hover:text-[#1f406d]' : navTheme === 'black' ? 'text-slate-700 hover:text-slate-950' : 'text-white/80 hover:text-white')
                                                }`}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {item.label}

                                            {item.subItems && (
                                                <motion.div
                                                    animate={{ rotate: hoveredIndex === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronDown className="w-3 h-3" />
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    </Link>

                                    {item.subItems && (
                                        <MegaDropdown
                                            items={item.subItems}
                                            isOpen={hoveredIndex === index}
                                            parentLabel={item.label}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className={`xl:hidden p-2 transition-colors duration-500 
                                ${navTheme === 'glass' ? 'text-[#1f406d]' : navTheme === 'black' ? 'text-black' : 'text-white'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="absolute top-full mt-4 left-0 right-0 xl:hidden max-h-[80vh] overflow-y-auto"
                        >
                            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                                <div className="space-y-2">
                                    {navItems.map((item, idx) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.03 }}
                                        >
                                            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50">
                                                <Link
                                                    href={item.href}
                                                    className="flex items-center gap-3 text-[13px] font-black tracking-widest text-[#1f406d] uppercase"
                                                    onClick={(e) => handleNavClick(e, item.href)}
                                                >
                                                    {item.label}
                                                </Link>
                                                {item.subItems && (
                                                    <button onClick={() => toggleMobileExpand(item.label)} className="p-2 rounded-full bg-gray-100">
                                                        <ChevronDown className={`w-4 h-4 text-[#1f406d] transition-transform ${expandedMobileItems.includes(item.label) ? 'rotate-180' : ''}`} />
                                                    </button>
                                                )}
                                            </div>

                                            <AnimatePresence>
                                                {item.subItems && expandedMobileItems.includes(item.label) && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="ml-6 pl-4 border-l-2 border-[#1f406d]/10 space-y-1 overflow-hidden"
                                                    >
                                                        {item.subItems.map(subItem => (
                                                            <Link
                                                                key={subItem.label}
                                                                href={subItem.href}
                                                                className="block text-[12px] font-bold tracking-wide text-gray-500 hover:text-[#1f406d] uppercase py-2.5"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 }}
                                    className="w-full mt-6 py-4 bg-[#1f406d] text-white rounded-xl font-bold text-xs uppercase tracking-widest"
                                >
                                    Get Free Consultation
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header >
        </div >
    );
}
