import React, { useState } from 'react';
import { 
  QrCode, 
  CreditCard, 
  Key, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  Smartphone,
  Eye,
  Camera
} from 'lucide-react';

export default function UpiAtmOtpSimulator({ lang = 'en' }) {
  // UPI QR Simulator state
  const [upiPinInput, setUpiPinInput] = useState('');
  const [upiResult, setUpiResult] = useState(null);

  // ATM Skimmer Inspector state
  const [selectedAtmPart, setSelectedAtmPart] = useState('slot');

  // OTP Scenario test
  const [otpAnswer, setOtpAnswer] = useState(null);

  const handleUpiSubmit = (e) => {
    e.preventDefault();
    if (!upiPinInput) return;
    setUpiResult({
      status: 'scam_caught',
      title: lang === 'hi' ? '⚠️ फ्रॉड अलर्ट: पैसे कट गए!' : '⚠️ FRAUD ALERT: Money Deducted!',
      message: lang === 'hi' 
        ? `आपने PIN '${upiPinInput}' दर्ज किया। आपके बैंक खाते से ₹5,000 कट गए! याद रखें: UPI PIN दर्ज करने से हमेशा पैसे कटते हैं, पैसे प्राप्त करने के लिए PIN की आवश्यकता नहीं होती।`
        : `You entered PIN '${upiPinInput}'. ₹5,000 was DEDUCTED from your bank account! Remember: Entering a UPI PIN ALWAYS pays money out. No bank or buyer requires a PIN to send money TO you.`
    });
  };

  const atmParts = {
    slot: {
      title: lang === 'hi' ? '💳 कार्ड रीडर स्लॉट (स्किमर डिवाइस)' : '💳 Card Insertion Slot (Skimmer Device)',
      risk: 'HIGH RISK',
      details: lang === 'hi' 
        ? 'साइबर ठग असली कार्ड रीडर के ऊपर एक प्लास्टिक स्किमर लगाते हैं जो आपके मैग्नेटिक स्ट्रिप का डेटा चुरा लेता है।'
        : 'Scammers overlay a fake plastic sleeve over the real card reader to read and copy magnetic stripe data.',
      safetyRule: lang === 'hi'
        ? 'कार्ड डालने से पहले स्लॉट को धीरे से हिलाकर देखें। अगर यह ढीला या भारी लगे तो ATM का उपयोग न करें!'
        : 'Gently wiggle the card slot before inserting your card. If it feels loose or bulky, DO NOT use the ATM!'
    },
    keypad: {
      title: lang === 'hi' ? '⌨️ PIN कीपैड (नकली ओवरले / हिडन कैमरा)' : '⌨️ PIN Keypad (Overlay / Spy Camera)',
      risk: 'HIGH RISK',
      details: lang === 'hi'
        ? 'कीपैड के ऊपर रबर का नकली कीपैड या ऊपर पैनल में छिपा छोटा कैमरा आपके PIN को रिकॉर्ड कर लेता है।'
        : 'A fake rubber keypad overlay or a tiny pinhole camera mounted on the top panel captures your PIN sequence.',
      safetyRule: lang === 'hi'
        ? '4 अंकों का PIN टाइप करते समय हमेशा दूसरे हाथ या वॉलेट से कीपैड को ढकें।'
        : 'Always shield the keypad with your hand or wallet when entering your 4-digit PIN.'
    },
    cash: {
      title: lang === 'hi' ? '💵 कैश डिस्पेंसर स्लॉट (कैश ट्रैपिंग)' : '💵 Cash Dispenser Slot (Cash Trapping)',
      risk: 'MEDIUM RISK',
      details: lang === 'hi'
        ? 'ठग एक पतली धातु की स्प्रिंग लगाकर कैश निकलने की जगह ब्लॉक कर देते हैं जिससे आप चले जाएं और वे बाद में पैसे निकाल लें।'
        : 'Fraudsters insert a thin metal trap spring that blocks cash from coming out so you leave, then they collect it.',
      safetyRule: lang === 'hi'
        ? 'यदि ATM स्क्रीन पर पैसे निकलने का संदेश दिखे परंतु कैश बाहर न आए तो तुरंत बैंक हेल्पलाइन को सूचित करें।'
        : 'If the ATM displays cash paid out but nothing emerges, check the slot or call bank helpline immediately.'
    },
    camera: {
      title: lang === 'hi' ? '🎥 ओवरहेड मिरर एवं स्क्रीन बेज़ेल' : '🎥 Overhead Mirror & Display Bezel',
      risk: 'MEDIUM RISK',
      details: lang === 'hi'
        ? 'प्लास्टिक होल्डर या शीशे में छिपे छोटे कैमरे आपके द्वारा टाइप किए गए PIN को रिकॉर्ड करते हैं।'
        : 'Micro pinhole cameras hidden in fake brochure holders or mirrors recorded typed PINs.',
      safetyRule: lang === 'hi'
        ? 'स्क्रीन के आसपास किसी भी संदिग्ध चिपके हुए हिस्से की जाँच करें।'
        : 'Check around the screen for suspicious glued plastic parts or tiny lens holes.'
    }
  };

  return (
    <div className="d-flex flex-column gap-4">
      {/* 1. UPI QR Code Scam Simulator */}
      <div className="custom-card beige-accent">
        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="bg-forest p-2 rounded-3 text-white">
            <QrCode size={22} />
          </div>
          <div>
            <h5 className="fw-bold mb-0">
              {lang === 'hi' ? 'इंटरएक्टिव UPI सुरक्षा सिम्युलेटर' : 'Interactive UPI Safety Simulator'}
            </h5>
            <small className="text-muted">
              {lang === 'hi' ? 'QR कोड स्कैन करने से पहले अपनी जागरूकता का परीक्षण करें' : 'Test your awareness before scanning QR codes'}
            </small>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-4 border text-center shadow-sm">
              <span className="badge bg-warning text-dark mb-2">
                {lang === 'hi' ? 'सिम्युलेटेड परिदृश्य' : 'Simulated Scenario'}
              </span>
              <h6 className="fw-bold text-dark">
                {lang === 'hi' 
                  ? 'OLX खरीदार कहता है: "₹5,000 एडवांस पेमेंट प्राप्त करने के लिए यह QR कोड स्कैन करें"'
                  : 'OLX Buyer says: "Scan this QR code to RECEIVE ₹5,000 advance payment"'}
              </h6>
              
              <div className="my-3 p-3 bg-light rounded-3 d-inline-block border">
                <QrCode size={120} className="text-dark" />
                <div className="small fw-bold mt-2 text-danger">SCAN TO PAY ₹5,000.00</div>
              </div>

              <form onSubmit={handleUpiSubmit} className="mt-2">
                <label className="form-label small fw-bold text-muted">
                  {lang === 'hi' ? 'पैसे क्लेम करने के लिए UPI PIN दर्ज करें:' : 'Enter UPI PIN to "Claim Money":'}
                </label>
                <div className="input-group input-group-sm mb-3 mx-auto" style={{ maxWidth: '240px' }}>
                  <input 
                    type="password" 
                    maxLength={6}
                    placeholder="Enter 4 or 6-digit PIN" 
                    className="form-control text-center fw-bold font-monospace"
                    value={upiPinInput}
                    onChange={(e) => setUpiPinInput(e.target.value)}
                  />
                  <button type="submit" className="btn btn-forest fw-bold">
                    {lang === 'hi' ? 'सबमिट करें' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            {upiResult ? (
              <div className="p-4 rounded-4 bg-danger bg-opacity-10 border border-danger text-danger">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <AlertTriangle size={24} />
                  <h6 className="fw-bold mb-0">{upiResult.title}</h6>
                </div>
                <p className="small mb-3">{upiResult.message}</p>
                <div className="p-3 bg-white rounded-3 border border-danger border-opacity-25 small text-dark">
                  <strong className="text-success">
                    {lang === 'hi' ? 'UPI का स्वर्णिम नियम:' : 'Golden Rule of UPI:'}
                  </strong>
                  <ul className="mb-0 mt-1 ps-3">
                    <li>{lang === 'hi' ? 'QR कोड केवल भुगतान करने के लिए होते हैं।' : 'QR codes are ONLY for MAKING payments.'}</li>
                    <li>{lang === 'hi' ? 'पैसे प्राप्त करने के लिए कभी भी PIN दर्ज न करें।' : 'You NEVER enter your UPI PIN to RECEIVE money.'}</li>
                  </ul>
                </div>
                <button 
                  className="btn btn-sm btn-outline-danger mt-3 fw-bold"
                  onClick={() => { setUpiResult(null); setUpiPinInput(''); }}
                >
                  {lang === 'hi' ? 'पुनः प्रयास करें' : 'Try Again'}
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-4 bg-white border">
                <h6 className="fw-bold text-forest mb-3">
                  <ShieldAlert size={18} className="me-2" />
                  {lang === 'hi' ? 'वास्तविक जीवन में UPI स्कैम कैसे काम करता है:' : 'How UPI Scams Work in Real Life:'}
                </h6>
                <ol className="small text-muted ps-3 d-flex flex-column gap-2 mb-0">
                  <li>
                    <strong>{lang === 'hi' ? 'नकली एडवांस भुगतान:' : 'Fake Advance Money:'}</strong>{' '}
                    {lang === 'hi' ? 'ठग खरीदार या सेना अधिकारी बनकर फर्जी ऑफर देते हैं।' : 'Fraudsters pretend to be buyers, landlords, or army officers offering money.'}
                  </li>
                  <li>
                    <strong>{lang === 'hi' ? 'कलेक्ट रिक्वेस्ट लिंक:' : 'Tricky Request Link:'}</strong>{' '}
                    {lang === 'hi' ? 'वे कलेक्ट रिक्वेस्ट या QR कोड भेजकर PIN दर्ज करने को कहते हैं।' : 'They send a "Collect Request" or QR code asking you to enter your PIN.'}
                  </li>
                  <li>
                    <strong>{lang === 'hi' ? 'तुरंत नुकसान:' : 'Instant Loss:'}</strong>{' '}
                    {lang === 'hi' ? 'PIN दर्ज करते ही पैसा आपके खाते से तुरंत कट जाता है।' : 'The moment you enter your PIN, money leaves YOUR account instead of coming in!'}
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. ATM Machine Skimmer Inspector */}
      <div className="custom-card">
        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="bg-dark p-2 rounded-3 text-white">
            <CreditCard size={22} />
          </div>
          <div>
            <h5 className="fw-bold mb-0">
              {lang === 'hi' ? 'इंटरएक्टिव ATM स्किमर एवं कार्ड रीडर निरीक्षक' : 'Interactive ATM Skimmer & Tamper Inspector'}
            </h5>
            <small className="text-muted">
              {lang === 'hi' ? 'ATM के विभिन्न हिस्सों पर क्लिक करके सीखें कि स्किमर कैसे काम करते हैं' : 'Click on different parts of the ATM to learn how skimmers operate'}
            </small>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-5">
            <div className="p-4 bg-dark text-white rounded-4 text-center border border-secondary border-opacity-50">
              <span className="badge bg-success mb-3">Interactive ATM Unit</span>
              <div className="d-flex flex-column gap-3 align-items-center">
                <button 
                  className={`btn btn-sm w-75 ${selectedAtmPart === 'camera' ? 'btn-warning fw-bold' : 'btn-outline-light'}`}
                  onClick={() => setSelectedAtmPart('camera')}
                >
                  <Camera size={16} className="me-1" /> Overhead Camera / Mirror
                </button>

                <button 
                  className={`btn btn-sm w-75 ${selectedAtmPart === 'slot' ? 'btn-danger fw-bold' : 'btn-outline-light'}`}
                  onClick={() => setSelectedAtmPart('slot')}
                >
                  <CreditCard size={16} className="me-1" /> Card Reader Slot (Skimmer)
                </button>

                <button 
                  className={`btn btn-sm w-75 ${selectedAtmPart === 'keypad' ? 'btn-warning fw-bold' : 'btn-outline-light'}`}
                  onClick={() => setSelectedAtmPart('keypad')}
                >
                  <Key size={16} className="me-1" /> Keypad (Overlay Trap)
                </button>

                <button 
                  className={`btn btn-sm w-75 ${selectedAtmPart === 'cash' ? 'btn-info fw-bold' : 'btn-outline-light'}`}
                  onClick={() => setSelectedAtmPart('cash')}
                >
                  <Eye size={16} className="me-1" /> Cash Dispenser Slot
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="p-4 rounded-4 bg-light border h-100 d-flex flex-direction-column justify-content-between">
              <div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="fw-bold text-dark mb-0">{atmParts[selectedAtmPart].title}</h6>
                  <span className="badge bg-danger">{atmParts[selectedAtmPart].risk}</span>
                </div>
                
                <p className="text-muted small mb-3">{atmParts[selectedAtmPart].details}</p>

                <div className="p-3 bg-white rounded-3 border border-success border-opacity-50 mb-3">
                  <h6 className="fw-bold text-success small mb-1">
                    <CheckCircle2 size={16} className="me-1" />
                    {lang === 'hi' ? 'सुरक्षा उपाय:' : 'Preventive Safety Measure:'}
                  </h6>
                  <p className="small text-dark mb-0">{atmParts[selectedAtmPart].safetyRule}</p>
                </div>
              </div>

              <div className="p-2 bg-warning bg-opacity-10 border border-warning rounded-3 small text-dark">
                <strong>Pro-Tip:</strong> {lang === 'hi' ? 'यात्रा न करने पर मोबाइल बैंकिंग ऐप से कार्ड की घरेलू सीमाएँ नियंत्रित रखें।' : 'Enable ATM Domestic Limits & Card Lock on your mobile banking app when not traveling!'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. OTP Hygiene Test */}
      <div className="custom-card beige-accent">
        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="bg-forest p-2 rounded-3 text-white">
            <Smartphone size={22} />
          </div>
          <div>
            <h5 className="fw-bold mb-0">
              {lang === 'hi' ? 'OTP एवं SIM स्वैप सुरक्षा नियम' : 'OTP & SIM Swap Safety Rulebook'}
            </h5>
            <small className="text-muted">
              {lang === 'hi' ? 'फ़ोन कॉल पर OTP मांगने वाले के प्रति अपनी प्रतिक्रिया का परीक्षण करें' : 'Test your response to an urgent phone call asking for OTP'}
            </small>
          </div>
        </div>

        <div className="bg-white p-4 rounded-4 border">
          <h6 className="fw-bold text-dark mb-2">
            {lang === 'hi' ? 'परिदृश्य: "बैंक सत्यापन विभाग" से कॉल' : 'Scenario: Call from "Bank Verification Department"'}
          </h6>
          <p className="small text-muted mb-3">
            Caller: <em>"{lang === 'hi' ? 'सर, RBI KYC अपडेट न होने के कारण आपका कार्ड 10 मिनट में ब्लॉक हो जाएगा! हमने आपके मोबाइल पर OTP भेजा है, कार्ड ब्लॉक रोकने के लिए तुरंत बताइए।' : 'Sir, your debit card will be blocked in 10 minutes due to RBI KYC update! We just sent an OTP to your mobile. Read it out to stop blocking.'}"</em>
          </p>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <button 
              className={`btn btn-sm ${otpAnswer === 'share' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setOtpAnswer('share')}
            >
              <XCircle size={16} className="me-1" /> {lang === 'hi' ? 'विकल्प A: कार्ड बचाने के लिए तुरंत OTP साझा करें' : 'Option A: Share OTP immediately to save card'}
            </button>
            <button 
              className={`btn btn-sm ${otpAnswer === 'disconnect' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setOtpAnswer('disconnect')}
            >
              <CheckCircle2 size={16} className="me-1" /> {lang === 'hi' ? 'विकल्प B: कॉल काटें एवं आधिकारिक हेल्पलाइन पर रिपोर्ट करें' : 'Option B: Hang up & report call to official helpline'}
            </button>
          </div>

          {otpAnswer === 'share' && (
            <div className="p-3 bg-danger bg-opacity-10 border border-danger rounded-3 text-danger small">
              <strong>❌ {lang === 'hi' ? 'गलत एवं खतरनाक निर्णय!' : 'INCORRECT & DANGEROUS!'}</strong> {lang === 'hi' ? 'बैंक अधिकारी कभी भी फ़ोन पर OTP नहीं मांगते। OTP शेयर करने से ठगों को आपका खाता खाली करने की अनुमति मिल जाती है।' : 'Bank officials NEVER ask for OTPs over phone calls. Sharing an OTP gives fraudsters full access to authorize transactions or reset passwords.'}
            </div>
          )}

          {otpAnswer === 'disconnect' && (
            <div className="p-3 bg-success bg-opacity-10 border border-success rounded-3 text-success small">
              <strong>✅ {lang === 'hi' ? 'सही एवं सुरक्षित निर्णय!' : 'CORRECT DECISION!'}</strong> {lang === 'hi' ? 'बैंक स्पष्ट करते हैं कि वे कभी भी फोन पर OTP, CVV या PIN नहीं मांगते। आपने अपने खाते की रक्षा की!' : 'Banks explicitly state that they will NEVER ask for OTP, CVV, or PIN over phone calls. You just protected your account!'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
