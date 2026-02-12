'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Twitter as XIcon } from 'lucide-react';

// Real-time office status hook
function useOfficeStatus() {
    const [statuses, setStatuses] = useState({ india: false, australia: false });

    useEffect(() => {
        function checkStatus() {
            const now = new Date();

            // India (IST = UTC+5:30)
            const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
            const indiaDay = indiaTime.getDay(); // 0=Sun
            const indiaHour = indiaTime.getHours();
            const indiaMin = indiaTime.getMinutes();
            const indiaDecimal = indiaHour + indiaMin / 60;
            // Mon(1)-Sat(6), 10:00-19:00
            const indiaOpen = indiaDay >= 1 && indiaDay <= 6 && indiaDecimal >= 10 && indiaDecimal < 19;

            // Australia (AEST = UTC+10/11)
            const ausTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }));
            const ausDay = ausTime.getDay();
            const ausHour = ausTime.getHours();
            const ausMin = ausTime.getMinutes();
            const ausDecimal = ausHour + ausMin / 60;
            // Mon(1)-Fri(5), 10:00-17:00
            const ausOpen = ausDay >= 1 && ausDay <= 5 && ausDecimal >= 10 && ausDecimal < 17;

            setStatuses({ india: indiaOpen, australia: ausOpen });
        }

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // update every minute
        return () => clearInterval(interval);
    }, []);

    return statuses;
}

const usefulLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Australia Visa', href: '#' },
    { label: 'Canada Visa', href: '#' },
    { label: 'New Zealand Visa', href: '#' },
    { label: 'USA Visa', href: '#' },
    { label: 'UK Visa', href: '#' },
    { label: 'Europe Visa', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Career', href: 'https://evolgroups.com/mz/career/', target: '_blank' },
    { label: 'Testimonial', href: '#' },
    { label: 'Privacy Policy', href: '#' },
];

const officeLocations = [
    {
        city: "Vadodara Office (HO)",
        address: "328, 3rd Floor, Atlantis k-10 Tower B, Sarabhai Main Road, Vadodara, Gujarat 390007",
        phone: "+91 70696 29625",
        email: "info@migratezone.com"
    },
    {
        city: "Ahmedabad Office",
        address: "508-509, Shivalik Shilp. Iskcon Cross Road, Sanidhya, Ahmedabad, Gujarat 380015",
        phone: "+91 81289 42081",
        email: "info@migratezone.com"
    },
    {
        city: "Sydney Office",
        address: "Level 12, 141 Walker Street, North Sydney NSW 2060, Australia",
        phones: ["+61 2 8099 6026", "+61 2 8011 0767"],
        email: "info@migratezone.com"
    },
    {
        city: "Melbourne Office",
        address: "Level 21, 459 Collins Street, Melbourne, VIC, Australia",
        phones: ["+61 3 9005 1920", "+61 3 8630 2826", "+61 3 8630 2950", "+61 3 8630 2800"],
        email: "info@migratezone.com"
    }
];

