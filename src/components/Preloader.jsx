import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="preloader-overlay">
      <div className="shield-pulse">
        <ShieldCheck size={56} className="text-success" />
      </div>

      <h2 className="mt-4 fw-bold tracking-wide text-white" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '1px' }}>
        DHAN YODHA
      </h2>
      <p className="text-light opacity-75 small mb-2 font-monospace">धन योद्धा • Secure Online Banking Awareness System</p>

      <div className="progress-line-container">
        <div className="progress-line-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="mt-3 small text-muted font-monospace">
        <Lock size={14} className="me-1" /> Encrypted & Verified ({progress}%)
      </div>
    </div>
  );
}
