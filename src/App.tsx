import React, { useState } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import Dashboard from './components/Dashboard';
import TuningTab from './components/TuningTab';
import HackingTab from './components/HackingTab';
import BoostingTab from './components/BoostingTab';
import WindowFrame from './components/WindowFrame';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center p-4">
      <WindowFrame>
        <div className="h-full flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col mt-4">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="flex-1 mt-4 overflow-auto">
              {renderActiveTab()}
            </div>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}

export default App;