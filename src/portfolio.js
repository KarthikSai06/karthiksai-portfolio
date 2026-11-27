export const projects = [
  {
    slug: 'ai-mobile-agent', name: 'AI Mobile Agent', area: 'Android automation',
    stack: 'Python · ADB · Ollama · QLoRA',
    repo: 'https://github.com/KarthikSai06/ai-mobile-agent',
    intro: 'Give an Android phone a task in plain language. The agent reads the interface, chooses an action and checks what changed on the device.',
    details: [
      ['Device feedback', 'A Python loop parses the Android UI, plans a step, executes it through ADB and checks the outcome before continuing. New skills plug into the same loop.'],
      ['Memory across tasks', 'Named references let a task store a screen element or text. A later command can reuse it, for example by sending a saved @notes reference to a chat.'],
      ['Offline inference', 'A synthetic data pipeline converts execution logs into training examples. I am fine-tuning Qwen2.5:3b with QLoRA for offline use on low-VRAM hardware.']
    ]
  },
  {
    slug: 'bharat-monitor', name: 'Bharat Monitor', area: 'Full-stack data systems',
    stack: 'React 19 · Node.js · MongoDB',
    repo: 'https://github.com/KarthikSai06/indian-monitor',
    intro: 'An India-focused dashboard brings news, mapped incidents, markets and weather into a single view.',
    details: [
      ['Feed ingestion', 'A Node.js service polls more than 70 RSS sources with node-cron, removes duplicate stories and caches results with node-cache.'],
      ['Two ways to get insights', 'Standard users receive API-generated insights. The backend runs a local language model for continuous VIP updates backed by MongoDB.'],
      ['Exploring the data', 'Gemini, Groq and OpenRouter support categorization and trend detection. The React interface plots incidents with Leaflet and presents market movements with Recharts.']
    ]
  },
  {
    slug: 'hand-gesture-controller', name: 'Hand Gesture Controller', area: 'Mobile accessibility',
    stack: 'Python · Kotlin · MediaPipe · CameraX',
    repo: 'https://github.com/KarthikSai06/hand-Gesture-Controller',
    intro: 'A touchless Android interface lets people navigate their phone with hand gestures, including users who find a touchscreen difficult to operate.',
    details: [
      ['From gesture to action', 'CameraX and MediaPipe capture hand movement. Android Accessibility Services turn recognized gestures into system-wide actions such as swiping, double-tapping and returning home.'],
      ['Personal controls', 'Users can adjust sensitivity thresholds, record their own gestures and export labeled CSV data for model retraining. The controller also supports screenshots and volume changes.']
    ]
  }
];
export const skills = [
  ['Languages', 'Python, C++, TypeScript and SQL'],
  ['Web and backend', 'React, HTML, CSS, Node.js and REST APIs'],
  ['Databases', 'MySQL and MongoDB'],
  ['AI and machine learning', 'NumPy, Pandas, Scikit-learn, Matplotlib, Ollama, Unsloth, QLoRA, MCP and RAG'],
  ['Testing and tools', 'Playwright, Cucumber, Git, GitHub, VS Code, Anaconda, Codex and Claude Code']
];
