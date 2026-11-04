/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Edit this file to update all information across the portfolio without touching component code.
 */

export const personalInfo = {
  name: "Dinesh Reddy Chada",
  initials: "DC",
  title: "Aspiring Data Analyst | Data Science Enthusiast | Python Developer",
  animatedTitles: [
    "Aspiring Data Analyst",
    "Python Developer",
    "Data Science Enthusiast",
    "Machine Learning Enthusiast"
  ],
  bioIntro: "I am a Computer Science and Data Science graduate passionate about working with data, discovering meaningful insights, and solving real-world problems. I enjoy learning new technologies and building projects using Python, SQL, data analytics, and machine learning.",
  aboutDetailed: [
    "I am Dinesh Reddy Chada, a Computer Science and Data Science graduate from CMR Technical Campus. I am interested in Data Analytics, Data Science, Python Programming, and Machine Learning.",
    "I enjoy exploring datasets, identifying patterns, cleaning data, and converting information into meaningful insights.",
    "I am continuously improving my technical skills through practical projects and hands-on learning. My goal is to begin my professional journey in the IT industry and contribute to real-world projects."
  ],
  careerObjective: "To start my career as a Data Analyst or Data Science professional and use data analytics, programming, visualization, and problem-solving skills to solve real-world business problems.",
  
  // Key Stats / Highlights
  highlights: [
    { label: "Degree", value: "B.Tech (CSE - Data Science)", icon: "GraduationCap" },
    { label: "College", value: "CMR Technical Campus", icon: "Building2" },
    { label: "Academic CGPA", value: "7.85 / 10", icon: "Award" },
    { label: "Location", value: "Hyderabad, Telangana, India", icon: "MapPin" },
    { label: "Core Focus", value: "Data Analytics & ML", icon: "LineChart" },
    { label: "Availability", value: "Immediate / Open for Roles", icon: "CheckCircle2" }
  ],

  // Contact Information (Placeholders ready to update)
  contact: {
    email: "chadadineshreddy@gmail.com",
    emailPlaceholderNote: "Click to email or edit in portfolioData.js",
    phone: "+91 6303219304",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/dinesh-reddy-chada", // Replace with your LinkedIn profile
    github: "https://github.com/dineshreddychada", // Replace with your GitHub profile
  },

  // Resume Configuration
  resume: {
    fileName: "Dinesh_Reddy_Chada_Resume.pdf",
    filePath: "/resume.pdf", // Place your real PDF in the public/ folder as resume.pdf
    lastUpdated: "November 2026",
    summary: "Interested in knowing more about my educational background, technical skills, and projects? Download my resume to explore my profile."
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for scripting, problem-solving, and database querying.",
    skills: [
      { name: "Python", level: "Proficient", icon: "Terminal", note: "Data processing, ML modeling, scripting" },
      { name: "SQL", level: "Intermediate", icon: "Database", note: "Complex queries, joins, aggregations" },
      { name: "HTML", level: "Comfortable", icon: "FileCode", note: "Semantic structure & web UI" },
      { name: "CSS", level: "Comfortable", icon: "Palette", note: "Responsive styling & layouts" },
      { name: "JavaScript", level: "Foundational", icon: "FileJson", note: "DOM manipulation & interactivity" }
    ]
  },
  {
    category: "Data Analytics",
    icon: "BarChart3",
    description: "Tools and techniques to inspect, clean, and visualize business datasets.",
    skills: [
      { name: "Microsoft Excel", level: "Advanced", icon: "Sheet", note: "Formulas, VLOOKUP, pivot tables" },
      { name: "Power BI", level: "Intermediate", icon: "PieChart", note: "Interactive dashboards & DAX" },
      { name: "Tableau", level: "Intermediate", icon: "AreaChart", note: "Visual storytelling & charts" },
      { name: "Data Cleaning", level: "Hands-on", icon: "Sparkles", note: "Handling missing values & outliers" },
      { name: "Data Visualization", level: "Hands-on", icon: "TrendingUp", note: "Communicating key trends clearly" },
      { name: "Exploratory Data Analysis (EDA)", level: "Hands-on", icon: "Search", note: "Pattern discovery & hypothesis testing" }
    ]
  },
  {
    category: "Data Science & Machine Learning",
    icon: "BrainCircuit",
    description: "Statistical libraries and machine learning workflows for predictive modeling.",
    skills: [
      { name: "Pandas", level: "Hands-on", icon: "Layers", note: "DataFrame manipulation & filtering" },
      { name: "NumPy", level: "Hands-on", icon: "Cpu", note: "Numerical computations & matrices" },
      { name: "Scikit-learn", level: "Hands-on", icon: "Network", note: "Regression, classification, pipelines" },
      { name: "Machine Learning", level: "Applied", icon: "Brain", note: "Supervised & unsupervised algorithms" },
      { name: "Data Preprocessing", level: "Hands-on", icon: "Filter", note: "Encoding, scaling, feature engineering" },
      { name: "Statistical Analysis", level: "Foundational", icon: "Binary", note: "Distributions, correlations, metrics" }
    ]
  },
  {
    category: "Database Management",
    icon: "DatabaseZap",
    description: "Relational database systems and structured data operations.",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: "Server", note: "Schema design, constraints, CRUD" },
      { name: "SQL Queries", level: "Intermediate", icon: "Code", note: "Subqueries, window functions, joins" },
      { name: "Database Management", level: "Foundational", icon: "HardDrive", note: "Normalization & data integrity" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Development environments, version control, and productivity platforms.",
    skills: [
      { name: "VS Code", level: "Daily User", icon: "Laptop", note: "Primary code editor" },
      { name: "Jupyter Notebook", level: "Daily User", icon: "BookOpen", note: "Interactive analysis & ML experiments" },
      { name: "Git", level: "Intermediate", icon: "GitBranch", note: "Version control & commit workflows" },
      { name: "GitHub", level: "Intermediate", icon: "Github", note: "Code hosting & collaboration" },
      { name: "Microsoft Office", level: "Proficient", icon: "Files", note: "Documentation & presentations" }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Crop Yield Prediction with Climate and Soil Data",
    category: "Data Science",
    tagline: "ML-Driven Agricultural Yield Estimator",
    description: "Developed a machine learning-based system to predict crop yields using climate and soil-related parameters. The system analyzes environmental and soil information to estimate agricultural productivity, aiding farmers and policymakers with data-driven decision making.",
    technologies: ["Python", "Machine Learning", "Random Forest", "Scikit-learn", "Pandas", "NumPy", "Tkinter"],
    features: [
      "Dataset uploading & validation interface",
      "Comprehensive data preprocessing & missing value imputation",
      "Correlation-based feature selection & climate factor weighting",
      "Supervised ML model training with Random Forest Regressor",
      "Real-time crop yield prediction based on soil inputs",
      "Rigorous model evaluation using RMSE, MSE, and R² score metrics"
    ],
    githubUrl: "https://github.com/dineshreddychada/crop-yield-prediction", // Placeholder: update with your link
    liveUrl: "#", // Placeholder: update with demo link if hosted
    image: "crop-yield",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    borderAccent: "group-hover:border-emerald-500/50",
    badge: "ML & Agriculture",
    date: "Academic Project"
  },
  {
    id: 2,
    title: "HireAI – Resume Screening & Candidate Shortlisting",
    category: "Data Science",
    tagline: "NLP-Powered Automated Candidate Matching",
    description: "An AI-powered resume screening system designed to analyze resumes and identify suitable candidates based on job requirements, significantly minimizing manual talent screening time and unconscious bias.",
    technologies: ["Python", "NLP", "Machine Learning", "Sentence Transformers", "Scikit-learn", "Pandas"],
    features: [
      "Automated PDF/DOCX resume analysis and raw text extraction",
      "Semantic understanding using modern Sentence Transformers embeddings",
      "Cosine similarity matching against job description criteria",
      "Dynamic candidate ranking and multi-attribute scoring",
      "Automated shortlisting workflow with exportable candidate lists"
    ],
    githubUrl: "https://github.com/dineshreddychada/hire-ai-screening", // Placeholder: update with your link
    liveUrl: "#", // Placeholder
    image: "hire-ai",
    accentColor: "from-blue-500/20 to-indigo-500/10",
    borderAccent: "group-hover:border-blue-500/50",
    badge: "NLP & AI Screening",
    date: "NLP Project"
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    category: "Data Analytics",
    tagline: "Intelligent Resume Content & Skill Extraction",
    description: "An AI-based application that analyzes resume content, extracts relevant information like technical skills and education, and helps evaluate resumes objectively with actionable feedback.",
    technologies: ["Python", "NLP", "Machine Learning", "Data Processing", "RegEx", "Streamlit"],
    features: [
      "Intelligent resume parsing and structured data extraction",
      "Categorized skill extraction (Languages, Libraries, Databases)",
      "Resume quality analysis and missing keyword recommendations",
      "Candidate evaluation summary and visual skill distribution breakdown"
    ],
    githubUrl: "https://github.com/dineshreddychada/ai-resume-analyzer", // Placeholder
    liveUrl: "#", // Placeholder
    image: "resume-analyzer",
    accentColor: "from-purple-500/20 to-pink-500/10",
    borderAccent: "group-hover:border-purple-500/50",
    badge: "Data Processing",
    date: "Data Analytics Project"
  },
  {
    id: 4,
    title: "E-Commerce Food Website",
    category: "Web Development",
    tagline: "Interactive & Responsive Online Food Ordering UI",
    description: "Designed and developed an interactive food ordering website with a responsive user interface, intuitive category browsing, and seamless cart interaction.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Local Storage"],
    features: [
      "Fully responsive mobile-first user interface",
      "Interactive food product listings with pricing & tags",
      "Client-side cart addition, quantity updates, and bill calculation",
      "Smooth interactive UI micro-interactions and transitions"
    ],
    githubUrl: "https://github.com/dineshreddychada/ecommerce-food-website", // Placeholder
    liveUrl: "#", // Placeholder
    image: "food-ecommerce",
    accentColor: "from-amber-500/20 to-orange-500/10",
    borderAccent: "group-hover:border-amber-500/50",
    badge: "Frontend UI",
    date: "Web Project"
  }
];

