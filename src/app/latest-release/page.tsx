'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GameTrailer from '@/components/GameTrailer';
import { motion, useScroll, useSpring } from 'framer-motion';

// Game features data
const gameFeatures = [
  {
    title: "Next-Gen Graphics",
    description: "Experience stunning visuals with ray tracing and advanced lighting effects that bring the cyberpunk world to life.",
    icon: "✨"
  },
  {
    title: "Immersive Storyline",
    description: "Engage in a branching narrative with multiple endings, where your choices have real consequences on the game world.",
    icon: "📖"
  },
  {
    title: "Cybernetic Upgrades",
    description: "Customize your character with over 100 unique implants and abilities that change how you interact with the environment.",
    icon: "🔧"
  },
  {
    title: "Open World",
    description: "Explore a vast, dynamic city with districts that evolve based on your actions and the game's day/night cycle.",
    icon: "🌎"
  },
  {
    title: "Multiplayer Mode",
    description: "Team up with friends for co-op missions or compete in PvP arenas with unique gameplay modes.",
    icon: "👥"
  },
  {
    title: "Cross-Platform Play",
    description: "Seamlessly continue your progress across PC, console, and cloud gaming platforms.",
    icon: "🎮"
  }
];

// Game editions data
const gameEditions = [
  {
    name: "Standard Edition",
    price: "$59.99",
    features: [
      "Base Game",
      "Digital Soundtrack Sample",
      "Digital Artbook (10 pages)"
    ]
  },
  {
    name: "Deluxe Edition",
    price: "$79.99",
    features: [
      "Base Game",
      "3-Day Early Access",
      "Full Digital Soundtrack",
      "Digital Artbook (50 pages)",
      "2 Exclusive Character Skins"
    ]
  },
  {
    name: "Collector's Edition",
    price: "$129.99",
    features: [
      "Base Game",
      "5-Day Early Access",
      "Season Pass for All DLC",
      "Full Digital Soundtrack",
      "Digital Artbook (100 pages)",
      "5 Exclusive Character Skins",
      "Exclusive Weapon Pack",
      "Physical Collectible Statue"
    ]
  }
];

export default function LatestReleasePage() {
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
              Latest <span className="text-primary">Release</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Discover our newest game: Cyber Nexus: Revolution
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Game Trailer Section */}
      <GameTrailer />

      {/* Game Features Section */}
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
              Game <span className="text-primary">Features</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Experience the cutting-edge gameplay and innovative features of Cyber Nexus: Revolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black/30 p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Editions Section */}
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
              Available <span className="text-primary">Editions</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose the edition that&apos;s right for you and start your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameEditions.map((edition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-b from-black to-[#080404] p-8 rounded-xl border ${
                  index === 2 ? 'border-primary' : 'border-gray-800'
                } ${index === 2 ? 'shadow-lg shadow-primary/20' : ''} transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${index === 2 ? 'text-primary' : 'text-white'}`}>
                    {edition.name}
                  </h3>
                  <p className="text-3xl font-bold">{edition.price}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {edition.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-bold ${
                    index === 2 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-800 text-white hover:bg-primary/20'
                  } transition-colors duration-300`}
                >
                  {index === 2 ? 'Pre-order Collector&apos;s Edition' : 'Pre-order Now'}
                </motion.button>  
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements Section */}
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
              System <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Make sure your system is ready for the ultimate gaming experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black/30 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-center">Minimum Requirements</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-primary font-semibold w-24">OS:</span>
                  <span className="text-gray-300">Windows 10 64-bit</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">CPU:</span>
                  <span className="text-gray-300">Intel Core i5-8400 or AMD Ryzen 5 2600</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">RAM:</span>
                  <span className="text-gray-300">12 GB</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">GPU:</span>
                  <span className="text-gray-300">NVIDIA GTX 1060 6GB or AMD RX 580 8GB</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">Storage:</span>
                  <span className="text-gray-300">70 GB SSD</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">DirectX:</span>
                  <span className="text-gray-300">Version 12</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black/30 p-6 rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4 text-center">Recommended Requirements</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-primary font-semibold w-24">OS:</span>
                  <span className="text-gray-300">Windows 10/11 64-bit</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">CPU:</span>
                  <span className="text-gray-300">Intel Core i7-10700K or AMD Ryzen 7 5800X</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">RAM:</span>
                  <span className="text-gray-300">16 GB</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">GPU:</span>
                  <span className="text-gray-300">NVIDIA RTX 3070 or AMD RX 6800 XT</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">Storage:</span>
                  <span className="text-gray-300">70 GB NVMe SSD</span>
                </li>
                <li className="flex">
                  <span className="text-primary font-semibold w-24">DirectX:</span>
                  <span className="text-gray-300">Version 12</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 