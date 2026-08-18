import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle, XCircle, RotateCcw, Award } from 'lucide-react';

export default function FraudRiskEvaluator({ lang = 'en' }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      id: 'q1',
      question: lang === 'hi' ? 'क्या आपने अपने UPI ऐप में दैनिक लेनदेन सीमा सीमित की है?' : 'Have you set a custom daily transaction limit on your UPI app?',
      options: [
        { label: lang === 'hi' ? 'हाँ, मैंने ₹10,000 या कम की सीमा तय की है' : 'Yes, set to ₹10,000 or lower', points: 0, risk: 'low' },
        { label: lang === 'hi' ? 'नहीं, अधिकतम डिफ़ॉल्ट सीमा (₹1 लाख) चालू है' : 'No, using default max limit (₹1 Lakh)', points: 25, risk: 'high' }
      ]
    },
    {
      id: 'q2',
      question: lang === 'hi' ? 'क्या आप कभी पैसे प्राप्त करने के लिए QR कोड स्कैन करते हैं या PIN दर्ज करते हैं?' : 'Do you ever scan QR codes or enter a PIN when receiving money from others?',
      options: [
        { label: lang === 'hi' ? 'नहीं, PIN केवल पैसे भेजने के लिए होता है' : 'Never! PIN is strictly for paying/sending money', points: 0, risk: 'low' },
        { label: lang === 'hi' ? 'हाँ, अगर ग्राहक/खरीदार कहे तो कर लेता हूँ' : 'Sometimes, if the buyer/seller asks me to', points: 30, risk: 'critical' }
      ]
    },
    {
      id: 'q3',
      question: lang === 'hi' ? 'क्या आप नेटबैंकिंग के लिए सार्वजनिक Wi-Fi (रेलवे स्टेशन/कैफे) का उपयोग करते हैं?' : 'Do you perform NetBanking or UPI payments over public Wi-Fi networks?',
      options: [
        { label: lang === 'hi' ? 'नहीं, केवल व्यक्तिगत मोबाइल डेटा या सुरक्षित home Wi-Fi' : 'Never, only private mobile data or secure home Wi-Fi', points: 0, risk: 'low' },
        { label: lang === 'hi' ? 'हाँ, अगर आवश्यकता हो तो कर लेता हूँ' : 'Yes, whenever public Wi-Fi is available', points: 20, risk: 'medium' }
      ]
    },
    {
      id: 'q4',
      question: lang === 'hi' ? 'क्या आपने अपने डेबिट/क्रेडिट कार्ड की अंतरराष्ट्रीय एवं संपर्क रहित (contactless) सीमा बंद की हुई है?' : 'Have you disabled International & Contactless (NFC) limits on your card when not in use?',
      options: [
        { label: lang === 'hi' ? 'हाँ, ऐप से अंतरराष्ट्रीय लेनदेन बंद हैं' : 'Yes, disabled via mobile banking app', points: 0, risk: 'low' },
        { label: lang === 'hi' ? 'नहीं, सब कुछ डिफ़ॉल्ट रूप से सक्षम है' : 'No, all transactions remain enabled by default', points: 15, risk: 'medium' }
      ]
    },
    {
      id: 'q5',
      question: lang === 'hi' ? 'क्या आपका ATM/UPI PIN आपकी जन्म तिथि (DOB) या आसान नंबर (1234, 0000) है?' : 'Is your ATM or UPI PIN related to your birth year or simple sequences (1234, 0000)?',
      options: [
        { label: lang === 'hi' ? 'नहीं, यह एक यादृच्छिक मजबूत PIN है' : 'No, it is a completely random confidential PIN', points: 0, risk: 'low' },
        { label: lang === 'hi' ? 'हाँ, याद रखने में आसान नंबर है' : 'Yes, it is based on DOB or simple digits', points: 20, risk: 'high' }
      ]
    }
  ];

  const handleSelect = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const calculateTotalRisk = () => {
    let total = 0;
    Object.values(answers).forEach(opt => {
      total += opt.points;
    });
    return total;
  };

  const score = calculateTotalRisk();

  let riskLevel = 'LOW';
  let badgeColor = 'bg-success';
  let advice = lang === 'hi' ? 'उत्कृष्ट साइबर सुरक्षा आदतें! आप ऑनलाइन धोखाधड़ी से काफी सुरक्षित हैं।' : 'Great cyber hygiene! Your banking habits show low vulnerability to common frauds.';

  if (score >= 50) {
    riskLevel = 'CRITICAL / HIGH';
    badgeColor = 'bg-danger';
    advice = lang === 'hi' ? 'चेतावनी! आपकी वर्तमान बैंकिंग आदतें आपको ठगी के प्रति अत्यधिक संवेदनशील बनाती हैं। तुरंत अपनी सीमाएँ और PIN बदलें।' : 'High Vulnerability Detected! Your current banking habits leave you exposed to QR scams and card frauds. Follow the corrective actions below immediately.';
  } else if (score >= 20) {
    riskLevel = 'MODERATE';
    badgeColor = 'bg-warning text-dark';
    advice = lang === 'hi' ? 'मध्यम जोखिम! कुछ सुरक्षा सुधार आवश्यक हैं जैसे UPI सीमा घटाना एवं सार्वजनिक Wi-Fi से बचना।' : 'Moderate Risk. A few security tweaks (e.g., lowering UPI limits & disabling international card swipe) will protect your account.';
  }

  const resetEval = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
  };

  return (
    <div className="custom-card beige-accent">
      <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-3">
        <div className="bg-forest p-2 rounded-3 text-white">
          <ShieldAlert size={22} />
        </div>
        <div>
          <h5 className="fw-bold mb-0">
            {lang === 'hi' ? 'व्यक्तिगत बैंकिंग धोखाधड़ी जोखिम मूल्यांकनकर्ता' : 'Personal Fraud Risk & Vulnerability Evaluator'}
          </h5>
          <small className="text-muted">
            {lang === 'hi' ? '5 त्वरित प्रश्नों के साथ अपनी ऑनलाइन बैंकिंग सुरक्षा स्कोर का परीक्षण करें' : 'Assess your vulnerability score based on daily payment habits'}
          </small>
        </div>
      </div>

      {!completed ? (
        <div>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <span className="badge bg-forest">
              {lang === 'hi' ? `प्रश्न ${currentStep + 1} / ${questions.length}` : `Question ${currentStep + 1} of ${questions.length}`}
            </span>
            <div className="progress w-50" style={{ height: '8px' }}>
              <div className="progress-bar bg-success" style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}></div>
            </div>
          </div>

          <h5 className="fw-bold text-dark mb-4" style={{ minHeight: '48px' }}>
            {questions[currentStep].question}
          </h5>

          <div className="d-flex flex-column gap-2 mb-4">
            {questions[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                className="btn btn-outline-dark text-start p-3 rounded-3 border-2 fw-medium d-flex align-items-center justify-content-between"
                onClick={() => handleSelect(questions[currentStep].id, opt)}
              >
                <span>{opt.label}</span>
                <span className="badge bg-secondary">Select</span>
              </button>
            ))}
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-sm btn-link text-muted"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(prev => prev - 1)}
            >
              {lang === 'hi' ? 'पिछला प्रश्न' : 'Previous'}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-3">
          <div className="d-inline-flex p-3 rounded-circle bg-light mb-3">
            {score >= 50 ? <AlertTriangle size={48} className="text-danger" /> : <Award size={48} className="text-success" />}
          </div>

          <h4 className="fw-bold text-dark mb-1">
            {lang === 'hi' ? 'आपकी धोखाधड़ी संवेदनशीलता स्कोर' : 'Your Fraud Risk Evaluation Result'}
          </h4>
          <div className="display-4 fw-bold text-dark my-2">{score} / 100</div>
          
          <div className="mb-3">
            <span className={`badge ${badgeColor} px-3 py-2 fs-6`}>
              {lang === 'hi' ? `जोखिम स्तर: ${riskLevel}` : `Vulnerability Level: ${riskLevel}`}
            </span>
          </div>

          <p className="lead small text-dark max-w-lg mx-auto mb-4" style={{ maxWidth: '600px' }}>
            {advice}
          </p>

          <div className="p-3 bg-white rounded-3 border text-start mb-4">
            <h6 className="fw-bold text-forest mb-2">
              {lang === 'hi' ? 'तुरंत सुधार हेतु अनुशंसित कदम:' : 'Recommended Immediate Action Steps:'}
            </h6>
            <ul className="small text-muted mb-0 ps-3 d-flex flex-column gap-1">
              <li>{lang === 'hi' ? 'UPI ऐप्स में दैनिक लेन-देन सीमा ₹10,000 निर्धारित करें।' : 'Set daily UPI limit to ₹10,000 on Google Pay / PhonePe settings.'}</li>
              <li>{lang === 'hi' ? 'पैसे प्राप्त करने के लिए कभी भी PIN दर्ज न करें।' : 'Never enter a PIN to receive payments from anyone.'}</li>
              <li>{lang === 'hi' ? 'अपने कार्ड की अंतरराष्ट्रीय लेनदेन मोबाइल ऐप से ब्लॉक रखें।' : 'Keep international transactions disabled via your banking app.'}</li>
            </ul>
          </div>

          <button className="btn btn-forest rounded-3 btn-sm" onClick={resetEval}>
            <RotateCcw size={16} className="me-1" />
            {lang === 'hi' ? 'पुनः मूल्यांकन करें' : 'Retake Evaluation'}
          </button>
        </div>
      )}
    </div>
  );
}
