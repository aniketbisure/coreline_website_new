'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedGames from '@/components/FeaturedGames';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';

// Additional games data
const allGames = [
  {
    id: 5,
    title: "Quantum Drift",
    category: "Puzzle",
    imageUrl: "/image8.jpg", // Reuse assets for placeholder
    rating: 4.6,
  },
  {
    id: 6,
    title: "Mystic Realms",
    category: "Adventure",
    imageUrl: "/image9.jpg",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Tactical Conquest",
    category: "Strategy",
    imageUrl: "/image10.jpg",
    rating: 4.7,
  },
  {
    id: 8,
    title: "Neon Fighters",
    category: "Fighting",
    imageUrl: "/image11.png",
    rating: 4.5,
  },
];

const gameCategories = [
  "Action", "Adventure", "RPG", "Strategy", 
  "Simulation", "Sports", "Racing", "Puzzle",
  "Fighting", "Stealth", "Horror", "Casual"
];

export default function GamesPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-black">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Animation */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-black/50 to-black"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-glow"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255,61,0,0.5)", 
                  "0 0 20px rgba(255,61,0,0.8)",
                  "0 0 10px rgba(255,61,0,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our <span className="text-primary">Games</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore our collection of immersive gaming experiences
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Games Section */}
      <FeaturedGames />

      {/* Categories Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Browse by <span className="text-primary">Category</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Find the perfect game based on your preferred genre and style
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gameCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 61, 0, 0.2)" }}
                className="bg-black/30 border border-gray-800 rounded-lg p-4 text-center cursor-pointer transition-all duration-300"
              >
                <h3 className="font-semibold text-white">{category}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Games Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              All <span className="text-primary">Games</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover our complete library of gaming experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allGames.map((game) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative group"
              >
                <motion.div
                  className="relative h-80 rounded-xl overflow-hidden neon-border"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={game.imageUrl}
                    alt={game.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-1">{game.title}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{game.category}</span>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-primary"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                          <span className="ml-1 text-sm font-semibold">{game.rating}</span>
                        </div>
                      </div>
                      <motion.button
                        className="w-full mt-4 py-2 bg-primary hover:bg-primary-light text-white font-bold rounded-lg text-sm transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Play Now
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 