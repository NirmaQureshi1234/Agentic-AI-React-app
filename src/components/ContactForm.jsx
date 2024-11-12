import React from 'react';

function ContactForm() {
  return (
    <section id="contact" className="p-12 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-indigo-400">Get in Touch with Agentic AI</h2>
        <p className="text-lg mb-8 text-gray-300 font-serif">
          Have questions about our AI solutions or want to learn more about how we can help you revolutionize your business?
          Drop us a message, and our team will get back to you with tailored insights and solutions.
        </p>
        
        {/* Contact Form */}
        <form className="max-w-2xl mx-auto space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-4 border-2 border-gray-600 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-4 border-2 border-gray-600 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <textarea
            placeholder="How can we help you? Tell us more about your needs."
            className="w-full p-4 border-2 border-gray-600 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full p-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Why Contact Us */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-400">Why Contact Us?</h3>
          <ul className="mt-4 space-y-3 text-lg text-gray-300 font-serif">
            <li>💡 Discuss your AI-powered business solutions.</li>
            <li>📊 Get real-time insights on AI trends and implementation.</li>
            <li>🚀 Explore how Agentic AI can scale your business with automation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
