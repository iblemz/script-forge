import React from 'react';
import { ScriptFormat } from '../../types/script';
import { FileText, Tv, Theater, Book, MessageSquare } from 'lucide-react';

interface FormatSelectorProps {
  selectedFormat: ScriptFormat;
  onFormatChange: (format: ScriptFormat) => void;
}

const formats = [
  { id: 'hollywood' as ScriptFormat, name: 'Hollywood', icon: FileText },
  { id: 'tv' as ScriptFormat, name: 'TV', icon: Tv },
  { id: 'stage' as ScriptFormat, name: 'Stage', icon: Theater },
  { id: 'novel' as ScriptFormat, name: 'Novel', icon: Book },
  { id: 'comic' as ScriptFormat, name: 'Comic', icon: MessageSquare },
];

export const FormatSelector: React.FC<FormatSelectorProps> = ({
  selectedFormat,
  onFormatChange,
}) => {
  return (
    <div className="flex space-x-2 p-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
      {formats.map(({ id, name, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onFormatChange(id)}
          className={`flex items-center px-4 py-2 rounded-md transition-all ${
            selectedFormat === id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Icon className="w-4 h-4 mr-2" />
          {name}
        </button>
      ))}
    </div>
  );
};

export default FormatSelector;