export default function Footer() {
    const officeStatus = useOfficeStatus();

    return (
        <footer className="relative bg-transparent pt-24 pb-12 overflow-hidden border-t border-gray-100 min-h-[1000px]">
            {/* Sidebar Socials & Logo */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 py-12 flex flex-col items-center justify-between border-r border-gray-100 w-12 md:w-20 z-20 pointer-events-none md:pointer-events-auto">


                {/* Vertical Branded Text filling the empty space - Hidden on Mobile */}
                <div className="flex-1 hidden md:flex items-center justify-center overflow-hidden w-full">
                    <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-12 uppercase font-black tracking-[0.8em] text-2xl md:text-4xl select-none opacity-10 hover:opacity-30 transition-all duration-1000 cursor-default">
                        <div className="w-15 h-15 rounded-lg flex items-center justify-center font-black text-xs">
                            <img src="/logos/footer-left.png" alt="" className="rotate-180" />
                        </div>
                        <span className="text-[#1f406d]">MIGRATE</span>
                        <span className="text-[#e41e25]">ZONE</span>
                    </div>
                </div>

                <div className="hidden md:flex flex-col items-center gap-6">
                    {[XIcon, Instagram, Facebook].map((Icon, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ scale: 1.2, color: '#1f406d' }}
                            className="text-gray-400 p-2 pointer-events-auto"
                        >
                            <Icon size={20} />
                        </motion.a>
                    ))}
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:pl-40 md:pr-12 relative z-10">

                {/* Top Section: Logo, CTA & Description - Centered */}
                <div className="flex flex-col items-center text-center gap-12 mb-32">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-1 px-4 rounded-full bg-[#1f406d]/5 text-[#1f406d] text-[10px] font-black uppercase tracking-widest inline-block mb-8"
                        >
                            Since 1998
                        </motion.div>
                        <h2 className="text-3xl md:text-6xl font-black font-syne text-[#1f406d] uppercase leading-[0.9] tracking-tighter mb-8 mx-auto px-4">
                            Our space to <span className="text-[#e41e25]">migrate</span>, feel, and <span className="text-[#e41e25]">succeed</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto px-4">
                            Migrate Zone has been in the field of leading visa immigration consultants since 1998
                            thereby providing both Australian as well Canadian Immigration Services for last 23 years.
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-24 md:mb-40">

                    {/* Useful Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#1f406d] text-xs font-black uppercase tracking-[0.2em] mb-8 md:mb-10">Useful Links</h4>
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-y-4">
                            {usefulLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    whileHover={{ x: 10, color: '#e41e25' }}
                                    className="text-gray-400 text-xs md:text-sm font-bold tracking-tight hover:text-[#e41e25] transition-colors"
                                    {...(link.target ? { target: link.target, rel: 'noopener noreferrer' } : {})}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-2 mb-8 md:mb-10">
                            <div className="w-8 h-[1px] bg-[#e41e25]" />
                            <h4 className="text-[#1f406d] text-[10px] font-black uppercase tracking-[0.2em]">Opening Hours</h4>
                        </div>
                        <div className="space-y-10 md:space-y-12">
                            {/* India Office */}
                            <div className="relative pl-6 border-l border-gray-100 group">
                                <div className={`absolute top-0 left-[-4px] w-2 h-2 rounded-full group-hover:scale-150 transition-transform ${officeStatus.india ? 'bg-green-500' : 'bg-[#e41e25]'}`} />
                                <div className="flex items-center gap-2 mb-3">
                                    <h5 className="text-[11px] font-black text-[#1f406d] uppercase tracking-widest">India (Head Office)</h5>
                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${officeStatus.india ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${officeStatus.india ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`} />
                                        {officeStatus.india ? 'Open' : 'Closed'}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex flex-col">
                                        <span className="text-gray-400 text-[10px] uppercase font-black tracking-tighter mb-1">Mon - Sat</span>
                                        <span className="text-[#1f406d] font-bold text-sm">10.00 am - 7.00 pm</span>
                                    </div>

                                </div>
                            </div>

                            {/* Australia Hub */}
                            <div className="relative pl-6 border-l border-gray-100 group">
                                <div className={`absolute top-0 left-[-4px] w-2 h-2 rounded-full group-hover:scale-150 transition-transform ${officeStatus.australia ? 'bg-green-500' : 'bg-[#1f406d]'}`} />
                                <div className="flex items-center gap-2 mb-3">
                                    <h5 className="text-[11px] font-black text-[#1f406d] uppercase tracking-widest">Australia Hub</h5>
                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${officeStatus.australia ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${officeStatus.australia ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`} />
                                        {officeStatus.australia ? 'Open' : 'Closed'}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex flex-col">
                                        <span className="text-gray-400 text-[10px] uppercase font-black tracking-tighter mb-1">Mon - Fri</span>
                                        <span className="text-[#1f406d] font-bold text-sm">10.00 am - 5.00 pm</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office Locations */}
                    <div className="lg:col-span-6">
                        <div className="flex items-center gap-2 mb-8 md:mb-10">
                            <div className="w-8 h-[1px] bg-[#e41e25]" />
                            <h4 className="text-[#1f406d] text-[10px] font-black uppercase tracking-[0.2em]">Global Presence</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
                            {officeLocations.map((office, i) => (
                                <div key={i} className="group relative">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-50 rounded-2xl -z-10 group-hover:bg-[#e41e25]/5 transition-colors" />
                                    <h5 className="text-[13px] font-black text-[#1f406d] uppercase tracking-tighter mb-4 flex items-center gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center bg-[#1f406d] text-white text-[8px] rounded-lg">0{i + 1}</span>
                                        {office.city}
                                    </h5>
                                    <p className="text-gray-400 text-[12px] md:text-[13px] font-medium leading-relaxed mb-4 md:mb-6 group-hover:text-gray-600 transition-colors pl-9 border-l-2 border-transparent group-hover:border-[#e41e25]/20">
                                        {office.address}
                                    </p>
                                    <div className="space-y-3 pl-9">
                                        {office.phone && (
                                            <a href={`tel:${office.phone}`} className="flex items-center gap-3 text-[11px] md:text-[12px] font-bold text-[#1f406d] hover:text-[#e41e25] transition-all">
                                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#e41e25] group-hover:text-white transition-all">
                                                    <Phone size={10} className="md:w-3 md:h-3" />
                                                </div>
                                                {office.phone}
                                            </a>
                                        )}
                                        {office.phones && office.phones.map((p, j) => (
                                            <a key={j} href={`tel:${p}`} className="flex items-center gap-3 text-[11px] md:text-[12px] font-bold text-[#1f406d] hover:text-[#e41e25] transition-all">
                                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#e41e25] group-hover:text-white transition-all">
                                                    <Phone size={10} className="md:w-3 md:h-3" />
                                                </div>
                                                {p}
                                            </a>
                                        ))}
                                        <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-[11px] md:text-[12px] font-bold text-[#1f406d] hover:text-[#e41e25] transition-all">
                                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#e41e25] group-hover:text-white transition-all">
                                                <Mail size={10} className="md:w-3 md:h-3" />
                                            </div>
                                            {office.email}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Links */}
                <div className="relative pt-8 md:pt-12 border-t border-gray-100 mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 z-20">
                    <p className="text-gray-300 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center">
                        © 2026 Migrate Zone. Built for global success.
                    </p>
                    <div className="flex gap-6 md:gap-8">
                        <a href="#" className="text-gray-300 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:text-[#1f406d] transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-300 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:text-[#1f406d] transition-colors">Terms of Use</a>
                    </div>
                </div>

            </div>

            {/* Massive Watermark Text */}
            <div className="relative pointer-events-none opacity-[0.2] select-none text-center text-[15vw] md:text-[12vw] font-[900] font-syne uppercase leading-none tracking-tighter mt-12 md:mt-20 z-0">
                <span className="text-[#1f406d]">MIGRATE</span>
                <span className="text-[#e41e25]">ZONE</span>
            </div>
        </footer>
    );
}
