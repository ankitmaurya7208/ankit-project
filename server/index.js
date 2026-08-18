const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'stories.json');

app.use(cors());
app.use(express.json());

// Helper to read stories
function readStories() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Error reading stories:', err);
    return [];
  }
}

// Helper to write stories
function writeStories(stories) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(stories, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing stories:', err);
  }
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Safe Banking Awareness Portal API' });
});

// GET /api/stories (with optional category & query filter)
app.get('/api/stories', (req, res) => {
  const { category, search } = req.query;
  let stories = readStories();

  if (category && category !== 'All') {
    stories = stories.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const term = search.toLowerCase();
    stories = stories.filter(s => 
      s.title.toLowerCase().includes(term) ||
      s.description.toLowerCase().includes(term) ||
      s.lesson.toLowerCase().includes(term) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(term)))
    );
  }

  // Sort by date descending
  stories.sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(stories);
});

// POST /api/stories
app.post('/api/stories', (req, res) => {
  const { title, author, category, description, lossAmount, lesson, tags } = req.body;

  if (!title || !description || !lesson) {
    return res.status(400).json({ error: 'Title, description, and lesson learned are required fields.' });
  }

  const stories = readStories();
  const newStory = {
    id: `story-${Date.now()}`,
    title: title.trim(),
    author: (author && author.trim()) ? author.trim() : 'Anonymous Vigilant Citizen',
    category: category || 'General Scam',
    date: new Date().toISOString().split('T')[0],
    description: description.trim(),
    lossAmount: lossAmount ? lossAmount.trim() : 'N/A',
    lesson: lesson.trim(),
    upvotes: 1,
    tags: Array.isArray(tags) ? tags : ['Community Warning']
  };

  stories.unshift(newStory);
  writeStories(stories);

  res.status(201).json({ success: true, story: newStory });
});

// POST /api/stories/:id/upvote
app.post('/api/stories/:id/upvote', (req, res) => {
  const { id } = req.params;
  const stories = readStories();
  const index = stories.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Story not found.' });
  }

  stories[index].upvotes = (stories[index].upvotes || 0) + 1;
  writeStories(stories);

  res.json({ success: true, story: stories[index] });
});

// GET /api/stats
app.get('/api/stats', (req, res) => {
  const stories = readStories();
  const totalStories = stories.length;
  const totalUpvotes = stories.reduce((acc, s) => acc + (s.upvotes || 0), 0);

  const categories = {};
  stories.forEach(s => {
    categories[s.category] = (categories[s.category] || 0) + 1;
  });

  res.json({
    totalStories,
    totalUpvotes,
    categoryBreakdown: categories,
    emergencyHelpline: '1930',
    cyberPortal: 'https://cybercrime.gov.in'
  });
});

app.listen(PORT, () => {
  console.log(`🔒 Safe Banking Awareness API running on http://localhost:${PORT}`);
});
