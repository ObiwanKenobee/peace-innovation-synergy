
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Vote, Users, Landmark, AlertCircle, Check, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Governance = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTab, setSelectedTab] = useState('active');
  
  // Sample data for proposals
  const activeProposals = [
    { 
      id: 'DAO-2023-06',
      title: 'Global Plastic Reduction Initiative',
      description: 'Proposal to allocate 500,000 Peace Credits to incentivize nations to reduce plastic production by 50% within 5 years.',
      votes: { for: 67, against: 23, abstain: 10 },
      deadline: '2023-08-01',
      category: 'Environmental'
    },
    { 
      id: 'DAO-2023-05',
      title: 'AI-Assisted Conflict Resolution Protocol',
      description: 'Implementing a standardized AI-assisted protocol for mediating regional conflicts before they escalate to violence.',
      votes: { for: 82, against: 12, abstain: 6 },
      deadline: '2023-07-25',
      category: 'Diplomacy'
    },
    { 
      id: 'DAO-2023-04',
      title: 'Open Medical Research Exchange',
      description: 'Creating a decentralized platform for global medical research collaboration with open-source principles.',
      votes: { for: 76, against: 14, abstain: 10 },
      deadline: '2023-07-20',
      category: 'Science'
    },
  ];
  
  const pastProposals = [
    { 
      id: 'DAO-2023-03',
      title: 'Renewable Energy Knowledge Sharing',
      description: 'Establishing an international framework for sharing renewable energy innovations and expertise.',
      votes: { for: 89, against: 8, abstain: 3 },
      status: 'Passed',
      date: '2023-06-15',
      category: 'Energy'
    },
    { 
      id: 'DAO-2023-02',
      title: 'Credit Allocation for Humanitarian Aid',
      description: 'Adjusting the Peace Credit allocation formula to increase rewards for humanitarian crisis response.',
      votes: { for: 45, against: 52, abstain: 3 },
      status: 'Rejected',
      date: '2023-06-01',
      category: 'Economics'
    },
  ];
  
  // Voting power distribution
  const votingPowerData = [
    { category: 'Nations', power: 40 },
    { category: 'NGOs', power: 25 },
    { category: 'Academic', power: 15 },
    { category: 'Citizens', power: 20 },
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
            <h1 className="text-3xl font-bold mb-2">Governance DAO</h1>
            <p className="text-vite-slate/80">Participate in decentralized decision-making for global peace initiatives</p>
          </div>
          
          {/* Governance Overview */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="glass-card rounded-xl p-6 col-span-2">
              <h2 className="text-xl font-semibold mb-4">Voting Power Distribution</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={votingPowerData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="power" name="Voting Power %" fill="#6366F1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Your Governance Stats</h2>
              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <Vote className="text-vite-blue mr-3" size={20} />
                    <span className="text-vite-slate">Voting Power</span>
                  </div>
                  <span className="font-semibold">156 VP</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <Landmark className="text-vite-blue mr-3" size={20} />
                    <span className="text-vite-slate">Proposals Created</span>
                  </div>
                  <span className="font-semibold">3</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <Users className="text-vite-blue mr-3" size={20} />
                    <span className="text-vite-slate">Delegation</span>
                  </div>
                  <span className="font-semibold">None</span>
                </div>
              </div>
              
              <Button className="w-full mt-8">Create New Proposal</Button>
            </div>
          </div>
          
          {/* Proposals */}
          <div 
            className={`glass-card rounded-xl p-6 transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Proposals</h2>
              <div className="flex bg-white rounded-lg p-1 shadow-sm">
                <button 
                  className={`px-4 py-2 text-sm rounded-md transition-all ${
                    selectedTab === 'active' ? 'bg-vite-blue text-white' : 'text-vite-slate'
                  }`}
                  onClick={() => setSelectedTab('active')}
                >
                  Active
                </button>
                <button 
                  className={`px-4 py-2 text-sm rounded-md transition-all ${
                    selectedTab === 'past' ? 'bg-vite-blue text-white' : 'text-vite-slate'
                  }`}
                  onClick={() => setSelectedTab('past')}
                >
                  Past
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {selectedTab === 'active' ? (
                activeProposals.map((proposal, index) => (
                  <div key={index} className="bg-white/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-lg">{proposal.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{proposal.category}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-amber-600 mr-1" />
                        <span className="text-sm text-amber-600">Ends {proposal.deadline}</span>
                      </div>
                    </div>
                    
                    <p className="text-vite-slate/80 text-sm mb-6">{proposal.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="text-green-600 font-semibold text-lg">{proposal.votes.for}%</div>
                        <div className="text-green-800 text-xs">For</div>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded-lg text-center">
                        <div className="text-red-600 font-semibold text-lg">{proposal.votes.against}%</div>
                        <div className="text-red-800 text-xs">Against</div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-gray-600 font-semibold text-lg">{proposal.votes.abstain}%</div>
                        <div className="text-gray-800 text-xs">Abstain</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-green-600 hover:bg-green-700 mr-2">Vote For</Button>
                      <Button className="bg-red-600 hover:bg-red-700 mr-2">Vote Against</Button>
                      <Button variant="outline">Abstain</Button>
                    </div>
                  </div>
                ))
              ) : (
                pastProposals.map((proposal, index) => (
                  <div key={index} className="bg-white/50 rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium text-lg">{proposal.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{proposal.category}</span>
                      </div>
                      <div className="flex items-center">
                        {proposal.status === 'Passed' ? (
                          <div className="flex items-center text-green-600">
                            <Check size={16} className="mr-1" />
                            <span className="text-sm font-medium">Passed</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-red-600">
                            <AlertCircle size={16} className="mr-1" />
                            <span className="text-sm font-medium">Rejected</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-vite-slate/80 text-sm mb-6">{proposal.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="text-green-600 font-semibold text-lg">{proposal.votes.for}%</div>
                        <div className="text-green-800 text-xs">For</div>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded-lg text-center">
                        <div className="text-red-600 font-semibold text-lg">{proposal.votes.against}%</div>
                        <div className="text-red-800 text-xs">Against</div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="text-gray-600 font-semibold text-lg">{proposal.votes.abstain}%</div>
                        <div className="text-gray-800 text-xs">Abstain</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 text-sm">
                      <span className="text-vite-slate/70">ID: {proposal.id}</span>
                      <span className="text-vite-slate/70">Completed on {proposal.date}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
