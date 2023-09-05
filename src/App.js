import React from 'react';
import { useAnimateCategoryNamesOnScroll } from './components/useAnimateCategoryNamesOnScroll';  
import Navigation from './components/Navigation';  // Import the Navigation component
import Hero from './components/Hero';  // Import the Hero component
import Skills from './components/Skills'; // Import the Skills component
import About from './components/About'; // Import the About component
import ContactUs from './components/ContactUs'; // Import the ContactUs component
import Codespiration from './components/Codespiration'; // Import the About component
import Footer from './components/Footer'; // Import the About component
import './App.css';  

function App() {
  
  useAnimateCategoryNamesOnScroll();  // Use the custom hook
  
  return (
    <div className="App">
      <Navigation />  {/* Include the Navigation component */}
      <Hero />  {/* Use the Hero component */}
      <Skills /> {/* Include the Skills component here */}
      <About />
      <ContactUs />
      <Codespiration />
      <Footer />
    </div>
  );
}

export default App;
