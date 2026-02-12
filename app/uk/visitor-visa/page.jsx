'use client';
import React from 'react';
import { Camera, Plane, Globe, Shield, Clock, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenUKV1 = () => (
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
                <p className="text-2xl font-black font-syne text-[#1f406d]">Standard</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Visitor Visa</p>
            </div>
        </div>
    </div>
);

const ScreenUKV2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Visit <span className="text-gray-400">UK</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Holiday & Friends</p>
        <div className="w-full space-y-3">
            {[{ label: "Stay", status: "6 Months Max" }, { label: "Multi-Entry", status: "Granted" }, { label: "2/5/10 Yrs", status: "Available" }, { label: "Business", status: "Permitted" }].map((s, i) => (
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

const ScreenUKV3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Details</h4>
        <div className="space-y-3">
            {["Passport Bio", "Funds Proof", "Employment Info", "Travel History"].map((req, i) => (
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

export default function VisitorVisaUKPage() {
    return (
        <VisaPageTemplate
            heroBadge="Travel Services"
            heroTitle={<>United Kingdom <span className="text-[#E42E25]">Visitor Visa</span></>}
            heroSubtitle="Standard Visitor Visa"
            heroDescription="Experience the heritage of the UK, visit family, or attend business meetings. The Standard Visitor Visa covers all your short-term travel needs."
            screens={[<ScreenUKV1 key="1" />, <ScreenUKV2 key="2" />, <ScreenUKV3 key="3" />]}
            featuresTitle="Visa Benefits"
            featuresSubtitle={<>Travel and <span className="text-[#E42E25]">Heritage</span></>}
            features={[
                { title: "Long-Term Options", desc: "Available for 2, 5, or 10 years for regular visitors.", icon: <Clock className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Tourism & Leisure", desc: "Enjoy sightseeing across England, Scotland, Wales, and Northern Ireland.", icon: <Camera className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Visit Family", desc: "Spend quality time with family and friends residing in the UK.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Business & Permitted", desc: "Attend meetings, conferences, and training sessions.", icon: <Plane className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Medical Reason", desc: "Visit for private medical treatment with a 6-11 month stay option.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Easy Extension", desc: "Apply for a long-term visitor visa if you plan to visit the UK frequently.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Visitor <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Intent to Leave", desc: "Must show that you'll leave the UK at the end of your visit." },
                { title: "Financial Capability", desc: "Must show you can support yourself and any dependents for the duration of the trip." },
                { title: "Valid Reason", desc: "Must provide a clear purpose for your trip (tourism, business, family)." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>UK Visitor <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "How long can I stay?", a: "Standard visits are usually up to 6 months per visit." },
                { q: "Can I work in the UK?", a: "No, you are strictly prohibited from working on a visitor visa." },
                { q: "Do I need a sponsor?", a: "An invitation letter from a UK resident is helpful but not mandatory." },
                { q: "Can I study?", a: "You can study for up to 30 days, as long as it's not the main reason for your visit." }
            ]}
        />
    );
}
