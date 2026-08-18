import React from 'react';
import { ShieldCheck, Languages, ExternalLink, Printer } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, lang, setLang, onOpenPrintModal }) {
  const getTitle = () => {
    if (lang === 'hi') {
      switch (activePage) {
        case 'home': return 'धन योद्धा • सुरक्षित बैंकिंग डैशबोर्ड';
        case 'senior-hub': return 'धन योद्धा • वरिष्ठ नागरिक सुरक्षित बैंकिंग कॉर्नर (सरल मोड)';
        case 'news': return 'धन योद्धा • वास्तविक साइबर फ्रॉड समाचार एवं क्राइम फाइल्स';
        case 'upi-atm': return 'धन योद्धा • UPI, ATM एवं OTP सुरक्षा';
        case 'phishing': return 'धन योद्धा • फ़िशिंग उदाहरण एवं स्कैम जागरूकता';
        case 'url-inspector': return 'धन योद्धा • फ़ेक बैंक पोर्टल एवं URL निरीक्षक';
        case 'password-pin': return 'धन योद्धा • पासवर्ड एवं PIN वर्कस्टेशन';
        case 'risk-eval': return 'धन योद्धा • व्यक्तिगत जोखिम मूल्यांकन';
        case 'emergency': return 'धन योद्धा • गोल्डन आवर एवं बैंक डायरेक्टरी';
        case 'quiz': return 'धन योद्धा • ऑनलाइन सुरक्षा क्विज़ एवं प्रमाण पत्र';
        case 'stories': return 'धन योद्धा • समुदाय अनुभव कहानियाँ';
        default: return 'धन योद्धा सुरक्षा पोर्टल';
      }
    } else {
      switch (activePage) {
        case 'home': return 'Dhan Yodha • Dashboard Overview';
        case 'senior-hub': return 'Dhan Yodha • Senior Citizens Safe Banking Hub (Easy Mode)';
        case 'news': return 'Dhan Yodha • Real-Life Cyber Fraud News Bulletins';
        case 'upi-atm': return 'Dhan Yodha • UPI, ATM & OTP Safety';
        case 'phishing': return 'Dhan Yodha • Phishing Examples & Fraud Awareness';
        case 'url-inspector': return 'Dhan Yodha • Fake Bank Portal & URL Inspector';
        case 'password-pin': return 'Dhan Yodha • Password & PIN Workstation';
        case 'risk-eval': return 'Dhan Yodha • Personal Fraud Risk Evaluator';
        case 'emergency': return 'Dhan Yodha • Golden Hour Protocol & Helpline Directory';
        case 'quiz': return 'Dhan Yodha • Online Safety Quiz & Certificate';
        case 'stories': return 'Dhan Yodha • Community Fraud Stories';
        default: return 'Dhan Yodha Safe Banking Portal';
      }
    }
  };

  return (
    <header className="py-3 px-4 bg-white border-bottom shadow-sm d-flex flex-wrap align-items-center justify-content-between gap-3 sticky-top">
      <div className="d-flex align-items-center gap-3">
        <div>
          <span className="badge bg-success bg-opacity-10 text-success fw-semibold px-2 py-1 mb-1 rounded-2" style={{ fontSize: '0.75rem' }}>
            {lang === 'hi' ? 'धन योद्धा • राष्ट्रीय साइबर अपराध रोकथाम पहल' : 'Dhan Yodha • National Cyber Prevention Initiative'}
          </span>
          <h4 className="fw-bold mb-0 text-dark" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {getTitle()}
          </h4>
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        {/* Language Toggle Button */}
        <button 
          className="btn btn-sm btn-outline-forest rounded-3 d-flex align-items-center gap-1 fw-bold"
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          title="Toggle Language"
        >
          <Languages size={16} />
          <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
        </button>

        {/* Print Cheat Sheet */}
        <button 
          className="btn btn-sm btn-outline-dark rounded-3 d-flex align-items-center gap-1"
          onClick={onOpenPrintModal}
        >
          <Printer size={16} />
          <span className="d-none d-md-inline">Cheat Sheet</span>
        </button>

        <a 
          href="https://cybercrime.gov.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline-dark btn-sm d-none d-md-flex align-items-center gap-1 rounded-3 fw-semibold"
        >
          <span>Cyber Portal</span>
          <ExternalLink size={14} />
        </a>

        <button 
          className="btn btn-forest btn-sm rounded-3 d-flex align-items-center gap-1"
          onClick={() => setActivePage('quiz')}
        >
          <span>{lang === 'hi' ? 'सुरक्षा क्विज़ लें' : 'Take Safety Quiz'}</span>
        </button>
      </div>
    </header>
  );
}
