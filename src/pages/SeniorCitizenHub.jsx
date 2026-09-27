import React from 'react';
import { PhoneCall, ShieldCheck, Heart, AlertTriangle, Eye, CreditCard, Lock } from 'lucide-react';
import SeniorVisualIcons from '../components/Shared/SeniorVisualIcons';

export default function SeniorCitizenHub({ lang = 'en' }) {
  return (
    <div className="d-flex flex-column gap-4 fade-in-up" style={{ fontSize: '1.15rem' }}>
      {/* Top Banner */}
      <div className="p-4 bg-forest text-white rounded-4 shadow-md border border-success">
        <div className="d-flex align-items-center gap-3">
          <div className="p-3 bg-white text-forest rounded-circle">
            <Heart size={36} />
          </div>
          <div>
            <span className="badge bg-warning text-dark mb-1 fw-bold fs-6">
              {lang === 'hi' ? 'वरिष्ठ नागरिक सुरक्षा कॉर्नर' : 'Senior Citizens Safe Banking Hub'}
            </span>
            <h2 className="fw-bold mb-0 text-white" style={{ fontFamily: 'Georgia, serif' }}>
              {lang === 'hi' ? 'बुजुर्गों के लिए सरल एवं सुरक्षित ऑनलाइन बैंकिंग नियम' : 'Simple & Safe Banking Rules for Senior Citizens'}
            </h2>
          </div>
        </div>
      </div>

      {/* Senior Citizen Visual Icons Guide */}
      <SeniorVisualIcons lang={lang} />

      {/* Emergency Helpline Banner */}
      <div className="p-4 bg-warning bg-opacity-20 border border-warning rounded-4 text-center">
        <h3 className="fw-bold text-dark mb-2">
          <PhoneCall size={28} className="me-2 text-danger" />
          {lang === 'hi' ? 'किसी भी बैंकिंग फ्रॉड की स्थिति में तुरंत डायल करें:' : 'In case of any fraud, immediately dial:'}
        </h3>
        <div className="display-4 fw-bold text-danger my-2 font-monospace">1930</div>
        <p className="lead fw-semibold text-dark mb-0">
          {lang === 'hi' ? 'राष्ट्रीय साइबर अपराध हेल्पलाइन (24x7 निःशुल्क)' : 'National Cyber Crime Helpline (24x7 Toll-Free)'}
        </p>
      </div>

      {/* 3 Simple Golden Rules for Elderly */}
      <div className="custom-card border-3 border-forest">
        <h3 className="fw-bold text-forest mb-4 text-center">
          <ShieldCheck size={28} className="me-2 text-success" />
          {lang === 'hi' ? 'वरिष्ठ नागरिकों के लिए 3 मुख्य स्वर्णिम नियम' : '3 Simple Commandments for Senior Citizens'}
        </h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white rounded-4 border border-2 border-danger h-100 text-center shadow-sm">
              <div className="d-inline-flex p-3 rounded-circle bg-danger text-white mb-3">
                <Lock size={32} />
              </div>
              <h4 className="fw-bold text-danger mb-2">
                {lang === 'hi' ? '1. OTP कभी न बताएं' : '1. NEVER Share OTP'}
              </h4>
              <p className="text-dark fs-5 mb-0">
                {lang === 'hi'
                  ? 'फोन पर कोई भी व्यक्ति (चाहे खुद को बैंक मैनेजर कहे) OTP मांगे तो कभी न बताएं।'
                  : 'Never share the 6-digit OTP received on your mobile with anyone over a phone call.'}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white rounded-4 border border-2 border-warning h-100 text-center shadow-sm">
              <div className="d-inline-flex p-3 rounded-circle bg-warning text-dark mb-3">
                <CreditCard size={32} />
              </div>
              <h4 className="fw-bold text-dark mb-2">
                {lang === 'hi' ? '2. QR कोड केवल देने के लिए' : '2. QR Code is ONLY to Pay'}
              </h4>
              <p className="text-dark fs-5 mb-0">
                {lang === 'hi'
                  ? 'पैसे प्राप्त करने के लिए PIN की आवश्यकता नहीं होती। PIN डालने से हमेशा पैसे कटते हैं।'
                  : 'You NEVER enter a PIN to receive money. Entering a PIN ALWAYS deducts money.'}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white rounded-4 border border-2 border-success h-100 text-center shadow-sm">
              <div className="d-inline-flex p-3 rounded-circle bg-success text-white mb-3">
                <Eye size={32} />
              </div>
              <h4 className="fw-bold text-success mb-2">
                {lang === 'hi' ? '3. ATM कीपैड ढकें' : '3. Cover Keypad at ATM'}
              </h4>
              <p className="text-dark fs-5 mb-0">
                {lang === 'hi'
                  ? 'ATM में PIN टाइप करते समय हमेशा हाथ से कीपैड को ढकें ताकि कोई न देख सके।'
                  : 'Always shield the ATM keypad with your hand while typing your 4-digit PIN.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Large Text Bank Helpline Directory */}
      <div className="custom-card beige-accent">
        <h3 className="fw-bold text-forest mb-3">
          {lang === 'hi' ? 'प्रमुख बैंकों के आपातकालीन हेल्पलाइन नंबर' : 'Emergency Bank Toll-Free Phone Numbers'}
        </h3>
        <p className="text-muted mb-4">
          {lang === 'hi' ? 'कार्ड खोने या फ्रॉड होने पर तुरंत इन नंबरों पर कॉल करें:' : 'Call these official helpline numbers immediately to freeze your card:'}
        </p>

        <div className="row g-3">
          <div className="col-md-6">
            <div className="p-3 bg-white rounded-3 border d-flex align-items-center justify-content-between">
              <span className="fw-bold fs-4 text-dark">State Bank of India (SBI)</span>
              <a href="tel:18001234" className="btn btn-forest fw-bold fs-5 px-3">1800 1234</a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 bg-white rounded-3 border d-flex align-items-center justify-content-between">
              <span className="fw-bold fs-4 text-dark">HDFC Bank</span>
              <a href="tel:18002586161" className="btn btn-forest fw-bold fs-5 px-3">1800 258 6161</a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 bg-white rounded-3 border d-flex align-items-center justify-content-between">
              <span className="fw-bold fs-4 text-dark">ICICI Bank</span>
              <a href="tel:18001080" className="btn btn-forest fw-bold fs-5 px-3">1800 1080</a>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 bg-white rounded-3 border d-flex align-items-center justify-content-between">
              <span className="fw-bold fs-4 text-dark">Punjab National Bank (PNB)</span>
              <a href="tel:18001802222" className="btn btn-forest fw-bold fs-5 px-3">1800 180 2222</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
