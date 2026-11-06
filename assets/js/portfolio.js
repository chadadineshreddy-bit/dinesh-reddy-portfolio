/**
 * DINESH REDDY CHADA - PROFESSIONAL DATA ANALYST PORTFOLIO
 * Core Client Application Script (High Performance, Bulletproof Interactive Engine)
 * No gimmick cursors. 100% reliable click events, tabs, filters, modals, and downloads.
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
    degree: "B.Tech in Computer Science and Data Science (CSE-DS)",
    college: "CMR Technical Campus",
    cgpa: "7.85 / 10"
  },

  projects: [
    {
      id: 1,
      title: "Crop Yield Prediction with Climate & Soil Data",
      category: "Data Science",
      domain: "Agriculture Analytics & ML",
      image: "assets/images/crop-yield-analytics.png",
      tagline: "Machine Learning Regression for Agricultural Yield Forecasting",
      description: "Developed an end-to-end predictive machine learning model to estimate crop harvest yields based on regional climate patterns and soil nutrient composition. By modeling complex interactions between rainfall seasonality, temperature variations, and soil chemistry (NPK, pH), this solution enables data-driven agricultural decision making.",
      technologies: ["Python", "Scikit-Learn", "Random Forest", "Pandas", "NumPy", "Tkinter"],
      features: [
        "Automated multi-variable dataset cleaning, schema validation, and missing value imputation",
        "Exploratory Data Analysis (EDA) isolating key harvest yield drivers (soil nitrogen, rainfall seasonality)",
        "Trained and evaluated multiple regression architectures (Random Forest Regressor, Decision Trees, Linear Baseline)",
        "Hyperparameter optimization using GridSearchCV with cross-validation",
        "Predictive accuracy verified with RMSE, MAE, and R-squared evaluation metrics",
        "Interactive desktop UI enabling users to input soil parameters and view instant yield projections"
      ],
      githubUrl: "https://github.com/dineshreddychada/crop-yield-prediction"
    },
    {
      id: 2,
      title: "HireAI — Resume Screening & Shortlisting Using NLP",
      category: "Data Science",
      domain: "NLP & Talent Analytics",
      image: "assets/images/hireai-screening.jpg",
      tagline: "Semantic Resume Matching Engine for Talent Acquisition",
      description: "Built an intelligent applicant screening engine that parses candidate resumes, computes contextual sentence embeddings, and calculates semantic similarity against job descriptions using vector cosine similarity to eliminate manual screening bottlenecks.",
      technologies: ["Python", "NLP", "Sentence Transformers", "Scikit-learn", "Pandas", "PDFMiner"],
      features: [
        "Automated resume ingestion supporting both PDF and DOCX file structures",
        "Context-aware semantic embeddings generated using Sentence Transformers",
        "Vector cosine similarity calculation for unbiased, objective candidate ranking",
        "Weighted scoring mechanism balancing required core skills and preferred technical qualifications",
        "Exportable candidate evaluation reports for HR and hiring teams"
      ],
      githubUrl: "https://github.com/dineshreddychada/hire-ai-screening"
    },
    {
      id: 3,
      title: "AI Resume Content Analyzer",
      category: "Data Analytics",
      domain: "Data Extraction & Text Analytics",
      image: "assets/images/resume-analyzer.jpg",
      tagline: "Automated Skill Taxonomy & ATS Optimization Engine",
      description: "Engineered an analytical tool that extracts structured information from resumes (technical languages, libraries, databases, education) and measures resume quality, keyword density, and formatting against target job roles.",
      technologies: ["Python", "NLP", "RegEx", "Streamlit", "Pandas", "Data Extraction"],
      features: [
        "Pattern recognition and regular expression pipelines for accurate attribute extraction",
        "Comprehensive skill taxonomy mapping across technical, analytical, and soft competencies",
        "ATS compatibility analysis measuring keyword alignment and section hierarchy",
        "Interactive Streamlit web dashboard presenting visual skill match scores and recommendations"
      ],
      githubUrl: "https://github.com/dineshreddychada/ai-resume-analyzer"
    },
    {
      id: 4,
      title: "Responsive Food Ordering Web Platform",
      category: "Web Development",
      domain: "Frontend Architecture & UI",
      image: "assets/images/food-ecommerce.jpg",
      tagline: "Interactive E-Commerce Ordering System with Real-Time Cart State",
      description: "Designed and engineered a modern, fully responsive online food ordering interface with instant category filtering, real-time cart state management, and optimized mobile experiences.",
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "LocalStorage", "Responsive UI"],
      features: [
        "Mobile-first responsive layout tested across mobile, tablet, and desktop viewports",
        "Dynamic menu catalogue with category filtering and real-time search",
        "Client-side cart calculation with quantity adjustment and persistent local storage",
        "Accessible modal overlays, item previews, and simulated checkout order flow"
      ],
      githubUrl: "https://github.com/dineshreddychada/ecommerce-food-website"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "Salesforce Certification",
      issuer: "Salesforce",
      badge: "Cloud & CRM Workflows",
      description: "Foundational training covering cloud architecture, business logic, customer relationship management, automation workflows, and enterprise data organization in Salesforce.",
      credentialId: "SF-DATA-2024"
    },
    {
      id: 2,
      title: "Cisco Networking Academy",
      issuer: "Cisco Networking Academy",
      badge: "Networking Fundamentals",
      description: "Comprehensive fundamentals of computer networks, IP addressing schemas, protocol suites, data transmission, packet routing, and network security foundations.",
      credentialId: "CISCO-NET-2023"
    },
    {
      id: 3,
      title: "Tata Forage Virtual Experience",
      issuer: "Tata Group / Forage",
      badge: "Data Visualization & Analysis",
      description: "Practical simulation tackling executive business scenarios: translating stakeholder questions into quantitative metrics, designing C-suite visualization dashboards, and presenting data-driven recommendations.",
      credentialId: "TATA-FORAGE-DATA-2023"
    },
    {
      id: 4,
      title: "Hexart AI Foundation",
      issuer: "Hexart AI",
      badge: "Artificial Intelligence",
      description: "Foundational concepts of artificial intelligence, machine learning pipelines, feature representations, ethical AI practices, and practical problem formulation using real data.",
      credentialId: "HEXART-AI-2023"
    }
  ]
};

// =============================================================================
// GLOBAL INTERACTIVE CONTROLLERS (HOISTED & BOUND TO WINDOW)
// =============================================================================

/**
 * 1. Switch Analytics Dashboard Tabs (Sales, Customer, KPI, Pipeline)
 */
