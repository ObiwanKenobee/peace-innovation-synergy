
import { useState, useEffect } from 'react';
import { User, Award, Star, Clock, BarChart2, Calendar, MapPin, Globe, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Sample user data
  const userData = {
    name: 'Alex Johnson',
    role: 'Peace Ambassador',
    location: 'Toronto, Canada',
    joined: 'March 2023',
    bio: 'Working on international diplomacy initiatives with a focus on sustainable development and renewable energy cooperation agreements.',
    peace_credits: 45250,
    diplomacy_score: 785,
    projects_contributed: 14,
    reputation: 92,
  };
  
  // Sample activity data
  const activities = [
    { 
      type: 'contribution', 
      title: 'Contributed to Clean Ocean Initiative', 
      amount: '2,500 PC', 
      date: '3 days ago' 
    },
    { 
      type: 'reward', 
      title: 'Earned for Diplomatic Mediation', 
      amount: '15,000 PC', 
      date: '1 week ago' 
    },
    { 
      type: 'governance', 
      title: 'Voted on AI Defense Proposal', 
      action: 'Voted For', 
      date: '2 weeks ago' 
    },
    { 
      type: 'contribution', 
      title: 'Contributed to Renewable Energy Grid', 
      amount: '5,000 PC', 
      date: '1 month ago' 
    },
  ];
  
  // Sample credentials data
  const credentials = [
    {
      title: 'Certified Conflict Mediator',
      issuer: 'International Peace Institute',
      date: 'May 2023',
      verified: true
    },
    {
      title: 'Energy Policy Expert',
      issuer: 'Global Sustainable Energy Forum',
      date: 'January 2023',
      verified: true
    },
    {
      title: 'Distinguished Peace Contributor',
      issuer: 'VITE Platform DAO',
      date: 'April 2023',
      verified: true
    }
  ];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-vite-white">
      <Navbar />
      
      <div className="pt-20 pb-12 px-6">
        <div className="container mx-auto">
          {/* Profile Header */}
          <div 
            className={`glass-card rounded-xl p-8 mb-10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-vite-blue to-vite-indigo flex items-center justify-center text-white text-3xl font-bold mb-6 md:mb-0 md:mr-8">
                {userData.name.charAt(0)}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
                <div className="flex flex-col md:flex-row md:items-center mb-4 text-vite-slate/80 text-sm">
                  <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                    <User size={14} className="mr-1" />
                    <span>{userData.role}</span>
                  </div>
                  <span className="hidden md:inline mx-2">•</span>
                  <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                    <MapPin size={14} className="mr-1" />
                    <span>{userData.location}</span>
                  </div>
                  <span className="hidden md:inline mx-2">•</span>
                  <div className="flex items-center justify-center md:justify-start">
                    <Calendar size={14} className="mr-1" />
                    <span>Joined {userData.joined}</span>
                  </div>
                </div>
                
                <p className="text-vite-slate mb-6">{userData.bio}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-vite-blue">{userData.peace_credits.toLocaleString()}</div>
                    <div className="text-xs text-vite-slate/70">Peace Credits</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-vite-blue">{userData.diplomacy_score}</div>
                    <div className="text-xs text-vite-slate/70">Diplomacy Score</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-vite-blue">{userData.projects_contributed}</div>
                    <div className="text-xs text-vite-slate/70">Projects</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-vite-blue">{userData.reputation}/100</div>
                    <div className="text-xs text-vite-slate/70">Reputation</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                <Button className="mr-2">Edit Profile</Button>
                <Button variant="outline">Share Profile</Button>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <div 
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Tabs defaultValue="activity">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
                <div className="space-y-6">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <div className="rounded-full p-2 mr-4">
                        {activity.type === 'contribution' && (
                          <Globe className="text-green-500" size={24} />
                        )}
                        {activity.type === 'reward' && (
                          <Award className="text-amber-500" size={24} />
                        )}
                        {activity.type === 'governance' && (
                          <Shield className="text-blue-500" size={24} />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-vite-slate">{activity.title}</h3>
                        {activity.amount && (
                          <p className="text-green-600 text-sm font-medium">{activity.amount}</p>
                        )}
                        {activity.action && (
                          <p className="text-blue-600 text-sm font-medium">{activity.action}</p>
                        )}
                      </div>
                      
                      <div className="text-vite-slate/60 text-sm">{activity.date}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">View All Activity</Button>
              </TabsContent>
              
              <TabsContent value="credentials" className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Verified Credentials</h2>
                <div className="space-y-6">
                  {credentials.map((credential, index) => (
                    <div key={index} className="bg-white/50 rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-vite-slate">{credential.title}</h3>
                          <p className="text-vite-slate/70 text-sm">{credential.issuer}</p>
                          <p className="text-vite-slate/60 text-xs mt-1">Issued {credential.date}</p>
                        </div>
                        {credential.verified && (
                          <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs">
                            <Star size={14} className="mr-1" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">Add Credential</Button>
              </TabsContent>
              
              <TabsContent value="projects" className="glass-card rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                    <h3 className="font-medium text-vite-slate mb-2">Clean Ocean Initiative</h3>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Environment</span>
                      <span className="text-vite-slate/60 text-sm">Contributor</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-gradient-to-r from-vite-blue to-vite-indigo" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-vite-slate/70">
                      <span>Progress: 65%</span>
                      <span>Contributed: 2,500 PC</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4 shadow-sm">
                    <h3 className="font-medium text-vite-slate mb-2">Renewable Energy Grid</h3>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Innovation</span>
                      <span className="text-vite-slate/60 text-sm">Contributor</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-gradient-to-r from-vite-blue to-vite-indigo" style={{ width: '78%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-vite-slate/70">
                      <span>Progress: 78%</span>
                      <span>Contributed: 5,000 PC</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-6">View All Projects</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
