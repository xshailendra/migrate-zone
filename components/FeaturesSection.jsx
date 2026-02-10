'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scale, Globe, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: 'Specialist Legal Experts',
        description: 'Our team consists exclusively of fully qualified immigration solicitors, regulated by the SRA, bringing years of specialist knowledge to even the most complex cases. We handle every application with meticulous care and up-to-date legal insight.',
        icon: Scale,
    },
    {
        title: 'Nationwide & Global Support',
        description: 'Wherever you are in the UK—or overseas—our solicitors are ready to help. We deliver seamless remote services, ensuring you get expert advice without the need for in-person appointments, saving you time and hassle.',
        icon: Globe,
    },
    {
        title: 'Transparent & Trusted',
        description: 'We believe in complete transparency. You\'ll receive clear, fixed-fee quotes and honest advice from the outset—no hidden costs, no surprises. Our reputation is built on trust, integrity, and client success stories.',
        icon: ShieldCheck,
    },
    {
        title: 'Fast, Efficient Service',
        description: 'Time is often critical in immigration matters. We prioritise prompt action and efficient case handling, offering same-day services where possible to help you move forward without delay.',
        icon: Zap,
    },
];

export default function FeaturesSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(sectionRef.current.querySelectorAll('.feature-card'),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1f406d] mb-6"
                    >
                        Why Choose Migrate Zone Solicitors?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg leading-relaxed"
                    >
                        Navigating UK immigration law can be complex and stressful — but it doesn't have to be. At Migrate Zone Solicitors, we combine legal expertise, nationwide reach, and a commitment to exceptional service to help you achieve your immigration goals with confidence. Discover what makes us the trusted choice for individuals, families, and businesses across the UK and beyond.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card group bg-[#f8fafc] rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl hover:shadow-[#1f406d]/5 transition-all duration-500 border border-transparent hover:border-gray-100"
                        >
                            <div className="flex flex-col sm:flex-row gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-white text-[#1f406d] rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#1f406d] group-hover:text-white transition-all duration-500 border border-gray-100 group-hover:border-transparent">
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-[#1f406d] mb-4 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed font-semibold text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
