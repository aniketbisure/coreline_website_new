'use client';

import { motion } from 'framer-motion';

export default function NewsAndCTASection() {
  return (
    <>
      {/* Game News Section - Simple Static Version */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="text-primary">News</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Stay updated with the latest gaming news, updates, and community events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-black/30 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div 
                  className="h-48 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${
                      item === 1
                        ? 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80'
                        : item === 2
                        ? 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80'
                        : 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&q=80'
                    })`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                    whileHover={{ opacity: 0.8 }}
                  />
                  <motion.div
                    className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    NEWS
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {item === 1 && "New Expansion Pack Announced for Cyber Nexus"}
                    {item === 2 && "Pro Tournament Finals: Live Coverage This Weekend"}
                    {item === 3 && "Developer Diary: Behind the Scenes of Ethereal Legends"}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {item === 1 && "The revolutionary expansion brings new cybernetic abilities, story missions, and multiplayer maps."}
                    {item === 2 && "The best players from around the world compete for the championship title and $2 million prize pool."}
                    {item === 3 && "Lead designers share their creative process and inspirations for the award-winning fantasy RPG."}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">May {item + 3}, 2023</span>
                    <motion.button
                      className="text-primary hover:text-white text-sm font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Read More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-primary text-white font-bold rounded-full transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              View All News
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.3) 0%, rgba(0,0,0,0) 70%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-r from-black to-[#0a1a3d] p-10 md:p-16 rounded-2xl border border-gray-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Join the Gaming Revolution?
                </h2>
                <p className="text-gray-400 max-w-xl">
                  Sign up today and get exclusive access to upcoming game releases, beta testing opportunities, and special events.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="px-8 py-4 bg-primary text-white font-bold rounded-full text-lg shadow-lg shadow-primary/30"
                  whileHover={{ 
                    boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.6)",
                  }}
                >
                  Join The Community
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 