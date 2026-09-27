import React from 'react';
import { ArrowRight, ShieldCheck, ShieldAlert, CheckCircle2, XCircle, PhoneCall, Smartphone, Lock, QrCode } from 'lucide-react';

// 1. UPI PIN Flow Visual Diagram (Sending vs Receiving)
export function UpiPinFlowDiagram({ lang = 'en' }) {
  return (
    <div className="p-3 bg-white rounded-4 border shadow-sm my-3">
      <h6 className="fw-bold text-center text-forest mb-3 border-bottom pb-2">
        📊 Visual Diagram: Understanding UPI PIN Rules (पैसे भेजने बनाम पाने का नियम)
      </h6>
      <div className="row g-3 align-items-center text-center">
        {/* SENDING MONEY */}
        <div className="col-md-6">
          <div className="p-3 rounded-4 bg-danger bg-opacity-10 border border-danger">
            <span className="badge bg-danger mb-2">SCENARIO A: SENDING MONEY</span>
            <h6 className="fw-bold text-danger">You are paying a bill / shopkeeper</h6>
            <div className="d-flex align-items-center justify-content-center gap-2 my-2 fw-bold text-dark">
              <span>Your Bank</span>
              <ArrowRight className="text-danger" size={24} />
              <span>Recipient</span>
            </div>
            <div className="badge bg-dark text-warning p-2 px-3 rounded-pill fw-bold">
              🔑 Enter UPI PIN = Money Deducted (Right)
            </div>
          </div>
        </div>

        {/* RECEIVING MONEY */}
        <div className="col-md-6">
          <div className="p-3 rounded-4 bg-success bg-opacity-10 border border-success">
            <span className="badge bg-success mb-2">SCENARIO B: RECEIVING MONEY</span>
            <h6 className="fw-bold text-success">Receiving salary / refund / buyer money</h6>
            <div className="d-flex align-items-center justify-content-center gap-2 my-2 fw-bold text-dark">
              <span>Sender</span>
              <ArrowRight className="text-success" size={24} />
              <span>Your Bank</span>
            </div>
            <div className="badge bg-success text-white p-2 px-3 rounded-pill fw-bold">
              🚫 NO PIN REQUIRED! Direct Deposit (Safe)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Phishing URL Inspection Diagram
export function PhishingUrlDiagram({ lang = 'en' }) {
  return (
    <div className="p-3 bg-white rounded-4 border shadow-sm my-3">
      <h6 className="fw-bold text-center text-forest mb-3 border-bottom pb-2">
        🔍 Visual Diagram: Spotting Fake Phishing URLs (असली बनाम नकली बैंक लिंक)
      </h6>
      <div className="d-flex flex-column gap-3">
        {/* FAKE URL */}
        <div className="p-3 rounded-3 bg-danger bg-opacity-10 border border-danger d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="d-flex align-items-center gap-2">
            <XCircle className="text-danger flex-shrink-0" size={28} />
            <div>
              <strong className="text-danger d-block">❌ FAKE PHISHING LINK (Fraud)</strong>
              <code className="text-dark bg-white px-2 py-1 rounded border">http://sbi-kyc-update.online-info.top</code>
            </div>
          </div>
          <span className="badge bg-danger text-white">FRAUD DETECTED</span>
        </div>

        {/* REAL OFFICIAL URL */}
        <div className="p-3 rounded-3 bg-success bg-opacity-10 border border-success d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="d-flex align-items-center gap-2">
            <CheckCircle2 className="text-success flex-shrink-0" size={28} />
            <div>
              <strong className="text-success d-block">✅ OFFICIAL BANK PORTAL (Safe)</strong>
              <code className="text-dark bg-white px-2 py-1 rounded border">https://www.onlinesbi.sbi</code>
            </div>
          </div>
          <span className="badge bg-success text-white">VERIFIED SECURE</span>
        </div>
      </div>
    </div>
  );
}

// 3. Golden Hour Helpline 1930 Process Flow Diagram
export function GoldenHourProcessDiagram({ lang = 'en' }) {
  return (
    <div className="p-3 bg-dark text-white rounded-4 shadow-sm my-3 border border-warning">
      <h6 className="fw-bold text-center text-warning mb-3 border-bottom border-secondary pb-2">
        ⚡ Visual Diagram: Golden Hour Action Flow (1930 आपातकालीन प्रक्रिया)
      </h6>
      <div className="d-flex align-items-center justify-content-around text-center flex-wrap gap-3 py-2">
        <div className="p-2 px-3 bg-secondary bg-opacity-25 rounded-3">
          <ShieldAlert className="text-danger mb-1" size={28} />
          <div className="fw-bold small">1. Fraud Incident</div>
          <small className="text-muted">Money deducted</small>
        </div>
        <ArrowRight className="text-warning d-none d-md-inline" size={24} />
        <div className="p-2 px-3 bg-warning text-dark rounded-3 fw-bold">
          <PhoneCall className="text-dark mb-1" size={28} />
          <div className="small">2. Dial 1930</div>
          <small>Within 1-2 Hours</small>
        </div>
        <ArrowRight className="text-warning d-none d-md-inline" size={24} />
        <div className="p-2 px-3 bg-success text-white rounded-3">
          <Lock className="text-white mb-1" size={28} />
          <div className="fw-bold small">3. Account Frozen</div>
          <small className="text-light opacity-75">Stolen money blocked</small>
        </div>
      </div>
    </div>
  );
}
