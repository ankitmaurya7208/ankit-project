const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// SQLite Database Setup
const dbDir = process.env.VERCEL ? '/tmp' : path.join(__dirname, 'database');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'dhan_yodha.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Failed to connect to SQLite Database:', err.message);
  } else {
    console.log(`🗄️ Real SQL Database connected at ${dbPath}`);
  }
});

// Initialize Database Tables and Auto-Migrate Seed Data
db.serialize(() => {
  // 1. Stories Table
  db.run(`
    CREATE TABLE IF NOT EXISTS stories (
      id TEXT PRIMARY KEY,
      authorName TEXT NOT NULL,
      location TEXT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      scamType TEXT,
      lossAmount TEXT,
      upvotes INTEGER DEFAULT 0,
      timestamp TEXT NOT NULL
    )
  `);

  // 2. Quiz Takers Table
  db.run(`
    CREATE TABLE IF NOT EXISTS quiz_takers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      score INTEGER NOT NULL,
      total INTEGER NOT NULL,
      percentage REAL NOT NULL,
      badge TEXT NOT NULL,
      timestamp TEXT NOT NULL
    )
  `);

  // 3. Feedback Table
  db.run(`
    CREATE TABLE IF NOT EXISTS feedback (
      id TEXT PRIMARY KEY,
      userName TEXT NOT NULL,
      rating INTEGER NOT NULL,
      category TEXT NOT NULL,
      comments TEXT NOT NULL,
      timestamp TEXT NOT NULL
    )
  `);

  // Migrate Seed Data if tables are empty
  db.get('SELECT COUNT(*) as count FROM stories', (err, row) => {
    if (!err && (!row || row.count === 0)) {
      const seedStoriesPath = path.join(__dirname, 'data', 'stories.json');
      if (fs.existsSync(seedStoriesPath)) {
        try {
          const stories = JSON.parse(fs.readFileSync(seedStoriesPath, 'utf8'));
          const stmt = db.prepare(`
            INSERT OR IGNORE INTO stories (id, authorName, location, title, content, scamType, lossAmount, upvotes, timestamp)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          `);
          stories.forEach(s => {
            const name = s.authorName || s.author || 'Anonymous Warrior';
            const title = s.title || 'Fraud Incident Report';
            const content = s.content || 'Details shared by community member.';
            const ts = s.timestamp || new Date().toISOString();
            stmt.run(s.id || `story-${Math.random()}`, name, s.location || 'India', title, content, s.scamType || 'General Fraud', s.lossAmount || '₹0', s.upvotes || 0, ts);
          });
          stmt.finalize();
          console.log('✅ Migrated seed stories into SQLite database.');
        } catch (e) {
          console.error('Seed migration notice (stories):', e.message);
        }
      }
    }
  });

  db.get('SELECT COUNT(*) as count FROM quiz_takers', (err, row) => {
    if (!err && (!row || row.count === 0)) {
      const seedTakersPath = path.join(__dirname, 'data', 'quiz_takers.json');
      if (fs.existsSync(seedTakersPath)) {
        try {
          const takers = JSON.parse(fs.readFileSync(seedTakersPath, 'utf8'));
          const stmt = db.prepare(`
            INSERT OR IGNORE INTO quiz_takers (id, name, score, total, percentage, badge, timestamp)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `);
          takers.forEach(t => {
            const name = t.name || 'Certified Warrior';
            const score = t.score !== undefined ? t.score : 8;
            const ts = t.timestamp || new Date().toISOString();
            stmt.run(t.id || `qt-${Math.random()}`, name, score, t.total || 8, t.percentage || 100, t.badge || 'Certified Warrior', ts);
          });
          stmt.finalize();
          console.log('✅ Migrated seed quiz takers into SQLite database.');
        } catch (e) {
          console.error('Seed migration notice (quiz takers):', e.message);
        }
      }
    }
  });
});

// --- REAL DATABASE REST API ENDPOINTS ---

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', database: 'SQLite3 SQL Engine', time: new Date().toISOString() });
});

// GET all community stories from SQL Database
app.get('/api/stories', (req, res) => {
  db.all('SELECT * FROM stories ORDER BY timestamp DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error.' });
    }
    res.json(rows || []);
  });
});