function switchDashboardTab(tabId) {
  // Normalize tabId (support customer/customers, kpi/kpis)
  let cleanId = tabId.toLowerCase().trim();
  if (cleanId === "customers") cleanId = "customer";
  if (cleanId === "kpis") cleanId = "kpi";

  // Update Tab Buttons
  const tabButtons = document.querySelectorAll(".d-tab-btn");
  tabButtons.forEach(btn => {
    const btnTab = (btn.getAttribute("data-tab") || "").toLowerCase().trim();
    const matches = btnTab === cleanId || 
                    (cleanId === "customer" && btnTab === "customers") || 
                    (cleanId === "kpi" && btnTab === "kpis");
    if (matches) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update View Panels
  const panels = document.querySelectorAll(".dashboard-view-panel");
  panels.forEach(panel => {
    const pId = panel.id.toLowerCase();
    const isTarget = pId === `${cleanId}-panel` || 
                     (cleanId === "customer" && pId === "customers-panel") ||
                     (cleanId === "kpi" && pId === "kpis-panel");
    if (isTarget) {
      panel.classList.add("active");
      panel.style.display = "block";
    } else {
      panel.classList.remove("active");
      panel.style.display = "none";
    }
  });
}
window.switchDashboardTab = switchDashboardTab;

/**
 * 2. Filter Projects by Category
 */
function filterProjects(category) {
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
}
window.filterProjects = filterProjects;

/**
 * 3. Open Project Case Study Modal
 */
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === Number(projectId));
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
      <li style="display:flex;align-items:flex-start;gap:10px;margin-bottom:8px;font-size:0.88rem;color:#334155;line-height:1.6;">
        <span style="color:#0D9488;font-weight:700;">✓</span>
        <span>${f}</span>
      </li>
    `).join("");
  }

  if (techList) {
    techList.innerHTML = project.technologies.map(t => `
      <span class="tech-tag" style="background:#F1F5F9;color:#0F172A;border:1px solid #CBD5E1;font-weight:600;">${t}</span>
    `).join("");
  }

  if (githubLink) {
    githubLink.href = project.githubUrl;
  }

  if (modal) {
    modal.classList.add("open");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
window.openProjectModal = openProjectModal;

/**
 * 4. Open Certification Details Modal
 */
function openCertModal(certId) {
  const cert = portfolioData.certifications.find(c => c.id === Number(certId));
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

  if (modal) {
    modal.classList.add("open");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
window.openCertModal = openCertModal;

/**
 * 5. Open Resume Preview Modal
 */
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("open");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}
window.openResumeModal = openResumeModal;

/**
 * 6. Close All Open Modals
 */
function closeModals() {
  const modals = document.querySelectorAll(".modal-overlay");
  modals.forEach(m => {
    m.classList.remove("open");
    m.style.display = "none";
  });
  document.body.style.overflow = "";
}
window.closeModals = closeModals;

/**
 * 7. Download Resume (Smooth and Toast-Confirmed)
 */
function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Dinesh_Reddy_Chada_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showGlobalToast("✓ Resume download started!");
}
window.downloadResume = downloadResume;

/**
 * 8. Copy Email to Clipboard
 */
function copyEmailAddress() {
  const email = portfolioData.personal.email;
  copyTextWithFeedback(email, "copy-email-toast");
}
window.copyEmailAddress = copyEmailAddress;

/**
 * 9. Copy Phone Number to Clipboard
 */
function copyPhoneNumber() {
  const phone = portfolioData.personal.phone;
  copyTextWithFeedback(phone, "copy-phone-toast");
}
window.copyPhoneNumber = copyPhoneNumber;

/**
 * Helper: Copy text with fallback
 */
function copyTextWithFeedback(text, toastId) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToastBadge(toastId);
    }).catch(() => {
      fallbackCopy(text, toastId);
    });
  } else {
    fallbackCopy(text, toastId);
  }
}

function fallbackCopy(text, toastId) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    showToastBadge(toastId);
  } catch (err) {
    console.error("Failed to copy", err);
  }
  document.body.removeChild(tempInput);
}

function showToastBadge(toastId) {
  const badge = document.getElementById(toastId);
  if (badge) {
    badge.style.display = "inline";
    badge.textContent = "Copied!";
    setTimeout(() => {
      badge.style.display = "none";
    }, 2500);
  }
}

/**
 * 10. Toggle Mobile Menu Drawer
 */
function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  if (drawer) {
    drawer.classList.toggle("open");
  }
}
window.toggleMobileMenu = toggleMobileMenu;

/**
 * 11. Handle Contact Form Submission
 */
function handleContactSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const form = document.getElementById("contact-form");
  if (!form) return false;

  const name = (form.name && form.name.value || "").trim();
  const email = (form.email && form.email.value || "").trim();
  const subject = (form.subject && form.subject.value || "").trim();
  const message = (form.message && form.message.value || "").trim();

  let valid = true;

  // Name
  const nameErr = document.getElementById("name-error");
  if (!name) {
    if (nameErr) nameErr.style.display = "block";
    valid = false;
  } else {
    if (nameErr) nameErr.style.display = "none";
  }

  // Email
  const emailErr = document.getElementById("email-error");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (emailErr) emailErr.style.display = "block";
    valid = false;
  } else {
    if (emailErr) emailErr.style.display = "none";
  }

  // Subject
  const subjectErr = document.getElementById("subject-error");
  if (!subject) {
    if (subjectErr) subjectErr.style.display = "block";
    valid = false;
  } else {
    if (subjectErr) subjectErr.style.display = "none";
  }

  // Message
  const msgErr = document.getElementById("message-error");
  if (!message) {
    if (msgErr) msgErr.style.display = "block";
    valid = false;
  } else {
    if (msgErr) msgErr.style.display = "none";
  }

  if (!valid) return false;

  // Success state
  const toast = document.getElementById("form-toast");
  if (toast) {
    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 5000);
  }

  form.reset();
  return false;
}
window.handleContactSubmit = handleContactSubmit;

/**
 * 12. Simulate Query in Analytics Showcase
 */
let queryIteration = 1;
function simulateQuery() {
  const consoleEl = document.getElementById("terminal-console-output");
  const latencyEl = document.getElementById("gauge-latency");
  const accuracyEl = document.getElementById("gauge-accuracy");

  const queryPool = [
    "[QUERY] EXPLAIN ANALYZE SELECT * FROM crop_features WHERE soil_ph BETWEEN 6.0 AND 7.5;",
    "[MODEL] Random Forest Regressor cross-validation completed (Fold 5/5, R²: 0.941).",
    "[NLP] SentenceTransformers: Tokenized 1,240 candidate resume entities. Cosine score: 0.941",
    "[ETL] Ingestion pipeline synced: 42,000 telemetry datapoints normalized in 8.4ms.",
    "[VALIDATION] Chi-Square & ANOVA statistical significance verified (p < 0.001)."
  ];

  const nextLog = queryPool[queryIteration % queryPool.length];
  queryIteration++;

  if (consoleEl) {
    const logItem = document.createElement("div");
    logItem.style.color = "#0D9488";
    logItem.style.fontFamily = "var(--font-mono)";
    logItem.style.fontSize = "0.78rem";
    logItem.style.marginTop = "4px";
    logItem.textContent = `> ${nextLog}`;
    consoleEl.appendChild(logItem);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  if (latencyEl) {
    const lat = Math.floor(Math.random() * 5) + 9;
    latencyEl.textContent = `${lat}ms`;
  }
  if (accuracyEl) {
    accuracyEl.textContent = "99.9%";
  }
}
window.simulateQuery = simulateQuery;

/**
 * Global Floating Notification Toast
 */
function showGlobalToast(message) {
  let toastEl = document.getElementById("global-notification-toast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.id = "global-notification-toast";
    toastEl.style.position = "fixed";
    toastEl.style.bottom = "24px";
    toastEl.style.right = "24px";
    toastEl.style.background = "#0F172A";
    toastEl.style.color = "#FFFFFF";
    toastEl.style.padding = "12px 20px";
    toastEl.style.borderRadius = "8px";
    toastEl.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    toastEl.style.fontSize = "0.88rem";
    toastEl.style.fontWeight = "600";
    toastEl.style.zIndex = "999999";
    toastEl.style.transition = "all 0.3s ease";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  toastEl.style.opacity = "1";
  toastEl.style.transform = "translateY(0)";

  setTimeout(() => {
    toastEl.style.opacity = "0";
    toastEl.style.transform = "translateY(10px)";
  }, 3500);
}

// =============================================================================
// DOM READY INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", function() {
  // 1. Scroll Progress & Sticky Navbar Shadow
  const progressBar = document.getElementById("scroll-progress");
  const navbar = document.getElementById("main-navbar");

  window.addEventListener("scroll", function() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const pct = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${pct}%`;
    }

    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }, { passive: true });

  // 2. Active Section Spy for Navigation Links
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav a");

  window.addEventListener("scroll", function() {
    let current = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute("id");
      }
    });

    if (current) {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }, { passive: true });

  // 3. Close Mobile Menu on Link Click
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileDrawer) mobileDrawer.classList.remove("open");
    });
  });

  // 4. Modal Backdrop and Escape Key Listeners
  window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeModals();
    }
  });

  // 5. Ensure First Tab is Active by Default
  switchDashboardTab("sales");
});
