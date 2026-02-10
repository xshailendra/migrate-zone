'use client';

import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Plane, GraduationCap, Briefcase, Users, Building2, Clock, Star, TrendingUp, CheckCircle2, Sparkles, Globe, MapPin, Award, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

// Country images and data
const countryData = {
    'AUSTRALIA': {
        image: '/australia_country_1770386989728.png',
        flag: '🇦🇺',
        tagline: 'Land of Opportunities',
        highlight: 'Skilled Migration Hub',
        color: '#00843D',
        stats: { visas: '50K+', success: '98%', processing: '8-12 weeks' }
    },
    'CANADA': {
        image: '/canada_country_1770386923730.png',
        flag: '🇨🇦',
        tagline: 'Your Gateway to PR',
        highlight: 'Express Entry Experts',
        color: '#FF0000',
        stats: { visas: '40K+', success: '97%', processing: '6-8 months' }
    },
    'NEW ZEALAND': {
        image: '/newzealand_country_1770386941714.png',
        flag: '🇳🇿',
        tagline: 'Natural Paradise',
        highlight: 'Quality of Life',
        color: '#00247D',
        stats: { visas: '15K+', success: '96%', processing: '4-6 weeks' }
    },
    'USA': {
        image: '/usa_country_1770386959388.png',
        flag: '🇺🇸',
        tagline: 'The American Dream',
        highlight: 'Study & Work Visas',
        color: '#3C3B6E',
        stats: { visas: '30K+', success: '95%', processing: '3-6 months' }
    },
    'UK': {
        image: '/uk_country_1770387018157.png',
        flag: '🇬🇧',
        tagline: 'World-Class Education',
        highlight: 'Student Visa Experts',
        color: '#012169',
        stats: { visas: '25K+', success: '97%', processing: '3-8 weeks' }
    },
    'EUROPE': {
        image: '/europe_country_1770387043225.png',
        flag: '🇪🇺',
        tagline: 'Explore the Continent',
        highlight: 'Schengen Specialists',
        color: '#003399',
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

// Modern Visa Category Item
const VisaCategoryItem = ({ item, index, onHover, isActive, country }) => {
    const config = categoryConfig[item.label] || { icon: Briefcase, color: '#1f406d', bg: '#e8f0fe' };
    const IconComponent = config.icon;
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
            onMouseEnter={() => onHover(item)}
            className="relative"
        >
            <Link href={item.href}>
                <motion.div
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300
                        ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Icon */}
                    <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                            ${isActive ? 'bg-white text-[#1f406d]' : 'bg-white/10 text-white group-hover:bg-white/20'}`}
                    >
                        <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h4 className="font-bold text-white text-sm mb-0.5">{item.label}</h4>
                        <p className="text-white/60 text-xs line-clamp-1">
                            {item.description || 'Expert consultation services'}
                        </p>
                    </div>

                    {/* Arrow / Sub items indicator */}
                    {hasSubItems ? (
                        <motion.div
                            animate={{ x: isActive ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronRight className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-white/40'}`} />
                        </motion.div>
                    ) : (
                        <ArrowRight className="w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                </motion.div>
            </Link>
        </motion.div>
    );
};

