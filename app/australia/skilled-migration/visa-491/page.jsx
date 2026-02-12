'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Minus, Plus, Trophy, MapPin, TentTree, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RequestCallBack from '@/components/RequestCallBack';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const IPhoneFrame = ({ children, className = "", innerRef }) => (
    <div ref={innerRef} className={`relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-[3.5rem] p-1.5 border-[4px] border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)_inset] overflow-visible ${className}`}>
        <div className="absolute -left-1 top-24 w-0.5 h-12 bg-[#2a2a2a] rounded-r-lg border-y border-r border-white/5" />
        <div className="absolute -left-1 top-40 w-0.5 h-12 bg-[#2a2a2a] rounded-r-lg border-y border-r border-white/5" />
        <div className="absolute -right-1 top-32 w-0.5 h-20 bg-[#2a2a2a] rounded-l-lg border-y border-l border-white/5" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#000] rounded-full z-20 flex items-center justify-end px-3 gap-1.5 border border-white/5"><div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" /><div className="w-1 h-1 rounded-full bg-[#1a1a1a]" /></div>
        <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"><div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 opacity-30 bg-gradient-to-tr from-transparent via-white/10 to-white/40 skew-x-12 translate-x-1/2" />{children}</div>
        <div className="absolute -inset-1 rounded-[3.6rem] border border-white/10 pointer-events-none opacity-50" />
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-black/5 py-6">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between text-left group">
                <span className={`text-lg md:text-xl font-bold transition-all ${isOpen ? 'text-[#E42E25]' : 'text-[#1f406d]/60 group-hover:text-[#1f406d]'}`}>{question}</span>
                <div className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-[#E42E25]' : 'bg-[#1f406d]/5 group-hover:bg-[#1f406d]/10'}`}>{isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-[#1f406d]" />}</div>
            </button>
            <AnimatePresence>
                {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pt-6 text-[#1f406d]/40 leading-relaxed font-medium">{answer}</p></motion.div>)}
            </AnimatePresence>
        </div>
    );
};

export default function Visa491Page() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const leftPhoneRef = useRef(null);
    const centerPhoneRef = useRef(null);
    const rightPhoneRef = useRef(null);

    useGSAP(() => {
        gsap.from([leftPhoneRef.current, centerPhoneRef.current, rightPhoneRef.current], { y: 200, opacity: 0, stagger: 0.1, duration: 1.5, ease: "power4.out" });
        const tl = gsap.timeline({ scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "center center", scrub: 1 } });
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
                            <div className="px-1.5 py-0.5 bg-[#E42E25] rounded text-[8px] font-black text-white uppercase tracking-wider">Subclass 491</div>
                            <span className="text-[10px] font-black text-[#1f406d] uppercase tracking-widest">Regional Prov. Visa</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] font-syne text-[#1f406d] leading-[1.1] tracking-tighter mb-8 max-w-5xl mx-auto">
                            Go Regional, <span className="text-[#E42E25]">Go Further</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                            A provisional visa for skilled workers who want to live and work in designated regional areas of Australia. Enjoy priority processing and 15 extra points.
                        </p>
                        <Link href="/assessment" className="group inline-flex items-center gap-4 px-10 py-5 bg-[#1f406d] text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#E42E25] transition-all duration-500 shadow-xl shadow-[#1f406d]/10">
                            Check Regional Areas
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="mt-24 md:mt-32 flex justify-center items-end relative perspective-1000 px-6 h-[600px]">
                        <div className="flex justify-center items-end gap-0 md:gap-8 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-20">
                            <IPhoneFrame innerRef={leftPhoneRef} className="hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                <div className="p-6 h-full flex flex-col pt-12">
                                    <div className="flex items-center gap-2 mb-8"><div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><Trophy className="w-4 h-4 text-[#1f406d]" /></div><span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Bonus</span></div>
                                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-4"><p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Regional Points</p><p className="text-2xl font-black font-syne text-[#1f406d]">+15 Points</p></div>
                                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100"><p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Term</p><p className="text-2xl font-black font-syne text-[#1f406d]">5 Years</p></div>
                                </div>
                            </IPhoneFrame>
                            <IPhoneFrame innerRef={centerPhoneRef} className="z-10 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                                <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
                                    <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6"><div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center"><TentTree className="w-5 h-5 text-white" /></div></div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E42E25] mb-2">Regional Life</p>
                                    <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-8">Path to <span className="text-gray-400">PR</span></h3>
                                    <div className="w-full space-y-3">
                                        {[{ l: "Grant 491", s: "Temporary" }, { l: "3 Years Work", s: "Income Req" }, { l: "Apply 191", s: "Permanent" }, { l: "Citizenship", s: "Goal" }].map((s, i) => (<div key={i} className="flex items-center gap-3 p-3 bg-[#f8f9fb] rounded-2xl"><div className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-green-500' : 'bg-[#1f406d]'}`} /><div className="text-left"><p className="text-[11px] font-black text-[#1f406d]">{s.l}</p><p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{s.s}</p></div></div>))}
                                    </div>
                                </div>
                            </IPhoneFrame>
                            <IPhoneFrame innerRef={rightPhoneRef} className="hidden md:block shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                <div className="p-6 h-full flex flex-col pt-12">
                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Conditions</h4>
                                    <div className="space-y-3">{["Live in Regional Area", "Work in Regional Area", "Income Threshold", "3 Years Required"].map((r, i) => (<div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"><CheckCircle2 className="w-4 h-4 text-[#E42E25]" /><span className="text-[11px] font-bold text-[#1f406d]/60">{r}</span></div>))}</div>
                                    <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center"><span className="text-[10px] font-black text-white uppercase tracking-widest">Apply Now</span></div>
                                </div>
                            </IPhoneFrame>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-24 px-6 md:px-10 bg-white">
                <div className="max-w-[1400px] mx-auto text-center mb-20">
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Key Benefits</span>
                    <h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase mb-20 max-w-4xl mx-auto leading-tight">Why Choose <span className="text-[#E42E25]">Visa 491</span>?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Priority Processing", desc: "Regional visa applications are given priority processing by the Department.", icon: Clock },
                            { title: "Extra Points", desc: "Gain 15 points for nomination by a state or sponsorship by a family member.", icon: Plus },
                            { title: "Pathway to PR", desc: "Direct pathway to the Permanent Residence (Skilled Regional) visa (subclass 191).", icon: Shield }
                        ].map((card, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 bg-white rounded-[40px] border border-black/[0.03] text-left hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                                <div className="w-12 h-12 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-8 border border-[#1f406d]/5"><card.icon className="w-5 h-5 text-[#E42E25]" /></div>
                                <h3 className="text-xl font-black font-syne text-[#1f406d] uppercase mb-4 tracking-tight">{card.title}</h3>
                                <p className="text-gray-400 font-medium leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-48 bg-white relative">
                <div className="max-w-[1000px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="text-left"><span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E42E25] mb-4 block">Knowledge Base</span><h2 className="text-4xl md:text-6xl font-[900] font-syne text-[#1f406d] tracking-tighter uppercase">Common<br />Questions</h2></div>
                        <p className="text-[#1f406d]/40 text-lg font-medium max-w-sm mb-2">Details about the Skilled Work Regional Visa 491.</p>
                    </div>
                    <div className="space-y-2">
                        {[
                            { q: "Is this visa permanent?", a: "No, the 491 visa is provisional for 5 years. It leads to PR (Visa 191) after living and working in a regional area for 3 years." },
                            { q: "Where can I live?", a: "You can live in any designated regional area of Australia. This generally includes all of Australia except Sydney, Melbourne, and Brisbane." },
                            { q: "Can family sponsor me?", a: "Yes, eligible relatives living in a designated regional area can sponsor you for this visa." },
                            { q: "Can I move between regions?", a: "Yes, you can move between designated regional areas freely, but you must not move to a major city (Sydney, Melbourne, Brisbane)." },
                            { q: "What is the income requirement?", a: "To be eligible for the PR pathway (191 visa), you must meet the taxable income threshold for at least 3 income years." }
                        ].map((faq, i) => (<FAQItem key={i} question={faq.q} answer={faq.a} />))}
                    </div>
                </div>
            </section>

            <RequestCallBack />
            <Footer />
        </main>
    );
}
