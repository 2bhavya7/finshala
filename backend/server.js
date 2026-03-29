// ═══════════════════════════════════════════════
// FINSHALA BACKEND SERVER
// ═══════════════════════════════════════════════

const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes (Future separate backend logic)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Finshala API is running' });
});

app.post('/api/llm/proxy', async (req, res) => {
  // Hackathon Proxy: Secure way to call HuggingFace without exposing key
  try {
    const { model, messages, prompt } = req.body;
    
    if (!process.env.HF_API_KEY) {
      return res.status(500).json({ error: 'Missing HuggingFace API Key' });
    }

    const payload = messages ? { messages } : { inputs: prompt };
    
    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HF API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Backend LLM Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Serve frontend build in production
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(buildPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Finshala Backend running on port ${PORT}`);
  console.log(`👉 Health check: http://localhost:${PORT}/api/health`);
});
