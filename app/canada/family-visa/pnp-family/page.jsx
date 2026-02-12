'use client';
import React from 'react';
import { MapPin, Users, Heart, Globe, Shield, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenP1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Regional</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Stream</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">PNP Family</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Benefit</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Points</p>
            </div>
        </div>
    </div>
);

const ScreenP2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Family <span className="text-gray-400">Connection</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Provincial Bonus</p>
        <div className="w-full space-y-3">
            {[{ label: "Saskatchewan", status: "Open" }, { label: "Manitoba", status: "Open" }, { label: "Nova Scotia", status: "Checking" }, { label: "Alberta", status: "Checking" }].map((s, i) => (
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
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Conditions</h4>
        <div className="space-y-3">
            {["Relative in Province", "Intent to Reside", "Job Offer (Some)", "Language CLB 4+"].map((req, i) => (
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

export default function PNPFamilyPage() {
    return (
        <VisaPageTemplate
            heroBadge="Family Connection"
            heroTitle={<>PNP <span className="text-[#E42E25]">Family Stream</span></>}
            heroSubtitle="Provincial Nominee Program"
            heroDescription="Leverage your family connections in Canadian provinces. Several PNPs offer streams or points for having a close relative residing in their province."
            screens={[<ScreenP1 key="1" />, <ScreenP2 key="2" />, <ScreenP3 key="3" />]}
            featuresTitle="Program Features"
            featuresSubtitle={<>Regional <span className="text-[#E42E25]">Ties</span></>}
            features={[
                { title: "Direct Qualification", desc: "Some streams, like Manitoba Skilled Worker Overseas, rely heavily on family support.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Extra Points", desc: "Gain significant points in provincial grids for having a sibling or close relative.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Settlement Plan", desc: "Family members can be part of your settlement plan, proving adaptability.", icon: <Heart className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Manitoba MPNP", desc: "Strong focus on family connections for overseas applicants.", icon: <MapPin className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Saskatchewan SINP", desc: "Offers points for close family relatives in Saskatchewan.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Lower Barriers", desc: "Family streams often have lower language or experience thresholds.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Stream <span className="text-[#E42E25]">Criteria</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Relative in Province", desc: "Must have a close relative who is a PR or Citizen living in the province for at least 1 year." },
                { title: "Expression of Interest", desc: "Must submit an EOI to the province and often be invited to apply." },
                { title: "Settlement Funds", desc: "Show proof of funds or financial support from your relative." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>PNP Family <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "Which provinces have family streams?", a: "Manitoba, Saskatchewan, and Newfoundland & Labrador have specific streams or points. Others like Nova Scotia have had them." },
                { q: "Can a cousin sponsor me?", a: "It depends on the province. Manitoba considers distant relatives and friends for points, while others require closer ties." },
                { q: "Do I need a job offer?", a: "Not always. For example, the Saskatchewan OID sub-category does not require a job offer, just points." },
                { q: "Is it faster than Express Entry?", a: "It can be slower to get the nomination, but once nominated, you get 600 CRS points for Express Entry." }
            ]}
        />
    );
}
