import React from 'react';
import { Printer, ShieldCheck, PhoneCall, QrCode, Key, Lock, X } from 'lucide-react';

export default function PrintableCheatSheetModal({ show, onClose, lang = 'en' }) {
  if (!show) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 rounded-4 shadow-lg">
          <div className="modal-header bg-forest text-white rounded-top-4">
            <h5 className="modal-title fw-bold">
              <ShieldCheck size={22} className="me-2" />
              {lang === 'hi' ? 'धन योद्धा • सुरक्षित बैंकिंग पॉकेट चिट-शीट' : 'Dhan Yodha • Cyber Safety Emergency Cheat Sheet Card'}
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4" id="printableArea">
            <div className="p-4 border border-3 border-dark rounded-4 bg-white">
              {/* Header */}
              <div className="d-flex align-items-center justify-content-between border-bottom border-dark border-2 pb-3 mb-3">
                <div>
                  <h3 className="fw-bold text-dark mb-0 font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                    DHAN YODHA (धन योद्धा) POCKET CHEAT SHEET
                  </h3>
                  <small className="text-muted fw-bold">Keep near your study desk, fridge, or family ATM card</small>
                </div>
                <div className="text-end">
                  <span className="badge bg-danger fs-6">HELPLINE: 1930</span>
                </div>
              </div>

              {/* 5 Golden Rules */}
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="p-3 bg-light rounded-3 border">
                  <strong className="text-forest">1. QR Code Rule:</strong>
                  <p className="small mb-0 text-dark">Scanning a QR code and typing your PIN <strong>ALWAYS sends money out</strong> of your account. You NEVER enter a PIN to receive money.</p>
                </div>

                <div className="p-3 bg-light rounded-3 border">
                  <strong className="text-forest">2. OTP Confidentiality:</strong>
                  <p className="small mb-0 text-dark">Bank employees or customer care callers will <strong>NEVER ask for your OTP</strong>. Never share OTPs over phone calls.</p>
                </div>

                <div className="p-3 bg-light rounded-3 border">
                  <strong className="text-forest">3. ATM Slot Check:</strong>
                  <p className="small mb-0 text-dark">Wiggle the card reader slot before inserting your card. Cover the keypad with your hand while typing your PIN.</p>
                </div>

                <div className="p-3 bg-light rounded-3 border">
                  <strong className="text-forest">4. Screen Sharing Trap:</strong>
                  <p className="small mb-0 text-dark">Never download remote control apps like <strong>AnyDesk, TeamViewer, or RustDesk</strong> on the instructions of any caller.</p>
                </div>

                <div className="p-3 bg-light rounded-3 border">
                  <strong className="text-forest">5. Verification of Helpline:</strong>
                  <p className="small mb-0 text-dark">Never use customer care numbers found on Google ads. Always use numbers printed behind your debit/credit card.</p>
                </div>
              </div>

              {/* Footer Banner */}
              <div className="p-3 bg-dark text-white rounded-3 d-flex align-items-center justify-content-between small">
                <div>
                  <strong>Dhan Yodha • Report Online Frauds Immediately:</strong>
                  <div>National Cyber Crime Helpline: 1930 | Portal: cybercrime.gov.in</div>
                </div>
                <div className="font-monospace">DHAN-YODHA-2026</div>
              </div>
            </div>
          </div>

          <div className="modal-footer bg-light rounded-bottom-4">
            <button className="btn btn-outline-secondary" onClick={onClose}>
              Close
            </button>
            <button className="btn btn-forest fw-bold d-flex align-items-center gap-1" onClick={handlePrint}>
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
