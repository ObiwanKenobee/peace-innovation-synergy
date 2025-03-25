
import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`glass-card rounded-2xl p-8 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vite-blue to-vite-indigo flex items-center justify-center mb-6">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-vite-slate">{title}</h3>
      <p className="text-vite-slate/80 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
