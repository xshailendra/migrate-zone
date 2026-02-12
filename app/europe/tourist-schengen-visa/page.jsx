'use client';
import React from 'react';
import { Camera, Plane, Globe, Shield, Clock, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenEUR1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Globe className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Schengen</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Area</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">29 Countries</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Unified Visa</p>
            </div>
        </div>
    </div>
);

const ScreenEUR2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Visit <span className="text-gray-400">Europe</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Seamless Border Crossings</p>
        <div className="w-full space-y-3">
            {[{ label: "Stay", status: "90 / 180 Days" }, { label: "Multi", status: "Available" }, { label: "Insurance", status: "€30,000 Min" }, { label: "App", status: "Main Dest." }].map((s, i) => (
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

const ScreenEUR3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Process</h4>
        <div className="space-y-3">
            {["Itinerary Plan", "Insurance Proof", "Bank Statements", "Bio Appointment"].map((req, i) => (
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

export default function SchengenVisaPage() {
    return (
        <VisaPageTemplate
            heroBadge="European Union"
            heroTitle={<>Europe <span className="text-[#E42E25]">Schengen Visa</span></>}
            heroSubtitle="Unified Tourist Visa"
            heroDescription="Explore 29 European countries with a single visa. The Schengen visa allows for seamless travel across the member states for up to 90 days."
            screens={[<ScreenEUR1 key="1" />, <ScreenEUR2 key="2" />, <ScreenEUR3 key="3" />]}
            featuresTitle="Visa Benefits"
            featuresSubtitle={<>Borderless <span className="text-[#E42E25]">Exploration</span></>}
            features={[
                { title: "Single Visa", desc: "One application for many countries including France, Germany, Italy, and more.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "No Internal Borders", desc: "Travel freely between member states without passport controls.", icon: <Plane className="w-5 h-5 text-[#E42E25]" /> },
                { title: "90/180 Rule", desc: "Stay for up to 90 days in any 180-day period across the zone.", icon: <Clock className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Multiple Entries", desc: "Available as single, double, or multiple entry depending on travel history.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Business & Leisure", desc: "Use the same visa for both holidays and professional meetings.", icon: <Camera className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Secure Travels", desc: "Mandatory travel insurance ensures you're covered across all member states.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Schengen <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Main Destination", desc: "Apply at the consulate of the country where you will spend the most time." },
                { title: "Travel Insurance", desc: "Must have valid medical insurance covering at least €30,000 for the entire zone." },
                { title: "Proof of Subsistence", desc: "Detailed bank statements showing sufficient funds for the entire duration of stay." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>Schengen Visa <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "Which countries are included?", a: "Includes 29 countries like France, Germany, Spain, Italy, Switzerland, and many others." },
                { q: "What is the 90/180 rule?", a: "You can stay for a maximum of 90 days within any 180-day period in the Schengen area." },
                { q: "Is the UK included?", a: "No, the UK and Ireland are not part of the Schengen zone (they have their own visas)." },
                { q: "How long before should I apply?", a: "You can apply up to 6 months before your intended travel date." }
            ]}
        />
    );
}
