
import { ExternalLink, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-gradient mr-1">VITE</span>
              <span className="text-sm font-light text-vite-slate">Platform</span>
            </div>
            <p className="text-vite-slate/70 text-sm mb-6">
              A decentralized, high-speed blockchain platform rewarding nations, organizations, and individuals for fostering peace and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-vite-slate/70 hover:text-vite-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-vite-slate/70 hover:text-vite-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-vite-slate/70 hover:text-vite-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-vite-slate">Platform</h3>
            <ul className="space-y-3">
              <li>
                <a href="/dashboard" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/marketplace" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Peace Credits
                </a>
              </li>
              <li>
                <a href="/governance" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Governance DAO
                </a>
              </li>
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Technology
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-vite-slate">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors flex items-center">
                  <span>GitHub</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-vite-slate">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-vite-slate/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} VITE Platform. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-vite-slate/70 hover:text-vite-blue text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
