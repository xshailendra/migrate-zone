'use client';
import React from 'react';
import { Camera, Plane, Globe, MapPin, Shield, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenNZV1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Camera className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Tourism</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Dest.</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">New Zealand</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Type</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Visitor Visa</p>
            </div>
        </div>
    </div>
);

const ScreenNZV2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Visit <span className="text-gray-400">NZ</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Holiday & Friends</p>
        <div className="w-full space-y-3">
            {[{ label: "Stay", status: "9 Months Max" }, { label: "Multiple", status: "Granted" }, { label: "Family", status: "Joint App" }, { label: "IVL", status: "Included" }].map((s, i) => (
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

const ScreenNZV3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Details</h4>
        <div className="space-y-3">
            {["Passport Bio", "Funds Proof", "Return Ticket", "Cover Letter"].map((req, i) => (
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

export default function VisitorVisaNZPage() {
    return (
        <VisaPageTemplate
            heroBadge="Travel Services"
            heroTitle={<>New Zealand <span className="text-[#E42E25]">Visitor Visa</span></>}
            heroSubtitle="Tourism & Visit"
            heroDescription="Visit family and friends, or enjoy New Zealand's stunning landscapes. A visitor visa allows you to explore the country for a temporary period."
            screens={[<ScreenNZV1 key="1" />, <ScreenNZV2 key="2" />, <ScreenNZV3 key="3" />]}
            featuresTitle="Visa Features"
            featuresSubtitle={<>Explore <span className="text-[#E42E25]">Aotearoa</span></>}
            features={[
                { title: "Holiday & Leisure", desc: "Enjoy sightseeing and outdoor adventures in a beautiful country.", icon: <Camera className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Visit Loved Ones", desc: "Visit your family or friends residing in New Zealand.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Short Study", desc: "You can study for up to 3 months in total on a visitor visa.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Multiple Entry", desc: "Most visas allow multiple entries during the validity period.", icon: <Plane className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Family Join App", desc: "Include your partner and children under 19 in one application.", icon: <MapPin className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Simple Online", desc: "User-friendly online application process for most nationalities.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Visitor <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Good Intentions", desc: "Prove you are a genuine visitor who will leave at the end of your stay." },
                { title: "Funds for Stay", desc: "Show at least NZD 1,000 per month for maintenance (or NZD 400 if accommodation is paid)." },
                { title: "Standard Bio", desc: "Must meet health and character standards for temporary entry." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>NZ Visitor <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "How long can I stay?", a: "You can usually stay for up to 9 months in an 18-month period." },
                { q: "Is job hunt allowed?", a: "Looking for work is allowed, but you MUST NOT start working until you have a valid work visa." },
                { q: "Do I need NZeTA?", a: "Citizens of visa-waiver countries need an NZeTA. Others must apply for a Visitor Visa." },
                { q: "What is the IVL fee?", a: "The International Visitor Conservation and Tourism Levy (IVL) is a contribution to tourism infrastructure and conservation." }
            ]}
        />
    );
}
