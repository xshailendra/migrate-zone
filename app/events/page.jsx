
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Video, Users } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock Data for Events
const eventsData = [
    {
        id: 1,
        category: 'Webinar',
        title: 'Australian Skilled Migration Seminar 2026',
        description: 'Join our comprehensive seminar on the latest updates to Australian skilled migration policies. Learn about point systems, state nominations, and crucial deadlines.',
        organizer: 'Migrate Zone Team',
        date: 'Wed, 18 March 2026',
        time: '7:00 PM - 9:00 PM EST',
        image: '/australia_country_1770386989728.png', // Using existing asset
        location: 'Online (Zoom)',
        price: 'Free',
        status: 'Upcoming'
    },
    {
        id: 2,
        category: 'Workshop',
        title: 'Canada Express Entry Masterclass',
        description: 'A deep dive into maximizing your CRS score. Our experts will guide you through profile creation, documentation, and strategies for receiving an ITA.',
        organizer: 'Canada Immigration Experts',
        date: 'Sat, 21 March 2026',
        time: '10:00 AM - 1:00 PM EST',
        image: '/canada_country_1770386989728.png', // Using existing asset
        location: 'Toronto Office / Online',
        price: '$50',
        status: 'Selling Fast'
    },
    {
        id: 3,
        category: 'Q&A Session',
        title: 'UK Global Talent Visa Live Q&A',
        description: 'Interactive session with our UK migration specialists. Get answers to your specific questions about the Global Talent route and endorsement bodies.',
        organizer: 'UK Legal Team',
        date: 'Fri, 27 March 2026',
        time: '4:00 PM - 5:30 PM GMT',
        image: '/uk_country_1770386989728.png', // Using existing asset (assumed available or placeholder)
        location: 'Online',
        price: 'Free',
        status: 'Open'
    },
    {
        id: 4,
        category: 'Seminar',
        title: 'USA EB-5 Investor Visa Symposium',
        description: 'Explore investment opportunities and the path to a Green Card through the EB-5 program. meet directly with regional center representatives.',
        organizer: 'US Investment Group',
        date: 'Mon, 15 April 2026',
        time: '9:00 AM - 5:00 PM EST',
        image: '/usa_country_1770386989728.png', // Using existing asset (assumed available or placeholder)
        location: 'New York / Hybrid',
        price: '$200',
        status: 'Limited Seats'
    },
    {
        id: 5,
        category: 'Webinar',
        title: 'New Zealand Skilled Migrant Category Updates',
        description: 'Understand the new 6-point system for New Zealand residency. Our licensed advisers explain the changes and how they affect your migration pathway.',
        organizer: 'NZ Migration Specialists',
        date: 'Thu, 23 April 2026',
        time: '6:00 PM - 7:30 PM NZST',
        image: '/australia_country_1770386989728.png', // Placeholder
        location: 'Online',
        price: 'Free',
        status: 'Upcoming'
    },
    {
        id: 6,
        category: 'Workshop',
        title: 'Germany Job Seeker Visa Workshop',
        description: 'Learn how to apply for the Opportunity Card (Chancenkarte). We cover eligibility, point calculation, and job search strategies in Germany.',
        organizer: 'Euro Careers Team',
        date: 'Tue, 28 April 2026',
        time: '2:00 PM - 5:00 PM CET',
        image: '/canada_country_1770386989728.png', // Placeholder
        location: 'Berlin / Online',
        price: '€30',
        status: 'Open'
    },
    {
        id: 7,
        category: 'Networking',
        title: 'Global Global Tech Talent Mixer',
        description: 'Connect with tech professionals who have successfully migrated. Share experiences, get tips on finding jobs abroad, and expand your professional network.',
        organizer: 'Tech Migrants Community',
        date: 'Fri, 1 May 2026',
        time: '6:00 PM - 9:00 PM EST',
        image: '/usa_country_1770386989728.png', // Placeholder
        location: 'San Francisco',
        price: 'Free',
        status: 'Upcoming'
    }
];

const categories = ['All Events', 'Upcoming Events', 'Past Events'];

