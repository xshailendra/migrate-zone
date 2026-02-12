'use client';
import React from 'react';
import { Globe, BookOpen, Shield, Users, Trophy, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenQ1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Globe className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Province</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Distinct</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Certificate</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">CSQ</p>
            </div>
        </div>
    </div>
);

const ScreenQ2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Quebec <span className="text-gray-400">Skilled</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">French Focus Immigration</p>
        <div className="w-full space-y-3">
            {[{ label: "Language", status: "French Focus" }, { label: "Work Exp.", status: "Verified" }, { label: "Education", status: "Point Grid" }, { label: "Family", status: "Included" }].map((s, i) => (
                <div key={i} className="group p-3 bg-[#f8f9fb] rounded-2xl flex items-center gap-3 border border-transparent hover:border-[#1f406d]/10 transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#1f406d]" />
                    <div className="flex-1 text-left">
                        <p className="text-[11px] font-black text-[#1f406d] leading-none mb-1">{s.label}</p>
                        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{s.status}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ScreenQ3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Process</h4>
        <div className="space-y-3">
            {["Arrima Portal", "CSQ Issued", "Federal Security", "Visa Medical"].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Apply to CSQ</span>
        </div>
    </div>
);

export default function QuebecSkilledPage() {
    return (
        <VisaPageTemplate
            heroBadge="Separate Selection"
            heroTitle={<>Quebec Skilled <span className="text-[#E42E25]">Worker</span></>}
            heroSubtitle="Program Overview"
            heroDescription="Quebec has a separate selection system for skilled workers. You must apply for a Quebec Selection Certificate (CSQ) before applying for permanent residence at the federal level."
            screens={[<ScreenQ1 key="1" />, <ScreenQ2 key="2" />, <ScreenQ3 key="3" />]}
            featuresTitle="Program Features"
            featuresSubtitle={<>Distinctive <span className="text-[#E42E25]">Pathway</span></>}
            features={[
                { title: "CSQ Certificate", desc: "The official document issued by Quebec indicating you've been selected by the province.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "French Preference", desc: "Significant points are awarded for French language proficiency.", icon: <BookOpen className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Point Selection", desc: "Quebec uses its own points grid focusing on age, training, and experience.", icon: <Trophy className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Arrima Portal", desc: "The online expression of interest system for Quebec selection.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Family Points", desc: "Extra points for spouse's education and language, and for children.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Direct to PR", desc: "Allows you to live and work in Montreal or any other Quebec city as a PR.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Quebec <span className="text-[#E42E25]">Criteria</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Points Cutoff", desc: "Must score enough points on the Quebec selection grid for employability." },
                { title: "Financial Sufficiency", desc: "Sign a contract to support yourself and your family for your first 3 months in Quebec." },
                { title: "Skill Validation", desc: "Your education and experience must meet the province's recognized labor needs." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>Quebec Skilled <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "Do I need French?", a: "While not strictly mandatory for all, it is very difficult to qualify without at least intermediate French proficiency." },
                { q: "What is Arrima?", a: "Arrima is the system used by Quebec to manage the bank of expressions of interest." },
                { q: "Is it part of Express Entry?", a: "No, Quebec programs are NOT managed through the federal Express Entry system." },
                { q: "Can I move to Toronto?", a: "QC Selection is for those intending to live in Quebec. As a PR, you have movement rights, but your intent must be genuine." }
            ]}
        />
    );
}
