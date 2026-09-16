import React from 'react';
import { ShieldCheck, Languages, ExternalLink, Printer, Menu, Sun, Moon, Monitor, User, Edit2 } from 'lucide-react';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  lang, 
  setLang, 
  onOpenPrintModal, 
  mobileOpen, 
  setMobileOpen,
  collapsed,
  setCollapsed,
  themeMode,
  setThemeMode,
  userName,
  onEditName
}) {
  const getTitle = () => {
    if (lang === 'hi') {
      switch (activePage) {
        case 'home': return 'सुरक्षित बैंकिंग डैशबोर्ड';
        case 'senior-hub': return 'वरिष्ठ नागरिक कॉर्नर';
        case 'news': return 'वास्तविक फ्रॉड समाचार';
        case 'upi-atm': return 'UPI, ATM एवं OTP सुरक्षा';
        case 'phishing': return 'फ़िशिंग एवं स्कैम जागरूकता';
        case 'url-inspector': return 'फ़ेक बैंक पोर्टल निरीक्षक';
        case 'password-pin': return 'पासवर्ड एवं PIN वर्कस्टेशन';
        case 'risk-eval': return 'व्यक्तिगत जोखिम मूल्यांकन';
        case 'emergency': return 'गोल्डन आवर एवं डायरेक्टरी';
        case 'quiz': return 'सुरक्षा क्विज़ एवं प्रमाण पत्र';
        case 'stories': return 'समुदाय अनुभव कहानियाँ';
        default: return 'धन योद्धा सुरक्षा पोर्टल';
      }
    } else {
      switch (activePage) {
        case 'home': return 'Dashboard Overview';
        case 'senior-hub': return 'Senior Citizens Safe Hub';
        case 'news': return 'Scam News Bulletins';
        case 'upi-atm': return 'UPI, ATM & OTP Safety';
        case 'phishing': return 'Phishing & Fraud Awareness';
        case 'url-inspector': return 'Fake Bank Portal Inspector';
        case 'password-pin': return 'Password & PIN Workstation';
        case 'risk-eval': return 'Personal Fraud Risk Evaluator';
        case 'emergency': return 'Golden Hour & Directory';
        case 'quiz': return 'Safety Quiz & Certificate';
        case 'stories': return 'Community Fraud Stories';
        default: return 'Dhan Yodha Portal';
      }
    }
  };

  const handleToggleMenu = () => {
    if (window.innerWidth < 768) {
      if (setMobileOpen) setMobileOpen(!mobileOpen);
    } else {
      if (setCollapsed) setCollapsed(!collapsed);
    }
  };

  const cycleTheme = () => {
    if (themeMode === 'light') setThemeMode('dark');
    else if (themeMode === 'dark') setThemeMode('system');
    else setThemeMode('light');
  };

  return (
    <header className="py-2 py-md-3 px-3 px-md-4 border-bottom shadow-sm d-flex align-items-center justify-content-between gap-2 sticky-top">
      <div className="d-flex align-items-center gap-2">
        {/* Universal Menu Toggle Button */}
        <button 
          className="btn btn-forest btn-sm p-2 rounded-3 d-flex align-items-center gap-1 border-0 shadow-none text-white"
          style={{ outline: 'none', boxShadow: 'none' }}
          onClick={handleToggleMenu}
          title="Toggle Navigation Menu"
        >
          <Menu size={20} />
          <span className="small d-none d-lg-inline fw-semibold">
            {collapsed ? (lang === 'hi' ? 'मेन्यू' : 'Menu') : (lang === 'hi' ? 'बंद करें' : 'Close')}
          </span>
        </button>

        <div>
          <span className="badge bg-success bg-opacity-10 text-success fw-semibold px-2 py-1 mb-1 rounded-2 d-none d-sm-inline-block" style={{ fontSize: '0.7rem' }}>
            {lang === 'hi' ? 'धन योद्धा • राष्ट्रीय साइबर अपराध रोकथाम' : 'Dhan Yodha • Cyber Prevention'}
          </span>
          <h4 className="fw-bold mb-0 text-forest" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {getTitle()}
          </h4>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        {/* User Name Badge Button */}
        {userName && (
          <button 
            className="btn btn-sm btn-outline-success rounded-pill d-none d-sm-flex align-items-center gap-1 px-3 py-1 fw-bold border"
            onClick={onEditName}
            title="Click to edit your name"
          >
            <User size={14} className="text-success" />
            <span className="small text-truncate" style={{ maxWidth: '120px' }}>{userName}</span>
          </button>
        )}

        {/* Interactive Theme Switcher Button */}
        <button 
          className="btn btn-sm btn-outline-forest rounded-pill d-flex align-items-center gap-1 px-3 py-1 fw-bold shadow-none border"
          onClick={cycleTheme}
          title={`Click to switch theme. Current: ${themeMode.toUpperCase()}`}
          style={{ outline: 'none' }}
        >
          {themeMode === 'light' && (
            <>
              <Sun size={16} className="text-warning" />
              <span className="small d-none d-md-inline">{lang === 'hi' ? 'लाइट' : 'Light ☀️'}</span>
            </>
          )}
          {themeMode === 'dark' && (
            <>
              <Moon size={16} className="text-info" />
              <span className="small d-none d-md-inline">{lang === 'hi' ? 'डार्क' : 'Dark 🌙'}</span>
            </>
          )}
          {themeMode === 'system' && (
            <>
              <Monitor size={16} className="text-success" />
              <span className="small d-none d-md-inline">{lang === 'hi' ? 'ऑटो' : 'System 🖥️'}</span>
            </>
          )}
        </button>

        {/* Language Toggle Button */}
        <button 
          className="btn btn-sm btn-outline-forest rounded-3 d-flex align-items-center gap-1 fw-bold px-2 py-1 border-0 shadow-none"
          style={{ outline: 'none', boxShadow: 'none' }}
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          title="Toggle Language"
        >
          <Languages size={16} />
          <span className="small">{lang === 'en' ? 'हिंदी' : 'EN'}</span>
        </button>

        {/* Print Cheat Sheet */}
        <button 
          className="btn btn-sm btn-outline-dark rounded-3 d-none d-md-flex align-items-center gap-1 border-0 shadow-none"
          style={{ outline: 'none', boxShadow: 'none' }}
          onClick={onOpenPrintModal}
        >
          <Printer size={16} />
          <span>Cheat Sheet</span>
        </button>

        {/* Quiz Shortcut Button */}
        <button 
          className="btn btn-forest btn-sm rounded-3 d-flex align-items-center gap-1 px-2 py-1 border-0 shadow-none"
          style={{ outline: 'none', boxShadow: 'none' }}
          onClick={() => setActivePage('quiz')}
        >
          <span className="small fw-bold">{lang === 'hi' ? 'क्विज़' : 'Quiz'}</span>
        </button>
      </div>
    </header>
  );
}
