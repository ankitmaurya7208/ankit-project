import React, { useState, useEffect } from 'react';
import { MessageSquareQuote, Plus, Search, ThumbsUp, ShieldAlert, Tag, Filter, User, AlertCircle } from 'lucide-react';

export default function CommunityStories({ setStoryCount, lang = 'en' }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'UPI Fraud',
    description: '',
    lossAmount: '',
    lesson: '',
    anonymous: true
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const categories = ['All', 'UPI Fraud', 'ATM Skimming', 'Remote App Fraud', 'Phishing & SMS', 'Vishing & Helpline Scam'];

  const fetchStories = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (category !== 'All') params.append('category', category);
      if (search.trim()) params.append('search', search.trim());

      const res = await fetch(`/api/stories?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setStories(data);
        if (setStoryCount) setStoryCount(data.length);
      }
    } catch (err) {
      console.error('Error fetching stories:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, [category, search]);

  const handleUpvote = async (id) => {
    try {
      const res = await fetch(`/api/stories/${id}/upvote`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setStories(prev => prev.map(s => s.id === id ? data.story : s));
      }
    } catch (err) {
      console.error('Error upvoting story:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.lesson) return;

    setSubmitting(true);
    setSubmitStatus(null);
    try {
      const payload = {
        title: formData.title,
        author: formData.anonymous ? (lang === 'hi' ? 'गुमनाम नागरिक' : 'Anonymous Citizen') : (formData.author || 'Vigilant Citizen'),
        category: formData.category,
        description: formData.description,
        lossAmount: formData.lossAmount || 'N/A',
        lesson: formData.lesson,
        tags: [formData.category, 'Community Awareness']
      };

      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitStatus({ type: 'success', msg: lang === 'hi' ? 'आपकी कहानी सफलतापूर्वक प्रकाशित हो गई है!' : 'Your story has been published successfully!' });
        setFormData({
          title: '',
          author: '',
          category: 'UPI Fraud',
          description: '',
          lossAmount: '',
          lesson: '',
          anonymous: true
        });
        setTimeout(() => {
          setShowModal(false);
          setSubmitStatus(null);
          fetchStories();
        }, 1200);
      } else {
        setSubmitStatus({ type: 'error', msg: lang === 'hi' ? 'सबमिट करने में त्रुटि। कृपया पुनः प्रयास करें।' : 'Failed to submit story. Please try again.' });
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', msg: 'Server error. Is the backend API server running?' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="d-flex flex-column gap-4 fade-in-up">
      {/* Header Banner */}
      <div className="p-4 bg-white rounded-4 border shadow-sm">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div className="bg-forest p-3 rounded-4 text-white">
              <MessageSquareQuote size={32} />
            </div>
            <div>
              <h3 className="fw-bold mb-1">
                {lang === 'hi' ? 'समुदाय बैंकिंग धोखाधड़ी जागरूकता कहानियां' : 'Community Fraud Awareness Stories'}
              </h3>
              <p className="text-muted mb-0">
                {lang === 'hi'
                  ? 'दूसरों को जाल में फंसने से बचाने के लिए नागरिकों द्वारा साझा किए गए वास्तविक बैंकिंग फ्रॉड अनुभव।'
                  : 'Real banking fraud experiences shared by citizens to prevent others from falling into similar traps.'}
              </p>
            </div>
          </div>

          <button 
            className="btn btn-forest btn-lg rounded-3 d-flex align-items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <Plus size={20} />
            <span>{lang === 'hi' ? 'अपना अनुभव साझा करें' : 'Share Your Experience'}</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="p-3 bg-white rounded-4 border shadow-sm d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div className="d-flex flex-wrap gap-1">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm ${category === cat ? 'btn-forest fw-bold' : 'btn-light border'}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="input-group input-group-sm" style={{ maxWidth: '280px' }}>
          <span className="input-group-text bg-light border-end-0"><Search size={16} /></span>
          <input 
            type="text" 
            placeholder={lang === 'hi' ? 'कहानियां खोजें...' : 'Search stories...'}
            className="form-control bg-light border-start-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Stories Feed */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-success" role="status"></div>
          <p className="small text-muted mt-2">{lang === 'hi' ? 'अनुभव लोड हो रहे हैं...' : 'Loading shared experiences...'}</p>
        </div>
      ) : stories.length === 0 ? (
        <div className="custom-card beige-accent text-center py-5">
          <ShieldAlert size={48} className="text-muted mb-2" />
          <h5 className="fw-bold text-dark">{lang === 'hi' ? 'कोई कहानी नहीं मिली' : 'No Stories Found'}</h5>
          <p className="small text-muted mb-3">{lang === 'hi' ? 'इस श्रेणी के लिए कहानी साझा करने वाले पहले व्यक्ति बनें।' : 'Be the first to share an awareness story for this category.'}</p>
          <button className="btn btn-forest btn-sm" onClick={() => setShowModal(true)}>
            {lang === 'hi' ? 'अपना अनुभव साझा करें' : 'Share Your Experience'}
          </button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {stories.map(story => (
            <div key={story.id} className="custom-card beige-accent">
              <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                <div>
                  <span className="badge bg-forest mb-2 me-2">{story.category}</span>
                  {story.lossAmount && story.lossAmount !== 'N/A' && (
                    <span className="badge bg-danger mb-2">{lang === 'hi' ? 'नुकसान:' : 'Loss reported:'} {story.lossAmount}</span>
                  )}
                  <h5 className="fw-bold text-dark mb-1">{story.title}</h5>
                  <div className="small text-muted d-flex align-items-center gap-2">
                    <User size={14} />
                    <span>{lang === 'hi' ? 'द्वारा साझा:' : 'Shared by'} {story.author}</span>
                    <span>•</span>
                    <span>{story.date}</span>
                  </div>
                </div>

                <button 
                  className="btn btn-sm btn-outline-forest rounded-pill d-flex align-items-center gap-1"
                  onClick={() => handleUpvote(story.id)}
                >
                  <ThumbsUp size={14} />
                  <span>{lang === 'hi' ? 'मददगार (' : 'Helpful ('}{story.upvotes || 0})</span>
                </button>
              </div>

              <p className="text-dark small mb-3 whitespace-pre-line" style={{ whiteSpace: 'pre-line' }}>
                {story.description}
              </p>

              <div className="p-3 bg-white rounded-3 border border-success border-opacity-50 small">
                <strong className="text-success">{lang === 'hi' ? 'सीख एवं सलाह:' : 'Lesson Learned & Advice to Others:'}</strong>
                <p className="mb-0 text-dark mt-1">{story.lesson}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Share Story Form Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 rounded-4 shadow-lg">
              <div className="modal-header bg-forest text-white rounded-top-4">
                <h5 className="modal-title fw-bold">
                  {lang === 'hi' ? 'अपना ऑनलाइन बैंकिंग फ्रॉड अनुभव साझा करें' : 'Share Your Online Banking Fraud Experience'}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="modal-body p-4">
                  {submitStatus && (
                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} small mb-3`}>
                      {submitStatus.msg}
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label fw-bold small text-dark">
                      {lang === 'hi' ? 'घटना का शीर्षक / सारांश *' : 'Story Title / Incident Summary *'}
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Received fake QR code payment link on OLX" 
                      className="form-control"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-dark">{lang === 'hi' ? 'श्रेणी *' : 'Category *'}</label>
                      <select 
                        className="form-select"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="UPI Fraud">UPI Fraud</option>
                        <option value="ATM Skimming">ATM Skimming</option>
                        <option value="Remote App Fraud">Remote App Fraud (AnyDesk)</option>
                        <option value="Phishing & SMS">Phishing & SMS Scam</option>
                        <option value="Vishing & Helpline Scam">Vishing & Helpline Scam</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold small text-dark">
                        {lang === 'hi' ? 'वित्तीय नुकसान (वैकल्पिक)' : 'Approximate Financial Loss (Optional)'}
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. ₹15,000 or Saved in time" 
                        className="form-control"
                        value={formData.lossAmount}
                        onChange={(e) => setFormData({ ...formData, lossAmount: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold small text-dark">
                      {lang === 'hi' ? 'घटना का विस्तृत विवरण *' : 'Detailed Description of What Happened *'}
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Explain how the scammer contacted you..." 
                      className="form-control"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold small text-dark">
                      {lang === 'hi' ? 'सीख / दूसरों को सलाह *' : 'Key Lesson Learned / Advice to Others *'}
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Never enter your UPI PIN to receive money!" 
                      className="form-control"
                      value={formData.lesson}
                      onChange={(e) => setFormData({ ...formData, lesson: e.target.value })}
                    />
                  </div>

                  <div className="form-check mb-3">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="anonCheck"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                    />
                    <label className="form-check-label small text-muted" htmlFor="anonCheck">
                      {lang === 'hi' ? 'गुमनाम रूप से पोस्ट करें (नाम छिपाएं)' : 'Post story anonymously (Hides your real name)'}
                    </label>
                  </div>
                </div>

                <div className="modal-footer bg-light rounded-bottom-4">
                  <button type="button" className="btn btn-outline-secondary" onClick={() => setShowModal(false)}>
                    {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                  </button>
                  <button type="submit" className="btn btn-forest fw-bold" disabled={submitting}>
                    {submitting ? (lang === 'hi' ? 'प्रकाशित हो रहा है...' : 'Publishing...') : (lang === 'hi' ? 'कहानी प्रकाशित करें' : 'Publish Awareness Story')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
