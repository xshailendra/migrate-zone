'use client';

import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, MapPin, Globe, Shield, Heart, TrendingUp, Users, GraduationCap, Briefcase, Building2, Plane, Clock, ClipboardCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RequestCallBack from '@/components/RequestCallBack';

// --- Custom Decorative Components ---

const StarBurst = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className}>
        <path
            d="M50 0 L53 47 L100 50 L53 53 L50 100 L47 53 L0 50 L47 47 Z"
            fill="currentColor"
        />
        <path
            d="M50 15 L51.5 48.5 L85 50 L51.5 51.5 L50 85 L48.5 51.5 L15 50 L48.5 48.5 Z"
            fill="currentColor"
            opacity="0.5"
        />
    </svg>
);

const ArchedImage = ({ src, className, height = "h-80" }) => (
    <div className={`relative overflow-hidden rounded-t-full ${height} ${className}`}>
        <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
);

const DecorativeCrown = ({ className }) => (
    <div className={`flex items-end justify-center gap-1 ${className}`}>
        {[...Array(11)].map((_, i) => (
            <div
                key={i}
                className="w-1 bg-[#1f406d]"
                style={{
                    height: `${Math.max(10, 60 - Math.abs(i - 5) * 12)}px`,
                    opacity: i === 5 ? 1 : 0.4,
                    backgroundColor: i === 5 ? '#E42E25' : '#1f406d'
                }}
            />
        ))}
    </div>
);

// --- Data ---

const visaCategories = [
    {
        title: 'Employer Sponsored',
        desc: 'Employer sponsored visa has of late become the most sought after form of immigration to Australia not only on Temporary basis but also on permanent basis.',
        icon: Briefcase,
        subsets: ['TSS 482', 'ENS 186', 'SESR 494']
    },
    {
        title: 'Skilled Migration',
        desc: 'The Economy of Australia is said to be one of the most powerful in the world. Young people prefer Australia as it offers the maximum professional growth.',
        icon: TrendingUp,
        subsets: ['189', '190', '491']
    },
    {
        title: 'Student Visa',
        desc: 'Simplified Student Visa Framework (SSVF) will be applicable to ease the process and designed to attract quality students to the world-class Australian universities.',
        icon: GraduationCap,
        subsets: ['Subclass 500']
    },
    {
        title: 'Work Visa',
        desc: 'The Australian 457 visa (Temporary Business Long Stay) allows employers to sponsor overseas workers for authentic and secure employment opportunities.',
        icon: Building2,
        subsets: ['457', '482']
    },
    {
        title: 'Tourist Visa',
        desc: 'This australian Visitor visa (subclass 600) lets you visit Australia for travel or business visitor activities. Tourism includes outings and refreshment.',
        icon: Plane,
        subsets: ['Subclass 600']
    },
    {
        title: 'Business Visa',
        desc: 'Designed for travel or business visitor activities, including outings, refreshment and strategic business investments in Australia.',
        icon: Users,
        subsets: ['Subclass 188', 'Subclass 132']
    },
];

