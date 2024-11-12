// // src/pages/HomePage.jsx
// import React from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import AboutUs from '../components/AboutUs';
// import Features from '../components/Features';
// import AISolutions from './components/AISolutions';
// import TeamSection from '../components/TeamSection';
// import ContactForm from '../components/ContactForm';
// import Footer from '../components/Footer';
 

// function HomePage() {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <AboutUs />
//       <Features />
//       <AISolutions />
//       <TeamSection />
//       <ContactForm />
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;


 
 





// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import AISolutions from '../components/AiSolution';  // Corrected import
import TeamSection from '../components/TeamSection'; // Corrected import
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <AISolutions />  {/* Corrected component */}
      <TeamSection />  {/* Corrected component */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomePage;

