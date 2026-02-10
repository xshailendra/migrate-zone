'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Play,
    Pause,
    Building2,
    Search,
    BookOpen,
    ShieldCheck,
    Zap,
    Users,
    MessageSquare,
    Briefcase,
    Globe2,
    ArrowRight
} from 'lucide-react';

const strengths = [
    {
        id: 'australia',
        title: "Local Presence.",
        short: "Offices in Australia to serve you better.",
        icon: Building2,
        bg: "bg-[#f4f7f4]",
        textColor: "text-[#1f406d]"
    },
    {
        id: 'services',
        title: "Regional Expertise.",
        short: "We provide quality and professional services for Australia and Canada",
        icon: ShieldCheck,
        bg: "bg-[#f8f7f0]",
        textColor: "text-[#1f406d]"
    },
    {
        id: 'research',
        title: "Opportunity Insight.",
        short: "Extensive research on the latest opportunities.",
        icon: Search,
        bg: "bg-[#f9eeec]",
        textColor: "text-[#e41e25]"
    },
    {
        id: 'job-security',
        title: "Secure a Job Before You Arrive.",
        tag: "Joint Ventures",
        description: "Joint ventures with foreign partners to assist you in securing a job before you step in.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        icon: Globe2
    },
    {
        id: 'knowledge',
        title: "Exclusive Knowledge Base.",
        tag: "Rules & Regulations",
        description: "Exclusive knowledge base on all immigration updates, rules, and regulations.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2075&auto=format&fit=crop",
        icon: BookOpen
    },
    {
        id: 'methodology',
        title: "Errorless Process Management.",
        tag: "Hi-Tech Methodology",
        description: "Errorless documentations process with Hi-tech methodology.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2075&auto=format&fit=crop",
        icon: Zap
    },
    {
        id: 'team',
        title: "Your Gateway to a Professional Environment.",
        description: "Highly qualified, experienced, enthusiastic, and friendly team to assist you. Practiced Team to prepare you for the interviews in a Professional Environment.",
        tag: "Our Expert Team",
        image: "https://images.unsplash.com/photo-1522071823991-b9671f903f60?q=80&w=2070&auto=format&fit=crop",
        hashtags: ["#ExpertTeam", "#InterviewPrep", "#ProfessionalEnv"]
    }
];

const SmallCard = ({ title, short, icon: Icon, bg, textColor, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`${bg} rounded-[2rem] p-8 flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-black/5 transition-all h-[140px] md:h-auto`}
    >
        <div>
            <span className={`text-[12px] font-bold ${textColor} opacity-40 mb-2 block uppercase tracking-tighter`}>
                {title}
            </span>
            <h3 className={`text-xl font-black font-syne ${textColor} leading-[1.1] flex items-center justify-between`}>
                {short}
            </h3>
        </div>
        <div className="flex justify-end mt-4">
            <ArrowRight className={`w-4 h-4 ${textColor} opacity-20 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0`} />
        </div>
    </motion.div>
);

const ImageCard = ({ title, tag, image, description, icon: Icon, delay, tall = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`relative ${tall ? 'h-full' : 'h-[280px]'} rounded-[2.5rem] overflow-hidden group cursor-pointer`}
    >
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        <div className="absolute top-6 left-6">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                <Icon className="text-white" size={14} />
                <span className="text-white font-black text-[9px] uppercase tracking-widest">{tag}</span>
            </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl font-black font-syne text-white leading-tight mb-2 uppercase tracking-tighter">
                {title}
            </h3>
            <p className="text-white/60 text-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {description}
            </p>
        </div>
    </motion.div>
);

export default function StrengthsSection() {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 bg-transparent font-outfit">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20 gap-4">
                    <h2 className=" text-5xl md:text-6xl font-black font-syne tracking-tighter text-[#1f406d] leading-[0.85] uppercase">
                        Our Strategic <br />
                        <span className="mt-4 text-[#e41e25]">Strengths.</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-[#e41e25]/20 rounded-full"></div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                    {/* Left Column - 3 small cards */}
                    <div className="md:col-span-3 flex flex-col gap-6">
                        <SmallCard {...strengths[0]} delay={0.1} />
                        <SmallCard {...strengths[1]} delay={0.2} />
                        <SmallCard {...strengths[2]} delay={0.3} />
                    </div>

                    {/* Middle Column - 1 tall image card */}
                    <div className="md:col-span-4 h-[500px] md:h-auto">
                        <ImageCard {...strengths[3]} delay={0.4} tall />
                    </div>

                    {/* Right Column - 2 stacked image cards */}
                    <div className="md:col-span-5 grid grid-cols-1 gap-6">
                        <ImageCard {...strengths[4]} delay={0.5} />
                        <ImageCard {...strengths[5]} delay={0.6} />
                    </div>
                </div>

                {/* Bottom Wide Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="relative bg-[#f8fafc] rounded-[3.5rem] p-8 lg:p-12 overflow-hidden border border-gray-100"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                        {/* Image Side */}
                        <div
                            className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden group shadow-2xl aspect-video lg:aspect-auto lg:h-[450px] cursor-pointer"
                            data-cursor={isPlaying ? 'pause' : 'play'}
                            onClick={togglePlay}
                        >
                            <video
                                ref={videoRef}
                                src="/video-3.mp4"
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 text-white transition-all duration-500 hover:scale-110 active:scale-95 z-20 group/btn">
                                    {isPlaying ? (
                                        <Pause fill="white" size={36} />
                                    ) : (
                                        <Play fill="white" size={36} className="ml-1" />
                                    )}
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                                {strengths[6].hashtags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-lg rounded-lg text-white text-[10px] font-black tracking-wider uppercase">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:col-span-7 pl-0 lg:pl-10">
                            <h3 className="text-4xl md:text-6xl font-black font-syne text-[#1f406d] uppercase tracking-tighter leading-[0.9] mb-8">
                                <span className="text-[#e41e25]">Modern</span> Solutions. <br /> Qualitied Support.
                            </h3>
                            <p className="text-[#1f406d]/70 text-lg md:text-xl font-medium leading-relaxed mb-10">
                                {strengths[6].description}
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-4 px-10 py-5 bg-[#1f406d] text-white rounded-full shadow-2xl shadow-[#1f406d]/20 group transition-all"
                            >
                                <span className="font-black text-xs uppercase tracking-[0.2em]">Partner with Experts</span>
                                <div className="w-10 h-10 bg-[#e41e25] rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-45">
                                    <ArrowUpRight size={18} />
                                </div>
                            </motion.button>
                        </div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1f406d]/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e41e25]/5 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
}
