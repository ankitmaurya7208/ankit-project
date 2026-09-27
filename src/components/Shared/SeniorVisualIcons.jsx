import React from 'react';
import { ShieldCheck, PhoneOff, Lock, AlertTriangle, Fingerprint, Smartphone, DollarSign, CheckCircle, XCircle } from 'lucide-react';

export default function SeniorVisualIcons({ lang = 'en' }) {
  return (
    <div className="p-4 bg-white rounded-4 border border-3 border-forest shadow-sm my-4">
      <div className="text-center mb-4">
        <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold fs-6 mb-2">
          👴👵 SENIOR CITIZEN EASY VISUAL GUIDE (बुजुर्गों के लिए सरल चित्र गाइड)
        </span>
        <h3 className="fw-bold text-forest mb-1 font-serif" style={{ fontFamily: 'Georgia, serif' }}>
          {lang === 'hi' ? 'बुजुर्गों के लिए आसानी से समझ में आने वाले 4 मुख्य चित्र प्रतीक' : '4 Easy Visual Icons for Elderly Banking Safety'}
        </h3>
        <p className="text-muted fs-5">
          {lang === 'hi' ? 'इन 4 चित्रों को देखें और अपने परिवार के वरिष्ठ नागरिकों को समझाएं:' : 'Look at these 4 visual icons to easily remember safe banking rules:'}
        </p>
      </div>

      <div className="row g-4">
        {/* ICON 1: MONEY INCOMING */}
        <div className="col-md-6">
          <div className="p-4 rounded-4 border border-3 border-success bg-success bg-opacity-10 h-100 text-center">
            <div className="d-inline-flex p-3 rounded-circle bg-success text-white mb-3 shadow-sm" style={{ width: '80px', height: '80px', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={48} />
            </div>
            <h4 className="fw-bold text-success mb-2">
              {lang === 'hi' ? '🟢 पैसे आने पर = कोई PIN नहीं!' : '🟢 MONEY ARRIVAL = NO PIN!'}
            </h4>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2 text-dark fs-5 fw-bold">
              <CheckCircle className="text-success" size={24} />
              <span>{lang === 'hi' ? 'पेंशन / रिफंड खाते में सीधे आते हैं' : 'Pension & Refunds arrive automatically'}</span>
            </div>
            <p className="text-muted fs-6 mb-0">
              {lang === 'hi' 
                ? 'पैसे मिलने पर कोई बटन या PIN दर्ज नहीं करना पड़ता। केवल भेजने पर PIN दर्ज होता है।' 
                : 'Money coming into your account requires ZERO button presses. PIN is ONLY to send money.'}
            </p>
          </div>
        </div>

        {/* ICON 2: UNKNOWN CALL DISCONNECT */}
        <div className="col-md-6">
          <div className="p-4 rounded-4 border border-3 border-danger bg-danger bg-opacity-10 h-100 text-center">
            <div className="d-inline-flex p-3 rounded-circle bg-danger text-white mb-3 shadow-sm" style={{ width: '80px', height: '80px', alignItems: 'center', justifyContent: 'center' }}>
              <PhoneOff size={48} />
            </div>
            <h4 className="fw-bold text-danger mb-2">
              {lang === 'hi' ? '🔴 अनजान कॉल = तुरंत फोन काटें!' : '🔴 UNKNOWN CALL = HANG UP!'}
            </h4>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2 text-dark fs-5 fw-bold">
              <XCircle className="text-danger" size={24} />
              <span>{lang === 'hi' ? 'OTP या खाता ब्लॉक की धमकी = 100% फ्रॉड' : 'Threat of account block = 100% FRAUD'}</span>
            </div>
            <p className="text-muted fs-6 mb-0">
              {lang === 'hi' 
                ? 'कॉल पर OTP मांगने वाले को तुरंत काटें। बैंक अधिकारी कभी भी फोन पर OTP नहीं मांगते।' 
                : 'Disconnect callers demanding OTPs or threatening 2-hour SIM/Bank blocking immediately.'}
            </p>
          </div>
        </div>

        {/* ICON 3: NO ANYDESK APP */}
        <div className="col-md-6">
          <div className="p-4 rounded-4 border border-3 border-dark bg-dark bg-opacity-10 h-100 text-center">
            <div className="d-inline-flex p-3 rounded-circle bg-dark text-warning mb-3 shadow-sm border border-warning" style={{ width: '80px', height: '80px', alignItems: 'center', justifyContent: 'center' }}>
              <Smartphone size={48} />
            </div>
            <h4 className="fw-bold text-dark mb-2">
              {lang === 'hi' ? '🛑 कोई ऐप डाउनलोड न करें!' : '🛑 NO SCREEN-SHARE APPS!'}
            </h4>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2 text-dark fs-5 fw-bold">
              <XCircle className="text-danger" size={24} />
              <span>{lang === 'hi' ? 'AnyDesk / TeamViewer = फोन हैक' : 'AnyDesk / TeamViewer = Phone Hack'}</span>
            </div>
            <p className="text-muted fs-6 mb-0">
              {lang === 'hi' 
                ? 'कस्टमर केयर कहने पर कोई ऐप डाउनलोड न करें। यह ऐप ठगों को आपकी स्क्रीन देखने देता है।' 
                : 'Never install remote desktop apps. Scammers use them to view your incoming OTP live.'}
            </p>
          </div>
        </div>

        {/* ICON 4: AADHAAR LOCK SHIELD */}
        <div className="col-md-6">
          <div className="p-4 rounded-4 border border-3 border-primary bg-primary bg-opacity-10 h-100 text-center">
            <div className="d-inline-flex p-3 rounded-circle bg-primary text-white mb-3 shadow-sm" style={{ width: '80px', height: '80px', alignItems: 'center', justifyContent: 'center' }}>
              <Fingerprint size={48} />
            </div>
            <h4 className="fw-bold text-primary mb-2">
              {lang === 'hi' ? '🔒 आधार बायोमेट्रिक लॉक रखें!' : '🔒 LOCK AADHAAR FINGERPRINT!'}
            </h4>
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2 text-dark fs-5 fw-bold">
              <ShieldCheck className="text-primary" size={24} />
              <span>{lang === 'hi' ? 'mAadhaar ऐप से फिंगरप्रिंट सुरक्षित करें' : 'Lock Biometrics via mAadhaar App'}</span>
            </div>
            <p className="text-muted fs-6 mb-0">
              {lang === 'hi' 
                ? 'अपने आधार फिंगरप्रिंट को mAadhaar ऐप से लॉक रखें ताकि बायोमेट्रिक चोरी से फ्रॉड न हो सके।' 
                : 'Lock your Aadhaar biometrics using mAadhaar app to prevent illegal fingerprint transactions.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
