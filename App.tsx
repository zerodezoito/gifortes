
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import CourseOutline from './components/CourseOutline';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg font-sans text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <CourseOutline />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
