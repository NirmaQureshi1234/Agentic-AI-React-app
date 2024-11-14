import { FaLinkedin, FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import additional social media icons
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Footer Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 text-lg font-semibold"
        >
          &copy; {new Date().getFullYear()} Agentic AI. Innovating the Future of Artificial Intelligence.
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center space-x-6 mb-6"
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="w-7 h-7" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-7 h-7" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="w-7 h-7" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-7 h-7" />
          </a>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-sm space-x-4"
        >
          <a href="#privacy-policy" className="hover:text-indigo-400 font-serif">Privacy Policy</a>
          <a href="#terms-of-service" className="hover:text-indigo-400 font-serif">Terms of Service</a>
          <a href="#contact-us" className="hover:text-indigo-400 font-serif">Contact Us</a>
           <h1 className='font-serif'>MADE BY NIRMA QURESHI FRONTEND DEVELOPER💙🤍</h1>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
