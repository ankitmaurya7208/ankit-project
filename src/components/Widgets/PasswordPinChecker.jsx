import React, { useState } from 'react';
import { Key, ShieldCheck, ShieldAlert, AlertCircle, CheckCircle2, Lock } from 'lucide-react';

export default function PasswordPinChecker({ lang = 'en' }) {
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');

  // PIN Evaluation
  const evaluatePin = (p) => {
    if (!p) return null;
    if (!/^\d{4,6}$/.test(p)) {
      return { score: 'invalid', message: lang === 'hi' ? 'PIN 4 या 6 अंकों की संख्या होनी चाहिए।' : 'PIN must be 4 or 6 numeric digits.', bg: 'bg-secondary' };
    }

    const weakPatterns = ['1234', '4321', '0000', '1111', '2222', '3333', '4444', '5555', '6666', '7777', '8888', '9999', '123456', '654321', '2580', '1470'];
    if (weakPatterns.includes(p)) {
      return { score: 'WEAK', message: lang === 'hi' ? '⚠️ अत्यधिक संवेदनशील! कीपैड पर क्रमिक या आसान पैटर्न होने के कारण आसानी से अनुमान लगाया जा सकता है।' : '⚠️ High vulnerability! Easily guessed sequentially or vertically on keypad.', bg: 'bg-danger text-white' };
    }

    if (/^(\d)\1+(\d)\2+$/.test(p)) {
      return { score: 'WEAK', message: lang === 'hi' ? '⚠️ दोहराए गए अंक कंधे के ऊपर से देखने वालों (shoulder surfing) के लिए आसान लक्ष्य हैं।' : '⚠️ Repeating paired digits are easy targets for shoulder surfing.', bg: 'bg-warning text-dark' };
    }

    const num = parseInt(p, 10);
    if (num >= 1940 && num <= 2026) {
      return { score: 'MODERATE', message: lang === 'hi' ? '⚠️ जन्म वर्ष का पता चला! साइबर ठग सोशल मीडिया से जन्मतिथि निकालकर आसानी से PIN का अनुमान लगाते हैं।' : '⚠️ Year of birth detected! Fraudsters use social media dates to guess PINs.', bg: 'bg-warning text-dark' };
    }

    return { score: 'STRONG', message: lang === 'hi' ? '✅ उत्कृष्ट! यादृच्छिक गैर-क्रमिक सुरक्षित PIN चयन।' : '✅ Excellent! Random non-sequential PIN choice.', bg: 'bg-success text-white' };
  };

  // Password Strength Evaluation
  const evaluatePassword = (pw) => {
    if (!pw) return { score: 0, label: lang === 'hi' ? 'खाली' : 'Empty', timeToCrack: lang === 'hi' ? 'तुरंत' : 'Instant' };
    let score = 0;
    if (pw.length >= 8) score += 20;
    if (pw.length >= 12) score += 20;
    if (/[A-Z]/.test(pw)) score += 15;
    if (/[a-z]/.test(pw)) score += 15;
    if (/[0-9]/.test(pw)) score += 15;
    if (/[^A-Za-z0-9]/.test(pw)) score += 15;

    let label = lang === 'hi' ? 'कमजोर' : 'Weak';
    let timeToCrack = lang === 'hi' ? 'कुछ सेकंड' : 'Few seconds';
    let badgeClass = 'bg-danger';

    if (score >= 80) {
      label = lang === 'hi' ? 'अत्यंत मजबूत' : 'Very Strong';
      timeToCrack = lang === 'hi' ? '300+ वर्ष' : '300+ Years';
      badgeClass = 'bg-success';
    } else if (score >= 50) {
      label = lang === 'hi' ? 'मध्यम' : 'Moderate';
      timeToCrack = lang === 'hi' ? '3 सप्ताह' : '3 Weeks';
      badgeClass = 'bg-warning text-dark';
    }

    return { score, label, timeToCrack, badgeClass };
  };

  const pinAnalysis = evaluatePin(pin);
  const pwAnalysis = evaluatePassword(password);

  return (
    <div className="d-flex flex-column gap-4">
      {/* PIN Security Section */}
      <div className="custom-card beige-accent">
        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="bg-forest p-2 rounded-3 text-white">
            <Key size={22} />
          </div>
          <div>
            <h5 className="fw-bold mb-0">
              {lang === 'hi' ? 'ATM एवं UPI PIN सुरक्षा मूल्यांकनकर्ता' : 'ATM & UPI PIN Safety Evaluator'}
            </h5>
            <small className="text-muted">
              {lang === 'hi' ? 'परीक्षण करें कि क्या आपका PIN अनुमान लगाने योग्य पैटर्न पर आधारित है' : 'Test whether your PIN relies on predictable patterns'}
            </small>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-4 border">
              <label className="form-label fw-bold text-dark mb-2">
                {lang === 'hi' ? 'अपना 4 या 6-अंकीय PIN जांचें:' : 'Test Your 4 or 6-Digit PIN:'}
              </label>
              <input 
                type="text" 
                maxLength={6}
                placeholder="e.g. 4819" 
                className="form-control form-control-lg font-monospace fw-bold text-center tracking-widest mb-3"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
              />

              {pinAnalysis ? (
                <div className={`p-3 rounded-3 ${pinAnalysis.bg} small fw-bold`}>
                  <div>{lang === 'hi' ? `PIN सुरक्षा स्तर: ${pinAnalysis.score}` : `PIN Security Level: ${pinAnalysis.score}`}</div>
                  <div className="fw-normal mt-1">{pinAnalysis.message}</div>
                </div>
              ) : (
                <div className="p-3 bg-light rounded-3 text-muted small">
                  {lang === 'hi' ? 'पैटर्न और जन्मतिथि की असुरक्षा जांचने के लिए ऊपर PIN टाइप करें।' : 'Type a PIN above to check sequential patterns, date vulnerabilities, and repeating numbers.'}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 border h-100">
              <h6 className="fw-bold text-forest mb-2">
                <ShieldCheck size={18} className="me-1 text-success" />
                {lang === 'hi' ? 'PIN सुरक्षा के मुख्य नियम:' : 'Golden Rules for PIN Protection:'}
              </h6>
              <ul className="small text-muted ps-3 d-flex flex-column gap-2 mb-0">
                <li>
                  <strong>{lang === 'hi' ? 'जन्म वर्ष का उपयोग न करें:' : 'Never use DOB / Birth Year:'}</strong>{' '}
                  {lang === 'hi' ? 'सोशल मीडिया से जन्मतिथि आसानी से निकाली जा सकती है।' : 'Fraudsters extract birthdays from Facebook/LinkedIn.'}
                </li>
                <li>
                  <strong>{lang === 'hi' ? 'कीपैड पैटर्न से बचें:' : 'Avoid Keypad Patterns:'}</strong>{' '}
                  {lang === 'hi' ? 'सीधी रेखाएँ (2580) आसानी से अनुमानित होती हैं।' : 'Straight vertical (2580) or diagonal lines are easily guessed.'}
                </li>
                <li>
                  <strong>{lang === 'hi' ? 'अलग-अलग PIN रखें:' : 'Different PINs for Different Cards:'}</strong>{' '}
                  {lang === 'hi' ? 'ATM और UPI दोनों के लिए एक ही PIN कभी न रखें!' : 'Never use the same PIN for both ATM and UPI!'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* NetBanking Password Workstation */}
      <div className="custom-card">
        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="bg-dark p-2 rounded-3 text-white">
            <Lock size={22} />
          </div>
          <div>
            <h5 className="fw-bold mb-0">
              {lang === 'hi' ? 'नेटबैंकिंग पासवर्ड मजबूती वर्कस्टेशन' : 'NetBanking Password Strength Workstation'}
            </h5>
            <small className="text-muted">
              {lang === 'hi' ? 'वास्तविक समय में पासवर्ड क्रैक होने का अनुमानित समय देखें' : 'Real-time entropy score and time-to-crack estimate'}
            </small>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-light p-4 rounded-4 border">
              <label className="form-label fw-bold text-dark mb-2">
                {lang === 'hi' ? 'पासवर्ड नमूना दर्ज करें:' : 'Test Netbanking Password:'}
              </label>
              <input 
                type="password" 
                placeholder="Enter password sample..." 
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="progress mb-2" style={{ height: '10px' }}>
                <div 
                  className={`progress-bar ${pwAnalysis.score >= 80 ? 'bg-success' : pwAnalysis.score >= 50 ? 'bg-warning' : 'bg-danger'}`} 
                  style={{ width: `${pwAnalysis.score}%` }}
                ></div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <span className="small text-muted">{lang === 'hi' ? 'मजबूती:' : 'Strength:'}</span>
                <span className={`badge ${pwAnalysis.badgeClass}`}>{pwAnalysis.label}</span>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <span className="small text-muted">{lang === 'hi' ? 'अनुमानित हैक समय:' : 'Est. Time to Brute-Force Crack:'}</span>
                <span className="small fw-bold text-dark">{pwAnalysis.timeToCrack}</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-light rounded-4 border">
              <h6 className="fw-bold text-dark mb-2">
                {lang === 'hi' ? 'सुरक्षित पासवर्ड की विशेषताएँ:' : 'Checklist for a Hacker-Proof Password:'}
              </h6>
              <div className="d-flex flex-column gap-2 small text-muted">
                <div className="d-flex align-items-center gap-2">
                  {password.length >= 12 ? <CheckCircle2 size={16} className="text-success" /> : <AlertCircle size={16} className="text-muted" />}
                  {lang === 'hi' ? 'कम से कम 12 अक्षर लंबा' : 'At least 12 characters long'}
                </div>
                <div className="d-flex align-items-center gap-2">
                  {/[A-Z]/.test(password) && /[a-z]/.test(password) ? <CheckCircle2 size={16} className="text-success" /> : <AlertCircle size={16} className="text-muted" />}
                  {lang === 'hi' ? 'बड़े और छोटे अक्षरों (A-Z, a-z) का मिश्रण' : 'Mix of Uppercase & Lowercase letters'}
                </div>
                <div className="d-flex align-items-center gap-2">
                  {/[0-9]/.test(password) ? <CheckCircle2 size={16} className="text-success" /> : <AlertCircle size={16} className="text-muted" />}
                  {lang === 'hi' ? 'कम से कम एक संख्या (0-9)' : 'At least one number (0-9)'}
                </div>
                <div className="d-flex align-items-center gap-2">
                  {/[^A-Za-z0-9]/.test(password) ? <CheckCircle2 size={16} className="text-success" /> : <AlertCircle size={16} className="text-muted" />}
                  {lang === 'hi' ? 'विशेष प्रतीक (उदा. @ # $ % ^ & *)' : 'Special symbol (e.g. @ # $ % ^ & *)'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
