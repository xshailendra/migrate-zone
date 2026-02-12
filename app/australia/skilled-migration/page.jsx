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
    Globe,
    Shield,
    Minus,
    Plus,
    Scale,
    Trophy,
    GraduationCap
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

// --- Premium iPhone Frame Reuse ---
const IPhoneFrame = ({ children, className = "", innerRef }) => (
    <div
        ref={innerRef}
        className={`relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[3.5rem] p-1.5 border-[4px] border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)_inset] overflow-visible ${className}`}
    >
        <div className="absolute -left-1 top-24 w-0.5 h-12 bg-[#2a2a2a] rounded-r-lg border-y border-r border-white/5" />
        <div className="absolute -left-1 top-40 w-0.5 h-12 bg-[#2a2a2a] rounded-r-lg border-y border-r border-white/5" />
        <div className="absolute -right-1 top-32 w-0.5 h-20 bg-[#2a2a2a] rounded-l-lg border-y border-l border-white/5" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#000] rounded-full z-20 flex items-center justify-end px-3 gap-1.5 border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
            <div className="w-1 h-1 rounded-full bg-[#1a1a1a]" />
        </div>
        <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 opacity-30 bg-gradient-to-tr from-transparent via-white/10 to-white/40 skew-x-12 translate-x-1/2" />
            {children}
        </div>
        <div className="absolute -inset-1 rounded-[3.6rem] border border-white/10 pointer-events-none opacity-50" />
    </div>
);

