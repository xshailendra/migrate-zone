'use client';
import React from 'react';
import { Heart, Users, CheckCircle2, Shield, Home } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenS1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Sponsorship</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Type</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Spousal</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">PR Visa</p>
            </div>
        </div>
    </div>
);

const ScreenS2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Partner <span className="text-gray-400">Visa</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Work Permit Option</p>
        <div className="w-full space-y-3">
            {[{ label: "Inland", status: "Work Permit" }, { label: "Outland", status: "Faster" }, { label: "Dependents", status: "Included" }, { label: "Quebec", status: "CSQ Required" }].map((s, i) => (
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

const ScreenS3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Eligibility</h4>
        <div className="space-y-3">
            {["Genuine Relationship", "18+ Years Old", "In Canada (Inland)", "Medical Check", "Police Check"].map((req, i) => (
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

export default function SpouseVisaPage() {
    return (
        <VisaPageTemplate
            heroBadge="Partner Sponsorship"
            heroTitle={<>Spouse & <span className="text-[#E42E25]">Partner Visa</span></>}
            heroSubtitle="Spousal Sponsorship"
            heroDescription="Sponsor your spouse, common-law partner, or conjugal partner to become a permanent resident of Canada. Build your life together."
            screens={[<ScreenS1 key="1" />, <ScreenS2 key="2" />, <ScreenS3 key="3" />]}
            featuresTitle="Sponsorship Types"
            featuresSubtitle={<>Inland vs <span className="text-[#E42E25]">Outland</span></>}
            features={[
                { title: "Inland Sponsorship", desc: "For couples already in Canada. Apply for an Open Work Permit while waiting.", icon: <Home className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Outland Sponsorship", desc: "For partners outside Canada. Often processed faster but no work permit option.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "PR Status", desc: "Successful applicants become Permanent Residents upon arrival/approval.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Dependent Children", desc: "Include dependent children (under 22) in the application.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "No Income Req.", desc: "Usually no minimum income requirement unless sponsoring dependent children with their own children.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "3-Year Support", desc: "Sponsor must financially support the partner for 3 years.", icon: <Heart className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Sponsor <span className="text-[#E42E25]">Eligibility</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "18+ & PR/Citizen", desc: "You must be at least 18 years old and a Canadian Citizen or PR living in Canada." },
                { title: "Genuine Relationship", desc: "Must prove the relationship is genuine and not just for immigration purposes." },
                { title: "No Criminal Bars", desc: "You may be ineligible if you have certain criminal convictions or previous sponsorship defaults." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>Spouse Visa <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "How long does it take?", a: "Processing standard is 12 months for most applications." },
                { q: "Can I work while waiting?", a: "If applying Inland, you can apply for an Open Work Permit. If Outland, no." },
                { q: "What is Common-Law?", a: "Living together in a conjugal relationship for at least 12 continuous months." },
                { q: "What if we break up?", a: "The sponsor is still financially responsible for the applicant for 3 years, even after a breakup/divorce." }
            ]}
        />
    );
}
