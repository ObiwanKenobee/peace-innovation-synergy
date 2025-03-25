
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-vite-offWhite via-vite-white to-vite-gray -z-10"></div>
      
      {/* Animated dots/particles (purely decorative) */}
      <div className="absolute inset-0 -z-5 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-vite-blue animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-vite-indigo animate-pulse-soft animate-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-vite-teal animate-pulse-soft animate-delay-300"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-vite-lightBlue animate-pulse-soft animate-delay-100"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 text-center">
        <div 
          className={`transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm text-vite-blue font-medium text-sm mb-6">
            Reimagining Global Peace & Prosperity
          </span>
        </div>
        
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 delay-100 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-gradient">VITE Platform:</span>
          <br />
          <span className="text-vite-slate">The Industry of Peace</span>
        </h1>
        
        <p 
          className={`text-vite-slate text-lg md:text-xl max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-200 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          A decentralized, high-speed blockchain platform rewarding nations, organizations, and individuals for fostering peace and innovation.
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="button-primary">
            Discover the Platform
          </button>
          <button className="button-secondary">
            View Technology
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a href="#features" aria-label="Scroll to features">
          <ArrowDown className="text-vite-slate" size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