// --- iPhone Interior Screens for Skilled Migration ---
const screen1 = (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Points Test</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Pass Mark</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">65 Points</p>
                <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-[#E42E25]" />
                </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">State Nomination</p>
                <p className="text-lg font-black font-syne text-[#1f406d]">+5 to +15 pts</p>
            </div>
        </div>
    </div>
);

const screen2 = (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
            </div>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E42E25] mb-2">Expression of Interest</p>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            EOI <span className="text-gray-400">Status</span>
        </h3>
        <p className="text-[11px] font-bold text-green-600 mb-8 tracking-tight bg-green-50 px-3 py-1 rounded-full border border-green-100">Invitation Received</p>

        <div className="w-full space-y-3">
            {[
                { label: "Points Calculation", status: "Verified" },
                { label: "SkillSelect EOI", status: "Submitted" },
                { label: "State Nomination", status: "Approved" },
                { label: "Visa Application", status: "Ready" }
            ].map((step, i) => (
                <div key={i} className="group p-3 bg-[#f8f9fb] rounded-2xl flex items-center gap-3 border border-transparent hover:border-[#1f406d]/10 transition-all">
                    <div className={`w-2 h-2 rounded-full ${i <= 2 ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-blue-500 animate-pulse'}`} />
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
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Core Visas</h4>
        <div className="space-y-3">
            {[
                "Subclass 189 - Independent",
                "Subclass 190 - Nominated",
                "Subclass 491 - Regional",
                "Subclass 191 - Permanent"
            ].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Calculated Points</span>
        </div>
    </div>
);

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

export default function GeneralSkilledMigrationPage() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const leftPhoneRef = useRef(null);
    const centerPhoneRef = useRef(null);
    const rightPhoneRef = useRef(null);

    useGSAP(() => {
        gsap.from([leftPhoneRef.current, centerPhoneRef.current, rightPhoneRef.current], {
            y: 200, opacity: 0, stagger: 0.1, duration: 1.5, ease: "power4.out"
        });

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

    }, { scope: containerRef });

    return (
        <main className="min-h-screen bg-white selection:bg-[#E42E25] selection:text-white relative" ref={containerRef}>
            <Header />

            <section ref={sectionRef} className="pt-64 pb-32 px-6 overflow-hidden bg-white relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#1f406d]/[0.02] rounded-full blur-[120px] pointer-events-none" />
                <div className="max-w-[1400px] mx-auto text-center relative z-10 mb-20 md:mb-32">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1f406d]/5 rounded-full border border-[#1f406d]/10 mb-8">
                            <div className="px-1.5 py-0.5 bg-[#E42E25] rounded text-[8px] font-black text-white uppercase tracking-wider">GSM</div>
                            <span className="text-[10px] font-black text-[#1f406d] uppercase tracking-widest">General Skilled Migration</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] font-syne text-[#1f406d] leading-[1.1] tracking-tighter mb-8 max-w-5xl mx-auto">
                            Your Pathway to <span className="text-[#E42E25]">Permanent Residency</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                            Australia's skilled migration program is designed for professionals and workers who can contribute to the Australian economy.
                            Calculate your points and <span className="text-[#1f406d] font-bold">start your journey today</span>.
                        </p>
                        <Link href="/assessment" className="group inline-flex items-center gap-4 px-10 py-5 bg-[#1f406d] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#E42E25] transition-all duration-500 shadow-xl shadow-[#1f406d]/10">
                            Check Your Points
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="mt-24 md:mt-32 flex justify-center items-end relative perspective-1000 px-6 h-[600px]">
                        <div className="flex justify-center items-end gap-0 md:gap-8 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-20">
                            <IPhoneFrame innerRef={leftPhoneRef} className="hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.05)]">{screen1}</IPhoneFrame>
                            <IPhoneFrame innerRef={centerPhoneRef} className="z-10 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">{screen2}</IPhoneFrame>
                            <IPhoneFrame innerRef={rightPhoneRef} className="hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.05)]">{screen3}</IPhoneFrame>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24 px-6 md:px-10 bg-white">
                <div className="max-w-[1400px] mx-auto text-center mb-20">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Benefits</span>
                    <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-20 max-w-4xl mx-auto leading-tight">
                        Why Choose <span className="text-[#E42E25]">Skilled Migration</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Permanent Residency", desc: "Live, work, and study in Australia indefinitely with full residency rights.", icon: Shield },
                            { title: "Family Inclusion", desc: "Include your partner and dependent children in your application.", icon: Users },
                            { title: "Citizenship Pathway", desc: "Become an Australian citizen after meeting residence requirements.", icon: Trophy }
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

            <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#1f406d 1px, transparent 1px), linear-gradient(90deg, #1f406d 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 text-center">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-8 block">Visa Categories</span>
                    <h2 className="text-5xl md:text-8xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-24">
                        Points Tested <span className="text-[#E42E25]">Streams</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            { title: "Visa 189", subtitle: "Skilled Independent", desc: "For skilled workers who are not sponsored by an employer or family member or nominated by a state/territory government.", link: "/australia/skilled-migration/visa-189" },
                            { title: "Visa 190", subtitle: "Skilled Nominated", desc: "For skilled workers who are nominated by an Australian state or territory government agency.", link: "/australia/skilled-migration/visa-190" },
                            { title: "Visa 491", subtitle: "Skilled Work Regional", desc: "For skilled workers who are nominated by a state or territory government agency or sponsored by an eligible relative to live and work in regional Australia.", link: "/australia/skilled-migration/visa-491" }
                        ].map((stream, i) => (
                            <Link href={stream.link} key={i}>
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="group p-12 bg-[#f8f9fb] border border-[#1f406d]/5 rounded-[3rem] hover:bg-white hover:shadow-2xl hover:shadow-[#1f406d]/5 transition-all duration-700 h-full cursor-pointer relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <ArrowRight className="text-[#E42E25] w-8 h-8 -rotate-45" />
                                    </div>
                                    <div className="text-6xl font-[900] font-syne text-[#1f406d] opacity-[0.03] mb-8">0{i + 1}</div>
                                    <h3 className="text-2xl font-black font-syne text-[#1f406d] uppercase tracking-tighter mb-2">{stream.title}</h3>
                                    <p className="text-sm font-bold text-[#E42E25] uppercase tracking-widest mb-6">{stream.subtitle}</p>
                                    <p className="text-[#1f406d]/60 text-lg leading-relaxed font-medium group-hover:text-[#1f406d]/80 transition-colors">{stream.desc}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 bg-white relative">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="text-left">
                            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Knowledge Base</span>
                            <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">Frequently<br />Asked</h2>
                        </div>
                        <p className="text-[#1f406d]/40 text-lg font-medium max-w-sm mb-2">Essential information about the General Skilled Migration program.</p>
                    </div>

                    <div className="space-y-2">
                        {[
                            { q: "What is the Points Test?", a: "The Points Test is a system used to select skilled migrants. You are awarded points for age, English language ability, skilled employment, educational qualifications, and other factors. You currently need 65 points to be eligible." },
                            { q: "Do I need a Skills Assessment?", a: "Yes, you must have a positive Skills Assessment for your nominated occupation from the relevant assessing authority before you can submit an Expression of Interest (EOI)." },
                            { q: "What is an Expression of Interest (EOI)?", a: "An EOI is an indication that you would like to be considered for a skilled visa. It is not a visa application. You must submit an EOI through SkillSelect to be invited to apply." },
                            { q: "Can I include my family?", a: "Yes, you can include your partner and dependent children in your skilled visa application." },
                            { q: "What is the difference between 189 and 190?", a: "The 189 visa is an independent visa that does not require sponsorship. The 190 visa requires nomination by a state or territory government and grants extra points." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            <RequestCallBack />
            <Footer />
        </main>
    );
}
