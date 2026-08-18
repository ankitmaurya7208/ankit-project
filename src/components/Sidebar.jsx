import React from 'react';
import { 
  ShieldAlert, 
  Home, 
  CreditCard, 
  AlertTriangle, 
  Key, 
  HelpCircle, 
  MessageSquareQuote, 
  ChevronLeft, 
  ChevronRight,
  PhoneCall,
  Search,
  CheckSquare,
  Clock,
  Printer,
  Newspaper,
  Heart
} from 'lucide-react';

export default function Sidebar({ activePage, setActivePage, collapsed, setCollapsed, storyCount = 0, lang = 'en', onOpenPrintModal }) {
  const menuItems = [
    { id: 'home', label: lang === 'hi' ? 'डैशबोर्ड होम' : 'Dashboard Home', icon: Home },
    { id: 'senior-hub', label: lang === 'hi' ? 'वरिष्ठ नागरिक कॉर्नर' : 'Senior Citizens Hub', icon: Heart, badge: 'EASY' },
    { id: 'news', label: lang === 'hi' ? 'वास्तविक फ्रॉड समाचार' : 'Scam News Bulletin', icon: Newspaper, badge: 'HOT' },
    { id: 'upi-atm', label: lang === 'hi' ? 'UPI / ATM / OTP सुरक्षा' : 'UPI / ATM / OTP Safety', icon: CreditCard },
    { id: 'phishing', label: lang === 'hi' ? 'फ़िशिंग एवं स्कैम' : 'Phishing & Scams', icon: AlertTriangle },
    { id: 'url-inspector', label: lang === 'hi' ? 'फ़ेक पोर्टल्स URL निरीक्षक' : 'Fake Bank Portal Inspector', icon: Search },
    { id: 'password-pin', label: lang === 'hi' ? 'पासवर्ड एवं PIN सुरक्षा' : 'Password & PIN Safety', icon: Key },
    { id: 'risk-eval', label: lang === 'hi' ? 'व्यक्तिगत जोखिम मूल्यांकन' : 'Personal Risk Score Wizard', icon: CheckSquare },
    { id: 'emergency', label: lang === 'hi' ? 'गोल्डन आवर एवं डायरेक्टरी' : 'Emergency Golden Hour', icon: Clock },
    { id: 'quiz', label: lang === 'hi' ? 'ऑनलाइन सुरक्षा प्रश्नोत्तरी' : 'Online Safety Quiz', icon: HelpCircle },
    { id: 'stories', label: lang === 'hi' ? 'समुदाय अनुभव कहानियाँ' : 'Community Stories', icon: MessageSquareQuote, badge: storyCount },
  ];

  return (
    <aside className={`sidebar-container ${collapsed ? 'collapsed' : ''}`}>
      <div>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <div className="bg-success text-white p-2 rounded-3 d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
            <ShieldAlert size={26} />
          </div>
          {!collapsed && (
            <div>
              <h5 className="fw-bold mb-0 text-white" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '0.8px' }}>
                DHAN YODHA
              </h5>
              <span className="badge bg-outline-success text-success p-0" style={{ fontSize: '0.72rem' }}>
                {lang === 'hi' ? 'धन योद्धा • साइबर सुरक्षा' : 'धन योद्धा • Banking Warrior'}
              </span>
            </div>
          )}
        </div>

        {/* Toggle Collapse Button */}
        <div className="px-3 py-2 text-end">
          <button 
            className="btn btn-sm btn-outline-secondary border-0 text-white-50 p-1"
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <li key={item.id}>
                <button
                  className={`nav-item-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActivePage(item.id)}
                  title={item.label}
                >
                  <Icon size={20} className={isActive ? 'text-white' : ''} />
                  {!collapsed && <span className="small">{item.label}</span>}
                  {!collapsed && item.badge !== undefined && (
                    <span className={`badge-counter ${item.badge === 'EASY' ? 'bg-warning text-dark' : item.badge === 'HOT' ? 'bg-danger text-white' : ''}`}>{item.badge}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Sidebar Footer */}
      {!collapsed && (
        <div className="m-3 p-3 rounded-4 bg-dark border border-secondary border-opacity-25 d-flex flex-column gap-2">
          <button 
            className="btn btn-outline-light btn-sm w-100 fw-bold d-flex align-items-center justify-content-center gap-1"
            onClick={onOpenPrintModal}
          >
            <Printer size={14} />
            <span>Print Cheat Sheet</span>
          </button>

          <div>
            <div className="d-flex align-items-center gap-2 mb-1 text-warning">
              <PhoneCall size={16} />
              <span className="fw-bold small">Cyber Crime Helpline</span>
            </div>
            <a href="tel:1930" className="btn btn-warning btn-sm w-100 fw-bold rounded-3">
              Dial 1930
            </a>
          </div>
        </div>
      )}
    </aside>
  );
}
