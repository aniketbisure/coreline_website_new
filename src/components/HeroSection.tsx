import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Change padding based on scroll for navbar and banner height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pre-calculate particle positions to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      left: `${(i * 4.72 + 5) % 100}%`,
      top: `${(i * 5.13 + 7) % 100}%`,
      yOffset: (i % 3 + 1) * -30,
      xOffset: (i % 5 - 2) * 10,
      duration: 2 + (i % 3),
      delay: (i % 5) * 0.4,
    }));
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ 
      height: 'calc(100vh)', 
      paddingTop: isScrolled ? '106px' : '126px' // Navbar (70px or 90px) + Banner (36px)
    }}>
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.6, 0.6, 0.6],
        }}
        transition={{   
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut" 
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/37585-414024825_tiny.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-glow"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(37,99,235,0.5)", 
                "0 0 20px rgba(37,99,235,0.8)",
                "0 0 10px rgba(37,99,235,0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            CORE<span className="text-primary m-2">LINE</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Dive into the ultimate gaming experience. Discover new worlds, compete with legends, and join the gaming revolution.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.button 
              className="px-8 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Games
            </motion.button>
            
            <motion.button 
              className="px-8 py-3 bg-transparent border-2 border-white hover:border-primary text-white font-bold rounded-full transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05, borderColor: "var(--primary-color)" }}
              whileTap={{ scale: 0.95 }}
            >
              Join Community
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Particles */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
      >
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, particle.yOffset],
              x: [0, particle.xOffset],
              opacity: [1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection; 