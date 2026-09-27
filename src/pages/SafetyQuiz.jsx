import React, { useState, useEffect, useRef } from 'react';
import { HelpCircle, CheckCircle2, Award, RotateCcw, Printer, Trophy, Edit3, Download, ShieldCheck, Check, User } from 'lucide-react';
import QuizHallOfFame from '../components/Widgets/QuizHallOfFame';

export default function SafetyQuiz({ lang = 'en', userName = '' }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [takerName, setTakerName] = useState(userName || localStorage.getItem('dhan_yodha_user_name') || '');
  const [refreshKey, setRefreshKey] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (userName) setTakerName(userName);
  }, [userName]);

  const questions = [
    {
      id: 1,
      q: lang === 'hi' 
        ? 'किसी से UPI द्वारा पैसे प्राप्त करने के लिए आपको क्या करना चाहिए?'
        : 'What is required from you to RECEIVE money via UPI?',
      options: [
        lang === 'hi' ? 'UPI PIN दर्ज करना' : 'Enter your UPI PIN',
        lang === 'hi' ? 'QR कोड स्कैन करना' : 'Scan the sender’s QR code',
        lang === 'hi' ? 'कुछ नहीं, पैसे सीधे आपके खाते में आते हैं' : 'Nothing, money is credited directly to your bank account',
        lang === 'hi' ? 'अपना OTP शेयर करना' : 'Share your OTP'
      ],
      correct: 2,
      explanation: lang === 'hi' 
        ? 'पैसे प्राप्त करने के लिए कभी भी PIN की आवश्यकता नहीं होती! PIN दर्ज करने या QR स्कैन करने से पैसा हमेशा आपके खाते से कटता है।'
        : 'You NEVER enter a PIN or scan a QR code to receive money. Typing a PIN ALWAYS deducts funds from your account!'
    },
    {
      id: 2,
      q: lang === 'hi'
        ? 'यदि आपको अपने बैंक से "खाता 2 घंटे में बंद हो जाएगा" का संदेश मिले, तो क्या करें?'
        : 'If you receive an SMS claiming "Your bank account will be blocked in 2 hours", what should you do?',
      options: [
        lang === 'hi' ? 'मैसेज में दिए लिंक पर तुरंत क्लिक करें' : 'Click the link given in the SMS immediately',
        lang === 'hi' ? 'संदेश को अनदेखा करें और पास की बैंक शाखा से संपर्क करें' : 'Ignore the link and contact your official bank branch',
        lang === 'hi' ? 'अपना डेबिट कार्ड नंबर रिप्लाई करें' : 'Reply with your Debit Card details',
        lang === 'hi' ? 'कॉल करने वाले को OTP दे दें' : 'Give OTP to the caller'
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? 'बैंक कभी भी SMS में लिंक भेजकर खाते को बंद करने की धमकी नहीं देते। यह एक 100% फ़िशिंग स्कैम है।'
        : 'Banks NEVER send urgent SMS links threatening account closure. Always verify with your official bank branch.'
    },
    {
      id: 3,
      q: lang === 'hi'
        ? 'ATM में PIN दर्ज करते समय सबसे सुरक्षित तरीका क्या है?'
        : 'What is the safest practice when typing your PIN at an ATM?',
      options: [
        lang === 'hi' ? 'सुरक्षा गार्ड से PIN टाइप करने को कहें' : 'Ask the security guard to type the PIN for you',
        lang === 'hi' ? 'कीपैड को अपने दूसरे हाथ से ढकें' : 'Shield the keypad with your hand while typing',
        lang === 'hi' ? 'PIN को ATM मशीन के पास लिखें' : 'Write the PIN near the ATM machine',
        lang === 'hi' ? 'पीछे खड़े व्यक्ति को देखने दें' : 'Let the person behind you watch'
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? 'हमेशा अपने हाथ से कीपैड को ढकें ताकि हिडन कैमरा या पीछे खड़ा व्यक्ति आपका PIN न देख सके।'
        : 'Always shield the keypad with your hand to prevent hidden cameras or shoulder surfers from stealing your PIN.'
    },
    {
      id: 4,
      q: lang === 'hi'
        ? 'बैंकिंग साइबर फ्रॉड होने पर आपातकालीन हेल्पलाइन नंबर क्या है?'
        : 'What is India’s official National Cyber Crime Helpline number for financial fraud?',
      options: [
        '100',
        '1930',
        '1091',
        '1800'
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? '1930 भारत की आधिकारिक 24x7 साइबर अपराध हेल्पलाइन है। फ्रॉड के 60 मिनट (गोल्डन आवर) में कॉल करने पर पैसे वापस ब्लॉक किए जा सकते हैं।'
        : '1930 is India’s official 24x7 Cyber Crime Helpline. Dialing within the 60-minute Golden Hour can freeze transactions.'
    },
    {
      id: 5,
      q: lang === 'hi'
        ? 'क्या आपको किसी भी कस्टमर केयर प्रतिनिधि के साथ रिमोट ऐप (जैसे AnyDesk या TeamViewer) डाउनलोड करना चाहिए?'
        : 'Should you install remote screen-sharing apps (like AnyDesk or TeamViewer) if asked by customer care?',
      options: [
        lang === 'hi' ? 'हाँ, यदि वे सहायता कर रहे हों' : 'Yes, if they are offering support',
        lang === 'hi' ? 'नहीं, यह ऐप आपकी स्क्रीन और बैंक OTP ठगों को दिखाता है' : 'No, screen-sharing apps expose your banking OTP and password live to scammers',
        lang === 'hi' ? 'केवल रिफंड पाने के लिए' : 'Only to receive a refund',
        lang === 'hi' ? 'केवल बैंक अधिकारी के कहने पर' : 'Only if requested by a caller'
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? 'कस्टमर केयर कभी भी AnyDesk डाउनलोड करने को नहीं कहता। यह ऐप ठगों को आपका फोन कंट्रोल करने की अनुमति देता है।'
        : 'Bank officials NEVER ask you to download screen-sharing apps. Uninstall AnyDesk/TeamViewer immediately if requested.'
    },
    {
      id: 6,
      q: lang === 'hi'
        ? 'डिजिटल अरेस्ट (फर्जी सीबीआई वीडियो कॉल) का सामना होने पर क्या करें?'
        : 'What is the correct action if you get a fake "Digital Arrest" video call claiming to be CBI or Police?',
      options: [
        lang === 'hi' ? 'डरकर तुरंत पैसे ट्रांसफर कर दें' : 'Panic and transfer clearance money',
        lang === 'hi' ? 'कॉल तुरंत काटें और 1930 पर रिपोर्ट करें' : 'Hang up immediately and report to 1930',
        lang === 'hi' ? 'अपने सभी दस्तावेज वीडियो पर दिखाएं' : 'Show all Aadhaar documents on video',
        lang === 'hi' ? '5 दिनों तक कॉल पर बने रहें' : 'Stay on video call for 5 days'
      ],
      correct: 1,
      explanation: lang === 'hi'
        ? 'असली सीबीआई या पुलिस कभी भी वीडियो कॉल पर पूछताछ या अरेस्ट नहीं करती और न ही पैसे मांगती है।'
        : 'Law enforcement NEVER conducts video interrogations or demands money transfers over WhatsApp/Skype.'
    },
    {
      id: 7,
      q: lang === 'hi'
        ? 'सुरक्षित पासवर्ड बनाने के लिए कौन सा विकल्प सबसे अच्छा है?'
        : 'Which option is best for creating a strong secure banking password?',
      options: [
        lang === 'hi' ? 'अपनी जन्मतिथि या नाम' : 'Your birthdate or name',
        lang === 'hi' ? '12345678' : '12345678',
        lang === 'hi' ? 'अक्षर, अंक और विशेष चिह्नों (@#$) का मिश्रण 12+ अक्षरों में' : 'A mix of uppercase, lowercase, numbers, and symbols (@#$) 12+ chars long',
        lang === 'hi' ? 'अपने फोन नंबर की पुनरावृत्ति' : 'Your mobile number'
      ],
      correct: 2,
      explanation: lang === 'hi'
        ? 'मजबूत पासवर्ड में विशेष अक्षर, अंक और विभिन्न केस का मिश्रण होना चाहिए जो अनुमान लगाना असंभव हो।'
        : 'A strong password uses 12+ characters combining symbols, numbers, and mixed uppercase/lowercase letters.'
    },
    {
      id: 8,
      q: lang === 'hi'
        ? 'RBI के नियमों के अनुसार यदि आप 3 कार्य दिवसों के भीतर अनधिकृत लेनदेन की रिपोर्ट करते हैं, तो आपकी देनदारी क्या है?'
        : 'Under RBI Zero Liability guidelines, if you report an unauthorized fraud transaction to your bank within 3 working days, what is your financial liability?',
      options: [
        lang === 'hi' ? 'शून्य (0) देनदारी - बैंक को पैसा वापस करना होगा' : 'Zero (0) liability - Bank must credit stolen money back',
        lang === 'hi' ? '50% राशि गंवानी होगी' : '50% of the money is lost',
        lang === 'hi' ? '100% हानि उठानी होगी' : '100% loss borne by customer',
        lang === 'hi' ? '₹10,000 जुर्माना' : '₹10,000 fine'
      ],
      correct: 0,
      explanation: lang === 'hi'
        ? 'RBI का नियम: 3 दिनों के भीतर रिपोर्ट करने पर ग्राहक की देनदारी शून्य होती है और बैंक 10 दिनों में पैसा वापस क्रेडिट करता है।'
        : 'RBI Rule: Reporting unauthorized transactions within 3 days guarantees zero customer liability, and banks must credit funds in 10 days.'
    }
  ];

  const handleOptionSelect = (qIndex, oIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [qIndex]: oIndex
    }));
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);
    setIsSubmitted(true);

    const total = questions.length;
    const percentage = Math.round((calculatedScore / total) * 100);
    const badge = calculatedScore === total ? 'Gold Yodha' : 'Certified Warrior';
    const finalName = takerName.trim() || 'Banking Warrior';

    fetch('/api/quiz-takers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: finalName,
        score: calculatedScore,
        total: total,
        percentage: percentage,
        badge: badge
      })
    })
    .then(res => res.json())
    .then(data => {
      setRefreshKey(prev => prev + 1);
    })
    .catch(err => console.log('Notice saving quiz result:', err.message));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  // Generate PNG Certificate Image via Canvas
  const handleDownloadCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    // Background Gradient & Border
    ctx.fillStyle = '#F5F2EB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#1E3A2B';
    ctx.lineWidth = 16;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 4;
    ctx.strokeRect(36, 36, canvas.width - 72, canvas.height - 72);

    // Certificate Header
    ctx.fillStyle = '#1E3A2B';
    ctx.font = 'bold 36px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('NATIONAL CYBER PREVENTION INITIATIVE', canvas.width / 2, 110);

    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 44px Georgia, serif';
    ctx.fillText('CERTIFICATE OF SAFE BANKING', canvas.width / 2, 180);

    ctx.fillStyle = '#4A5568';
    ctx.font = 'italic 22px Georgia, serif';
    ctx.fillText('This is to officially certify that', canvas.width / 2, 240);

    // Name Box
    const recipientName = (takerName || 'Banking Warrior').toUpperCase();
    ctx.fillStyle = '#121212';
    ctx.font = 'bold 48px Georgia, serif';
    ctx.fillText(recipientName, canvas.width / 2, 330);

    ctx.strokeStyle = '#1E3A2B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(250, 360);
    ctx.lineTo(950, 360);
    ctx.stroke();

    // Body Text
    const pct = Math.round((score / questions.length) * 100);
    ctx.fillStyle = '#121212';
    ctx.font = '22px Arial, sans-serif';
    ctx.fillText(`has successfully completed the National Online Banking Safety Test`, canvas.width / 2, 420);
    ctx.fillText(`with a score of ${score}/${questions.length} (${pct}%) and is recorded in the official database as a`, canvas.width / 2, 455);

    ctx.fillStyle = '#1E3A2B';
    ctx.font = 'bold 32px Georgia, serif';
    ctx.fillText(`CERTIFIED DHAN YODHA (धन योद्धा)`, canvas.width / 2, 515);

    // Seal & Footer Metadata
    ctx.fillStyle = '#D4AF37';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 610, 45, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#1E3A2B';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.fillText('⭐ OFFICIAL SEAL ⭐', canvas.width / 2, 618);

    ctx.fillStyle = '#6B7280';
    ctx.font = '18px monospace';
    ctx.fillText(`Date: ${new Date().toLocaleDateString()} | Cert ID: DY-2026-${Math.floor(100000 + Math.random() * 900000)} | Dhan Yodha Bureau`, canvas.width / 2, 730);

    // Trigger Image Download
    const link = document.createElement('a');
    link.download = `Dhan_Yodha_Certificate_${recipientName.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Banner */}
      <div className="custom-card beige-accent">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="p-3 bg-forest text-white rounded-3">
              <HelpCircle size={32} />
            </div>
            <div>
              <h4 className="fw-bold mb-1 text-forest" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {lang === 'hi' ? 'राष्ट्रीय ऑनलाइन सुरक्षा प्रश्नोत्तरी एवं प्रमाण पत्र' : 'Online Banking Safety Quiz & Digital Certificate'}
              </h4>
              <p className="small text-muted mb-0">
                {lang === 'hi' 
                  ? '8 प्रश्नों के उत्तर दें, अपना नाम दर्ज करें और अपना आधिकारिक धन योद्धा प्रमाण पत्र डाउनलोड करें'
                  : 'Answer 8 questions, record your score, and download your official Dhan Yodha Certificate'}
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Test Taker Name Identification Bar */}
        <div className="mt-3 p-3 bg-white rounded-3 border border-2 border-forest shadow-sm d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-center gap-2">
            <div className="p-2 bg-success bg-opacity-10 text-success rounded-circle">
              <User size={22} />
            </div>
            <div>
              <span className="badge bg-forest text-white px-2 py-1 me-2">{lang === 'hi' ? 'परीक्षार्थी पहचान' : 'TEST TAKER NAME'}</span>
              <strong className="text-dark d-inline-block">
                {lang === 'hi' ? 'परीक्षा देने वाले व्यक्ति का नाम:' : 'Person Taking The Test:'}
              </strong>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 flex-grow-1" style={{ maxWidth: '400px' }}>
            <Edit3 size={18} className="text-forest" />
            <input 
              type="text"
              className="form-control form-control-lg border-2 border-success fw-bold text-forest shadow-sm"
              placeholder={lang === 'hi' ? 'परीक्षार्थी का पूरा नाम दर्ज करें (उदा. राहुल शर्मा)' : 'Enter Test Taker Full Name (e.g. Rahul Sharma)'}
              value={takerName}
              onChange={(e) => setTakerName(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Quiz Body */}
      {!isSubmitted ? (
        <div className="custom-card">
          <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
            <span className="badge bg-forest text-white px-3 py-2 fs-6">
              {lang === 'hi' ? `प्रश्न ${currentQuestion + 1} / ${questions.length}` : `Question ${currentQuestion + 1} of ${questions.length}`}
            </span>
            <span className="small text-muted font-monospace fw-bold">
              {Object.keys(selectedAnswers).length} / {questions.length} {lang === 'hi' ? 'उत्तर चुने गए' : 'Selected'}
            </span>
          </div>

          <h5 className="fw-bold text-dark mb-4">
            {questions[currentQuestion].q}
          </h5>

          {/* Interactive Option Cards */}
          <div className="d-flex flex-column gap-3 mb-4">
            {questions[currentQuestion].options.map((opt, oIdx) => {
              const isSelected = selectedAnswers[currentQuestion] === oIdx;
              return (
                <button
                  type="button"
                  key={oIdx}
                  className={`btn text-start p-3 rounded-3 border d-flex align-items-center gap-3 transition-all ${
                    isSelected ? 'btn-success text-white shadow-sm border-success' : 'btn-outline-dark bg-white'
                  }`}
                  style={{ cursor: 'pointer', textAlign: 'left', minHeight: '52px' }}
                  onClick={() => handleOptionSelect(currentQuestion, oIdx)}
                >
                  <div 
                    className={`rounded-circle d-flex align-items-center justify-content-center border flex-shrink-0 ${
                      isSelected ? 'bg-white text-success border-white' : 'bg-light text-dark'
                    }`} 
                    style={{ width: '32px', height: '32px', minWidth: '32px' }}
                  >
                    {isSelected ? <Check size={18} className="fw-bold text-success" /> : <span className="small fw-bold">{String.fromCharCode(65 + oIdx)}</span>}
                  </div>
                  <span className="fw-semibold flex-grow-1" style={{ fontSize: '1.02rem' }}>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Question Navigation Numbers */}
          <div className="d-flex flex-wrap gap-2 mb-4 p-2 bg-light rounded-3 border justify-content-center">
            {questions.map((_, idx) => (
              <button
                key={idx}
                className={`btn btn-sm rounded-circle fw-bold ${
                  currentQuestion === idx 
                    ? 'btn-forest text-white' 
                    : selectedAnswers[idx] !== undefined 
                    ? 'btn-success text-white' 
                    : 'btn-outline-secondary'
                }`}
                style={{ width: '36px', height: '36px' }}
                onClick={() => setCurrentQuestion(idx)}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Bottom Action Controls */}
          <div className="d-flex align-items-center justify-content-between border-top pt-3 flex-wrap gap-2">
            <button
              className="btn btn-outline-secondary rounded-pill px-4"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(prev => prev - 1)}
            >
              {lang === 'hi' ? 'पिछला' : 'Previous'}
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button
                className="btn btn-forest rounded-pill px-4 fw-bold shadow-sm"
                onClick={() => setCurrentQuestion(prev => prev + 1)}
              >
                {lang === 'hi' ? 'अगला प्रश्न ➔' : 'Next Question ➔'}
              </button>
            ) : null}

            <button
              className="btn btn-warning text-dark rounded-pill px-4 fw-bold shadow-sm ms-auto"
              onClick={handleSubmitQuiz}
            >
              {lang === 'hi' ? 'क्विज़ जमा करें एवं प्रमाण पत्र प्राप्त करें 🚀' : 'Submit Quiz & Generate Certificate 🚀'}
            </button>
          </div>
        </div>
      ) : (
        /* Quiz Results & Certificate Box */
        <div className="custom-card fade-in-up">
          <div className="text-center py-3 border-bottom mb-4">
            <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-15 text-success mb-2">
              <Trophy size={48} />
            </div>
            <h3 className="fw-bold text-forest mb-1">
              {lang === 'hi' ? 'बधाई हो! आपका परिणाम डेटाबेस में रिकॉर्ड हो गया है!' : 'Congratulations! Real Test Result Saved to Database!'}
            </h3>
            <p className="lead text-dark font-monospace fw-bold mb-2">
              {lang === 'hi' ? `परीक्षार्थी: ${takerName || 'Banking Warrior'} • स्कोर: ${score} / ${questions.length} (${Math.round((score/questions.length)*100)}%)` : `Taker: ${takerName || 'Banking Warrior'} • Score: ${score} out of ${questions.length} (${Math.round((score/questions.length)*100)}%)`}
            </p>

            {/* Live Candidate Name Input Bar */}
            <div className="d-inline-flex align-items-center gap-2 mt-2 p-2 px-3 bg-light rounded-pill border border-2 border-forest shadow-sm">
              <User size={18} className="text-forest" />
              <span className="small fw-bold text-dark">{lang === 'hi' ? 'प्रमाण पत्र पर नाम बदलें:' : 'Test Taker Name on Certificate:'}</span>
              <input 
                type="text"
                className="form-control form-control-sm border-0 shadow-none fw-bold text-forest bg-white rounded-pill px-3"
                value={takerName}
                onChange={(e) => setTakerName(e.target.value)}
                style={{ width: '220px' }}
                placeholder={lang === 'hi' ? 'परीक्षार्थी नाम' : 'Candidate Name'}
              />
            </div>
          </div>

          {/* OFFICIAL CERTIFICATE BOX */}
          <div className="certificate-box my-4 p-4 rounded-4 border border-3 border-forest bg-white shadow-sm position-relative text-center">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-2 text-forest fw-bold">
              <ShieldCheck size={28} />
              <span>NATIONAL CYBER PREVENTION INITIATIVE</span>
            </div>

            <h2 className="fw-bold text-forest mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              CERTIFICATE OF SAFE BANKING
            </h2>

            <p className="text-muted small mb-3">This is to officially certify that</p>

            <h1 className="fw-bold text-dark my-2 border-bottom border-top border-warning py-2 d-inline-block px-4" style={{ fontFamily: 'Georgia, serif', color: '#1E3A2B' }}>
              {takerName || userName}
            </h1>

            <p className="lead small text-dark mt-3 max-w-md mx-auto" style={{ maxWidth: '550px' }}>
              has successfully completed the National Online Banking Safety Test with a score of <strong>{score}/{questions.length} ({Math.round((score/questions.length)*100)}%)</strong> and is recorded in the official database as a Certified <strong>Dhan Yodha (धन योद्धा)</strong>.
            </p>

            <div className="certificate-seal my-3">
              <Award size={48} className="text-warning" />
            </div>

            <div className="d-flex align-items-center justify-content-between mt-4 text-muted small border-top pt-3 font-monospace">
              <span>Date: {new Date().toLocaleDateString()}</span>
              <span>Cert ID: DY-2026-{Math.floor(100000 + Math.random() * 900000)}</span>
              <span>Dhan Yodha Bureau</span>
            </div>
          </div>

          {/* CERTIFICATE ACTIONS */}
          <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
            <button 
              className="btn btn-warning text-dark fw-bold rounded-pill px-4 py-2 shadow-sm d-flex align-items-center gap-2"
              onClick={handleDownloadCertificate}
            >
              <Download size={20} />
              <span>{lang === 'hi' ? '📥 प्रमाण पत्र इमेज डाउनलोड करें (PNG)' : '📥 Download Official Certificate (PNG)'}</span>
            </button>

            <button className="btn btn-outline-forest rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2" onClick={() => window.print()}>
              <Printer size={18} />
              <span>{lang === 'hi' ? 'प्रिंट करें / PDF' : 'Print / Save PDF'}</span>
            </button>

            <button className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2" onClick={handleReset}>
              <RotateCcw size={18} />
              <span>{lang === 'hi' ? 'पुनः क्विज़ दें' : 'Retake Test'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Live Certified Warriors & Real Test Takers Table */}
      <QuizHallOfFame lang={lang} refreshKey={refreshKey} currentUserName={takerName} />
    </div>
  );
}
