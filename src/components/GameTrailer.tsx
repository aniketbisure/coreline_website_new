'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

// Dynamically import Three.js components with no SSR
const ThreeCanvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

const DynamicPerspectiveCamera = dynamic(
  () => import('@react-three/drei').then((mod) => mod.PerspectiveCamera),
  { ssr: false }
);

const DynamicEnvironment = dynamic(
  () => import('@react-three/drei').then((mod) => mod.Environment),
  { ssr: false }
);

const DynamicSparkles = dynamic(
  () => import('@react-three/drei').then((mod) => mod.Sparkles),
  { ssr: false }
);

const ThreeDSceneContent = () => {
  return (
    <Canvas shadows>
      <DynamicPerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow />  
      <DynamicSparkles size={6} scale={[10, 10, 10]} position-y={0} speed={0.3} count={50} opacity={0.5} color="#2563eb" />
      <DynamicEnvironment preset="night" />
    </Canvas>
  );
};

// Dynamically import the ThreeDScene component
const ThreeDScene = dynamic(() => Promise.resolve(ThreeDSceneContent), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-black flex items-center justify-center">
      Loading 3D scene...
    </div>
  )
});

// Main component
const GameTrailer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "-20px 0px"
  });

  return (
    <section className="py-12 sm:py-20 bg-black relative overflow-hidden" id="trailer">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080c12] to-black"></div>
      
      {/* Animated gradient borders */}
      <motion.div 
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] rounded-full"
        initial={{ opacity: 0.1 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(0,0,0,0) 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Latest <span className="text-primary">Release</span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-300 px-2 sm:px-0">
            Get a first look at our most anticipated title of the year. Pre-order now for exclusive content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="p-2 order-2 lg:order-1"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Cyber Nexus: Revolution</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Enter a dystopian future where technology and humanity blur. As an enhanced agent with cybernetic abilities, you must navigate a world on the brink of collapse. Uncover conspiracies, upgrade your abilities, and determine the fate of civilization.
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-black/40 p-3 sm:p-4 rounded-lg border border-gray-800">
                <h4 className="text-primary font-semibold mb-1 text-sm sm:text-base">Release Date</h4>
                <p className="text-xs sm:text-sm">December 10, 2023</p>
              </div>
              <div className="bg-black/40 p-3 sm:p-4 rounded-lg border border-gray-800">
                <h4 className="text-primary font-semibold mb-1 text-sm sm:text-base">Platforms</h4>
                <p className="text-xs sm:text-sm">PC, PS5, Xbox Series X</p>
              </div>
              <div className="bg-black/40 p-3 sm:p-4 rounded-lg border border-gray-800">
                <h4 className="text-primary font-semibold mb-1 text-sm sm:text-base">Genre</h4>
                <p className="text-xs sm:text-sm">Action RPG, Open World</p>
              </div>
              <div className="bg-black/40 p-3 sm:p-4 rounded-lg border border-gray-800">
                <h4 className="text-primary font-semibold mb-1 text-sm sm:text-base">Players</h4>
                <p className="text-xs sm:text-sm">Single + Multiplayer</p>
              </div>
            </div>
            
            <motion.button
              className="px-6 sm:px-8 py-2 sm:py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition duration-300 ease-in-out text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pre-order Now
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden neon-border order-1 lg:order-2"
          >
            <div className="absolute inset-0 z-0">
              <ThreeDScene />
            </div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(37,99,235,0.7)", "0 0 0 20px rgba(37,99,235,0)"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                >
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GameTrailer; 