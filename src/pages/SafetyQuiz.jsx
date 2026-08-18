import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, Award, CheckCircle, XCircle, RotateCcw, Download, ShieldCheck, User } from 'lucide-react';

export default function SafetyQuiz({ lang = 'en' }) {
  const quizQuestions = [
    {
      id: 1,
      question: lang === 'hi'
        ? "गूगल पे, फोनपे या पेटीएम पर अपना UPI PIN दर्ज करने का एकमात्र उद्देश्य क्या है?"
        : "What is the SINGLE purpose of entering your UPI PIN on Google Pay, PhonePe, or Paytm?",
      options: lang === 'hi' ? [
        "A) किसी खरीदार से पैसे प्राप्त करने की पुष्टि करना",
        "B) आपके बैंक खाते से पैसे का भुगतान/कटौती करना",
        "C) बिना किसी लेनदेन के अपना बैंक बैलेंस जांचना",
        "D) बैंक कस्टमर केयर को अपनी पहचान सत्यापित करना"
      ] : [
        "A) To confirm receiving money from a buyer",
        "B) To PAY / Deduct money out of your bank account",
        "C) To check your bank balance without any transaction",
        "D) To verify your identity to bank customer care"
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? "UPI PIN दर्ज करने से आपके खाते से हमेशा पैसे कटते हैं। पैसे प्राप्त करने के लिए आपको कभी भी PIN नहीं डालना पड़ता!"
        : "Entering a UPI PIN ALWAYS deducts money from your account. You NEVER enter a PIN to receive money!"
    },
    {
      id: 2,
      question: lang === 'hi'
        ? "आपको SMS मिलता है: 'आज रात 9:30 बजे आपकी बिजली काट दी जाएगी। बिल चुकाने के लिए 9876543210 पर कॉल करें'। आपको क्या करना चाहिए?"
        : "You receive an SMS: 'Your power will be cut tonight at 9:30 PM. Call 9876543210 to clear bill'. What should you do?",
      options: lang === 'hi' ? [
        "A) तुरंत उस नंबर पर कॉल करें और निर्देशों का पालन करें",
        "B) रिमोट बिल जांच की अनुमति देने के लिए AnyDesk डाउनलोड करें",
        "C) SMS को अनदेखा करें और आधिकारिक बिजली पोर्टल पर स्थिति जांचें",
        "D) कॉलर के मोबाइल नंबर पर ₹10 ट्रांसफर करें"
      ] : [
        "A) Call the number immediately and follow instructions",
        "B) Download AnyDesk or TeamViewer to allow remote bill check",
        "C) Ignore the SMS and verify bill status on official electricity portal",
        "D) Transfer ₹10 advance to the caller's mobile number"
      ],
      correct: 2,
      explanation: lang === 'hi'
        ? "बिजली बोर्ड कभी भी व्यक्तिगत मोबाइल नंबर भेजकर रिमोट ऐप इंस्टॉल करने को नहीं कहते। आधिकारिक पोर्टल पर जांचें।"
        : "Legitimate electricity boards never send mobile numbers in SMS asking for remote app installation. Always check official portals."
    },
    {
      id: 3,
      question: lang === 'hi'
        ? "कार्ड स्किमिंग से बचने के लिए ATM मशीन का उपयोग करने से पहले आपको क्या जांचना चाहिए?"
        : "What should you check BEFORE using an ATM machine to prevent card skimming?",
      options: lang === 'hi' ? [
        "A) जांचें कि क्या ATM कमरे का AC काम कर रहा है",
        "B) कार्ड स्लॉट को धीरे से हिलाएं और PIN टाइप करते समय कीपैड को ढकें",
        "C) पास खड़े किसी अनजान व्यक्ति को अपना कार्ड पकड़ाएं",
        "D) कार्ड डालने से पहले 5 बार कैंसिल बटन दबाएं"
      ] : [
        "A) Check if the ATM room has an AC working",
        "B) Gently wiggle the card slot and cover keypad while typing PIN",
        "C) Ask a stranger standing nearby to hold your card",
        "D) Press Cancel button 5 times before inserting card"
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? "ढीले स्लॉट की जांच से स्किमर पकड़े जाते हैं और कीपैड ढकने से छिपे कैमरे PIN रिकॉर्ड नहीं कर पाते।"
        : "Checking for loose card slots prevents magnetic skimmers, and covering the keypad prevents pinhole cameras from capturing your PIN."
    },
    {
      id: 4,
      question: lang === 'hi'
        ? "वित्तीय धोखाधड़ी के 24 घंटे के भीतर शिकायत दर्ज करने के लिए भारत की राष्ट्रीय साइबर हेल्पलाइन नंबर क्या है?"
        : "What is the official Indian National Cyber Crime Helpline number to report financial fraud within 24 hours?",
      options: [
        "A) 100",
        "B) 1930",
        "C) 1091",
        "D) 1800-111-222"
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? "1930 राष्ट्रीय साइबर अपराध हेल्पलाइन नंबर है जो तुरंत धोखाधड़ी वाली रकम को फ्रीज करने में मदद करता है।"
        : "1930 is the official National Cyber Crime Helpline number to freeze fraudulent funds immediately."
    },
    {
      id: 5,
      question: lang === 'hi'
        ? "निम्नलिखित में से कौन सा PIN अत्यधिक संवेदनशील (असुरक्षित) माना जाता है?"
        : "Which of the following PINs is considered HIGHLY VULNERABLE?",
      options: lang === 'hi' ? [
        "A) 7492",
        "B) 1234 या आपका जन्म वर्ष (उदा. 1998)",
        "C) 8305",
        "D) 9142"
      ] : [
        "A) 7492",
        "B) 1234 or your Birth Year (e.g. 1998)",
        "C) 8305",
        "D) 9142"
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? "क्रमिक संख्याएँ (1234) और जन्म वर्ष साइबर अपराधियों द्वारा अनुमान लगाए जाने वाले पहले संयोजन हैं।"
        : "Sequential numbers (1234) and birth years are the first combinations guessed by cyber criminals."
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [userName, setUserName] = useState('');
  const [certificateIssued, setCertificateIssued] = useState(false);

  const handleSelect = (qId, optionIdx) => {
    if (showResult) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    setShowResult(true);
    const score = calculateScore();
    if (score >= 3) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResult(false);
    setCurrentQ(0);
    setCertificateIssued(false);
  };

  const score = calculateScore();
  const percentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Header */}
      <div className="p-4 bg-white rounded-4 border shadow-sm">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-forest p-3 rounded-4 text-white">
            <HelpCircle size={32} />
          </div>
          <div>
            <h3 className="fw-bold mb-1">
              {lang === 'hi' ? 'ऑनलाइन बैंकिंग सुरक्षा क्विज़ एवं प्रमाण पत्र' : 'Online Banking Safety Quiz & Certification'}
            </h3>
            <p className="text-muted mb-0">
              {lang === 'hi'
                ? 'अपनी सुरक्षित बैंकिंग ज्ञान का परीक्षण करें, विस्तृत उत्तर व्याख्याएं देखें और अपना डिजिटल सुरक्षा प्रमाण पत्र प्राप्त करें।'
                : 'Test your safe banking knowledge, review answer breakdowns, and earn your digital safety certificate.'}
            </p>
          </div>
        </div>
      </div>

      {!showResult ? (
        /* Quiz Interface */
        <div className="custom-card beige-accent">
          <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
            <span className="badge bg-forest px-3 py-2 fs-6">
              {lang === 'hi' ? `प्रश्न ${currentQ + 1} / ${quizQuestions.length}` : `Question ${currentQ + 1} of ${quizQuestions.length}`}
            </span>
            <span className="small text-muted font-monospace">
              {lang === 'hi' ? `उत्तर दिए गए: ${Object.keys(selectedAnswers).length} / ${quizQuestions.length}` : `Answered: ${Object.keys(selectedAnswers).length} / ${quizQuestions.length}`}
            </span>
          </div>

          <h5 className="fw-bold text-dark mb-4" style={{ minHeight: '50px' }}>
            {quizQuestions[currentQ].question}
          </h5>

          <div className="d-flex flex-column gap-2 mb-4">
            {quizQuestions[currentQ].options.map((opt, idx) => {
              const isSelected = selectedAnswers[quizQuestions[currentQ].id] === idx;
              return (
                <div
                  key={idx}
                  className={`option-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(quizQuestions[currentQ].id, idx)}
                >
                  <div className={`rounded-circle border d-flex align-items-center justify-content-center fw-bold ${isSelected ? 'bg-forest text-white' : 'text-muted'}`} style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <div className="text-dark small">{opt}</div>
                </div>
              );
            })}
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <button 
              className="btn btn-outline-secondary btn-sm"
              disabled={currentQ === 0}
              onClick={() => setCurrentQ(prev => prev - 1)}
            >
              {lang === 'hi' ? 'पिछला प्रश्न' : 'Previous Question'}
            </button>

            {currentQ < quizQuestions.length - 1 ? (
              <button 
                className="btn btn-forest btn-sm"
                onClick={() => setCurrentQ(prev => prev + 1)}
              >
                {lang === 'hi' ? 'अगला प्रश्न' : 'Next Question'}
              </button>
            ) : (
              <button 
                className="btn btn-emerald btn-sm fw-bold"
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
              >
                {lang === 'hi' ? 'क्विज़ सबमिट करें एवं स्कोर देखें' : 'Submit Quiz & View Score'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results & Certificate Section */
        <div className="d-flex flex-column gap-4">
          <div className="custom-card beige-accent text-center">
            <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-25 mb-3 text-success">
              <Award size={48} />
            </div>

            <h3 className="fw-bold text-forest mb-1">{lang === 'hi' ? 'क्विज़ पूरा हुआ!' : 'Quiz Completed!'}</h3>
            <div className="display-4 fw-bold text-dark my-2">{score} / {quizQuestions.length}</div>
            <p className="lead text-muted mb-3">{lang === 'hi' ? 'आपका जागरूकता स्कोर:' : 'Your Awareness Score:'} <strong>{percentage}%</strong></p>

            {percentage >= 70 ? (
              <div className="p-3 bg-success bg-opacity-10 border border-success rounded-3 text-success fw-bold d-inline-block mb-3">
                🎉 {lang === 'hi' ? 'बधाई हो! आपने उच्च साइबर सुरक्षा जागरूकता का प्रदर्शन किया।' : 'Congratulations! You demonstrated High Cyber Hygiene Awareness.'}
              </div>
            ) : (
              <div className="p-3 bg-warning bg-opacity-10 border border-warning rounded-3 text-dark fw-semibold d-inline-block mb-3">
                ⚠️ {lang === 'hi' ? 'अच्छा प्रयास! अपना स्कोर सुधारने के लिए नीचे दिए गए स्पष्टीकरण पढ़ें।' : 'Good effort! Review the detailed explanations below to improve your score.'}
              </div>
            )}

            <div>
              <button className="btn btn-outline-dark btn-sm rounded-3 me-2" onClick={handleReset}>
                <RotateCcw size={16} className="me-1" /> {lang === 'hi' ? 'पुनः क्विज़ लें' : 'Retake Quiz'}
              </button>
            </div>
          </div>

          {/* Certificate Generator Card */}
          <div className="custom-card">
            <h5 className="fw-bold text-forest mb-3">
              <ShieldCheck size={22} className="me-2 text-success" />
              {lang === 'hi' ? 'सुरक्षित बैंकिंग जागरूकता का आधिकारिक प्रमाण पत्र बनाएं' : 'Generate Official Certificate of Safe Banking Awareness'}
            </h5>

            <div className="row g-3 align-items-center mb-4">
              <div className="col-md-8">
                <input 
                  type="text" 
                  placeholder={lang === 'hi' ? 'प्रमाण पत्र हेतु अपना पूरा नाम दर्ज करें...' : 'Enter your full name for the certificate...'} 
                  className="form-control form-control-lg"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <button 
                  className="btn btn-forest w-100 btn-lg"
                  disabled={!userName.trim()}
                  onClick={() => setCertificateIssued(true)}
                >
                  {lang === 'hi' ? 'प्रमाण पत्र बनाएं' : 'Generate Certificate'}
                </button>
              </div>
            </div>

            {certificateIssued && (
              <div className="certificate-box mt-3">
                <span className="badge bg-forest text-white px-3 py-2 rounded-pill mb-3">
                  NATIONAL CYBER SECURITY AWARENESS PORTAL
                </span>
                <h2 className="fw-bold text-dark font-serif" style={{ fontFamily: 'Georgia, serif' }}>
                  CERTIFICATE OF COMPLIANCE
                </h2>
                <p className="text-muted small mb-2">This is to certify that</p>
                <h3 className="fw-bold text-success text-uppercase border-bottom border-success border-2 d-inline-block px-4 pb-2 mb-3">
                  {userName}
                </h3>
                <p className="small text-dark mb-4" style={{ maxWidth: '550px', margin: '0 auto' }}>
                  has successfully passed the <strong>Dhan Yodha Safe Banking Quiz</strong> with a score of <strong>{score}/{quizQuestions.length} ({percentage}%)</strong>, demonstrating proficiency in UPI security, ATM skimming prevention, OTP hygiene, and phishing detection.
                </p>

                <div className="certificate-seal">
                  <Award size={40} />
                </div>

                <div className="d-flex justify-content-between align-items-end mt-4 pt-3 border-top small text-muted">
                  <div>
                    <div>Date Issued: {new Date().toLocaleDateString()}</div>
                    <div className="font-monospace text-dark">ID: CERT-DY-{Math.floor(100000 + Math.random() * 900000)}</div>
                  </div>
                  <div className="text-end">
                    <strong className="text-dark">Dhan Yodha Safe Banking Bureau</strong>
                    <div>Verified Digital Signature</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
