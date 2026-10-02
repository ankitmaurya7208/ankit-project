import React from 'react';
import { ClipboardCheck, Sparkles, ExternalLink, Star, ShieldCheck, Heart, MessageSquare, CheckCircle2, Award } from 'lucide-react';

export default function GoogleFormFeedbackCard({ lang = 'en' }) {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdkmcygFUivaUOQeHd1ctRPycxfs-Ii96iOpARuH-UHgAPyBg/viewform";

  return (
    <div className="custom-card border-2 border-forest shadow-md bg-white p-0 overflow-hidden fade-in-up my-3">
      {/* Visual Google Form Purple Banner Header */}
      <div 
        className="p-4 text-white position-relative"
        style={{ 
          background: 'linear-gradient(135deg, #4A148C 0%, #673AB7 50%, #7E57C2 100%)',
          borderBottom: '4px solid #D4AF37'
        }}
      >
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 position-relative" style={{ zIndex: 2 }}>
          <div className="d-flex align-items-center gap-3">
            <div className="p-3 bg-white text-dark rounded-4 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px' }}>
              <ClipboardCheck size={34} style={{ color: '#673AB7' }} />
            </div>
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-2 py-1 bg-white bg-opacity-20 rounded-pill text-white small fw-bold mb-1">
                <Sparkles size={14} className="text-warning" />
                <span>OFFICIAL GOOGLE FORM SURVEY • 100% SECURE</span>
              </div>
              <h4 className="fw-bold mb-0 text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {lang === 'hi' ? 'समुदाय सुरक्षा फीडबैक सर्वेक्षण (Google Form)' : 'Dhan Yodha Community Feedback Survey'}
              </h4>
            </div>
          </div>

          <div className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold fs-6 shadow-sm">
            ⭐ 4.9 / 5 User Rating
          </div>
        </div>
      </div>

      {/* Main Description Body & Mock Form Graphics */}
      <div className="p-4 bg-white">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h5 className="fw-bold text-forest mb-2">
              {lang === 'hi' 
                ? 'आपकी राय हमारे लिए अत्यंत महत्वपूर्ण है!' 
                : 'Your Feedback Helps Protect Thousands of Citizens!'}
            </h5>
            <p className="text-dark opacity-90 mb-3" style={{ fontSize: '1.02rem', lineHeight: '1.6' }}>
              {lang === 'hi'
                ? 'धन योद्धा पोर्टल का आपका अनुभव कैसा रहा? हमारे बुजुर्ग कॉर्नर, 4 गोल्डन रूल्स चीट शीट और साइबर 1930 हेल्पलाइन निर्देशों के बारे में अपने विचार साझा करें। आपकी प्रतिक्रिया से हम इस पोर्टल को और अधिक प्रभावी बना सकेंगे।'
                : 'How was your experience exploring Dhan Yodha 2.0? Help us refine our Senior Citizens Safety Hub, safe banking rules cheat sheet, and interactive tools. Your feedback directly shapes our safe online banking initiatives.'}
            </p>

            {/* Feature Highlights Grid */}
            <div className="row g-2 mb-4">
              <div className="col-sm-6">
                <div className="p-2 px-3 bg-light rounded-3 border d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0" />
                  <span className="small fw-bold text-dark">{lang === 'hi' ? 'वरिष्ठ नागरिक सुविधा रेटिंग' : 'Senior Citizen Usability Rating'}</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-2 px-3 bg-light rounded-3 border d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0" />
                  <span className="small fw-bold text-dark">{lang === 'hi' ? '4 सुरक्षा नियमों की उपयोगिता' : '4 Safe Banking Rules Feedback'}</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-2 px-3 bg-light rounded-3 border d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0" />
                  <span className="small fw-bold text-dark">{lang === 'hi' ? '1930 हेल्पलाइन मार्गदर्शन' : 'Emergency 1930 Clarity Evaluation'}</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="p-2 px-3 bg-light rounded-3 border d-flex align-items-center gap-2">
                  <CheckCircle2 size={18} className="text-success flex-shrink-0" />
                  <span className="small fw-bold text-dark">{lang === 'hi' ? 'नए फ्रॉड विषयों के सुझाव' : 'Suggest New Scam Prevention Topics'}</span>
                </div>
              </div>
            </div>

            {/* Large Interactive Call-to-Action Button */}
            <a 
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg fw-bold rounded-pill px-4 py-3 text-white shadow-md d-inline-flex align-items-center gap-3 transition-all text-decoration-none"
              style={{ 
                backgroundColor: '#673AB7', 
                borderColor: '#5E35B1',
                boxShadow: '0 4px 14px rgba(103, 58, 183, 0.4)'
              }}
            >
              <ClipboardCheck size={24} />
              <span>{lang === 'hi' ? 'गूगल फॉर्म पर फीडबैक दर्ज करें 📋' : 'Take Official Survey on Google Forms 📋'}</span>
              <ExternalLink size={20} className="ms-1" />
            </a>
          </div>

          {/* Right Visual Graphic Preview Box */}
          <div className="col-lg-5">
            <div className="p-4 rounded-4 bg-light border border-2 border-primary border-opacity-20 shadow-sm position-relative">
              <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-1 px-2 rounded bg-purple text-white fw-bold small" style={{ backgroundColor: '#673AB7' }}>
                    Google Form
                  </div>
                  <span className="fw-bold text-forest small">Community Survey Preview</span>
                </div>
                <div className="d-flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                  ))}
                </div>
              </div>

              {/* Mock Form Options UI Graphic */}
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="p-2 px-3 bg-white rounded-3 border d-flex align-items-center justify-content-between">
                  <span className="small font-monospace fw-bold text-dark">Q1. Overall Experience</span>
                  <span className="badge bg-success text-white">5 / 5 ⭐</span>
                </div>
                <div className="p-2 px-3 bg-white rounded-3 border d-flex align-items-center justify-content-between">
                  <span className="small font-monospace fw-bold text-dark">Q9. Category</span>
                  <span className="badge bg-forest text-white me-1">Senior Citizen (60+)</span>
                </div>
                <div className="p-2 px-3 bg-white rounded-3 border d-flex align-items-center justify-content-between">
                  <span className="small font-monospace fw-bold text-dark">Q10. NPS Score</span>
                  <span className="badge bg-warning text-dark font-monospace">10 / 10</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-3 border border-dashed border-primary text-center">
                <ShieldCheck size={24} className="text-success mb-1" />
                <p className="small mb-0 text-muted">
                  {lang === 'hi' 
                    ? '100% गोपनीय • आधिकारिक सर्वेक्षण डेटाबेस' 
                    : '100% Confidential • Official Public Safety Survey'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
