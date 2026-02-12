'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Video,
    Star,
    ArrowRight,
    MessageCircle,
    Building2,
    Briefcase,
    Globe2,
    Instagram,
    Facebook,
    Linkedin,
    Twitter
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CONTACT_INFO = [
    {
        icon: Phone,
        title: "Phone",
        details: ["Ahmedabad: +91 7069629625", "Australia: +61 2 8099 6026"],
        subtext: "(We only meet with prior Appointment)"
    },
    {
        icon: Mail,
        title: "Email",
        details: ["info@migratezone.com", "info@evolgroups.com"],
        subtext: "Our Team will get back to you soon"
    },
    {
        icon: MapPin,
        title: "Location",
        details: ["Vadodara, Ahmedabad", "Sydney, Melbourne"],
        subtext: "Global presence in India & Australia"
    }
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white font-outfit">
            <Header />

            {/* Hero Section — High Impact J-Style */}
            <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-start gap-12">

                        {/* Left Side: Bold Text */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                            >
                                <h1 className="text-[14vw] md:text-[12vw] font-[900] text-[#1f406d] leading-[0.8] tracking-[-0.05em] uppercase font-syne pointer-events-none relative z-20">
                                    Contact <br />
                                    <span className="text-[#e41e25]">Us.</span>
                                </h1>

                                <div className="mt-12 max-w-md">
                                    <p className="text-gray-400 font-medium text-lg leading-relaxed">
                                        For any inquiries, collaborations, or just to say hello, we'd love to hear from you! Reach out, and let's connect.
                                    </p>
                                    <div className="mt-8 flex items-center gap-2">
                                        <div className="flex -space-x-1">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-[#1f406d] text-[#1f406d]" />)}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1f406d]">Rated 4.3 on Google</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side Image — The Professional Immigrant */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="lg:col-span-4 relative h-[400px] md:h-[600px] lg:h-[700px] lg:absolute lg:right-0 lg:top-32 lg:w-1/3 z-0"
                        >
                            <img
                                src="/migration_hero_contact.png"
                                alt="Global Success"
                                className="w-full h-full object-cover rounded-[2rem] lg:rounded-l-[4rem] shadow-3xl"
                            />
                            {/* Overlay tag */}
                            <div className="absolute bottom-10 left-[-40px] bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                                <p className="text-[8px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Status</p>
                                <p className="text-[#1f406d] font-bold">World-Wide Support</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Sections Grid — Minimalist Style */}
                    <div className="mt-32 md:mt-56 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 border-t border-gray-100 pt-20">

                        {/* Sales Inquiry */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#e41e25]">Sales & Business</h3>
                            <div>
                                <p className="text-xl font-bold text-[#1f406d] mb-4">Migrate Zone Partners</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Our business development team is ready to assist with institutional partnerships.
                                </p>
                                <a href="mailto:info@migratezone.com" className="text-sm font-black text-[#1f406d] border-b-2 border-[#1f406d] pb-1 hover:text-[#e41e25] hover:border-[#e41e25] transition-all">
                                    info@migratezone.com
                                </a>
                            </div>
                        </motion.div>

                        {/* Career / Press */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#e41e25]">Career & Support</h3>
                            <div>
                                <p className="text-xl font-bold text-[#1f406d] mb-4">Join Our Global Team</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    We are always looking for qualified solicitors and migration experts.
                                </p>
                                <a href="mailto:info@evolgroups.com" className="text-sm font-black text-[#1f406d] border-b-2 border-[#1f406d] pb-1 hover:text-[#e41e25] hover:border-[#e41e25] transition-all">
                                    info@evolgroups.com
                                </a>
                            </div>
                        </motion.div>

                        {/* Head Office */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#e41e25]">Head Office</h3>
                            <div>
                                <p className="text-xl font-bold text-[#1f406d] mb-2">Vadodara, HQ</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    328, 3rd Floor, Atlantis k-10 Tower B, <br />
                                    Sarabhai Main Road, Vadodara, <br />
                                    Gujarat 390007, India
                                </p>
                                <a href="tel:+917069629625" className="text-sm font-black text-[#1f406d] flex items-center gap-2 hover:text-[#e41e25] transition-colors">
                                    <Phone size={14} /> +91 70696 29625
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Form Section — High Contrast */}
            <section className="py-24 md:py-40 bg-[#f8fafc]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#1f406d] tracking-tighter uppercase leading-[0.9] mb-8 font-syne">
                            Or Fill out the <br /> <span className="text-[#e41e25]">Forms.</span>
                        </h2>
                        <p className="text-lg text-gray-500 max-w-md font-medium">
                            Your queries light up our day, we're here to guide you all the way!
                            Fill out the details and our consultants will reach out within 24 hours.
                        </p>

                        {/* Direct Connect Pills */}
                        <div className="mt-12 space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1f406d] shadow-sm transform group-hover:rotate-12 transition-transform">
                                    <Video size={18} />
                                </div>
                                <p className="text-[#1f406d] font-bold">migratezone328 <span className="text-[10px] text-gray-300 ml-2 uppercase tracking-widest">(Video Call)</span></p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1f406d] shadow-sm transform group-hover:-rotate-12 transition-transform">
                                    <Globe2 size={18} />
                                </div>
                                <p className="text-[#1f406d] font-bold">global.migratezone.com <span className="text-[10px] text-gray-300 ml-2 uppercase tracking-widest">(Portal)</span></p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Full Name*</label>
                                <input type="text" className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#1f406d] outline-none transition-colors font-bold text-[#1f406d]" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Email Address*</label>
                                <input type="email" className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#1f406d] outline-none transition-colors font-bold text-[#1f406d]" placeholder="jane@example.com" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Mobile Number*</label>
                            <input type="tel" className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#1f406d] outline-none transition-colors font-bold text-[#1f406d]" placeholder="+91 00000 00000" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">The Message</label>
                            <textarea className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#1f406d] outline-none transition-colors font-bold text-[#1f406d] resize-none" rows={4} placeholder="How can we help you?" />
                        </div>
                        <button className="w-full h-20 bg-[#1f406d] text-white rounded-2xl flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#e41e25] transition-all duration-700">
                            Send Request
                            <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </section>

            {/* Opening Hours — Compact */}
            <section className="py-24 border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-3xl bg-[#1f406d]/5 flex items-center justify-center text-[#1f406d]">
                            <Building2 size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">India Hub</p>
                            <p className="text-lg font-bold text-[#1f406d]">Mon - Sat: 10:00 am - 7:00 pm</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-3xl bg-[#e41e25]/5 flex items-center justify-center text-[#e41e25]">
                            <Globe2 size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Australia Hub</p>
                            <p className="text-lg font-bold text-[#1f406d]">Mon - Fri: 10:00 am - 5:00 pm</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ y: -5, color: '#e41e25' }}
                                href="#"
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#1f406d] transition-all"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
