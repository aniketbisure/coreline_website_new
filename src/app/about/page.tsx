'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function AboutUs() {
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
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,61,0,0.1) 0%, rgba(0,0,0,0) 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
        </div>

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
              About <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The journey behind the gaming revolution
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,61,0,0.05) 0%, rgba(0,0,0,0) 70%)',
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2020, CORELINE began with a simple yet ambitious vision: to create immersive gaming experiences that push the boundaries of creativity and technology. What started as a small indie studio has evolved into a cutting-edge gaming hub, bringing together passionate gamers from across the globe.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey has been defined by innovation, perseverance, and an unwavering commitment to excellence. Through challenges and triumphs, we&apos;ve remained dedicated to our core mission of delivering games that inspire, challenge, and connect players in meaningful ways.
              </p>
              <p className="text-gray-300">
                Today, CORELINE stands at the forefront of the gaming industry, continuously exploring new horizons and setting higher standards for what games can be and the experiences they can create.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="aspect-video overflow-hidden rounded-xl border border-primary/30 shadow-lg shadow-primary/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <source src="/bg.mp4" type="video/mp4" />
                  </video>
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl font-bold text-center relative z-20"
                  >
                    CORE<span className="text-primary">LINE</span>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,61,0,0.05) 0%, rgba(0,0,0,0) 70%)',
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-gray-300">
              The core principles that drive everything we do in our quest to redefine gaming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible, embracing new technologies and creative approaches to deliver fresh gaming experiences.",
                icon: <motion.img 
                  src='/idea.gif' 
                  alt="Innovation icon"
                  className='w-28 h-28'
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              },
              {
                title: "Quality", 
                description: "We&apos;re committed to excellence in every aspect of our games, from stunning visuals and immersive sound to engaging gameplay and compelling narratives.",
                icon: <motion.img 
                  src='/HappyClients.gif'
                  alt="Quality icon" 
                  className='w-28 h-28'
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              },
              {
                title: "Community",
                description: "We believe in the power of connection, building strong communities where players can share experiences, compete, and collaborate.",
                icon: <motion.img 
                  src='/Deal.png'
                  alt="Community icon" 
                  className='w-28 h-28'
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />  
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-to-b from-black to-[#100500] p-8 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,61,0,0.05) 0%, rgba(0,0,0,0) 70%)',
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Meet the passionate creators, developers, and visionaries behind CORELINE
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & CEO",
                image: "/image11.png",
                bio: "Alex is a gaming industry veteran with over 15 years of experience in building innovative gaming experiences. He founded CORELINE with the vision of creating games that push boundaries.",
              },
              {
                name: "Jamie Chen",
                role: "Creative Director",
                image: "/image10.jpg",
                bio: "Jamie brings her artistic vision and creative leadership to every project. With a background in both traditional and digital art, she ensures our games have a unique visual identity.",
              },
              {
                name: "Sam Rodriguez",
                role: "Lead Developer",
                image: "/image9.jpg",
                bio: "Sam is a full-stack developer with expertise in game engine architecture. He leads our technical team in creating robust and scalable gaming solutions.",
              },
              {
                name: "Aniket Bisure",
                role: "Full Stack Developer",
                image: "/aniket.jpg",
                bio: "Taylor's passion for creating immersive worlds shows in every detail. Their expertise in 3D modeling and animation brings our game environments to life.",
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group h-[400px] [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of card */}
                  <div className="absolute inset-0 bg-black/30 rounded-xl overflow-hidden [backface-visibility:hidden]">
                    <div className="h-64 bg-gray-800 relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-primary">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-b from-primary/20 to-black/90 [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
                    <div className="mt-auto flex gap-3"> 
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,61,0,0.3) 0%, rgba(0,0,0,0) 70%)',
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
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 70%, rgba(255,61,0,0.2) 0%, rgba(0,0,0,0) 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,61,0,0.3)",
                  "0 0 20px rgba(255,61,0,0.5)",
                  "0 0 10px rgba(255,61,0,0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Join Our <span className="text-primary">Team</span>
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Are you passionate about gaming and innovation? We&apos;re always looking for talented individuals to help us shape the future of interactive entertainment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center gap-4"
            >
              <motion.button
                className="px-8 py-4 bg-primary text-white font-bold rounded-full text-lg shadow-lg shadow-primary/30 relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(255, 61, 0, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10">View Careers</span>
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent text-white font-bold rounded-full text-lg border border-primary/30 hover:border-primary/60 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 