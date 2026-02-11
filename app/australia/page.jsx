'use client';

import { motion } from 'framer-motion';
import { Plane, GraduationCap, Briefcase, Users, Building2, TrendingUp, ArrowRight, CheckCircle2, Globe, MapPin, Award, Zap, Shield, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RequestCallBack from '@/components/RequestCallBack';

const visaCategories = [
    {
        title: 'Skilled Migration',
        subsets: ['Visa 189', 'Visa 190', 'Visa 491'],
        description: 'Points-based visas for skilled workers to live and work in Australia permanently or semi-permanently.',
        icon: TrendingUp,
        color: '#00843D',
        bg: 'bg-emerald-50'
    },
    {
        title: 'Student Visa',
        subsets: ['Subclass 500'],
        description: 'Quality education in world-class Australian universities with post-study work opportunities.',
        icon: GraduationCap,
        color: '#dc2626',
        bg: 'bg-red-50'
    },
    {
        title: 'Employer Sponsored',
        subsets: ['Visa 186', 'Visa 482', 'Visa 494'],
        description: 'Visa pathways for workers who have been sponsored by an Australian employer.',
        icon: Briefcase,
        color: '#1f406d',
        bg: 'bg-blue-50'
    },
    {
        title: 'Business & Investor',
        subsets: ['Visa 188', 'Visa 132'],
        description: 'For business owners and investors looking to establish or manage a business in Australia.',
        icon: Building2,
        color: '#ca8a04',
        bg: 'bg-yellow-50'
    },
    {
        title: 'Family & Partner',
        subsets: ['Partner Visa', 'Parent Visa'],
        description: 'Connect with your loved ones in Australia through various family sponsorship programs.',
        icon: Users,
        color: '#db2777',
        bg: 'bg-pink-50'
    },
    {
        title: 'Work & Holiday',
        subsets: ['Visa 417', 'Visa 462'],
        description: 'Explore Australia while working temporarily to fund your travels.',
        icon: Plane,
        color: '#0891b2',
        bg: 'bg-cyan-50'
    }
];

const benefits = [
    {
        title: 'Quality of Life',
        desc: 'Australia consistently ranks as one of the best places to live globally.',
        icon: Heart,
        color: '#e11d48'
    },
    {
        title: 'Economic Growth',
        desc: 'Strong economy with high minimum wages and plenty of job opportunities.',
        icon: TrendingUp,
        color: '#059669'
    },
    {
        title: 'Healthcare System',
        desc: 'Access to world-class public healthcare via Medicare.',
        icon: Shield,
        color: '#2563eb'
    },
    {
        title: 'Global Education',
        desc: 'Home to some of the world\'s top-ranked universities.',
        icon: GraduationCap,
        color: '#7c3aed'
    }
];

export default function AustraliaPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/sydney_office_gateway_1770547680868.png"
                        alt="Sydney Australia"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1f406d]/90 via-[#1f406d]/60 to-transparent" />
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 bg-[#E42E25] text-white rounded-full text-xs font-black tracking-widest uppercase mb-6">
                                Destination Australia
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8">
                                Your Gateway to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Opportunities.</span>
                            </h1>
                            <p className="text-xl text-white/80 font-medium mb-10 leading-relaxed max-w-xl">
                                Navigate the Australian migration landscape with Migrate Zone's expert MARA-registered guidance.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-white text-[#1f406d] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl"
                                >
                                    Get Free Consultation
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-transparent border border-white/30 text-white rounded-2xl font-black text-sm uppercase tracking-widest backdrop-blur-md"
                                >
                                    Explore Visas
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-12 right-12 hidden xl:flex gap-6">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl text-white min-w-[200px]">
                        <div className="text-3xl font-black mb-1">50K+</div>
                        <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Successful Visas</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl text-white min-w-[200px]">
                        <div className="text-3xl font-black mb-1">98%</div>
                        <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Success Rate</div>
                    </div>
                </div>
            </section>

            {/* Quick Overview Cards */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-[#1f406d] mb-6">Explore Visa Pathways</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            We offer specialized assistance for a wide range of Australian visa categories tailored to your profile.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visaCategories.map((visa, idx) => (
                            <motion.div
                                key={visa.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#1f406d]/20 hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-14 h-14 ${visa.bg} rounded-2xl flex items-center justify-center mb-6 transformation group-hover:scale-110 transition-transform`}>
                                    <visa.icon style={{ color: visa.color }} className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{visa.title}</h3>
                                <p className="text-gray-500 mb-6 leading-relaxed">
                                    {visa.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {visa.subsets.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="flex items-center gap-2 text-sm font-black text-[#1f406d] uppercase tracking-widest">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Australia Section */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-6xl font-black text-[#1f406d] mb-8 leading-tight">
                                Why Choose <span className="text-[#E42E25]">Australia?</span>
                            </h2>
                            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                                From breathtaking natural landscapes to a booming economy, Australia offers unparalleled opportunities for immigrants from across the globe.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-[#1f406d]">
                                            <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xl text-gray-900 mb-2">{benefit.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/australia_country_1770386989728.png"
                                    alt="Life in Australia"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#1f406d] rounded-[2rem] -z-10 animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[#1f406d] text-white">
                <div className="container mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-16">The Migration Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0" />

                        {[
                            { step: '01', title: 'Consultation', desc: 'Detailed assessment of your profile and goals.' },
                            { step: '02', title: 'Preparation', desc: 'Compiling documentation and meeting requirements.' },
                            { step: '03', title: 'Lodgement', desc: 'Secure submission to Australian authorities.' },
                            { step: '04', title: 'Approval', desc: 'Continuous follow-up until your visa is granted.' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center mb-8 text-2xl font-black">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-black mb-4 uppercase tracking-widest">{item.title}</h4>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RequestCallBack />
            <Footer />
        </main>
    );
}
