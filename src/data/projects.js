export const projects = [
  {
    id: '01',
    number: '01',
    title: 'EDUGUIDE-AI — PERSONALIZED AI ACADEMIC TUTORING & DIAGNOSTIC ASSESSMENT PLATFORM',
    category: 'Full-Stack / Mobile (Flutter) / Generative AI & NLP',
    tagline:
      'A cross-platform AI tutoring and academic intelligence system powered by multi-document RAG, automated weakness diagnostics, and personalized study planning.',
    description:
      'A cross-platform AI tutoring and academic intelligence platform engineered with Flutter, Node.js microservices, and FastAPI. Ingests university syllabi into a Meta FAISS vector store with PyMuPDF chunking, generates grounded Gemini explanations with page citations, computes multi-factor student weakness diagnostics, and generates automated diagnostic quizzes with personalized revision schedules.',
    tech: [
      'Flutter (Dart)',
      'FastAPI',
      'Python',
      'Google Gemini API',
      'Meta FAISS',
      'SentenceTransformers',
      'Node.js / Express',
      'MongoDB',
      'PyMuPDF',
      'JWT Auth',
      'Gmail SMTP OTP',
    ],
    techCategories: {
      'Mobile & Frontend': [
        'Flutter',
        'Dart',
        'Provider (State Management)',
        'Material 3',
        'fl_chart',
        'Google Fonts',
      ],
      'Backend Services': [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT Authentication',
        'Nodemailer (Gmail SMTP OTP)',
      ],
      'AI / NLP Microservice': [
        'Python',
        'FastAPI',
        'Google Gemini API',
        'Meta FAISS (Vector DB)',
        'SentenceTransformers (all-MiniLM-L6-v2)',
        'PyMuPDF (Fitz)',
      ],
      'DevOps & Architecture': [
        'Microservices Architecture',
        'REST APIs',
        'Reverse Proxy Port Forwarding',
        'Git',
      ],
    },
    image: '/projects/eduguide-ai.webp',
    github: 'https://github.com/Shreyas142004/EduGuide-AI',
    live: null,
    statusBadge: 'FLAGSHIP AI PLATFORM',
    featured: true,
    highlights: [
      {
        title: 'Multi-Document RAG Academic Assistant',
        desc: 'Ingests university syllabus documents (PDF, DOCX, TXT) with PyMuPDF page-level metadata extraction, overlapping semantic text chunker (250–350 words, 50-word overlap), Meta FAISS vector index, and hybrid keyword boosting with balanced cross-document retrieval (max_per_doc). Delivers grounded Gemini answers with exact page-number citations, source excerpts, and concept analogies.',
      },
      {
        title: 'Multi-Factor Weakness Diagnostic Engine',
        desc: 'Synthesizes weighted student performance data: Exam Marks (1.0x), Diagnostic Quizzes (0.35x), Assignments (0.15x), and Baseline Tests (0.20x). Dynamically calculates subject priority levels (High, Medium, Low) and topic-level mastery percentages to flag revision bottlenecks.',
      },
      {
        title: 'AI Diagnostic Quiz Generator & Evaluator',
        desc: 'On-demand diagnostic MCQ generation grounded directly in course documents with configurable difficulty (Easy, Medium, Hard), real-time grading, and instant mastery reassessment updating weak-topic flags upon completion.',
      },
      {
        title: 'Algorithmic Study Plan & Schedule Generator',
        desc: 'Allocates personalized daily revision time based on upcoming exam dates, daily available study hours, and weighted subject priorities.',
      },
      {
        title: 'Security & Production UX',
        desc: 'JWT authentication, bcrypt password hashing, crypto-random 6-digit Gmail SMTP OTP verification (10-minute TTL) for secure password changes and self-service account recovery, and universal adaptive Dark/Light theme with custom Material 3 ColorSchemes.',
      },
    ],
    architecture: {
      clientTier:
        'Flutter mobile application delivering unified navigation across Dashboard, Document Library, Performance Stats, RAG Chatbot, Study Planner, and Diagnostic Quizzes with Provider state management and fl_chart visualizations.',
      gatewayTier:
        'Node.js / Express.js REST API server orchestrating auth, performance records, and document metadata storage with MongoDB & Mongoose.',
      aiTier:
        'FastAPI microservice handling vector embeddings with SentenceTransformers (all-MiniLM-L6-v2), Meta FAISS vector indexing, similarity retrieval, and Google Gemini-based grounded response synthesis.',
    },
  },
  {
    id: '02',
    number: '02',
    title: 'SMART UTILITY PORTAL — ACADEMIC MANAGEMENT & CAMPUS INTELLIGENCE SYSTEM',
    category: 'Frontend Web Application & Academic UI',
    tagline:
      'A responsive, component-driven campus orchestration frontend featuring role-based interfaces, client-side academic calculations, and real-time announcement streams.',
    description:
      'A modern, component-driven academic management frontend web application engineered with React 19, Vite, and Tailwind CSS v4. Features intuitive role-based views for students, faculty, and administrators to track course attendance, browse circulars, monitor assignments, and inspect exam scores with responsive data tables and client-side state models.',
    tech: [
      'React 19',
      'Vite',
      'Tailwind CSS v4',
      'Lucide Icons',
      'Client State Models',
      'Component Architecture',
      'Modern CSS',
    ],
    techCategories: {
      'Frontend Framework & Build': ['React 19', 'Vite Bundler', 'JavaScript (ES6+)', 'Modern DOM APIs'],
      'UI Styling & Design System': ['Tailwind CSS v4', 'Lucide Icons', 'Modern CSS', 'Responsive Grid / Flexbox'],
      'State & Data Architecture': ['Client-Side State', 'Role Context Switching', 'Local Data Models', 'Form Validation'],
      'Tooling & Deployment': ['Git', 'Vercel Edge Deployment', 'Postman / Mock APIs', 'NPM'],
    },
    image: '/projects/smart-utility-portal.webp',
    github: 'https://github.com/Shreyas142004/Smart-Utility-Portal',
    live: null,
    statusBadge: 'FRONTEND ARCHITECTURE',
    featured: true,
    architectureTitle: '01 // COMPONENT-DRIVEN FRONTEND ARCHITECTURE',
    architecture: [
      {
        title: 'Presentation & Layout System',
        subtitle: 'REACT 19 • VITE • TAILWIND CSS V4',
        icon: 'Layers',
        desc: 'High-performance single-page frontend built with React 19 and Vite featuring dynamic responsive grid layouts, clean typography, mobile-adaptive navigation, and instant UI state transitions.',
        accentColor: 'var(--accent-lime)',
      },
      {
        title: 'Role-Based Interface Layer',
        subtitle: 'DYNAMIC ROLE SWITCHING • UI CONTEXT',
        icon: 'ShieldCheck',
        desc: 'Component-driven role switcher providing contextual dashboard views for Students (attendance & grades), Faculty (course management & notices), and Department Admins.',
        accentColor: '#ffffff',
      },
      {
        title: 'Client-Side Academic Computation',
        subtitle: 'CALCULATION ENGINES • MOCK RECORD STORE',
        icon: 'Terminal',
        desc: 'Client-side data modeling managing attendance eligibility calculations (e.g. 75% thresholds), grade tabulation, assignment status filters, and categorized campus circular search.',
        accentColor: 'var(--accent-lime)',
      },
    ],
    highlights: [
      {
        title: 'Role-Based Dashboard Interfaces',
        desc: 'Dedicated UI workflows customized for Student, Faculty, and Admin personas with context-aware navigation and modular component composition.',
      },
      {
        title: 'Client-Side Attendance & Eligibility Calculator',
        desc: 'Instant visual calculation of subject-wise attendance percentages, rendering color-coded warning badges for mandatory exam attendance thresholds.',
      },
      {
        title: 'Campus Circular & Notice Feed UI',
        desc: 'Interactive announcement stream enabling students and faculty to filter, search, and view official college circulars categorized by department and semester.',
      },
      {
        title: 'Coursework & Assignment Tracker Interface',
        desc: 'Structured coursework UI with submission status badges, deadline countdown indicators, and internal score breakdown tables.',
      },
      {
        title: 'Modern Tailwind CSS v4 Design System',
        desc: 'Engineered with cutting-edge Tailwind CSS v4, custom utility layers, fluid responsive cards, and clean editorial data tables.',
      },
    ],
  },
  {
    id: '03',
    number: '03',
    title: 'AI THUNDERSTORM & LIGHTNING NOWCASTING — DEEP LEARNING METEOROLOGICAL PREDICTION',
    category: 'Deep Learning & Meteorological AI (Backend / Modeling WIP)',
    tagline:
      'A spatiotemporal deep learning nowcasting engine predicting severe convective thunderstorms and lightning discharge events in near-real-time using radar reflectivity cubes.',
    description:
      'An advanced meteorological AI research and deep learning pipeline predicting severe thunderstorm occurrences and cloud-to-ground lightning discharge risks in near real time (0–2 hour horizon). Ingests Doppler radar reflectivity volumes, models spatiotemporal storm kinematics via PyTorch ConvLSTM neural networks, and outputs hazard risk probabilities (frontend interface currently in development).',
    tech: [
      'Python',
      'Deep Learning',
      'PyTorch',
      'ConvLSTM',
      'Radar Analytics',
      'NumPy / SciPy',
      'FastAPI',
      'GeoJSON',
    ],
    techCategories: {
      'Deep Learning & Modeling': ['Python', 'PyTorch', 'ConvLSTM', 'Convolutional Neural Networks', 'TorchVision'],
      'Scientific Computing & Geodata': ['NumPy', 'SciPy', 'Matplotlib', 'Pandas', 'NetCDF / GeoJSON / GeoTIFF'],
      'Radar Meteorology & Processing': ['Doppler Radar (dBZ)', 'Clutter Filtering', 'Spatiotemporal Tensors', 'Kinematics Tracking'],
      'Serving & Tooling': ['FastAPI (Inference Backend)', 'Python Scripts', 'Git', 'Virtualenv'],
    },
    image: '/projects/ai-thunderstorm-nowcasting.webp',
    github: 'https://github.com/Shreyas142004/AI-Thunderstorm-Lightning-Nowcasting',
    live: null,
    statusBadge: 'WORK IN PROGRESS (AI/ML)',
    featured: true,
    architectureTitle: '01 // SPATIOTEMPORAL DEEP LEARNING PIPELINE',
    architecture: [
      {
        title: 'Radar Ingestion & Preprocessing',
        subtitle: 'PYTHON • NUMPY • SCIPY • RADAR FILTERING',
        icon: 'Database',
        desc: 'Ingests Doppler radar reflectivity scans (dBZ), filters ground clutter, normalizes elevation sweeps, and stacks radar volumes into consecutive 4D spatiotemporal tensor sequences.',
        accentColor: 'var(--accent-lime)',
      },
      {
        title: 'Spatiotemporal Neural Network',
        subtitle: 'PYTORCH • CONVLSTM • 3D CONVOLUTIONS',
        icon: 'BrainCircuit',
        desc: 'Sequence-to-sequence deep recurrent network modeling convective storm kinematics, updraft intensification, and cloud water content dynamics over rolling 0–2 hour forecasting windows.',
        accentColor: '#ffffff',
      },
      {
        title: 'Inference & Hazard Probability Engine',
        subtitle: 'FASTAPI • GEOJSON • PROBABILITY SCORING',
        icon: 'Cpu',
        desc: 'Backend inference service generating calibrated lightning flash probability contours, convective cell centroids, and automated early warning GeoJSON payloads (frontend visualization dashboard currently in progress).',
        accentColor: 'var(--accent-lime)',
      },
    ],
    highlights: [
      {
        title: 'Spatiotemporal Radar Tensor Processing',
        desc: 'Transforms raw Doppler radar scans into normalized 4D tensor volumes (Batch, Time, Channels, Height, Width) capturing convective storm cell evolution.',
      },
      {
        title: 'ConvLSTM Deep Kinematic Modeling',
        desc: 'Recurrent convolutional architecture simultaneously preserving spatial radar reflectivity morphology while learning temporal storm motion and rapid electrification trajectories.',
      },
      {
        title: 'Calibrated Lightning Flash Probability Mapping',
        desc: 'Probabilistic classification model discriminating between benign stratiform precipitation and high-hazard convective cells with extreme electrical discharge risk.',
      },
      {
        title: 'Storm Centroid & Velocity Vector Estimation',
        desc: 'Optical flow and centroid tracking algorithms estimating convective cell propagation speed and heading for pinpoint arrival time prediction.',
      },
      {
        title: 'Lightweight Backend Inference Pipeline',
        desc: 'FastAPI-driven backend serving sub-second inference predictions as GeoJSON polygons; frontend client dashboard is currently actively in progress.',
      },
    ],
  },
  {
    id: '04',
    number: '04',
    title: 'SMART PARKING PORTAL — REAL-TIME IOT & WEB RESERVATION PLATFORM',
    category: 'Full Stack Development',
    tagline:
      'An end-to-end urban parking intelligence and reservation system enabling live slot discovery, reservation booking, automated ticketing, and administrative occupancy telemetry.',
    description:
      'A full-stack smart parking platform engineered with React, Node.js, and MongoDB. Enables motorists to discover parking facilities, inspect live slot occupancy via visual bay grids, execute conflict-free slot reservations, and receive automated email booking passes with verification tokens.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT Auth',
      'Nodemailer (SMTP)',
      'Atomic Locking',
    ],
    techCategories: {
      'Frontend & UI': ['React', 'Modern CSS', 'Interactive Bay Layouts', 'Lucide Icons', 'Responsive Design'],
      'Backend Services': ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Nodemailer (SMTP)'],
      'Database & Storage': ['MongoDB', 'Mongoose ODM', 'Atomic Query Locking', 'Indexing'],
      'DevOps & Cloud': ['Vercel Hosting', 'Git', 'Environment Config', 'Postman Testing'],
    },
    image: '/projects/smart-parking.webp',
    github: 'https://github.com/Shreyas142004/Smart-Parking-Portal',
    live: 'https://smart-parking-portal.vercel.app/',
    statusBadge: 'LIVE PLATFORM',
    featured: true,
    architectureTitle: '01 // THREE-TIER PARKING ORCHESTRATION ARCHITECTURE',
    architecture: [
      {
        title: 'Client Web Application',
        subtitle: 'REACT • INTERACTIVE BAY GRIDS • MODERN CSS',
        icon: 'Layers',
        desc: 'Interactive motorist and administrator web app featuring dynamic floorplan visualizations, real-time bay occupancy indicators, slot booking modals, and digital ticket passes.',
        accentColor: 'var(--accent-lime)',
      },
      {
        title: 'API Gateway & Reservation Logic',
        subtitle: 'NODE.JS • EXPRESS • ATOMIC LOCKING • JWT',
        icon: 'Server',
        desc: 'Centralized REST API orchestrating conflict-free slot reservations, duration calculations, user authentication, and transaction verification.',
        accentColor: '#ffffff',
      },
      {
        title: 'Persistence & Notification Engine',
        subtitle: 'MONGODB • MONGOOSE • NODEMAILER (SMTP)',
        icon: 'Database',
        desc: 'Stores vehicle profiles, tariff rates, and reservation states. Automatically generates and dispatches verification passes via Gmail SMTP.',
        accentColor: 'var(--accent-lime)',
      },
    ],
    highlights: [
      {
        title: 'Real-Time Slot Discovery & Interactive Floorplan',
        desc: 'Visual grid mapping parking bays with color-coded states (Available, Reserved, Occupied) for effortless navigation and rapid bay selection.',
      },
      {
        title: 'Concurrency-Safe Reservation Locking',
        desc: 'Atomic database reservation routines preventing race conditions and double-booking conflicts when simultaneous users attempt to reserve the same bay.',
      },
      {
        title: 'Automated Email Ticket & Token Generation',
        desc: 'Instant dispatch of digitized booking passes via Gmail SMTP (Nodemailer) complete with booking reference codes and parking entry metadata.',
      },
      {
        title: 'Dynamic Tariff & Duration Computation',
        desc: 'Algorithmic calculation of parking charges based on vehicle category, requested time window, and peak-hour pricing models.',
      },
      {
        title: 'Administrative Telemetry Dashboard',
        desc: 'Operations control panel displaying live parking lot occupancy rates, peak usage windows, cumulative revenue, and manual bay override controls.',
      },
    ],
  },
  {
    id: '05',
    number: '05',
    title: 'SMART CRM — ENTERPRISE CUSTOMER RELATIONSHIP & SALES PLATFORM',
    category: 'Enterprise MERN Web Platform',
    tagline:
      'A full-lifecycle enterprise CRM engineered with the MERN stack for lead pipeline tracking, quotation & invoice generation, inventory monitoring, and executive revenue analytics.',
    description:
      'A full-lifecycle enterprise CRM platform engineered with the MERN stack (MongoDB, Express, React, Node.js). Equips small-to-mid businesses with visual Kanban lead pipelines, automated quotation and invoice generation, product stock synchronization, and executive sales analytics.',
    tech: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'MERN Stack',
      'JWT Auth',
      'Aggregation Pipelines',
    ],
    techCategories: {
      'Frontend Dashboard': ['React', 'Context API', 'Modular CSS', 'Responsive Tables', 'Kanban Pipelines'],
      'Backend Server': ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Token Verification', 'Middleware'],
      'Database & Analytics': ['MongoDB', 'Mongoose ODM', 'Aggregation Pipelines ($group, $lookup)', 'Data Modeling'],
      'Tooling & Versioning': ['Git', 'GitHub', 'REST Client Testing', 'NPM Package Ecosystem'],
    },
    image: '/projects/smart-crm.webp',
    github: 'https://github.com/Shreyas142004/Smart-CRM',
    live: null,
    statusBadge: 'GITHUB REPOSITORY',
    featured: true,
    architectureTitle: '01 // ENTERPRISE MERN ARCHITECTURE',
    architecture: [
      {
        title: 'Enterprise Frontend UI',
        subtitle: 'REACT • MODULAR CSS • KANBAN WORKFLOWS',
        icon: 'Layers',
        desc: 'Interactive enterprise dashboard offering drag-and-drop lead pipelines, customer relationship timelines, dynamic quote builders, and executive revenue graphs.',
        accentColor: 'var(--accent-lime)',
      },
      {
        title: 'Business Logic & Workflow Server',
        subtitle: 'NODE.JS • EXPRESS • REST APIS • JWT',
        icon: 'Server',
        desc: 'Enterprise business layer managing deal stages, invoice tax calculations, customer communication histories, and role-secured endpoints.',
        accentColor: '#ffffff',
      },
      {
        title: 'Document Store & Aggregation Engine',
        subtitle: 'MONGODB • MONGOOSE • AGGREGATIONS',
        icon: 'Database',
        desc: 'Flexible schema storage for customer records, catalog inventory, payment histories, and multi-stage aggregation queries for revenue reporting.',
        accentColor: 'var(--accent-lime)',
      },
    ],
    highlights: [
      {
        title: 'Visual Lead Pipeline & Deal Stages',
        desc: 'Multi-stage sales pipeline tracking leads from initial outreach to proposal, negotiation, and closed-won deals with conversion probability metrics.',
      },
      {
        title: 'Automated Quotation & Tax Invoice Generator',
        desc: 'Instant generation of formal quotations and printable tax invoices with dynamic item line calculations, custom discounts, and payment terms.',
      },
      {
        title: 'Customer Interaction Chronology & Follow-Up System',
        desc: 'Unified activity log documenting phone calls, email exchanges, meeting notes, customer preferences, and automated follow-up reminders.',
      },
      {
        title: 'Product Catalog & Inventory Synchronization',
        desc: 'Real-time product catalog tracking stock levels, unit costs, and automated inventory decrements upon order finalization.',
      },
      {
        title: 'Executive Revenue & Conversion Analytics',
        desc: 'MongoDB aggregation pipelines computing monthly recurring revenue, team performance benchmarks, and average deal velocity.',
      },
    ],
  },
  {
    id: '06',
    number: '06',
    title: 'SPEECH TO TEXT — HIGH-PERFORMANCE WEB AUDIO TRANSCRIBER',
    category: 'Speech Recognition Web Application',
    tagline:
      'A zero-latency, in-browser audio transcription and speech intelligence tool powered by the Web Speech Recognition API, dynamic audio visualizers, and instant clipboard exports.',
    description:
      'A high-performance client-side web application converting continuous spoken audio into live transcribed text. Features zero-latency browser speech recognition, HTML5 Canvas audio frequency visualizers, live word and speaking speed metrics, and one-click clipboard/file export.',
    tech: [
      'JavaScript (ES6+)',
      'Web Speech API',
      'Web Audio API',
      'HTML5 Canvas',
      'Modern CSS',
      'Vercel',
    ],
    techCategories: {
      'Core Web Technologies': ['JavaScript (ES6+)', 'Web Speech API', 'Web Audio API', 'DOM APIs'],
      'Audio & Visualization': ['HTML5 Canvas', 'AnalyserNode', 'AudioContext', 'Frequency FFT Binning'],
      'Design & UI': ['Modern CSS3', 'Glassmorphism', 'Responsive Typography', 'Editorial Theme'],
      'Deployment & Hosting': ['Vercel Edge Network', 'Zero Dependencies', 'Ultra-Lightweight Bundle', 'Git'],
    },
    image: '/projects/speech-to-text.webp',
    github: 'https://github.com/Shreyas142004',
    live: 'https://speech-to-text-eight-mu.vercel.app/',
    statusBadge: 'LIVE PLATFORM',
    featured: true,
    architectureTitle: '01 // CLIENT-SIDE AUDIO & SPEECH PROCESSING PIPELINE',
    architecture: [
      {
        title: 'Audio Capture & FFT Visualizer',
        subtitle: 'WEB AUDIO API • AUDIOCONTEXT • ANALYSERNODE',
        icon: 'Smartphone',
        desc: 'Captures microphone input in real-time via AudioContext and AnalyserNode, performing Fast Fourier Transforms (FFT) to render dynamic audio frequency waveform bars.',
        accentColor: 'var(--accent-lime)',
      },
      {
        title: 'Continuous Speech Recognition Engine',
        subtitle: 'WEB SPEECH API • WEBKITSPEECHRECOGNITION',
        icon: 'BrainCircuit',
        desc: 'Processes acoustic voice streams locally using browser speech recognition, delivering continuous listening with real-time interim hypothesis generation.',
        accentColor: '#ffffff',
      },
      {
        title: 'Transcript State & Export Layer',
        subtitle: 'VANILLA JAVASCRIPT • BUFFER MANAGEMENT',
        icon: 'FileText',
        desc: 'Manages interim and finalized transcript buffers, computes real-time words-per-minute metrics, and powers instant clipboard copying and file downloads.',
        accentColor: 'var(--accent-lime)',
      },
    ],
    highlights: [
      {
        title: 'Zero-Latency In-Browser Speech Recognition',
        desc: 'Direct browser-native speech recognition running client-side with zero external API calls or network latency for immediate transcript updates.',
      },
      {
        title: 'Real-Time Frequency Oscilloscope Visualizer',
        desc: 'HTML5 Canvas audio spectrum visualizer dynamically rendering voice amplitude, frequency bins, and speaking cadence in real time.',
      },
      {
        title: 'Interim & Finalized Hypothesis Streaming',
        desc: 'Distinguishes between interim live voice hypotheses and committed sentence tokens, creating a smooth, real-time typing transcription effect.',
      },
      {
        title: 'Live Speech Statistics & Speaking Velocity',
        desc: 'Calculates cumulative word counts, character lengths, elapsed speaking duration, and estimated speech rate (words per minute).',
      },
      {
        title: 'Instant Clipboard & Text File Export',
        desc: 'One-click copy-to-clipboard functionality and direct .txt document download for seamless workflow integration.',
      },
    ],
  },
  {
    id: '07',
    number: '07',
    title: 'ATM SIMULATION SYSTEM — CORE BANKING & SECURITY ENGINE IN C',
    category: 'Systems Engineering & Core Banking Logic',
    tagline:
      'A secure, memory-efficient core banking and ATM transaction simulation engineered in C with multi-account state machines, PIN hashing, file ledger persistence, and transaction rollbacks.',
    description:
      'A comprehensive Automated Teller Machine simulation engineered in low-level C. Implements robust multi-account state machines, secure PIN authentication with lockout protection, atomic cash deposits and withdrawals, balance validations, and binary file ledger persistence.',
    tech: [
      'C Language',
      'Data Structures',
      'Binary File I/O',
      'Memory Safety',
      'Finite State Machine',
      'Algorithms',
    ],
    techCategories: {
      'Language & Systems': ['C (C99/C11 Standard)', 'GCC Compiler', 'POSIX System Calls', 'Defensive Programming'],
      'Data Structures & Memory': ['Structs', 'Pointers', 'Dynamic Memory', 'Enums', 'Arrays', 'Input Sanitization'],
      'Persistence & I/O': ['Binary File I/O (fopen/fread/fwrite)', 'Struct Serialization', 'Ledger Files'],
      'Security & Architecture': ['Finite State Machine (FSM)', 'PIN Verification', 'Account Lockout', 'Atomic Updates'],
    },
    image: '/projects/atm-simulation-c.webp',
    github: 'https://github.com/Shreyas142004/ATM-simulation-C',
    live: null,
    statusBadge: 'SYSTEMS / C',
    featured: true,
    architectureTitle: '01 // LOW-LEVEL SYSTEMS & MEMORY ARCHITECTURE',
    architecture: [
      {
        title: 'Terminal Controller & State Machine',
        subtitle: 'C CONSOLE UI • INPUT SANITIZATION',
        icon: 'Terminal',
        desc: 'Terminal interface powered by a finite state machine managing Welcome, Authentication, Main Menu, and Transaction screens with sanitized input buffers.',
        accentColor: 'var(--accent-lime)',
      },
      {
        title: 'Banking Logic & Transaction Engine',
        subtitle: 'MODULAR C FUNCTIONS • ATOMIC CHECKS',
        icon: 'Cpu',
        desc: 'Executes core deposit, withdrawal, and fund transfer business logic with balance boundary checks, withdrawal caps, and mathematical precision.',
        accentColor: '#ffffff',
      },
      {
        title: 'Binary Persistence & Ledger Storage',
        subtitle: 'BINARY FILE I/O • STRUCT SERIALIZATION',
        icon: 'Database',
        desc: 'Serializes account structures and append-only transaction history logs directly to disk binary files with safe file pointers and integrity validation.',
        accentColor: 'var(--accent-lime)',
      },
    ],
    highlights: [
      {
        title: 'Hierarchical Finite State Machine (FSM)',
        desc: 'Strict state transitions governing the ATM session lifecycle: Card Insertion -> PIN Authentication -> Account Dashboard -> Transaction Execution -> Ejection.',
      },
      {
        title: 'PIN Authentication & Brute-Force Lockout',
        desc: 'Secure credential verification with automatic account lockout after 3 consecutive failed PIN attempts to prevent brute-force attacks.',
      },
      {
        title: 'Atomic Balance Updating & Ledger Logging',
        desc: 'Guarantees transaction integrity with atomic balance adjustments and append-only disk logging of all credit and debit events.',
      },
      {
        title: 'Defensive Memory Management & Buffer Safety',
        desc: 'Engineered with safe string parsing (fgets), strict array bound checks, null pointer validation, and deterministic memory cleanup.',
      },
      {
        title: 'Mini-Statement & Receipt Formatting',
        desc: 'Generates structured transaction histories displaying chronological debit/credit events, timestamps, and closing balances.',
      },
    ],
  },
];

