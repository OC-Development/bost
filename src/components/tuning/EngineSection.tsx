import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const EngineSection: React.FC = () => {
  const [selectedEngine, setSelectedEngine] = useState(0);

  const engines = [
    { name: 'Stock Engine', power: '300 HP', price: '$0' },
    { name: 'Stage 1 Tune', power: '350 HP', price: '$2,500' },
    { name: 'Stage 2 Tune', power: '400 HP', price: '$5,000' },
    { name: 'Stage 3 Tune', power: '450 HP', price: '$8,500' },
  ];

  return (
    <div className="bg-white/5 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Zap className="w-6 h-6 text-yellow-500" />
        <h3 className="text-lg font-semibold text-white">Engine Tuning</h3>
      </div>
      
      <div className="space-y-3">
        {engines.map((engine, index) => (
          <div
            key={index}
            onClick={() => setSelectedEngine(index)}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedEngine === index
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50'
                : 'bg-white/5 hover:bg-white/10 border border-transparent'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-medium">{engine.name}</p>
                <p className="text-gray-300 text-sm">{engine.power}</p>
              </div>
              <p className="text-green-400 font-semibold">{engine.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineSection;