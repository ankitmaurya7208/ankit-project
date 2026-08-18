import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CreditCard, 
  Key, 
  HelpCircle, 
  MessageSquareQuote, 
  PhoneCall, 
  ArrowRight,
  Search,
  CheckSquare,
  Clock,
  Lock
} from 'lucide-react';
import UpiAtmOtpSimulator from '../components/Widgets/UpiAtmOtpSimulator';
import FraudRiskEvaluator from '../components/Widgets/FraudRiskEvaluator';

export default function Home({ setActivePage, storyCount = 0, lang = 'en' }) {
  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-glow"></div>
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <span className="badge bg-success bg-opacity-25 text-success mb-2 px-3 py-2 rounded-pill fw-semibold">
              🔒 {lang === 'hi' ? 'धन योद्धा • सुरक्षित ऑनलाइन बैंकिंग जागरूकता पोर्टल' : 'Dhan Yodha • Safe Banking Awareness Portal'}
            </span>
            <h1 className="display-5 fw-bold text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {lang === 'hi' ? 'Dhan Yodha — अपने पैसों को साइबर फ्रॉड से सुरक्षित रखें' : 'Dhan Yodha — Protect Your Money from Online Banking Frauds'}
            </h1>
            <p className="lead text-light opacity-90 mb-4" style={{ maxWidth: '650px' }}>
              {lang === 'hi' 
                ? 'UPI भुगतान, ATM कार्ड सुरक्षा, OTP हाइजीन, फ़िशिंग पहचान एवं पासवर्ड प्रबंधन की आवश्यक साइबर सुरक्षा नियम सीखें।' 
                : 'Learn essential cyber hygiene for UPI payments, ATM card protection, OTP safety, phishing detection, and secure password management.'}
            </p>

            <div className="d-flex flex-wrap gap-3">
              <button 
                className="btn btn-forest rounded-3 btn-lg px-4"
                onClick={() => setActivePage('quiz')}
              >
                <HelpCircle size={20} />
                <span>{lang === 'hi' ? 'सुरक्षा प्रश्नोत्तरी लें' : 'Take Online Safety Quiz'}</span>
              </button>
              <button 
                className="btn btn-outline-light rounded-3 btn-lg px-4"
                onClick={() => setActivePage('stories')}
              >
                <MessageSquareQuote size={20} />
                <span>{lang === 'hi' ? 'समुदाय कहानियाँ पढ़ें' : 'Read Community Stories'}</span>
              </button>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="p-4 bg-white bg-opacity-10 rounded-4 backdrop-blur border border-light border-opacity-25 text-white">
              <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-25 mb-3">
                <ShieldCheck size={48} style={{ color: '#6EE7B7' }} />
              </div>
              <h3 className="fw-bold mb-1" style={{ color: '#A7F3D0', textShadow: '0 0 12px rgba(167, 243, 208, 0.4)' }}>
                94% {lang === 'hi' ? 'साइबर फ्रॉड से बचाव' : 'Cyber Frauds Prevented'}
              </h3>
              <p className="small text-light opacity-90 mb-3 fw-medium">
                {lang === 'hi' 
                  ? 'केवल यह याद रखकर रोका जा सकता है कि पैसे पाने के लिए कभी भी PIN दर्ज न करें।' 
                  : 'Can be prevented simply by NEVER entering your UPI PIN to receive money.'}
              </p>
              <div className="p-2 rounded-3 bg-dark bg-opacity-75 small border border-secondary border-opacity-25 text-warning font-monospace fw-bold">
                National Cyber Helpline: 1930
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tool Entry Cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <div 
            className="custom-card beige-accent h-100 cursor-pointer"
            onClick={() => setActivePage('risk-eval')}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="bg-forest text-white p-3 rounded-3">
                <CheckSquare size={24} />
              </div>
              <ArrowRight size={20} className="text-muted" />
            </div>
            <h5 className="fw-bold text-forest mb-2">
              {lang === 'hi' ? 'व्यक्तिगत जोखिम मूल्यांकन' : 'Personal Risk Score Wizard'}
            </h5>
            <p className="small text-muted mb-0">
              Assess your vulnerability score (0-100) based on daily payment and NetBanking habits.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div 
            className="custom-card h-100 cursor-pointer"
            onClick={() => setActivePage('url-inspector')}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="bg-dark text-white p-3 rounded-3">
                <Search size={24} />
              </div>
              <ArrowRight size={20} className="text-muted" />
            </div>
            <h5 className="fw-bold text-dark mb-2">
              {lang === 'hi' ? 'फ़ेक बैंक पोर्टल निरीक्षक' : 'Fake Bank Portal & URL Inspector'}
            </h5>
            <p className="small text-muted mb-0">
              Inspect suspicious SMS links, domain typos, missing HTTPS locks, and malicious .apk files.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div 
            className="custom-card beige-accent h-100 cursor-pointer"
            onClick={() => setActivePage('emergency')}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="bg-danger text-white p-3 rounded-3">
                <Clock size={24} />
              </div>
              <ArrowRight size={20} className="text-muted" />
            </div>
            <h5 className="fw-bold text-dark mb-2">
              {lang === 'hi' ? 'गोल्डन आवर एवं डायरेक्टरी' : 'Emergency Golden Hour Protocol'}
            </h5>
            <p className="small text-muted mb-0">
              Critical 60-minute response checklist and official bank card blocking SMS/Helpline numbers.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Personal Risk Score Wizard */}
      <FraudRiskEvaluator lang={lang} />

      {/* Featured Interactive Widget: UPI & ATM Simulator Preview */}
      <div className="mt-2">
        <h4 className="fw-bold text-forest mb-3">
          <Lock size={22} className="me-2 text-success" />
          {lang === 'hi' ? 'UPI एवं ATM सुरक्षा सिम्युलेटर' : 'Featured Interactive Simulators'}
        </h4>
        <UpiAtmOtpSimulator />
      </div>
    </div>
  );
}
