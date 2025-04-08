'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ height: '50vh' }}>
        {/* Background Animation */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 0.6, 0.6] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
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
        
        {/* Content */}
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
              Contact <span className="text-primary">Us</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
                Get In <span className="text-primary">Touch</span>
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-black/50 p-3 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-black/50 p-3 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@coreline.games</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-black/50 p-3 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">123 Gaming Boulevard<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 md:mt-12">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
                  Connect With <span className="text-primary">Us</span>
                </h3>
                <div className="flex space-x-3 sm:space-x-4">
                  {['twitter', 'facebook', 'instagram', 'discord'].map((social, i) => (
                    <motion.a 
                      key={i}
                      href="#"
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/50 border border-gray-800 hover:border-primary transition-colors duration-300"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="text-base sm:text-lg">{
                        social === 'twitter' ? '𝕏' :
                        social === 'facebook' ? 'f' :
                        social === 'instagram' ? '📷' :
                        '💬'
                      }</div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-black/30 p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-800">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
                  Send Us a <span className="text-primary">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-1 md:mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-800 hover:border-primary focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-1 md:mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-800 hover:border-primary focus:outline-none focus:border-primary transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="subject" className="block text-gray-400 mb-1 md:mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-800 hover:border-primary focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="message" className="block text-gray-400 mb-1 md:mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-900 border border-gray-800 hover:border-primary focus:outline-none focus:border-primary transition-colors duration-300"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 bg-primary hover:bg-primary-light text-white font-medium text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
              Find <span className="text-primary">Us</span>
            </h2>
            <div className="p-3 md:p-4 flex border border-gray-800 rounded-xl mb-4 md:mb-6">
              <div className="mr-3 md:mr-4 text-primary text-xl md:text-2xl">📍</div>
              <div className="text-left">
                <h3 className="font-bold text-base md:text-lg mb-1">Visit Us</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-64 sm:h-80 md:h-96 bg-gray-800 rounded-xl overflow-hidden relative"
          >
            {/* This would be replaced with an actual map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.281201342696!2d73.94225147513293!3d18.56135696792722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c390adb64e07%3A0x7a3379b70dfb3894!2sCITY%20VISTA%20-%20Kolte%20Patil%20Developers!5e0!3m2!1sen!2sin!4v1744003155015!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Company Location Map"
                />
              </div>
            </div>
            
            {/* Animated Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 rounded-xl"
              animate={{ 
                boxShadow: ["0 0 0px rgba(37,99,235,0.3)", "0 0 15px rgba(37,99,235,0.6)", "0 0 0px rgba(37,99,235,0.3)"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What platforms do your games support?",
                answer: "Our games are designed for multiple platforms including PC, PlayStation, Xbox, and Nintendo Switch. Some of our mobile titles are also available on iOS and Android devices."
              },
              {
                question: "How do I get technical support?",
                answer: "For technical support, please use the contact form above and select 'Technical Support' as the subject. Provide as much detail as possible about the issue you&apos;re experiencing, including your system specifications and steps to reproduce the problem."
              },
              {
                question: "Do you offer internships or job opportunities?",
                answer: "Yes! We&apos;re always looking for talented individuals to join our team. Check out our Careers page for current openings, or reach out through the contact form for internship opportunities."
              },
              {
                question: "How can I collaborate with CORELINE?",
                answer: "We&apos;re open to partnership opportunities with other studios, creators, and brands that align with our vision. Please contact us with details about your proposal, and our partnerships team will get back to you."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mb-4 md:mb-6"
              >
                <motion.div 
                  className="bg-black p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800"
                  whileHover={{ borderColor: "rgba(37, 99, 235, 0.3)" }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2 md:mb-4">{faq.question}</h3>
                  <p className="text-sm md:text-base text-gray-400">{faq.answer}</p>
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