export const projectFilterCategories = [
  "All Projects",
  "Data Analytics",
  "Data Science",
  "Web Development"
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Data Science (CSE-DS)",
    institution: "CMR Technical Campus",
    location: "Hyderabad, Telangana, India",
    score: "CGPA: 7.85 / 10",
    status: "Completed / Graduate",
    period: "Undergraduate Degree",
    description: "Comprehensive curriculum blending core computer science fundamentals with specialized data science topics including Machine Learning, Statistics, Database Systems, Data Structures & Algorithms, and Python for Data Analysis.",
    highlights: [
      "Specialized in Computer Science & Data Science domain",
      "Hands-on lab coursework in Python, MySQL, and ML algorithms",
      "Academic capstone projects in predictive modeling and NLP",
      "Active participation in technical seminars and workshops"
    ]
  }
];

export const certificationsData = [
  {
    id: 1,
    title: "Salesforce Certification",
    issuer: "Salesforce",
    badge: "Cloud & CRM",
    description: "Foundational training covering cloud architecture, business logic, customer relationship management, and data management workflows on the Salesforce ecosystem.",
    credentialUrl: "#", // Editable verification link
    credentialId: "SF-PLACEHOLDER", // Editable ID
    icon: "Cloud",
    color: "from-sky-500/20 to-blue-500/10",
    status: "Verified Credential"
  },
  {
    id: 2,
    title: "Cisco Networking Academy",
    issuer: "Cisco Networking Academy",
    badge: "Networking Fundamentals",
    description: "Comprehensive fundamentals of computer networks, IP addressing, protocols, data routing, switching, and network security concepts.",
    credentialUrl: "#",
    credentialId: "CISCO-PLACEHOLDER",
    icon: "Network",
    color: "from-cyan-500/20 to-teal-500/10",
    status: "Verified Credential"
  },
  {
    id: 3,
    title: "Tata Forage Virtual Experience",
    issuer: "Tata / Forage",
    badge: "Data Visualization & Analysis",
    description: "Practical simulation tackling real-world business scenarios: framing business questions, analyzing executive metrics, and building impactful visual charts for C-suite decision-makers.",
    credentialUrl: "#",
    credentialId: "FORAGE-TATA-PLACEHOLDER",
    icon: "BarChart4",
    color: "from-indigo-500/20 to-purple-500/10",
    status: "Experience Certificate"
  },
  {
    id: 4,
    title: "Hexart AI Foundation",
    issuer: "Hexart AI",
    badge: "Artificial Intelligence",
    description: "Foundational concepts of artificial intelligence, machine learning pipelines, ethics in AI, and practical problem framing with data.",
    credentialUrl: "#",
    credentialId: "HEXART-PLACEHOLDER",
    icon: "Brain",
    color: "from-purple-500/20 to-pink-500/10",
    status: "Foundation Credential"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
