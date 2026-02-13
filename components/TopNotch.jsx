'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const TopNotch = () => {
    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-[60] pointer-events-none px-4">
            <motion.div
                initial={{ y: -60, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: 1.4
                }}
                className="pointer-events-auto relative bg-[#e41e25] text-white flex items-center justify-between 
                           w-fit min-w-[320px] md:min-w-[700px] h-7 md:h-9 px-10 md:px-16 shadow-[0_15px_40px_rgba(228,30,37,0.2)]
                           rounded-b-[20px] md:rounded-b-[28px] overflow-hidden border-x border-b border-white/20"
            >
                {/* Background Decor */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-none" />

                {/* Left Side: Hiring & Hours */}
                <div className="flex items-center gap-4 md:gap-8 z-10">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                        </span>
                        <span className="text-[11px] md:text-[12px] font-black tracking-[0.1em] uppercase transition-all whitespace-nowrap">
                            We are Hiring!
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-2 text-[11px] md:text-[12px] font-bold text-white/90">
                        <Clock className="w-3 h-3 text-white/70" />
                        <span className="tracking-wide">
                            Opening Hours(India): Mon - Sat : 10.00 am - 7.00 pm, Sun Closed
                        </span>
                    </div>
                </div>

                {/* Right Side: Social & Quick Links */}
                <div className="flex items-center gap-4 md:gap-8 z-10">
                    {/* Social Icons */}
                    <div className="hidden sm:flex items-center gap-3.5">
                        <SocialIcon Icon={Facebook} href="#" />
                        <SocialIcon Icon={Twitter} href="#" />
                        <SocialIcon Icon={Instagram} href="#" />
                        <SocialIcon Icon={Linkedin} href="#" />
                        <SocialIcon Icon={Youtube} href="#" />
                    </div>

                    <div className="hidden md:block h-3 w-[1px] bg-white/20" />

                    {/* Navigation */}
                    <div className="flex items-center gap-4 md:gap-6 text-[11px] md:text-[12px] font-semibold tracking-[0.1em] uppercase">
                        <NavLink href="/testimonials">Testimonial</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                        <NavLink href="/contact">Contact Us</NavLink>
                    </div>
                </div>

                {/* Aesthetic bottom border */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.div>
        </div>
    );
};

const SocialIcon = ({ Icon, href }) => (
    <Link
        href={href}
        className="text-white/80 hover:text-white hover:scale-125 transition-all duration-300"
    >
        <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
    </Link>
);

const NavLink = ({ href, children }) => (
    <Link
        href={href}
        className="hover:text-white/70 transition-colors relative group whitespace-nowrap"
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
);

export default TopNotch;
