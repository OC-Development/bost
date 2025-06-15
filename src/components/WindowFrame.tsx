import React from 'react';
import { Minimize2, Maximize2, X } from 'lucide-react';

interface WindowFrameProps {
  children: React.ReactNode;
}

const WindowFrame: React.FC<WindowFrameProps> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl h-[90vh] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
      {/* Window Title Bar */}
      <div className="h-12 bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600/50 flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
          </div>
          <div className="text-slate-300 text-sm font-medium ml-4">
            Car Tuning Interface - Professional Vehicle Modification System
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 hover:bg-slate-600/50 rounded-md transition-colors">
            <Minimize2 className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-1.5 hover:bg-slate-600/50 rounded-md transition-colors">
            <Maximize2 className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-1.5 hover:bg-red-500/20 rounded-md transition-colors">
            <X className="w-4 h-4 text-slate-400 hover:text-red-400" />
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="h-[calc(100%-3rem)] p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
        {children}
      </div>
    </div>
  );
};

export default WindowFrame;