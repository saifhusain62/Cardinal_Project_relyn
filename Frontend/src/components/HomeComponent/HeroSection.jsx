import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BgImage from '../../assets/hero1.png'
import Mouse from '../../assets/mouse.png'

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section 
      className="relative min-h-[120vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center mt-[-50px]"
      style={{
        backgroundImage: `url(${BgImage})`,
        fontFamily: 'Raleway, sans-serif'
      }}
    >
      {/* Linear Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, #24384999, #0A2540)'
        }}
      ></div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Blurry Pill Badge */}
        <div 
          className="inline-block mb-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div 
            className="backdrop-blur-md bg-white/10 rounded-full px-6 py-2 flex items-center gap-3"
            style={{ border: '1px solid #FFBFB0' }}
          >
            <span className="font-semibold tracking-wider text-sm md:text-base" style={{ color: '#FFBFB0' }}>
              INTEGRITY
            </span>
            <span className="text-sm md:text-base" style={{ color: '#FFBFB0' }}>
              •
            </span>
            <span className="font-semibold tracking-wider text-sm md:text-base" style={{ color: '#FFBFB0' }}>
              SECURITY
            </span>
            <span className="text-sm md:text-base" style={{ color: '#FFBFB0' }}>
              •
            </span>
            <span className="font-semibold tracking-wider text-sm md:text-base" style={{ color: '#FFBFB0' }}>
              EXCELLENCE
            </span>
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 
          className="text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Mobile Version - With Gradient Text */}
          <span 
            className="md:hidden"
            style={{
              background: 'linear-gradient(to right, #FFFFFF, #FF7656, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Expert Solution
            <br />
            for Every House Problem
          </span>
          
          {/* Desktop Version - Original with styled box */}
          <span className="hidden md:inline text-white">
            Expert Solution
            <br />
            <span className="relative inline-block">
              <span 
                className="absolute bg-[#FF7656] px-7 py-4 rounded-xl text-xl md:text-2xl font-bold text-white z-0"
                style={{
                  top: '-35px',
                  left: '-40px',
                  transform: 'rotate(-20deg)',
                  transformOrigin: 'center'
                }}
                data-aos="rotate-in"
                data-aos-delay="600"
              >
                for
              </span>
              <span 
                className="relative z-10"
                style={{
                  background: 'linear-gradient(to right, #FFFFFF, #FF7656, #FFFFFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Every House Problem
              </span>
            </span>
          </span>
        </h1>
        
        {/* Description Text */}
        <p 
          className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Our open, positive, and proactive approach helps us find ways to align 
          your work environment with the culture.
        </p>
        
        {/* Buttons Container */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {/* Book Now Button */}
          <button 
            className="group relative px-8 py-3 bg-[#FF7656] text-white font-semibold rounded-lg border-2 border-orange-500 transition-all duration-300 hover:bg-transparent hover:border-white hover:text-white min-w-[180px]"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            Book Now
          </button>
          
          {/* Explore Services Button */}
          <button 
            className="group relative px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white transition-all duration-300 hover:bg-[#FF7656] hover:border-[#FF7656] min-w-[180px]"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            Explore Services
          </button>
        </div>
      </div>
      
      {/* Optional: Scroll Down Indicator */}
      <div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
       <img src={Mouse} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;