export const services = [
  {
    id: '01',
    number: '01',
    title: 'FULL STACK DEVELOPMENT',
    description:
      'End-to-end web applications crafted with React, Node.js, and modern cloud databases. Architecting responsive, fast, and scalable user-centric platforms.',
    tags: ['Architecture', 'React', 'Node.js', 'REST APIs'],
  },
  {
    id: '02',
    number: '02',
    title: 'FRONTEND DEVELOPMENT',
    description:
      'Editorial, high-performance UI engineering with smooth Framer Motion interactions, responsive layouts, pixel-perfect fidelity, and modern CSS.',
    tags: ['Interactive UI', 'CSS Systems', 'Framer Motion', 'Accessibility'],
  },
  {
    id: '03',
    number: '03',
    title: 'BACKEND DEVELOPMENT',
    description:
      'Resilient server-side systems, RESTful microservices, authentication architectures (JWT), business logic pipelines, and high-throughput handlers.',
    tags: ['Express.js', 'Node.js', 'Python', 'Security'],
  },
  {
    id: '04',
    number: '04',
    title: 'AI / ML DEVELOPMENT',
    description:
      'Predictive machine learning models, deep learning architectures with PyTorch, spatiotemporal forecasting, and intelligent data-driven systems.',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'Scikit-learn'],
  },
  {
    id: '05',
    number: '05',
    title: 'DATABASE & API DEVELOPMENT',
    description:
      'Data modeling and optimization across MongoDB, MySQL, and SQLite. Designing schema integrity, query performance, indexing, and third-party API webhooks.',
    tags: ['MongoDB', 'MySQL', 'SQLite', 'Schema Design'],
  },
  {
    id: '06',
    number: '06',
    title: 'TOOLS & WORKFLOWS',
    description:
      'Version control workflows, Git branching strategies, collaborative project architecture on GitHub, and fast web deployments on Vercel.',
    tags: ['Git', 'GitHub', 'Vercel', 'VS Code'],
  },
];

