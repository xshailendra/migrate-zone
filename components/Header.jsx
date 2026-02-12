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
                    { label: 'Skilled In-Demand - 482', href: '/australia/work-visa/skilled-in-demand-visa-australia' },
                ]
            },
            { label: 'Student Visa', href: '/australia/student-visa', description: 'Study in world-class Australian universities.' },
            { label: 'Tourist Visa - 600', href: '/australia/tourist-visa/subclass-600', description: 'Visit Australia for tourism and holidays.' },
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
                    { label: 'Federal Business Immigration', href: '/canada/business-visa/federal-business-immigration-canada' },
                    { label: 'Provincial Nominee Investor Visa', href: '/canada/business-visa/provincial-nominee-investor-visa-canada' },
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
                    { label: 'Canada Visitor Visa', href: '/canada/canada-visitor-visa' },
                    { label: 'Tourist Visa', href: '/canada/travel-visa/tourist' },
                ]
            },
            { label: 'Work Visa', href: '/canada/canada-work-visa-services', description: 'Work permits and employment pathways.' },
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
            { label: 'Visitor Visa', href: '/usa/usa-visitor-visa', description: 'B1/B2 visas for tourism and business.' },
        ]
    },
    {
        label: 'UK', href: '/uk', subItems: [
            { label: 'Student Visa', href: '/uk/student-visa', description: 'Student visa for UK education.' },
            { label: 'Visitor Visa', href: '/uk/visitor-visa', description: 'Standard visitor visa for UK.' },
            { label: 'Skilled Worker Visa', href: '/uk/uk-skilled-worker-visa', description: 'Work and live in the UK with sponsorship.' },
        ]
    },
    {
        label: 'EUROPE', href: '/europe', subItems: [
            { label: 'Tourist Schengen Visa', href: '/europe/tourist-schengen-visa', description: 'Schengen visa for European travel.' },
        ]
    },
    { label: 'BLOG', href: '/blog' },
    { label: 'CAREER', href: 'https://evolgroups.com/mz/career/', target: '_blank' },
    { label: 'EVENTS', href: '/events' },
];

// Category icons with colors
const getCategoryConfig = (label) => {
    return categoryConfig[label] || { icon: Briefcase, color: '#1f406d', bg: '#e8f0fe' };
};

