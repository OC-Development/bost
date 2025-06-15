import React from 'react';
import { User, Car } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="glass-effect rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Car Tuning Interface</h1>
            <p className="text-gray-300">Professional Vehicle Modification System</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-white font-medium">Player Name</p>
            <p className="text-gray-300 text-sm">Level 25</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;