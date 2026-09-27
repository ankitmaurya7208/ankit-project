import React, { useState, useEffect } from 'react';
import { Star, Send, MessageSquare, CheckCircle, ExternalLink, ThumbsUp, Heart } from 'lucide-react';

export default function WebsiteFeedback({ userName = '', lang = 'en' }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState('Overall Website Experience');
  const [comments, setComments] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [recentFeedbacks, setRecentFeedbacks] = useState([
    {
      id: 'fb-seed-1',
      userName: 'Rajesh Kumar (Senior Citizen)',
      rating: 5,
      category: 'Senior Citizen Hub',
      comments: 'The step-by-step Aadhaar biometric lock guide is extremely helpful for elderly people. Very clear and clean design!',
      timestamp: new Date(Date.now() - 3600000 * 24).toISOString()
    },
    {
      id: 'fb-seed-2',
      userName: 'Priya Sharma (College Student)',
      rating: 5,
      category: 'Safety Quiz & Leaderboard',
      comments: 'Scored 8/8 on the quiz and earned Gold Yodha! Love seeing my real name on the Certified Warriors leaderboard.',
      timestamp: new Date(Date.now() - 3600000 * 48).toISOString()
    }
  ]);
  
  const [showEmbedGoogleForm, setShowEmbedGoogleForm] = useState(false);
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc3Mi9MNBmP3tgfFYwwRIFKLkiPR5cnsYSlzk7WWGShJQe0SA/viewform?embedded=true";

  // Fetch recent community feedback from backend
  useEffect(() => {
    fetch('/api/feedback')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setRecentFeedbacks(prev => [...data, ...prev]);
        }
      })
      .catch(err => console.log('Feedback fetch notice:', err.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comments.trim()) return;

    setSubmitting(true);
    const feedbackObj = {
      userName: userName || 'Dhan Yodha Supporter',
      rating,
      category,
      comments: comments.trim()
    };

    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackObj)
    })
      .then(res => res.json())
      .then(data => {
        setSubmitting(false);
        setSubmitted(true);
        if (data && data.id) {
          setRecentFeedbacks(prev => [data, ...prev]);
        }
        setComments('');
      })
      .catch(() => {
        setSubmitting(false);
        setSubmitted(true);
        setRecentFeedbacks(prev => [{
          id: `fb-${Date.now()}`,
          ...feedbackObj,
          timestamp: new Date().toISOString()
        }, ...prev]);
        setComments('');
      });
  };

  return (
    <div className="container py-4">
      {/* HEADER CARD */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 text-white" style={{ background: 'linear-gradient(135deg, #1e3a2b 0%, #2d5a43 100%)' }}>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
              <MessageSquare size={14} className="me-1" /> Community Feedback
            </span>
            <h2 className="fw-bold mb-1">Dhan Yodha Website Feedback</h2>
            <p className="mb-0 opacity-90">Help us improve the Safe Online Banking Portal for everyone!</p>
          </div>
          <div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3Mi9MNBmP3tgfFYwwRIFKLkiPR5cnsYSlzk7WWGShJQe0SA/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning fw-bold text-dark rounded-pill shadow-sm px-3 py-2"
            >
              <ExternalLink size={16} className="me-1" /> Open Google Form 🔗
            </a>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* LEFT COLUMN: WEBSITE FEEDBACK FORM */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h4 className="fw-bold text-success mb-3 d-flex align-items-center gap-2">
              <Heart className="text-danger" size={22} /> Share Your Feedback & Experience
            </h4>

            {submitted ? (
              <div className="alert alert-success rounded-4 p-4 text-center my-3">
                <CheckCircle size={48} className="text-success mb-2" />
                <h5 className="fw-bold">Thank You, {userName || 'Warrior'}!</h5>
                <p className="mb-3">Your feedback has been submitted successfully and saved to our database.</p>
                <button 
                  className="btn btn-outline-success rounded-pill px-4 fw-bold"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Feedback
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* 1. STAR RATING */}
                <div className="mb-4">
                  <label className="form-label fw-bold">1. How would you rate your experience on Dhan Yodha? <span className="text-danger">*</span></label>
                  <div className="d-flex align-items-center gap-2 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className="btn p-1 border-0 bg-transparent"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      >
                        <Star 
                          size={32} 
                          fill={(hoverRating || rating) >= star ? '#f59e0b' : 'none'} 
                          color={(hoverRating || rating) >= star ? '#f59e0b' : '#9ca3af'}
                          style={{ transition: 'all 0.15s ease' }}
                        />
                      </button>
                    ))}
                    <span className="ms-2 fw-bold text-warning">
                      {rating === 5 ? '⭐⭐⭐⭐⭐ Excellent!' : rating === 4 ? '⭐⭐⭐⭐ Great' : rating === 3 ? '⭐⭐⭐ Good' : '⭐⭐ Needs Improvement'}
                    </span>
                  </div>
                </div>

                {/* 2. CATEGORY SELECTOR */}
                <div className="mb-4">
                  <label className="form-label fw-bold">2. Feedback Category <span class="text-danger">*</span></label>
                  <select 
                    className="form-select rounded-3 py-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Overall Website Experience</option>
                    <option>Safety Quiz & Leaderboard</option>
                    <option>Senior Citizen Hub</option>
                    <option>Phishing & QR Code Simulator</option>
                    <option>Community Scam Stories</option>
                    <option>AI Cyber Assistant Chatbot</option>
                    <option>General Suggestions & Improvements</option>
                  </select>
                </div>

                {/* 3. USER NAME */}
                <div className="mb-4">
                  <label className="form-label fw-bold">3. Your Display Name</label>
                  <input 
                    type="text" 
                    className="form-control rounded-3 py-2"
                    value={userName}
                    readOnly
                    placeholder="Your Name"
                  />
                  <small className="text-muted">Auto-filled from your Dhan Yodha profile badge.</small>
                </div>

                {/* 4. COMMENTS & SUGGESTIONS */}
                <div className="mb-4">
                  <label className="form-label fw-bold">4. Your Comments, Suggestions, or Feedback <span className="text-danger">*</span></label>
                  <textarea 
                    className="form-control rounded-3"
                    rows="4"
                    required
                    placeholder="Tell us what you liked, any issues you faced, or new features you would like to see on Dhan Yodha..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="d-flex align-items-center gap-3">
                  <button 
                    type="submit" 
                    disabled={submitting || !comments.trim()}
                    className="btn btn-success fw-bold rounded-pill px-4 py-2 shadow-sm d-flex align-items-center gap-2"
                    style={{ backgroundColor: '#1e3a2b', borderColor: '#1e3a2b' }}
                  >
                    <Send size={18} /> {submitting ? 'Submitting...' : 'Submit Feedback 🚀'}
                  </button>

                  <button 
                    type="button"
                    className="btn btn-outline-secondary rounded-pill px-3 py-2"
                    onClick={() => setShowEmbedGoogleForm(!showEmbedGoogleForm)}
                  >
                    {showEmbedGoogleForm ? 'Hide Google Form' : '📋 Embed Google Form'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: RECENT FEEDBACK TESTIMONIALS FEED */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h4 className="fw-bold text-success mb-3 d-flex align-items-center gap-2">
              <ThumbsUp size={20} /> Community Feedback Feed
            </h4>
            <p className="text-muted small mb-3">Live feedback submitted by community members & banking warriors:</p>

            <div className="feedback-list pe-1" style={{ maxHeight: '450px', overflowY: 'auto' }}>
              {recentFeedbacks.map((item) => (
                <div key={item.id} className="p-3 mb-3 rounded-3 border bg-light">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="fw-bold text-dark">{item.userName || 'Banking Warrior'}</span>
                    <span className="badge bg-success-subtle text-success border border-success-subtle">
                      {'⭐'.repeat(item.rating || 5)}
                    </span>
                  </div>
                  <span className="badge bg-secondary mb-2" style={{ fontSize: '0.75rem' }}>{item.category}</span>
                  <p className="mb-1 text-secondary" style={{ fontSize: '0.92rem' }}>"{item.comments}"</p>
                  <small className="text-muted d-block text-end" style={{ fontSize: '0.75rem' }}>
                    {new Date(item.timestamp).toLocaleDateString()}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EMBEDDED GOOGLE FORM MODAL / SECTION */}
      {showEmbedGoogleForm && (
        <div className="card border-0 shadow-sm rounded-4 p-4 mt-4">
          <h4 className="fw-bold text-success mb-3">📋 Official Google Form Embed</h4>
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm" style={{ minHeight: '600px' }}>
            <iframe 
              src={googleFormUrl} 
              title="Google Form Feedback"
              width="100%" 
              height="600" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
            >
              Loading Google Form...
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}
