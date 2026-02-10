'use client';

import React, { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './EvolGroupPerspectiveSlider.css';

const initialVentures = [
    {
        id: 'migrate-zone',
        title: 'Migrate Zone',
        subtitle: 'Global Immigration Masters',
        description: 'Leading consultants since 1998, specializing in Australian & Canadian immigration with a focus on seamless transitions.',
        image: '/logos/logo-wide.webp',
        logo: '/logos/logo-wide.webp'
    },
    {
        id: 'technobits',
        title: 'Technobits Digital',
        subtitle: 'Elite IT Solutions',
        description: 'Your partner for innovative digital transformation, custom software development, and strategic IT consulting.',
        image: '/logos/tbt-bg.png',
        logo: '/logos/logo-TBD.webp'
    },
    {
        id: 'evol-network',
        title: 'Evol Network',
        subtitle: 'Affiliate Marketing Ecosystem',
        description: 'A revolutionary platform connecting brands with influencers to drive growth through transparent affiliate structures.',
        image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
        logo: '/logos/logo-EN.webp'
    },
    {
        id: 'evol-trader',
        title: 'Evol Trader',
        subtitle: 'Algorithmic Trading Innovation',
        description: 'Advanced cloud-based trading solutions utilizing AI and machine learning for market-beating algorithmic strategies.',
        image: 'https://images7.alphacoders.com/878/878663.jpg',
        logo: '/logos/logo-ET.webp'
    },
    {
        id: 'marketrill',
        title: 'Marketrill',
        subtitle: 'Revenue Share Platforms',
        description: 'Decentralized revenue sharing protocols that maximize stakeholder yield through optimized DeFi farming strategies.',
        image: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
        logo: '/logos/logo-EGC.webp'
    },
    {
        id: 'truevalue',
        title: 'Truevalue CRM',
        subtitle: 'Enterprise SaaS Automation',
        description: 'Comprehensive CRM systems that streamline customer relations and automate complex business workflows.',
        image: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
        logo: '/logos/logo-TVCRM.webp'
    }
];

export default function EvolGroupPerspectiveSlider() {
    const [items, setItems] = useState(initialVentures);

    const handleNext = useCallback(() => {
        setItems(prev => {
            const newItems = [...prev];
            const first = newItems.shift();
            newItems.push(first);
            return newItems;
        });
    }, []);

    const handlePrev = useCallback(() => {
        setItems(prev => {
            const newItems = [...prev];
            const last = newItems.pop();
            newItems.unshift(last);
            return newItems;
        });
    }, []);

    return (
        <section className="perspective-slider-section">
            <ul className="perspective-slider">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="perspective-item"
                    >
                        <img src={item.image} alt={item.title} className="perspective-bg" />
                        <div className="perspective-content">
                            <div className="logo-container">
                                <img src={item.logo} alt={`${item.title} Logo`} className="company-logo" />
                            </div>
                            <h2 className="title">{item.title}</h2>
                            <span className="subtitle">{item.subtitle}</span>
                            <p className="description">{item.description}</p>
                            <button className="perspective-btn">Explore Venture</button>
                        </div>
                    </li>
                ))}
            </ul>

            <nav className="perspective-nav">
                <button className="nav-btn prev" onClick={handlePrev}>
                    <ArrowLeft />
                </button>
                <button className="nav-btn next" onClick={handleNext}>
                    <ArrowRight />
                </button>
            </nav>
        </section>
    );
}