// New Tabbed Mega Dropdown
const MegaDropdown = ({ items, isOpen, parentLabel, onMouseEnter, onMouseLeave }) => {
    const dropdownRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);
    const country = countryData[parentLabel];

    // Reset active tab when menu closes
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => setActiveTab(0), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useLayoutEffect(() => {
        if (!dropdownRef.current) return;

        const ctx = gsap.context(() => {
            if (isOpen) {
                gsap.set(dropdownRef.current, { display: 'block', pointerEvents: 'auto' });
                // Premium reveal: Smooth slide and fade
                gsap.fromTo(dropdownRef.current,
                    { opacity: 0, y: -10, scale: 0.99 },
                    {
                        opacity: 1, y: 0, scale: 1,
                        duration: 0.4,
                        ease: 'power3.out'
                    }
                );
            } else {
                gsap.to(dropdownRef.current, {
                    opacity: 0,
                    y: -10,
                    scale: 0.99,
                    duration: 0.3,
                    ease: 'power2.in',
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

    const activeItem = items[activeTab];
    const ActiveIcon = getCategoryConfig(activeItem?.label).icon;

    return (
        <div
            ref={dropdownRef}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(31,64,109,0.12),0_10px_40px_rgba(0,0,0,0.04)] bg-white border border-white"
            style={{ display: 'none', width: 'min(1050px, 95vw)' }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex min-h-[480px]">
                {/* Left Sidebar - Categories */}
                <div className="w-[28%] bg-white py-8 pl-8 pr-4 flex flex-col border-r border-gray-50/50">
                    <div className="mb-6 px-4">
                        <h3 className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">
                            Visa Categories
                        </h3>
                    </div>
                    <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar pr-2">
                        {items.map((item, index) => {
                            const isActive = activeTab === index;
                            const config = getCategoryConfig(item.label);
                            const Icon = config.icon;

                            return (
                                <div
                                    key={index}
                                    className={`group flex items-center gap-4 p-4 rounded-[20px] cursor-pointer transition-all duration-300 relative
                                        ${isActive ? 'bg-[#1f406d] text-white shadow-lg shadow-blue-900/10' : 'hover:bg-[#F8F9FB] text-gray-500 hover:text-[#1f406d]'}`}
                                    onMouseEnter={() => setActiveTab(index)}
                                >
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300
                                        ${isActive ? 'bg-white/20 text-white' : 'bg-white border border-gray-100 group-hover:border-[#1f406d]/20 text-gray-400 group-hover:text-[#1f406d]'}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <div className={`text-[13px] font-bold leading-none mb-1.5 ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-[#1f406d]'}`}>
                                            {item.label}
                                        </div>
                                        <div className={`text-[11px] line-clamp-1 ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                                            {item.description || 'Explore options'}
                                        </div>
                                    </div>
                                    {isActive && (
                                        <ArrowRight className="w-4 h-4 text-white/80" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="w-[72%] bg-white p-10 flex flex-col relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                        <div>
                            <h3 className="text-[11px] font-bold text-[#e41e25] uppercase tracking-widest mb-1.5">
                                Solutions for
                            </h3>
                            <h2 className="text-3xl font-black text-[#1f406d] tracking-tight">
                                {activeItem?.label}
                            </h2>
                        </div>
                        {activeItem && activeItem.subItems && activeItem.subItems.length > 0 && (
                            <Link href={activeItem.href}>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-[12px] font-bold text-gray-500 hover:bg-[#1f406d] hover:text-white transition-all cursor-pointer">
                                    View All
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        )}
                    </div>

                    <div className="flex-1 flex gap-10">
                        {/* Sub-items List (Grid) */}
                        <div className="flex-1">
                            {activeItem?.subItems && activeItem.subItems.length > 0 ? (
                                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                    {activeItem.subItems.map((sub, i) => (
                                        <Link key={i} href={sub.href} className="h-full">
                                            <motion.div
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.03 }}
                                                className="group flex items-center gap-3 p-4 rounded-2xl bg-[#e41e25] text-white shadow-lg shadow-[#e41e25]/20 transition-all hover:scale-[1.02] h-full w-full justify-start"
                                            >
                                                <div className="w-1.5 h-1.5 flex-shrink-0 rounded-full bg-white" />
                                                <div className="text-[13px] font-bold text-white leading-tight">
                                                    {sub.label}
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col justify-center items-start text-gray-400 pl-4">
                                    <p className="mb-6 text-sm leading-relaxed max-w-sm text-gray-500">
                                        {activeItem?.description || `Explore our comprehensive ${activeItem?.label} services designed to help you migrate with confidence.`}
                                    </p>
                                    <Link href={activeItem?.href || '#'}>
                                        <button className="px-6 py-3 bg-[#1f406d] text-white text-[13px] font-bold rounded-full hover:bg-[#163055] hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-900/20">
                                            Start Your Application <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Promo Card / Right Sidebar */}
                        <div className="w-[260px] flex-shrink-0">
                            <motion.div
                                key={activeItem?.label}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="h-full rounded-[30px] overflow-hidden relative group bg-gray-900 shadow-xl"
                            >
                                <img
                                    src={country?.image || '/australia_country_1770386989728.png'}
                                    alt={parentLabel}
                                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1f406d] via-[#1f406d]/30 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white mb-4 border border-white/20 shadow-lg">
                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                        Featured
                                    </div>
                                    <h4 className="text-white font-bold text-[18px] leading-tight mb-2">
                                        {parentLabel}
                                    </h4>
                                    <p className="text-white/80 text-[12px] leading-relaxed mb-5 font-medium">
                                        Let us handle your {activeItem?.label.toLowerCase()} process with 98% success rate.
                                    </p>

                                    <Link href="/contact">
                                        <div className="w-full py-3 rounded-xl bg-white text-[#1f406d] text-[12px] font-extrabold text-center hover:bg-[#e41e25] hover:text-white transition-all cursor-pointer shadow-lg">
                                            Free Assessment
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Footer Strip inside Panel */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div>
                            <div className="text-[13px] font-bold text-gray-800">
                                Need different solutions?
                            </div>
                            <div className="text-[11px] text-gray-400">
                                We offer tailored advice for complex migration cases.
                            </div>
                        </div>
                        <Link href="/contact">
                            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 text-[11px] font-bold rounded-lg hover:border-[#1f406d] hover:text-[#1f406d] transition-colors">
                                Talk to Sales
                            </button>
                        </Link>
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
        <div className="fixed top-6 left-0 w-full z-50 px-6 font-outfit">
            <header className="max-w-[90rem] mx-auto">

                {/* Navbar Container */}
                <div ref={navContainerRef} className="relative flex items-center justify-center">
                    {/* Logo Container */}
                    <motion.div
                        className={`relative z-20 flex items-center justify-center px-4 md:px-6 h-12 md:h-14 rounded-full mr-2 md:mr-4 transition-all duration-500 ease-in-out
                            ${navTheme === 'glass'
                                ? 'bg-white/70 backdrop-blur-xl border border-black/10 shadow-[0px_8px_32px_rgba(0,0,0,0.06)]'
                                : navTheme === 'black'
                                    ? 'bg-transparent border border-black/20 shadow-none'
                                    : 'bg-transparent border-none shadow-none'}`}
                        whileHover={{ scale: 1.02 }}
                    >
                        <Link href="/" className="flex items-center justify-center gap-1.5 md:gap-2 h-8 md:h-10 max-w-[150px] md:max-w-[180px]" onClick={(e) => handleNavClick(e, '/')}>
                            <img
                                src="/logos/footer-left.png"
                                alt="Migrate Zone"
                                className="h-6 w-6 md:h-8 md:w-8 object-contain flex-shrink-0"
                            />
                            <span className="text-[14px] md:text-[17px] font-extrabold tracking-tight whitespace-nowrap" style={{ color: '#e41e25' }}>
                                MIGRATE ZONE
                            </span>
                        </Link>
                    </motion.div>

                    {/* Navigation Container */}
                    <div className={`relative z-10 rounded-full px-2 md:px-4 py-2 md:py-3 transition-all duration-500 ease-in-out
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
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        {...(item.target ? { target: item.target, rel: 'noopener noreferrer' } : {})}
                                    >
                                        <motion.div
                                            className={`relative flex items-center gap-1.5 py-2 px-3 text-[13px] font-medium tracking-widest uppercase 
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

                    {/* Contact/Chat Toggle — Separate but close to main navbar unit */}
                    <motion.div
                        className="hidden xl:flex items-center ml-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Link href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
                            <motion.div
                                className={`group relative w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500
                                           ${navTheme === 'glass'
                                        ? 'bg-white/70 backdrop-blur-xl border border-black/10 shadow-[0px_8px_32px_rgba(0,0,0,0.06)] text-[#1f406d]'
                                        : navTheme === 'black'
                                            ? 'bg-white border border-black/20 text-[#1f406d] shadow-sm'
                                            : 'bg-white/10 backdrop-blur-md text-white border border-white/20'}`}
                                whileHover={{ scale: 1.1, backgroundColor: '#e41e25', color: '#fff', borderColor: '#e41e25' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img src="/contact-us.png" alt="Contact Us" className="w-6 h-6 object-contain transition-transform duration-500 group-hover:rotate-[360deg]" />


                                {/* Tooltip */}
                                <div className="absolute top-full mt-3 right-0 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                                    <div className="bg-[#1f406d] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl uppercase tracking-widest">
                                        Contact Us
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>

                {/* Render Mega Menus outside the Navigation Container to avoid backdrop-filter coordinate issues */}
                {navItems.map((item, index) => (
                    item.subItems && (
                        <MegaDropdown
                            key={`dropdown-${item.label}`}
                            items={item.subItems}
                            isOpen={hoveredIndex === index}
                            parentLabel={item.label}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                ))}

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
                                                    {...(item.target ? { target: item.target, rel: 'noopener noreferrer' } : {})}
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
            </header>
        </div>
    );
}
