
import { useState, useEffect } from 'react';
import { Award, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  peace_credits: number;
  image: string;
  status: string;
  progress: number;
  contributors: number;
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  // Generate category badge color
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'diplomacy':
        return 'bg-blue-100 text-blue-700';
      case 'innovation':
        return 'bg-purple-100 text-purple-700';
      case 'environment':
        return 'bg-green-100 text-green-700';
      case 'education':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  return (
    <div 
      className={`glass-card rounded-xl overflow-hidden transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-vite-slate/80 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Award className="text-vite-blue mr-2" size={18} />
            <span className="font-semibold">{project.peace_credits.toLocaleString()} PC</span>
          </div>
          <div className="flex items-center text-vite-slate/70 text-sm">
            <Users className="mr-1" size={16} />
            <span>{project.contributors}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{project.progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-vite-blue to-vite-indigo"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        
        <button className="w-full py-2 bg-gradient-to-r from-vite-blue to-vite-indigo text-white rounded-lg font-medium hover:opacity-90 transition-all">
          Contribute Peace Credits
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
