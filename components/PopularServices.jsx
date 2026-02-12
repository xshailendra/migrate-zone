'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    MapPin,
    FileText,
    Ship,
    GraduationCap,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        id: 'skilled-regional',
        title: 'Skilled Regional (Provisional) Visa - 491',
        shortTitle: 'Skilled Regional Visa',
        description: 'This is a provisional visa. It is for skilled workers who want to live and work in regional Australia. You can apply for permanent residence after 3 years from the time your visa is granted.',
        icon: <MapPin size={48} />,
        link: '/services/skilled-regional-491',
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'ntdama-482',
        title: 'NTDAMA 482',
        shortTitle: 'NTDAMA 482',
        description: 'Northern Territory Designated Area Migration Agreement is for skilled workers wanting to work in the Northern territories of Australia.',
        icon: <FileText size={48} />,
        link: '/services/ntdama-482',
        image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'express-entry',
        title: 'Express Entry',
        shortTitle: 'Express Entry',
        description: "The Federal Skilled Worker Program is also recognized as the Federal Skilled Worker Class and it is Canada's leading immigration program for personnel, permitting the country to welcome tens of thousands of Immigrants every year based on their capability to become well-known in Canada's workforce.",
        icon: <Ship size={48} />,
        link: '/canada/skilled-worker/express-entry',
        image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'student-australia',
        title: 'Student Visa Australia',
        shortTitle: 'Student Australia',
        description: 'Australia is the third most popular country for abroad education. The reasons you should choose to study in Australia are its world-class education system, ethnic diversity, Migration friendly rules and prospect to expand the experience.',
        icon: <GraduationCap size={48} />,
        link: '/australia/student-visa',
        image: 'https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?q=80&w=1000&auto=format&fit=crop'
    },
    {
        id: 'student-canada',
        title: 'Student Visa Canada',
        shortTitle: 'Student Canada',
        description: 'Canada carries on to fascinate a stable capacity of students from India. While getting admission to Top Universities in Canada continues to necessitate an exceptional educational groove, the approval to study is authenticated through a Study Permit.',
        icon: <GraduationCap size={48} />,
        link: '/canada/student-visa',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop'
    }
];

const ServiceItem = ({ service, index, setActiveId }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveId(service.id);
        }
    }, [isInView, service.id, setActiveId]);

    return (
        <div
            id={service.id}
            ref={ref}
            className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center py-12 md:py-20 border-b border-gray-100 last:border-0"
        >
            <div className="flex items-start gap-8 mb-8">
                <div className="p-4 bg-gray-50 rounded-2xl text-[#e41e25]">
                    {service.icon}
                </div>
                <div>
                    <h3 className="text-3xl font-black text-[#1f406d] font-syne uppercase tracking-tighter mb-4">
                        {service.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-[#666666] max-w-xl">
                        {service.description}
                    </p>
                </div>
            </div>

            <div className="rounded-[40px] overflow-hidden aspect-[16/9] w-full bg-gray-100 group">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <a
                href={service.link}
                className="mt-10 flex items-center gap-3 text-sm font-black text-[#e41e25] uppercase tracking-widest hover:gap-5 transition-all w-fit"
            >
                <span>Full Service Details</span>
                <ArrowRight size={20} />
            </a>
        </div>
    );
};

export default function PopularServices() {
    const [activeId, setActiveId] = useState(services[0].id);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section className="bg-transparent w-full">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-5xl font-black text-[#1f406d] font-syne uppercase tracking-tighter">
                        POPULAR <span className="text-[#e41e25]">SERVICES</span>
                    </h2>
                    {/* <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="w-3 h-3 border-2 border-[#1f406d] rotate-45 relative after:content-[''] after:absolute after:inset-[2px] after:bg-[#e41e25]"></div>
                        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#e41e25] to-transparent"></div>
                    </div> */}
                </div>

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 space-y-4">
                            <div className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100 backdrop-blur-sm">
                                <span className="block text-xs font-black text-[#e41e25] uppercase tracking-[0.2em] mb-8">Navigation Menu</span>
                                <nav className="flex flex-col gap-2">
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => scrollToSection(service.id)}
                                            className={`group text-left p-5 rounded-2xl transition-all duration-300 relative overflow-hidden ${activeId === service.id
                                                ? 'bg-[#1f406d] text-white shadow-xl shadow-[#1f406d]/20 scale-[1.02]'
                                                : 'text-[#1f406d] hover:bg-gray-100'
                                                }`}
                                        >
                                            <div className="relative z-10 flex items-center justify-between">
                                                <span className={`text-base font-bold transition-colors ${activeId === service.id ? 'text-white' : 'text-[#666666] group-hover:text-[#1f406d]'
                                                    }`}>
                                                    {service.shortTitle}
                                                </span>
                                                {activeId === service.id && (
                                                    <motion.div layoutId="arrow">
                                                        <ArrowRight size={18} />
                                                    </motion.div>
                                                )}
                                            </div>
                                            {activeId === service.id && (
                                                <motion.div
                                                    layoutId="active-bg"
                                                    className="absolute inset-0 bg-[#1f406d] z-0"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </nav>

                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <p className="text-sm font-bold text-[#666666] leading-relaxed">
                                        Need help choosing the right visa? <br />
                                        <span className="text-[#e41e25] cursor-pointer hover:underline">Contact our experts</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Scrolling Content */}
                    <div className="lg:w-2/3">
                        {services.map((service, index) => (
                            <ServiceItem
                                key={service.id}
                                service={service}
                                index={index}
                                setActiveId={setActiveId}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
