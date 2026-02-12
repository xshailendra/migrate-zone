'use client';
import React from 'react';
import { Target, Globe, BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenE1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">System</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Method</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Online</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Fast-Track</p>
            </div>
        </div>
    </div>
);

const ScreenE2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Express <span className="text-gray-400">Entry</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">CRS Points Ranking</p>
        <div className="w-full space-y-3">
            {[{ label: "Core Factors", status: "Age/Edu/Lang" }, { label: "Experience", status: "Foreign/CA" }, { label: "Additional", status: "PNP/Offer" }, { label: "Selection", status: "Category" }].map((s, i) => (
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

const ScreenE3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Flow</h4>
        <div className="space-y-3">
            {["Profile Verified", "Pool Inclusions", "Weekly Draws", "ITA Sent"].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Submit Profile</span>
        </div>
    </div>
);

export default function ExpressEntryCanadaPage() {
    return (
        <VisaPageTemplate
            heroBadge="Immigration System"
            heroTitle={<>Canada <span className="text-[#E42E25]">Express Entry</span></>}
            heroSubtitle="System Overview"
            heroDescription="Express Entry is a world-renowned point-based management system for skilled worker applications. It provides a transparent and fast-track route to Canadian permanent residency."
            screens={[<ScreenE1 key="1" />, <ScreenE2 key="2" />, <ScreenE3 key="3" />]}
            featuresTitle="System Benefits"
            featuresSubtitle={<>Points and <span className="text-[#E42E25]">Ranking</span></>}
            features={[
                { title: "Point Selection", desc: "Applicants are ranked using the Comprehensive Ranking System (CRS) score.", icon: <BarChart3 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Transparency", desc: "Minimum scores for invitations are published after every draw.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Processing Speed", desc: "Most applications are processed within 6 months of being submitted.", icon: <Zap className="w-5 h-5 text-[#E42E25]" /> },
                { title: "No Cap", desc: "There is no limit on intake, only on invitations issued based on performance.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Pool Inclusions", desc: "Your profile remains valid in the pool for 12 months.", icon: <Target className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Category Draws", desc: "Targeted draws for specific occupations like healthcare or STEM.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>System <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "FSWP Eligible", desc: "Must meet entry requirements for the Federal Skilled Worker program." },
                { title: "FSTP Eligible", desc: "Or meet the requirements for the Federal Skilled Trades program." },
                { title: "CEC Eligible", desc: "Or meet the requirements for the Canadian Experience Class." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>Express Entry <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "How often are draws?", a: "Draws usually happen every 2 weeks, but frequency can vary." },
                { q: "Can I update my profile?", a: "Yes, you can update your language scores or work experience any time while in the pool." },
                { q: "Do I need a lawyer?", a: "While not mandatory, professional help ensures your profile is accurate and maximizes your points." },
                { q: "What is an ITA?", a: "An Invitation to Apply (ITA) is the official offer from Canada to apply for permanent residence." }
            ]}
        />
    );
}
