import React from 'react';
import { Car, Gauge, Wrench, Shield } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Vehicles Modified', value: '127', icon: Car, color: 'from-blue-500 to-cyan-500' },
    { label: 'Performance Boost', value: '+45%', icon: Gauge, color: 'from-green-500 to-emerald-500' },
    { label: 'Parts Installed', value: '89', icon: Wrench, color: 'from-purple-500 to-pink-500' },
    { label: 'Security Level', value: 'High', icon: Shield, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Engine upgrade installed', vehicle: 'Nissan GTR', time: '2 minutes ago' },
            { action: 'Xenon lights configured', vehicle: 'BMW M3', time: '15 minutes ago' },
            { action: 'Suspension tuned', vehicle: 'Audi RS6', time: '1 hour ago' },
            { action: 'Turbo system boosted', vehicle: 'Porsche 911', time: '2 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-white font-medium">{activity.action}</p>
                <p className="text-gray-300 text-sm">{activity.vehicle}</p>
              </div>
              <p className="text-gray-400 text-sm">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;