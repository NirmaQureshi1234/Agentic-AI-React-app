import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaBrain, FaShieldAlt } from 'react-icons/fa';

function AISolutions() {
  return (
    <section id="aisolutions" className="p-10 bg-gray-900 text-white">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-4 text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI Solutions
      </motion.h2>

      {/* Section Description */}
      <motion.p
        className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Agentic AI offers a range of <span className="text-indigo-400 font-serif">AI-powered solutions</span>
        that help businesses and individuals enhance <span className="text-indigo-400 font-semibold">productivity</span>,
        streamline operations, and leverage the power of AI to innovate in diverse industries.
      </motion.p>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-4xl mx-auto">
        {/* Automation Solution */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <FaRobot className="text-6xl text-indigo-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Automation</h3>
          <p className="text-gray-400 font-serif">
            Empower your workflow with intelligent automation tools that increase efficiency and accuracy.
          </p>
        </motion.div>

        {/* Data Insights Solution */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <FaChartLine className="text-6xl text-indigo-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Data Insights</h3>
          <p className="text-gray-400 font-serif">
            Gain valuable insights with advanced data analytics powered by cutting-edge AI technology.
          </p>
        </motion.div>

        {/* Machine Learning Solution */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <FaBrain className="text-6xl text-indigo-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Machine Learning</h3>
          <p className="text-gray-400 font-serif">
            Implement custom machine learning solutions tailored to your business needs and goals.
          </p>
        </motion.div>

        {/* Security Solution */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <FaShieldAlt className="text-6xl text-indigo-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Security</h3>
          <p className="text-gray-400 font-serif">
            Enhance security with AI-driven solutions that detect and prevent potential threats in real-time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AISolutions;
