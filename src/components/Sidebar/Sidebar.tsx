import React, { useState } from 'react';
import { Settings, Users, StickyNote, ChevronRight, ChevronDown, Plus, Trash2 } from 'lucide-react';

interface SidebarItem {
  id: string;
  title: string;
  content: string;
}

interface SidebarSection {
  id: 'settings' | 'characters' | 'notes';
  title: string;
  icon: React.ElementType;
  items: SidebarItem[];
}

export const Sidebar: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['characters']);
  const [sections, setSections] = useState<SidebarSection[]>([
    {
      id: 'settings',
      title: 'Settings',
      icon: Settings,
      items: [
        { id: '1', title: 'Main Location', content: 'City downtown' },
        { id: '2', title: 'Time Period', content: 'Present day' }
      ]
    },
    {
      id: 'characters',
      title: 'Characters',
      icon: Users,
      items: [
        { id: '1', title: 'John Smith', content: 'Protagonist, 35, detective' },
        { id: '2', title: 'Sarah Chen', content: 'Deuteragonist, 28, journalist' }
      ]
    },
    {
      id: 'notes',
      title: 'Notes',
      icon: StickyNote,
      items: [
        { id: '1', title: 'Plot Twist', content: 'Reveal villain in Act 3' },
        { id: '2', title: 'Theme', content: 'Redemption and sacrifice' }
      ]
    }
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const addItem = (sectionId: string) => {
    setSections(prev =>
      prev.map(section => {
        if (section.id === sectionId) {
          const newItem = {
            id: Date.now().toString(),
            title: 'New Item',
            content: 'Click to edit'
          };
          return {
            ...section,
            items: [...section.items, newItem]
          };
        }
        return section;
      })
    );
  };

  const deleteItem = (sectionId: string, itemId: string) => {
    setSections(prev =>
      prev.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            items: section.items.filter(item => item.id !== itemId)
          };
        }
        return section;
      })
    );
  };

  return (
    <div className="h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 overflow-hidden">
      <div className="p-4 space-y-4">
        {sections.map(section => (
          <div key={section.id} className="space-y-2">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-2 rounded-md bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-gray-200">{section.title}</span>
              </div>
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </button>

            {expandedSections.includes(section.id) && (
              <div className="pl-4 space-y-2">
                {section.items.map(item => (
                  <div
                    key={item.id}
                    className="group p-2 rounded-md bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <input
                        className="bg-transparent text-gray-200 font-medium focus:outline-none"
                        defaultValue={item.title}
                      />
                      <button
                        onClick={() => deleteItem(section.id, item.id)}
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <textarea
                      className="mt-1 w-full bg-transparent text-gray-400 text-sm resize-none focus:outline-none"
                      defaultValue={item.content}
                      rows={2}
                    />
                  </div>
                ))}
                <button
                  onClick={() => addItem(section.id)}
                  className="w-full flex items-center justify-center p-2 rounded-md bg-gray-800/30 hover:bg-gray-800/50 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add {section.title.slice(0, -1)}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;