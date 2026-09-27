import React, { useState } from 'react';
import { ShieldCheck, X, Send, Bot, Sparkles, Maximize2, Minimize2 } from 'lucide-react';

export default function CyberAssistantChatbot({ lang = 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true); // Default full screen when opened
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'hi' 
        ? 'जय हिंद! मैं धन योद्धा एआई सुरक्षा सहायक हूँ। आप ऑनलाइन बैंकिंग, मैसेज या संदिग्ध कॉल्स के बारे में कोई भी प्रश्न पूछ सकते हैं।'
        : 'Jai Hind! I am the Dhan Yodha Cyber Safety Assistant. Ask me anything about suspicious calls, UPI payment links, or OTP security!'
    }
  ]);
  const [input, setInput] = useState('');

  const quickQueries = [
    {
      q: lang === 'hi' ? 'किसी ने पैसे देने के लिए QR कोड भेजा है' : 'Someone sent a QR code to pay me money',
      a: lang === 'hi' 
        ? '🚨 सावधान! पैसे प्राप्त करने के लिए QR कोड स्कैन करने या PIN दर्ज करने की आवश्यकता नहीं होती। PIN डालने से आपके खाते से पैसे कट जाएंगे!' 
        : '🚨 DANGER! Scanning a QR code or entering your PIN is ONLY for paying money. You NEVER enter a PIN to receive funds!'
    },
    {
      q: lang === 'hi' ? 'गलती से OTP शेयर हो गया है, क्या करें?' : 'I shared an OTP by mistake 5 mins ago',
      a: lang === 'hi'
        ? '⚡ तुरंत 1930 पर कॉल करें और अपने बैंक ऐप से तुरंत डेबिट कार्ड / नेटबैंकिंग ब्लॉक करें ताकि ठग पैसे न निकाल सकें।'
        : '⚡ EMERGENCY! Immediately dial 1930 (Cyber Helpline) and freeze your debit card/netbanking via your bank app now!'
    },
    {
      q: lang === 'hi' ? 'CBI/पुलिस का डिजिटल अरेस्ट वीडियो कॉल आया है' : 'Got a video call from CBI threatening arrest',
      a: lang === 'hi'
        ? '🛑 यह 100% फ़ेक डिजिटल अरेस्ट स्कैम है! असली पुलिस/CBI कभी भी वीडियो कॉल पर अरेस्ट नहीं करती या पैसे नहीं मांगती। तुरंत कॉल काटें।'
        : '🛑 100% FRAUD! Law enforcement (CBI, Customs, Police) NEVER conducts video call interrogations or demands money. Hang up immediately!'
    },
    {
      q: lang === 'hi' ? 'कस्टमर केयर ने AnyDesk डाउनलोड करने को कहा' : 'Customer care asked to install AnyDesk',
      a: lang === 'hi'
        ? '❌ रिमोट ऐप्स (AnyDesk, TeamViewer) इंस्टॉल न करें! यह ऐप ठगों को आपकी मोबाइल स्क्रीन देखने और बैंक OTP चुराने की अनुमति देता है।'
        : '❌ DO NOT install AnyDesk/TeamViewer! Scammers use screen-sharing apps to view your banking password and OTP live.'
    }
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      let botResponse = lang === 'hi'
        ? 'सुरक्षा नियम: किसी भी संदिग्ध कॉल पर OTP, CVV या PIN न दें। किसी भी वित्तीय फ्रॉड की स्थिति में तुरंत 1930 पर कॉल करें।'
        : 'Safety Rule: Never share OTP, CVV, or PIN with any caller. Report any financial fraud immediately on 1930 Helpline.';

      const lower = query.toLowerCase();

      if (lower.includes('qr') || lower.includes('pin') || lower.includes('receive')) {
        botResponse = lang === 'hi'
          ? '🚨 UPI नियम: पैसे प्राप्त करने के लिए कभी भी PIN दर्ज न करें! PIN डालने से पैसा हमेशा आपके खाते से कटता है।'
          : '🚨 UPI Golden Rule: You NEVER enter a PIN to receive money. Typing a PIN ALWAYS deducts money from your bank account!';
      } else if (lower.includes('otp') || lower.includes('block')) {
        botResponse = lang === 'hi'
          ? '⚡ यदि OTP शेयर हो गया है तो तुरंत अपने बैंक के कस्टमर केयर 1800-नंबर पर कॉल करके कार्ड ब्लॉक करवाएं और 1930 पर शिकायत करें।'
          : '⚡ If an OTP was leaked, call your bank helpline immediately to block your card and dial 1930 to freeze transactions.';
      } else if (lower.includes('arrest') || lower.includes('cbi') || lower.includes('police') || lower.includes('video')) {
        botResponse = lang === 'hi'
          ? '🛑 डिजिटल अरेस्ट फ्रॉड अलर्ट! पुलिस या नारकोटिक्स विभाग व्हाट्सएप वीडियो कॉल पर पूछताछ नहीं करता। घबराएं नहीं और कॉल काटें।'
          : '🛑 Digital Arrest Alert! Police or CBI NEVER interogates citizens over WhatsApp/Skype video calls. Hang up and block the number.';
      } else if (lower.includes('anydesk') || lower.includes('app') || lower.includes('download')) {
        botResponse = lang === 'hi'
          ? '❌ कोई भी बैंक अधिकारी स्क्रीन शेयरिंग ऐप (AnyDesk) डाउनलोड करने को नहीं कहता। ऐप तुरंत डिलीट करें।'
          : '❌ Bank officials NEVER request downloading screen-sharing apps. Uninstall AnyDesk/TeamViewer immediately if installed.';
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    }, 400);
  };

  return (
    <>
      {/* Prominent Floating Robot Container */}
      {!isOpen && (
        <div 
          className="chatbot-floating-wrapper position-fixed bottom-0 end-0 m-3 m-md-4 d-flex align-items-center gap-2"
          style={{ zIndex: 1050 }}
        >
          {/* Always-visible Glowing Speech Callout Badge */}
          <div 
            className="p-2 px-3 bg-dark text-white rounded-pill shadow-lg border border-2 border-warning d-none d-sm-flex align-items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(true)}
            style={{ 
              cursor: 'pointer', 
              fontSize: '0.88rem', 
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(251, 191, 36, 0.4)',
              background: 'linear-gradient(135deg, #111513, #1E3A2B)'
            }}
          >
            <Sparkles size={18} className="text-warning animate-pulse" />
            <span className="fw-bold text-white">
              {lang === 'hi' ? '🤖 एआई सुरक्षा सहायक' : '🤖 Ask Dhan Yodha AI Bot'}
            </span>
          </div>

          {/* High-Contrast Glowing Robot Icon Button */}
          <button
            className="btn rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-3 border-warning position-relative"
            style={{ 
              width: '64px', 
              height: '64px', 
              background: 'linear-gradient(135deg, #1E3A2B 0%, #121212 100%)',
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.7), 0 0 12px rgba(251, 191, 36, 0.8)',
              cursor: 'pointer'
            }}
            onClick={() => setIsOpen(true)}
            title="Dhan Yodha AI Safety Assistant"
          >
            <Bot 
              size={36} 
              style={{ 
                color: '#FBBF24', 
                filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.9))' 
              }} 
            />
            <span 
              className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
              style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}
            >
              <span className="visually-hidden">AI Active</span>
            </span>
          </button>
        </div>
      )}

      {/* FULL SCREEN / EXPANDED CHATBOT OVERLAY */}
      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column bg-dark fade-in-up"
          style={{ 
            zIndex: 9999,
            background: 'linear-gradient(135deg, #07120C 0%, #10241A 100%)'
          }}
        >
          {/* FULL SCREEN TOP HEADER BAR */}
          <div className="p-3 px-4 bg-forest border-bottom border-warning border-2 text-white d-flex align-items-center justify-content-between shadow-md" style={{ background: '#1E3A2B' }}>
            <div className="d-flex align-items-center gap-3">
              <div className="p-2 bg-dark rounded-circle border border-warning">
                <Bot size={32} style={{ color: '#FBBF24', filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.9))' }} />
              </div>
              <div>
                <h5 className="fw-bold mb-0 text-white" style={{ letterSpacing: '0.8px', fontFamily: 'Outfit, sans-serif' }}>
                  DHAN YODHA AI CYBER ASSISTANT
                </h5>
                <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1" style={{ fontSize: '0.78rem' }}>
                  ● 24x7 Active Cyber Security Bot
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              {/* Fullscreen Toggle */}
              <button 
                className="btn btn-outline-light btn-sm rounded-circle p-2 d-none d-md-flex align-items-center justify-content-center"
                onClick={() => setIsFullScreen(!isFullScreen)}
                title={isFullScreen ? "Minimize View" : "Full Screen View"}
              >
                {isFullScreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>

              {/* PROMINENT CLOSE BUTTON */}
              <button 
                className="btn btn-danger rounded-pill px-3 py-2 fw-bold d-flex align-items-center gap-2 shadow-sm" 
                onClick={() => setIsOpen(false)}
                title="Close Chatbot"
              >
                <X size={22} />
                <span>{lang === 'hi' ? 'बंद करें' : 'Close'}</span>
              </button>
            </div>
          </div>

          {/* CHAT MESSAGES BODY CONTAINER */}
          <div className="flex-grow-1 p-3 p-md-4 overflow-auto d-flex flex-column gap-3" style={{ backgroundColor: '#0a1610' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`d-flex mb-3 ${m.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div 
                    className={`p-3 rounded-4 shadow-sm ${
                      m.sender === 'user' 
                        ? 'bg-success text-white' 
                        : 'bg-dark text-light border border-secondary'
                    }`}
                    style={{ 
                      maxWidth: '85%', 
                      fontSize: '1.05rem', 
                      lineHeight: '1.5',
                      backgroundColor: m.sender === 'user' ? '#1E3A2B' : '#14281E',
                      color: '#ffffff'
                    }}
                  >
                    {m.sender === 'bot' && (
                      <div className="fw-bold text-warning mb-1 small d-flex align-items-center gap-1">
                        <ShieldCheck size={16} /> Dhan Yodha AI Assistant
                      </div>
                    )}
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK QUESTIONS PRESETS BAR */}
          <div className="p-3 bg-dark border-top border-secondary">
            <div className="container" style={{ maxWidth: '900px' }}>
              <small className="text-warning fw-bold d-block mb-2">⚡ Quick Safety Queries (Click to ask):</small>
              <div className="d-flex flex-wrap gap-2">
                {quickQueries.map((qq, i) => (
                  <button 
                    key={i} 
                    className="btn btn-outline-success btn-sm rounded-pill text-start text-white border-secondary"
                    style={{ fontSize: '0.85rem' }}
                    onClick={() => {
                      setMessages(prev => [...prev, { sender: 'user', text: qq.q }, { sender: 'bot', text: qq.a }]);
                    }}
                  >
                    {qq.q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FULL SCREEN INPUT BAR FOOTER */}
          <div className="p-3 bg-forest border-top border-secondary">
            <div className="container" style={{ maxWidth: '900px' }}>
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="d-flex gap-2">
                <input 
                  type="text" 
                  placeholder={lang === 'hi' ? 'संदेह या प्रश्न यहाँ लिखें...' : 'Type any banking security question or scam alert here...'}
                  className="form-control form-control-lg rounded-pill px-4 bg-dark text-white border-secondary"
                  style={{ fontSize: '1rem' }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="btn btn-warning rounded-pill px-4 fw-bold d-flex align-items-center gap-2">
                  <Send size={20} />
                  <span className="d-none d-sm-inline">{lang === 'hi' ? 'भेजें' : 'Send'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
