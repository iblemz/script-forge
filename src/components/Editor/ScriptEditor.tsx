import React, { useState, useEffect } from 'react';
import { ScriptFormat } from '../../types/script';
import { formatScript } from '../../utils/scriptFormatters';
import { scriptTemplates } from './templates';
import { formatHints } from './formatHints';
import { Info, HelpCircle } from 'lucide-react';

interface ScriptEditorProps {
  content: string;
  format: ScriptFormat;
  onChange: (value: string) => void;
}

export const ScriptEditor: React.FC<ScriptEditorProps> = ({
  content,
  format,
  onChange,
}) => {
  const [showHints, setShowHints] = useState(true);
  const hints = formatHints[format];

  useEffect(() => {
    if (!content) {
      onChange(scriptTemplates[format]);
    }
  }, [format]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(formatScript(e.target.value, format));
  };

  return (
    <div className="h-full flex flex-col relative">
      {/* Format Guide Button (visible when hints are hidden) */}
      {!showHints && (
        <button
          onClick={() => setShowHints(true)}
          className="absolute top-4 right-4 z-10 flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-lg"
        >
          <HelpCircle className="w-4 h-4 mr-2" />
          Show Format Guide
        </button>
      )}

      {/* Format-specific guidance */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showHints ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="bg-gray-800 border-b border-gray-700 p-4 rounded-t-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Info className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold text-gray-200">Format Guide</h3>
            </div>
            <button
              onClick={() => setShowHints(false)}
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              Hide
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {hints.elements.map((hint, index) => (
              <div key={index} className="text-sm">
                <span className="text-blue-400 font-mono">{hint.prefix}</span>
                <span className="text-gray-400 ml-2">{hint.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className={`flex-1 w-full overflow-hidden border border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900 ${
        showHints ? 'rounded-b-lg' : 'rounded-lg'
      }`}>
        <textarea
          value={content}
          onChange={handleChange}
          className="w-full h-full bg-transparent text-gray-200 p-4 font-mono text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            lineHeight: '1.6',
            tabSize: 2,
          }}
          placeholder={scriptTemplates[format]}
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default ScriptEditor;