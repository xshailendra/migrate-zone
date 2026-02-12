'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Users,
    Briefcase,
    FileText,
    Shield,
    MapPin,
    MessageSquare,
    Plus,
    Minus,
    Zap,
    GraduationCap,
    Globe,
    Award,
    HeartPulse,
    Search,
    TrendingUp,
    Building2
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RequestCallBack from '@/components/RequestCallBack';

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// --- Premium iPhone Frame ---
const IPhoneFrame = ({ children, className = "", innerRef }) => (
    <div
        ref={innerRef}
        className={`relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[3.5rem] p-1.5 border-[4px] border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)_inset] overflow-visible ${className}`}
    >
        {/* Side Buttons */}
        <div className="absolute -left-1 top-24 w-0.5 h-12 bg-[#2a2a2a] rounded-r-lg border-y border-r border-white/5" />
        <div className="absolute -left-1 top-40 w-0.5 h-12 bg-[#2a2a2a] rounded-r-lg border-y border-r border-white/5" />
        <div className="absolute -right-1 top-32 w-0.5 h-20 bg-[#2a2a2a] rounded-l-lg border-y border-l border-white/5" />

        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#000] rounded-full z-20 flex items-center justify-end px-3 gap-1.5 border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
            <div className="w-1 h-1 rounded-full bg-[#1a1a1a]" />
        </div>

        {/* Screen Container */}
        <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 opacity-30 bg-gradient-to-tr from-transparent via-white/10 to-white/40 skew-x-12 translate-x-1/2" />
            {children}
        </div>

        <div className="absolute -inset-1 rounded-[3.6rem] border border-white/10 pointer-events-none opacity-50" />
    </div>
);

// --- iPhone Interior Screens ---
const screen1 = (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Occupation Search</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">PMSOL Priority</p>
                <div className="flex flex-wrap gap-1 mt-2">
                    {["Software", "Nurse", "Chef", "Engineer"].map((s, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#E42E25]/10 rounded text-[8px] font-black text-[#E42E25] uppercase tracking-tighter">{s}</span>
                    ))}
                </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">PR Timeline</p>
                <div className="flex items-center gap-3">
                    <p className="text-2xl font-black font-syne text-[#1f406d]">3-6m</p>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <p className="text-[8px] font-bold text-gray-400 mt-1 uppercase tracking-widest leading-tight">For Priority In-Demand Occupations</p>
            </div>
        </div>
    </div>
);

