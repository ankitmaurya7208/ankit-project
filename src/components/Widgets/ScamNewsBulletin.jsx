import React, { useState } from 'react';
import { Newspaper, AlertTriangle, ShieldAlert, ArrowRight, ExternalLink, Flame, ShieldCheck } from 'lucide-react';

export default function ScamNewsBulletin({ lang = 'en' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsItems = [
    {
      id: 1,
      category: 'Digital Arrest Scam',
      title: lang === 'hi'
        ? 'डिजिटल अरेस्ट फ्रॉड: बुजुर्ग व्यापारी 5 दिन वीडियो कॉल पर अरेस्ट, ₹1.4 करोड़ ठगे'
        : 'Digital Arrest Fraud: Senior Citizen Held Under 5-Day Video Call "House Arrest", Loses ₹1.4 Crores',
      date: '16-AUG-2026',
      source: 'Cyber Cell Advisory',
      location: 'New Delhi',
      loss: '₹1.40 Crores',
      summary: lang === 'hi'
        ? 'ठगों ने खुद को CBI और नारकोटिक्स कंट्रोल ब्यूरो (NCB) का अधिकारी बताकर व्हाट्सएप वीडियो कॉल किया। दावा किया कि पीड़ित के नाम से भेजे गए पार्सल में अवैध ड्रग्स मिले हैं।'
        : 'Fraudsters impersonated CBI & Narcotics Control Bureau (NCB) officers on a WhatsApp video call, claiming an illegal drugs package was confiscated in the victim’s name.',
      modusOperandi: lang === 'hi' ? [
        'पीड़ित को 5 दिनों तक कमरे में डिजिटल अरेस्ट रखा गया।',
        'फर्जी सुप्रीम कोर्ट लेटर और पुलिस वर्दी पहनकर डराया गया।',
        '"सत्यापन और जमानत" के नाम पर गुप्त खातों में पैसे ट्रांसफर करवाए गए।'
      ] : [
        'Victim kept on 24/7 video monitoring under fake "Digital Arrest".',
        'Scammers wore fake police uniforms and produced bogus Supreme Court warrants.',
        'Tricked victim into transferring life savings into "RBI Verification Accounts".'
      ],
      policeAdvisory: lang === 'hi'
        ? 'कानून प्रवर्तन एजेंसियां (CBI, पुलिस, ED) कभी भी वीडियो कॉल पर पूछताछ या अरेस्ट नहीं करतीं और न ही पैसे मांगती हैं!'
        : 'Law enforcement agencies (CBI, Police, Customs) NEVER conduct video call interrogations or demand money transfers!'
    },
    {
      id: 2,
      category: 'Fake Stock Trading Scam',
      title: lang === 'hi'
        ? 'व्हाट्सएप स्टॉक ट्रेडिंग ग्रुप स्कैम: 450% रिटर्न का लालच देकर डॉक्टर से ₹65 लाख ऐंठे'
        : 'WhatsApp Share Market Group Scam: Doctor Tricked of ₹65 Lakhs Promised 450% High Returns',
      date: '12-AUG-2026',
      source: 'Financial Express Cyber Bureau',
      location: 'Bengaluru',
      loss: '₹65 Lakhs',
      summary: lang === 'hi'
        ? 'पीड़ित को एक एलीट FII/Institutional शेयर मार्केट ग्रुप में जोड़ा गया। नकली ऐप पर 500% का फर्जी मुनाफा दिखाकर पैसे जमा कराए गए, पर निकासी बंद कर दी गई।'
        : 'Victim was added to a VIP WhatsApp trading group impersonating famous investment firms. A fake app showed false 500% profits, but withdrawal was blocked.',
      modusOperandi: lang === 'hi' ? [
        'सोशल मीडिया विज्ञापनों से व्हाट्सएप ट्रेडिंग ग्रुप में जोड़ना।',
        'फर्जी ट्रेडिंग पोर्टल पर नकली भारी मुनाफा दिखाना।',
        'पैसे निकालते समय 20% "टैक्स और पेनल्टी" की मांग करना।'
      ] : [
        'Lured via social media ads into exclusive WhatsApp trading groups.',
        'Displayed fake inflated account balances on a manipulated web app.',
        'Demanded extra "tax fees" when victim tried to withdraw profits.'
      ],
      policeAdvisory: lang === 'hi'
        ? 'केवल SEBI से पंजीकृत ब्रोकरों (Zerodha, Groww, AngelOne) से ही निवेश करें। किसी व्हाट्सएप ग्रुप लिंक पर विश्वास न करें।'
        : 'Trade only through SEBI-registered brokers. Never invest via links shared in WhatsApp or Telegram groups.'
    },
    {
      id: 3,
      category: 'FedEx / Customs Scam',
      title: lang === 'hi'
        ? 'फेडएक्स कूरियर स्कैम: "पार्सल में मिला ताइवान पासपोर्ट", छात्रा से ₹4.5 लाख की ठगी'
        : 'FedEx Courier Scam: Student Deprived of ₹4.5 Lakhs After Fake Call Claiming "Illegal Passport Found"',
      date: '08-AUG-2026',
      source: 'Mumbai Police Cyber Cell',
      location: 'Mumbai',
      loss: '₹4.50 Lakhs',
      summary: lang === 'hi'
        ? 'एक ऑटोमेटेड कॉल आई: "आपका FedEx पार्सल रोका गया है"। कॉलर ने कहा कि पार्सल में 5 फर्जी पासपोर्ट और MDMA ड्रग्स मिली हैं, और मामला मुंबई क्राइम ब्रांच को ट्रांसफर किया गया।'
        : 'Automated call: "Your FedEx package has been seized". Scammer claimed 5 fake passports and illegal drugs were inside, transferring call to a fake cop.',
      modusOperandi: lang === 'hi' ? [
        'पार्सल में अवैध सामान होने की बात कहकर तुरंत जेल जाने की धमकी।',
        'साइबर क्राइम सेल का डर दिखाकर तत्काल फंड वेरिफिकेशन ट्रांसफर करवाना।'
      ] : [
        'Threatened immediate arrest under Money Laundering Act.',
        'Coerced victim into transferring funds to "Clearance RBI Account".'
      ],
      policeAdvisory: lang === 'hi'
        ? 'कूरियर कंपनियाँ कभी भी कॉल पर अन्य विभागों को ट्रांसफर नहीं करतीं और न ही फंड की मांग करती हैं।'
        : 'Courier services do not transfer calls to police stations or request money to clear seized items.'
    },
    {
      id: 4,
      category: 'Part-Time Telegram Job',
      title: lang === 'hi'
        ? 'यूट्यूब लाइक एवं टेलीग्राम जॉब फ्रॉड: पार्ट-टाइम नौकरी के नाम पर सॉफ्टवेयर इंजीनियर से ₹18 लाख की ठगी'
        : 'YouTube Like & Telegram Job Fraud: Software Engineer Scammed of ₹18 Lakhs in "Part-Time Task" Trap',
      date: '02-AUG-2026',
      source: 'Cyber Crime Portal Report',
      location: 'Hyderabad',
      loss: '₹18.00 Lakhs',
      summary: lang === 'hi'
        ? 'शुरुआत में यूट्यूब वीडियो लाइक करने के लिए ₹150 प्रतिदिन दिए गए। बाद में "क्रिप्टो प्रीपेड टास्क" में भारी रिटर्न का लालच देकर लाखों रुपये जमा कराए गए।'
        : 'Initially paid ₹150/day for simple YouTube video likes. Later enticed into high-value "Crypto Prepaid Tasks" where funds were frozen.',
      modusOperandi: lang === 'hi' ? [
        'शुरुआती 2-3 कार्यों पर छोटा असली भुगतान करके विश्वास जीतना।',
        'टेलीग्राम ग्रुप में "क्रिप्टो इन्वेस्टमेंट टॉस्क" में बड़ा पैसा जमा करवाना।'
      ] : [
        'Paid genuine small payouts for first 2 tasks to build trust.',
        'Trapped victim into high-tier "Prepaid Rating Tasks" with blocked withdrawals.'
      ],
      policeAdvisory: lang === 'hi'
        ? 'कोई भी वैध कंपनी यूट्यूब लाइक करने या अग्रिम क्रिप्टो जमा करने के लिए पैसे नहीं देती।'
        : 'No legitimate employer requires candidates to deposit money to earn task commission.'
    }
  ];

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(n => n.category === selectedCategory);

  return (
    <div className="d-flex flex-column gap-4">
      {/* Live Breaking News Ticker Bar */}
      <div className="p-3 bg-dark text-white rounded-4 shadow-sm border border-danger d-flex align-items-center gap-3 overflow-hidden">
        <span className="badge bg-danger px-3 py-2 fs-6 fw-bold d-flex align-items-center gap-1 animate-pulse">
          <Flame size={18} />
          {lang === 'hi' ? 'ब्रेकिंग फ्रॉड अलर्ट' : 'BREAKING FRAUD NEWS'}
        </span>
        <div className="marquee-text small font-monospace text-warning flex-grow-1 text-truncate">
          🚨 {lang === 'hi' ? 'CBI एवं पुलिस के नाम से आ रहे वीडियो कॉल "डिजिटल अरेस्ट" फर्जी हैं! तुरंत 1930 डायल करें।' : 'Fake video calls claiming "Digital Arrest" by CBI or Narcotics Bureau are 100% FRAUD! Dial 1930.'}
        </div>
      </div>

      {/* Main News Header */}
      <div className="p-4 bg-white rounded-4 border shadow-sm">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="bg-danger p-3 rounded-4 text-white">
              <Newspaper size={32} />
            </div>
            <div>
              <h3 className="fw-bold mb-1">
                {lang === 'hi' ? 'वास्तविक साइबर क्राइम समाचार एवं क्राइम फाइलें' : 'Real-Life Cyber Crime News Bulletins'}
              </h3>
              <p className="text-muted mb-0">
                {lang === 'hi' 
                  ? 'हाल ही में घटे वास्तविक साइबर फ्रॉड केस स्टडीज और पुलिस साइबर सेल द्वारा जारी एडवाइजरी।' 
                  : 'Real news stories of recent cyber frauds across India and official Police advisories.'}
              </p>
            </div>
          </div>

          <div className="d-flex gap-1 flex-wrap">
            {['All', 'Digital Arrest Scam', 'Fake Stock Trading Scam', 'FedEx / Customs Scam', 'Part-Time Telegram Job'].map(cat => (
              <button
                key={cat}
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-danger fw-bold' : 'btn-light border'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Articles Grid */}
      <div className="d-flex flex-column gap-4">
        {filteredNews.map(item => (
          <div key={item.id} className="custom-card border-2 border-danger border-opacity-25 bg-white">
            {/* News Badge & Meta Header */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2 border-bottom pb-2">
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-danger">{item.category}</span>
                <span className="small text-muted font-monospace">📍 {item.location} • 📅 {item.date}</span>
              </div>
              <span className="badge bg-dark text-warning font-monospace">
                {lang === 'hi' ? `नुकसान: ${item.loss}` : `Financial Loss: ${item.loss}`}
              </span>
            </div>

            {/* Headline */}
            <h4 className="fw-bold text-dark mb-2 font-serif" style={{ fontFamily: 'Georgia, serif' }}>
              {item.title}
            </h4>

            {/* News Summary */}
            <p className="text-muted small mb-3">
              {item.summary}
            </p>

            {/* Modus Operandi Breakdown Box */}
            <div className="p-3 bg-light rounded-3 border mb-3">
              <h6 className="fw-bold text-danger small mb-2">
                <AlertTriangle size={16} className="me-1" />
                {lang === 'hi' ? 'ठगी का तरीका (Modus Operandi):' : 'Modus Operandi (How the Scam Happened):'}
              </h6>
              <ul className="mb-0 ps-3 small text-dark d-flex flex-column gap-1">
                {item.modusOperandi.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Police Advisory Banner */}
            <div className="p-3 bg-success bg-opacity-10 border border-success border-opacity-50 rounded-3 small">
              <strong className="text-success d-flex align-items-center gap-1 mb-1">
                <ShieldCheck size={16} />
                {lang === 'hi' ? 'पुलिस साइबर सेल एडवाइजरी:' : 'Police Cyber Cell Official Advisory:'}
              </strong>
              <p className="mb-0 text-dark fw-medium">{item.policeAdvisory}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
