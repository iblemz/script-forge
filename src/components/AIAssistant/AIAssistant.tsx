import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    // Simulate AI response - Replace with actual AI integration
    setTimeout(() => {
      setResponse("Here's a suggestion for your script: Consider adding more descriptive scene transitions to help establish the mood. For example, you could use 'FADE TO:' or 'DISSOLVE TO:' to create a more cinematic feel.");
      setIsLoading(false);
      setPrompt('');
    }, 1000);
  };

  return (
    <div className="p-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700">
      <div className="flex items-center mb-4">
        <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
        <h3 className="text-lg font-semibold text-gray-200">AI Assistant</h3>
      </div>

      {/* Response Area */}
      {(response || isLoading) && (
        <div className="mb-4 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
          {isLoading ? (
            <div className="flex items-center text-gray-400">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Thinking...
            </div>
          ) : (
            <p className="text-gray-200 text-sm">{response}</p>
          )}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask for writing suggestions..."
          className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className={`px-4 py-2 bg-blue-600 text-white rounded-md transition-colors flex items-center ${
            isLoading || !prompt.trim() 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-blue-700'
          }`}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Send className="w-4 h-4 mr-2" />
          )}
          Send
        </button>
      </form>
    </div>
  );
};

export default AIAssistant;