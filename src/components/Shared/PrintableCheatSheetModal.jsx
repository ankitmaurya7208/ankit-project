import React from 'react';
import { Printer, ShieldCheck, PhoneCall, QrCode, Key, Lock, AlertOctagon, Smartphone, ShieldAlert, X, EyeOff } from 'lucide-react';

export default function PrintableCheatSheetModal({ show, onClose, lang = 'en' }) {
  if (!show) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 1060 }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 rounded-4 shadow-lg">
          
          {/* MODAL HEADER */}
          <div className="modal-header text-white rounded-top-4" style={{ background: '#1E3A2B' }}>
            <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
              <ShieldCheck size={24} className="text-warning" />
              {lang === 'hi' ? 'धन योद्धा • सुरक्षित बैंकिंग विजुअल चीट-शीट कार्ड' : 'Dhan Yodha • Cyber Safety Visual Infographic Cheat Sheet'}
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          {/* PRINTABLE CHEAT SHEET BODY */}
          <div className="modal-body p-4 bg-light" id="printableArea">
            <div className="p-4 border border-3 border-dark rounded-4 bg-white shadow-sm">
              
              {/* TOP BRAND HEADER & INFOGRAPHIC LOGO */}
              <div className="d-flex align-items-center justify-content-between border-bottom border-dark border-3 pb-3 mb-4 flex-wrap gap-2">
                <div className="d-flex align-items-center gap-3">
                  <div className="p-3 bg-dark text-warning rounded-4 border border-warning shadow-sm">
                    <ShieldAlert size={36} />
                  </div>
                  <div>
                    <h3 className="fw-bold text-dark mb-0 font-serif" style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.5px' }}>
                      DHAN YODHA (धन योद्धा) VISUAL CHEAT SHEET
                    </h3>
                    <small className="text-muted fw-bold">Keep near your study desk, fridge, or family ATM card pocket</small>
                  </div>
                </div>
                <div>
                  <span className="badge bg-danger fs-6 px-3 py-2 rounded-pill shadow-sm d-flex align-items-center gap-1">
                    <PhoneCall size={16} /> HELPLINE: 1930
                  </span>
                </div>
              </div>

              {/* 5 VISUAL INFOGRAPHIC GOLDEN RULES WITH IMAGES & ICONS */}
              <div className="d-flex flex-column gap-3 mb-4">
                
                {/* RULE 1: QR CODE */}
                <div className="p-3 rounded-4 border border-2 border-danger bg-danger-subtle d-flex align-items-start gap-3">
                  <div className="p-3 bg-danger text-white rounded-3 flex-shrink-0 shadow-sm text-center" style={{ width: '64px', height: '64px' }}>
                    <QrCode size={34} />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="badge bg-danger text-white px-2 py-1">RULE 1 • QR CODE SCAMS</span>
                      <strong className="text-danger fw-bold">Scan QR = Money Goes OUT!</strong>
                    </div>
                    <p className="small mb-0 text-dark fw-medium">
                      Scanning a QR code or entering your 4/6 digit PIN <strong>ALWAYS deducts money from your account</strong>. You <strong>NEVER</strong> enter a PIN or scan a code to receive money or refunds!
                    </p>
                  </div>
                </div>

                {/* RULE 2: OTP CONFIDENTIALITY */}
                <div className="p-3 rounded-4 border border-2 border-warning bg-warning-subtle d-flex align-items-start gap-3">
                  <div className="p-3 bg-warning text-dark rounded-3 flex-shrink-0 shadow-sm text-center" style={{ width: '64px', height: '64px' }}>
                    <Lock size={34} />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="badge bg-warning text-dark px-2 py-1">RULE 2 • OTP & PIN SAFETY</span>
                      <strong className="text-dark fw-bold">OTP is Secret & Personal!</strong>
                    </div>
                    <p className="small mb-0 text-dark fw-medium">
                      Bank managers, RBI officers, and customer care executives <strong>NEVER ask for your OTP or PIN</strong>. Never share One-Time Passwords over phone calls or SMS replies.
                    </p>
                  </div>
                </div>

                {/* RULE 3: ATM SLOT CHECK */}
                <div className="p-3 rounded-4 border border-2 border-primary bg-primary-subtle d-flex align-items-start gap-3">
                  <div className="p-3 bg-primary text-white rounded-3 flex-shrink-0 shadow-sm text-center" style={{ width: '64px', height: '64px' }}>
                    <EyeOff size={34} />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="badge bg-primary text-white px-2 py-1">RULE 3 • ATM KEYPAD SHIELD</span>
                      <strong className="text-primary fw-bold">Shield Keypad With Your Hand!</strong>
                    </div>
                    <p className="small mb-0 text-dark fw-medium">
                      Always check the ATM card slot for hidden skimmers. Cover the keypad with your hand while typing your PIN so hidden cameras cannot record your PIN.
                    </p>
                  </div>
                </div>

                {/* RULE 4: SCREEN SHARING APP TRAP */}
                <div className="p-3 rounded-4 border border-2 border-danger bg-danger-subtle d-flex align-items-start gap-3">
                  <div className="p-3 bg-dark text-danger rounded-3 flex-shrink-0 shadow-sm text-center border border-danger" style={{ width: '64px', height: '64px' }}>
                    <Smartphone size={34} />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="badge bg-dark text-white px-2 py-1">RULE 4 • REMOTE APP TRAP</span>
                      <strong className="text-danger fw-bold">Never Install AnyDesk / TeamViewer!</strong>
                    </div>
                    <p className="small mb-0 text-dark fw-medium">
                      Never download screen-sharing apps (AnyDesk, TeamViewer, QuickSupport) on caller instructions. These apps let scammers view your banking screen and steal passwords live!
                    </p>
                  </div>
                </div>

                {/* RULE 5: HELPLINE 1930 & GOLDEN HOUR */}
                <div className="p-3 rounded-4 border border-2 border-success bg-success-subtle d-flex align-items-start gap-3">
                  <div className="p-3 bg-success text-white rounded-3 flex-shrink-0 shadow-sm text-center" style={{ width: '64px', height: '64px' }}>
                    <PhoneCall size={34} />
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="badge bg-success text-white px-2 py-1">RULE 5 • GOLDEN HOUR HELPLINE</span>
                      <strong className="text-success fw-bold">Dial 1930 Within 1-2 Hours!</strong>
                    </div>
                    <p className="small mb-0 text-dark fw-medium">
                      If an unauthorized transaction occurs, dial <strong>1930 (National Cyber Crime Helpline)</strong> immediately. Calling in the Golden Hour enables cyber police to freeze stolen funds in scammer accounts.
                    </p>
                  </div>
                </div>

              </div>

              {/* FOOTER BANNER */}
              <div className="p-3 bg-dark text-white rounded-3 d-flex align-items-center justify-content-between small flex-wrap gap-2">
                <div>
                  <strong>🛡️ Dhan Yodha Safe Online Banking Awareness Initiative:</strong>
                  <div>National Cyber Crime Helpline: 1930 | Portal: cybercrime.gov.in</div>
                </div>
                <div className="font-monospace text-warning fw-bold">DHAN-YODHA-2026</div>
              </div>
            </div>
          </div>

          {/* MODAL FOOTER ACTIONS */}
          <div className="modal-footer bg-light rounded-bottom-4">
            <button className="btn btn-outline-secondary rounded-pill px-4" onClick={onClose}>
              Close
            </button>
            <button className="btn btn-forest fw-bold rounded-pill px-4 d-flex align-items-center gap-2 shadow-sm" style={{ backgroundColor: '#1E3A2B', borderColor: '#1E3A2B', color: '#fff' }} onClick={handlePrint}>
              <Printer size={18} />
              <span>Print / Save Visual Infographic (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
