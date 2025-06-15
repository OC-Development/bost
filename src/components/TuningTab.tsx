import React, { useState } from 'react';
import EngineSection from './tuning/EngineSection';
import SuspensionSection from './tuning/SuspensionSection';
import BrakesSection from './tuning/BrakesSection';
import TransmissionSection from './tuning/TransmissionSection';
import XenonSection from './tuning/XenonSection';
import TurboSection from './tuning/TurboSection';

const TuningTab: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('Nissan GTR');

  const vehicles = ['Nissan GTR', 'BMW M3', 'Audi RS6', 'Porsche 911', 'Mercedes AMG'];

  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Vehicle Tuning</h2>
          <select
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {vehicles.map((vehicle) => (
              <option key={vehicle} value={vehicle} className="bg-gray-800">
                {vehicle}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngineSection />
          <SuspensionSection />
          <BrakesSection />
          <TransmissionSection />
          <XenonSection />
          <TurboSection />
        </div>
      </div>
    </div>
  );
};

export default TuningTab;