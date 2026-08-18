import React, { useState } from 'react';
import { Search, ShieldAlert, ShieldCheck, CheckCircle2, XCircle, AlertTriangle, ExternalLink } from 'lucide-react';

export default function UrlInspector({ lang = 'en' }) {
  const [inputUrl, setInputUrl] = useState('');
  const [result, setResult] = useState(null);

  const sampleLinks = [
    { url: 'http://sbi-yono-reward-claim.net/login', type: 'fake' },
    { url: 'https://www.onlinesbi.sbi', type: 'real' },
    { url: 'http://hdfc-bank-netbanking-verify.xyz/update.apk', type: 'fake' },
    { url: 'https://netbanking.hdfcbank.com', type: 'real' },
  ];

  const inspectUrl = (urlToTest) => {
    const target = urlToTest.trim();
    if (!target) return;

    let isSecure = target.startsWith('https://');
    let hasSuspiciousExt = /\.(apk|xyz|net|info|top|club)$/i.test(target) || target.includes('.apk');
    let hasSpoofHyphen = /-(update|verify|reward|kyc|login|claim|support)/i.test(target);

    let isLegitDomain = target.includes('onlinesbi.sbi') || target.includes('hdfcbank.com') || target.includes('icicibank.com') || target.includes('axisbank.com');

    if (isLegitDomain && isSecure && !hasSuspiciousExt && !hasSpoofHyphen) {
      setResult({
        status: 'SAFE',
        title: lang === 'hi' ? '✅ प्रामाणिक आधिकारिक बैंक वेबसाइट' : '✅ Verified Official Bank Domain',
        color: 'text-success',
        bg: 'bg-success bg-opacity-10 border-success',
        details: [
          lang === 'hi' ? 'सुरक्षित HTTPS प्रोटोकॉल मौजूद है' : 'Secure HTTPS protocol with valid SSL encryption',
          lang === 'hi' ? 'कोई फ़ेक हाइफ़न या स्पूफ़ेड डोमेन नहीं' : 'Matches registered official banking TLD (.sbi / .com)',
          lang === 'hi' ? 'किसी भी अनपेक्षित APK डाउनलोड का अभाव' : 'No suspicious script or APK payload detected'
        ]
      });
    } else {
      setResult({
        status: 'DANGEROUS SCAM',
        title: lang === 'hi' ? '🚨 चेतावनी: फ़िशिंग / फ़ेक बैंक लिंक पकड़ा गया!' : '🚨 DANGER: Phishing / Fake Bank Website Detected!',
        color: 'text-danger',
        bg: 'bg-danger bg-opacity-10 border-danger',
        details: [
          !isSecure ? (lang === 'hi' ? '🚨 असुरक्षित HTTP लिंक (सुरक्षा लॉक गायब है)' : '🚨 Unencrypted HTTP connection (Missing HTTPS padlock)') : null,
          hasSpoofHyphen ? (lang === 'hi' ? '🚨 नकली हाइफ़न डोमेन (उदा. sbi-yono-update.net)' : '🚨 Spoofed domain with scam keywords (e.g. -update, -kyc, -claim)') : null,
          hasSuspiciousExt ? (lang === 'hi' ? '🚨 संदिग्ध फ़ाइल / विस्तार (.apk, .xyz, .net)' : '🚨 Dangerous file extension (.apk malware payload or cheap TLD)') : null,
          !isLegitDomain ? (lang === 'hi' ? '🚨 आधिकारिक बैंक डोमेन से मेल नहीं खाता' : '🚨 Does NOT match the official bank root server') : null
        ].filter(Boolean)
      });
    }
  };

  return (
    <div className="custom-card">
      <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-3">
        <div className="bg-dark p-2 rounded-3 text-white">
          <Search size={22} />
        </div>
        <div>
          <h5 className="fw-bold mb-0">
            {lang === 'hi' ? 'फ़ेक बैंक पोर्टल एवं URL सुरक्षा निरीक्षक' : 'Fake Bank Portal & URL Safety Inspector'}
          </h5>
          <small className="text-muted">
            {lang === 'hi' ? 'जाँचें कि SMS या ई-मेल में मिला लिंक असली है या साइबर ठगों का जाल' : 'Analyze suspicious bank website links before clicking'}
          </small>
        </div>
      </div>

      {/* URL Input Form */}
      <div className="mb-3">
        <label className="form-label fw-bold small text-dark">
          {lang === 'hi' ? 'जाँच हेतु वेबसाइट URL दर्ज करें:' : 'Paste Suspicious URL to Inspect:'}
        </label>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="e.g. http://sbi-yono-update-kyc.net" 
            className="form-control"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
          <button className="btn btn-forest fw-bold" onClick={() => inspectUrl(inputUrl)}>
            {lang === 'hi' ? 'जाँच करें' : 'Inspect Link'}
          </button>
        </div>
      </div>

      {/* Sample Quick Links */}
      <div className="mb-4">
        <span className="small text-muted me-2">{lang === 'hi' ? 'त्वरित परीक्षण नमूने:' : 'Test Sample Links:'}</span>
        <div className="d-flex flex-wrap gap-1 mt-1">
          {sampleLinks.map((s, idx) => (
            <button 
              key={idx} 
              className={`btn btn-xs ${s.type === 'fake' ? 'btn-outline-danger' : 'btn-outline-success'} font-monospace small`}
              style={{ fontSize: '0.8rem' }}
              onClick={() => { setInputUrl(s.url); inspectUrl(s.url); }}
            >
              {s.url}
            </button>
          ))}
        </div>
      </div>

      {/* Inspection Result Box */}
      {result && (
        <div className={`p-4 rounded-4 border ${result.bg} fade-in-up`}>
          <div className="d-flex align-items-center gap-2 mb-2">
            {result.status === 'SAFE' ? <ShieldCheck size={24} className="text-success" /> : <ShieldAlert size={24} className="text-danger" />}
            <h6 className={`fw-bold mb-0 ${result.color}`}>{result.title}</h6>
          </div>

          <ul className="list-unstyled mb-3">
            {result.details.map((d, i) => (
              <li key={i} className="small text-dark py-1 border-bottom border-secondary border-opacity-10">
                {d}
              </li>
            ))}
          </ul>

          <div className="p-3 bg-white rounded-3 border small text-dark">
            <strong className="text-forest">
              {lang === 'hi' ? '💡 बैंक डोमेन की पहचान कैसे करें?' : '💡 How to identify genuine bank websites:'}
            </strong>
            <ul className="mb-0 mt-1 ps-3">
              <li>{lang === 'hi' ? 'हमेशा ब्राउज़र एड्रेस बार में 🔒 HTTPS लॉक चिह्न देखें।' : 'Look for the 🔒 HTTPS lock icon in the browser address bar.'}</li>
              <li>{lang === 'hi' ? 'भारतीय स्टेट बैंक (SBI) की आधिकारिक वेबसाइट .sbi पर समाप्त होती है।' : 'Official SBI portals end in .sbi (e.g. onlinesbi.sbi), NOT .com or .net.'}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
