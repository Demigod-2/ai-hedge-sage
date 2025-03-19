
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart3, TrendingUp, LineChart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '@/components/ui/GlassCard';

const Hero = () => {
  const chartCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartCanvasRef.current) return;

    const ctx = chartCanvasRef.current.getContext('2d');
    if (!ctx) return;

    const drawChart = () => {
      if (!ctx || !chartCanvasRef.current) return;

      // Clear canvas
      ctx.clearRect(0, 0, chartCanvasRef.current.width, chartCanvasRef.current.height);

      // Set line style
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';

      // Generate data points for the chart
      const width = chartCanvasRef.current.width;
      const height = chartCanvasRef.current.height;
      const points = 100;
      const initialY = height * 0.7;
      const values = [];

      // Generate some random data with an upward trend
      for (let i = 0; i < points; i++) {
        const random = Math.random() * 30 - 10; // Random fluctuation
        const trend = i / points * 40; // Upward trend
        const y = initialY - trend - random;
        values.push(y);
      }

      // Draw line chart
      ctx.beginPath();
      values.forEach((y, i) => {
        const x = (i / (points - 1)) * width;
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();

      // Create a gradient fill
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

      // Fill area under the line
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Set canvas dimensions
    const resizeCanvas = () => {
      if (!chartCanvasRef.current) return;
      chartCanvasRef.current.width = chartCanvasRef.current.offsetWidth * 2;
      chartCanvasRef.current.height = chartCanvasRef.current.offsetHeight * 2;
      drawChart();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-30 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-20 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 blur-3xl" />
      </div>

      {/* Grid decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDIwMjAiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMDMiPjxwYXRoIGQ9Ik0zMCAwdjYwTTAgMzBoNjAiLz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 max-w-xl">
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-black/30 px-3 py-1.5 rounded-full w-fit backdrop-blur-sm border border-border">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium">AI-Powered Hedge Fund</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">AI Trading Strategies for</span>
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent animate-gradient-shift">
                Indian Markets
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
              Leverage cutting-edge artificial intelligence to discover, backtest, and deploy quantitative 
              trading strategies optimized for India's unique market dynamics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="group font-medium">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                See Dashboard Demo
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${
                      i % 3 === 0 ? 'from-blue-400 to-indigo-500' :
                      i % 3 === 1 ? 'from-indigo-400 to-purple-500' :
                      'from-purple-400 to-pink-500'
                    }`} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-medium">4.9</span>
                </div>
                <span className="text-xs text-muted-foreground">From 500+ reviews</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <GlassCard intensity="heavy" className="p-6 md:p-8 relative z-10 overflow-hidden">
              <div className="absolute -right-16 -top-16 h-32 w-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -left-16 -bottom-16 h-32 w-32 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nifty 50</h3>
                    <p className="text-xs text-muted-foreground">Real-time market analysis</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold">21,456.65</span>
                    <div className="flex items-center text-profit text-sm">
                      <TrendingUp className="h-3.5 w-3.5 mr-0.5" />
                      <span>2.4%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Updated just now</p>
                </div>
              </div>

              <div className="h-64 w-full relative">
                <canvas 
                  ref={chartCanvasRef} 
                  className="w-full h-full" 
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                {['Portfolio Return', 'Alpha Generated', 'Risk Score'].map((label, i) => (
                  <div key={i} className="bg-background/60 backdrop-blur-sm rounded-lg p-3 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">{label}</p>
                    <div className="flex items-baseline">
                      <span className="font-bold text-lg">{i === 0 ? '+18.7%' : i === 1 ? '4.2x' : '0.76'}</span>
                      {i < 2 && (
                        <span className="text-xs text-profit-foreground ml-1">↑</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Floating cards decoration */}
            <div className="absolute -bottom-6 -left-12 md:-left-24 max-w-[180px] animate-float">
              <GlassCard intensity="light" className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="font-medium text-sm">Strategy AI</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Your AI strategy builder has identified a new opportunity</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">View Details</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </GlassCard>
            </div>

            <div className="absolute -top-8 -right-12 md:-right-20 max-w-[160px] animate-float" style={{ animationDelay: '1s' }}>
              <GlassCard intensity="light" className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold">HDFC Bank</span>
                  <div className="flex items-center text-profit text-xs">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    <span>1.8%</span>
                  </div>
                </div>
                <div className="h-10 bg-profit/10 rounded-md mb-2">
                  <div className="h-full w-[70%] bg-profit/20 rounded-md" />
                </div>
                <p className="text-xs text-muted-foreground">AI confidence: High</p>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Assets Analyzed', value: '5,000+' },
              { label: 'Trades Executed', value: '2M+' },
              { label: 'Return Rate', value: '+28%' },
              { label: 'Active Strategies', value: '120+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
