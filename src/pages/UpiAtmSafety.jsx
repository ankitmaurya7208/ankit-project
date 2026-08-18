import React from 'react';
import UpiAtmOtpSimulator from '../components/Widgets/UpiAtmOtpSimulator';
import { CreditCard, QrCode, Smartphone, ShieldCheck, AlertOctagon } from 'lucide-react';

export default function UpiAtmSafety({ lang = 'en' }) {
  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Header Banner */}
      <div className="p-4 bg-white rounded-4 border shadow-sm">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-forest p-3 rounded-4 text-white">
            <CreditCard size={32} />
          </div>
          <div>
            <h3 className="fw-bold mb-1">
              {lang === 'hi' ? 'UPI, ATM कार्ड एवं OTP सुरक्षा मास्टरक्लास' : 'UPI, ATM Card & OTP Safety Masterclass'}
            </h3>
            <p className="text-muted mb-0">
              {lang === 'hi' 
                ? 'अपने दैनिक ऑनलाइन लेनदेन को ठगी से बचाने के लिए इंटरएक्टिव गाइड और लाइव सिम्युलेटर।' 
                : 'Interactive guides and live simulators to protect your money from daily transaction frauds.'}
            </p>
          </div>
        </div>
      </div>

      {/* Simulator Component */}
      <UpiAtmOtpSimulator lang={lang} />

      {/* Detailed Awareness Cards */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="custom-card beige-accent h-100">
            <h5 className="fw-bold text-forest mb-3">
              <QrCode size={20} className="me-2" />
              {lang === 'hi' ? 'UPI सुरक्षा के 4 मुख्य नियम' : 'UPI Safety Golden Commandments'}
            </h5>
            <ol className="small text-muted ps-3 d-flex flex-column gap-2">
              <li>
                <strong>{lang === 'hi' ? 'PIN का अर्थ है भुगतान:' : 'PIN equals Payment:'}</strong>{' '}
                {lang === 'hi' ? 'UPI PIN दर्ज करने से आपके खाते से हमेशा पैसे कटते हैं।' : 'Entering a PIN always sends money OUT of your bank account.'}
              </li>
              <li>
                <strong>{lang === 'hi' ? 'पैसे प्राप्त करने के लिए PIN नहीं:' : 'No PIN for Receiving:'}</strong>{' '}
                {lang === 'hi' ? 'आपको पैसे भेजने वाला कोई भी व्यक्ति आपका PIN नहीं मांग सकता।' : 'Anyone promising to transfer money to you does NOT need your PIN.'}
              </li>
              <li>
                <strong>{lang === 'hi' ? 'प्राप्तकर्ता का नाम जाँचें:' : 'Verify Payee Name:'}</strong>{' '}
                {lang === 'hi' ? 'भुगतान की पुष्टि करने से पहले स्क्रीन पर पंजीकृत नाम की दोबारा जाँच करें।' : 'Before confirming any UPI transfer, double-check the actual registered name on screen.'}
              </li>
              <li>
                <strong>{lang === 'hi' ? 'दैनिक सीमा तय करें:' : 'Set Daily Limits:'}</strong>{' '}
                {lang === 'hi' ? 'अपने UPI ऐप सेटिंग्स में दैनिक सीमा ₹10,000 पर सीमित करें।' : 'Lower your daily UPI transaction limit to ₹10,000 on your UPI app settings.'}
              </li>
            </ol>
          </div>
        </div>

        <div className="col-md-6">
          <div className="custom-card h-100">
            <h5 className="fw-bold text-dark mb-3">
              <CreditCard size={20} className="me-2 text-danger" />
              {lang === 'hi' ? 'ATM कार्ड एवं PIN सुरक्षा चेकलिस्ट' : 'ATM Card & PIN Checklist'}
            </h5>
            <ol className="small text-muted ps-3 d-flex flex-column gap-2">
              <li>
                <strong>{lang === 'hi' ? 'भौतिक निरीक्षण:' : 'Physical Inspection:'}</strong>{' '}
                {lang === 'hi' ? 'कार्ड डालने से पहले कार्ड रीडर स्लॉट को धीरे से हिलाकर देखें।' : 'Pull and wiggle the card reader slot before inserting your card.'}
              </li>
              <li>
                <strong>{lang === 'hi' ? 'कीपैड ढकें:' : 'Cover Keypad:'}</strong>{' '}
                {lang === 'hi' ? 'PIN टाइप करते समय अपने हाथ से कीपैड को छिपाएं ताकि कैमरा न देख सके।' : 'Block the view of the keypad with your hand or body to prevent camera capture.'}
              </li>
              <li>
                <strong>{lang === 'hi' ? 'अंतरराष्ट्रीय स्वैप बंद करें:' : 'Disable International Transactions:'}</strong>{' '}
                {lang === 'hi' ? 'विदेश यात्रा न करने पर मोबाइल ऐप से अंतरराष्ट्रीय लेनदेन बंद रखें।' : 'Turn off international/contactless swipe on your mobile app unless traveling.'}
              </li>
              <li>
                <strong>{lang === 'hi' ? 'अपरिचितों से मदद न लें:' : 'Ignore Strangers:'}</strong>{' '}
                {lang === 'hi' ? 'ATM बूथ के अंदर कभी भी किसी अनजान व्यक्ति की मदद न लें।' : 'Never accept help from strangers inside an ATM booth.'}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
