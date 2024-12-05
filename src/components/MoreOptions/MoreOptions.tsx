import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar';

const MoreOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-700 rounded-md transition-colors"
      >
        <MoreVertical className="w-5 h-5 text-gray-400" />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <Sidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default MoreOptions;
