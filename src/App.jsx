import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';

import Home from './pages/Home';
import UpiAtmSafety from './pages/UpiAtmSafety';
import PhishingScams from './pages/PhishingScams';
import PasswordPin from './pages/PasswordPin';
import SafetyQuiz from './pages/SafetyQuiz';
import CommunityStories from './pages/CommunityStories';

// New Interactive Widgets & Pages
import SeniorCitizenHub from './pages/SeniorCitizenHub';
import ScamNewsBulletin from './components/Widgets/ScamNewsBulletin';
import UrlInspector from './components/Widgets/UrlInspector';
import FraudRiskEvaluator from './components/Widgets/FraudRiskEvaluator';
import EmergencyChecklist from './components/Widgets/EmergencyChecklist';
import CyberAssistantChatbot from './components/Widgets/CyberAssistantChatbot';
import PrintableCheatSheetModal from './components/Shared/PrintableCheatSheetModal';
import UserNameModal from './components/UserNameModal';
import GoogleFeedbackPage from './pages/GoogleFeedbackPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  
  // Navigation drawer starts closed by default
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // User Name Personalization State
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('dhan_yodha_user_name') || '';
  });
  const [showNameModal, setShowNameModal] = useState(false);
  
  // Interactive Theme Mode: 'light', 'dark', or 'system'
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('dhan_yodha_theme') || 'light';
  });
  
  const [storyCount, setStoryCount] = useState(4);
  const [lang, setLang] = useState('en');
  const [showPrintModal, setShowPrintModal] = useState(false);

  // Open Name Modal if name is not set after preloader completes
  const handlePreloaderComplete = () => {
    setLoading(false);
    if (!localStorage.getItem('dhan_yodha_user_name')) {
      setShowNameModal(true);
    }
  };

  const handleSaveUserName = (name) => {
    setUserName(name);
    localStorage.setItem('dhan_yodha_user_name', name);
    setShowNameModal(false);
  };

  // System & Manual Theme Effect
  useEffect(() => {
    const applyTheme = () => {
      if (themeMode === 'system') {
        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-theme', themeMode);
      }
      localStorage.setItem('dhan_yodha_theme', themeMode);
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themeMode === 'system') applyTheme();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, [themeMode]);

  // Fetch story count on initial load
  useEffect(() => {
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setStoryCount(data.length);
        }
      })
      .catch(err => console.log('Backend API check:', err.message));
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <div className="app-container">
          {/* Sidebar (Desktop & Mobile Drawer) */}
          <Sidebar 
            activePage={activePage} 
            setActivePage={setActivePage}
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            storyCount={storyCount}
            lang={lang}
            onOpenPrintModal={() => setShowPrintModal(true)}
          />

          {/* Main Content Area */}
          <div className="main-wrapper">
            <Navbar 
              activePage={activePage} 
              setActivePage={setActivePage}
              lang={lang}
              setLang={setLang}
              onOpenPrintModal={() => setShowPrintModal(true)}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
              collapsed={sidebarCollapsed}
              setCollapsed={setSidebarCollapsed}
              themeMode={themeMode}
              setThemeMode={setThemeMode}
              userName={userName}
              onEditName={() => setShowNameModal(true)}
            />

            <main className="content-area">
              {activePage === 'home' && (
                <Home 
                  setActivePage={setActivePage} 
                  storyCount={storyCount} 
                  lang={lang} 
                  userName={userName || 'Warrior'}
                  onEditName={() => setShowNameModal(true)}
                />
              )}
              {activePage === 'senior-hub' && <SeniorCitizenHub lang={lang} />}
              {activePage === 'google-feedback' && <GoogleFeedbackPage lang={lang} />}
              {activePage === 'news' && <ScamNewsBulletin lang={lang} />}
              {activePage === 'upi-atm' && <UpiAtmSafety lang={lang} />}
              {activePage === 'phishing' && <PhishingScams lang={lang} />}
              {activePage === 'url-inspector' && <UrlInspector lang={lang} />}
              {activePage === 'password-pin' && <PasswordPin lang={lang} />}
              {activePage === 'risk-eval' && <FraudRiskEvaluator lang={lang} />}
              {activePage === 'emergency' && <EmergencyChecklist lang={lang} />}
              {activePage === 'quiz' && <SafetyQuiz lang={lang} userName={userName || 'Banking Warrior'} />}
              {activePage === 'stories' && <CommunityStories setStoryCount={setStoryCount} lang={lang} />}
            </main>
          </div>

          {/* Mobile Bottom Navigation Bar */}
          <MobileBottomNav 
            activePage={activePage}
            setActivePage={setActivePage}
            lang={lang}
            storyCount={storyCount}
          />

          {/* User Name Entry Modal */}
          <UserNameModal 
            show={showNameModal} 
            onSubmitName={handleSaveUserName}
            lang={lang}
          />

          {/* Prominent Global Floating AI Cyber Assistant Widget */}
          <CyberAssistantChatbot lang={lang} />

          {/* Printable Cheat Sheet Modal */}
          <PrintableCheatSheetModal 
            show={showPrintModal} 
            onClose={() => setShowPrintModal(false)}
            lang={lang}
          />
        </div>
      )}
    </>
  );
}
