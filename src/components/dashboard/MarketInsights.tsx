
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Brain, RefreshCcw, AlertTriangle } from 'lucide-react';

const MarketInsights = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Brain className="h-5 w-5 text-primary mr-2" />
          <h3 className="font-semibold text-lg">AI Market Insights</h3>
        </div>
        <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
          <RefreshCcw className={`h-4 w-4 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Updating...' : 'Refresh'}
        </Button>
      </div>

      <div className="flex flex-col space-y-4 flex-grow">
        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-md">
          <div className="text-sm font-medium">Nifty 50</div>
          <div className="flex items-center text-profit">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>21,452.30 (+1.2%)</span>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-md">
          <div className="text-sm font-medium">Bank Nifty</div>
          <div className="flex items-center text-profit">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>46,825.15 (+0.8%)</span>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-md">
          <div className="text-sm font-medium">India VIX</div>
          <div className="flex items-center text-loss">
            <TrendingDown className="h-4 w-4 mr-1" />
            <span>12.35 (-4.2%)</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm font-medium mb-3 flex items-center">
            <AlertTriangle className="h-4 w-4 text-primary mr-1.5" />
            AI Predictions
          </div>
          <div className="space-y-3">
            {[
              {
                security: 'HDFC Bank',
                prediction: 'Buy',
                confidence: 'High',
                reason: 'Strong momentum and positive technical indicators'
              },
              {
                security: 'Reliance Industries',
                prediction: 'Hold',
                confidence: 'Medium',
                reason: 'Neutral price action with consolidation'
              },
              {
                security: 'Infosys',
                prediction: 'Sell',
                confidence: 'Medium',
                reason: 'Approaching resistance with bearish divergence'
              }
            ].map((insight, index) => (
              <div key={index} className="p-3 bg-white/50 dark:bg-black/20 border border-border rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm">{insight.security}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    insight.prediction === 'Buy' 
                      ? 'bg-profit/20 text-profit' 
                      : insight.prediction === 'Sell'
                        ? 'bg-loss/20 text-loss'
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {insight.prediction}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{insight.reason}</p>
                <div className="flex items-center">
                  <span className="text-xs">Confidence:</span>
                  <div className="ml-2 flex space-x-1">
                    {['Low', 'Medium', 'High'].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 w-5 rounded-full ${
                          ['High', 'Medium', 'Low'].indexOf(level) <= ['High', 'Medium', 'Low'].indexOf(insight.confidence)
                            ? 'bg-primary'
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <Button variant="outline" className="w-full">View Detailed Market Analysis</Button>
      </div>
    </Card>
  );
};

export default MarketInsights;
