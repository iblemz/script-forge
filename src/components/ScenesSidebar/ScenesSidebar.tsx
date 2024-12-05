import React, { useState } from 'react';
import { Plus, GripVertical } from 'lucide-react';

interface Scene {
  id: string;
  title: string;
}

const ScenesSidebar = () => {
  const [scenes, setScenes] = useState<Scene[]>([]);

  const addNewScene = () => {
    const newScene = {
      id: Date.now().toString(),
      title: `Scene ${scenes.length + 1}`,
    };
    setScenes([...scenes, newScene]);
  };

  return (
    <div className="w-64 bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-200">Scenes</h2>
        <button
          onClick={addNewScene}
          className="p-1.5 hover:bg-gray-700 rounded-md transition-colors"
          title="Add new scene"
        >
          <Plus className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      
      <div className="space-y-2">
        {scenes.map((scene) => (
          <div
            key={scene.id}
            className="flex items-center gap-2 p-2 bg-gray-700/50 rounded-md cursor-pointer hover:bg-gray-700 group"
          >
            <GripVertical className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100" />
            <span className="text-sm text-gray-300">{scene.title}</span>
          </div>
        ))}
        
        {scenes.length === 0 && (
          <div className="text-sm text-gray-500 text-center py-4">
            No scenes yet. Click + to add one.
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenesSidebar;
