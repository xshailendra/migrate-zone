'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MapPin, Quote, ExternalLink, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── REVIEWS DATA ───
const reviews = [
    {
        name: "Jeet Patel",
        time: "2 years ago",
        text: "It's great to hear that you've had a positive experience with Migrate Zone consultancy in Vadodara. Good communication and a helpful team step to step guidance can make a big difference when seeking consultancy services.",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Yug Jaa",
        time: "2 years ago",
        text: "But it's not just their expertise that sets them apart; it's their commitment to their clients. They genuinely care about your success and are always available to address your concerns and answer your questions.",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Rahul Jadhav",
        time: "2 years ago",
        text: "I had an amazing experience with this company I am so pleased working with this company Seniors guide us in every situation it is a very nice experience…",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Kajal Thakor",
        time: "2 years ago",
        text: "Firstly, I am thankful to this Migrate zone. Special thanks to Sagar Sir and Renuka Mam for guiding me in a better way. They are very humble and helpful to me. Supportive staff and good working flexibility",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Jack Gohil",
        time: "2 years ago",
        text: "I have visited many consultancies but when I visited the migrate zone .. their staff was very friendly as well as the way of work was excellent .. I highly recommend to all the people who will go abroad they will visit the migrate zone and put their file for a better lifestyle in abroad",
        office: "Ahmedabad",
        rating: 5
    },
    {
        name: "Narendra Patel",
        time: "2 years ago",
        text: "Choosing Migrate Zone was a brilliant move! Snagged my visitor visa super quickly, and the Migrate Zone crew really came through. And guess what? Now I have my work permit for Australia. Super cool",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Kalyan Parmar",
        time: "2 years ago",
        text: "I got the details information and guidance from the team. Their service is efficient and they address all my concerns quickly. Their clear communication was a major plus. Highly recommended.",
        office: "Ahmedabad",
        rating: 5
    },
    {
        name: "Kalyan Parmar",
        time: "2 years ago",
        text: "I got the details information and guidance from the team. Their service is efficient and they address all my concerns quickly. Their clear communication was a major plus. Highly recommended.",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Bhumi Raulji",
        time: "2 years ago",
        text: "Last 4 years I'm trying to my visa from many consultancies but I always disappointed but finally I went to Migrate Zone and I successfully got my UK work. Visa. Thank You So Much Migrate Zone and their team for supporting me.",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Khushali Pathak",
        time: "3 years ago",
        text: "I want to thank Migrate Zone for helping me to get PR visa. Many agency told not possible on my profile but Migrate Zone make that happen. What ever the profile they are ready to help you with transparent process. Thank you migrate zone.",
        office: "Vadodara",
        rating: 5
    },
    {
        name: "Darshan Limbani",
        time: "3 years ago",
        text: "Migrate Zone provides one of the best skill or work visa counselling...their team is very helpful and always active to respond...Especially Renuka mam is highly efficient, insightful and provided really good guidance whenever obstacles presented themselves along the way.",
        office: "Ahmedabad",
        rating: 5
    },
];

const officeRatings = [
    { city: "Vadodara", rating: 4.4, icon: "/vadodara_office_hq_1770547647711.png" },
    { city: "Ahmedabad", rating: 4.0, icon: "/ahmedabad_office_hub_1770547666255.png" }
];

const RatingStars = ({ rating = 5, size = 16 }) => {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={size}
                    className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
                />
            ))}
        </div>
    );
};

