
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, BarChart3, LineChart, TrendingUp, TrendingDown, CircleDollarSign, FileText, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import MarketInsights from './MarketInsights';
import StockChart from './StockChart';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState('1W');

  return (
    <div className="container mx-auto py-6 px-4 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your portfolio and market insights.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <CalendarDays className="h-4 w-4 mr-2" />
            Mar 15, 2023 - Jun 14, 2023
          </Button>
          <Button variant="default" size="sm">Refresh</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-5" intensity="medium">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-sm">Portfolio Value</h3>
            <TrendingUp className="h-4 w-4 text-profit" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">₹12,45,892</span>
            <span className="text-profit text-sm font-medium">+2.4%</span>
          </div>
          <div className="h-1 w-full bg-muted mt-4 mb-2 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '70%' }} />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Target: ₹15,00,000</span>
            <span>70%</span>
          </div>
        </GlassCard>

        <GlassCard className="p-5" intensity="medium">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-sm">Today's P&L</h3>
            <TrendingUp className="h-4 w-4 text-profit" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">₹24,892</span>
            <span className="text-profit text-sm font-medium">+1.8%</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Open Positions</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Success Rate</span>
              <span className="font-medium">76%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Avg. Holding</span>
              <span className="font-medium">3.2 days</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5" intensity="medium">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-sm">Active Strategies</h3>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">8</span>
            <span className="text-muted-foreground text-sm">strategies</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <BarChart3 className="h-3.5 w-3.5 mr-2 text-primary" />
              Create New
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
              History
            </Button>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">Portfolio Performance</h2>
              <p className="text-sm text-muted-foreground">Track your investment growth over time</p>
            </div>
            <div className="flex space-x-1 bg-secondary/70 rounded-lg p-1 mt-4 md:mt-0">
              {['1D', '1W', '1M', '3M', '1Y', 'All'].map((range) => (
                <Button
                  key={range}
                  variant={dateRange === range ? "default" : "ghost"}
                  size="sm"
                  className="text-xs h-7 px-3"
                  onClick={() => setDateRange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="h-[300px]">
            <StockChart />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Returns', value: '+28.5%', icon: TrendingUp, color: 'text-profit', subtext: 'vs. market +12.4%' },
              { label: 'Drawdown', value: '-8.3%', icon: TrendingDown, color: 'text-loss', subtext: 'max in period' },
              { label: 'Sharpe Ratio', value: '1.82', icon: BarChart3, color: 'text-primary', subtext: 'risk-adjusted return' },
              { label: 'Profit Factor', value: '2.4', icon: CircleDollarSign, color: 'text-primary', subtext: 'gains/losses ratio' },
            ].map((metric, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center text-muted-foreground text-sm mb-1">
                  <metric.icon className={`h-4 w-4 mr-1.5 ${metric.color}`} />
                  {metric.label}
                </div>
                <div className="flex flex-col">
                  <span className={`text-lg font-semibold ${metric.color}`}>{metric.value}</span>
                  <span className="text-xs text-muted-foreground">{metric.subtext}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="col-span-1">
          <MarketInsights />
        </div>
      </div>

      <Tabs defaultValue="positions" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none p-0 h-auto">
          {['positions', 'strategies', 'orders', 'history'].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none px-4 py-2 capitalize"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="positions" className="pt-6">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Active Positions</h3>
              <Button variant="outline" size="sm">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium text-muted-foreground text-sm pb-3">Symbol</th>
                    <th className="text-left font-medium text-muted-foreground text-sm pb-3">Position</th>
                    <th className="text-left font-medium text-muted-foreground text-sm pb-3">Entry Price</th>
                    <th className="text-left font-medium text-muted-foreground text-sm pb-3">Current</th>
                    <th className="text-left font-medium text-muted-foreground text-sm pb-3">P&L</th>
                    <th className="text-left font-medium text-muted-foreground text-sm pb-3">Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { symbol: 'RELIANCE', position: 'Long', entry: '₹2,425.60', current: '₹2,520.35', pnl: '+3.9%', strategy: 'Momentum' },
                    { symbol: 'HDFCBANK', position: 'Long', entry: '₹1,670.25', current: '₹1,702.40', pnl: '+1.9%', strategy: 'Value' },
                    { symbol: 'TCS', position: 'Short', entry: '₹3,450.80', current: '₹3,362.15', pnl: '+2.6%', strategy: 'Mean Reversion' },
                    { symbol: 'INFY', position: 'Long', entry: '₹1,425.50', current: '₹1,456.75', pnl: '+2.2%', strategy: 'Trend Following' },
                    { symbol: 'WIPRO', position: 'Short', entry: '₹415.60', current: '₹412.30', pnl: '+0.8%', strategy: 'Technical' },
                  ].map((position, index) => (
                    <tr key={index} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 font-medium">{position.symbol}</td>
                      <td className={`py-3 ${position.position === 'Long' ? 'text-profit' : 'text-loss'}`}>{position.position}</td>
                      <td className="py-3">{position.entry}</td>
                      <td className="py-3">{position.current}</td>
                      <td className={`py-3 font-medium ${position.pnl.startsWith('+') ? 'text-profit' : 'text-loss'}`}>{position.pnl}</td>
                      <td className="py-3">
                        <span className="inline-block px-2 py-1 bg-secondary text-xs rounded-full">
                          {position.strategy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-6 text-sm text-muted-foreground">
              <div>Showing 5 of 12 positions</div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="strategies">
          <div className="pt-6 text-center text-muted-foreground">
            Strategy management interface will appear here.
          </div>
        </TabsContent>
        
        <TabsContent value="orders">
          <div className="pt-6 text-center text-muted-foreground">
            Order history and tracking will appear here.
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="pt-6 text-center text-muted-foreground">
            Historical performance analytics will appear here.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