// Sub Menu Panel with smooth animations
const SubMenuPanel = ({ item, country }) => {
    const panelRef = useRef(null);
    const config = categoryConfig[item.label] || { icon: Briefcase, color: '#1f406d', bg: '#e8f0fe' };

    useLayoutEffect(() => {
        if (!panelRef.current) return;

        const ctx = gsap.context(() => {
            // Smooth slide in
            gsap.fromTo(panelRef.current,
                { opacity: 0, x: 30, scale: 0.95 },
                { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
            );

            // Stagger children
            const items = panelRef.current.querySelectorAll('.sub-item');
            gsap.fromTo(items,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, stagger: 0.04, duration: 0.35, ease: 'power2.out', delay: 0.15 }
            );
        }, panelRef);

        return () => ctx.revert();
    }, [item]);

    return (
        <motion.div
            ref={panelRef}
            className="h-full p-8 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: config.color }}
                    >
                        {(() => {
                            const IconComponent = config.icon;
                            return <IconComponent className="w-5 h-5 text-white" />;
                        })()}
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-gray-900">{item.label}</h3>
                        <p className="text-sm text-gray-500">{item.subItems?.length || 0} options available</p>
                    </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>

            {/* Sub items */}
            <div className="flex-1 space-y-2 overflow-y-auto">
                {item.subItems?.map((subItem, idx) => (
                    <Link key={subItem.label} href={subItem.href} className="sub-item block">
                        <motion.div
                            className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all duration-200"
                            whileHover={{ x: 6, backgroundColor: '#f0f4f8' }}
                        >
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ background: config.color }}
                            />
                            <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                {subItem.label}
                            </span>
                            <ArrowRight
                                className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                            />
                        </motion.div>
                    </Link>
                ))}
            </div>

            {/* CTA */}
            <Link href={item.href} className="mt-6">
                <motion.div
                    className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white"
                    style={{ background: config.color }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>View All Options</span>
                    <ArrowRight className="w-4 h-4" />
                </motion.div>
            </Link>
        </motion.div>
    );
};

