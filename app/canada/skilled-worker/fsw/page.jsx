'use client';
import React from 'react';
import { Briefcase, Globe, BarChart3, Users, Target, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenP1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Stream</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Type</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">FSWP</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Points</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">67 / 100</p>
            </div>
        </div>
    </div>
);

const ScreenP2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Federal <span className="text-gray-400">Worker</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Main Criteria</p>
        <div className="w-full space-y-3">
            {[{ label: "Experience", status: "1 Year" }, { label: "Language", status: "CLB 7" }, { label: "Education", status: "Degree" }, { label: "Age", status: "18-35 Max" }].map((s, i) => (
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

const ScreenP3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Steps</h4>
        <div className="space-y-3">
            {["Check 67 Pts", "Create Profile", "Enter Pool", "Receive ITA"].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Start Now</span>
        </div>
    </div>
);

export default function FSWPage() {
    return (
        <VisaPageTemplate
            heroBadge="Express Entry"
            heroTitle={<>Federal Skilled <span className="text-[#E42E25]">Worker</span></>}
            heroSubtitle="Subclass FSWP"
            heroDescription="The Federal Skilled Worker Program (FSWP) is for skilled workers with foreign work experience who want to immigrate to Canada permanently. It is managed through the Express Entry system."
            screens={[<ScreenP1 key="1" />, <ScreenP2 key="2" />, <ScreenP3 key="3" />]}
            featuresTitle="Program Features"
            featuresSubtitle={<>Selection <span className="text-[#E42E25]">Factors</span></>}
            features={[
                { title: "Point Based", desc: "You must score at least 67 out of 100 on the six selection factors.", icon: <BarChart3 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "No Job Offer", desc: "You do not need a Canadian job offer to apply, but it helps your score.", icon: <Briefcase className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Experience", desc: "Points for years of full-time paid work experience (or equivalent part-time).", icon: <Briefcase className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Education", desc: "Points for your completed Canadian or foreign educational credential (ECA).", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Language", desc: "Ability in English and/or French (CLB 7 minimum for first language).", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Adaptability", desc: "Points for spouse's language, previous study/work in Canada, or relatives.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Eligibility <span className="text-[#E42E25]">Matrix</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Work Experience", desc: "1 year continuous full-time (or equal amount in part-time) in NOC TEER 0, 1, 2, or 3." },
                { title: "Language Ability", desc: "Minimum level of CLB 7 in all 4 abilities (reading, writing, speaking, listening)." },
                { title: "Proof of Funds", desc: "Must show you have enough money to settle in Canada (unless you are working in Canada)." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>FSWP <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "What is the 67 points rule?", a: "To be eligible for FSWP, you must first pass a 100-point grid based on six factors. The pass mark is 67." },
                { q: "Is FSWP part of Express Entry?", a: "Yes, if you meet the FSWP criteria, you can create an Express Entry profile." },
                { q: "Do I need ECA?", a: "Yes, for any foreign education, you must get an Educational Credential Assessment (ECA)." },
                { q: "What occupations qualify?", a: "Skilled occupations in TEER 0, 1, 2, or 3 of the National Occupational Classification (NOC)." }
            ]}
        />
    );
}
