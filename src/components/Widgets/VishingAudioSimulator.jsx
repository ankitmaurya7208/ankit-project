import React, { useState, useEffect } from 'react';
import { PhoneCall, Volume2, Play, AlertTriangle, CheckCircle, XCircle, ShieldCheck, ShieldAlert, PhoneOff, Square, Mic } from 'lucide-react';

export default function VishingAudioSimulator({ lang = 'en' }) {
  const [selectedCall, setSelectedCall] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userGuess, setUserGuess] = useState(null);
  const [voices, setVoices] = useState([]);

  // Load available system voices
  useEffect(() => {
    const updateVoices = () => {
      if ('speechSynthesis' in window) {
        const available = window.speechSynthesis.getVoices();
        setVoices(available);
      }
    };

    updateVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedCall]);

  const callScenarios = [
    {
      id: 1,
      callerId: '+91 98765 43210 (Unknown Mobile Number)',
      callerName: lang === 'hi' ? 'कथित: "बैंक सुरक्षा प्रबंधक शर्मा"' : 'Alleged: "Bank Security Manager Sharma"',
      transcript: lang === 'hi'
        ? 'नमस्कार, मैं बैंक मुख्य शाखा से शर्मा बोल रहा हूँ। आपका एटीएम कार्ड 15 मिनट में बंद होने वाला है। आपके फोन पर 6 अंकों का ओटीपी आया है, कार्ड ब्लॉक रोकने के लिए मुझे तुरंत बताइए।'
        : 'Hello, I am Security Manager Sharma calling from Bank Main Branch. Your ATM card will be blocked in 15 minutes. Read out the 6-digit OTP sent to your phone to stop card blockage.',
      isFraud: true,
      reason: lang === 'hi'
        ? '🚨 फ्रॉड! बैंक कभी भी मोबाइल नंबर से कॉल करके कार्ड ब्लॉक रोकने के लिए OTP नहीं मांगते।'
        : '🚨 FRAUD! Bank officials NEVER call from personal mobile numbers asking for OTPs to prevent card blocking.',
      redFlags: lang === 'hi'
        ? ['अति-ताकीद (15 मिनट में बंद हो जाएगा)', 'फोन पर OTP मांगना', 'व्यक्तिगत मोबाइल नंबर से कॉल']
        : ['Creates panic ("blocked in 15 mins")', 'Asks for 6-digit OTP on call', 'Calling from personal mobile number']
    },
    {
      id: 2,
      callerId: '+91 87654 32109 (Unknown WhatsApp Call)',
      callerName: lang === 'hi' ? 'कथित: "मुंबई कस्टम्स विभाग"' : 'Alleged: "Mumbai Customs Department"',
      transcript: lang === 'hi'
        ? 'हेलो, कस्टम्स विभाग मुंबई से बोल रहे हैं। आपके नाम से भेजा गया पार्सल जब्त हुआ है जिसमें 5 पासपोर्ट मिले हैं। अगर आपने तुरंत फंड ट्रांसफर नहीं किया तो पुलिस गिरफ्तारी वारंट जारी होगा।'
        : 'Hello, calling from Mumbai Customs. A parcel seized under your Aadhaar contained 5 illegal passports. Transfer clearance fees immediately or a police arrest warrant will be issued.',
      isFraud: true,
      reason: lang === 'hi'
        ? '🚨 फ्रॉड! कस्टम्स या पुलिस कभी भी फोन पर ट्रांसफर मनी की मांग नहीं करती।'
        : '🚨 FRAUD! Customs or Police NEVER demand money transfers over phone calls to clear seized items.',
      redFlags: lang === 'hi'
        ? ['व्हाट्सएप कॉल का उपयोग', 'तुरंत पुलिस अरेस्ट की धमकी', 'निजी खाते में फंड ट्रांसफर की मांग']
        : ['WhatsApp call usage', 'Immediate arrest threat', 'Demanding money transfer']
    },
    {
      id: 3,
      callerId: '1800-258-6161 (Official Toll-Free)',
      callerName: lang === 'hi' ? 'आधिकारिक बैंक ऑटोमेटेड अलर्ट' : 'Official Bank Automated Alert System',
      transcript: lang === 'hi'
        ? 'एचडीएफसी बैंक ऑटोमेटेड कॉल: आपके कार्ड से 12 हजार 500 रुपये की ऑनलाइन खरीदारी की जा रही है। पुष्टि के लिए 1 दबाएं। अस्वीकार करने के लिए 2 दबाएं। हम कभी ओटीपी नहीं मांगते।'
        : 'HDFC Bank Automated Call: An online transaction of 12,500 rupees is initiated on your card. Press 1 to approve. Press 2 to decline and block card immediately. We NEVER ask for OTP or PIN.',
      isFraud: false,
      reason: lang === 'hi'
        ? '✅ प्रामाणिक ऑटोमेटेड अलर्ट! यह कॉल कभी भी OTP, PIN या CVV नहीं मांगती।'
        : '✅ GENUINE AUTOMATED ALERT! Legitimate bank alerts only ask to press numbers to confirm transactions without asking for confidential PINs or OTPs.',
      redFlags: []
    }
  ];

  const current = callScenarios[selectedCall];

  const handlePlaySound = () => {
    if (isPlaying) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);

    // 1. Play Phone Chime Ring Sound Effect via Web Audio API
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth'; // Deeper, raspier phone tone
        osc.frequency.setValueAtTime(320, ctx.currentTime); // Low pitch 320Hz ring
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.8);
      }
    } catch (e) {
      console.log('Web Audio error:', e);
    }

    // 2. Play Deep Husky Male Voice via SpeechSynthesis API
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(current.transcript);

      // Deep Husky Male Voice Tuning
      utterance.pitch = 0.65; // Low deep pitch (0.65) for grave, husky male voice
      utterance.rate = 0.84;  // Authoritative slower speed (0.84)
      utterance.volume = 1.0;

      // Select Male / Hindi / Indian Voice if available
      const systemVoices = window.speechSynthesis.getVoices();
      const maleHindiVoice = systemVoices.find(v => 
        (v.lang.includes('hi') || v.lang.includes('IN')) && 
        (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('hemant') || v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('ravi'))
      ) || systemVoices.find(v => v.lang.includes('hi')) || systemVoices.find(v => v.lang.includes('IN'));

      if (maleHindiVoice) {
        utterance.voice = maleHindiVoice;
      } else {
        utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
      }

      utterance.onend = () => {
        setIsPlaying(false);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlaying(false), 4000);
    }
  };

  return (
    <div className="custom-card beige-accent">
      <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-3">
        <div className="bg-danger p-2 rounded-3 text-white">
          <Volume2 size={22} />
        </div>
        <div>
          <h5 className="fw-bold mb-0">
            {lang === 'hi' ? 'फ़र्जी कॉल पहचानो लाइव ऑडियो सिम्युलेटर (गंभीर पुरुष आवाज़)' : 'Spot the Fake Call Live Audio Simulator (Deep Male Husky Voice)'}
          </h5>
          <small className="text-muted">
            {lang === 'hi' ? 'ठग की गहरी पुरुष आवाज़ (Deep Husky Male Voice) में ऑडियो कॉल सुनें और फ्रॉड पहचानें' : 'Listen to deep husky male fraud caller voice and test your scam detection skills'}
          </small>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {callScenarios.map((c, idx) => (
          <button
            key={c.id}
            className={`btn btn-sm ${selectedCall === idx ? 'btn-dark fw-bold' : 'btn-white border'}`}
            onClick={() => { 
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              setSelectedCall(idx); 
              setUserGuess(null); 
              setIsPlaying(false); 
            }}
          >
            {lang === 'hi' ? `कॉल केस ${idx + 1}` : `Call Sample #${idx + 1}`}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {/* Phone Audio Player Simulator */}
        <div className="col-lg-6">
          <div className="p-4 bg-dark text-white rounded-4 border border-secondary shadow-lg">
            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary pb-2">
              <span className="badge bg-danger d-flex align-items-center gap-1">
                <PhoneCall size={14} /> INCOMING CALL
              </span>
              <span className="small text-muted font-monospace">{current.callerId}</span>
            </div>

            <div className="text-center py-3">
              <div className={`d-inline-flex p-3 rounded-circle bg-secondary bg-opacity-25 mb-2 ${isPlaying ? 'animate-bounce' : ''}`}>
                <Mic size={42} className={isPlaying ? 'text-danger' : 'text-warning'} />
              </div>
              <h6 className="fw-bold text-white mb-1">{current.callerName}</h6>
              <span className="badge bg-danger text-white mb-3">
                <Volume2 size={12} className="me-1" />
                {lang === 'hi' ? 'गंभीर पुरुष आवाज़ मोड (Deep Husky Male Voice)' : 'Deep Husky Male Voice Mode'}
              </span>

              <div className="my-2">
                <button 
                  className={`btn btn-lg ${isPlaying ? 'btn-danger' : 'btn-success'} rounded-pill px-4 fw-bold shadow-lg`}
                  onClick={handlePlaySound}
                >
                  {isPlaying ? <Square size={18} className="me-2" /> : <Play size={18} className="me-2" />}
                  {isPlaying 
                    ? (lang === 'hi' ? 'ऑडियो रोकें' : 'Stop Audio Speech') 
                    : (lang === 'hi' ? 'गंभीर पुरुष आवाज़ में कॉल सुनें 🔊' : 'Play Deep Male Caller Voice 🔊')}
                </button>
              </div>
            </div>

            {/* Transcript */}
            <div className="p-3 bg-black rounded-3 border border-secondary small font-monospace text-light">
              <strong className="text-warning">Transcript:</strong>
              <p className="mb-0 mt-1 italic">"{current.transcript}"</p>
            </div>
          </div>
        </div>

        {/* User Guess Panel */}
        <div className="col-lg-6">
          <div className="p-4 bg-white rounded-4 border h-100 d-flex flex-column justify-content-between">
            <div>
              <h6 className="fw-bold text-dark mb-3">
                {lang === 'hi' ? 'आपकी पहचान: यह कॉलर कौन है?' : 'What is your verdict on this caller?'}
              </h6>

              <div className="d-flex flex-column gap-2 mb-3">
                <button 
                  className={`btn btn-sm ${userGuess === 'fraud' ? 'btn-danger' : 'btn-outline-danger'} text-start p-3 rounded-3 fw-bold`}
                  onClick={() => setUserGuess('fraud')}
                >
                  🚨 {lang === 'hi' ? 'यह एक फ़र्जी फ्रॉड कॉलर है!' : 'It is a FRAUD Scam Caller!'}
                </button>

                <button 
                  className={`btn btn-sm ${userGuess === 'genuine' ? 'btn-success' : 'btn-outline-success'} text-start p-3 rounded-3 fw-bold`}
                  onClick={() => setUserGuess('genuine')}
                >
                  ✅ {lang === 'hi' ? 'यह एक प्रामाणिक असली बैंक अलर्ट है' : 'It is a GENUINE Bank Notification'}
                </button>
              </div>

              {/* Feedback Alert */}
              {userGuess && (
                <div className="fade-in-up">
                  {(userGuess === 'fraud' && current.isFraud) || (userGuess === 'genuine' && !current.isFraud) ? (
                    <div className="p-3 bg-success bg-opacity-10 border border-success rounded-3 text-success small mb-3">
                      <strong>🎉 {lang === 'hi' ? 'बिल्कुल सही!' : 'CORRECT SPOT!'}</strong> {current.reason}
                    </div>
                  ) : (
                    <div className="p-3 bg-danger bg-opacity-10 border border-danger rounded-3 text-danger small mb-3">
                      <strong>⚠️ गलत उत्तर!</strong> {current.reason}
                    </div>
                  )}

                  {current.redFlags.length > 0 && (
                    <div className="p-3 bg-light rounded-3 border small">
                      <strong className="text-danger">Red Flags:</strong>
                      <ul className="mb-0 mt-1 ps-3 text-dark">
                        {current.redFlags.map((rf, i) => <li key={i}>{rf}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
