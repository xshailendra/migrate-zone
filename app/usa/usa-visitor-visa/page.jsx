'use client';
import React from 'react';
import { Camera, Plane, Globe, Shield, Clock, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenUSV1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Camera className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Tourism</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Type</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">B-1/B-2</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Visitor Visa</p>
            </div>
        </div>
    </div>
);

const ScreenUSV2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Visit <span className="text-gray-400">USA</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Holiday & Business</p>
        <div className="w-full space-y-3">
            {[{ label: "Stay", status: "6 Months Max" }, { label: "Validity", status: "Up to 10 Yrs" }, { label: "Multi-Entry", status: "Granted" }, { label: "Interview", status: "Required" }].map((s, i) => (
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

const ScreenUSV3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Requirements</h4>
        <div className="space-y-3">
            {["Form DS-160", "Valid Passport", "Interview Appointment", "Ties to Home"].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Apply Now</span>
        </div>
    </div>
);

export default function VisitorVisaUSAPage() {
    return (
        <VisaPageTemplate
            heroBadge="Travel Services"
            heroTitle={<>USA <span className="text-[#E42E25]">Visitor Visa</span></>}
            heroSubtitle="B-1/B-2 Visa"
            heroDescription="Visit the United States for tourism, business, or medical treatment. The B-1/B-2 visa is the primary temporary visa for visitors to the USA."
            screens={[<ScreenUSV1 key="1" />, <ScreenUSV2 key="2" />, <ScreenUSV3 key="3" />]}
            featuresTitle="Visa Features"
            featuresSubtitle={<>Tourism and <span className="text-[#E42E25]">Business</span></>}
            features={[
                { title: "Long Validity", desc: "Visas can be granted for up to 10 years, allowing multiple entries.", icon: <Clock className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Tourism & Family", desc: "Visit family and friends, or explore world-famous tourist destinations.", icon: <Camera className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Business Meetings", desc: "Attend professional conferences, negotiate contracts, and consult with associates.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Medical Treatment", desc: "Access world-class healthcare and medical facilities in the USA.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Simple Renewal", desc: "Many individuals can renew their visas via a simplified interview waiver process.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Broad Utility", desc: "One visa handles both business and leisure travel purposes effectively.", icon: <Plane className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Visitor <span className="text-[#E42E25]">Eligibility</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "DS-160 Form", desc: "Must complete the online non-immigrant visa application correctly." },
                { title: "Strong Ties", desc: "Must demonstrate strong financial and family ties to your home country." },
                { title: "Interview Ready", desc: "Prepare for a one-on-one interview at the US Embassy or Consulate." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>USA Visitor <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "How long can I stay?", a: "The duration of stay is determined by the immigration officer at the port of entry, typically up to 6 months." },
                { q: "What is B-1 vs B-2?", a: "B-1 is for business purposes; B-2 is for tourism, social visits, or medical treatment. They are often combined." },
                { q: "Do I need a sponsor?", a: "Strictly speaking, you don't need a sponsor, but an invitation letter from a resident can sometimes help." },
                { q: "Can I work in the USA?", a: "No, you are strictly prohibited from working on a B-1/B-2 visitor visa." }
            ]}
        />
    );
}
