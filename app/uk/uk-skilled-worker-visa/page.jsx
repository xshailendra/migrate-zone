'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Briefcase,
    FileText,
    Users,
    MapPin,
    MessageSquare,
    Plus,
    Minus,
    Zap,
    Globe,
    Award,
    TrendingUp,
    Building2,
    Calendar,
    Plane,
    HeartPulse,
    Shield,
    HardHat,
    Code,
    Stethoscope,
    Utensils,
    Truck,
    Calculator,
    GraduationCap,
    Clock
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
                <Clock className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Processing Time</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Standard</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">8-12 Weeks</p>
                <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-[#E42E25]" />
                </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Stay Duration</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Up to 5 Yrs</p>
            </div>
        </div>
    </div>
);

const screen2 = (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
            </div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E42E25] mb-2">Skilled Worker</p>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            UK <span className="opacity-30">VISA</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Tier 2 Sponsorship</p>

        <div className="w-full space-y-3">
            {[
                { label: "Job Offer", status: "Required" },
                { label: "UK Sponsor", status: "Licensed" },
                { label: "Language", status: "IELTS 4.0+" },
                { label: "ILR Path", status: "Secure" }
            ].map((step, i) => (
                <div key={i} className="group p-3 bg-[#f8f9fb] rounded-2xl flex items-center gap-3 border border-transparent hover:border-[#1f406d]/10 transition-all">
                    <div className={`w-2 h-2 rounded-full ${i < 2 ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-[#1f406d] shadow-[0_0_8px_#1f406d]'}`} />
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
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Visa Benefits</h4>
        <div className="space-y-3">
            {[
                "Family Inclusion",
                "World-Class Health",
                "High Living Std",
                "Career Growth"
            ].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Award className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center cursor-pointer hover:bg-[#E42E25] transition-colors">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Connect with Experts</span>
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

export default function UKSkilledWorkerPage() {
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
                 HERO — UK Skilled Worker Visa
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
                            <div className="px-1.5 py-0.5 bg-[#E42E25] rounded text-[8px] font-black text-white uppercase tracking-wider">Employment</div>
                            <span className="text-[10px] font-black text-[#1f406d] uppercase tracking-widest">UK Skilled Worker Visa Services</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] font-syne text-[#1f406d] leading-[1.1] tracking-tighter mb-8 max-w-5xl mx-auto">
                            Work & Live in <span className="text-[#E42E25]">the United Kingdom</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                            Your gateway to working and living in the UK. Advance your career and secure a <span className="text-[#1f406d] font-bold">continuous residency pathway</span> for your family.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/assessment" className="group inline-flex items-center gap-4 px-10 py-5 bg-[#1f406d] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#E42E25] transition-all duration-500 shadow-xl shadow-[#1f406d]/10">
                                Free Visa Evaluation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
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
                 CORE BENEFITS — Why UK
            ═══════════════════════════════════════════ */}
            <section className="py-12 md:py-24 px-6 md:px-10 bg-white text-center">
                <div className="max-w-[1400px] mx-auto mb-20">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Visa Benefits</span>
                    <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-20 max-w-5xl mx-auto leading-tight">
                        Built for <span className="text-[#E42E25]">Global Professionals</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        {[
                            { title: "Licensed Sponsor", desc: "Work for UK employers with valid sponsorship licenses across diverse sectors.", icon: Shield },
                            { title: "Long-term Stay", desc: "Valid for up to 5 years with a clear pathway to settlement (ILR).", icon: Calendar },
                            { title: "Family Security", desc: "Bring your spouse/partner and dependent children to live with you in the UK.", icon: Users },
                            { title: "Global Career", desc: "Advance in world-class sectors like IT, Healthcare, and Finance.", icon: Briefcase }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-[#f8f9fb] rounded-[40px] border border-black/[0.03] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
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
                 ELIGIBILITY — Guidelines
            ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1f406d 1px, transparent 1px), linear-gradient(90deg, #1f406d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-8 block text-center">Compliance Standards</span>
                    <h2 className="text-5xl md:text-8xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-24 text-center leading-none">
                        CRITERIA FOR <span className="text-[#E42E25]">SUCCESS</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            { title: "Confirmed Job Offer", desc: "From a licensed UK sponsor in an eligible skilled occupation." },
                            { title: "Salary Threshold", desc: "Minimum of £25,600 per year or £10.10 per hour (varies by role)." },
                            { title: "English Proficiency", desc: "Proof of language skills (e.g., IELTS 4.0 or higher)." },
                            { title: "Financial Stability", desc: "Evidence of sufficient funds to support yourself upon arrival." },
                            { title: "Role Alignment", desc: "Your job must be listed on the UK Skilled Occupation list." },
                            { title: "General Security", desc: "Meeting standard health and character requirements." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group flex gap-8 items-start"
                            >
                                <div className="p-4 bg-[#1f406d]/5 rounded-2xl group-hover:bg-[#E42E25]/10 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-[#E42E25]" />
                                </div>
                                <div className="flex-1 border-b border-black/5 pb-8">
                                    <h3 className="text-xl font-black font-syne text-[#1f406d] uppercase mb-3 tracking-tight">{item.title}</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 IN-DEMAND SECTORS — 2025
            ═══════════════════════════════════════════ */}
            <section className="py-24 bg-[#f8f9fb]">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Labor Market Focus</span>
                    <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-20 max-w-5xl mx-auto leading-tight">
                        Top <span className="text-[#E42E25]">UK Occupations</span> for 2025
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            { title: "IT & Software", desc: "Software Engineers, Web Developers, Network Admins.", icon: Code },
                            { title: "Healthcare", desc: "Nurses, Doctors, Physiotherapists.", icon: Stethoscope },
                            { title: "Engineering", desc: "Civil, Mechanical, and Electrical Engineers.", icon: Award },
                            { title: "Skilled Trades", desc: "Electricians, Plumbers, and Welders.", icon: HardHat },
                            { title: "Education", desc: "Secondary and Primary Teachers.", icon: GraduationCap },
                            { title: "Finance", desc: "Accountants and Financial Analysts.", icon: Calculator }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-10 bg-white rounded-[3rem] border border-black/5 hover:shadow-2xl hover:shadow-[#1f406d]/5 transition-all"
                            >
                                <div className="p-4 bg-[#1f406d]/5 rounded-2xl inline-block mb-6">
                                    <item.icon className="w-6 h-6 text-[#1f406d]" />
                                </div>
                                <h3 className="text-xl font-black font-syne text-[#1f406d] uppercase mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 PROCESS — Step by Step
            ═══════════════════════════════════════════ */}
            <section ref={processSectionRef} className="py-16 md:py-20 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Proven Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">Visa <span className="text-[#E42E25]">Process</span></h2>
                    </div>

                    <div className="relative">
                        <div ref={processLineRef} className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E42E25] via-[#1f406d]/10 to-transparent hidden md:block" />

                        <div className="space-y-8">
                            {[
                                { title: "Job Offer Secure", desc: "Ensuring you have a confirmed role with a licensed UK sponsorship employer." },
                                { title: "Eligibility Check", desc: "Meticulous review of your role, salary, and English proficiency standards." },
                                { title: "Documentation", desc: "Gathering required certificates, financial proof, and employer sponsorship data.", icon: FileText },
                                { title: "Visa Submission", desc: "Priority filing of your Skilled Worker Visa application with official guidance." },
                                { title: "Processing", desc: "Standard 8-12 week period with consistent status updates and support." },
                                { title: "Visa Grant", desc: "Final approval and pre-arrival assistance for your move to the UK." }
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
                 FAQ — UK Insights
            ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-48 bg-[#f8f9fb] relative">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="text-left">
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Visa Experts</span>
                            <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">Frequently<br />Asked</h2>
                        </div>
                        <p className="text-[#1f406d]/40 text-lg font-medium max-w-sm mb-2">Detailed answers for your UK career journey.</p>
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: "What is the minimum salary requirement for the UK Skilled Worker Visa?", a: "The salary requirement is typically £25,600 per year or £10.10 per hour, but this can vary depending on the occupation and specific role factors." },
                            { q: "Can I switch employers while on a Skilled Worker Visa?", a: "Yes, but you will need to apply for a new visa if you switch employers. Your new employer must be a licensed sponsor." },
                            { q: "Can I bring my family with me on a Skilled Worker Visa?", a: "Yes, you can include your spouse or partner and dependent children in your application for the Skilled Worker Visa." },
                            { q: "How long does it take to process a UK Skilled Worker Visa?", a: "Processing times typically range from 8 to 12 weeks, depending on various factors such as documentation readiness." },
                            { q: "Can I apply for Permanent Residency?", a: "Yes, after 5 years of continuous work on a Skilled Worker Visa, you may be eligible to apply for Indefinite Leave to Remain (ILR) and eventually citizenship." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 TESTIMONIAL — Pro Success
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
                                SCALE <span className="text-[#E42E25]">GLOBALLY.</span>
                            </h2>
                            <p className="text-white/40 text-lg font-medium max-w-sm">Professional success with Migrate Zone's expert UK visa assistance.</p>
                        </div>
                        <div className="flex-[1.5] space-y-6">
                            {[
                                { name: "Rajesh Kumar", role: "Software Engineer", text: "I was initially overwhelmed with the process, but Migrate Zone made everything so simple. Within months, I had my Skilled Worker Visa approved and am now working in London!" },
                                { name: "Neha Sharma", role: "Healthcare Professional", text: "Migrate Zone’s team helped me secure a job offer with a licensed sponsor, and my visa approval process was quick and hassle-free." }
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
