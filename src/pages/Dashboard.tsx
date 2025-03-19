
import React from 'react';
import Header from '@/components/layout/Header';
import DashboardContent from '@/components/dashboard/Dashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import GlassCard from '@/components/ui/GlassCard';
import { Download, FileCode, PlayCircle, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 px-4 pb-16 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Python AI Hedge Fund Platform</h1>
          
          <p className="text-muted-foreground mb-8 max-w-3xl">
            This dashboard serves as your control center for our Python-based AI hedge fund system. 
            Download the source code, explore documentation, and get started with building your 
            own AI-powered trading strategies for Indian markets.
          </p>
          
          <Tabs defaultValue="get-started" className="mb-10">
            <TabsList>
              <TabsTrigger value="get-started">Get Started</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="examples">Example Strategies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="get-started" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                      <Download className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold">Step 1: Download</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Download the complete Python codebase and dependencies for the AI hedge fund platform.
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Download Repository
                  </Button>
                </GlassCard>
                
                <GlassCard className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">
                      <FileCode className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold">Step 2: Configure</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Set up your API keys, data sources, and trading parameters in the configuration files.
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Configuration Guide
                  </Button>
                </GlassCard>
                
                <GlassCard className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                      <PlayCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold">Step 3: Run</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Launch the backtesting environment or live trading system with your strategies.
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Quickstart Tutorial
                  </Button>
                </GlassCard>
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Installation Progress</CardTitle>
                  <CardDescription>Complete these steps to set up your Python environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Python Environment Setup</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Data Source Configuration</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI Model Installation</span>
                        <span>50%</span>
                      </div>
                      <Progress value={50} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Broker API Integration</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documentation" className="mt-6">
              <GlassCard className="p-6">
                <div className="flex items-center mb-6">
                  <Book className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-xl font-semibold">Python Codebase Documentation</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Data Collection Module</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Python modules for retrieving market data from NSE, BSE, and economic indicators.
                      </p>
                      <Button variant="link" size="sm" className="px-0 mt-2">View Documentation</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Machine Learning Pipeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Feature engineering and model training workflows for market prediction.
                      </p>
                      <Button variant="link" size="sm" className="px-0 mt-2">View Documentation</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Strategy Framework</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Python classes for defining trading strategies and execution rules.
                      </p>
                      <Button variant="link" size="sm" className="px-0 mt-2">View Documentation</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Risk Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Position sizing, stop-loss mechanisms, and portfolio optimization.
                      </p>
                      <Button variant="link" size="sm" className="px-0 mt-2">View Documentation</Button>
                    </CardContent>
                  </Card>
                </div>
              </GlassCard>
            </TabsContent>
            
            <TabsContent value="examples" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="p-6">
                  <CardTitle className="text-lg mb-3">Mean Reversion Strategy</CardTitle>
                  <CardDescription className="mb-4">
                    A Python implementation of a statistical arbitrage strategy for Nifty50 stocks.
                  </CardDescription>
                  <div className="text-sm bg-muted p-3 rounded-md font-mono mb-4 overflow-x-auto">
                    <pre>
{`# Example Python Code
import pandas as pd
import numpy as np
from nsetools import Nse

def mean_reversion_signal(ticker, lookback=20):
    nse = Nse()
    data = pd.DataFrame(nse.get_history(ticker))
    data['zscore'] = (data['close'] - 
                      data['close'].rolling(lookback).mean()) / 
                      data['close'].rolling(lookback).std()
    return data['zscore'].iloc[-1]`}
                    </pre>
                  </div>
                  <Button variant="outline" size="sm">View Full Code</Button>
                </GlassCard>
                
                <GlassCard className="p-6">
                  <CardTitle className="text-lg mb-3">LSTM Price Predictor</CardTitle>
                  <CardDescription className="mb-4">
                    Deep learning model to forecast Bank Nifty movements using TensorFlow.
                  </CardDescription>
                  <div className="text-sm bg-muted p-3 rounded-md font-mono mb-4 overflow-x-auto">
                    <pre>
{`# Example Python Code
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

def build_lstm_model(input_shape):
    model = Sequential()
    model.add(LSTM(50, return_sequences=True, 
                  input_shape=input_shape))
    model.add(LSTM(50))
    model.add(Dense(1))
    model.compile(loss='mse', optimizer='adam')
    return model`}
                    </pre>
                  </div>
                  <Button variant="outline" size="sm">View Full Code</Button>
                </GlassCard>
              </div>
            </TabsContent>
          </Tabs>
          
          <DashboardContent />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
