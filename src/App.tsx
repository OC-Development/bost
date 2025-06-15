import React, { useState } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import Dashboard from './components/Dashboard';
import TuningTab from './components/TuningTab';
import HackingTab from './components/HackingTab';
import BoostingTab from './components/BoostingTab';

export type TabType = 'dashboard' | 'tuning' | 'hacking' | 'boosting';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'tuning':
        return <TuningTab />;
      case 'hacking':
        return <HackingTab />;
      case 'boosting':
        return <BoostingTab />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-6">
        <Header />
        <div className="mt-8">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="mt-6">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;