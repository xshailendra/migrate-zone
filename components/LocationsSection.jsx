'use client';

import React from 'react';
import { motion } from 'framer-motion';

const locations = [
    {
        title: "Vadodara Office",
        subtitle: "Atlantis K-10 Tower B, Sarabhai Main Road",
        image: "/migzone.webp",
        x: "67%",
        y: "53%",
        delay: 0.1,
        tooltipDirection: "down",
        mapUrl: "https://www.google.com/maps/search/Atlantis+K-10+Vadodara"
    },
    {
        title: "Ahmedabad Office",
        subtitle: "508-509, Shivalik Shilp. Iskcon Cross Road, Sanidhya",
        image: "/mig-zone-ahm.webp",
        x: "67%",
        y: "51%",
        delay: 0.2,
        tooltipDirection: "up",
        mapUrl: "https://www.google.com/maps/search/Ahmedabad+Business+Hub"
    },
    {
        title: "Sydney Office",
        subtitle: "Level 12, 141 Walker Street, North Sydney NSW 2060",
        image: "/sydney_office_gateway_1770547680868.png",
        x: "88%",
        y: "77%",
        delay: 0.3,
        tooltipDirection: "up",
        mapUrl: "https://www.google.com/maps/search/Sydney+Business+District"
    },
    {
        title: "Melbourne Office",
        subtitle: "Level 21, 459 Collins Street,Melbourne",
        image: "/melbourne_office_innovation_1770547696568.png",
        x: "86%",
        y: "83%",
        delay: 0.4,
        tooltipDirection: "down",
        mapUrl: "https://www.google.com/maps/search/Southbank+Melbourne+Tech"
    }
];

const LocationMarker = ({ location }) => {
    const isUp = location.tooltipDirection === "up";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: location.delay }}
            className="absolute z-30 group"
            style={{ left: location.x, top: location.y }}
        >
            <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
            >
                {/* Pulse Animation Pinpoint */}
                <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    <div className="absolute w-8 h-8 bg-[#e41e25]/20 rounded-full animate-ping" />
                    <div className="absolute w-12 h-12 bg-[#e41e25]/10 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-3 h-3 bg-[#e41e25] rounded-full border-2 border-white shadow-lg z-10" />
                </div>

                {/* Tooltip - Always Visible on Hover/Active */}
                <div className={`absolute left-1/2 -translate-x-1/2 opacity-100 pointer-events-auto transition-all duration-300 z-40
                    ${isUp ? 'bottom-full mb-4' : 'top-full mt-4'}`}>
                    <div className="relative w-48 bg-white rounded-xl shadow-[0_20px_50px_rgba(31,64,109,0.15)] p-2 border border-gray-100">
                        <div className="w-full h-20 rounded-lg overflow-hidden mb-2">
                            <img
                                src={location.image}
                                alt={location.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="px-1 text-left">
                            <h4 className="text-[12px] font-black text-[#1f406d] leading-tight truncate">
                                {location.title}
                            </h4>
                            <p className="text-[10px] text-gray-400 font-bold truncate">
                                {location.subtitle}
                            </p>
                        </div>
                        {/* Indicators Pointing correctly (up or down) */}
                        <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-gray-100 rotate-45
                            ${isUp ? '-bottom-1.5 border-r border-b' : '-top-1.5 border-l border-t'}`} />
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default function LocationsSection() {
    return (
        <section data-cursor="location" className="relative py-24 bg-transparent overflow-hidden min-h-[950px]">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="text-center mb-16 relative z-40">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-black font-syne text-[#1f406d] tracking-tighter uppercase mb-4"
                    >
                        Explore By <span className="text-[#e41e25]">Location</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg md:text-xl font-medium tracking-tight"
                    >
                        Our global presence across India, Australia, and our strategic global hubs.
                    </motion.p>
                </div>

                <div className="relative w-full h-[600px] md:h-[750px] flex items-center justify-center">

                    <div className="absolute inset-0 scale-100 pointer-events-none flex items-center justify-center overflow-hidden">
                        {/* The Dotted World Map Background from User Reference */}
                        <img
                            src="/world-map.jpg"
                            alt="World Map"
                            className="w-full h-full object-contain opacity-40 grayscale-[0.5]"
                        />
                    </div>

                    {locations.map((loc, i) => (
                        <LocationMarker key={i} location={loc} />
                    ))}

                    {/* Depth Decorative Blurs */}
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#1f406d]/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gray-100/10 blur-[100px] rounded-full pointer-events-none" />
                </div>

            </div>
        </section>
    );
}