export default function EventsPage() {
    const [activeTab, setActiveTab] = useState('All Events');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Filter events based on active tab
    const filteredEvents = eventsData.filter(event => {
        if (activeTab === 'All Events') return true;
        // Logic for other tabs can be added here
        return true;
    });

    const indexOfLastEvent = currentPage * itemsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

    return (
        <div className="bg-white">
            <Header />
            <main className="min-h-screen pt-32 pb-20 font-outfit">

                {/* Header Section */}
                <section className="container mx-auto px-4 mb-20 text-center">


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-[#1f406d] mb-8 tracking-tighter"
                    >
                        Grow Your Network & Skills <br /> <span className="text-[#e41e25]">with Our Events</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <span className="px-6 py-2 rounded-full bg-gray-100 text-[#1f406d] text-sm font-bold tracking-wide uppercase border border-gray-200">
                            Events
                        </span>
                    </motion.div>
                </section>

                {/* Filter Tabs */}
                <section className="container mx-auto px-4 mb-14">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat, index) => (
                            <motion.button
                                key={cat}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                onClick={() => setActiveTab(cat)}
                                className={`px-8 py-3 rounded-full text-[12px] font-extrabold uppercase tracking-widest transition-all duration-300 border
                ${activeTab === cat
                                        ? 'bg-[#1f406d] text-white border-[#1f406d]'
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-[#1f406d] hover:text-[#1f406d]'
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </section>

                {/* Events List */}
                <section className="container mx-auto px-4 max-w-6xl">
                    <div className="space-y-6">
                        {currentEvents.length > 0 ? (
                            currentEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-[24px] p-4 flex flex-col md:flex-row gap-6 md:gap-8 border border-gray-100 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300"
                                >
                                    {/* Image Section */}
                                    <div className="w-full md:w-[320px] h-[220px] md:h-auto flex-shrink-0 rounded-[20px] overflow-hidden relative">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold text-[#1f406d] uppercase tracking-wider border border-gray-100/50 shadow-sm">
                                            {event.category}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 py-3 flex flex-col justify-center">
                                        <div className="mb-6">
                                            <h3 className="text-3xl font-bold text-[#1f406d] mb-3 leading-tight group-hover:text-[#e41e25] transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 max-w-2xl">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 w-full max-w-2xl">
                                            <div>
                                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                                                    Organizer
                                                </span>
                                                <div className="font-semibold text-gray-800 text-sm">
                                                    {event.organizer}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                                                    Date & Time
                                                </span>
                                                <div className="font-semibold text-gray-800 text-sm">
                                                    {event.date} at {event.time}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Section */}
                                    <div className="flex flex-col justify-center items-end gap-6 py-3 pr-4 md:border-l md:border-gray-50 md:pl-8 min-w-[180px]">

                                        <div className="flex flex-col gap-4 w-full items-center md:items-end">
                                            <button className="w-full px-8 py-3.5 bg-[#1f406d] text-white text-[13px] font-bold rounded-full hover:bg-[#163055] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap">
                                                Buy a ticket
                                            </button>
                                            <Link href={`/events/${event.id}`} className="group/link">
                                                <span className="text-xs font-bold text-gray-500 hover:text-[#e41e25] transition-colors flex items-center justify-center gap-1 cursor-pointer">
                                                    See Details
                                                    {/* <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" /> */}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>

                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-20 text-gray-400">
                                No events found in this category.
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-16">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border
                                    ${currentPage === 1
                                        ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#e41e25] hover:text-[#e41e25] hover:shadow-lg'
                                    }`}
                            >
                                <ArrowRight className="w-4 h-4 rotate-180" />
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => setCurrentPage(number)}
                                        className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 border
                                            ${currentPage === number
                                                ? 'bg-[#e41e25] text-white border-[#e41e25] shadow-lg shadow-red-900/20'
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-[#e41e25] hover:text-[#e41e25]'
                                            }`}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border
                                    ${currentPage === totalPages
                                        ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#e41e25] hover:text-[#e41e25] hover:shadow-lg'
                                    }`}
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}
