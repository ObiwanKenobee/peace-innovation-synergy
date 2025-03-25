
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-vite-white text-vite-slate">
      <Navbar />
      <Hero />
      <Features />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
