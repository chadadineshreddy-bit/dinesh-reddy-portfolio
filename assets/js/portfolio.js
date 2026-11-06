/**
 * PORTFOLIO CLIENT APPLICATION JAVASCRIPT
 * Dinesh Reddy Chada - Professional Data Analyst Portfolio
 */

// Portfolio Data Repository
const portfolioData = {
  personal: {
    name: "Dinesh Reddy Chada",
    initials: "DC",
    title: "Aspiring Data Analyst | Data Science Enthusiast",
    email: "chadadineshreddy@gmail.com",
    phone: "+91 6303219304",
    linkedin: "https://www.linkedin.com/in/dinesh-reddy-chada",
    github: "https://github.com/dineshreddychada",
    location: "Hyderabad, Telangana, India",
    degree: "B.Tech – Computer Science and Data Science (CSE-DS)",
    college: "CMR Technical Campus",
    cgpa: "7.85 / 10"
  },

  projects: [
    {
      id: 1,
      title: "Crop Yield Prediction with Climate and Soil Data",
      category: "Data Science",
      domain: "Agriculture Analytics & ML",
      image: "assets/images/crop-yield-analytics.png",
      tagline: "Machine Learning Regression for Agricultural Yield Forecasting",
      description: "Developed a machine learning-based system to predict crop yields using historical climate and soil parameters. The pipeline analyzes environmental conditions and soil nutrient ratios (NPK, pH, rainfall, temperature) to forecast productivity, empowering farmers and agricultural planners with actionable data-driven insights.",
      technologies: ["Python", "Machine Learning", "Random Forest", "Scikit-learn", "Pandas", "NumPy", "Tkinter"],
      features: [
        "Automated dataset ingestion, validation, and multi-variable schema checking",
        "Outlier remediation and missing value imputation across regional climatic indicators",
        "Correlation analysis isolating high-impact features (soil nitrogen, rainfall seasonality)",
        "Random Forest Regressor training with hyperparameter tuning against baseline linear models",
        "Yield forecasting across key regional crops with high predictive fidelity",
        "Rigorous performance validation utilizing RMSE, MSE, and R² evaluation metrics"
      ],
      githubUrl: "https://github.com/dineshreddychada/crop-yield-prediction",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "HireAI – Resume Screening & Candidate Shortlisting Using NLP",
      category: "Data Science",
      domain: "NLP & Talent Analytics",
      image: "assets/images/hireai-screening.jpg",
      tagline: "Semantic Document Matching Engine for Talent Acquisition",
      description: "An intelligent resume screening platform designed to parse unstructured candidate resumes, compute dense contextual embeddings, and calculate semantic similarity against job descriptions using vector cosine similarity to eliminate manual screening bottlenecks.",
      technologies: ["Python", "NLP", "Machine Learning", "Sentence Transformers", "Scikit-learn", "Pandas"],
      features: [
        "Automated multi-format resume text extraction supporting PDF and Word documents",
        "Contextual sentence-level embeddings generated with Sentence Transformers",
        "Vector cosine similarity scoring for objective qualification ranking",
        "Multi-attribute candidate evaluation incorporating required and preferred skill weights",
        "Streamlined candidate shortlisting interface with exportable evaluation summaries"
      ],
      githubUrl: "https://github.com/dineshreddychada/hire-ai-screening",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "AI Resume Analyzer",
      category: "Data Analytics",
      domain: "Data Extraction & Processing",
      image: "assets/images/resume-analyzer.jpg",
      tagline: "Intelligent Resume Content & Skill Taxonomy Parser",
      description: "An analytical tool that ingests candidate resumes, extracts structured information (programming languages, frameworks, databases, education), and evaluates resume quality and keyword density to provide constructive feedback for job seekers.",
      technologies: ["Python", "NLP", "Data Extraction", "RegEx", "Streamlit", "Pandas"],
      features: [
        "Pattern-based and semantic entity recognition for resume attribute extraction",
        "Categorized skill taxonomy mapping across technical and soft competency categories",
        "ATS compatibility analysis and keyword density scoring",
        "Interactive Streamlit dashboard displaying visual skill breakdowns and formatting recommendations"
      ],
      githubUrl: "https://github.com/dineshreddychada/ai-resume-analyzer",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "E-Commerce Food Website",
      category: "Web Development",
      domain: "Frontend Architecture",
      image: "assets/images/food-ecommerce.jpg",
      tagline: "Responsive Online Food Ordering & Cart Management UI",
      description: "Designed and developed an interactive, responsive online food ordering interface with category navigation, real-time cart state management, and seamless mobile interactions.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "LocalStorage"],
      features: [
        "Mobile-first responsive architecture tested across mobile, tablet, and desktop viewports",
        "Dynamic food catalogue with instant category filtering and search",
        "Client-side cart management with quantity adjustment and persistent local storage",
        "Accessible modal dialogues, item review overlays, and simulated checkout flow"
      ],
      githubUrl: "https://github.com/dineshreddychada/ecommerce-food-website",
      liveUrl: "#"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Salesforce Certification",
      issuer: "Salesforce",
      badge: "Cloud & CRM Workflows",
      description: "Foundational training covering cloud architecture, business logic, customer relationship data management, automation workflows, and enterprise data organization in Salesforce.",
      credentialId: "SF-DATA-2024",
      credentialUrl: "#"
    },
    {
      id: 2,
      title: "Cisco Networking Academy",
      issuer: "Cisco Networking Academy",
      badge: "Networking Fundamentals",
      description: "Comprehensive fundamentals of computer networks, IP addressing schemas, protocol suites, data transmission, packet routing, and network security foundations.",
      credentialId: "CISCO-NET-2023",
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "Tata Forage Virtual Experience",
      issuer: "Tata / Forage",
      badge: "Data Visualization & Analysis",
      description: "Practical simulation tackling executive business scenarios: translating stakeholder questions into quantitative metrics, designing C-suite visualization dashboards, and presenting data-driven recommendations.",
      credentialId: "TATA-FORAGE-DATA-2023",
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "Hexart AI Foundation",
      issuer: "Hexart AI",
      badge: "Artificial Intelligence",
      description: "Foundational concepts of artificial intelligence, machine learning pipelines, feature representations, ethical AI practices, and practical problem formulation using real data.",
      credentialId: "HEXART-AI-2023",
      credentialUrl: "#"
    }
  ]
};

