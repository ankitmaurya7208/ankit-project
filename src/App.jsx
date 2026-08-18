import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [storyCount, setStoryCount] = useState(4);
  const [lang, setLang] = useState('en');
  const [showPrintModal, setShowPrintModal] = useState(false);

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
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="app-container">
          {/* Sidebar */}
          <Sidebar 
            activePage={activePage} 
            setActivePage={setActivePage}
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
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
            />

            <main className="content-area">
              {activePage === 'home' && <Home setActivePage={setActivePage} storyCount={storyCount} lang={lang} />}
              {activePage === 'senior-hub' && <SeniorCitizenHub lang={lang} />}
              {activePage === 'news' && <ScamNewsBulletin lang={lang} />}
              {activePage === 'upi-atm' && <UpiAtmSafety lang={lang} />}
              {activePage === 'phishing' && <PhishingScams lang={lang} />}
              {activePage === 'url-inspector' && <UrlInspector lang={lang} />}
              {activePage === 'password-pin' && <PasswordPin lang={lang} />}
              {activePage === 'risk-eval' && <FraudRiskEvaluator lang={lang} />}
              {activePage === 'emergency' && <EmergencyChecklist lang={lang} />}
              {activePage === 'quiz' && <SafetyQuiz lang={lang} />}
              {activePage === 'stories' && <CommunityStories setStoryCount={setStoryCount} lang={lang} />}
            </main>
          </div>

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
