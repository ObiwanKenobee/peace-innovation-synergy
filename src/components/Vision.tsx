
import { useState, useEffect } from 'react';

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('vision-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section id="vision" className="section-padding relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-vite-white to-vite-gray opacity-70"></div>
      
      <div id="vision-section" className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side: Vision Statement */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Our Vision</h2>
            <p className="text-vite-slate text-lg mb-6 leading-relaxed">
              We envision a world where nations compete through innovation rather than conflict, where technology serves as a unifying force rather than a dividing one.
            </p>
            <p className="text-vite-slate text-lg mb-8 leading-relaxed">
              Through the VITE Platform, we're building a future where peace is not just an ideal, but an industry - with economic incentives, technological infrastructure, and global cooperation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="button-primary">Join the Vision</button>
              <button className="button-secondary">Read Whitepaper</button>
            </div>
          </div>
          
          {/* Right side: Stats/Numbers */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-card rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">100%</div>
                  <p className="text-vite-slate">Transparency</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">0</div>
                  <p className="text-vite-slate">Transaction Fees</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    <span className="text-gradient">3B+</span>
                  </div>
                  <p className="text-vite-slate">Potential Users</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">∞</div>
                  <p className="text-vite-slate">Innovation Potential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
