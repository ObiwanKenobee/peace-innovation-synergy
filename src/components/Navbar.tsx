
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient mr-1">VITE</span>
          <span className="text-sm font-light text-vite-slate">Platform</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/marketplace" className="nav-link">Marketplace</Link>
          <Link to="/governance" className="nav-link">Governance</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <button className="button-primary">Join the Movement</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-vite-slate"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <Link 
              to="/dashboard" 
              className="nav-link py-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/marketplace" 
              className="nav-link py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/governance" 
              className="nav-link py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Governance
            </Link>
            <Link 
              to="/profile" 
              className="nav-link py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <button 
              className="button-primary w-full flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Movement
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