// ─── UI COMPONENTS ───
const ReviewCard = ({ review, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.6,
                delay: index * 0.05,
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 90%",
                }
            }
        );
    }, [index]);

    return (
        <div
            ref={cardRef}
            className="group relative bg-white p-7 rounded-[28px] border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-5px_rgba(31,64,109,0.12)] transition-all duration-500 overflow-hidden"
        >
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white bg-gradient-to-br from-[#1f406d] to-[#e41e25]">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-[#1a1a1a]">{review.name}</h4>
                            <p className="text-xs text-slate-400">{review.time}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <RatingStars rating={review.rating} size={14} />
                        <span className="text-[10px] font-bold text-[#4285F4]">Google</span>
                    </div>
                </div>

                <p className="text-slate-600 text-sm leading-[1.7] italic">
                    &quot;{review.text}&quot;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100/50">
                        <MapPin size={10} className="text-[#e41e25]" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Review for {review.office} Office</span>
                    </div>
                    <Quote size={20} className="text-slate-100 group-hover:text-[#e41e25]/10 transition-colors duration-500" />
                </div>
            </div>

            {/* Hover decorative line */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#e41e25] to-[#1f406d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
    );
};

const TestimonialsPage = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(heroRef.current.querySelector('h1'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
            .fromTo(heroRef.current.querySelector('.hero-rating'), { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6 }, "-=0.4")
            .fromTo(heroRef.current.querySelectorAll('.rating-stat'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, "-=0.2");

        // Parallax background
        gsap.to(".testi-watermark", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }, []);

    return (
        <main className="relative min-h-screen bg-white font-outfit overflow-hidden">
            <Header />

            {/* ─── BREADCRUMB / SUB-NAV ─── */}
            <div className="max-w-7xl mx-auto px-6 pt-32">
                <nav className="flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">
                    <a href="/testimonial" className="text-[#e41e25] hover:text-[#1f406d] transition-colors">Testimonial</a>
                    <span className="text-slate-200">|</span>
                    <a href="/about" className="hover:text-[#1f406d] transition-colors">About Us</a>
                    <span className="text-slate-200">|</span>
                    <a href="/contact" className="hover:text-[#1f406d] transition-colors">Contact Us</a>
                </nav>
            </div>

            {/* ─── HERO SECTION ─── */}
            <section ref={heroRef} className="relative pt-10 pb-20">
                <div className="testi-watermark absolute right-0 top-0 text-[18rem] font-bold text-slate-100 leading-none select-none -z-10 tracking-tighter translate-x-1/4">
                    4.3
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black tracking-[0.2em] text-[#e41e25] uppercase mb-8">
                            Google Ratings
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-[#1a1a1a] tracking-tight leading-none mb-10">
                            The Heart of Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f406d] to-[#e41e25]">Journey</span>
                        </h1>

                        <div className="hero-rating flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-[40px] shadow-[0_30px_70px_-15px_rgba(31,64,109,0.12)] border border-slate-50">
                            <div className="space-y-2">
                                <div className="text-[5rem] font-black leading-none text-[#1a1a1a] tracking-tighter">4.3</div>
                                <div className="flex flex-col items-center">
                                    <RatingStars rating={4.3} size={24} />
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-3">122 Google Reviews</p>
                                </div>
                            </div>

                            <div className="hidden md:block w-px h-24 bg-slate-100" />

                            <div className="flex flex-col gap-6">
                                {officeRatings.map((office, idx) => (
                                    <div key={idx} className="rating-stat flex items-center gap-5 text-left group">
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <img src={office.icon} alt={office.city} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-[#e41e25] tracking-widest uppercase mb-1">{office.city} Office</p>
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl font-black text-[#1a1a1a] leading-none">{office.rating}</span>
                                                <RatingStars rating={office.rating} size={16} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── REVIEWS GRID ─── */}
            <section ref={contentRef} className="py-20 bg-slate-50/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-6">
                                Stories of Success <br />
                                and Trust
                            </h2>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Join our thriving community of successful migrants who found their path with Migrate Zone.
                                Our commitment to transparency and expertise has helped over 122+ families achieve their dreams.
                            </p>
                        </div>

                        <a
                            href="https://g.page/r/migratezone/review"
                            target="_blank"
                            className="bg-[#1f406d] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#e41e25] transition-all duration-500 shadow-xl"
                        >
                            <ExternalLink size={18} />
                            Review Us On Google!
                        </a>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance]">
                        {reviews.map((review, i) => (
                            <div key={i} className="mb-8">
                                <ReviewCard review={review} index={i} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA SECTION ─── */}
            <section className="py-24 overflow-hidden relative">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-[#1f406d] rounded-[48px] p-16 text-center relative overflow-hidden group">
                        {/* Decorative background numbers */}
                        <div className="absolute -left-10 -bottom-10 text-[20rem] font-bold text-white/5 pointer-events-none select-none leading-none tracking-tighter translate-y-1/4">
                            MZ
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-10 backdrop-blur-sm group-hover:bg-[#e41e25] transition-all duration-700 group-hover:rotate-12">
                                <MessageCircle size={32} className="text-white" />
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
                                Your Query Lights <br />
                                <span className="text-sky-300 italic">Up Our Day!</span>
                            </h3>
                            <p className="text-sky-100/70 text-sm mb-12 max-w-lg mx-auto">
                                Australia, India, and beyond. We are here to guide you all the way through your immigration journey.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="tel:+917069629625" className="bg-white text-[#1f406d] px-8 py-4 rounded-2xl font-bold hover:bg-[#e41e25] hover:text-white transition-all duration-500 shadow-xl">
                                    Call In India
                                </a>
                                <a href="mailto:info@migratezone.com" className="bg-white/10 border border-white/20 text-white backdrop-blur-sm px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#1f406d] transition-all duration-500">
                                    Mail Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TestimonialsPage;
