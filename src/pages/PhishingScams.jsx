import React from 'react';
import PhishingDetector from '../components/Widgets/PhishingDetector';
import { AlertTriangle, ShieldAlert, PhoneOff, MonitorX, Search, ExternalLink } from 'lucide-react';

export default function PhishingScams({ lang = 'en' }) {
  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Header Banner */}
      <div className="p-4 bg-white rounded-4 border shadow-sm">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-danger p-3 rounded-4 text-white">
            <AlertTriangle size={32} />
          </div>
          <div>
            <h3 className="fw-bold mb-1">
              {lang === 'hi' ? 'फ़िशिंग एवं साइबर स्कैम जागरूकता पोर्टल' : 'Phishing & Cyber Scam Awareness Portal'}
            </h3>
            <p className="text-muted mb-0">
              {lang === 'hi'
                ? 'फ़र्जी बैंक लिंक, स्क्रीन शेयरिंग ऐप्स और गूगल पर मौजूद फर्जी कस्टमर केयर नंबरों को पहचानना सीखें।'
                : 'Recognize malicious links, remote screen sharing traps, and fake helpline scams before it\'s too late.'}
            </p>
          </div>
        </div>
      </div>

      {/* Phishing Inspector Widget */}
      <PhishingDetector lang={lang} />

      {/* Common Fraud Types Grid */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="custom-card beige-accent h-100">
            <div className="d-flex align-items-center gap-2 mb-2 text-danger">
              <MonitorX size={22} />
              <h5 className="fw-bold mb-0">
                {lang === 'hi' ? 'स्क्रीन शेयरिंग ऐप्स का जाल' : 'Screen Sharing Scams'}
              </h5>
            </div>
            <p className="small text-muted mb-2">
              {lang === 'hi'
                ? 'ठग असफल लेनदेन को "ठीक करने" के लिए AnyDesk, TeamViewer या RustDesk जैसे ऐप्स डाउनलोड करने को कहते हैं।'
                : 'Scammers ask you to install apps like AnyDesk, TeamViewer, or RustDesk to "help" resolve a failed transaction.'}
            </p>
            <div className="p-2 bg-white rounded-3 small border border-danger border-opacity-25 text-danger fw-semibold">
              🚨 {lang === 'hi' ? 'किसी अनजान कॉलर के कहने पर कभी रिमोट ऐप डाउनलोड न करें!' : 'Never install screen-share apps on caller\'s request!'}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="custom-card h-100">
            <div className="d-flex align-items-center gap-2 mb-2 text-warning">
              <PhoneOff size={22} />
              <h5 className="fw-bold mb-0">
                {lang === 'hi' ? 'फर्जी गूगल हेल्पलाइन नंबर' : 'Fake Bank Helpline Ad Scams'}
              </h5>
            </div>
            <p className="small text-muted mb-2">
              {lang === 'hi'
                ? 'गूगल सर्च और गूगल मैप्स पर बैंकों के फर्जी टोल-फ्री नंबर विज्ञापनों द्वारा दिखाए जाते हैं।'
                : 'Fraudsters place fake customer service numbers on Google Search & Google Maps for popular banks and e-commerce apps.'}
            </p>
            <div className="p-2 bg-light rounded-3 small border border-warning border-opacity-50 text-dark fw-semibold">
              🔍 {lang === 'hi' ? 'हमेशा अपने ATM कार्ड के पीछे छपे नंबरों का उपयोग करें।' : 'Always use numbers printed on the back of your bank card.'}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="custom-card beige-accent h-100">
            <div className="d-flex align-items-center gap-2 mb-2 text-primary">
              <Search size={22} />
              <h5 className="fw-bold mb-0">
                {lang === 'hi' ? 'बिजली बिल कटने वाले SMS स्कैम' : 'Electricity / APK Scams'}
              </h5>
            </div>
            <p className="small text-muted mb-2">
              {lang === 'hi'
                ? 'आज रात बिजली कटने या रिवॉर्ड पॉइंट पाने के नाम पर मैसेज में .apk फाइल डाउनलोड करने को कहा जाता है।'
                : 'Urgent SMS claiming your power supply will be cut off tonight or asking you to install a .apk file for reward points.'}
            </p>
            <div className="p-2 bg-white rounded-3 small border border-primary border-opacity-25 text-primary fw-semibold">
              📱 {lang === 'hi' ? 'मैसेज में आए .apk या bit.ly लिंक कभी न खोलें।' : 'Never open links ending in .apk or bit.ly'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
