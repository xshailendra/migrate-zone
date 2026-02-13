'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Users2, GraduationCap, Globe2, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Decorative Rings ─── */
const Rings = ({ className = '', size = 200 }) => (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size }}>
        <div className="w-full h-full rounded-full border border-slate-300/40" />
        <div className="absolute inset-4 rounded-full border border-slate-300/30" />
        <div className="absolute inset-8 rounded-full border border-slate-300/20" />
    </div>
);

const AboutPage = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            /* ── Hero entrance ── */
            const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            heroTl
                .from('.hero-watermark', { opacity: 0, y: 80, duration: 1.2 })
                .from('.hero-title', { opacity: 0, y: 60, duration: 0.9 }, '-=0.8')
                .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.7 }, '-=0.5')
                .from('.hero-mz', { opacity: 0, scale: 0.8, duration: 1 }, '-=0.7');

            /* ── Hero parallax on scroll ── */
            gsap.to('.hero-watermark', {
                yPercent: 40,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
            gsap.to('.hero-mz', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            /* ── Section: Expertise ── */
            gsap.from('.expertise-img-1', {
                opacity: 0, y: 80, scale: 0.92, duration: 1,
                scrollTrigger: { trigger: '.expertise-img-1', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.expertise-img-2', {
                opacity: 0, y: 80, scale: 0.92, duration: 1, delay: 0.2,
                scrollTrigger: { trigger: '.expertise-img-2', start: 'top 85%', toggleActions: 'play none none none' },
            });

            // Watermark words stagger
            gsap.from('.watermark-word', {
                opacity: 0, x: -60, duration: 0.7, stagger: 0.12,
                scrollTrigger: { trigger: '.watermark-words', start: 'top 80%', toggleActions: 'play none none none' },
            });

            // Expertise text
            gsap.from('.expertise-heading', {
                opacity: 0, y: 50, duration: 0.8,
                scrollTrigger: { trigger: '.expertise-heading', start: 'top 80%', toggleActions: 'play none none none' },
            });
            gsap.from('.expertise-text', {
                opacity: 0, y: 40, duration: 0.8, delay: 0.15,
                scrollTrigger: { trigger: '.expertise-text', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.expertise-team-img', {
                opacity: 0, y: 60, scale: 0.95, duration: 0.9,
                scrollTrigger: { trigger: '.expertise-team-img', start: 'top 85%', toggleActions: 'play none none none' },
            });

            // Parallax on staggered images
            gsap.to('.expertise-img-1', {
                yPercent: -10, ease: 'none',
                scrollTrigger: { trigger: '.expertise-section', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
            });
            gsap.to('.expertise-img-2', {
                yPercent: -18, ease: 'none',
                scrollTrigger: { trigger: '.expertise-section', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
            });

            /* ── Section: Secret ── */
            gsap.from('.secret-title', {
                opacity: 0, y: 50, duration: 0.8,
                scrollTrigger: { trigger: '.secret-title', start: 'top 80%', toggleActions: 'play none none none' },
            });
            gsap.from('.secret-text', {
                opacity: 0, y: 40, duration: 0.8, delay: 0.1,
                scrollTrigger: { trigger: '.secret-text', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.secret-img-1', {
                opacity: 0, x: -60, scale: 0.92, duration: 1,
                scrollTrigger: { trigger: '.secret-img-1', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.secret-img-2', {
                opacity: 0, x: 60, scale: 0.92, duration: 1,
                scrollTrigger: { trigger: '.secret-img-2', start: 'top 85%', toggleActions: 'play none none none' },
            });

            // MZ watermark parallax
            gsap.to('.mz-watermark', {
                yPercent: 30, ease: 'none',
                scrollTrigger: { trigger: '.secret-section', start: 'top bottom', end: 'bottom top', scrub: 2 },
            });

            /* ── Section: Endless ── */
            gsap.from('.endless-heading', {
                opacity: 0, y: 40, duration: 0.8,
                scrollTrigger: { trigger: '.endless-heading', start: 'top 80%', toggleActions: 'play none none none' },
            });
            gsap.from('.endless-text', {
                opacity: 0, y: 30, duration: 0.7, delay: 0.1,
                scrollTrigger: { trigger: '.endless-text', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.endless-img', {
                opacity: 0, y: 60, scale: 0.92, duration: 1,
                scrollTrigger: { trigger: '.endless-img', start: 'top 85%', toggleActions: 'play none none none' },
            });

            // Parallax on endless image
            gsap.to('.endless-img img', {
                yPercent: -8, scale: 1.08, ease: 'none',
                scrollTrigger: { trigger: '.endless-img', start: 'top bottom', end: 'bottom top', scrub: 2 },
            });

            /* ── Section: 4 Pillars ── */
            gsap.from('.pillars-title', {
                opacity: 0, y: 40, duration: 0.8,
                scrollTrigger: { trigger: '.pillars-title', start: 'top 80%', toggleActions: 'play none none none' },
            });
            gsap.from('.pillar-card', {
                opacity: 0, y: 50, scale: 0.9, duration: 0.6, stagger: 0.12,
                scrollTrigger: { trigger: '.pillar-cards', start: 'top 80%', toggleActions: 'play none none none' },
            });
            gsap.from('.pillars-wide-img', {
                opacity: 0, y: 60, scale: 0.95, duration: 1,
                scrollTrigger: { trigger: '.pillars-wide-img', start: 'top 85%', toggleActions: 'play none none none' },
            });

            /* ── Section: Director ── */
            gsap.from('.director-label', {
                opacity: 0, y: 20, duration: 0.6,
                scrollTrigger: { trigger: '.director-label', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.director-heading', {
                opacity: 0, y: 50, duration: 0.8,
                scrollTrigger: { trigger: '.director-heading', start: 'top 80%', toggleActions: 'play none none none' },
            });
            gsap.from('.director-paragraph', {
                opacity: 0, y: 30, duration: 0.7, stagger: 0.15,
                scrollTrigger: { trigger: '.director-paragraphs', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.director-quotes', {
                opacity: 0, x: -40, duration: 0.8,
                scrollTrigger: { trigger: '.director-quotes', start: 'top 85%', toggleActions: 'play none none none' },
            });
            gsap.from('.director-img', {
                opacity: 0, scale: 0.88, duration: 1,
                scrollTrigger: { trigger: '.director-img', start: 'top 80%', toggleActions: 'play none none none' },
            });

            /* ── Section: Mission/Vision Cards ── */
            gsap.from('.bottom-card', {
                opacity: 0, y: 50, scale: 0.92, duration: 0.7, stagger: 0.15,
                scrollTrigger: { trigger: '.bottom-cards', start: 'top 80%', toggleActions: 'play none none none' },
            });

            /* ── Decorative rings parallax ── */
            gsap.utils.toArray('.ring-deco').forEach((ring) => {
                gsap.to(ring, {
                    yPercent: gsap.utils.random(-20, 20),
                    rotation: gsap.utils.random(-15, 15),
                    ease: 'none',
                    scrollTrigger: { trigger: ring, start: 'top bottom', end: 'bottom top', scrub: 3 },
                });
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="relative min-h-screen bg-white font-outfit overflow-hidden">
            <Header />

            {/* ═══════════════ HERO ═══════════════ */}
            <section className="hero-section relative pt-48 pb-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    {/* Vertical ABOUT watermark */}
                    <div
                        className="hero-watermark absolute left-6 -top-8 text-[9rem] font-black text-slate-300/30 leading-none tracking-tighter select-none"
                        style={{ writingMode: 'vertical-lr' }}
                    >
                        ABOUT
                    </div>

                    <div className="flex flex-col lg:flex-row items-end gap-16">
                        {/* Left: Title */}
                        <div className="lg:w-[40%] relative z-10 pb-8">
                            <h1 className="hero-title text-5xl md:text-6xl font-black text-[#1a1a1a] tracking-tight leading-[1.05]">
                                About<br />Migrate Zone
                            </h1>
                            <p className="hero-subtitle text-slate-500 mt-5 text-sm">
                                We will kindly assist you anytime.
                            </p>
                        </div>

                        {/* Right: MZ with images + color overlay */}
                        <div className="hero-mz lg:w-[60%] relative group">
                            <svg viewBox="0 0 650 300" className="w-full h-auto">
                                <defs>
                                    {/* M clip */}
                                    <clipPath id="mClip">
                                        <path d="M 10 270 L 10 30 L 60 30 L 120 180 L 180 30 L 230 30 L 230 270 L 185 270 L 185 110 L 120 250 L 60 110 L 60 270 Z" />
                                    </clipPath>
                                    {/* Z clip */}
                                    <clipPath id="zClip">
                                        <path d="M 270 30 L 480 30 L 480 75 L 325 225 L 480 225 L 480 270 L 270 270 L 270 225 L 430 75 L 270 75 Z" />
                                    </clipPath>
                                    {/* Ring clip */}
                                    <clipPath id="ringClip">
                                        <path d="M 570 140 m -65 0 a 65 65 0 1 0 130 0 a 65 65 0 1 0 -130 0 Z M 570 140 m -32 0 a 32 32 0 1 1 64 0 a 32 32 0 1 1 -64 0 Z" fillRule="evenodd" />
                                    </clipPath>
                                </defs>

                                {/* ── M: Image + Red overlay ── */}
                                <image
                                    href="/vadodara_office_hq_1770547647711.png"
                                    x="0" y="0" width="240" height="300"
                                    clipPath="url(#mClip)"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                                <path
                                    d="M 10 270 L 10 30 L 60 30 L 120 180 L 180 30 L 230 30 L 230 270 L 185 270 L 185 110 L 120 250 L 60 110 L 60 270 Z"
                                    fill="#e41e25"
                                    opacity="0.55"
                                    className="transition-opacity duration-500 group-hover:opacity-[0.25]"
                                />

                                {/* ── Z: Image + Blue overlay ── */}
                                <image
                                    href="/professional_solicitor_team.png"
                                    x="250" y="0" width="250" height="300"
                                    clipPath="url(#zClip)"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                                <path
                                    d="M 270 30 L 480 30 L 480 75 L 325 225 L 480 225 L 480 270 L 270 270 L 270 225 L 430 75 L 270 75 Z"
                                    fill="#1f406d"
                                    opacity="0.55"
                                    className="transition-opacity duration-500 group-hover:opacity-[0.25]"
                                />

                                {/* Dot — Red */}
                                <circle cx="530" cy="250" r="22" fill="#e41e25" />

                                {/* Ring with image */}
                                <circle cx="570" cy="140" r="65" fill="none" stroke="#1f406d" strokeWidth="33" />
                                <image
                                    href="/sydney_office_gateway_1770547680868.png"
                                    x="505" y="75" width="130" height="130"
                                    clipPath="url(#ringClip)"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ EXPERTISE MEETS COMPASSION ═══════════════ */}
            <section className="expertise-section py-24 relative">
                <Rings className="ring-deco left-10 top-20" size={300} />
                <Rings className="ring-deco right-0 bottom-20" size={200} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-20">
                        {/* Left: Staggered Images */}
                        <div className="lg:w-[45%] relative">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="expertise-img-1 relative z-10">
                                    <div className="rounded-[28px] overflow-hidden shadow-lg aspect-[3/4]">
                                        <img
                                            src="/vadodara_office_hq_1770547647711.png"
                                            alt="Office"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="expertise-img-2 mt-16 relative z-10">
                                    <div className="rounded-[28px] overflow-hidden shadow-xl aspect-[3/4]">
                                        <img
                                            src="/ahmedabad_office_hub_1770547666255.png"
                                            alt="Workspace"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Large watermark words */}
                            <div className="watermark-words mt-12 space-y-0">
                                {['DREAMS', 'SKILLS', 'FUTURE', 'GOALS'].map((word) => (
                                    <p
                                        key={word}
                                        className="watermark-word text-[4.5rem] md:text-[6rem] font-black text-slate-300/40 leading-[1] tracking-tighter select-none"
                                    >
                                        {word}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:w-[50%] lg:pt-16">
                            <div>
                                <h2 className="expertise-heading text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tight mb-8">
                                    Expertise Meets<br />Compassion
                                </h2>
                                <div className="expertise-text">
                                    <p className="text-slate-600 text-[15px] leading-[1.9] mb-6">
                                        At Migrate Zone, we believe in the power of community, expertise, and action. Our
                                        mission is simple: to support individuals in need and create lasting change through
                                        meaningful immigration pathways. Whether it&apos;s providing expert visa guidance,
                                        empowering individuals, or fostering sustainable solutions, we are committed to making a
                                        difference—one family at a time.
                                    </p>
                                    <p className="text-slate-600 text-[15px] leading-[1.9]">
                                        Migrate Zone has been in the field of leading visa immigration consultants since 1998,
                                        thereby providing both Australian as well as Canadian Immigration Services for the last 23 years.
                                        Through our dedicated commitment to serving clients, we have been able to figure out the needs,
                                        demands, and challenges faced by clients.
                                    </p>
                                </div>
                            </div>

                            <div className="expertise-team-img mt-16">
                                <div className="rounded-[28px] overflow-hidden shadow-lg aspect-[16/10] grayscale hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src="/professional_solicitor_team.png"
                                        alt="Team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ SECRET OF SUCCESS ═══════════════ */}
            <section className="secret-section py-24 relative">
                <Rings className="ring-deco -right-20 top-10" size={250} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-20 mb-20">
                        <div className="lg:w-[40%]">
                            <h2 className="secret-title text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight tracking-tight">
                                The Secret of<br />Living is Giving
                            </h2>
                        </div>

                        <div className="secret-text lg:w-[55%]">
                            <p className="text-slate-600 text-[15px] leading-[1.9] mb-6">
                                We are specialized in assessing your profile through the utmost modern methodology with
                                the latest updates in the immigration sector. Our company&apos;s values are to provide the maximum
                                support to our valued clients. Migration refers to the movement of an individual or group
                                from one location to another.
                            </p>
                            <p className="text-slate-600 text-[15px] leading-[1.9]">
                                Migrate Zone is a proficient Immigration &amp; excellence abroad education consultancy firm
                                assisting clients with all aspects of settling, working, studying and visiting Australia, Canada,
                                New Zealand, the UK, USA, and Europe. Our Proficient, Friendly, Experienced, and Professional
                                team is committed to providing utmost assistance to transform your Visualization into Reality.
                            </p>
                        </div>
                    </div>

                    {/* Staggered Images with MZ watermark */}
                    <div className="relative">
                        <div className="mz-watermark absolute right-10 top-0 text-[14rem] font-black text-slate-300/15 leading-none tracking-tighter select-none z-0">
                            MZ
                        </div>

                        <div className="grid grid-cols-12 gap-5 relative z-10">
                            <div className="secret-img-1 col-span-12 md:col-span-5">
                                <div className="rounded-[28px] overflow-hidden shadow-lg aspect-[4/3]">
                                    <img
                                        src="/sydney_office_gateway_1770547680868.png"
                                        alt="Innovation"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="secret-img-2 col-span-12 md:col-span-5 md:col-start-7 md:mt-32">
                                <div className="rounded-[28px] overflow-hidden shadow-lg aspect-[16/10]">
                                    <img
                                        src="/melbourne_office_innovation_1770547696568.png"
                                        alt="Global"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ ENDLESS POSSIBILITIES ═══════════════ */}
            <section className="py-24 relative">
                <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                    <div>
                        <h2 className="endless-heading text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight italic mb-8">
                            Endless Possibilities to Explore
                        </h2>
                        <div className="endless-text">
                            <p className="text-slate-500 text-[15px] leading-[1.9] max-w-3xl mx-auto mb-4">
                                At Migrate Zone, we believe that opportunities know no limits.<br />
                                Every person has something valuable to achieve—whether it&apos;s education, career, lifestyle, or safety.<br />
                                When we come together, we unlock endless possibilities to uplift, empower, and transform lives.
                            </p>
                            <p className="text-slate-500 text-[15px] leading-[1.9] max-w-3xl mx-auto">
                                No matter how you choose to begin your journey, every step counts.<br />
                                Together, we can create a world where immigration knows no boundaries.
                            </p>
                        </div>
                    </div>

                    <div className="endless-img mt-14">
                        <div className="rounded-[28px] overflow-hidden shadow-xl aspect-[21/9]">
                            <img
                                src="/global_office_facade.png"
                                alt="Endless Possibilities"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 4 PILLARS ═══════════════ */}
            <section className="py-24 relative">
                <Rings className="ring-deco -left-20 top-20" size={280} />
                <Rings className="ring-deco -left-10 bottom-40" size={180} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-16 mb-14">
                        <div className="pillars-title lg:w-[35%]">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-tight">
                                4 Pillars
                            </h2>
                            <p className="text-slate-400 text-sm mt-2">of our immigration excellence</p>
                        </div>

                        <div className="pillar-cards lg:w-[65%] grid grid-cols-2 gap-5">
                            {[
                                { icon: <Target className="w-7 h-7 text-slate-500" />, title: 'Mission-Driven', sub: 'Error-less Documents' },
                                { icon: <Eye className="w-7 h-7 text-slate-500" />, title: 'Visionary', sub: 'Global Perspective' },
                                { icon: <Heart className="w-7 h-7 text-slate-500" />, title: 'Dedicated', sub: 'Client as Family' },
                                { icon: <Globe2 className="w-7 h-7 text-slate-500" />, title: 'Global Reach', sub: '6 Countries Served' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="pillar-card bg-white rounded-[20px] p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
                                >
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h4 className="text-lg font-black text-[#1a1a1a] mb-1">{item.title}</h4>
                                    <p className="text-slate-400 text-xs font-medium">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wide image */}
                    <div className="pillars-wide-img">
                        <div className="rounded-[28px] overflow-hidden shadow-xl aspect-[21/8]">
                            <img
                                src="/professional_solicitor_team.png"
                                alt="Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ DIRECTOR'S MESSAGE ═══════════════ */}
            <section className="pt-20 pb-0 relative overflow-hidden">
                <Rings className="ring-deco right-0 top-10" size={220} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-20">
                        <div className="lg:w-[55%]">
                            <span className="director-label text-slate-400 text-xs tracking-[0.25em] uppercase font-bold mb-5 block">
                                Director&apos;s Message
                            </span>
                            <h2 className="director-heading text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-tight mb-10">
                                Navigating Your Path<br />to Global Success
                            </h2>

                            <div className="director-paragraphs space-y-6 text-slate-600 text-[15px] leading-[1.9]">
                                <p className="director-paragraph">
                                    Migration refers to the movement of an individual or group from one location to another.
                                    From ancient age to this era people migrate for many reasons either permanently or temporarily.
                                    Day to day migration has become common practice; People migrate from one location to another
                                    location, city, or even different country.
                                </p>
                                <p className="director-paragraph">
                                    For many years Australia, New Zealand and other countries have become popular destinations
                                    for aspiring migrants for many reasons like Earning, Job Opportunities, International
                                    Qualification, Knowledge, Worldwide Recognition, Confidence, Safety, Lifestyle and Socialization.
                                </p>
                                <p className="director-paragraph">
                                    There is no substitute for knowledge and experience. Life is not enough to gain complete
                                    knowledge or experience. It is extremely important to select the correct destination and
                                    pathway based on your preference, expertise, and experience.
                                </p>
                            </div>

                            {/* Mother Teresa Quotes */}
                            <div className="director-quotes mt-10 pl-6 border-l-[3px] border-[#e41e25] space-y-1.5">
                                <p className="italic text-[#1a1a1a] text-lg">&ldquo;Life is an opportunity, benefit from it.&rdquo;</p>
                                <p className="italic text-[#1a1a1a] text-lg">&ldquo;Life is a dream, realize it.&rdquo;</p>
                                <p className="italic text-[#1a1a1a] text-lg">&ldquo;Life is luck, make it.&rdquo;</p>
                                <p className="italic text-[#1a1a1a] text-lg">&ldquo;Life is too precious, do not destroy it.&rdquo;</p>
                                <p className="font-black text-[#e41e25] pt-2 not-italic text-xs tracking-[0.2em] uppercase">— Mother Teresa</p>
                            </div>

                            <p className="director-paragraph mt-8 text-slate-500 text-[15px] leading-[1.9]">
                                Before choosing the road to success it is important to know the destination and right vehicle
                                to reach. It is vital to know detailed information about the foreign education system, costs,
                                study duration, course preferences, entry requirements, course outline, your work rights,
                                and other key information before you step forward.
                            </p>
                        </div>

                        {/* Director Image */}
                        <div className="director-img lg:w-[40%] hidden lg:block lg:sticky lg:top-32">
                            <div className="rounded-[28px] overflow-hidden shadow-xl aspect-[3/4]">
                                <img
                                    src="/migration_hero_contact.png"
                                    alt="Director"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ MISSION / VISION CARDS ═══════════════ */}
            <section className="pt-6 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bottom-cards grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Target className="w-7 h-7 text-[#e41e25]" />,
                                title: 'Our Mission',
                                desc: "To attain utmost client's contentment by preparing error-less documents to achieve uppermost visa achievement proportion.",
                            },
                            {
                                icon: <Eye className="w-7 h-7 text-[#1f406d]" />,
                                title: 'Our Vision',
                                desc: 'Creating ideas and services that truly matter to people universally at any instance.',
                            },
                            {
                                icon: <GraduationCap className="w-7 h-7 text-[#e41e25]" />,
                                title: 'Before You Step Forward',
                                desc: 'Know the foreign education system, costs, study duration, course preferences, entry requirements, and your work rights.',
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="bottom-card bg-white p-10 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all cursor-default"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>
                                <h4 className="text-xl font-black text-[#1a1a1a] mb-4">{card.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
