'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ChevronLeft,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CATEGORIES = [
    "All", "Visa News", "Guides", "Success Stories", "Lifestyle", "Business", "Tech"
];

const BLOG_POSTS = [
    {
        id: 1,
        title: "Enhancing Advertising Analytics for Festival Stands",
        description: "How targeted data strategies are revolutionizing temporary resident engagement.",
        category: "Visa News",
        tags: ["Data", "Analytics", "Growth"],
        image: "https://images.unsplash.com/photo-1573164067507-406183a7b721?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Revolutionizing Reusable Containers in the Restaurant Industry",
        description: "Sustainability meets global migration in this deep dive into green practices.",
        category: "Lifestyle",
        tags: ["Sustainability", "Eco", "Future"],
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Bluetooth Low-Energy (BLE) Beacons for Offline Marketing",
        description: "Bridging the gap between digital identity and physical relocation experiences.",
        category: "Tech",
        tags: ["Marketing", "Tech", "Innovation"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "The Future of Digital Nomad Visas in 2026",
        description: "What the next decade of remote work looks like for global professionals.",
        category: "Visa News",
        tags: ["Remote Work", "Policy", "2026"],
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Settling into the UK: A Comprehensive Guide",
        description: "Everything you need to know from NI numbers to finding the best Sunday roast.",
        category: "Guides",
        tags: ["UK", "Settling", "Essentials"],
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "How Small Businesses Can Leverage Global Talent",
        description: "Scaling your local business by tapping into the worldwide professional pool.",
        category: "Business",
        tags: ["Hiring", "Talent", "Scale"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Express Entry Shifts: What You Need to Know",
        description: "Navigating the latest score adjustments and invitation rounds in Canada.",
        category: "Visa News",
        tags: ["Canada", "PR", "Express Entry"],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "The Art of Cross-Cultural Leadership",
        description: "Leading diverse teams in a rapidly globalizing professional landscape.",
        category: "Business",
        tags: ["Leadership", "Culture", "Management"],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "Mastering the Global Talent Stream",
        description: "A specialized look at fast-track pathways for tech innovators.",
        category: "Tech",
        tags: ["GTS", "Tech Visa", "Innovation"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 10,
        title: "Sustainability in Urban Migration",
        description: "How new cities are designing infrastructure for the 21st-century migrant.",
        category: "Lifestyle",
        tags: ["Urban", "Green", "Migration"],
        image: "https://images.unsplash.com/photo-1449156001934-02018e89274c?q=80&w=2070&auto=format&fit=crop"
    }
];

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter Logic
    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter(post => {
            const matchesCategory = activeCategory === "All" || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section — Browserbite Style */}
            <section className="pt-40 md:pt-48 pb-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl lg:text-[5.5rem] font-[700] text-[#1f406d] leading-[1.05] tracking-tight mb-4"
                            >
                                We build insights <span className="text-[#E42E25]">that help</span> <br className="hidden md:block" /> you meet your goals<span className="text-[#E42E25]">.</span>
                            </motion.h1>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full max-w-sm">
                            <input
                                type="text"
                                placeholder="Search the case"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full bg-[#f8f9fb] border-none py-4 px-6 rounded-full text-sm font-medium focus:ring-2 focus:ring-[#1f406d]/10 transition-all placeholder:text-gray-400"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1f406d] text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#E42E25] transition-colors">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Category Filter — Browserbite Style */}
                    <div className="flex items-center gap-8 border-b border-gray-100 overflow-x-auto no-scrollbar pb-0">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setCurrentPage(1);
                                }}
                                className={`whitespace-nowrap pb-4 text-sm font-bold transition-all relative ${activeCategory === cat ? 'text-[#1f406d]' : 'text-gray-400 hover:text-[#1f406d]'
                                    }`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="tabUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1f406d]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="pb-32 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {paginatedPosts.map((post, i) => (
                                <motion.div
                                    layout
                                    key={post.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                                >
                                    <Link href={`/blog/${post.id}`} className="flex flex-col h-full">
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                        </div>
                                        <div className="p-8 flex flex-col flex-1">
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                                {post.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-[#1f406d] leading-tight tracking-tight mb-8 group-hover:text-[#E42E25] transition-colors">
                                                {post.title}
                                            </h3>

                                            <div className="mt-auto flex flex-wrap gap-2">
                                                {post.tags.map(tag => (
                                                    <span key={tag} className="px-4 py-1.5 bg-[#f8f9fb] text-[10px] font-bold text-gray-500 rounded-lg group-hover:bg-gray-100 transition-colors">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-40 bg-[#f8f9fb] rounded-[3rem]">
                            <p className="text-gray-400 font-bold italic">No stories match your search criteria.</p>
                        </div>
                    )}

                    {/* Pagination — Browserbite Style */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex items-center justify-center gap-4">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#1f406d] disabled:opacity-30 hover:bg-[#1f406d] hover:text-white transition-all shadow-sm"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={`w-12 h-12 rounded-full font-bold text-sm transition-all ${currentPage === i + 1
                                            ? 'bg-[#1f406d] text-white shadow-lg shadow-[#1f406d]/20'
                                            : 'text-[#1f406d]/40 hover:text-[#1f406d] hover:bg-gray-50'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#1f406d] disabled:opacity-30 hover:bg-[#1f406d] hover:text-white transition-all shadow-sm"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
