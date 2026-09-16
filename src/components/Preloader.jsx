import React, { useState, useEffect } from 'react';
import { ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Encrypting Connection...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        if (next > 40 && next < 70) setStatusText('Verifying SSL Security Protocols...');
        if (next >= 70) setStatusText('Launching Dhan Yodha Safe Portal...');
        return next > 100 ? 100 : next;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="preloader-overlay">
      <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100 mx-auto text-center">
        
        {/* Perfectly Centered Pulsing Shield Logo Box */}
        <div className="shield-pulse mb-4 mx-auto d-flex align-items-center justify-content-center">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center shadow-lg border border-2 border-warning"
            style={{ 
              width: '84px', 
              height: '84px', 
              background: 'linear-gradient(135deg, #1E3A2B 0%, #0A1610 100%)',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.5), 0 0 15px rgba(251, 191, 36, 0.6)'
            }}
          >
            <ShieldAlert size={46} style={{ color: '#FBBF24', filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))' }} />
          </div>
        </div>

        {/* Brand Name */}
        <h2 
          className="fw-bold text-white mb-1 tracking-wide mx-auto" 
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '1px', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}
        >
          DHAN YODHA
        </h2>
        <p className="text-success fw-semibold small mb-4 mx-auto" style={{ letterSpacing: '0.5px' }}>
          धन योद्धा • Secure Banking Awareness Portal
        </p>

        {/* Centered Encrypted Progress Bar */}
        <div className="progress-line-container mx-auto">
          <div 
            className="progress-line-bar" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        {/* Progress Percentage Counter */}
        <div className="d-flex align-items-center justify-content-center gap-2 mt-3 text-white-50 font-monospace small mx-auto">
          <Lock size={14} className="text-warning" />
          <span className="text-warning fw-bold">{progress}%</span>
          <span>• {statusText}</span>
        </div>

      </div>
    </div>
  );
}
