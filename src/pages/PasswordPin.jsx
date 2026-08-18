import React from 'react';
import PasswordPinChecker from '../components/Widgets/PasswordPinChecker';
import { Key, Lock, ShieldCheck } from 'lucide-react';

export default function PasswordPin({ lang = 'en' }) {
  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Header Banner */}
      <div className="p-4 bg-white rounded-4 border shadow-sm">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-dark p-3 rounded-4 text-white">
            <Key size={32} />
          </div>
          <div>
            <h3 className="fw-bold mb-1">
              {lang === 'hi' ? 'पासवर्ड एवं PIN सुरक्षा वर्कस्टेशन' : 'Password & PIN Security Workstation'}
            </h3>
            <p className="text-muted mb-0">
              {lang === 'hi'
                ? 'सामान्य अनुमान लगाने वाले एल्गोरिदम के विरुद्ध अपने PIN का परीक्षण करें और पासवर्ड की ताकत मापें।'
                : 'Evaluate your PIN against common guessing algorithms and measure password strength.'}
            </p>
          </div>
        </div>
      </div>

      {/* Password & PIN Widget */}
      <PasswordPinChecker lang={lang} />
    </div>
  );
}
