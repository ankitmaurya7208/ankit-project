import React, { useState } from 'react';
import { Video, PhoneOff, AlertTriangle, ShieldCheck, XCircle, CheckCircle2, ShieldAlert, UserCheck, Flame, RefreshCw } from 'lucide-react';

export default function DigitalArrestSimulator({ lang = 'en' }) {
  const [callActive, setCallActive] = useState(true);
  const [userChoice, setUserChoice] = useState(null);

  const handleChoice = (choice) => {
    setUserChoice(choice);
    setCallActive(false);
  };

  const handleReset = () => {
    setUserChoice(null);
    setCallActive(true);
  };

  return (
    <div className="custom-card beige-accent">
      <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-3">
        <div className="bg-danger p-2 rounded-3 text-white">
          <Video size={22} />
        </div>
        <div>
          <h5 className="fw-bold mb-0">
            {lang === 'hi' ? 'डिजिटल अरेस्ट वीडियो कॉल रक्षा सिम्युलेटर' : 'Digital Arrest Video Call Defense Simulator'}
          </h5>
          <small className="text-muted">
            {lang === 'hi' ? 'CBI और पुलिस बनकर आने वाले फर्जी वीडियो कॉल से निपटने का अभ्यास करें' : 'Practice defending against fake Police/CBI video call extortion threats'}
          </small>
        </div>
      </div>

      {callActive ? (
        <div className="row g-4">
          {/* Simulated Video Call Screen */}
          <div className="col-lg-7">
            <div className="p-4 bg-dark text-white rounded-4 border border-danger shadow-lg position-relative overflow-hidden">
              {/* Top Video Status Banner */}
              <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary pb-2">
                <span className="badge bg-danger d-flex align-items-center gap-1 animate-pulse">
                  <Flame size={14} /> CONFIDENTIAL VIDEO INTERROGATION
                </span>
                <span className="small text-danger font-monospace fw-bold">🔴 RECORDING • 00:04:12</span>
              </div>

              {/* Simulated Caller View Box */}
              <div className="p-4 rounded-3 text-center bg-black border border-secondary mb-3 position-relative" style={{ minHeight: '220px' }}>
                <div className="d-inline-flex p-3 rounded-circle bg-secondary bg-opacity-25 mb-2">
                  <UserCheck size={48} className="text-warning" />
                </div>
                <h5 className="fw-bold text-warning mb-1">
                  {lang === 'hi' ? 'अधिकारी: डी.के. शर्मा (CBI नारकोटिक्स सेल)' : 'Officer: D.K. Sharma (CBI Narcotics Bureau)'}
                </h5>
                <p className="small text-light opacity-75 font-monospace mb-2">
                  {lang === 'hi' ? 'स्थान: सीबीआई हेडक्वार्टर, नई दिल्ली' : 'Location: CBI HQ, New Delhi • Official Uniform Verification'}
                </p>

                {/* Threat Dialogue Box */}
                <div className="p-3 bg-danger bg-opacity-20 border border-danger rounded-3 text-start small text-light">
                  💬 <em>"{lang === 'hi'
                    ? 'सुनिए! आपके आधार कार्ड पर ताइवान से पार्सल भेजा गया है जिसमें 5 फर्जी पासपोर्ट और 200g एमडीएमए ड्रग्स मिली हैं। यदि आपने वीडियो कॉल बंद किया या किसी को बताया तो लोकल पुलिस 15 मिनट में आपके घर पहुंचेगी! जांच के लिए तुरंत हमारे सरकारी आरबीआई सत्यापन खाते में ₹1,50,000 ट्रांसफर करें।'
                    : 'Listen carefully! A parcel from Taiwan was seized under your Aadhaar containing 5 illegal passports and 200g MDMA drugs. If you disconnect this video call, police will arrest you in 15 minutes! Transfer ₹1,50,000 to our RBI Verification Account immediately.'}"</em>
                </div>
              </div>

              {/* Call Controls */}
              <div className="d-flex align-items-center justify-content-center gap-3">
                <button 
                  className="btn btn-danger btn-sm rounded-pill px-4 fw-bold d-flex align-items-center gap-1"
                  onClick={() => handleChoice('hangup')}
                >
                  <PhoneOff size={16} />
                  <span>{lang === 'hi' ? 'कॉल तुरंत काटें' : 'Hang Up Call Immediately'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* User Decision Panel */}
          <div className="col-lg-5">
            <div className="p-4 bg-white rounded-4 border h-100 d-flex flex-column justify-content-between">
              <div>
                <span className="badge bg-warning text-dark mb-2">
                  {lang === 'hi' ? 'आपकी प्रतिक्रिया क्या होगी?' : 'What will you do?'}
                </span>
                <h6 className="fw-bold text-dark mb-3">
                  {lang === 'hi' ? 'वीडियो कॉल पर फर्जी गिरफ्तारी का डर दिखाकर पैसे मांगे जा रहे हैं:' : 'The fake cop demands immediate money transfer to avoid arrest:'}
                </h6>

                <div className="d-flex flex-column gap-2 mb-3">
                  <button 
                    className="btn btn-outline-danger text-start p-3 rounded-3 small fw-medium"
                    onClick={() => handleChoice('pay')}
                  >
                    ❌ {lang === 'hi' ? 'विकल्प A: डरकर अरेस्ट से बचने हेतु ₹1.5 लाख ट्रांसफर कर दें' : 'Option A: Panic and transfer ₹1.5 Lakhs to avoid arrest'}
                  </button>

                  <button 
                    className="btn btn-outline-success text-start p-3 rounded-3 small fw-bold"
                    onClick={() => handleChoice('hangup')}
                  >
                    ✅ {lang === 'hi' ? 'विकल्प B: तुरंत वीडियो कॉल काटें और 1930 पर रिपोर्ट करें' : 'Option B: Disconnect video call & report immediately to 1930'}
                  </button>
                </div>
              </div>

              <div className="p-3 bg-light rounded-3 small text-muted">
                <strong>{lang === 'hi' ? 'गोल्डन फैक्ट:' : 'Golden Fact:'}</strong> {lang === 'hi' ? 'भारत में कोई भी कानूनी एजेंसी (CBI, कस्टम्स, ED) वीडियो कॉल पर पूछताछ या अरेस्ट नहीं करती।' : 'No legal agency in India conducts video interrogations or demands money.'}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="p-4 bg-white rounded-4 border">
          {userChoice === 'hangup' ? (
            <div className="text-center py-3">
              <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-25 mb-3 text-success">
                <CheckCircle2 size={54} />
              </div>

              <h4 className="fw-bold text-success mb-2">
                🎉 {lang === 'hi' ? 'शानदार बचाव! आपने डिजिटल अरेस्ट स्कैम को नाकाम कर दिया!' : 'EXCELLENT DEFENSE! You Defeated the Digital Arrest Scam!'}
              </h4>

              <p className="lead small text-dark max-w-lg mx-auto mb-4" style={{ maxWidth: '650px' }}>
                {lang === 'hi'
                  ? 'आपने सही समय पर कॉल काटकर अपने पैसों की रक्षा की। सीबीआई, कस्टम्स, साइबर सेल या पुलिस कभी भी व्हाट्सएप वीडियो कॉल पर अरेस्ट नहीं करती और न ही पैसे मांगती है।'
                  : 'You cut the call at the right time and saved your money. CBI, Customs, Police, or ED NEVER conduct video interrogations or demand money transfers.'}
              </p>

              <div className="p-3 bg-success bg-opacity-10 border border-success rounded-3 text-start small mb-4">
                <strong className="text-success">{lang === 'hi' ? 'सुरक्षा नियम:' : 'Action Checklist:'}</strong>
                <ul className="mb-0 mt-1 ps-3 text-dark">
                  <li>{lang === 'hi' ? 'संदिग्ध नंबर को व्हाट्सएप पर तुरंत ब्लॉक करें।' : 'Block the suspicious number immediately on WhatsApp.'}</li>
                  <li>{lang === 'hi' ? '1930 (साइबर हेल्पलाइन) पर फर्जी वीडियो कॉल नंबर रिपोर्ट करें।' : 'Report the fake video call number on 1930 Cyber Helpline.'}</li>
                  <li>{lang === 'hi' ? 'अपने निकटतम पुलिस स्टेशन को सूचित करें।' : 'Inform your nearest police station if harassment continues.'}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-3">
              <div className="d-inline-flex p-3 rounded-circle bg-danger bg-opacity-25 mb-3 text-danger">
                <XCircle size={54} />
              </div>

              <h4 className="fw-bold text-danger mb-2">
                ⚠️ {lang === 'hi' ? 'खतरनाक निर्णय! पैसे ठगे गए!' : 'DANGEROUS DECISION! Money Scammed!'}
              </h4>

              <p className="lead small text-dark max-w-lg mx-auto mb-4" style={{ maxWidth: '650px' }}>
                {lang === 'hi'
                  ? 'आपने डर में आकर पैसे ट्रांसफर कर दिए! डिजिटल अरेस्ट पूरी तरह से एक फर्जी साइबर अपराध है। ठग फर्जी पुलिस वर्दी और फर्जी सीबीआई दफ्तर का स्क्रीन बैकग्राउंड इस्तेमाल करते हैं।'
                  : 'You panicked and transferred money to cyber criminals! Digital Arrest is a 100% fake extortion scam. Fraudsters use fake police uniforms and virtual studio backgrounds to scare victims.'}
              </p>
            </div>
          )}

          <div className="text-center">
            <button className="btn btn-forest rounded-3 btn-sm fw-bold" onClick={handleReset}>
              <RefreshCw size={16} className="me-1" />
              {lang === 'hi' ? 'सिम्युलेटर पुनः चलाएं' : 'Re-Run Simulator'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