const screen2 = (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
            </div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E42E25] mb-2">Fast-Track</p>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            482 <span className="opacity-30">VISA</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Employer Sponsored PR</p>

        <div className="w-full space-y-3">
            {[
                { label: "Nomination Prep", status: "Active" },
                { label: "Skill Check", status: "Verified" },
                { label: "Lodgement", status: "Priority" },
                { label: "PR Grant", status: "Fast-Track" }
            ].map((step, i) => (
                <div key={i} className="group p-3 bg-[#f8f9fb] rounded-2xl flex items-center gap-3 border border-transparent hover:border-[#1f406d]/10 transition-all">
                    <div className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-[#E42E25] animate-pulse'}`} />
                    <div className="flex-1 text-left">
                        <p className="text-[11px] font-black text-[#1f406d] leading-none mb-1">{step.label}</p>
                        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{step.status}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const screen3 = (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">482 Benefits</h4>
        <div className="space-y-3">
            {[
                "Family Inclusion",
                "Full Work Rights",
                "Medicare Eligible",
                "Direct PR Path"
            ].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Award className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center cursor-pointer hover:bg-[#E42E25] transition-colors">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Check Occupation</span>
        </div>
    </div>
);

// --- FAQ Component ---
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-black/5 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-bold transition-all ${isOpen ? 'text-[#E42E25]' : 'text-[#1f406d]/60 group-hover:text-[#1f406d]'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-[#E42E25]' : 'bg-[#1f406d]/5 group-hover:bg-[#1f406d]/10'}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-[#1f406d]" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-6 text-[#1f406d]/40 leading-relaxed font-medium">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function SkilledInDemandVisaPage() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const leftPhoneRef = useRef(null);
    const centerPhoneRef = useRef(null);
    const rightPhoneRef = useRef(null);
    const processSectionRef = useRef(null);
    const processItemsRef = useRef([]);
    const processLineRef = useRef(null);

    useGSAP(() => {
        // Entrance animation
        gsap.from([leftPhoneRef.current, centerPhoneRef.current, rightPhoneRef.current], {
            y: 200,
            opacity: 0,
            stagger: 0.1,
            duration: 1.5,
            ease: "power4.out"
        });

        // Hero Scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "center center",
                scrub: 1,
            }
        });

        tl.to(leftPhoneRef.current, { x: -60, y: 80, rotation: -5, scale: 0.98, ease: "none" }, 0);
        tl.to(rightPhoneRef.current, { x: 60, y: 80, rotation: 5, scale: 0.98, ease: "none" }, 0);
        tl.to(centerPhoneRef.current, { y: -50, scale: 1.1, ease: "none" }, 0);

        // --- Process Section GSAP ---
        gsap.set(processLineRef.current, { scaleY: 0, transformOrigin: "top" });
        gsap.to(processLineRef.current, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: processSectionRef.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: 0.5
            }
        });

        processItemsRef.current.forEach((item, index) => {
            gsap.fromTo(item,
                { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            const circle = item.querySelector('.number-circle');
            if (circle) {
                gsap.fromTo(circle,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

    }, { scope: containerRef });

    return (
        <main className="min-h-screen bg-white selection:bg-[#E42E25] selection:text-white relative" ref={containerRef}>
            <Header />

            {/* ═══════════════════════════════════════════
                 HERO — Skilled In-Demand (482)
            ═══════════════════════════════════════════ */}
            <section ref={sectionRef} className="pt-64 pb-32 px-6 overflow-hidden bg-white relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#1f406d]/[0.02] rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto text-center relative z-10 mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1f406d]/5 rounded-full border border-[#1f406d]/10 mb-8">
                            <div className="px-1.5 py-0.5 bg-[#E42E25] rounded text-[8px] font-black text-white uppercase tracking-wider">Fast-Track</div>
                            <span className="text-[10px] font-black text-[#1f406d] uppercase tracking-widest">Skilled In-Demand Visa — Subclass 482</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] font-syne text-[#1f406d] leading-[1.1] tracking-tighter mb-8 max-w-5xl mx-auto">
                            Your Skills, <span className="text-[#E42E25]">Australian PR</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                            Move to Australia with your in-demand skills. Fast-track your path to Permanent Residency with specialized employer sponsorship under the <span className="text-[#1f406d] font-bold">482 Visa</span>.
                        </p>

                        <Link href="/assessment" className="group inline-flex items-center gap-4 px-10 py-5 bg-[#1f406d] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#E42E25] transition-all duration-500 shadow-xl shadow-[#1f406d]/10">
                            Free PR Assessment
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="mt-24 md:mt-32 flex justify-center items-end relative perspective-1000 px-6 h-[600px]">
                        <div className="flex justify-center items-end gap-0 md:gap-8 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-20">
                            <IPhoneFrame innerRef={leftPhoneRef} className="hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                {screen1}
                            </IPhoneFrame>
                            <IPhoneFrame innerRef={centerPhoneRef} className="z-10 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                                {screen2}
                            </IPhoneFrame>
                            <IPhoneFrame innerRef={rightPhoneRef} className="hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                {screen3}
                            </IPhoneFrame>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 CORE VALUES — Why 482
            ═══════════════════════════════════════════ */}
            <section className="py-12 md:py-24 px-6 md:px-10 bg-white">
                <div className="max-w-[1400px] mx-auto text-center mb-20">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Visa Intelligence</span>
                    <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-20 max-w-5xl mx-auto leading-tight">
                        Built for <span className="text-[#E42E25]">Priority Professions</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Fast-Track PR", desc: "For occupations on the priority lists (PMSOL), processing and PR pathways are significantly accelerated.", icon: Zap },
                            { title: "Employer Backed", desc: "Direct sponsorship from Australian businesses actively seeking your unique professional skill set.", icon: Building2 },
                            { title: "Global Mobility", desc: "Enjoy full work rights for yourself and open work rights for your partner from day one.", icon: Globe }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-white rounded-[40px] border border-black/[0.03] text-left hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                            >
                                <div className="w-12 h-12 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#1f406d]/5">
                                    <card.icon className="w-5 h-5 text-[#E42E25]" />
                                </div>
                                <h3 className="text-xl font-black font-syne text-[#1f406d] uppercase mb-4 tracking-tight">{card.title}</h3>
                                <p className="text-gray-400 font-medium leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 OCCUPATIONS — In-Demand
            ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1f406d 1px, transparent 1px), linear-gradient(90deg, #1f406d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-8 block">Market Insights</span>
                    <h2 className="text-5xl md:text-8xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-24 leading-none">
                        CRITICAL <span className="text-[#E42E25]">DEMAND</span> 2025
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
                        {[
                            { name: "IT Specialists", role: "Software & Web Developers" },
                            { name: "Healthcare", role: "Nurses & GPs" },
                            { name: "Civil Engineering", role: "Structural & Mechanical" },
                            { name: "Trades", role: "Welders & Electricians" },
                            { name: "Education", role: "Secondary Teachers" },
                            { name: "Medical Tech", role: "Radiographers" },
                            { name: "Finance", role: "Accountants & Auditors" },
                            { name: "Hospitality", role: "Executive Chefs" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-8 bg-[#f8f9fb] border border-[#1f406d]/5 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500"
                            >
                                <h3 className="text-[#E42E25] text-xs font-black uppercase tracking-widest mb-3 underline decoration-[#1f406d]/10">{item.name}</h3>
                                <p className="text-[#1f406d] font-black font-syne uppercase tracking-tighter text-base leading-tight group-hover:text-[#E42E25] transition-colors">{item.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 PROCESS — Step by Step
            ═══════════════════════════════════════════ */}
            <section ref={processSectionRef} className="py-16 md:py-20 bg-[#f8f9fb]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Strategic Pathway</span>
                        <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">Step-by-Step <span className="text-[#E42E25]">Logic</span></h2>
                    </div>

                    <div className="relative">
                        <div ref={processLineRef} className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E42E25] via-[#1f406d]/10 to-transparent hidden md:block" />

                        <div className="space-y-8">
                            {[
                                { title: "Skilled Evaluation", desc: "Checking your occupation against the MLTSSL, STSOL, and PMSOL lists." },
                                { title: "Skill Assessment", desc: "Securing a positive outcome from your respective Australian assessment authority." },
                                { title: "Sponsorship Match", desc: "Filing employer nomination or state sponsorship based on critical regional demand." },
                                { title: "Visa Filing", desc: "Priority lodgement of your subclass 482 visa with all supporting critical evidence." },
                                { title: "Visa Approval", desc: "Move to Australia with family and enjoy full work rights and healthcare." },
                                { title: "PR Transition", desc: "Structured planning for your transition to Permanent Residency (Subclass 186/191)." }
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    ref={el => processItemsRef.current[i] = el}
                                    className={`flex items-start md:items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <h3 className="text-2xl font-black font-syne text-[#1f406d] uppercase mb-2 tracking-tight">{step.title}</h3>
                                        <p className="text-gray-400 font-medium">{step.desc}</p>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="number-circle w-20 h-20 bg-white rounded-3xl border-2 border-[#1f406d]/5 flex items-center justify-center text-2xl font-black font-syne text-[#E42E25] shadow-xl shadow-black/5 transition-all">
                                            0{i + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1 md:hidden">
                                        <h3 className="text-xl font-black font-syne text-[#1f406d] uppercase mb-2">{step.title}</h3>
                                        <p className="text-gray-400 text-sm font-medium">{step.desc}</p>
                                    </div>
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 FAQ — 482 Insights
            ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-48 bg-white relative">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="text-left">
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Visa Intelligence</span>
                            <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">General<br />Knowledge</h2>
                        </div>
                        <p className="text-[#1f406d]/40 text-lg font-medium max-w-sm mb-2">Everything you need to know about in-demand migration.</p>
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: "What is the minimum score required for a skilled PR visa?", a: "A minimum of 65 points is required for points-tested visas (189/190/491), but higher scores improve your chances." },
                            { q: "Is employer sponsorship necessary for skilled migration?", a: "Not always. Subclass 189 and 190 don’t require employer sponsorship. However, employer-backed visas like 482 are often faster." },
                            { q: "Can I include my spouse and children?", a: "Yes, all Skilled In-Demand Visa types allow you to include your partner and dependent children with full work/study rights." },
                            { q: "How long does the 482 process take?", a: "It depends on the occupation. Priority occupations on the PMSOL can be approved in as little as 3-6 months." },
                            { q: "Can I apply from India or Dubai?", a: "Yes. Migrate Zone serves clients globally with offices in India, UAE, and Australia." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 TESTIMONIAL — PR Success
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#1f406d] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-20 items-center justify-center p-10 md:p-20"
                    >
                        <div className="flex-1">
                            <h2 className="text-5xl md:text-8xl font-[900] font-syne text-white tracking-tighter uppercase mb-10 leading-[1.1]">
                                THEY MADE <span className="text-[#E42E25]">IT.</span>
                            </h2>
                            <p className="text-white/40 text-lg font-medium max-w-sm">Hear from professionals who used their skills to settle in Australia.</p>
                        </div>
                        <div className="flex-[1.5] space-y-6">
                            {[
                                { name: "Rinkal Prajapati", role: "Software Engineer", text: "I was unsure about the points-based system, but Migrate Zone helped me identify the right PR pathway. Fast and professional!" },
                                { name: "Yash", role: "ICT Business Analyst", text: "Sagar Sir and team matched my IT profile with a sponsored employer. Now I’m working in regional Victoria with my family!" }
                            ].map((testi, i) => (
                                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md">
                                    <p className="text-white/80 text-xl font-medium italic mb-8">"{testi.text}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#E42E25] rounded-2xl flex items-center justify-center font-black text-white">{testi.name[0]}</div>
                                        <div>
                                            <p className="text-white font-black font-syne uppercase tracking-widest leading-none">{testi.name}</p>
                                            <p className="text-[#E42E25] text-[10px] font-bold uppercase tracking-widest mt-1">{testi.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <RequestCallBack />
            <Footer />
        </main>
    );
}
