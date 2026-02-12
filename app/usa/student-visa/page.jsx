'use client';
import React from 'react';
import { GraduationCap, BookOpen, Globe, Users, Trophy, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenUS1 = () => (
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
                <p className="text-2xl font-black font-syne text-[#1f406d]">USA</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Type</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">F-1 Visa</p>
            </div>
        </div>
    </div>
);

const ScreenUS2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Study <span className="text-gray-400">USA</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Ivy League & STEM Focus</p>
        <div className="w-full space-y-3">
            {[{ label: "I-20 Form", status: "Issued" }, { label: "SEVIS ID", status: "Paid" }, { label: "OPT Rights", status: "1-3 Years" }, { label: "CPT", status: "Available" }].map((s, i) => (
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

const ScreenUS3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Process</h4>
        <div className="space-y-3">
            {["University Admit", "I-20 Receipt", "SEVIS Fee", "Visa Interview"].map((req, i) => (
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

export default function StudentVisaUSAPage() {
    return (
        <VisaPageTemplate
            heroBadge="Global Leader"
            heroTitle={<>Study in the <span className="text-[#E42E25]">USA</span></>}
            heroSubtitle="F-1 Student Visa"
            heroDescription="The United States hosts many of the world's most prestigious universities. Gain a top-tier education and access unmatched career opportunities."
            screens={[<ScreenUS1 key="1" />, <ScreenUS2 key="2" />, <ScreenUS3 key="3" />]}
            featuresTitle="Why Study in USA"
            featuresSubtitle={<>Innovation and <span className="text-[#E42E25]">Excellence</span></>}
            features={[
                { title: "Top Universities", desc: "Home to Ivy League and globally top-ranked institutions.", icon: <Trophy className="w-5 h-5 text-[#E42E25]" /> },
                { title: "STEM Focus", desc: "Focus on science, technology, engineering, and mathematics programs.", icon: <Zap className="w-5 h-5 text-[#E42E25]" /> },
                { title: "OPT Opportunities", desc: "Qualified graduates can work for 1-3 years in the USA after their degree.", icon: <GraduationCap className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Cultural Diversity", desc: "Experience a multicultural environment with students from all over the world.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Research Funding", desc: "Access to substantial research grants and state-of-the-art labs.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Networking", desc: "Build connections with industry leaders and global innovators.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Visa <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Admissions & I-20", desc: "Must be admitted to a SEVP-approved school and receive your Form I-20." },
                { title: "Financial Capability", desc: "Show evidence of sufficient funds to cover your education and living expenses." },
                { title: "Non-Immigrant Intent", desc: "Prove you intend to return home after completing your studies." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>USA Student <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "What is F-1 Visa?", a: "F-1 is the primary student visa for those attending a university, college, or language training program." },
                { q: "Can I work in the USA?", a: "Students can work on-campus for up to 20 hours per week and apply for OPT/CPT for internships." },
                { q: "What is the SEVIS fee?", a: "A mandatory fee for all international students that funds the system managing their data (SEVIS)." },
                { q: "How long is the visa?", a: "The visa is usually issued for the duration of your study program." }
            ]}
        />
    );
}
