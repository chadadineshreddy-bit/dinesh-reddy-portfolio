/**
 * PORTFOLIO CLIENT APPLICATION JAVASCRIPT
 * Dinesh Reddy Chada - Personal Portfolio
 */

// Portfolio Data Repository
const portfolioData = {
  personal: {
    name: "Dinesh Reddy Chada",
    initials: "DC",
    title: "Aspiring Data Analyst | Data Science Enthusiast | Python Developer",
    animatedTitles: [
      "Aspiring Data Analyst",
      "Python Developer",
      "Data Science Enthusiast",
      "Machine Learning Enthusiast"
    ],
    email: "chadadineshreddy@gmail.com",
    phone: "+91 6303219304",
    linkedin: "https://www.linkedin.com/in/dinesh-reddy-chada",
    github: "https://github.com/dineshreddychada",
    location: "Hyderabad, Telangana, India",
    degree: "B.Tech – CSE (Data Science)",
    college: "CMR Technical Campus",
    cgpa: "7.85 / 10"
  },

  projects: [
    {
      id: 1,
      title: "Crop Yield Prediction with Climate and Soil Data",
      category: "Data Science",
      badge: "ML & Agriculture",
      tagline: "ML-Driven Agricultural Yield Estimator",
      description: "Developed a machine learning-based system to predict crop yields using climate and soil-related parameters. The system analyzes environmental and soil information to estimate agricultural productivity, aiding farmers and policymakers with data-driven decision making.",
      technologies: ["Python", "Machine Learning", "Random Forest", "Scikit-learn", "Pandas", "NumPy", "Tkinter"],
      features: [
        "Dataset uploading and verification pipeline",
        "Automated data preprocessing & missing value handling",
        "Feature selection based on soil nutrients and rainfall correlations",
        "Random Forest Regressor machine learning model training",
        "Crop yield prediction for major regional crops",
        "Rigorous model evaluation using RMSE, MSE, and R² score metrics"
      ],
      githubUrl: "https://github.com/dineshreddychada/crop-yield-prediction",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "HireAI – Resume Screening & Candidate Shortlisting Using NLP",
      category: "Data Science",
      badge: "NLP & AI Screening",
      tagline: "Automated Semantic Resume Matching Engine",
      description: "An AI-powered resume screening system designed to analyze resumes and identify suitable candidates based on job requirements, significantly minimizing manual talent screening time and unconscious bias.",
      technologies: ["Python", "NLP", "Machine Learning", "Sentence Transformers", "Scikit-learn", "Pandas"],
      features: [
        "Automated resume text extraction from PDF and Word formats",
        "Semantic embedding generation with modern Sentence Transformers",
        "Cosine similarity candidate-to-job matching score",
        "Dynamic multi-attribute resume ranking",
        "Automated shortlisting workflow with exportable candidate rosters"
      ],
      githubUrl: "https://github.com/dineshreddychada/hire-ai-screening",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "AI Resume Analyzer",
      category: "Data Analytics",
      badge: "Data Processing",
      tagline: "Intelligent Resume Content & Skill Extraction",
      description: "An AI-based application that analyzes resume content, extracts relevant information like technical skills and education, and helps evaluate resumes objectively with actionable feedback.",
      technologies: ["Python", "NLP", "Machine Learning", "Data Processing", "RegEx", "Streamlit"],
      features: [
        "Automated resume parsing and entity recognition",
        "Categorized skill extraction (Programming, Databases, Frameworks)",
        "Resume quality scoring and keyword density feedback",
        "Candidate evaluation summary and visual skill distribution chart"
      ],
      githubUrl: "https://github.com/dineshreddychada/ai-resume-analyzer",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "E-Commerce Food Website",
      category: "Web Development",
      badge: "Frontend UI",
      tagline: "Interactive & Responsive Online Food Ordering UI",
      description: "Designed and developed an interactive food ordering website with a responsive user interface, intuitive category browsing, and seamless cart interaction.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Local Storage"],
      features: [
        "Mobile-first responsive user interface across all screen sizes",
        "Dynamic food product catalogue with category filters",
        "Client-side cart addition, quantity updates, and bill summary",
        "Smooth micro-interactions, modals, and checkout simulation"
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
      badge: "Cloud & CRM",
      description: "Foundational training covering cloud architecture, business logic, customer relationship management, and data management workflows on the Salesforce ecosystem.",
      credentialId: "SF-PLACEHOLDER",
      credentialUrl: "#"
    },
    {
      id: 2,
      title: "Cisco Networking Academy",
      issuer: "Cisco Networking Academy",
      badge: "Networking Fundamentals",
      description: "Comprehensive fundamentals of computer networks, IP addressing, protocols, data routing, switching, and network security concepts.",
      credentialId: "CISCO-PLACEHOLDER",
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "Tata Forage Virtual Experience",
      issuer: "Tata / Forage",
      badge: "Data Visualization & Analysis",
      description: "Practical simulation tackling real-world business scenarios: framing business questions, analyzing executive metrics, and building impactful visual charts for C-suite decision-makers.",
      credentialId: "FORAGE-TATA-PLACEHOLDER",
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "Hexart AI Foundation",
      issuer: "Hexart AI",
      badge: "Artificial Intelligence",
      description: "Foundational concepts of artificial intelligence, machine learning pipelines, ethics in AI, and practical problem framing with data.",
      credentialId: "HEXART-PLACEHOLDER",
      credentialUrl: "#"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypingEffect();
  initScrollProgress();
  initNavigation();
  initProjectFilters();
  initContactForm();
});

// ==========================================
// 1. Theme Management (Dark / Light)
// ==========================================
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const currentTheme = localStorage.getItem("portfolio-theme") || "dark";

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconContainer = document.getElementById("theme-icon");
  if (!iconContainer) return;

  if (theme === "dark") {
    // Sun icon
    iconContainer.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    // Moon icon
    iconContainer.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// ==========================================
// 2. Animated Typing Effect
// ==========================================
function initTypingEffect() {
  const textElement = document.getElementById("typed-role-text");
  if (!textElement) return;

  const words = portfolioData.personal.animatedTitles;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      speed = 90;

      if (charIndex === currentWord.length) {
        speed = 2000;
        isDeleting = true;
      }
    } else {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      speed = 45;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
      }
    }

    setTimeout(type, speed);
  }

  type();
}

