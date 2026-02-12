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
    Shield
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
                <Calendar className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Visit Status</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Stay Duration</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Up to 6m</p>
                <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#E42E25]" />
                </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Processing</p>
                <p className="text-2xl font-black font-syne text-[#E42E25]">2-4 Weeks</p>
            </div>
        </div>
    </div>
);

const screen2 = (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
            </div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E42E25] mb-2">Visitor Visa</p>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            CANADA <span className="opacity-30">TRV</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Temporary Resident Visa</p>

        <div className="w-full space-y-3">
            {[
                { label: "Tourist Stream", status: "Active" },
                { label: "Business Stream", status: "Active" },
                { label: "Family Stream", status: "Active" }
            ].map((step, i) => (
                <div key={i} className="group p-3 bg-[#f8f9fb] rounded-2xl flex items-center gap-3 border border-transparent hover:border-[#1f406d]/10 transition-all">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
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
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Requirements</h4>
        <div className="space-y-3">
            {[
                "Valid Passport",
                "Financial Proof",
                "Travel Itinerary",
                "Home Ties Proof"
            ].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center cursor-pointer hover:bg-[#E42E25] transition-colors">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Apply Now</span>
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

export default function CanadaVisitorVisaPage() {
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
                 HERO — Canada Visitor Visa
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
                            <div className="px-1.5 py-0.5 bg-[#E42E25] rounded text-[8px] font-black text-white uppercase tracking-wider">Visitor</div>
                            <span className="text-[10px] font-black text-[#1f406d] uppercase tracking-widest">Canada Visitor Visa Services</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] font-syne text-[#1f406d] leading-[1.1] tracking-tighter mb-8 max-w-5xl mx-auto">
                            Explore <span className="text-[#E42E25]">Canada Ease</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                            Planning to visit Canada for tourism, business, or family? Secure your <span className="text-[#1f406d] font-bold">Temporary Resident Visa</span> with expert guidance.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/assessment" className="group inline-flex items-center gap-4 px-10 py-5 bg-[#1f406d] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#E42E25] transition-all duration-500 shadow-xl shadow-[#1f406d]/10">
                                Start Application
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
                 VISA TYPES — Categories
            ═══════════════════════════════════════════ */}
            <section className="py-12 md:py-24 px-6 md:px-10 bg-white">
                <div className="max-w-[1400px] mx-auto text-center mb-20">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Visa Categories</span>
                    <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-20 max-w-5xl mx-auto leading-tight">
                        Diverse <span className="text-[#E42E25]">Visiting Options</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Tourist Visa", desc: "For sightseeing, vacations, and exploring Canada's attractions.", icon: Globe },
                            { title: "Business Visitor", desc: "For attending meetings, conferences, or exploring business opportunities.", icon: Briefcase },
                            { title: "Family Visitor", desc: "For visiting relatives or attending family events in Canada.", icon: Users }
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
                 ELIGIBILITY — Criteria
            ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1f406d 1px, transparent 1px), linear-gradient(90deg, #1f406d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-8 block font-medium">Compliance Standards</span>
                    <h2 className="text-5xl md:text-8xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-24 leading-none">
                        ENTRY <span className="text-[#E42E25]">CRITERIA</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                        {[
                            { title: "Valid Passport", desc: "Possess a valid passport or travel document from your home country." },
                            { title: "Intent to Return", desc: "Prove ties to your home country (job, property) to ensure your return." },
                            { title: "Financial Proof", desc: "Demonstrate sufficient funds to support yourself during your stay." },
                            { title: "Health & Character", desc: "Be in good health and have no criminal record (police certificate if required)." },
                            { title: "Purpose of Visit", desc: "Clearly demonstrate the purpose of your stay with a travel itinerary." },
                            { title: "Temporary Intent", desc: "Show that you do not intend to stay in Canada permanently." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-10 bg-[#f8f9fb] border border-[#1f406d]/5 rounded-[3rem] hover:bg-white hover:shadow-2xl hover:shadow-[#1f406d]/5 transition-all duration-500"
                            >
                                <CheckCircle2 className="w-8 h-8 text-[#E42E25] mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-black font-syne text-[#1f406d] uppercase mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-[#1f406d]/60 font-medium leading-relaxed">{item.desc}</p>
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
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Standard Procedure</span>
                        <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">Visa <span className="text-[#E42E25]">Process</span></h2>
                    </div>

                    <div className="relative">
                        <div ref={processLineRef} className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E42E25] via-[#1f406d]/10 to-transparent hidden md:block" />

                        <div className="space-y-8">
                            {[
                                { title: "Consultation", desc: "Free eligibility check and assessment of your visit purpose." },
                                { title: "Document Prep", desc: "Expert collection and preparation of all required documentation." },
                                { title: "Application Submission", desc: "Meticulous filing of your Temporary Resident Visa application." },
                                { title: "Certificates", desc: "Assistance with Medical or Police certificates if applicable/required." },
                                { title: "Interview Prep", desc: "Guidance on visa interview preparation to boost your approval chances." },
                                { title: "Visa Grant", desc: "Final grant and travel assistance for your trip to Canada." }
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
                 FAQ — Travel Insights
            ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-48 bg-white relative">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="text-left">
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Travel Office</span>
                            <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">Frequently<br />Asked</h2>
                        </div>
                        <p className="text-[#1f406d]/40 text-lg font-medium max-w-sm mb-2">Everything you need to know about visiting Canada.</p>
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: "How long is a Canada Visitor Visa valid for?", a: "A Canada Visitor Visa is typically valid for up to 6 months per visit, but it can vary depending on the case and the applicant’s circumstances." },
                            { q: "Can I extend my Visitor Visa once I’m in Canada?", a: "Yes, you can apply for an extension of your Visitor Visa if you wish to stay longer in Canada. You must apply for the extension before your initial visa expires." },
                            { q: "Do I need a visa to visit Canada?", a: "Citizens of some countries may be exempt from the visitor visa requirement and may be able to travel to Canada with an eTA (Electronic Travel Authorization)." },
                            { q: "Can I work while on a Visitor Visa?", a: "No, a Visitor Visa does not allow you to work in Canada. If you want to work while in Canada, you must apply for a work permit." },
                            { q: "What documents do I need to apply for a Visitor Visa?", a: "You will need a valid passport, proof of financial support, travel itinerary, letter of invitation (if applicable), and ties to your home country." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                 TESTIMONIAL — Traveler Success
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
                                TRAVEL <span className="text-[#E42E25]">STORIES.</span>
                            </h2>
                            <p className="text-white/40 text-lg font-medium max-w-sm">Seamless travel experiences with Migrate Zone's assistance.</p>
                        </div>
                        <div className="flex-[1.5] space-y-6">
                            {[
                                { name: "Anjali Mehra", role: "Family Visitor", text: "Thanks to Migrate Zone, I was able to visit my family in Canada. The visa process was smooth, and they guided me through every step!" },
                                { name: "Rajesh Kumar", role: "Business Traveler", text: "With the help of Migrate Zone, I attended an international business conference in Toronto. The visa application process was clear and efficient." }
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
