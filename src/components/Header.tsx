import React from 'react';
import { User, Car, Wifi, Battery, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="glass-effect rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Car Tuning Interface</h1>
            <p className="text-gray-300 text-sm">Professional Vehicle Modification System</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* Status Indicators */}
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="flex items-center space-x-1">
              <Wifi className="w-4 h-4" />
              <span className="text-xs">Connected</span>
            </div>
            <div className="flex items-center space-x-1">
              <Battery className="w-4 h-4" />
              <span className="text-xs">85%</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs">{currentTime}</span>
            </div>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-white font-medium text-sm">Player Name</p>
              <p className="text-gray-300 text-xs">Level 25</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;