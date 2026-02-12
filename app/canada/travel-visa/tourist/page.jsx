'use client';
import React from 'react';
import { Plane, Camera, Globe, Clock, Shield, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenT1 = () => (
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
                <p className="text-2xl font-black font-syne text-[#1f406d]">Visitor</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Temporary</p>
            </div>
        </div>
    </div>
);

const ScreenT2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Canadian <span className="text-gray-400">Visitor</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Multiple Entry Opportunity</p>
        <div className="w-full space-y-3">
            {[{ label: "Stay", status: "Up to 6 Mo" }, { label: "Validity", status: "Up to 10 Yrs" }, { label: "Type", status: "TRV" }, { label: "eTA", status: "Specific Countries" }].map((s, i) => (
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

const ScreenT3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Details</h4>
        <div className="space-y-3">
            {["Passport Bio", "Funds Proof", "Ties to Home", "Travel History"].map((req, i) => (
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

export default function TouristVisaCanadaPage() {
    return (
        <VisaPageTemplate
            heroBadge="Travel Services"
            heroTitle={<>Canada <span className="text-[#E42E25]">Tourist Visa</span></>}
            heroSubtitle="Visitor Visa (TRV)"
            heroDescription="Explore the beauty of Canada, visit family, or attend business meetings. A visitor visa (Temporary Resident Visa) is required for citizens of many countries."
            screens={[<ScreenT1 key="1" />, <ScreenT2 key="2" />, <ScreenT3 key="3" />]}
            featuresTitle="Visa Benefits"
            featuresSubtitle={<>Travel and <span className="text-[#E42E25]">Explore</span></>}
            features={[
                { title: "Long Validity", desc: "Visas are often granted up to the validity of your passport (up to 10 years).", icon: <Clock className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Multiple Entry", desc: "Allows you to enter and leave Canada multiple times during the visa period.", icon: <Plane className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Family Visits", desc: "Perfect for visiting children or grandchildren who are studying or working in Canada.", icon: <Camera className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Business Meetings", desc: "Authorized for attending conferences, meetings, or training sessions.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Simple Process", desc: "Streamlined online application process for most countries.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Extension Possible", desc: "You can apply to extend your visitor record from within Canada.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Visitor <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Valid Passport", desc: "Must have a valid travel document from an eligible country." },
                { title: "Financial Capability", desc: "Prove you have enough money for your stay and return home." },
                { title: "Ties to Home", desc: "Demonstrate home ties like a job, property, or family to ensure your return." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>Tourist Visa <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "How long can I stay?", a: "Most visitors can stay for up to 6 months. Border officers may specify a shorter period." },
                { q: "Do I need a medical?", a: "Only if you plan to stay longer than 6 months or have visited specific countries recently." },
                { q: "What is an eTA?", a: "Electronic Travel Authorization is for visa-exempt foreign nationals traveling by air." },
                { q: "Can I work on visitor visa?", a: "No, you are strictly prohibited from working or studying on a visitor visa." }
            ]}
        />
    );
}
