
import React from 'react';
import Header from '@/components/layout/Header';
import DashboardContent from '@/components/dashboard/Dashboard';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;
