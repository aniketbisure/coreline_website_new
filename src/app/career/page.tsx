'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CareerPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const positions = [
    {
      title: 'Marketing Executive',
      description: 'Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.',
      duties: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex',
        'Rent a Picnic Shelter'
      ],
      qualifications: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex'
      ]
    },
    {
      title: 'HR Manager',
      description: 'Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.',
      duties: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex',
        'Rent a Picnic Shelter'
      ],
      qualifications: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex'
      ]
    },
    {
      title: 'Account Manager',
      description: 'Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.',
      duties: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex',
        'Rent a Picnic Shelter'
      ],
      qualifications: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex'
      ]
    },
    {
      title: 'Financial Advisor',
      description: 'Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa.',
      duties: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex',
        'Rent a Picnic Shelter'
      ],
      qualifications: [
        'Holiday Trash & Recycling',
        'Things To Do In Govarnex'
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ height: '25vh' }}>
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
              Career at <span className="text-primary">CoreLine</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Join our team of innovators and shape the future of technology
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Why Work With Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Work With <span className="text-primary">Us?</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            At CoreLine Solutions, we believe that our people are our biggest strength. We're always on the lookout for bright, innovative, and driven individuals to be part of our dynamic team.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            {
              title: 'Innovative Environment',
              description: 'Work on challenging projects, pushing the limits of your creativity and keeping you at the edge of technology.'
            },
            {
              title: 'Growth Opportunities',
              description: 'We invest in training, mentorship, and career advancement paths that boost professional growth.'
            },
            {
              title: 'Collaborative Culture',
              description: 'Join a team where collaboration, creativity, and open communication are invited. Diversity of thoughts is important to us.'
            },
            {
              title: 'Work-Life Balance',
              description: 'We understand the importance of balance, offering flexible working hours and a supportive environment.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Available Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Available <span className="text-primary">Positions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors duration-300 group"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">{position.title}</h3>
                <p className="text-gray-400 mb-4">{position.description}</p>
                
                <h4 className="text-lg font-semibold mb-2 text-white">Duties and Responsibilities:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-400">
                  {position.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold mb-2 text-white">Qualifications:</h4>
                <ul className="list-disc list-inside mb-6 text-gray-400">
                  {position.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>

                <motion.button
                  className="w-full py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-lg transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Make a <span className="text-primary">Difference?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
            Apply today and become part of the nucleus where innovation meets opportunity. Let's change businesses together and drive success with technology.
          </p>
          <motion.button
            className="px-8 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPage; 