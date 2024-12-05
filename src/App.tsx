import React, { useState } from 'react';
import { Pen } from 'lucide-react';
import ScriptEditor from './components/Editor/ScriptEditor';
import FormatSelector from './components/FormatSelector/FormatSelector';
import AIAssistant from './components/AIAssistant/AIAssistant';
import Sidebar from './components/Sidebar/Sidebar';
import { ScriptFormat } from './types/script';

function App() {
  const [format, setFormat] = useState<ScriptFormat>('hollywood');
  const [content, setContent] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center">
            <Pen className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              ScriptForge
            </h1>
          </div>
        </div>

        {/* Format Selector and AI Assistant */}
        <div className="flex items-center gap-4 mb-6">
          <FormatSelector
            selectedFormat={format}
            onFormatChange={setFormat}
          />
          <AIAssistant />
        </div>

        {/* Editor */}
        <div className="h-[calc(100vh-16rem)]">
          <ScriptEditor
            content={content}
            format={format}
            onChange={setContent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;