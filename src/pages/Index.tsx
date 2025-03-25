
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Vision from '@/components/Vision';

const Index = () => {
  return (
    <div className="min-h-screen bg-vite-white text-vite-slate">
      <Navbar />
      <Hero />
      <Features />
      <Vision />
      
      {/* Footer - simple version for now */}
      <footer className="bg-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-gradient mr-1">VITE</span>
            <span className="text-sm font-light text-vite-slate">Platform</span>
          </div>
          <p className="text-vite-slate/70 text-sm">
            © {new Date().getFullYear()} VITE Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
