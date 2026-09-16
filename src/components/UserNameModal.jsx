import React, { useState } from 'react';
import { ShieldAlert, User, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function UserNameModal({ show, onSubmitName, lang = 'en' }) {
  const [inputName, setInputName] = useState('');

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      onSubmitName(inputName.trim());
    }
  };

  return (
    <div 
      className="position-fixed inset-0 bg-black bg-opacity-75 d-flex align-items-center justify-content-center p-3 fade-in-up"
      style={{ zIndex: 9999, top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="cyber-card bg-white p-4 rounded-4 shadow-lg text-center position-relative w-100"
        style={{ maxWidth: '440px', border: '2px solid #10B981' }}
      >
        <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-10 text-success mb-3">
          <ShieldAlert size={42} />
        </div>

        <h4 className="fw-bold text-forest mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {lang === 'hi' ? 'धन योद्धा में आपका स्वागत है!' : 'Welcome to Dhan Yodha!'}
        </h4>
        <p className="small text-muted mb-4">
          {lang === 'hi' 
            ? 'अपनी सुरक्षित बैंकिंग यात्रा शुरू करने के लिए अपना नाम दर्ज करें:'
            : 'Enter your name to personalize your safe banking portal & certificate:'}
        </p>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="position-relative">
            <User size={18} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <input 
              type="text"
              required
              className="form-control form-control-lg ps-5 rounded-3 border-2"
              placeholder={lang === 'hi' ? 'अपना पूरा नाम दर्ज करें (उदा. राहुल शर्मा)' : 'Enter your full name (e.g. Rahul Sharma)'}
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              autoFocus
            />
          </div>

          <button type="submit" className="btn btn-forest btn-lg rounded-3 fw-bold w-100 mt-2 d-flex align-items-center justify-content-center gap-2">
            <span>{lang === 'hi' ? 'धन योद्धा बनें 🛡️' : 'Become a Dhan Yodha 🛡️'}</span>
            <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
