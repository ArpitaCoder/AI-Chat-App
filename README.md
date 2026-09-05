<h1 align="center">AI-Chat-App 🤖</h1>

<p align="center">
  A simple AI chat application built using React, Node.js, Express and Google Gemini.
</p>

<br>

<h2> About</h2>

<p>
This is my first AI-integrated web project. I built this project to understand how an AI API can be connected to a web application using a React frontend and an Express backend.
</p>

<p>
The user can send a message, get a response from Gemini, and continue the conversation using the previous chat history.
</p>

<h2> Features</h2>

<ul>
  <li>Chat with an AI</li>
  <li>Conversation history</li>
  <li>Loading state while AI is responding</li>
  <li>Error handling</li>
  <li>Press Enter to send a message</li>
  <li>Clear chat option</li>
  <li>API key kept in environment variables</li>
</ul>

<h2> Technologies Used</h2>

<ul>
  <li><b>Frontend:</b> React.js, Vite, JavaScript, CSS</li>
  <li><b>Backend:</b> Node.js, Express.js</li>
  <li><b>AI:</b> Google Gemini API</li>
  <li><b>Tools:</b> Git, GitHub, VS Code</li>
</ul>

<h2> Project Structure</h2>

<pre>
AI-Chat-App
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   └── App.css
│   └── ...
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
</pre>

<h2> How It Works</h2>

<pre>
User
  ↓
React Frontend
  ↓
Express Backend
  ↓
Gemini API
  ↓
AI Response
  ↓
React Frontend
</pre>

<p>
The frontend sends the user's message and previous messages to the backend. The Express server then sends the conversation to the Gemini API and returns the AI response to the frontend.
</p>

<h2> How to Run</h2>

<h3>1. Clone the repository</h3>

<pre>
git clone https://github.com/ArpitaCoder/AI-Chat-App.git
cd AI-Chat-App
</pre>

<h3>2. Start the backend</h3>

<pre>
cd backend
npm install
</pre>

<p>Create a <code>.env</code> file inside the backend folder:</p>

<pre>
PORT=5000
GEMINI_API_KEY=your_api_key_here
</pre>

<p>Then run:</p>

<pre>
node server.js
</pre>

<h3>3. Start the frontend</h3>

<pre>
cd frontend
npm install
npm run dev
</pre>

<p>Open the local URL provided by Vite.</p>

<h2> Environment Variables</h2>

<p>
The Gemini API key is stored in the backend <code>.env</code> file. The key should not be added to the frontend or pushed to GitHub.
</p>

<h2> What I Learned</h2>

<ul>
  <li>How React communicates with an Express backend</li>
  <li>How to create and use a REST API</li>
  <li>Sending data using <code>fetch()</code></li>
  <li>Using async/await with API requests</li>
  <li>Working with JSON data</li>
  <li>Managing chat messages using React state</li>
  <li>Connecting a web application with the Gemini API</li>
  <li>Using environment variables to protect API keys</li>
</ul>

<h2> Future Improvements</h2>

<ul>
  <li>Better chat UI</li>
  <li>Save previous conversations</li>
  <li>User authentication</li>
  <li>Markdown support for AI responses</li>
  <li>Streaming responses</li>
  <li>File and image support</li>
</ul>

<h2> Tags</h2>

<p>
  <code>react</code>
  <code>vite</code>
  <code>javascript</code>
  <code>nodejs</code>
  <code>expressjs</code>
  <code>gemini-api</code>
  <code>generative-ai</code>
  <code>chatbot</code>
  <code>rest-api</code>
  <code>full-stack</code>
</p>

<h2> Author</h2>

<p>
  <b>Arpita Sharma</b><br>
  MCA Student | Full Stack Web Developer
</p>
