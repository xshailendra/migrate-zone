'use client';
import React from 'react';
import { GraduationCap, BookOpen, MapPin, Users, Trophy, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenNZ1 = () => (
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
                <p className="text-2xl font-black font-syne text-[#1f406d]">New Zealand</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Stay</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Study Duration</p>
            </div>
        </div>
    </div>
);

const ScreenNZ2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Study <span className="text-gray-400">NZ</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">World-Class Education</p>
        <div className="w-full space-y-3">
            {[{ label: "Job Rights", status: "20 Hrs/Wk" }, { label: "Post-Study", status: "Work Visa" }, { label: "Healthcare", status: "Included" }, { label: "Insurance", status: "Mandatory" }].map((s, i) => (
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

const ScreenNZ3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Process</h4>
        <div className="space-y-3">
            {["Offer of Place", "Tuition Payment", "Visa Application", "Health/Medical"].map((req, i) => (
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

export default function StudentVisaNZPage() {
    return (
        <VisaPageTemplate
            heroBadge="Global Education"
            heroTitle={<>Study in <span className="text-[#E42E25]">New Zealand</span></>}
            heroSubtitle="Student Visa"
            heroDescription="Experience New Zealand's world-class education system. Study at 8 top universities and gain post-study work rights in a beautiful, safe country."
            screens={[<ScreenNZ1 key="1" />, <ScreenNZ2 key="2" />, <ScreenNZ3 key="3" />]}
            featuresTitle="Why Study in NZ"
            featuresSubtitle={<>Education and <span className="text-[#E42E25]">Lifestyle</span></>}
            features={[
                { title: "Universal Ranking", desc: "All 8 NZ universities are ranked in the top 3% globally.", icon: <Trophy className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Post-Study Work", desc: "Gain 1-3 years of work experience after completing your studies.", icon: <GraduationCap className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Work while Studying", desc: "Most students can work up to 20 hours per week and full-time on holidays.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Safe & Friendly", desc: "Consistently ranked as one of the safest and most peaceful countries.", icon: <MapPin className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Research Focus", desc: "Strong emphasis on research and practical learning in high-demand fields.", icon: <BookOpen className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Pathway to PR", desc: "Work experience gained in NZ can lead to pathways for permanent residency.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Visa <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Offer of Place", desc: "A confirmed offer from a recognized New Zealand educational provider." },
                { title: "Financial Proof", desc: "Sufficient funds to cover your tuition fees and living costs (NZD 20,000/year)." },
                { title: "Health & Character", desc: "Must meet health and character requirements (Medical & Police certificates)." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>NZ Student <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "What is the processing time?", a: "Standard processing is 4-8 weeks, but it's best to apply 3 months before your course starts." },
                { q: "Can I bring my spouse?", a: "Depending on your course level (usually Master's/PhD), your spouse may be eligible for an open work visa." },
                { q: "Do I need IELTS?", a: "Most providers require proof of English proficiency (IELTS, TOEFL, PTE)." },
                { q: "What is Fund Transfer Scheme?", a: "FTS is a safe and secure way to transfer living funds (available for some countries like India)." }
            ]}
        />
    );
}