// Initialization on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initNavigation();
  initProjectFilters();
  initContactForm();
});

// ==========================================
// 1. Scroll Progress & Sticky Navbar
// ==========================================
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  const navbar = document.getElementById("main-navbar");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }

    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }, { passive: true });
}

// ==========================================
// 2. Navigation & Smooth Section Tracking
// ==========================================
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav a");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }

  // Smooth scroll and mobile menu close
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          if (mobileNav) mobileNav.classList.remove("open");
        }
      }
    });
  });

  // Active section tracking via IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================
// 3. Data Analytics & Visualization Tab Switcher
// ==========================================
window.switchDashboardTab = function(tabId) {
  // Update nav buttons
  const buttons = document.querySelectorAll(".d-tab-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update panels
  const panels = document.querySelectorAll(".dashboard-view-panel");
  panels.forEach(panel => {
    if (panel.id === `${tabId}-panel`) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
};

// ==========================================
// 4. Project Category Filtering
// ==========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-case-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "All" || cardCat === category) {
          card.style.display = "grid";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ==========================================
// 5. Modal Dialog Handlers
// ==========================================

// Open Project Details Modal
window.openProjectModal = function(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const title = document.getElementById("pm-title");
  const badge = document.getElementById("pm-badge");
  const tagline = document.getElementById("pm-tagline");
  const desc = document.getElementById("pm-desc");
  const featuresList = document.getElementById("pm-features");
  const techList = document.getElementById("pm-tech");
  const githubLink = document.getElementById("pm-github");

  if (title) title.textContent = project.title;
  if (badge) badge.textContent = `${project.category} • ${project.domain}`;
  if (tagline) tagline.textContent = project.tagline;
  if (desc) desc.textContent = project.description;

  if (featuresList) {
    featuresList.innerHTML = project.features.map(f => `
      <li style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;font-size:0.9rem;color:var(--text-secondary);line-height:1.6;">
        <span style="color:var(--teal-primary);font-weight:700;line-height:1.4;">✓</span>
        <span>${f}</span>
      </li>
    `).join("");
  }

  if (techList) {
    techList.innerHTML = project.technologies.map(t => `
      <span class="tech-tag">${t}</span>
    `).join("");
  }

  if (githubLink) {
    githubLink.href = project.githubUrl;
  }

  if (modal) modal.classList.add("open");
};

// Open Certificate Preview Modal
window.openCertModal = function(certId) {
  const cert = portfolioData.certifications.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById("cert-modal");
  const title = document.getElementById("cm-title");
  const issuer = document.getElementById("cm-issuer");
  const desc = document.getElementById("cm-desc");
  const idEl = document.getElementById("cm-id");

  if (title) title.textContent = cert.title;
  if (issuer) issuer.textContent = `Issued by ${cert.issuer} • ${cert.badge}`;
  if (desc) desc.textContent = cert.description;
  if (idEl) idEl.textContent = cert.credentialId;

  if (modal) modal.classList.add("open");
};

// Open Resume Preview Modal
window.openResumeModal = function() {
  const modal = document.getElementById("resume-modal");
  if (modal) modal.classList.add("open");
};

// Close all active modals
window.closeModals = function() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
};

// Trigger simulated resume download
window.downloadResume = function() {
  const resumeUrl = "resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Dinesh_Reddy_Chada_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Print resume
window.printResume = function() {
  window.print();
};

// Copy email address helper with feedback toast
window.copyEmailAddress = function() {
  navigator.clipboard.writeText(portfolioData.personal.email).then(() => {
    const feedback = document.getElementById("copy-email-toast");
    if (feedback) {
      feedback.style.display = "inline";
      setTimeout(() => feedback.style.display = "none", 3000);
    }
  });
};

// Copy phone number helper with feedback toast
window.copyPhoneNumber = function() {
  navigator.clipboard.writeText(portfolioData.personal.phone).then(() => {
    const feedback = document.getElementById("copy-phone-toast");
    if (feedback) {
      feedback.style.display = "inline";
      setTimeout(() => feedback.style.display = "none", 3000);
    }
  });
};

// ==========================================
// 6. Contact Form Validation & Handler
// ==========================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    let hasError = false;

    // Validate Name
    if (!name) {
      showError("name-error", "Full name is required.");
      hasError = true;
    } else {
      hideError("name-error");
    }

    // Validate Email
    if (!email) {
      showError("email-error", "Email address is required.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email-error", "Please provide a valid email format.");
      hasError = true;
    } else {
      hideError("email-error");
    }

    // Validate Subject
    if (!subject) {
      showError("subject-error", "Subject is required.");
      hasError = true;
    } else {
      hideError("subject-error");
    }

    // Validate Message
    if (!message || message.length < 10) {
      showError("message-error", "Message must be at least 10 characters long.");
      hasError = true;
    } else {
      hideError("message-error");
    }

    if (hasError) return;

    // Submission State Simulation
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Sending Message...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();

      const successToast = document.getElementById("form-success-toast");
      if (successToast) {
        successToast.style.display = "block";
        setTimeout(() => successToast.style.display = "none", 8000);
      }
    }, 1200);
  });
}

function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = message;
    el.style.display = "block";
  }
}

function hideError(elementId) {
  const el = document.getElementById(elementId);
  if (el) el.style.display = "none";
}
