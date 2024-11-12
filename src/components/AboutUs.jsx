import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <section id="about" className="p-10 bg-gradient-to-br from-gray-800 to-black text-gray-200">
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
        >
          About Agentic AI
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto text-lg mb-6 text-gray-300 font-serif"
        >
          Agentic AI is not just another tech company – it's a revolution in human-AI collaboration. Our mission is to empower individuals and organizations by seamlessly integrating the power of artificial intelligence with the creativity, empathy, and intelligence of human beings.
        </motion.p>

        {/* Extended Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-lg text-gray-400 mb-6 leading-relaxed font-serif"
        >
          <p>
            At Agentic AI, we believe that the future lies in the symbiotic relationship between humans and machines. Our team of passionate professionals is dedicated to creating innovative solutions that leverage cutting-edge AI technologies to solve real-world problems.
          </p>
          <p className="mt-4 font-serif">
            We specialize in developing AI-driven tools that enhance decision-making, automate repetitive tasks, and enable smarter business strategies. From data analysis and natural language processing to machine learning and computer vision, our solutions are designed to push the boundaries of what’s possible with AI.
          </p>
          <p className="mt-4 font-serif">
            We are driven by a core set of values: innovation, collaboration, and ethical AI. Every solution we create is designed with integrity, ensuring that our technology serves humanity, not the other way around.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          className="mt-6"
        >
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            Join Us on Our Journey
          </h3>
          <p className="mt-2 text-gray-300 max-w-xl mx-auto font-serif">
            We are always looking for passionate individuals and organizations to collaborate with us in advancing the future of AI. Whether you’re an innovator, a creator, or a thinker, Agentic AI welcomes those who share our vision for a smarter, more connected world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
