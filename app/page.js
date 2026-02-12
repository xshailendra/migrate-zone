'use client';

import { useState, useRef } from 'react';
import QuantumLoader from '@/components/QuantumLoader';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import StrengthsSection from '@/components/StrengthsSection';
import EvolGroupSection from '@/components/EvolGroupSection';
import PopularServices from '@/components/PopularServices';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import RequestCallBack from '@/components/RequestCallBack';

import { AnimatePresence, motion } from 'framer-motion';
import AwesomeFacts from '@/components/AwesomeFacts';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef(null);

  const handleTransitionStart = () => {
    setIsTransitioning(true);
  };

  return (
    <main className="relative min-h-screen text-neutral-900 bg-white">
      <AnimatePresence>
        {showLoader && (
          <QuantumLoader
            onTransitionStart={handleTransitionStart}
            onComplete={() => setShowLoader(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="main-nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      <HeroSection heroRef={heroRef} />
      <WelcomeSection />
      <EvolGroupSection />
      <PopularServices />
      <AwesomeFacts />
      <StrengthsSection />
      <ExpertiseSection />
      <RequestCallBack />

      <TestimonialsSection />

      <LocationsSection />
      <Footer />
    </main>
  );
}