export default function AustraliaPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[#E42E25] selection:text-white relative">
            {/* Global Page Background Watermark */}
            <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.25] overflow-hidden">
                <img
                    src="/australia-flag-dots.png"
                    alt=""
                    className="w-[80%] max-w-[1000px] h-auto object-contain"
                />
            </div>
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-10 overflow-hidden">
                <div className="max-w-[1400px] mx-auto">

                    <div className="flex justify-center items-end gap-3 md:gap-6 mb-16 px-4">
                        {[
                            { src: "/australia_country_1770386989728.png", w: "w-24 md:w-40", h: "h-40 md:h-64", o: "opacity-60", delay: 0.4 },
                            { src: "/sydney_office_gateway_1770547680868.png", w: "w-28 md:w-48", h: "h-56 md:h-80", o: "opacity-80", delay: 0.2 },
                            { src: "/australia_country_1770386989728.png", w: "w-32 md:w-56", h: "h-72 md:h-[400px]", o: "border-4 border-[#1f406d]/10", delay: 0 },
                            { src: "/sydney_office_gateway_1770547680868.png", w: "w-28 md:w-48", h: "h-56 md:h-80", o: "opacity-80", delay: 0.2 },
                            { src: "/australia_country_1770386989728.png", w: "w-24 md:w-40", h: "h-40 md:h-64", o: "opacity-60", delay: 0.4 },
                        ].map((arch, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.8, delay: arch.delay, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <ArchedImage src={arch.src} className={`${arch.w} ${arch.h} ${arch.o}`} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center relative">
                        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute -left-4 top-0">
                            <StarBurst className="w-12 md:w-20 text-[#1f406d]/20" />
                        </motion.div>
                        <motion.div initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute -right-4 top-0">
                            <StarBurst className="w-12 md:w-20 text-[#1f406d]/20" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-7xl md:text-[12vw] font-[900] font-syne text-[#1f406d] leading-[0.85] tracking-tighter uppercase mb-8"
                        >
                            AUSTRALIA
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex items-center justify-center gap-8 mb-12"
                        >
                            <i className="text-xl md:text-3xl font-serif text-[#1f406d]/60">1998</i>
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}>
                                <StarBurst className="w-8 md:w-16 text-[#E42E25]" />
                            </motion.div>
                            <i className="text-xl md:text-3xl font-serif text-[#1f406d]/60">2026</i>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="max-w-4xl mx-auto mb-16"
                        >
                            <p className="text-lg md:text-2xl font-serif italic text-[#1f406d] leading-relaxed">
                                "Australia has been the most influential country in the world for the past two decades, attracting tourists, workers, students, and residents from all over the globe."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Content Section */}
            <section className="py-24 px-6 md:px-10 border-t border-[#1f406d]/5">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="text-[#1f406d]">
                        <h2 className="text-5xl md:text-7xl font-black font-syne leading-none uppercase tracking-tighter mb-8">
                            Global <br />
                            <span className="text-[#E42E25]">Presence</span>
                        </h2>
                        <div className="space-y-6 text-lg font-medium leading-relaxed opacity-80 mb-10">
                            <p>
                                Australia is not only a beautiful location to visit, but it is also the most acceptable place to work in a wide range of fields. Due to Australia's high employment rate, one can be assured of economic stability.
                            </p>
                            <p>
                                Migrate Zone Immigration consultancy helps in attaining the most appropriate Australian visa category for the migrants. We provide aspirants with personal and accessible visa services from registration to settling down.
                            </p>
                        </div>

                        {/* Opening Hours - inline compact */}
                        <div className="flex items-center gap-4 bg-[#1f406d]/[0.03] rounded-2xl p-5 border border-[#1f406d]/[0.06]">
                            <div className="w-10 h-10 bg-[#E42E25] rounded-xl flex items-center justify-center shrink-0">
                                <Clock className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f406d]/40 mb-1">Opening Hours</h4>
                                <div className="flex items-center gap-6 text-sm">
                                    <span className="font-bold text-[#1f406d]">Mon–Sat: <span className="font-medium opacity-60">10am – 7pm</span></span>
                                    <span className="font-bold text-[#E42E25]">Sun: Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-[#1f406d]/5 p-4 rounded-[40px]">
                            <img
                                src="/australia_country_1770386989728.png"
                                alt="Sydney Expert"
                                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 rounded-[32px] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-32 px-6 md:px-10 bg-transparent relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#1f406d]/[0.02] rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E42E25]/[0.03] rounded-full blur-[80px]" />
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute top-10 right-20">
                        <StarBurst className="w-32 text-[#1f406d]/[0.04]" />
                    </motion.div>
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} className="absolute bottom-10 left-20">
                        <StarBurst className="w-24 text-[#1f406d]/[0.04]" />
                    </motion.div>
                </div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.5em] text-[#E42E25] mb-6 block">Our Services</span>
                            <h2 className="text-5xl md:text-8xl font-black font-syne uppercase tracking-tighter text-[#1f406d] leading-none">
                                Visa <br className="hidden md:block" />Categories
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-[#1f406d]/50 text-lg max-w-md font-medium leading-relaxed"
                        >
                            Comprehensive Australian visa pathways tailored to your unique profile and aspirations.
                        </motion.p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visaCategories.map((visa, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -8 }}
                                className="relative group cursor-pointer"
                            >
                                <div className="relative bg-white p-10 rounded-[28px] border border-[#1f406d]/[0.06] shadow-[0_4px_40px_rgba(31,64,109,0.04)] group-hover:shadow-[0_20px_60px_rgba(31,64,109,0.12)] transition-all duration-500 flex flex-col h-full overflow-hidden">
                                    {/* Left accent bar */}
                                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#E42E25] to-[#1f406d] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-full" />

                                    {/* Number + Icon Row */}
                                    <div className="flex items-start justify-between mb-8">
                                        <span className="text-8xl font-black font-syne text-[#1f406d]/[0.04] group-hover:text-[#E42E25]/10 transition-colors duration-700 leading-none select-none">
                                            0{i + 1}
                                        </span>
                                        <motion.div
                                            className="w-14 h-14 bg-[#1f406d]/[0.04] rounded-2xl flex items-center justify-center group-hover:bg-[#E42E25] transition-all duration-500"
                                            whileHover={{ rotate: 12, scale: 1.1 }}
                                        >
                                            <visa.icon className="w-7 h-7 text-[#1f406d]/60 group-hover:text-white transition-colors duration-500" />
                                        </motion.div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-black font-syne uppercase tracking-tight text-[#1f406d] mb-5 leading-tight group-hover:text-[#1f406d] transition-colors">
                                        {visa.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-[#1f406d]/50 leading-relaxed mb-8 grow group-hover:text-[#1f406d]/70 transition-colors duration-500">
                                        {visa.desc}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {visa.subsets.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 bg-[#1f406d]/[0.04] text-[10px] font-black text-[#1f406d]/60 uppercase rounded-full border border-[#1f406d]/[0.06] group-hover:border-[#E42E25]/20 group-hover:bg-[#E42E25]/5 group-hover:text-[#E42E25] transition-all duration-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-[11px] font-black text-[#E42E25] uppercase tracking-widest group-hover:tracking-[0.25em] transition-all duration-500">Read More</span>
                                        <div className="w-8 h-8 bg-[#E42E25]/10 rounded-full flex items-center justify-center group-hover:bg-[#E42E25] transition-all duration-300">
                                            <ArrowRight className="w-4 h-4 text-[#E42E25] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assessment Section */}
            <section className="py-28 px-6 md:px-10 bg-transparent relative overflow-hidden">
                {/* Background blurs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E42E25]/[0.05] rounded-full blur-[100px]" />

                <div className="max-w-[1200px] mx-auto relative z-10">
                    {/* Main card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-black/10"
                    >
                        {/* Decorative elements inside card */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute -top-10 -right-10 opacity-[0.04]">
                            <StarBurst className="w-60 text-[#1f406d]" />
                        </motion.div>
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#E42E25]/[0.03] to-transparent rounded-tr-full" />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            {/* Left — CTA */}
                            <div>
                                <span className="text-xs font-black uppercase tracking-[0.5em] text-[#E42E25] mb-6 block">Free Assessment</span>
                                <h2 className="text-4xl md:text-6xl font-black font-syne text-[#1f406d] uppercase tracking-tighter mb-6 leading-[0.9]">
                                    Check Your<br />Eligibility
                                </h2>
                                <p className="text-base text-[#1f406d]/50 font-medium leading-relaxed mb-10 max-w-md">
                                    Looking to settle abroad? Our team is highly trained in relevant legislation. Check your eligibility now — completely free.
                                </p>
                                <Link href="/assessment" className="group flex items-center gap-4 px-10 py-4 bg-[#1f406d] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#E42E25] transition-all duration-300 shadow-xl shadow-[#1f406d]/20">
                                    Fill Assessment Form
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Right — Contact */}
                            <div className="space-y-6">
                                <div className="bg-[#1f406d]/[0.03] rounded-2xl p-8 border border-[#1f406d]/[0.06] hover:border-[#E42E25]/20 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#E42E25]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-[#E42E25]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1f406d]/30 mb-1">India Support</p>
                                            <p className="text-2xl font-bold text-[#1f406d]">+91 70696 29625</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1f406d]/[0.03] rounded-2xl p-8 border border-[#1f406d]/[0.06] hover:border-[#E42E25]/20 transition-all duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#E42E25]/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Globe className="w-6 h-6 text-[#E42E25]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1f406d]/30 mb-1">Australia Support</p>
                                            <p className="text-2xl font-bold text-[#1f406d]">+61 2 8099 6026</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-[#1f406d]/20 text-xs italic pt-2">
                                    "Your queries light up our day, we're here to guide you all the way!"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <RequestCallBack />
            <Footer />
        </main>
    );
}
