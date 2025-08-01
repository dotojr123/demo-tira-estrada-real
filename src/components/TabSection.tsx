import React, { ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface TabSectionProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabSection: React.FC<TabSectionProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mt-12">
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center py-4 px-4 md:px-6 text-sm md:text-base font-medium border-b-2 transition-colors duration-200
                ${activeTab === tab.id 
                  ? 'border-amber-500 text-amber-600 font-semibold' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabSection;