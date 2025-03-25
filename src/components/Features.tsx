
import { Award, Lightbulb, Shield, Users, Globe, Database } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      title: "Peace Credits Marketplace",
      description: "Earn Peace Credits for verified humanitarian efforts, conflict resolution, and scientific contributions through transparent smart contracts.",
      icon: Award
    },
    {
      title: "Diplomacy-as-a-Service",
      description: "AI-powered conflict mediation tools and secure virtual summits for world leaders using Vite's fast consensus mechanism.",
      icon: Users
    },
    {
      title: "Innovation Bounties",
      description: "Global competitions in scientific, medical, and space exploration challenges with Peace Credits converting into real-world funding.",
      icon: Lightbulb
    },
    {
      title: "AI Defense Grid",
      description: "A decentralized AI network that predicts, neutralizes, and prevents attacks in real-time using machine learning.",
      icon: Shield
    },
    {
      title: "Abundance Tech Hub",
      description: "Open-source self-replicating energy systems and automated food production ensuring no country fights over resources.",
      icon: Globe
    },
    {
      title: "Smart Diplomacy DAO",
      description: "Community-driven governance with a weighted voting system ensuring fair global representation for peace initiatives.",
      icon: Database
    }
  ];

  return (
    <section id="features" className="section-padding bg-vite-offWhite">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Core Features</h2>
          <p className="text-vite-slate max-w-2xl mx-auto">
            Leveraging cutting-edge blockchain technology and AI to create a new paradigm for global peace and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
