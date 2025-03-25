
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Award, TrendingUp, Users, Globe, Shield, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Sample data for the charts
  const peaceCreditsData = [
    { month: 'Jan', credits: 1200 },
    { month: 'Feb', credits: 1900 },
    { month: 'Mar', credits: 3000 },
    { month: 'Apr', credits: 2780 },
    { month: 'May', credits: 4890 },
    { month: 'Jun', credits: 5390 },
    { month: 'Jul', credits: 7490 },
  ];
  
  const nationRankings = [
    { name: 'Norway', score: 98, change: '+2' },
    { name: 'New Zealand', score: 96, change: '+1' },
    { name: 'Finland', score: 95, change: '-1' },
    { name: 'Denmark', score: 94, change: '+3' },
    { name: 'Switzerland', score: 93, change: '+1' },
  ];
  
  const diplomaticEvents = [
    { title: 'Global Climate Summit', date: '2023-07-15', description: 'International cooperation on climate change mitigation' },
    { title: 'Regional Peace Accord', date: '2023-06-30', description: 'Successful mediation in border dispute' },
    { title: 'Medical Research Breakthrough', date: '2023-06-10', description: 'Open-source vaccine development shared globally' },
  ];
  
  const statsData = [
    { title: 'Peace Credits Generated', value: '15.8M', icon: Award, color: 'from-blue-400 to-blue-600' },
    { title: 'Global Peace Index', value: '+12.5%', icon: TrendingUp, color: 'from-green-400 to-green-600' },
    { title: 'Active Nations', value: '143', icon: Globe, color: 'from-purple-400 to-purple-600' },
    { title: 'Diplomatic Events', value: '287', icon: Users, color: 'from-amber-400 to-amber-600' },
  ];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-vite-white">
      <Navbar />
      
      <div className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Peace Dashboard</h1>
            <p className="text-vite-slate/80">Track global peace initiatives and your Peace Credits</p>
          </div>
          
          {/* Stats Overview */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {statsData.map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-lg mb-4 bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1">{stat.value}</h3>
                <p className="text-vite-slate/70 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>
          
          {/* Peace Credits Chart */}
          <div 
            className={`glass-card rounded-xl p-6 mb-10 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">Peace Credits Earned</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={peaceCreditsData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="credits" 
                    name="Peace Credits" 
                    stroke="#6366F1" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Lower Section - Nation Rankings and Diplomatic Events */}
          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Nation Rankings */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Top Nations by Peace Contribution</h2>
              <div className="space-y-4">
                {nationRankings.map((nation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-vite-blue to-vite-indigo text-white font-bold">
                        {index + 1}
                      </div>
                      <span className="ml-3 font-medium">{nation.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">{nation.score}</span>
                      <span className={`ml-2 text-xs ${
                        nation.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {nation.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-vite-blue text-sm font-medium">View Full Rankings →</button>
            </div>
            
            {/* Diplomatic Events */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Diplomatic Events</h2>
              <div className="space-y-6">
                {diplomaticEvents.map((event, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium text-vite-slate">{event.title}</h3>
                    <p className="text-vite-slate/70 text-sm mb-2">{event.description}</p>
                    <span className="text-xs text-vite-slate/60">{event.date}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-vite-blue text-sm font-medium">View All Events →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
