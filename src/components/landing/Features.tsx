
import React from 'react';
import { Brain, LineChart, TrendingUp, BarChart, Shield, Code } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Strategy Generation',
      description: 'Our proprietary AI analyzes market patterns and generates optimized trading strategies specific to Indian markets.',
    },
    {
      icon: LineChart,
      title: 'Backtesting Engine',
      description: 'Test your strategies against historical data with our enterprise-grade backtesting engine that simulates real market conditions.',
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Monitor your portfolio with real-time performance metrics and advanced risk analytics designed for the Indian market.',
    },
    {
      icon: BarChart,
      title: 'Multi-asset Coverage',
      description: 'Trade across equities, derivatives, commodities, and currencies in the Indian markets with our comprehensive platform.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Sophisticated risk management tools to protect your capital with adaptive stop-loss and position sizing algorithms.',
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Connect directly to your broker with our secure API integrations supporting major Indian brokerages.',
    },
  ];

  return (
    <section className="py-20 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Trading Technology for Indian Markets
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge AI with deep financial expertise to give you an edge in India's complex markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              className="p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:bg-white/60 dark:hover:bg-black/40"
              hoverEffect
            >
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full" />
              
              <div className="mb-6 relative z-10">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