// ==========================================
// 3. Scroll Progress Indicator & Sticky Nav
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
// 4. Navigation & Active Section Highlighting
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
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================
// 5. Project Filtering & Modals
// ==========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".project-tab-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "All Projects" || cardCat === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Project Details Modal Handler
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
  if (badge) badge.textContent = `${project.category} • ${project.badge}`;
  if (tagline) tagline.textContent = project.tagline;
  if (desc) desc.textContent = project.description;

  if (featuresList) {
    featuresList.innerHTML = project.features.map(f => `
      <li style="display:flex;align-items:start;gap:8px;margin-bottom:8px;font-size:0.85rem;color:var(--text-secondary);">
        <span style="color:#10b981;">✓</span>
        <span>${f}</span>
      </li>
    `).join("");
  }

  if (techList) {
    techList.innerHTML = project.technologies.map(t => `
      <span class="tag-badge" style="color:#22d3ee;background:rgba(6,182,212,0.1);border-color:rgba(6,182,212,0.2);">${t}</span>
    `).join("");
  }

  if (githubLink) {
    githubLink.href = project.githubUrl;
  }

  if (modal) modal.classList.add("open");
};

// Certificate Preview Modal Handler
window.openCertModal = function(certId) {
  const cert = portfolioData.certifications.find(c => c.id === certId);
  if (!cert) return;

  const modal = document.getElementById("cert-modal");
  const title = document.getElementById("cm-title");
  const issuer = document.getElementById("cm-issuer");
  const desc = document.getElementById("cm-desc");
  const idEl = document.getElementById("cm-id");

  if (title) title.textContent = cert.title;
  if (issuer) issuer.textContent = `Issued by ${cert.issuer}`;
  if (desc) desc.textContent = cert.description;
  if (idEl) idEl.textContent = cert.credentialId;

  if (modal) modal.classList.add("open");
};

// Resume Preview Modal Handler
window.openResumeModal = function() {
  const modal = document.getElementById("resume-modal");
  if (modal) modal.classList.add("open");
};

// Close all open modals
window.closeModals = function() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
};

// Trigger simulated resume download
window.downloadResume = function() {
  const resumeUrl = "/resume.pdf";
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Dinesh_Reddy_Chada_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert("Resume download triggered! You can place your finalized resume PDF in the 'public/' directory as 'resume.pdf'.");
};

// Print resume
window.printResume = function() {
  window.print();
};

// Copy email helper
window.copyEmailAddress = function() {
  navigator.clipboard.writeText(portfolioData.personal.email).then(() => {
    const feedback = document.getElementById("copy-email-toast");
    if (feedback) {
      feedback.style.display = "inline";
      setTimeout(() => feedback.style.display = "none", 3000);
    }
  });
};

// Copy phone helper
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
