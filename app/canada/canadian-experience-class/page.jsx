'use client';
import React from 'react';
import { Briefcase, Globe, BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenC1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Experience</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Stream</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">CEC</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Location</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">In Canada</p>
            </div>
        </div>
    </div>
);

const ScreenC2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Experience <span className="text-gray-400">Class</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">For Workers in Canada</p>
        <div className="w-full space-y-3">
            {[{ label: "Experience", status: "1 Year CA" }, { label: "NOC Skills", status: "TEER 0-3" }, { label: "English", status: "CLB 5-7" }, { label: "Status", status: "Valid Work Permit" }].map((s, i) => (
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

const ScreenC3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Process</h4>
        <div className="space-y-3">
            {["1 Yrs CA Exp", "Language Test", "Express Entry Profile", "Receive ITA"].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#E42E25]" />
                    <span className="text-[11px] font-bold text-[#1f406d]/60">{req}</span>
                </div>
            ))}
        </div>
        <div className="mt-auto bg-[#1f406d] p-4 rounded-2xl text-center">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Submit Profile</span>
        </div>
    </div>
);

export default function CECPage() {
    return (
        <VisaPageTemplate
            heroBadge="Express Entry"
            heroTitle={<>Canadian <span className="text-[#E42E25]">Experience Class</span></>}
            heroSubtitle="Subclass CEC"
            heroDescription="The Canadian Experience Class (CEC) is for skilled workers who have Canadian work experience and want to become permanent residents. It is one of the fastest routes to PR."
            screens={[<ScreenC1 key="1" />, <ScreenC2 key="2" />, <ScreenC3 key="3" />]}
            featuresTitle="CEC Benefits"
            featuresSubtitle={<>Transition to <span className="text-[#E42E25]">Permanent Residency</span></>}
            features={[
                { title: "Fast Processing", desc: "One of the quickest streams for permanent residency approval.", icon: <Zap className="w-5 h-5 text-[#E42E25]" /> },
                { title: "No Settlement Funds", desc: "If you are currently working in Canada, you do not need to show proof of funds.", icon: <BarChart3 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Experience Valuation", desc: "Recognizes the value of your contribution to the Canadian economy.", icon: <Briefcase className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Priority Draws", desc: "Often has specific Express Entry draws exclusively for CEC candidates.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Adaptive Points", desc: "Additional points for your Canadian education and work history.", icon: <Globe className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Continuity", desc: "Stay with your current employer while transitioning to permanent residency.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>CEC <span className="text-[#E42E25]">Inclusion</span></>}
            eligibilitySubtitle="Requirements"
            eligibility={[
                { title: "Canadian Work Exp", desc: "At least 1 year of skilled work experience in Canada in the last 3 years." },
                { title: "Skilled Occupation", desc: "Work must be in NOC TEER 0, 1, 2, or 3. Self-employment doesn't count." },
                { title: "Language Proficiency", desc: "CLB 7 for TEER 0/1, CLB 5 for TEER 2/3." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>CEC <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "Is part-time work eligible?", a: "Yes, as long as it adds up to 1,560 hours (equivalent to 1 year full-time)." },
                { q: "What about student work?", a: "Work experience gained while a full-time student does not count towards CEC." },
                { q: "Do I need ECA?", a: "Not for CEC eligibility, but highly recommended for CRS points for education." },
                { q: "Can I apply from outside?", a: "Yes, as long as you have the required 1 year of Canadian experience within the last 3 years." }
            ]}
        />
    );
}
