import React from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  CreditCard, 
  AlertTriangle, 
  Key, 
  PhoneCall, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  MessageSquareQuote,
  Zap,
  Lock,
  Smartphone,
  User,
  Edit2
} from 'lucide-react';

export default function Home({ setActivePage, storyCount = 0, lang = 'en', userName = 'Warrior', onEditName }) {
  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      
      {/* Personalized Greeting Card matching user request */}
      <div className="p-3 px-4 bg-success bg-opacity-10 border border-success rounded-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2">
          <div className="p-2 bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '38px', height: '38px' }}>
            <User size={20} />
          </div>
          <div>
            <h5 className="fw-bold mb-0 text-forest" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {lang === 'hi'
                ? `नमस्ते ${userName}, क्या आप अपने पैसों की सुरक्षा के लिए तैयार हैं? 🛡️`
                : `Hello ${userName}, ready to protect your money? 🛡️`}
            </h5>
            <small className="text-muted">
              {lang === 'hi' ? 'आपका व्यक्तिगत सुरक्षा डैशबोर्ड सक्रिय है' : 'Your personal cyber safety protection dashboard is active'}
            </small>
          </div>
        </div>

        <button 
          className="btn btn-sm btn-outline-forest rounded-pill d-flex align-items-center gap-1"
          onClick={onEditName}
          title="Edit your name"
        >
          <Edit2 size={14} />
          <span className="small">{lang === 'hi' ? 'नाम बदलें' : 'Edit Name'}</span>
        </button>
      </div>

      {/* Hero Forest Green Banner */}
      <div className="hero-cyber-card text-center text-md-start">
        <div className="row align-items-center g-4">
          <div className="col-md-7">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-success bg-opacity-20 border border-success text-success mb-3 small fw-bold">
              <Sparkles size={14} className="text-warning" />
              <span>{lang === 'hi' ? 'राष्ट्रीय सुरक्षा पोर्टल • 2024' : 'NATIONAL SAFETY PORTAL • 2024'}</span>
            </div>

            <h1 className="fw-bold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {lang === 'hi' ? 'धन योद्धा साइबर सुरक्षा' : 'DHAN YODHA'}
            </h1>
            <p className="lead text-light opacity-90 mb-4" style={{ fontSize: '1.05rem' }}>
              {lang === 'hi'
                ? 'सुरक्षित ऑनलाइन बैंकिंग जागरूकता केंद्र। UPI फ्रॉड, ATM स्किमिंग और ओटीपी चोरी से अपना खाता बचाएं।'
                : 'India’s official safe online banking awareness portal. Empowering citizens against UPI, ATM & OTP cyber frauds.'}
            </p>

            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              <button 
                className="btn btn-warning text-dark px-4 py-2 rounded-pill fw-bold d-flex align-items-center gap-2 border-0"
                onClick={() => setActivePage('upi-atm')}
              >
                <span>{lang === 'hi' ? 'सुरक्षा सिम्युलेटर चलाएं' : 'Launch Safety Simulator'}</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold"
                onClick={() => setActivePage('senior-hub')}
              >
                {lang === 'hi' ? 'बुजुर्ग कॉर्नर' : 'Senior Citizens Hub'}
              </button>
            </div>
          </div>

          {/* 94% Stat Badge Box */}
          <div className="col-md-5 text-center">
            <div className="p-4 rounded-4 bg-black bg-opacity-40 border border-warning shadow-lg d-inline-block w-100" style={{ maxWidth: '320px' }}>
              <div className="position-relative d-inline-block mb-2">
                <div className="display-3 fw-bold font-monospace" style={{ color: '#A7F3D0', textShadow: '0 0 15px rgba(16, 185, 129, 0.5)' }}>
                  94%
                </div>
              </div>
              <h5 className="fw-bold text-warning mb-1">
                {lang === 'hi' ? 'साइबर फ्रॉड की रोकथाम' : 'Cyber Frauds Prevented'}
              </h5>
              <p className="small text-light opacity-85 mb-0">
                {lang === 'hi' ? 'हमारे समुदाय द्वारा 2024 में सुरक्षित व्यवहार!' : 'in 2024 by our educated community! STAY ALERT!'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Safety Modules 2x2 Grid */}
      <div>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="fw-bold mb-0 text-forest" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {lang === 'hi' ? 'मुख्य सुरक्षा मॉड्युल्स' : 'Key Safety Modules'}
          </h4>
          <span className="badge bg-forest text-white">
            {lang === 'hi' ? '4 इंटरएक्टिव उपकरण' : '4 Interactive Modules'}
          </span>
        </div>

        <div className="safety-module-grid">
          {/* Module 1: UPI Safety */}
          <div className="module-card" onClick={() => setActivePage('upi-atm')}>
            <div className="module-icon-box">
              <Zap size={28} />
            </div>
            <h6 className="fw-bold text-forest mb-1">UPI SAFETY</h6>
            <small className="text-muted">{lang === 'hi' ? 'UPI सुरक्षा नियम जानें' : 'Learn UPI safeguards'}</small>
          </div>

          {/* Module 2: ATM Secure */}
          <div className="module-card" onClick={() => setActivePage('upi-atm')}>
            <div className="module-icon-box">
              <CreditCard size={28} />
            </div>
            <h6 className="fw-bold text-forest mb-1">ATM SECURE</h6>
            <small className="text-muted">{lang === 'hi' ? 'ATM स्किमिंग से बचें' : 'Avoid ATM skimming'}</small>
          </div>

          {/* Module 3: OTP Protection */}
          <div className="module-card" onClick={() => setActivePage('password-pin')}>
            <div className="module-icon-box">
              <Lock size={28} />
            </div>
            <h6 className="fw-bold text-forest mb-1">OTP PROTECTION</h6>
            <small className="text-muted">{lang === 'hi' ? 'OTP गोपनीयता नियम' : 'Learn OTP protection'}</small>
          </div>

          {/* Module 4: Secure App */}
          <div className="module-card" onClick={() => setActivePage('url-inspector')}>
            <div className="module-icon-box">
              <Smartphone size={28} />
            </div>
            <h6 className="fw-bold text-forest mb-1">SECURE APP</h6>
            <small className="text-muted">{lang === 'hi' ? 'मोबाइल सुरक्षा निर्देश' : 'Learn Mobile safety'}</small>
          </div>
        </div>
      </div>

      {/* Emergency Helpline Call 1930 Bar */}
      <a href="tel:1930" className="emergency-cyber-bar">
        <PhoneCall size={22} className="animate-pulse" />
        <span className="text-white">
          {lang === 'hi' ? 'आपातकालीन सहायता: साइबर फ्रॉड की तुरंत रिपोर्ट करें - कॉल 1930' : 'EMERGENCY: Report Cyber Fraud: Call 1930'}
        </span>
      </a>

      {/* Quick Action Tiles */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="cyber-card h-100 cursor-pointer" onClick={() => setActivePage('news')}>
            <div className="d-flex align-items-center gap-3">
              <div className="p-3 bg-danger bg-opacity-10 text-danger rounded-3">
                <AlertTriangle size={26} />
              </div>
              <div>
                <h6 className="fw-bold text-forest mb-1">Scam News Bulletin</h6>
                <small className="text-muted">Real case files & advisories</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="cyber-card h-100 cursor-pointer" onClick={() => setActivePage('quiz')}>
            <div className="d-flex align-items-center gap-3">
              <div className="p-3 bg-warning bg-opacity-20 text-dark rounded-3">
                <HelpCircle size={26} />
              </div>
              <div>
                <h6 className="fw-bold text-forest mb-1">Online Safety Quiz</h6>
                <small className="text-muted">Earn Certificate for {userName}</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="cyber-card h-100 cursor-pointer" onClick={() => setActivePage('stories')}>
            <div className="d-flex align-items-center gap-3">
              <div className="p-3 bg-success bg-opacity-10 text-success rounded-3">
                <MessageSquareQuote size={26} />
              </div>
              <div>
                <h6 className="fw-bold text-forest mb-1">Community Stories</h6>
                <small className="text-muted">{storyCount} Victim Experiences</small>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
