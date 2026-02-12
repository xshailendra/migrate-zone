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
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Career</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Permanent</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">System</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Points</p>
            </div>
        </div>
    </div>
);

const ScreenP2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Skilled <span className="text-gray-400">Worker</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Main Streams</p>
        <div className="w-full space-y-3">
            {[{ label: "Federal Skilled", status: "Worker" }, { label: "Federal Trades", status: "FSTP" }, { label: "Experience Class", status: "CEC" }, { label: "Provincial", status: "PNP" }].map((s, i) => (
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
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Process</h4>
        <div className="space-y-3">
            {["Create Profile", "Enter Pool", "Receive ITA", "Apply for PR"].map((req, i) => (
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

export default function SkilledWorkerPage() {
    return (
        <VisaPageTemplate
            heroBadge="Economic Class"
            heroTitle={<>Skilled <span className="text-[#E42E25]">Migration</span></>}
            heroSubtitle="Canada PR"
            heroDescription="Immigrate to Canada as a skilled worker through Express Entry or Provincial Nominee Programs. This is the primary pathway for economic immigration."
            screens={[<ScreenP1 key="1" />, <ScreenP2 key="2" />, <ScreenP3 key="3" />]}
            featuresTitle="Main Programs"
            featuresSubtitle={<>Pathway <span className="text-[#E42E25]">Options</span></>}
            features={[
                { title: "Federal Skilled Worker", desc: "For professionals with foreign work experience. Requires 67 points.", icon: <Briefcase className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Federal Skilled Trades", desc: "For qualified tradespeople with a job offer or certification.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Canadian Exper. Class", desc: "For workers with at least 1 year of Canadian work experience.", icon: <BarChart3 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Provincial Nominee", desc: "Provinces nominate candidates based on local labor market needs.", icon: <Target className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Quebec Skilled Worker", desc: "Quebec has its own selection system for skilled workers.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Pilot Programs", desc: "Specific pilots for Atlantic, Rural, and Agri-Food sectors.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>General <span className="text-[#E42E25]">Criteria</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Work Experience", desc: "At least 1 year of continuous full-time paid work experience in a skilled occupation." },
                { title: "Language Skills", desc: "Minimum CLB 7 in English or French for FSW (CLB 5 for some trades)." },
                { title: "Education", desc: "Secondary or post-secondary certificate, diploma, or degree (ECA required)." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>Skilled Worker <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "What is Express Entry?", a: "It's the online system used to manage applications for skilled workers." },
                { q: "How many points do I need?", a: "You need 67/100 points to be eligible for FSW, and then a competitive CRS score to be invited." },
                { q: "Do I need a job offer?", a: "Not for FSW or CEC, but a job offer gives you extra points." },
                { q: "How long is processing?", a: "Most Express Entry applications are processed within 6 months." }
            ]}
        />
    );
}