// POST a new community story to SQL Database
app.post('/api/stories', (req, res) => {
  const { authorName, location, title, content, scamType, lossAmount } = req.body;
  if (!authorName || !title || !content) {
    return res.status(400).json({ error: 'Author name, title, and content are required.' });
  }

  const newStory = {
    id: `story-${Date.now()}`,
    authorName: authorName.trim(),
    location: location ? location.trim() : 'India',
    title: title.trim(),
    content: content.trim(),
    scamType: scamType || 'General Fraud',
    lossAmount: lossAmount || '₹0',
    upvotes: 0,
    timestamp: new Date().toISOString()
  };

  const stmt = db.prepare(`
    INSERT INTO stories (id, authorName, location, title, content, scamType, lossAmount, upvotes, timestamp)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    newStory.id,
    newStory.authorName,
    newStory.location,
    newStory.title,
    newStory.content,
    newStory.scamType,
    newStory.lossAmount,
    newStory.upvotes,
    newStory.timestamp,
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to insert story into database.' });
      }
      res.status(201).json(newStory);
    }
  );
});

// POST upvote a story in SQL Database
app.post('/api/stories/:id/upvote', (req, res) => {
  const { id } = req.params;
  
  db.run('UPDATE stories SET upvotes = upvotes + 1 WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to update upvote count.' });
    }
    
    db.get('SELECT * FROM stories WHERE id = ?', [id], (err, row) => {
      if (err || !row) {
        return res.status(404).json({ error: 'Story not found.' });
      }
      res.json(row);
    });
  });
});

// GET all quiz test takers from SQL Database
app.get('/api/quiz-takers', (req, res) => {
  db.all('SELECT * FROM quiz_takers ORDER BY timestamp DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error.' });
    }
    res.json({
      totalTakers: (rows ? rows.length : 0) + 1420,
      recentTakers: rows || []
    });
  });
});

// POST record a new quiz test taker result to SQL Database
app.post('/api/quiz-takers', (req, res) => {
  const { name, score, total, percentage, badge } = req.body;
  if (!name || score === undefined) {
    return res.status(400).json({ error: 'Name and score are required.' });
  }

  const newTaker = {
    id: `qt-${Date.now()}`,
    name: name.trim(),
    score: score,
    total: total || 8,
    percentage: percentage || Math.round((score / (total || 8)) * 100),
    badge: badge || (score === (total || 8) ? 'Gold Yodha' : 'Certified Warrior'),
    timestamp: new Date().toISOString()
  };

  // Check if user exists or insert
  db.get('SELECT * FROM quiz_takers WHERE LOWER(name) = LOWER(?)', [newTaker.name], (err, row) => {
    if (row) {
      // Update existing taker record
      db.run(
        'UPDATE quiz_takers SET score = ?, total = ?, percentage = ?, badge = ?, timestamp = ? WHERE id = ?',
        [newTaker.score, newTaker.total, newTaker.percentage, newTaker.badge, newTaker.timestamp, row.id],
        (err) => {
          if (err) return res.status(500).json({ error: 'Failed to update database record.' });
          
          db.all('SELECT * FROM quiz_takers', [], (err, rows) => {
            res.status(200).json({
              message: 'Quiz result updated in real database',
              totalTakers: (rows ? rows.length : 0) + 1420,
              taker: newTaker
            });
          });
        }
      );
    } else {
      // Insert new taker record
      const stmt = db.prepare(`
        INSERT INTO quiz_takers (id, name, score, total, percentage, badge, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);

      stmt.run(
        newTaker.id,
        newTaker.name,
        newTaker.score,
        newTaker.total,
        newTaker.percentage,
        newTaker.badge,
        newTaker.timestamp,
        function (err) {
          if (err) return res.status(500).json({ error: 'Failed to insert into database.' });
          
          db.all('SELECT * FROM quiz_takers', [], (err, rows) => {
            res.status(201).json({
              message: 'Quiz result saved in real database',
              totalTakers: (rows ? rows.length : 0) + 1420,
              taker: newTaker
            });
          });
        }
      );
    }
  });
});

// GET all website feedback from SQL Database
app.get('/api/feedback', (req, res) => {
  db.all('SELECT * FROM feedback ORDER BY timestamp DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error.' });
    }
    res.json(rows || []);
  });
});

// POST new website feedback to SQL Database
app.post('/api/feedback', (req, res) => {
  const { userName, rating, category, comments } = req.body;
  if (!userName || !comments) {
    return res.status(400).json({ error: 'User name and comments are required.' });
  }

  const newFeedback = {
    id: `fb-${Date.now()}`,
    userName: userName.trim(),
    rating: rating || 5,
    category: category || 'General Feedback',
    comments: comments.trim(),
    timestamp: new Date().toISOString()
  };

  const stmt = db.prepare(`
    INSERT INTO feedback (id, userName, rating, category, comments, timestamp)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    newFeedback.id,
    newFeedback.userName,
    newFeedback.rating,
    newFeedback.category,
    newFeedback.comments,
    newFeedback.timestamp,
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to insert feedback into database.' });
      }
      res.status(201).json(newFeedback);
    }
  );
});

// Serve static assets in production if dist exists
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
      return res.sendFile(path.join(distPath, 'index.html'));
    }
    next();
  });
}

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🔒 Dhan Yodha Safe Banking API (Real SQLite DB) running on http://localhost:${PORT}`);
  });
}

module.exports = app;
