'use client';
import React from 'react';
import { Target, Globe, MapPin, Users, Award, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenP1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Provincial</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Nominated</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Bonus</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">+600 Pts</p>
            </div>
        </div>
    </div>
);

const ScreenP2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Provincial <span className="text-gray-400">Nominee</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Regional Demand Specific</p>
        <div className="w-full space-y-3">
            {[{ label: "OINP", status: "Ontario" }, { label: "SINP", status: "Saskatchewan" }, { label: "BC PNP", status: "BC" }, { label: "MPNP", status: "Manitoba" }].map((s, i) => (
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
            {["EOI to Province", "Provincial Nomination", "Express Entry Update", "Federal PR App"].map((req, i) => (
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

export default function PNPPage() {
    return (
        <VisaPageTemplate
            heroBadge="Regional Migration"
            heroTitle={<>Provincial Nominee <span className="text-[#E42E25]">(PNP)</span></>}
            heroSubtitle="Program Overview"
            heroDescription="Provinces and territories nominate individuals who wish to immigrate to Canada and live in a specific province. PNPs help meet regional labor market needs."
            screens={[<ScreenP1 key="1" />, <ScreenP2 key="2" />, <ScreenP3 key="3" />]}
            featuresTitle="Why Choose PNP"
            featuresSubtitle={<>Regional <span className="text-[#E42E25]">Opportunities</span></>}
            features={[
                { title: "Point Boost", desc: "Express Entry-linked PNPs grant 600 points, ensuring an ITA from the federal government.", icon: <Award className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Local Demand", desc: "Streams targeted at specific occupations like Tech, Healthcare, or Trades.", icon: <Target className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Lower Entry", desc: "Some provinces have lower language or points requirements than federal streams.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Broad Choice", desc: "Almost every province has its own migration system tailoring to local economies.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Job Offer Streams", desc: "Many PNPs provide a pathway for those with a valid job offer in that province.", icon: <MapPin className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Settlement Support", desc: "Nominating provinces often provide additional settlement resources for newcomers.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>PNP <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Meet Stream Specs", desc: "Each province has its own unique requirements (e.g. OINP Tech, BC PNP International Student)." },
                { title: "Intent to Reside", desc: "You must demonstrate a genuine intention to live and work in the nominating province." },
                { title: "EOI Submission", desc: "Most PNPs require an Expression of Interest (EOI) before being invited to apply." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>PNP <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "Can I move after PR?", a: "While you have freedom of movement as a PR, you should initially live in the province that nominated you to respect the agreement." },
                { q: "Is job offer mandatory?", a: "No, many PNP streams (like Ontario's HCP or Alberta's EE stream) do not require a job offer." },
                { q: "What is 600 points?", a: "If you are nominated through an Express Entry-linked stream, you automatically get 600 CRS points." },
                { q: "Which province is easiest?", a: "It depends on your profile. Saskatchewan and Alberta are often considered friendly for those without job offers." }
            ]}
        />
    );
}
