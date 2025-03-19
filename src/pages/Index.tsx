
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import GlassCard from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, GitBranch, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Python AI Hedge Fund Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Python Data Pipeline</h3>
                <p className="text-muted-foreground mb-4">
                  Custom data collection from NSE, BSE, and economic indicators using Python's powerful libraries.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• pandas & numpy for data processing</li>
                  <li>• nsepy & bsedata for market access</li>
                  <li>• yfinance for complementary data</li>
                </ul>
              </GlassCard>
              
              <GlassCard className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI/ML Models</h3>
                <p className="text-muted-foreground mb-4">
                  Sophisticated prediction models tailored for Indian market conditions and behaviors.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• TensorFlow & PyTorch for deep learning</li>
                  <li>• scikit-learn for traditional ML</li>
                  <li>• Prophet & ARIMA for time series</li>
                </ul>
              </GlassCard>
              
              <GlassCard className="p-6">
                <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <GitBranch className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Backtesting & Execution</h3>
                <p className="text-muted-foreground mb-4">
                  Robust frameworks for strategy validation and automated trade execution.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Backtrader & Zipline for backtesting</li>
                  <li>• Alpaca API for paper trading</li>
                  <li>• Custom APIs for Indian brokers</li>
                </ul>
              </GlassCard>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                className="group"
                onClick={() => navigate('/dashboard')}
              >
                Explore Our Platform
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
