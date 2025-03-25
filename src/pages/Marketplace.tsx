
import { useState, useEffect } from 'react';
import { Search, Filter, Award, Users, FileText, Zap, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

const Marketplace = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'diplomacy', name: 'Diplomacy', icon: Users },
    { id: 'innovation', name: 'Innovation', icon: Zap },
    { id: 'environment', name: 'Environment', icon: Leaf },
    { id: 'education', name: 'Education', icon: FileText },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Clean Ocean Initiative',
      description: 'Global effort to remove 5 million tons of plastic from oceans through innovative cleanup technologies.',
      category: 'environment',
      peace_credits: 250000,
      image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      status: 'active',
      progress: 65,
      contributors: 128
    },
    {
      id: 2,
      title: 'AI Diplomatic Assistant',
      description: 'Open-source AI platform helping nations resolve long-standing border disputes with data-driven suggestions.',
      category: 'diplomacy',
      peace_credits: 180000,
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      status: 'active',
      progress: 42,
      contributors: 57
    },
    {
      id: 3,
      title: 'Renewable Energy Grid',
      description: 'Building a cross-border renewable energy sharing network to reduce resource competition.',
      category: 'innovation',
      peace_credits: 350000,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      status: 'active',
      progress: 78,
      contributors: 249
    },
    {
      id: 4,
      title: 'Global Education Platform',
      description: 'Free access educational resources focused on conflict resolution and peace studies for all age groups.',
      category: 'education',
      peace_credits: 120000,
      image: 'https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      status: 'active',
      progress: 35,
      contributors: 92
    },
    {
      id: 5,
      title: 'Border Crisis Mediation',
      description: 'Emergency diplomatic intervention to prevent escalation of conflicts in disputed territories.',
      category: 'diplomacy',
      peace_credits: 280000,
      image: 'https://images.unsplash.com/photo-1602911430083-1ba1b3388686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      status: 'active',
      progress: 90,
      contributors: 38
    },
    {
      id: 6,
      title: 'Sustainable Farming Techniques',
      description: 'Research and implementation of drought-resistant agricultural methods for food security.',
      category: 'environment',
      peace_credits: 150000,
      image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      status: 'active',
      progress: 60,
      contributors: 187
    },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-vite-white">
      <Navbar />
      
      <div className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Peace Credits Marketplace</h1>
            <p className="text-vite-slate/80">Discover and contribute to global peace initiatives</p>
          </div>
          
          {/* Search and Filter Section */}
          <div 
            className={`flex flex-col md:flex-row justify-between items-center mb-10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full md:w-2/5 mb-6 md:mb-0">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="text-vite-slate/50" size={18} />
              </div>
              <input 
                type="text" 
                className="bg-white w-full py-3 pl-10 pr-4 rounded-lg border border-gray-100 focus:ring-2 focus:ring-vite-blue focus:border-transparent outline-none transition-all"
                placeholder="Search for projects..." 
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-vite-slate text-sm mr-2">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-lg text-sm transition-all ${
                      activeCategory === category.id
                        ? 'bg-vite-blue text-white'
                        : 'bg-white text-vite-slate hover:bg-vite-gray'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Your Peace Credits Banner */}
          <div 
            className={`glass-card rounded-xl p-6 bg-gradient-to-r from-vite-blue to-vite-indigo mb-10 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white mb-6 md:mb-0">
                <div className="flex items-center mb-3">
                  <Award className="mr-3" size={28} />
                  <h2 className="text-2xl font-bold">Your Peace Credits</h2>
                </div>
                <p className="opacity-90 mb-2">Available for contribution to projects</p>
                <div className="text-4xl font-bold">45,250 PC</div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <button className="px-6 py-3 bg-white text-vite-blue font-medium rounded-lg hover:bg-opacity-90 transition-all">
                  Transfer Credits
                </button>
                <button className="px-6 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-opacity-30 transition-all">
                  Earn More Credits
                </button>
              </div>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
