'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award, HeartHandshake, SearchCheck, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        value: '25 Years',
        label: 'Experience',
        description: 'Unrivalled experience of the immigration system and its complex rules.',
        Icon: Award,
    },
    {
        value: '10k+',
        label: 'Satisfied Clients',
        description: 'We work tirelessly to help secure your visa approval.',
        Icon: HeartHandshake,
    },
    {
        value: 'Free',
        label: 'Assessment',
        description: 'We speak to all clients before agreeing to take on their application.',
        Icon: SearchCheck,
    },
];

export default function AboutSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo('.stat-card',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-container',
                    start: 'top 85%',
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                {/* Upper Split Layout */}
                <div className="flex flex-col lg:flex-row gap-16 mb-20 items-center">
                    {/* Left: Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1f406d] leading-tight">
                            Why Choose <span className="text-[#e41e25]">Migrate Zone</span>
                            <br />
                            Solicitors?
                        </h2>
                        <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
                            <p>
                                With over 25 years of experience in immigration law, our team of dedicated solicitors provides expert guidance through complex immigration processes. We pride ourselves on our client-focused approach, ensuring personalized solutions for every case.
                            </p>
                            <p>
                                Our nationwide service covers all aspects of immigration law, from family visas to business immigration and appeals. We maintain a high success rate by staying current with the latest immigration rules and policies.
                            </p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1f406d] text-white rounded-xl font-bold shadow-lg shadow-[#1f406d]/20"
                        >
                            Read More About Us
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Right: Visual */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-50 aspect-[4/3] group shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
                                style={{ backgroundImage: "url('/professional_solicitor_team.png')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1f406d]/40 to-transparent" />
                            <div className="absolute top-8 right-8 z-10">
                                <ShieldCheck className="w-16 h-16 text-white/40 drop-shadow-2xl" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Stats Container */}
                <div className="stats-container grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card bg-[#f8fafc] rounded-3xl p-10 flex flex-col items-center text-center hover:bg-white hover:shadow-2xl hover:shadow-[#1f406d]/5 transition-all duration-500 group border border-transparent hover:border-gray-100"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-[#1f406d] group-hover:bg-[#1f406d] group-hover:text-white transition-all duration-300">
                                <stat.Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-black text-[#1f406d] mb-2 tracking-tighter">
                                {stat.value}
                            </h3>
                            <h4 className="text-[12px] uppercase tracking-[0.2em] font-black text-gray-400 mb-4">{stat.label}</h4>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
