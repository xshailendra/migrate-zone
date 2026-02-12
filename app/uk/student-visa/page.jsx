'use client';
import React from 'react';
import { GraduationCap, BookOpen, Globe, Users, Trophy, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenUK1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Education</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Dest.</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">United Kingdom</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Stay</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Student Visa</p>
            </div>
        </div>
    </div>
);

const ScreenUK2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Study <span className="text-gray-400">UK</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Prestigious Universities</p>
        <div className="w-full space-y-3">
            {[{ label: "CAS Number", status: "Required" }, { label: "IHS Fee", status: "Paid" }, { label: "Graduate", status: "2 Year Visa" }, { label: "Work", status: "20 Hrs/Wk" }].map((s, i) => (
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

const ScreenUK3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Flow</h4>
        <div className="space-y-3">
            {["University Offer", "CAS Receipt", "IHS Surcharge", "Visa Application"].map((req, i) => (
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

export default function StudentVisaUKPage() {
    return (
        <VisaPageTemplate
            heroBadge="Global Education"
            heroTitle={<>Study in the <span className="text-[#E42E25]">UK</span></>}
            heroSubtitle="Student Visa (Route)"
            heroDescription="Access world-renowned educational heritage and modern innovation. The UK offers a diverse range of courses and a post-study graduate route for international students."
            screens={[<ScreenUK1 key="1" />, <ScreenUK2 key="2" />, <ScreenUK3 key="3" />]}
            featuresTitle="Why Study in UK"
            featuresSubtitle={<>Excellence and <span className="text-[#E42E25]">Opportunity</span></>}
            features={[
                { title: "Global Recognition", desc: "Degrees from UK institutions are highly valued by employers worldwide.", icon: <Trophy className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Graduate Route", desc: "Gain 2-3 years of work experience in the UK after completing your degree.", icon: <GraduationCap className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Work Rights", desc: "Work up to 20 hours per week during term time and full-time during holidays.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Diverse Culture", desc: "Live in a multicultural society with a rich history and vibrant community.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Research Leader", desc: "The UK is a world leader in scientific and social research across all fields.", icon: <BookOpen className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Fast-Track Courses", desc: "Many UK Master's programs are completed in just one year.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Visa <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Offer & CAS", desc: "Must have an unconditional offer and a Confirmation of Acceptance for Studies (CAS)." },
                { title: "Financial Capability", desc: "Show appropriate funds for tuition and living costs (amount depends on location)." },
                { title: "English Proficiency", desc: "Meet the required level of English speaking, reading, writing, and listening." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>UK Student <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "What is the CAS?", a: "Confirmation of Acceptance for Studies is a unique reference number issued by your UK university." },
                { q: "What is IHS?", a: "The Immigration Health Surcharge allows you to access the UK's National Health Service (NHS)." },
                { q: "Can I bring dependents?", a: "As of 2024, only students on research-based postgraduate programs can bring dependents." },
                { q: "How long is the visa?", a: "The visa is usually granted for the length of your course plus a few months." }
            ]}
        />
    );
}
