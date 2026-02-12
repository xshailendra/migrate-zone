'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostDetail() {
    const params = useParams();
    const id = params.id;

    // In a real app, you'd fetch the post by ID. 
    // For now, we'll use a placeholder.

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <article className="pt-40 md:pt-48 pb-32">
                <div className="max-w-[1000px] mx-auto px-6">
                    {/* Back Link */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#1f406d]/40 hover:text-[#1f406d] font-bold text-sm uppercase tracking-widest mb-12 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Insights
                    </Link>

                    {/* Post Meta */}
                    <div className="flex items-center gap-6 mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#1f406d]/40">
                        <span className="px-3 py-1 bg-[#1f406d]/5 text-[#E42E25] rounded-full">Legal Insights</span>
                        <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            8 Min Read
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-[900] font-syne text-[#1f406d] tracking-tighter leading-[1.1] mb-12">
                        How to navigate the new 2026 immigration regulations.
                    </h1>

                    <div className="flex items-center justify-between py-10 border-y border-black/5 mb-16">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#1f406d] text-white rounded-full flex items-center justify-center font-black">RS</div>
                            <div>
                                <p className="text-sm font-black text-[#1f406d]">Rajesh Soni</p>
                                <p className="text-[10px] font-bold text-[#1f406d]/30 uppercase tracking-widest">Principal Consultant</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-3 bg-[#f8f9fb] rounded-full hover:bg-[#1f406d] hover:text-white transition-all text-[#1f406d]/40"><Share2 className="w-4 h-4" /></button>
                            <button className="p-3 bg-[#f8f9fb] rounded-full hover:bg-blue-600 hover:text-white transition-all text-[#1f406d]/40"><Facebook className="w-4 h-4" /></button>
                            <button className="p-3 bg-[#f8f9fb] rounded-full hover:bg-blue-400 hover:text-white transition-all text-[#1f406d]/40"><Twitter className="w-4 h-4" /></button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full aspect-video rounded-[3rem] overflow-hidden mb-20 shadow-2xl shadow-black/5">
                        <img
                            src="https://images.unsplash.com/photo-1573164067507-406183a7b721?q=80&w=2069&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Article Banner"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-xl max-w-none text-[#1f406d]/70 leading-relaxed font-medium">
                        <p className="text-2xl text-[#1f406d] font-bold mb-8 leading-normal italic">
                            Immigration policies are evolving faster than ever. As we enter the second quarter of 2026, several major changes are taking center stage in the global migration landscape.
                        </p>
                        <p className="mb-8">
                            Moving to a new country like Canada, Australia, or the UK is a significant undertaking that requires careful planning, deep research, and a clear understanding of legal requirements. While many applicants attempt the process on their own, the complexities can often lead to delays or rejections that could have been avoided.
                        </p>
                        <h2 className="text-3xl font-black font-syne text-[#1f406d] mt-16 mb-8 uppercase tracking-tight">The Complexity of Compliance</h2>
                        <p className="mb-8">
                            One of the most common reasons for visa rejection is incorrect documentation or failure to meet updated salary thresholds. In the UK, for instance, the skilled worker salary requirements were adjusted significantly last month to reflect the current economic climate. Without expert guidance, staying on top of these minute shifts is nearly impossible.
                        </p>
                        <div className="p-10 bg-[#f8f9fb] rounded-[30px] border-l-4 border-[#E42E25] my-16">
                            <p className="text-xl font-bold text-[#1f406d] tracking-tight m-0">
                                "The difference between an approved visa and a rejection often lies in the quality of the blueprint provided to the immigration officer. It's not just about filling forms; it's about telling a story of value and intent."
                            </p>
                        </div>
                        <p>
                            At Migrate Zone, we've successfully processed over 2,200 applications because we treat every case as a unique roadmap. Our team in Sydney, London, and Vadodara works around the clock to ensure your profile doesn't just meet the standards—it sets them.
                        </p>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
