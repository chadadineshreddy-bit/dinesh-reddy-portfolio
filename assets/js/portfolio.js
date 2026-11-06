/**
 * PORTFOLIO CLIENT APPLICATION JAVASCRIPT
 * Dinesh Reddy Chada - Professional Data Analyst Portfolio
 * Interactive Architecture: Precision Custom Cursor, Telemetry Simulation,
 * Bulletproof Tabs & Filters, Modal Controllers, and Smooth Navigation.
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

// ==========================================
// INITIALIZATION LIFECYCLE (SAFE & IMMEDIATE)
// ==========================================
function initApp() {
  initCustomCursor();
  initScrollProgress();
  initNavigation();
  initDashboardTabs();
  initProjectFilters();
  initContactForm();
  initTerminalSimulation();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ==========================================
// 1. CUSTOM PRECISION INTERACTIVE CURSOR
// ==========================================
function initCustomCursor() {
  const cursorDot = document.getElementById("cursor-dot");
  const cursorRing = document.getElementById("cursor-ring");
  if (!cursorDot || !cursorRing) return;

  if (window.matchMedia("(pointer: coarse)").matches) {
    cursorDot.style.display = "none";
    cursorRing.style.display = "none";
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }, { passive: true });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Bind hover states to all interactive elements
  function bindHover(elements) {
    elements.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursorDot.classList.add("hover");
        cursorRing.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("hover");
        cursorRing.classList.remove("hover");
      });
    });
  }

  const targets = document.querySelectorAll(
    "a, button, input, textarea, .d-tab-btn, .filter-btn, .kpi-card, .project-case-card, .skill-category-card, .cert-editorial-card, .contact-tile, .gauge-box"
  );
  bindHover(targets);

  window.addEventListener("mousedown", () => {
    cursorDot.classList.add("click");
    cursorRing.classList.add("click");
  });

  window.addEventListener("mouseup", () => {
    cursorDot.classList.remove("click");
    cursorRing.classList.remove("click");
  });
}

// ==========================================
// 2. SCROLL PROGRESS & DYNAMIC NAVBAR
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
      if (window.scrollY > 25) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }, { passive: true });
}

// ==========================================
// 3. SMOOTH NAVIGATION & ACTIVE SPY
// ==========================================
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav a");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileNav.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!mobileNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileNav.classList.remove("open");
      }
    });
  }

  // Smooth Scrolling with sticky header compensation
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });

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
  }, { threshold: 0.25 });

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================
// 4. DATA ANALYTICS TAB SWITCHER (BULLETPROOF)
// ==========================================
window.switchDashboardTab = function(tabId) {
  const buttons = document.querySelectorAll(".d-tab-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const panels = document.querySelectorAll(".dashboard-view-panel");
  panels.forEach(panel => {
    if (panel.id === `${tabId}-panel`) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
};

function initDashboardTabs() {
  const tabButtons = document.querySelectorAll(".d-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      const tabId = this.getAttribute("data-tab");
      if (tabId) {
        window.switchDashboardTab(tabId);
      }
    });
  });
}

// ==========================================
// 5. INTERACTIVE HERO TELEMETRY SIMULATOR
// ==========================================
let simCount = 1;
window.simulateQuery = function() {
  const consoleEl = document.getElementById("terminal-console-output");
  const accuracyEl = document.getElementById("gauge-accuracy");
  const latencyEl = document.getElementById("gauge-latency");
  const precisionEl = document.getElementById("gauge-r2");

  if (!consoleEl) return;

  const queries = [
    "[QUERY] EXPLAIN ANALYZE SELECT * FROM crop_features WHERE soil_ph BETWEEN 6.0 AND 7.5;",
    "[MODEL] Random Forest Regressor cross-validation iteration completed (Fold 5/5).",
    "[NLP] SentenceTransformers: Tokenized 1,240 candidate resume entities. Cosine score: 0.941",
    "[ETL] Ingestion pipeline synced: 42,000 telemetry datapoints normalized in 8.4ms.",
    "[VALIDATION] Chi-Square & ANOVA statistical significance verified (p < 0.001)."
  ];

  const randomQuery = queries[simCount % queries.length];
  simCount++;

  // Update console log
  const newLog = document.createElement("div");
  newLog.style.color = "#38BDF8";
  newLog.textContent = `> ${randomQuery}`;
  consoleEl.appendChild(newLog);
  consoleEl.scrollTop = consoleEl.scrollHeight;

  // Pulse metrics slightly for live feel
  if (latencyEl) {
    const lat = Math.floor(Math.random() * 6) + 10;
    latencyEl.textContent = `${lat}ms`;
  }
  if (accuracyEl) {
    accuracyEl.textContent = "99.9%";
  }
};

function initTerminalSimulation() {
  const btn = document.getElementById("run-telemetry-btn");
  if (btn) {
    btn.addEventListener("click", window.simulateQuery);
  }
}

// ==========================================
// 6. PROJECT CATEGORY FILTERING
// ==========================================
window.filterProjects = function(category) {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    if (btn.getAttribute("data-filter") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const projectCards = document.querySelectorAll(".project-case-card");
  projectCards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "All" || cardCat === category) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }
  });
};

function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const category = this.getAttribute("data-filter");
      if (category) {
        window.filterProjects(category);
      }
    });
  });
}

// ==========================================
// 7. MODAL CONTROLLERS (PROJECT, CERT, RESUME)
// ==========================================
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
      <li style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;font-size:0.88rem;color:#CBD5E1;line-height:1.6;">
        <span style="color:#14B8A6;font-weight:700;">✓</span>
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

window.openResumeModal = function() {
  const modal = document.getElementById("resume-modal");
  if (modal) modal.classList.add("open");
};

window.closeModals = function() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
};

// Download Resume
window.downloadResume = function() {
  const resumeUrl = "resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Dinesh_Reddy_Chada_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("Resume download initiated! File: Dinesh_Reddy_Chada_Resume.pdf");
};

// Clipboard Helpers with Robust Fallback
window.copyEmailAddress = function() {
  const text = portfolioData.personal.email;
  copyToClipboard(text, "copy-email-toast");
};

window.copyPhoneNumber = function() {
  const text = portfolioData.personal.phone;
  copyToClipboard(text, "copy-phone-toast");
};

function copyToClipboard(text, toastId) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(toastId);
    }).catch(() => {
      fallbackCopy(text, toastId);
    });
  } else {
    fallbackCopy(text, toastId);
  }
}

function fallbackCopy(text, toastId) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(toastId);
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}

function showToast(toastId) {
  const el = document.getElementById(toastId);
  if (el) {
    el.style.display = "inline";
    setTimeout(() => {
      el.style.display = "none";
    }, 3000);
  }
}

// ==========================================
// 8. CONTACT FORM HANDLER
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

    if (!name) {
      showError("name-error", "Full name is required.");
      hasError = true;
    } else {
      hideError("name-error");
    }

    if (!email) {
      showError("email-error", "Email address is required.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email-error", "Please provide a valid email format.");
      hasError = true;
    } else {
      hideError("email-error");
    }

    if (!subject) {
      showError("subject-error", "Subject is required.");
      hasError = true;
    } else {
      hideError("subject-error");
    }

    if (!message || message.length < 10) {
      showError("message-error", "Message must be at least 10 characters long.");
      hasError = true;
    } else {
      hideError("message-error");
    }

    if (hasError) return;

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
    }, 1000);
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
