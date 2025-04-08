'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedGames from '@/components/FeaturedGames';
import GameTrailer from '@/components/GameTrailer';
import NewsAndCTASection from '@/components/NewsAndCTASection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Create public directory if needed
    // This would be done in a real project setup, not in the component
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <HeroSection />
      <FeaturedGames />
      <GameTrailer />
      <NewsAndCTASection />
      <Footer />
    </main>
  );
}