// New Modern Mega Dropdown
const MegaDropdown = ({ items, isOpen, parentLabel }) => {
    const dropdownRef = useRef(null);
    const [hoveredItem, setHoveredItem] = useState(null);
    const country = countryData[parentLabel];

    useLayoutEffect(() => {
        if (!dropdownRef.current) return;

        const ctx = gsap.context(() => {
            if (isOpen) {
                gsap.set(dropdownRef.current, { display: 'block', pointerEvents: 'auto' });
                gsap.fromTo(dropdownRef.current,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
                );
            } else {
                gsap.to(dropdownRef.current, {
                    opacity: 0, y: -15, duration: 0.2, ease: 'power2.in',
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

    useEffect(() => {
        if (!isOpen) setHoveredItem(null);
    }, [isOpen]);

    if (!items || items.length === 0) return null;

    const showSubPanel = hoveredItem && hoveredItem.subItems && hoveredItem.subItems.length > 0;

    return (
        <div
            ref={dropdownRef}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50"
            style={{ display: 'none', width: 'min(1200px, 95vw)' }}
        >
            <div className="rounded-3xl overflow-hidden border border-gray-200">
                <div className="flex min-h-[620px]">

                    {/* Left - Full Image Background with Categories */}
                    <div className="relative w-[420px] flex-shrink-0">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={country?.image || '/australia_country_1770386989728.png'}
                                alt={parentLabel}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(135deg, ${country?.color || '#1f406d'}f0 0%, ${country?.color || '#1f406d'}cc 100%)`
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col p-6">
                            {/* Header */}
                            <div className="mb-4">
                                <motion.div
                                    className="flex items-center gap-3 mb-4"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-4xl">{country?.flag}</span>
                                    <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white">
                                        Popular Destination
                                    </div>
                                </motion.div>
                                <motion.h2
                                    className="text-3xl font-black text-white mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {parentLabel}
                                </motion.h2>
                                <motion.p
                                    className="text-white/80"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.35 }}
                                >
                                    {country?.tagline}
                                </motion.p>
                            </div>

                            {/* Categories List */}
                            <div className="flex-1 space-y-0.5 overflow-y-auto pr-2 max-h-[350px]">
                                {items.map((item, index) => (
                                    <VisaCategoryItem
                                        key={item.label}
                                        item={item}
                                        index={index}
                                        onHover={setHoveredItem}
                                        isActive={hoveredItem?.label === item.label}
                                        country={country}
                                    />
                                ))}
                            </div>

                            {/* Stats */}
                            <motion.div
                                className="mt-4 flex gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="flex-1 bg-white/10 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-black text-white">{country?.stats?.visas}</div>
                                    <div className="text-xs text-white/60">Visas</div>
                                </div>
                                <div className="flex-1 bg-white/10 rounded-xl p-4 text-center">
                                    <div className="text-2xl font-black text-white">{country?.stats?.success}</div>
                                    <div className="text-xs text-white/60">Success</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right - Sub Panel or Default Content */}
                    <div className="flex-1 bg-white">
                        <AnimatePresence mode="wait">
                            {showSubPanel ? (
                                <SubMenuPanel
                                    key={hoveredItem.label}
                                    item={hoveredItem}
                                    country={country}
                                />
                            ) : (
                                <motion.div
                                    key="default"
                                    className="h-full flex flex-col items-center justify-center p-12 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {/* Default Image */}
                                    <div className="w-48 h-48 rounded-3xl overflow-hidden mb-8 shadow-xl">
                                        <img
                                            src={country?.image || '/australia_country_1770386989728.png'}
                                            alt={parentLabel}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-black text-gray-900 mb-3">
                                        Explore {parentLabel}
                                    </h3>
                                    <p className="text-gray-500 mb-6 max-w-sm">
                                        Hover over a visa category to see available options and pathways
                                    </p>

                                    <Link href={`/${parentLabel.toLowerCase().replace(' ', '-')}`}>
                                        <motion.button
                                            className="px-8 py-4 bg-[#1f406d] text-white rounded-xl font-bold text-sm flex items-center gap-2"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View All Services
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-gray-50 px-8 py-4 flex items-center justify-between border-t border-gray-100">
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Need help?</span>
                        <Link href="/contact">
                            <motion.div
                                className="flex items-center gap-2 px-4 py-2 bg-[#1f406d] text-white rounded-full text-sm font-bold"
                                whileHover={{ scale: 1.02 }}
                            >
                                Free Consultation
                                <ArrowRight className="w-3 h-3" />
                            </motion.div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <a href="tel:1800-123-4567" className="hover:text-[#1f406d] transition-colors">
                            📞 1800-123-4567
                        </a>
                        <a href="mailto:info@migratezone.com" className="hover:text-[#1f406d] transition-colors">
                            📧 info@migratezone.com
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
    const hoverTimeoutRef = useRef(null);
    const navContainerRef = useRef(null);

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

    return (
        <div className="fixed top-6 left-0 w-full z-50 px-6">
            <header className="max-w-[90rem] mx-auto">

                {/* Navbar Container */}
                <div ref={navContainerRef} className="relative flex items-center justify-center">
                    {/* Logo */}
                    <motion.div
                        className="relative z-20 flex items-center justify-center px-6 h-14 bg-[#1f406d] rounded-full mr-4"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/" className="flex items-center justify-center">
                            <img src="/logo-wide-removebg-preview.png" alt="Migrate Zone Logo" className="h-10 w-auto max-w-[180px] object-contain" />
                        </Link>
                    </motion.div>

                    {/* Navigation */}
                    <div className="relative z-10 bg-[#1f406d] rounded-full px-4 py-3">
                        <div className="hidden xl:flex items-center gap-0.5">
                            {navItems.map((item, index) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link href={item.href}>
                                        <motion.div
                                            className={`relative flex items-center gap-1.5 py-2 px-3 text-[10px] font-black tracking-widest uppercase 
                                                       transition-all duration-300 rounded-full
                                                       ${hoveredIndex === index
                                                    ? 'text-white bg-white/15'
                                                    : 'text-white/80 hover:text-white hover:bg-white/5'
                                                }`}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            {item.subItems && countryData[item.label] && (
                                                <span className="text-sm">
                                                    {countryData[item.label].flag}
                                                </span>
                                            )}

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
                        <button className="xl:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
                                                    className="flex items-center gap-3 text-[11px] font-black tracking-widest text-[#1f406d] uppercase"
                                                    onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                                                >
                                                    {countryData[item.label] && <span className="text-xl">{countryData[item.label].flag}</span>}
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
                                                                className="block text-[10px] font-bold tracking-wide text-gray-500 hover:text-[#1f406d] uppercase py-2.5"
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
            </header>
        </div>
    );
}
