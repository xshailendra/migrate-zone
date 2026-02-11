import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const sliderImages = [
    "/happy_family_uk.png",
    "/student_uk_campus.png",
    "/global_office_facade.png",
    "/professional_solicitor_team.png"
];

const solicitorImages = [
    "/customer_avatar_1.png",
    "/solicitor_avatar_2.png",
    "/student_uk_campus.png",
    "/professional_solicitor_team.png"
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[95vh] md:min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-transparent mt-20 md:mt-28">
            {/* Background Video Container */}
            <div className="absolute inset-4 md:inset-8 z-0 overflow-hidden rounded-[3.5rem] md:rounded-[6rem] shadow-2xl bg-white">
                <video
                    src="/hero-bgg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover brightness-[0.6] contrast-[1.1] opacity-90 scale-105"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[95rem] mx-auto w-full pt-10 px-10 md:px-28 lg:px-44">
                <div className="flex flex-col items-start gap-3 md:gap-6">

                    {/* Line 1: IMMIGRATE TO YOUR + Avatar Pill */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap items-center gap-x-3 md:gap-x-8"
                    >
                        <h1 className="text-[clamp(1.5rem,5.5vw,6rem)] leading-[0.8] font-black tracking-[-0.08em] text-white uppercase flex flex-wrap items-center gap-x-3 md:gap-x-6">
                            IMMIGRATE <span className="text-[#e41e25]">TO YOUR</span>

                            <div className="relative group inline-flex items-center bg-white rounded-full p-1 md:p-1.5 pr-2.5 md:pr-3 gap-2 md:gap-4 shadow-3xl border border-white/20 transform hover:scale-105 transition-all duration-700 cursor-pointer">
                                <div className="flex -space-x-2 md:-space-x-3">
                                    {[0, 1, 2].map((offset) => (
                                        <motion.div
                                            key={offset}
                                            initial={{ x: "100vw", opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 1.5,
                                                delay: 3.6 + (offset * 0.2),
                                                ease: [0.16, 1, 0.3, 1]
                                            }}
                                            className="relative w-8 h-8 md:w-14 md:h-14 rounded-full border-[3px] md:border-4 border-white overflow-hidden bg-gray-100 shadow-xl"
                                        >
                                            <AnimatePresence initial={false}>
                                                <motion.img
                                                    key={(currentSlide + offset) % solicitorImages.length}
                                                    src={solicitorImages[(currentSlide + offset) % solicitorImages.length]}
                                                    initial={{ x: "100%", opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: "-100%", opacity: 0 }}
                                                    transition={{
                                                        duration: 0.8,
                                                        ease: [0.16, 1, 0.3, 1]
                                                    }}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                    alt="Solicitor"
                                                />
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div
                                    whileHover={{ rotate: 45 }}
                                    className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-[#d4ff3f] rounded-full text-[#1f406d] shadow-2xl transition-all duration-500"
                                >
                                    <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                                </motion.div>
                            </div>
                        </h1>
                    </motion.div>

                    {/* Line 2: DREAM DESTINATION */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center"
                    >
                        <h1 className="text-[clamp(1.5rem,5.5vw,6rem)] leading-[0.8] font-black tracking-[-0.08em] text-white uppercase">
                            DREAM DESTINATION
                        </h1>
                    </motion.div>

                    {/* Line 3: Image Pill + WITH FAMILY */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap items-center gap-x-3 md:gap-x-8"
                    >
                        <div className="relative w-20 h-10 md:w-48 md:h-24 rounded-full overflow-hidden border-[3px] md:border-4 border-white/40 transform hover:scale-105 transition-all duration-700 shadow-3xl bg-white/10">
                            <AnimatePresence initial={false}>
                                <motion.img
                                    key={currentSlide}
                                    src={sliderImages[currentSlide]}
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: "-100%", opacity: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt="MigrateZone Visuals"
                                />
                            </AnimatePresence>
                        </div>
                        <h1 className="text-[clamp(1.5rem,5.5vw,6rem)] leading-[0.8] font-black tracking-[-0.08em] text-white uppercase">
                            WITH <span className="text-[#e41e25]">FAMILY</span>
                        </h1>
                    </motion.div>

                </div>

                {/* Bottom Navigation / Meta Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4.0, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="flex flex-col gap-4">
                        <p className="text-white/60 font-medium tracking-widest text-sm md:text-base uppercase max-w-xl">
                            Permanent Status in Australia, Canada, <br className="hidden md:block" /> New Zealand and other countries.
                        </p>
                        <div className="flex items-center gap-10 mt-2">
                            <div className="text-white/50 group cursor-default">
                                <p className="text-[8px] uppercase font-black tracking-[0.4em] mb-1 group-hover:text-[#e41e25] transition-colors">Success Rate</p>
                                <p className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none">99.8%</p>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10 hidden md:block" />
                            <div className="text-white/50 group cursor-default">
                                <p className="text-[8px] uppercase font-black tracking-[0.4em] mb-1 group-hover:text-[#e41e25] transition-colors">Solicitors</p>
                                <p className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-none">QUALIFIED</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#e41e25', color: '#ffffff', borderColor: '#e41e25' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 cursor-pointer py-5 md:px-14 md:py-7 bg-white text-[#1f406d] border border-white rounded-[5rem] font-black text-s md:text-sm uppercase tracking-widest shadow-3xl shadow-black/40 transition-all duration-500"
                        >
                            Contact Us
                        </motion.button>


                    </div>
                </motion.div>
            </div>

            {/* Background Texture Overlay */}
            {/* <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" /> */}
        </section>
    );
}
