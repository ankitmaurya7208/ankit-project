import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, AlertOctagon, CheckCircle2, Copy, ExternalLink, Clock } from 'lucide-react';

export default function EmergencyChecklist({ lang = 'en' }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const bankDirectory = [
    {
      name: 'State Bank of India (SBI)',
      helpline: '1800 1234 / 1800 2100',
      smsBlock: 'BLOCK <space> Last4Digits to 567676',
      portal: 'https://onlinesbi.sbi'
    },
    {
      name: 'HDFC Bank',
      helpline: '1800 258 6161',
      smsBlock: 'Call 18002586161 to block instantly',
      portal: 'https://netbanking.hdfcbank.com'
    },
    {
      name: 'ICICI Bank',
      helpline: '1800 1080',
      smsBlock: 'IBLOCK <space> Last4Digits to 5676766',
      portal: 'https://www.icicibank.com'
    },
    {
      name: 'Axis Bank',
      helpline: '1860 419 5555 / 1860 500 5555',
      smsBlock: 'BLOCKCARD <space> Last4Digits to 5676782',
      portal: 'https://www.axisbank.com'
    },
    {
      name: 'Punjab National Bank (PNB)',
      helpline: '1800 180 2222 / 1800 103 2222',
      smsBlock: 'HOT <space> CardNumber to 5607040',
      portal: 'https://www.pnbindia.in'
    },
    {
      name: 'Kotak Mahindra Bank',
      helpline: '1860 266 2666',
      smsBlock: 'Use Kotak Mobile App -> Service Requests -> Block Card',
      portal: 'https://www.kotak.com'
    }
  ];

  const handleCopy = (num, idx) => {
    navigator.clipboard.writeText(num);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="d-flex flex-column gap-4">
      {/* Golden Hour Banner */}
      <div className="p-4 bg-danger text-white rounded-4 shadow-sm border border-danger">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="p-3 bg-white bg-opacity-25 rounded-circle text-white">
            <Clock size={36} />
          </div>
          <div>
            <span className="badge bg-warning text-dark mb-1 fw-bold">CRITICAL RESPONSE PROTOCOL</span>
            <h3 className="fw-bold mb-0">
              {lang === 'hi' ? 'गोल्डन आवर: धोखाधड़ी के 60 मिनट में क्या करें?' : 'The "Golden Hour" Fraud Emergency Protocol'}
            </h3>
          </div>
        </div>

        <p className="lead small opacity-90 mb-4" style={{ maxWidth: '800px' }}>
          {lang === 'hi' 
            ? 'यदि आपके खाते से धोखाधड़ी से पैसा कट गया है, तो पहले 60 मिनट (गोल्डन आवर) के भीतर 1930 पर कॉल करने से पैसा साइबर सेल द्वारा फ्रीज किया जा सकता है।' 
            : 'If funds are fraudulently debited from your account, reporting within the first 60 minutes via 1930 drastically increases the chance of freezing the money in the fraudster’s wallet.'}
        </p>

        {/* 4 Emergency Steps */}
        <div className="row g-3">
          <div className="col-md-3">
            <div className="p-3 bg-white text-dark rounded-3 h-100">
              <span className="badge bg-danger mb-2">Step 1</span>
              <h6 className="fw-bold mb-1">Dial 1930</h6>
              <p className="small text-muted mb-0">Call National Cyber Crime Helpline immediately.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white text-dark rounded-3 h-100">
              <span className="badge bg-danger mb-2">Step 2</span>
              <h6 className="fw-bold mb-1">Block Debit/UPI</h6>
              <p className="small text-muted mb-0">Freeze card & UPI via mobile app or SMS.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white text-dark rounded-3 h-100">
              <span className="badge bg-danger mb-2">Step 3</span>
              <h6 className="fw-bold mb-1">File Cyber Complaint</h6>
              <p className="small text-muted mb-0">Register ticket on <code>cybercrime.gov.in</code>.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white text-dark rounded-3 h-100">
              <span className="badge bg-danger mb-2">Step 4</span>
              <h6 className="fw-bold mb-1">Inform Home Branch</h6>
              <p className="small text-muted mb-0">Submit written dispute form at your bank branch.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Helpline Directory */}
      <div className="custom-card beige-accent">
        <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-3">
          <div className="bg-forest p-2 rounded-3 text-white">
            <PhoneCall size={22} />
          </div>
          <div>
            <h5 className="fw-bold mb-0">
              {lang === 'hi' ? 'प्रमुख बैंकों की टोल-फ्री हेल्पलाइन एवं SMS कार्ड ब्लॉक डायरेक्टरी' : 'Official Bank Helpline & Emergency SMS Card Block Directory'}
            </h5>
            <small className="text-muted">Direct verified numbers printed on bank cards</small>
          </div>
        </div>

        <div className="row g-3">
          {bankDirectory.map((b, idx) => (
            <div key={idx} className="col-md-6">
              <div className="p-3 bg-white rounded-3 border h-100 d-flex flex-column justify-content-between">
                <div>
                  <h6 className="fw-bold text-forest mb-2">{b.name}</h6>
                  <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded-2 mb-2">
                    <span className="small text-dark font-monospace fw-bold">{b.helpline}</span>
                    <button 
                      className="btn btn-xs btn-outline-forest"
                      onClick={() => handleCopy(b.helpline, idx)}
                    >
                      {copiedIndex === idx ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="small text-muted mb-2">
                    <strong>SMS Card Block:</strong> <code>{b.smsBlock}</code>
                  </div>
                </div>

                <a 
                  href={b.portal} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-dark rounded-2 d-flex align-items-center justify-content-center gap-1 mt-2"
                >
                  <span>Official NetBanking Portal</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
