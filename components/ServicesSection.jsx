'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Plus, MapPin, Building2, Users, GraduationCap, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const categories = [
    { id: 'business', label: 'Business Visa' },
    { id: 'family', label: 'Family Visa' },
    { id: 'student', label: 'Student Visa' },
    { id: 'citizenship', label: 'British Citizenship' },
];

const services = [
    {
        id: 1,
        category: 'family',
        title: 'Family Visas',
        description: 'Spouse, fiancé(e), children and dependent relative visa applications.',
        Icon: Users,
        location: 'UK',
        image: '/happy_family_uk.png',
    },
    {
        id: 2,
        category: 'business',
        title: 'UK Settlement',
        description: 'Guided support for Indefinite Leave to Remain and permanent residency.',
        Icon: Building2,
        location: 'London, UK',
        image: '/professional_solicitor_team.png',
    },
    {
        id: 3,
        category: 'student',
        title: 'Student Visas',
        description: 'Expert admission and visa support for top UK universities.',
        Icon: GraduationCap,
        location: 'Oxford, UK',
        image: '/student_uk_campus.png',
    },
    {
        id: 4,
        category: 'business',
        title: 'Appeals & Reviews',
        description: 'Challenging visa rejections with strategic legal expertise.',
        Icon: Scale,
        location: 'UK Court',
        image: '/uk_immigration_hero_1_1770198780029.png',
    },
];

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState('business');
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo('.service-image-card',
            { opacity: 0, scale: 0.9, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[#1f406d] mb-6"
                    >
                        Our Immigration Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg leading-relaxed"
                    >
                        Migrate Zone is a UK focused immigration consultancy offering consultancy services across a broad range of visas.
                        Whether you're an employer looking for overseas workers or an individual looking to bring a family member to the UK, we can help.
                    </motion.p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${activeTab === cat.id
                                ? 'bg-[#1f406d] text-white border-[#1f406d] shadow-lg shadow-[#1f406d]/20'
                                : 'bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <AnimatePresence mode="wait">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="service-image-card group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl"
                            >
                                {/* Image Layer */}
                                <div className="absolute inset-0 bg-gray-50 overflow-hidden">
                                    {service.image ? (
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                    ) : (
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1f406d]/5 transform group-hover:scale-110 transition-transform duration-700">
                                            <service.Icon className="w-64 h-64" weight="thin" />
                                        </div>
                                    )}
                                    <div className="absolute top-12 left-12 z-20">
                                        <service.Icon className="w-12 h-12 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity z-10" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <h3 className="text-2xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-white/80 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e41e25]">
                                        <MapPin className="w-3 h-3" />
                                        {service.location}
                                    </div>
                                </div>

                                {/* Floating Action Button */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1f406d] shadow-lg">
                                        <ArrowRight className="w-5 h-5 -rotate-45" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-[#1f406d] text-white rounded-xl font-bold shadow-lg shadow-[#1f406d]/20 flex items-center gap-3 mx-auto"
                    >
                        View All Categories
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
