'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: 'What visa options are available for Australia?',
        answer: 'Australia offers various visa categories including Skilled Independent Visa (Subclass 189), Skilled Nominated Visa (Subclass 190), Skilled Work Regional Visa (Subclass 491), Student Visa, and Visitor Visa. Our team can help assess your situation and guide you to the best visa option for your needs.'
    },
    {
        question: 'How long does it take to process a PR application?',
        answer: 'Processing times vary depending on the visa type and individual circumstances. Generally, skilled migration visas take 6-12 months, while family visas may take longer. We provide regular updates throughout your application journey.'
    },
    {
        question: 'Can you help me if my visa has been refused?',
        answer: 'Yes, we specialize in reviewing refused visa applications. We can assess your case, identify the reasons for refusal, and advise on the best course of action, whether it\'s appealing the decision or reapplying with a stronger case.'
    },
    {
        question: 'Do I need to prove my English language skills?',
        answer: 'Most skilled migration visas require proof of English proficiency through tests like IELTS, PTE, or TOEFL. The required score depends on the visa type. We can guide you on the specific requirements for your chosen pathway.'
    },
    {
        question: 'What are the costs involved in immigration services?',
        answer: 'Our fees are transparent and competitive. We offer fixed-fee pricing with no hidden costs. The total cost depends on the complexity of your case and the visa type. Contact us for a detailed quote tailored to your situation.'
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(sectionRef.current.querySelectorAll('.faq-item'),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <span className="inline-block px-5 py-2 bg-[#1f406d]/5 rounded-full text-[#1f406d] text-[10px] items-center font-black uppercase tracking-[0.2em] mb-6">
                        Support Center
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1f406d] leading-[1.05] tracking-tight">
                        Frequently Asked <br />
                        <span className="text-[#e41e25]">Questions</span>
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className={`w-full text-left p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden relative group ${openIndex === index
                                    ? 'bg-[#1f406d] border-[#1f406d] text-white shadow-2xl shadow-[#1f406d]/20'
                                    : 'bg-white border-gray-100 text-[#1f406d] hover:border-[#1f406d]/20 hover:shadow-xl hover:shadow-[#1f406d]/5'
                                    }`}
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    <span className="font-black text-sm md:text-base uppercase tracking-tight pr-8">{faq.question}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-white/10 rotate-180' : 'bg-[#1f406d]/5 rotate-0 group-hover:bg-[#1f406d] group-hover:text-white'
                                        }`}>
                                        <ChevronDown className="w-5 h-5 flex-shrink-0" />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="relative z-10"
                                        >
                                            <div className="pt-6 mt-6 border-t border-white/10">
                                                <p className="text-white/60 font-medium leading-relaxed text-sm md:text-base">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Background Accent on active */}
                                {openIndex === index && (
                                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                                        <ChevronDown className="w-40 h-40" />
                                    </div>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
