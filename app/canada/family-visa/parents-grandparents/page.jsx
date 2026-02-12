'use client';
import React from 'react';
import { Users, Heart, Shield, CheckCircle2, Ticket, Calendar } from 'lucide-react';
import VisaPageTemplate from '@/components/VisaPageTemplate';

const ScreenQ1 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Ticket className="w-4 h-4 text-[#1f406d]" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">PGP 2024</span>
        </div>
        <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Status</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">Lottery</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Undertaking</p>
                <p className="text-2xl font-black font-syne text-[#1f406d]">20 Years</p>
            </div>
        </div>
    </div>
);

const ScreenQ2 = () => (
    <div className="p-6 h-full flex flex-col pt-12 text-center items-center">
        <div className="w-14 h-14 bg-[#1f406d]/5 rounded-2xl flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-[#1f406d] rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
            </div>
        </div>
        <h3 className="text-2xl font-[900] font-syne text-[#1f406d] uppercase tracking-tighter leading-tight mb-4">
            Super <span className="text-gray-400">Visa</span>
        </h3>
        <p className="text-[11px] font-bold text-gray-400 mb-8 tracking-tight">Alternative Option</p>
        <div className="w-full space-y-3">
            {[{ label: "5 Year Stay", status: "Per Visit" }, { label: "10 Year Status", status: "Validity" }, { label: "Insurance", status: "Required" }, { label: "Income", status: "LICO" }].map((s, i) => (
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

const ScreenQ3 = () => (
    <div className="p-6 h-full flex flex-col pt-12">
        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#1f406d] mb-6">Steps</h4>
        <div className="space-y-3">
            {["Submit Interest", "Receive Invitation", "Complete Application", "Pay Fees"].map((req, i) => (
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

export default function ParentsGrandparentsPage() {
    return (
        <VisaPageTemplate
            heroBadge="Family Sponsorship"
            heroTitle={<>Parents & <span className="text-[#E42E25]">Grandparents</span></>}
            heroSubtitle="PGP Program"
            heroDescription="Sponsor your parents and grandparents to become permanent residents of Canada. Due to high demand, this program currently operates via a lottery system."
            screens={[<ScreenQ1 key="1" />, <ScreenQ2 key="2" />, <ScreenQ3 key="3" />]}
            featuresTitle="Program Details"
            featuresSubtitle={<>Sponsorship <span className="text-[#E42E25]">Options</span></>}
            features={[
                { title: "PGP Program", desc: "Permanent residency pathway via annual lottery intake.", icon: <Users className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Super Visa", desc: "Temporary visa valid for 10 years allowing 5-year stays per visit.", icon: <Shield className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Financial Support", desc: "Sponsors must meet Minimum Necessary Income (LICO + 30%) for 3 years.", icon: <CheckCircle2 className="w-5 h-5 text-[#E42E25]" /> },
                { title: "20-Year Undertaking", desc: "You are financially responsible for them for 20 years after they become PRs.", icon: <Calendar className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Medical Exams", desc: "Parents/Grandparents must be admissible and pass medical exams.", icon: <Heart className="w-5 h-5 text-[#E42E25]" /> },
                { title: "Quebec Residents", desc: "Quebec has its own distinct sponsorship requirements.", icon: <Ticket className="w-5 h-5 text-[#E42E25]" /> }
            ]}
            eligibilityTitle={<>Sponsor <span className="text-[#E42E25]">Requirements</span></>}
            eligibilitySubtitle="Eligibility"
            eligibility={[
                { title: "Income Proof", desc: "Notice of Assessment from CRA for previous 3 taxation years meeting MNI." },
                { title: "Status", desc: "Canadian Citizen or Permanent Resident living in Canada." },
                { title: "Relationship", desc: "Must be your biological or adopted parents/grandparents." }
            ]}
            faqTitle="Common Questions"
            faqSubtitle={<>PGP & Super Visa <span className="text-[#E42E25]">FAQs</span></>}
            faq={[
                { q: "What is the Super Visa?", a: "It's a multi-entry visa valid for up to 10 years that lets parents and grandparents visit for up to 5 years at a time." },
                { q: "Is the PGP open?", a: "The PGP usually opens once a year for a limited time for 'Interest to Sponsor' forms. Check IRCC for current status." },
                { q: "How much income do I need?", a: "You need to meet the Minimum Necessary Income (MNI) which is LICO plus 30% for the size of your family unit." },
                { q: "Can I include siblings?", a: "You generally cannot sponsor siblings directly under this program unless they are dependent children of your parents." }
            ]}
        />
    );
}
