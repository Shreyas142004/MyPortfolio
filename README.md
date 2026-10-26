<div align="center">

# SHREYAS R A // EDITORIAL DEVELOPER PORTFOLIO

**Full Stack Developer &bull; AI/ML Specialist &bull; Systems Architect**

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.2.0-0055FF?logo=framer&logoColor=white&style=for-the-badge)](https://www.framer.com/motion/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-1.57.0-F56565?logo=lucide&logoColor=white&style=for-the-badge)](https://lucide.dev/)
[![CSS3 Design System](https://img.shields.io/badge/CSS3-Obsidian_%26_Lime-B7FF00?logo=css3&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)](LICENSE)

*An editorial, luxury-grade personal developer portfolio engineered with React 19, Vite, and Framer Motion. Featuring an obsidian dark aesthetic (`#050505`), neon lime accents (`#B7FF00`), custom interactive cursors, ambient audio soundscapes, direct Web3Forms contact inquiry modals, and comprehensive architectural dossiers for each showcase project.*

---

[Explore Projects](#-featured-projects--architectural-dossiers) &bull; [Services](#-services--expertise) &bull; [Tech Stack](#-technical-stack--skills-matrix) &bull; [Portfolio Architecture](#-portfolio-architecture--directory-layout) &bull; [Setup Guide](#-local-development--setup) &bull; [Connect](#-connect--socials)

</div>

---

## 🌟 Overview & Design Philosophy

This portfolio embodies an editorial, high-end developer identity designed to showcase production-ready engineering across Full Stack Web, Mobile (Flutter), Generative AI & RAG, Deep Learning, and Low-Level Systems:

- **Editorial Obsidian Aesthetic:** Built on a deep obsidian palette (`#050505`), subtle structural grid overlays, and vivid electric lime highlights (`#B7FF00`).
- **Typography Hierarchy:** Powered by curated Google Fonts: **Syne** (display headers), **Space Grotesk** (technical subheadings & metadata), and **Inter** (body reading typography).
- **Interactive Architectural Dossiers:** Every featured project includes an interactive **"ARCHITECTURE & SPECS"** modal diving into multi-tier microservices, algorithmic subsystems, and categorized technical stacks.
- **Ambient Soundscape:** Integrated ambient audio soundscape (`dust-on-the-morning-keys.mp3`) with an animated sound wave toggle in the navbar, powered by React Context and HTML5 Audio.
- **Desktop Custom Cursor:** Dynamic mouse-following cursor with physics-based smooth spring tracking and reactive hover states on interactive elements.
- **Direct Collaboration Flow:** Contact modal integrated with Web3Forms API for instant message transmission to email without server overhead, paired with one-click email copying and direct PDF resume viewing.

---

## 🚀 Featured Projects & Architectural Dossiers

The portfolio showcases **07 curated engineering projects**, each backed by complete technical specifications, architecture diagrams, and algorithm highlights:

| # | Project Name | Domain / Category | Key Tech Stack | Status / Links |
|---|---|---|---|---|
| **01** | **EduGuide-AI** *(Flagship)* | Full-Stack / Mobile / GenAI & RAG | Flutter, Dart, FastAPI, Google Gemini, Meta FAISS, Node.js, MongoDB, PyMuPDF | `FLAGSHIP AI` &bull; [Source Code](https://github.com/Shreyas142004/EduGuide-AI) |
| **02** | **Smart Utility Portal** | Frontend Web App & Academic UI | React 19, Vite, Tailwind CSS v4, Lucide Icons, Client State Models | `FRONTEND ARCHITECTURE` &bull; [Source Code](https://github.com/Shreyas142004/Smart-Utility-Portal) |
| **03** | **AI Thunderstorm Nowcasting** | Deep Learning Meteorological AI (WIP) | Python, PyTorch, ConvLSTM, Doppler Radar (dBZ), NumPy, SciPy, FastAPI | `WORK IN PROGRESS` &bull; [Source Code](https://github.com/Shreyas142004/AI-Thunderstorm-Lightning-Nowcasting) |
| **04** | **Smart Parking Portal** | Full-Stack IoT & Web Reservation | React, Node.js, Express, MongoDB, JWT, Nodemailer, Atomic Locking | `LIVE PLATFORM` &bull; [Live Demo](https://smart-parking-portal.vercel.app/) &bull; [Source Code](https://github.com/Shreyas142004/Smart-Parking-Portal) |
| **05** | **Smart CRM** | Enterprise MERN Web Platform | React, Node.js, Express, MongoDB, Aggregations, Kanban | `GITHUB REPO` &bull; [Source Code](https://github.com/Shreyas142004/Smart-CRM) |
| **06** | **Speech to Text** | Audio Transcriber & Speech AI | JavaScript (ES6+), Web Speech API, Web Audio API, HTML5 Canvas | `LIVE PLATFORM` &bull; [Live Demo](https://speech-to-text-eight-mu.vercel.app/) &bull; [Source Code](https://github.com/Shreyas142004) |
| **07** | **ATM Simulation System** | Systems Engineering & Banking Logic | C (C99/C11), Data Structures, Binary File I/O, Finite State Machine | `SYSTEMS / C` &bull; [Source Code](https://github.com/Shreyas142004/ATM-simulation-C) |

---

### Project Deep Dives

<details>
<summary><b>01 // EduGuide-AI — Personalized AI Academic Tutoring & Diagnostic Assessment Platform (Flagship)</b></summary>

- **Scope:** Cross-platform AI tutoring and academic intelligence platform engineered with Flutter, Node.js microservices, and FastAPI.
- **Architecture:** 3-Tier Microservices:
  - *Client Tier:* Flutter mobile application with Provider state management, fl_chart visualizations, and adaptive Material 3 Dark/Light themes.
  - *API Gateway Tier:* Node.js / Express REST API managing authentication, student academic profiles, and document metadata in MongoDB via Mongoose.
  - *AI / NLP Microservice:* FastAPI microservice running Meta FAISS vector indexing, SentenceTransformers embeddings (`all-MiniLM-L6-v2`), and Google Gemini response generation.
- **Multi-Document RAG:** Ingests university syllabus documents (PDF, DOCX, TXT) with PyMuPDF page-level extraction, 250–350 word overlapping semantic chunking (50-word overlap), Meta FAISS vector index, and balanced cross-document retrieval (`max_per_doc`) with exact page citations and concept analogies.
- **Weakness Diagnostic Engine:** Weighted student synthesis: Exam Marks (`1.0x`), Diagnostic Quizzes (`0.35x`), Assignments (`0.15x`), Baseline Tests (`0.20x`) computing High/Medium/Low revision bottlenecks and topic mastery.
- **Security & UX:** JWT auth, bcrypt password hashing, crypto-random 6-digit Gmail SMTP OTP verification (10-minute TTL) for secure password changes and account recovery.
</details>

<details>
<summary><b>02 // Smart Utility Portal — Academic Management & Campus Intelligence System</b></summary>

- **Scope:** Frontend single-page application engineered with React 19, Vite, and Tailwind CSS v4 (frontend-focused campus orchestration interface).
- **Role-Based Interfaces:** Distinct UI views for Students (attendance & gradebook), Faculty (coursework & circulars), and Department Administrators.
- **Client Computation:** Instant calculation of subject-wise attendance thresholds (75% mandatory exam rules), internal assessment tabulations, and circular filtering.
- **Component Architecture:** Reusable modular cards, responsive data tables, modal dialogs, and announcement streams.
</details>

<details>
<summary><b>03 // AI Thunderstorm & Lightning Nowcasting — Deep Learning Meteorological Prediction</b></summary>

- **Scope:** Meteorological AI research and deep learning modeling pipeline (research & backend WIP; frontend visualization dashboard currently in progress; built without Docker).
- **Radar Ingestion:** Converts Doppler radar reflectivity grids (dBZ) into 4D spatiotemporal tensor sequences (Batch, Time, Channels, Height, Width) after ground clutter filtering.
- **ConvLSTM Model:** Sequence-to-sequence recurrent neural network modeling convective storm kinematics, updraft intensification, and lightning discharge probability contours over 0–2 hour forecasting horizons.
- **Serving:** FastAPI backend serving calibrated lightning flash probability contours and storm cell centroids as GeoJSON payloads.
</details>

<details>
<summary><b>04 // Smart Parking Portal — Real-Time IoT & Web Reservation Platform</b></summary>

- **Architecture:** React frontend, Node.js/Express REST gateway, and MongoDB database with atomic locking.
- **Core Engine:** Interactive parking bay floorplan, race-condition-safe slot reservations, dynamic pricing tariffs, automated Nodemailer Gmail booking passes with entry tokens, and admin occupancy telemetry.
- **Deployment:** Live on Vercel with responsive mobile-friendly layouts.
</details>

<details>
<summary><b>05 // Smart CRM — Enterprise Customer Relationship & Sales Platform</b></summary>

- **Architecture:** Enterprise MERN stack platform (MongoDB, Express, React, Node.js).
- **Features:** Visual Kanban deal pipeline, automated quotation and printable tax invoice generator, unified customer communication histories, inventory synchronization, and MongoDB aggregation pipelines for revenue analytics.
</details>

<details>
<summary><b>06 // Speech to Text — High-Performance Web Audio Transcriber</b></summary>

- **Architecture:** Zero-latency client-side Web Speech API and Web Audio API engine.
- **Features:** Real-time audio frequency oscilloscope on HTML5 Canvas, live interim speech hypothesis streaming, words-per-minute statistics, and one-click clipboard/text download.
- **Deployment:** Live on Vercel.
</details>

<details>
<summary><b>07 // ATM Simulation System — Core Banking & Security Engine in C</b></summary>

- **Architecture:** Low-level modular C systems engineering (C99/C11).
- **Features:** Hierarchical Finite State Machine (FSM), brute-force account lockout (3 failed attempts), atomic debit/credit validations, binary file ledger persistence (`fopen`/`fwrite`), and mini-statement formatting.
</details>

---

## 💼 Services & Expertise

The portfolio highlights 6 core capability disciplines:

1. **Full Stack Development:** End-to-end web applications crafted with React, Node.js, and modern cloud databases. Architecting responsive, fast, and scalable user-centric platforms.
2. **Frontend Development:** Editorial, high-performance UI engineering with smooth Framer Motion interactions, responsive layouts, pixel-perfect fidelity, and modern CSS.
3. **Backend Development:** Resilient server-side systems, RESTful microservices, authentication architectures (JWT), business logic pipelines, and high-throughput handlers.
4. **AI / ML Development:** Predictive machine learning models, deep learning architectures with PyTorch, spatiotemporal forecasting, and intelligent data-driven systems.
5. **Database & API Development:** Data modeling and optimization across MongoDB, MySQL, and SQLite. Designing schema integrity, query performance, indexing, and third-party API webhooks.
6. **Tools & Workflows:** Version control workflows, Git branching strategies, collaborative project architecture on GitHub, and fast web deployments on Vercel.

---

## 🛠 Technical Stack & Skills Matrix

The portfolio features an interactive skills matrix with categorised filters:

```
├── Languages
│   └── JavaScript (ES6+), Dart, Python, Java, C
├── Frontend Engineering
│   └── React 19, Flutter, Vite, Modern CSS3 Design System, HTML5, Framer Motion, Lucide Icons
├── Backend & Microservices
│   └── Node.js, Express.js, FastAPI, RESTful APIs, JWT Auth, Nodemailer SMTP
├── Databases & Storage
│   └── MongoDB, MySQL, SQLite, Mongoose ODM, Meta FAISS (Vector DB)
├── Artificial Intelligence & ML
│   └── Generative AI & RAG, Google Gemini API, PyTorch, ConvLSTM, SentenceTransformers, Scikit-learn
└── Developer Tooling & DevOps
│   └── Git, GitHub, Vercel Edge, VS Code, Postman, NPM, Oxlint
```

---

## 🏛 Portfolio Architecture & Directory Layout

```
d:\Portfolio
├── public/
│   ├── audio/
│   │   └── dust-on-the-morning-keys.mp3   # Ambient soundscape track
│   ├── projects/                          # High-res project showcase screenshots
│   │   ├── eduguide-ai.webp
│   │   ├── smart-utility-portal.webp
│   │   ├── ai-thunderstorm-nowcasting.webp
│   │   ├── smart-parking.webp
│   │   ├── smart-crm.webp
│   │   ├── speech-to-text.webp
│   │   └── atm-simulation-c.webp
│   ├── resume/
│   │   └── Shreyas.pdf                    # Printable developer resume
│   ├── Hero-Image.jpeg                    # OpenGraph / Meta social preview image
│   ├── hero-cutout.webp                   # High-performance hero cutout (WebP)
│   ├── _redirects                         # Netlify SPA routing fallback
│   └── favicon.svg                        # Neon lime portfolio favicon
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                     # Sticky navigation, soundwave toggle & mobile menu
│   │   ├── Hero.jsx                       # Full-bleed editorial hero with live status pill & CTAs
│   │   ├── Introduction.jsx               # Engineering philosophy statement
│   │   ├── About.jsx                      # Bio narrative, personal specs & key metric counters
│   │   ├── Services.jsx                   # 02 What I Can Do — Expandable capability rows
│   │   ├── Skills.jsx                     # 03 Technical Stack with interactive category filter tabs
│   │   ├── Work.jsx                       # Featured projects gallery with 07 showcase cards
│   │   ├── ProjectCard.jsx                # Project showcase card & Architecture & Specs Modal
│   │   ├── Journey.jsx                    # 04 Education (MCA, BCA, PUC, SSLC) & milestone timeline
│   │   ├── Achievement.jsx                # Key Honors — 2nd Place AJ Astrix 2026 Videography
│   │   ├── Contact.jsx                    # Web3Forms modal inquiry form, email copy & channels
│   │   ├── Footer.jsx                     # Editorial footer, social profiles & back-to-top
│   │   ├── CustomCursor.jsx               # Desktop physics cursor follower with hover physics
│   │   ├── BackgroundMusic.jsx            # Ambient soundtrack controller & audio player
│   │   └── Icons.jsx                      # Custom SVG icons (GitHub, LinkedIn, LeetCode)
│   │
│   ├── context/
│   │   └── MusicContext.jsx               # Global React Context managing ambient audio playback
│   │
│   ├── data/
│   │   └── projects.js                    # Single source of truth for projects, specs, education & skills
│   │
│   ├── App.jsx                            # Root application assembler & MusicProvider wrapper
│   ├── main.jsx                           # Vite React 19 bootstrap entry
│   └── index.css                          # Obsidian & Neon Lime design system, CSS variables & resets
│
├── .env                                   # Web3Forms API key configuration
├── index.html                             # HTML5 entry with Google Fonts (Syne, Space Grotesk, Inter)
├── package.json                           # Dependencies & scripts
└── vite.config.js                         # Vite 8 build & React plugin config
```

---

## ⚙️ Local Development & Setup

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shreyas142004/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the project root:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```
   *(A valid default key is already pre-configured for direct portfolio inquiries).*

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the port displayed in your terminal).

5. **Build for production:**
   ```bash
   npm run build
   ```
   Generates a highly-optimized, minified bundle in the `/dist` directory.

6. **Preview the production bundle:**
   ```bash
   npm run preview
   ```

7. **Run code linting:**
   ```bash
   npm run lint
   ```
   Uses `oxlint` for high-speed static code analysis.

8. **Optimize static assets (Sharp WebP Pipeline):**
   ```bash
   npm run optimize:images
   ```
   Automatically scans `public/` and `public/projects/`, converting PNG/JPEG images into compressed WebP assets (~90% size reduction).

### Netlify Deployment
The repository includes dedicated configuration for Netlify (`netlify.toml` and `public/_redirects`):
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Environment Variables:** Add `VITE_WEB3FORMS_ACCESS_KEY` in **Site configuration &rarr; Environment variables**.
- **Edge Caching:** Built-in `Cache-Control` rules for all WebP, PNG, SVG, and audio assets to ensure 0ms repeated loads from Netlify's global CDN.

---

## 🎓 Academic Background & Milestones

- **Master of Computer Applications (MCA)** &bull; *2025 — Present*
  - **Institution:** Vivekananda College of Engineering & Technology (VCET), Puttur
  - **Academic Standing:** CGPA: 8.6
- **Bachelor of Computer Applications (BCA)** &bull; *Graduated Aug 2025*
  - **Institution:** Dr. P. Dayananda Pai - Sri. P. Sathish Pai Government First Grade College, Mangalore
  - **Academic Standing:** CGPA: 7.65
- **Pre-University College (PUC)** &bull; *Apr 2022*
  - **Institution:** BGS Composite PU College, Gandhinagara &bull; Score: 79.83%
- **Secondary School Leaving Certificate (SSLC)** &bull; *Jul 2020*
  - **Institution:** BGS High School, Kavoor &bull; Score: 76.8%

### Key Honors & Awards
- 🏆 **2nd Place — AJ Astrix 2026 (Cinesaur Reel Making):** Awarded II Place in Videography at AJ Institute of Engineering & Technology (AJIET) for visual direction, cinematic reel storytelling, sound design, and post-production craft.

---

## 📬 Connect & Socials

I am actively open to discussing full-time software engineering roles, full-stack development opportunities, and high-impact AI/ML projects:

- **Portfolio:** [shreyas-portfolio.vercel.app](https://shreyas-portfolio.vercel.app/)
- **Email:** [shreyasra7@gmail.com](mailto:shreyasra7@gmail.com)
- **LinkedIn:** [linkedin.com/in/shreyas-r-a-6a0567305](https://www.linkedin.com/in/shreyas-r-a-6a0567305)
- **GitHub:** [github.com/Shreyas142004](https://github.com/Shreyas142004)
- **LeetCode:** [leetcode.com/u/shreyas142004](https://leetcode.com/u/shreyas142004/)
- **Resume:** [View PDF Resume](public/resume/Shreyas.pdf)

---

## 📄 License

This repository and portfolio code are open source and available under the [MIT License](LICENSE).

<div align="center">
  <sub>Designed & Engineered with passion by <b>Shreyas R A</b> &copy; 2026. All rights reserved.</sub>
</div>