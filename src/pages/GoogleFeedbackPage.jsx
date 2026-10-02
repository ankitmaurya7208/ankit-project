import React from 'react';
import { ClipboardCheck, Sparkles, Heart, ShieldCheck, MessageSquare, Award, CheckCircle2 } from 'lucide-react';
import GoogleFormFeedbackCard from '../components/Widgets/GoogleFormFeedbackCard';

export default function GoogleFeedbackPage({ lang = 'en' }) {
  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Header Banner */}
      <div className="custom-card beige-accent">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="p-3 bg-forest text-white rounded-3">
              <ClipboardCheck size={32} />
            </div>
            <div>
              <h4 className="fw-bold mb-1 text-forest" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {lang === 'hi' ? 'आधिकारिक समुदाय फीडबैक केंद्र (Google Form)' : 'Official Community Feedback Hub'}
              </h4>
              <p className="small text-muted mb-0">
                {lang === 'hi'
                  ? 'सुरक्षित ऑनलाइन बैंकिंग जागरूकता बढ़ाने के लिए अपना फीडबैक साझा करें'
                  : 'Share your valuable inputs to shape our safe online banking initiatives'}
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 p-2 px-3 bg-white rounded-pill border shadow-sm text-forest fw-bold">
            <ShieldCheck size={18} className="text-success" />
            <span>{lang === 'hi' ? 'सत्यापित गूगल फॉर्म सर्वेक्षण' : 'Verified Google Form Survey'}</span>
          </div>
        </div>
      </div>

      {/* Main Visual Google Form Card */}
      <GoogleFormFeedbackCard lang={lang} />

      {/* Community Impact Summary Grid */}
      <div className="custom-card bg-light border-0">
        <h5 className="fw-bold text-forest mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {lang === 'hi' ? 'फीडबैक प्रभाव एवं समुदाय आंकड़े' : 'Feedback Impact & Community Statistics'}
        </h5>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="p-3 bg-white rounded-4 border text-center shadow-sm h-100">
              <div className="display-6 fw-bold text-forest mb-1 font-monospace">176+</div>
              <h6 className="fw-bold text-dark mb-1">{lang === 'hi' ? 'कुल प्राप्त प्रतिक्रियाएं' : 'Total Survey Responses'}</h6>
              <small className="text-muted">{lang === 'hi' ? 'विभिन्न आयु वर्गों से लाइव डेटा' : 'Recorded from diverse demographics'}</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 bg-white rounded-4 border text-center shadow-sm h-100">
              <div className="display-6 fw-bold text-success mb-1 font-monospace">66%</div>
              <h6 className="fw-bold text-dark mb-1">{lang === 'hi' ? 'वरिष्ठ नागरिक प्रतिभागी (60+)' : 'Senior Citizen Respondents (60+)'}</h6>
              <small className="text-muted">{lang === 'hi' ? 'बुजुर्ग उपयोगकर्ताओं का मुख्य ध्यान' : 'Primary focus on elderly safety'}</small>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 bg-white rounded-4 border text-center shadow-sm h-100">
              <div className="display-6 fw-bold text-warning mb-1 font-monospace">9.4 / 10</div>
              <h6 className="fw-bold text-dark mb-1">{lang === 'hi' ? 'नेट प्रमोटर स्कोर (NPS)' : 'Recommendation NPS Score'}</h6>
              <small className="text-muted">{lang === 'hi' ? 'परिवार एवं मित्रों को सिफारिश' : 'High recommendation rating'}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
