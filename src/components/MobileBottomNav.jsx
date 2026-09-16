import React from 'react';
import { ShieldCheck, Users, Newspaper, HelpCircle, BookOpen } from 'lucide-react';

export default function MobileBottomNav({ activePage, setActivePage, lang = 'en', storyCount = 0 }) {
  const bottomItems = [
    { id: 'home', label: lang === 'hi' ? 'होम' : 'Home', icon: ShieldCheck },
    { id: 'senior-hub', label: lang === 'hi' ? 'बुजुर्ग' : 'Senior', icon: Users },
    { id: 'news', label: lang === 'hi' ? 'समाचार' : 'News', icon: Newspaper, badge: 'HOT' },
    { id: 'quiz', label: lang === 'hi' ? 'क्विज़' : 'Quiz', icon: HelpCircle },
    { id: 'stories', label: lang === 'hi' ? 'कहानियाँ' : 'Stories', icon: BookOpen, badge: storyCount },
  ];

  return (
    <nav className="mobile-bottom-nav d-md-none border-top shadow-lg">
      <div className="d-flex align-items-center justify-content-around h-100 px-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
            >
              <div className="icon-wrapper position-relative">
                <Icon size={22} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="bottom-badge">{item.badge}</span>
                )}
              </div>
              <span className="bottom-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
