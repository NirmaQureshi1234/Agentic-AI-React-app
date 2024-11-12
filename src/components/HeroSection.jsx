import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa'; 

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Background Circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 opacity-20"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center z-10 px-5 md:px-0"
      >
        {/* Hero Heading Animation */}
        <motion.h1
          className="text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
          initial={{ textShadow: "0px 0px 5px rgba(255,255,255,0.5)" }}
          animate={{ textShadow: "0px 0px 20px rgba(255,255,255,0.8)" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Agentic AI
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          className="mt-4 text-2xl font-serif text-gray-300 "
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          Unleashing the Power of Artificial Intelligence
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#about"
          className="mt-8 inline-flex items-center justify-center font-serif px-8 py-4   text-white font-semibold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Learn More
          <FaArrowRight className="ml-3 text-white text-xl" /> {/* Add an arrow icon */}
        </motion.a>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
            animate={{
              y: [0, -20, 20, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