export const techStack = [
  { name: 'Flutter', category: 'Frontend' },
  { name: 'Dart', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'Generative AI & RAG', category: 'AI/ML' },
  { name: 'Meta FAISS (Vector DB)', category: 'AI/ML' },
  { name: 'PyTorch / ML', category: 'AI/ML' },
  { name: 'Deep Learning', category: 'AI/ML' },
  { name: 'Scikit-learn', category: 'AI/ML' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
];

export const education = [
  {
    id: '01',
    degree: 'Master of Computer Applications (MCA)',
    status: 'Pursuing',
    year: '2025 — Present',
    institution: 'Vivekananda College of Engineering & Technology (VCET)',
    location: 'Puttur, India',
    score: 'CGPA: 8.6',
    scoreValue: '8.6',
    scoreType: 'CGPA',
    badge: 'Postgraduate',
  },
  {
    id: '02',
    degree: 'Bachelor of Computer Applications (BCA)',
    status: 'Completed',
    year: 'Aug 2025',
    institution: 'Dr. P. Dayananda Pai - Sri. P. Sathish Pai Government First Grade College',
    location: 'Mangalore, India',
    score: 'CGPA: 7.65',
    scoreValue: '7.65',
    scoreType: 'CGPA',
    badge: 'Undergraduate',
  },
  {
    id: '03',
    degree: 'Pre-University College (PUC)',
    status: 'Completed',
    year: 'Apr 2022',
    institution: 'BGS Composite PU College, Gandhinagara',
    location: 'Mangalore, India',
    score: 'Percentage: 79.83%',
    scoreValue: '79.83%',
    scoreType: 'Score',
    badge: 'Pre-University',
  },
  {
    id: '04',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    status: 'Completed',
    year: 'Jul 2020',
    institution: 'BGS High School, Kavoor',
    location: 'Mangalore, India',
    score: 'Percentage: 76.8%',
    scoreValue: '76.8%',
    scoreType: 'Score',
    badge: 'Secondary School',
  },
];

export const journeyTimeline = [
  {
    year: '2026',
    role: 'EduGuide-AI — Flagship AI Platform',
    organization: 'Flutter, Multi-Doc RAG & FastAPI Microservices',
    description:
      'Architected and engineered EduGuide-AI: a cross-platform academic intelligence platform uniting Flutter, Node.js microservices, Meta FAISS vector search, and Google Gemini with multi-factor student weakness diagnostics.',
    badge: 'Flagship AI',
  },
  {
    year: '2025 — Present',
    role: 'Master of Computer Applications (MCA)',
    organization: 'Vivekananda College of Engineering & Technology, Puttur',
    description:
      'Pursuing postgraduate MCA with a current CGPA of 8.6, focusing on advanced software engineering, distributed architectures, and machine learning.',
    badge: 'Education',
  },
  {
    year: '2026',
    role: 'AJ Astrix 2026 — II Place (Videography)',
    organization: 'AJ Institute of Engineering & Technology',
    description:
      'Won 2nd place in the Cinesaur Reel Making videography competition at AJ Astrix 2026, recognized for visual direction, cinematic reel storytelling, and post-production craft.',
    badge: 'Award',
  },
  {
    year: '2026',
    role: 'AI / ML & Speech Recognition Engineering',
    organization: 'AI Models & Speech Intelligence',
    description:
      'Engineered intelligent AI systems including real-time speech recognition platforms with Web Speech APIs, live audio waveform visualizers, and AI thunderstorm nowcasting research.',
    badge: 'AI / ML',
  },
  {
    year: '2026',
    role: 'Full Stack Engineering',
    organization: 'Smart CRM & Smart Parking Platforms',
    description:
      'Developed and deployed end-to-end full stack web platforms including both Smart CRM and the Smart Parking System with JWT authentication, database scaling, and responsive dashboards.',
    badge: 'Engineering',
  },
  {
    year: '2022 — 2025',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Dr. P. Dayananda Pai - Sri. P. Sathish Pai GFGC, Mangalore',
    description:
      'Graduated BCA (Aug 2025) with a CGPA of 7.65, building strong foundations in algorithms, database design, and web platforms.',
    badge: 'Education',
  },
];
