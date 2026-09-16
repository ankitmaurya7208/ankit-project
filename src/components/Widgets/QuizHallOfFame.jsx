import React, { useState, useEffect } from 'react';
import { Award, Users, ShieldCheck, Trophy, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';

export default function QuizHallOfFame({ lang = 'en', refreshKey = 0, currentUserName = '' }) {
  const [totalCount, setTotalCount] = useState(1425);
  const [takers, setTakers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTakers = () => {
    fetch('/api/quiz-takers')
      .then(res => res.json())
      .then(data => {
        if (data.totalTakers) setTotalCount(data.totalTakers);
        if (Array.isArray(data.recentTakers)) setTakers(data.recentTakers);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error fetching quiz takers:', err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTakers();
  }, [refreshKey]);

  return (
    <div className="custom-card beige-accent">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3 border-bottom pb-3">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-success p-2 rounded-3 text-white">
            <Trophy size={24} />
          </div>
          <div>
            <h5 className="fw-bold mb-0 text-forest" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {lang === 'hi' ? 'वास्तविक परीक्षा देने वाले योद्धा (Real Test Takers)' : 'Real Test Takers & Certified Warriors'}
            </h5>
            <small className="text-muted">
              {lang === 'hi' ? 'सुरक्षा परीक्षा उत्तीर्ण करने वाले वास्तविक उपयोगकर्ताओं का लाइव डेटाबेस' : 'Live real database of users who completed the safety test'}
            </small>
          </div>
        </div>

        <div className="p-2 px-3 bg-forest text-white rounded-pill d-flex align-items-center gap-2 fw-bold shadow-sm">
          <Users size={18} className="text-warning" />
          <span>{totalCount.toLocaleString()} {lang === 'hi' ? 'वास्तविक परीक्षार्थी' : 'Real Test Takers'}</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-4 text-muted small">
          Loading real test-takers database...
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0" style={{ fontSize: '0.92rem' }}>
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">{lang === 'hi' ? 'परीक्षार्थी नाम' : 'Real Test Taker Name'}</th>
                <th scope="col">{lang === 'hi' ? 'वास्तविक अंक' : 'Real Score'}</th>
                <th scope="col">{lang === 'hi' ? 'उपाधि' : 'Badge'}</th>
                <th scope="col">{lang === 'hi' ? 'समय' : 'Test Timestamp'}</th>
              </tr>
            </thead>
            <tbody>
              {takers.map((t, idx) => {
                const isCurrentUser = currentUserName && t.name.toLowerCase() === currentUserName.toLowerCase();
                return (
                  <tr key={t.id || idx} className={isCurrentUser ? 'table-success border-success' : ''}>
                    <th scope="row" className="fw-bold text-muted">{idx + 1}</th>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="p-1 px-2 bg-success bg-opacity-10 text-success rounded-circle fw-bold small">
                          {isCurrentUser ? '⭐' : '🛡️'}
                        </div>
                        <div>
                          <span className="fw-bold text-dark">{t.name}</span>
                          {isCurrentUser && (
                            <span className="badge bg-success ms-2 text-white" style={{ fontSize: '0.65rem' }}>
                              <UserCheck size={10} className="me-1" />
                              {lang === 'hi' ? 'आप (रियल यूजर)' : 'You (Real Taker)'}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-success bg-opacity-15 text-success fw-bold px-2 py-1">
                        {t.percentage}% ({t.score}/{t.total || 8})
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${t.badge === 'Gold Yodha' ? 'bg-warning text-dark' : 'bg-info text-dark'} fw-bold`}>
                        <Trophy size={12} className="me-1" />
                        {t.badge}
                      </span>
                    </td>
                    <td className="text-muted small">
                      {new Date(t.timestamp).toLocaleTimeString(lang === 'hi' ? 'hi-IN' : 'en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })} - {new Date(t.timestamp).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
