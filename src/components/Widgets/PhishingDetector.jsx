import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Search, Mail, Smartphone, ExternalLink, ShieldCheck } from 'lucide-react';

export default function PhishingDetector({ lang = 'en' }) {
  const [activeTab, setActiveTab] = useState('inspector');
  const [selectedScam, setSelectedScam] = useState(0);
  const [userGuess, setUserGuess] = useState(null);

  const phishingExamples = [
    {
      id: 1,
      type: lang === 'hi' ? 'ई-मेल फ़िशिंग' : 'Email Phishing',
      sender: 'security-alert@bank-update-verify.com',
      subject: lang === 'hi' ? 'अति आवश्यक: आपका नेटबैंकिंग खाता निलंबित कर दिया गया है!' : 'URGENT: Your NetBanking Access Has Been Suspended!',
      content: lang === 'hi'
        ? `प्रिय ग्राहक,\n\nहमने आपके खाते में संदिग्ध लॉगिन प्रयास देखे हैं। आपके खाते को अस्थायी रूप से लॉक कर दिया गया है।\n\nकृपया 24 घंटे के भीतर अपना पैन कार्ड एवं पासवर्ड अपडेट करने के लिए नीचे दिए लिंक पर क्लिक करें:\nhttp://verify-bank-account-online.net/login\n\nयदि आप अपडेट नहीं करते हैं तो आपका खाता स्थायी रूप से बंद कर दिया जाएगा।\n\nसधन्यवाद,\nबैंक सुरक्षा विभाग`
        : `Dear Customer,\n\nWe noticed suspicious login attempts on your account. To prevent unauthorized access, your account has been temporarily locked.\n\nPlease click the link below to verify your PAN card & Netbanking password within 24 hours:\nhttp://verify-bank-account-online.net/login\n\nIf you do not update, your account will be permanently closed.\n\nRegards,\nBank Security Department`,
      redFlags: lang === 'hi' ? [
        'फर्जी प्रेषक डोमेन (@bank-update-verify.com आधिकारिक बैंक नहीं है)',
        'झूठी ताकीद और डर का माहौल पैदा करना ("24 घंटे में लॉक हो जाएगा")',
        'असुरक्षित HTTP लिंक (http://verify-bank-account-online.net)',
        'आपके नाम के स्थान पर सामान्य संबोधन ("प्रिय ग्राहक")'
      ] : [
        'Fake domain (@bank-update-verify.com instead of @officialbank.com)',
        'Creates artificial urgency ("locked in 24 hours")',
        'Unsecure HTTP web link (http://verify-bank-account-online.net)',
        'Generic greeting ("Dear Customer") instead of your actual name'
      ],
      isPhishing: true
    },
    {
      id: 2,
      type: lang === 'hi' ? 'SMS स्कैम (स्मिशिंग)' : 'SMS Scam (Smishing)',
      sender: 'VM-BANKALERT',
      subject: lang === 'hi' ? 'रिवॉर्ड पॉइंट्स समाप्ति चेतावनी' : 'Reward Points Expiry Alert',
      content: lang === 'hi'
        ? `प्रिय ग्राहक, आपके बैंक रिवॉर्ड पॉइंट्स मूल्य ₹9,850 आज समाप्त हो रहे हैं। तुरंत लिंक पर क्लिक करके अपने बैंक खाते में नकदी के रूप में भुनाएं: bit.ly/sbi-rewards-apk`
        : `Dear User, your State Bank Reward Points worth ₹9,850 will expire TODAY. Redeem them into cash in your bank account immediately by clicking: bit.ly/sbi-rewards-apk`,
      redFlags: lang === 'hi' ? [
        'APK फाइल या छोटा किया गया फर्जी लिंक (bit.ly) डाउनलोड करने को कहना',
        'रिवॉर्ड पॉइंट्स किसी बाहरी लिंक से सीधे कैश में ट्रांसफर नहीं होते',
        'पैसे क्रेडिट करने के बहाने नेटबैंकिंग पासवर्ड मांगना'
      ] : [
        'Urges downloading an APK file or shortened link (bit.ly)',
        'Reward points cannot be converted directly into cash via external link',
        'Asks for netbanking login to "credit" money'
      ],
      isPhishing: true
    },
    {
      id: 3,
      type: lang === 'hi' ? 'प्रामाणिक बैंक संदेश' : 'Legitimate Bank Alert',
      sender: 'HDFCBK',
      subject: lang === 'hi' ? 'लेनदेन डेबिट सूचना' : 'Transaction Debit Notification',
      content: `Rs 1,250.00 debited from A/C **4821 on 17-AUG-26 at AMZN Retail. Clear bal: Rs 42,100. Call 18002586161 if not done by you. HDFC Bank.`,
      redFlags: [],
      isPhishing: false,
      legitMarkers: lang === 'hi' ? [
        'खाता संख्या के केवल अंतिम 4 अंक (**4821) दिखाता है',
        'कोई बाहरी लिंक या पासवर्ड अपडेट का दबाव नहीं',
        'आधिकारिक 1800 टोल-फ्री हेल्पलाइन नंबर शामिल है'
      ] : [
        'Includes partial account number (**4821)',
        'No external links or urgent password requests',
        'Official 1800 toll-free helpline number'
      ]
    }
  ];

  const current = phishingExamples[selectedScam];

  return (
    <div className="d-flex flex-column gap-4">
      {/* Phishing Inspector Card */}
      <div className="custom-card beige-accent">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-danger p-2 rounded-3 text-white">
              <AlertTriangle size={22} />
            </div>
            <div>
              <h5 className="fw-bold mb-0">
                {lang === 'hi' ? 'इंटरएक्टिव फ़िशिंग एवं स्मिशिंग निरीक्षक' : 'Interactive Phishing & Smishing Inspector'}
              </h5>
              <small className="text-muted">
                {lang === 'hi' ? 'असली और नकली SMS एवं ई-मेल संदेशों का विश्लेषण करें' : 'Analyze real vs fraudulent SMS and email communication'}
              </small>
            </div>
          </div>

          <div className="btn-group btn-group-sm">
            <button 
              className={`btn ${activeTab === 'inspector' ? 'btn-forest' : 'btn-outline-secondary'}`}
              onClick={() => setActiveTab('inspector')}
            >
              {lang === 'hi' ? 'फ़िशिंग विश्लेषक' : 'Phishing Analyzer'}
            </button>
            <button 
              className={`btn ${activeTab === 'spotter' ? 'btn-forest' : 'btn-outline-secondary'}`}
              onClick={() => setActiveTab('spotter')}
            >
              {lang === 'hi' ? 'स्कैम पहचानो क्विज़' : 'Spot-the-Scam Quiz'}
            </button>
          </div>
        </div>

        {activeTab === 'inspector' ? (
          <div>
            <div className="d-flex flex-wrap gap-2 mb-3">
              {phishingExamples.map((ex, idx) => (
                <button
                  key={ex.id}
                  className={`btn btn-sm ${selectedScam === idx ? 'btn-dark fw-bold' : 'btn-white border'}`}
                  onClick={() => { setSelectedScam(idx); setUserGuess(null); }}
                >
                  {ex.type}: {ex.isPhishing ? (lang === 'hi' ? '⚠️ फ़्रॉड उदाहरण' : '⚠️ Fraud Example') : (lang === 'hi' ? '✅ असली उदाहरण' : '✅ Genuine Example')}
                </button>
              ))}
            </div>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="bg-white p-4 rounded-4 border shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                    <span className="badge bg-secondary">{current.type}</span>
                    <span className="small text-muted font-monospace">Sender ID: {current.sender}</span>
                  </div>

                  <div className="mb-2">
                    <strong className="small text-muted">{lang === 'hi' ? 'विषय:' : 'Subject:'}</strong>
                    <div className="fw-bold text-dark">{current.subject}</div>
                  </div>

                  <div className="p-3 bg-light rounded-3 font-monospace small text-dark mb-3 whitespace-pre-line" style={{ whiteSpace: 'pre-line' }}>
                    {current.content}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="p-4 rounded-4 bg-white border h-100">
                  {current.isPhishing ? (
                    <div>
                      <div className="d-flex align-items-center gap-2 text-danger mb-3">
                        <XCircle size={24} />
                        <h6 className="fw-bold mb-0">
                          {lang === 'hi' ? 'परिणाम: फ़िशिंग स्कैम पकड़ा गया!' : 'Verdict: PHISHING SCAM DETECTED!'}
                        </h6>
                      </div>
                      <h6 className="fw-bold text-dark small mb-2">
                        {lang === 'hi' ? 'पहचाने गए ख़तरे के संकेत (Red Flags):' : 'Red Flags Identified:'}
                      </h6>
                      <ul className="list-group list-group-flush mb-3">
                        {current.redFlags.map((rf, i) => (
                          <li key={i} className="list-group-item bg-transparent text-danger small ps-0">
                            🚨 {rf}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div>
                      <div className="d-flex align-items-center gap-2 text-success mb-3">
                        <CheckCircle size={24} />
                        <h6 className="fw-bold mb-0">
                          {lang === 'hi' ? 'परिणाम: प्रामाणिक बैंक संदेश' : 'Verdict: LEGITIMATE BANK NOTIFICATION'}
                        </h6>
                      </div>
                      <h6 className="fw-bold text-dark small mb-2">
                        {lang === 'hi' ? 'असली होने के लक्षण:' : 'Genuine Characteristics:'}
                      </h6>
                      <ul className="list-group list-group-flush mb-3">
                        {current.legitMarkers.map((lm, i) => (
                          <li key={i} className="list-group-item bg-transparent text-success small ps-0">
                            ✔ {lm}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="p-3 bg-forest bg-opacity-10 border border-success border-opacity-25 rounded-3 text-forest small">
                    <strong>{lang === 'hi' ? 'स्वर्णिम नियम:' : 'Golden Rule:'}</strong> {lang === 'hi' ? 'SMS या व्हाट्सएप पर आए bit.ly लिंक या .apk फाइलों पर कभी क्लिक न करें!' : 'Never click short links like bit.ly or download .apk files received via SMS or WhatsApp!'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-4 rounded-4 border">
            <h6 className="fw-bold text-dark mb-2">
              {lang === 'hi' ? 'स्कैम पहचानो चुनौती:' : 'Spot the Scam Challenge:'}
            </h6>
            <p className="small text-muted mb-3">
              Message: <em>"Dear SBI Customer, your YONO account is suspended! Update your Netbanking Password immediately at <u>http://sbi-yono-update.com/login</u> or your account will be permanently blocked today."</em>
            </p>

            <div className="d-flex gap-3 mb-3">
              <button 
                className={`btn btn-sm ${userGuess === 'phishing' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => setUserGuess('phishing')}
              >
                🚨 {lang === 'hi' ? 'यह एक फ़िशिंग स्कैम है' : 'It is a Phishing Scam'}
              </button>
              <button 
                className={`btn btn-sm ${userGuess === 'real' ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setUserGuess('real')}
              >
                ✅ {lang === 'hi' ? 'यह एक असली बैंक संदेश है' : 'It is Genuine Bank Message'}
              </button>
            </div>

            {userGuess === 'phishing' && (
              <div className="p-3 bg-success bg-opacity-10 border border-success rounded-3 text-success small">
                <strong>🎉 {lang === 'hi' ? 'उत्कृष्ट पहचान!' : 'EXCELLENT SPOT!'}</strong> {lang === 'hi' ? 'आपने स्कैम पहचान लिया। SBI कभी भी SMS लिंक के ज़रिए पासवर्ड बदलने को नहीं कहता।' : 'You identified the scam. SBI will NEVER send HTTP links asking for password updates or threaten immediate blocking via SMS.'}
              </div>
            )}
            {userGuess === 'real' && (
              <div className="p-3 bg-danger bg-opacity-10 border border-danger rounded-3 text-danger small">
                <strong>⚠️ {lang === 'hi' ? 'गलत उत्तर!' : 'WRONG GUESS!'}</strong> {lang === 'hi' ? 'यह एक फर्जी फ़िशिंग लिंक है। बैंक हमेशा सुरक्षित पोर्टल (https://...) का उपयोग करते हैं।' : 'This is a classic fake SMS phishing link. Banks use official secure portals (https://...) and never demand passwords via SMS links.'}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
