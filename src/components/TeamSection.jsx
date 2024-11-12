import React from 'react';
import { FaBrain, FaChartLine, FaProjectDiagram } from 'react-icons/fa';
import ziakhan from '../assets/images/ziakhan.jpg';
import ameen from '../assets/images/ameenalam.jpeg';
import qasim from '../assets/images/qasim.jpeg';

function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10">Meet Our Team</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300 font-serif">
          At <span className="font-bold text-indigo-400">Agentic AI</span>, we believe in the power of collaboration. Our team is a dynamic mix of AI leaders, data scientists, and innovators dedicated to shaping the future of AI solutions. Together, we create cutting-edge, scalable solutions that drive positive change across industries.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Team Member: Zia Khan */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <img
              src={ziakhan}
              alt="Zia Khan"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="text-center">
              <FaBrain className="text-indigo-400 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Zia Khan</h3>
              <p className="text-gray-300 font-medium">Agentic AI Developer | Innovation & Business Transformation Leader</p>
              <p className="text-gray-400 mt-4 leading-relaxed font-serif">
                Zia Khan is a visionary in AI development, driving innovation and spearheading business transformation through cutting-edge AI solutions.
              </p>
            </div>
          </div>

          {/* Team Member: Ameen Alam */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <img
              src={ameen}
              alt="Ameen Alam"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="text-center">
              <FaChartLine className="text-indigo-400 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Ameen Alam</h3>
              <p className="text-gray-300 font-medium">Global AI & Cloud Education Leader</p>
              <p className="text-gray-400 mt-4 leading-relaxed font-serif">
                Ameen Alam leads our educational initiatives, empowering the next generation of AI and cloud professionals through world-class learning and mentorship.
              </p>
            </div>
          </div>

          {/* Team Member: Muhammad Qasim */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <img
              src={qasim}
              alt="Muhammad Qasim"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="text-center">
              <FaProjectDiagram className="text-indigo-400 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">Muhammad Qasim</h3>
              <p className="text-gray-300 font-medium">Chief Data Scientist & Chief AI Officer</p>
              <p className="text-gray-400 mt-4 leading-relaxed font-serif">
                Muhammad Qasim is at the helm of our data science and AI strategies, utilizing vast networks and expertise to push the boundaries of AI innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-indigo-400 mb-8">How We Work at Agentic AI</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300 font-serif">
            Our team operates with a collaborative, agile approach that blends creativity, technical expertise, and a passion for innovation. We bring together cross-functional teams from data science, engineering, and design to develop AI-powered solutions that are both practical and scalable. At <span className="font-bold text-indigo-400">Agentic AI</span>, we not only solve problems but also inspire change through transformative technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
