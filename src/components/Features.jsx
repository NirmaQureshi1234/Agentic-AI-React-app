import React from 'react';
import { motion } from 'framer-motion';
import background from '../assets/images/bachground.jpg'
import robort from '../assets/images/robort.png' 
import intregation from '../assets/images/intregation.jpeg'
function FeaturesSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-20" id="features">
      <div className="container mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-indigo-400 mb-10"
        >
          Our Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
          >
            <img 
              src={background} 
              alt="AI-Powered Insights" 
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">AI-Powered Insights</h3>
            <p className="text-gray-300 font-serif">
              Get detailed, AI-powered insights and predictions tailored to your needs.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
          >
            <img 
              src={robort}
              alt="Real-Time Analytics" 
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Real-Time Analytics</h3>
            <p className="text-gray-300 font-serif">
              Analyze data in real-time, helping you make informed decisions quickly.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
          >
            <img 
              src={intregation}
              alt="Seamless Integration" 
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Seamless Integration</h3>
            <p className="text-gray-300 font-serif">
              Easily integrate with your existing systems and processes without any hassle.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
