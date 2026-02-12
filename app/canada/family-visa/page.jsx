'use client';
import React from 'react';
import { Heart, Users, Home, Globe, Shield, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenQ1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Reunite</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Goal</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Together</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Permanent</p>
            </div>
        </div>
    </div>
);

const ScreenQ2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Family <span className="text-gray-400">Class</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Sponsorship Programs</p>
        <div className="w-full space-y-3">
            {[{ label: "Spouse", status: "Priority" }, { label: "Children", status: "Priority" }, { label: "Parents", status: "Lottery" }, { label: "Relatives", status: "Specific" }].map((s, i) => (
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
            {["Sponsor Applies", "Confirm Eligibility", "Applicant Applies", "Medical/Police"].map((req, i) => (
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

export default function FamilyVisaPage() {
    return (
        <VisaPageTemplate
            heroBadge="Family Class"
            heroTitle={<>Canada <span className="text-[#E42E25]">Family Visa</span></>}
            heroSubtitle="Reunification"
            heroDescription="Bring your loved ones to Canada. The Family Class sponsorship program allows Canadian citizens and permanent residents to sponsor their relatives for permanent residence."
            screens={[<ScreenQ1 key="1" />, <ScreenQ2 key="2" />, <ScreenQ3 key="3" />]}
            featuresTitle="Program Benefits"
            featuresSubtitle={<>Bring Your <span className="text-[#E42E25]">Family</span></>}
            features={[
                { title: "Permanent Residency", desc: "Sponsored relatives become permanent residents of Canada.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Work & Study", desc: "Your family members can live, study and work in Canada.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Healthcare", desc: "Access to Canada's public healthcare system.", icon: <Heart className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Citizenship Path", desc: "After living in Canada for a period, they can apply for citizenship.", icon: <Home className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Spouse & Kids", desc: "Priority processing for immediate family members.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Support", desc: "You agree to support them financially for a specific period.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Sponsor <span className="text-[#E42E25]">Criteria</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Citizen or PR", desc: "You must be a Canadian Citizen, Permanent Resident, or registered Indian." },
                { title: "18 Years+", desc: "You must be at least 18 years of age to sponsor a relative." },
                { title: "Financial Ability", desc: "Prove you have enough income to provide basic needs for your family members." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>Sponsorship <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "Who can I sponsor?", a: "You can sponsor your spouse, common-law partner, dependent children, parents, and grandparents. In some cases, other relatives." },
                { q: "How long does it take?", a: "Processing times vary significantly: approx. 12 months for spouses, but often longer for parents/grandparents." },
                { q: "Do I need a job?", a: "You need to show you can support them. For spouses, there is no strict income cut-off, but you cannot be on social assistance (except for disability)." },
                { q: "Can they work?", a: "Spouses being sponsored from inside Canada can often apply for an Open Work Permit while waiting." }
            ]}
        />
    );
}
