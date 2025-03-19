
import React, { useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const StockChart = () => {
  // Sample portfolio performance data (this would be fetched from API in a real app)
  const generateData = () => {
    const baseValue = 100;
    const data = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let currentValue = baseValue;
    
    // Generate last 12 months of data with realistic portfolio growth and market benchmark
    for (let i = 0; i < 12; i++) {
      // Portfolio performance with some randomness
      const portfolioChange = (Math.random() * 6) - 1.5; // Range from -1.5% to +4.5%
      currentValue = currentValue * (1 + portfolioChange / 100);
      
      // Market benchmark (generally lower than portfolio)
      const marketChange = (Math.random() * 4) - 1; // Range from -1% to +3%
      const marketValue = i === 0 ? baseValue : data[i-1].market * (1 + marketChange / 100);
      
      data.push({
        month: months[i],
        portfolio: parseFloat(currentValue.toFixed(2)),
        market: parseFloat(marketValue.toFixed(2)),
      });
    }
    
    return data;
  };

  const data = generateData();
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background/95 backdrop-blur-sm border border-border p-3 rounded-md shadow-md">
          <p className="font-medium text-sm mb-1">{label}</p>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2" />
              <span className="text-xs mr-2">Portfolio:</span>
              <span className="text-xs font-medium">{payload[0].value}</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-muted-foreground mr-2" />
              <span className="text-xs mr-2">Market:</span>
              <span className="text-xs font-medium">{payload[1].value}</span>
            </div>
            <div className="text-xs text-profit font-medium pt-1">
              +{((payload[0].value - payload[1].value) / payload[1].value * 100).toFixed(2)}% vs Market
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="month" 
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          axisLine={{ stroke: 'hsl(var(--border))' }}
          tickLine={{ stroke: 'hsl(var(--border))' }}
        />
        <YAxis 
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          axisLine={{ stroke: 'hsl(var(--border))' }}
          tickLine={{ stroke: 'hsl(var(--border))' }}
          domain={['dataMin - 5', 'dataMax + 5']}
        />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine y={100} stroke="hsl(var(--border))" strokeDasharray="3 3" />
        <Line 
          type="monotone" 
          dataKey="market" 
          stroke="hsl(var(--muted-foreground))" 
          strokeWidth={1.5}
          dot={false}
          activeDot={{ r: 6, fill: 'hsl(var(--muted-foreground))', stroke: 'hsl(var(--background))', strokeWidth: 2 }}
        />
        <Line 
          type="monotone" 
          dataKey="portfolio" 
          stroke="hsl(var(--primary))" 
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6, fill: 'hsl(var(--primary))', stroke: 'hsl(var(--background))', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
