'use client';
import React from 'react';
import { Briefcase, Hammer, Shield, Users, Trophy, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenF1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Hammer className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Trades</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Stream</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">FSTP</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Pathway</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Express Entry</p>
            </div>
        </div>
    </div>
);

const ScreenF2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Qualified <span className="text-gray-400">Trades</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Certification or Offer</p>
        <div className="w-full space-y-3">
            {[{ label: "Job Offer", status: "1 Year" }, { label: "Certificate", status: "Provincial" }, { label: "English", status: "CLB 5" }, { label: "French", status: "Bonus" }].map((s, i) => (
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

const ScreenF3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Requirements</h4>
        <div className="space-y-3">
            {["Valid Job Offer", "State Certificate", "2 Yrs Experience", "NOC Skills List"].map((req, i) => (
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

export default function FSTPPage() {
    return (
        <VisaPageTemplate
            heroBadge="Express Entry"
            heroTitle={<>Federal Skilled <span className="text-[#E42E25]">Trades</span></>}
            heroSubtitle="Subclass FSTP"
            heroDescription="For skilled workers who want to become permanent residents based on being qualified in a skilled trade. This program is for workers in specific trade-based occupations."
            screens={[<ScreenF1 key="1" />, <ScreenF2 key="2" />, <ScreenF3 key="3" />]}
            featuresTitle="Program Benefits"
            featuresSubtitle={<>Trade Skilled <span className="text-[#E42E25]">Pathway</span></>}
            features={[
                { title: "Permanent Residence", desc: "Direct pathway to Canada PR for skilled tradespeople.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Lower Language Req.", desc: "Language requirements (CLB 5) are lower than for skilled workers (CLB 7).", icon: <Trophy className="w-5 h-5 text-[#E42E25]" /> },
                { title: "No Education Req.", desc: "There is no minimum education requirement for this program.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Job Offer Bonus", desc: "A valid job offer greatly increases your CRS score for invitation.", icon: <Briefcase className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Broad Trades", desc: "Covers construction, manufacturing, electricity, and many more sectors.", icon: <Hammer className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Family Inclusive", desc: "Include your spouse and children in your permanent residence application.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Trade <span className="text-[#E42E25]">Criteria</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Work Experience", desc: "At least 2 years of full-time work experience in a skilled trade within the last 5 years." },
                { title: "Job Offer or Cert", desc: "Have a valid full-time job offer for at least 1 year OR a certificate of qualification in that trade." },
                { title: "Language Skills", desc: "Meet the minimum score of CLB 5 for speaking/listening and CLB 4 for reading/writing." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>FSTP <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "What trades are eligible?", a: "Eligible groups include Industrial, electrical and construction trades, Maintenance and equipment operation trades, Supervisors and technical occupations in natural resources, and more." },
                { q: "Do I need a certificate?", a: "You need either a valid full-time job offer for at least 1 year OR a certificate of qualification from a Canadian provincial authority." },
                { q: "Is there a quota?", a: "Wait for invitation through Express Entry. Invitations depend on your CRS score and the specific draw category." },
                { q: "Can I use foreign experience?", a: "Yes, the 2 years of experience can be from outside Canada." }
            ]}
        />
    );
}
