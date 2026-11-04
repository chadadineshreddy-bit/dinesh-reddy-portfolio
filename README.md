# Dinesh Reddy Chada - Personal Portfolio Website

![Portfolio Preview Banner](https://img.shields.io/badge/Status-Complete%20%26%20Tested-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TailwindCSS%20%7C%20JavaScript-blue?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deploy-Vercel%20%7C%20GitHub%20Pages-black?style=for-the-badge)

A modern, recruiter-focused personal portfolio website engineered for **Dinesh Reddy Chada** – Aspiring Data Analyst, Data Science Enthusiast, and Python Developer.

---

## 🌟 Key Features

- **Dark & Light Mode Toggle:** Seamless theme switcher with persistent local storage caching.
- **Futuristic & Elegant UI:** Dark navy, black, and glassmorphic aesthetic with vibrant blue, purple, and cyan gradient glows.
- **Dynamic Typing Text:** Automatically cycles through core identities (*Aspiring Data Analyst*, *Python Developer*, *Data Science Enthusiast*, *Machine Learning Enthusiast*).
- **Categorized Technical Skills:** 5 distinct skill groups (Programming Languages, Data Analytics, Data Science & ML, Database Management, Tools & Platforms) with authentic proficiency indicators.
- **Interactive Project Showcase:** 4 complete project cards with category filters (*All*, *Data Analytics*, *Data Science*, *Web Development*), detailed breakdown modal dialogs, and repository placeholders.
- **Education & Credentials Timeline:** Highlighting B.Tech in CSE-DS from CMR Technical Campus with academic merit (7.85 CGPA).
- **Verified Certifications:** Showcasing Salesforce, Cisco Networking Academy, Tata Forage, and Hexart AI Foundation credentials.
- **Interactive Resume Suite:** Live in-browser resume viewer with instant print capability and direct PDF download.
- **Validated Contact System:** Client-side form verification, toast notification alerts, quick email copy button, and secure EmailJS / backend readiness.
- **Zero-Failure Architecture:** Dual-engine design offering both a modular React + Vite codebase and a 100% self-contained static distribution that runs locally without external dependencies.

---

## 📂 Project Architecture

```
dinesh-reddy-portfolio/
│
├── index.html                 # Production entry point & standalone distribution
├── resume.pdf                 # Resume download placeholder
├── package.json               # Vite + React project configuration
├── vite.config.js             # Vite build settings & dev server
├── tailwind.config.js         # Tailwind theme & design tokens
├── postcss.config.js          # PostCSS auto-prefixer setup
├── vercel.json                # Vercel zero-config deployment manifest
├── .gitignore                 # Standard clean git exclusions
│
├── assets/                    # Assets for standalone zero-install distribution
│   ├── css/
│   │   └── portfolio.css      # Custom stylesheet with glassmorphism & gradients
│   └── js/
│       └── portfolio.js       # Core interactivity, filters, modals, typing effect
│
├── src/                       # React + Vite component hierarchy
│   ├── main.jsx               # React 18 DOM mount point
│   ├── App.jsx                # Root app component coordinating sections
│   ├── index.css              # Tailwind imports & custom utilities
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all personal info
│   └── components/
│       ├── Navbar.jsx         # Sticky navigation with active section indicator
│       ├── ThemeToggle.jsx    # Dark/light theme switcher
│       ├── ScrollProgress.jsx # Top scroll depth reading bar
│       ├── BackgroundEffect.jsx# Cyber grid & glowing gradient orbs
│       ├── Hero.jsx           # Landing section with typing role effect
│       ├── About.jsx          # Bio story, career objective & 6 info cards
│       ├── Skills.jsx         # Categorized skills matrix
│       ├── Projects.jsx       # Interactive showcase with category filters
│       ├── ProjectModal.jsx   # Detailed project overview dialog
│       ├── Education.jsx      # University timeline (CMR Technical Campus)
│       ├── Certifications.jsx # 4 verified credential cards
│       ├── CertificateModal.jsx# Verification dialog
│       ├── Resume.jsx         # Resume showcase & download button
│       ├── ResumeModal.jsx    # Full printable resume preview
│       ├── Contact.jsx        # Validated message form & social cards
│       └── Footer.jsx         # Quick links, copyright & back-to-top
│
└── public/
    └── resume.pdf             # Public static resume document
```

---

## 🚀 How to Run Locally

### Option 1: Instant Run with Python (Zero-Install, Works Immediately)

No npm download needed! You can run the website right now:

```bash
# Navigate to the project directory
cd "C:\Users\chada dinesh reddy\.gemini\antigravity\scratch\dinesh-reddy-portfolio"

# Launch Python local web server
python -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

### Option 2: Run with Node.js & Vite (Development Server)

When connected to the internet:

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite hot-reloading dev server
npm run dev

# 3. Create production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

## ✏️ How to Customize Your Information

All information is consolidated into one easy-to-edit file:
`src/data/portfolioData.js` (and mirrored in `assets/js/portfolio.js`).

### Updating Links & Email:
Open `src/data/portfolioData.js` and modify:
- **Email:** `contact.email = "your-real-email@gmail.com"`
- **LinkedIn:** `contact.linkedin = "https://linkedin.com/in/your-username"`
- **GitHub:** `contact.github = "https://github.com/your-username"`
- **GitHub Project Repositories:** Update `githubUrl` inside `projectsData`.

### Replacing the Resume PDF:
Drop your updated resume PDF into `public/resume.pdf` (and replace `resume.pdf` in the root).

---

## 🌐 Deploying to GitHub

1. Initialize git and commit your files:
```bash
git init
git add .
git commit -m "feat: initial commit of Dinesh Reddy Chada portfolio website"
```

2. Create a new repository named `portfolio` on GitHub.

3. Push your repository:
```bash
git branch -M main
git remote add origin https://github.com/dineshreddychada/portfolio.git
git push -u origin main
```

---

## ☁️ Deploying to Vercel (Recommended)

1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New Project"** and select your `portfolio` repository.
3. Vercel automatically detects the configuration via `vercel.json` and builds your website instantly.
4. Click **Deploy**! Your portfolio will be live on `https://dinesh-reddy-portfolio.vercel.app` with free SSL.

---

## 📄 License & Attribution

Designed and built for **Dinesh Reddy Chada**.  
© 2026 Dinesh Reddy Chada. All Rights Reserved.
