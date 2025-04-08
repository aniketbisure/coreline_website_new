import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Game data
const games = [
  {
    id: 1,
    title: "Cyber Nexus",
    category: "Action RPG",
    imageUrl: "/image.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Ethereal Legends",
    category: "MMORPG",
    imageUrl: "/image2.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Velocity Rush",
    category: "Racing",
    imageUrl: "/image3.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Shadow Protocol",
    category: "Stealth",
    imageUrl: "/image4.jpg",
    rating: 4.9,
  },
];

const FeaturedGames = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="py-20 bg-black" id="featured-games">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Games</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Discover the most popular and exciting games from our collection, hand-picked for the ultimate gaming experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              variants={itemVariants}
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
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                  HOT
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-transparent border-2 border-primary text-white font-bold rounded-full transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Games
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedGames; 