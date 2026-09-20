/**
 * Mifta Fauzia Rahma — Portfolio Interactive Scripts
 * Pure vanilla JS, zero dependencies, lightning fast.
 */

// Project Case Study Data Store
const projectData = {
  instockcook: {
    title: "InStockCook",
    tagline: "iOS Cooking Assistant App for College Students",
    badge: "Apple Foundation Program (Batch 4)",
    badgeType: "apple",
    sdg: "UN SDG 12: Responsible Consumption",
    yearRole: "2025 · Hipster (UI/UX Designer) & iOS UI Developer",
    techStack: ["SwiftUI", "Apple HIG", "Figma", "iOS", "Challenge-Based Learning (CBL)"],
    slideImg: "assets/img/slide_1.webp",
    description: `InStockCook was developed as part of the prestigious Apple Developer Academy Foundation Program Batch 4 at Universitas Ciputra Surabaya. Using Apple's Challenge-Based Learning (CBL) framework, our team investigated meal preparation friction and food waste among university students living away from home who constantly face limited budgets and sparse refrigerator ingredients.`,
    problem: `University students living away from home struggle daily to decide what to cook with limited, leftover ingredients and tight budgets. This leads to decision fatigue, spoiled groceries, and unnecessary expenses on takeout dining.`,
    solution: `We designed and developed an intuitive iOS cooking assistant that suggests recipes dynamically based on what users already have in their pantry, actively preventing food spoilage and cutting grocery costs.`,
    challenge: `Allowing users to enter loose, unstructured ingredients freely without complicating the matching taxonomy or making development unfeasible within our intense 1-month sprint.`,
    challengeSolution: `We engineered a streamlined ingredient categorization system with predictive visual chips, adhering strictly to Apple's Human Interface Guidelines (HIG) for iOS. We held daily cross-functional design-code reviews to validate implementation feasibility in SwiftUI.`,
    screens: [
      { src: "assets/img/p1_img5_X18.png", title: "App Onboarding & Value Prop" },
      { src: "assets/img/p1_img6_X20.png", title: "Ingredient Selection Screen" },
      { src: "assets/img/p1_img7_X22.png", title: "Dynamic Recipe Recommendations" },
      { src: "assets/img/slide_1.webp", title: "Full Portfolio Slide Presentation" }
    ],
    links: [
      { label: "View GitHub Repository", url: "https://github.com/Trancend1/Instockcook-ios.git", icon: "github" },
      { label: "Interactive Figma Prototype", url: "https://www.figma.com/design/U7SBollNS7j5BgfaVkSF4r/InStockCook?node-id=0-1&t=4lIGKDlm5ayss5cg-1", icon: "figma" }
    ]
  },

  yolovision: {
    title: "YoloVision",
    tagline: "Assistive AI Object & Printed Text Scanner for Visually Impaired",
    badge: "4th Place · LEVITASI Innovation Competition",
    badgeType: "award",
    sdg: "UN SDG 10: Reduced Inequalities",
    yearRole: "2024 · Ideation Lead & UI/UX Designer",
    techStack: ["YOLOv11", "OCR Engine", "Text-to-Speech (TTS)", "Python", "Figma", "Multimodal Audio UX"],
    slideImg: "assets/img/slide_2.webp",
    description: `YoloVision is an assistive AI wearable and mobile software application designed to empower visually impaired individuals with independent spatial awareness and text-reading autonomy. By uniting YOLOv11 for real-time object detection with OCR and Text-to-Speech (TTS), the system translates physical scenes and printed materials into real-time directional audio feedback.`,
    problem: `Visually impaired people face daily navigation hazards and cannot independently read printed labels, menus, or room signs, forcing frequent reliance on sighted assistance in unfamiliar environments.`,
    solution: `Architected a multimodal accessibility system combining a low-cognitive-load mobile UI with a 3D wearable prototype that reads environmental obstacles and printed text in real time.`,
    challenge: `Severe auditory cognitive overload when YOLOv11 detected dozens of simultaneous objects in busy urban environments.`,
    challengeSolution: `Implemented an intelligent spatial priority heuristic that announces only the most urgent obstacles based on proximity and trajectory, delivered via open-ear bone-conduction audio so users maintain ambient hearing and situational safety.`,
    screens: [
      { src: "assets/img/p2_img2_X9.png", title: "3D Wearable & System Flow" },
      { src: "assets/img/p2_img3_X10.png", title: "Object Detection & OCR Interface" },
      { src: "assets/img/slide_2.webp", title: "Complete Presentation Slide" }
    ],
    links: [
      { label: "Interactive Figma Prototype & Pitch", url: "https://www.figma.com/proto/dXN6POz34i6eluGoeBTMvk/Portfolio?node-id=104-541", icon: "figma" }
    ]
  },

  insightgrader: {
    title: "Insight Grader",
    tagline: "AI-Assisted Grading & Personalized Student Feedback Platform",
    badge: "3rd Place Winner · ITCentrum Hackathon",
    badgeType: "award",
    sdg: "UN SDG 4: Quality Education",
    yearRole: "2023 · Chief Product Officer (CPO) & UI/UX Designer",
    techStack: ["Figma", "NLP / AI Models", "LMS API Integration", "Web Design System", "Product Discovery"],
    slideImg: "assets/img/slide_3.webp",
    description: `Insight Grader is an AI-assisted web platform created to eliminate grading burnout for educators while delivering rapid, highly personalized pedagogical feedback to students. Emerging from empirical research showing educators spend 20%+ of their working hours on administrative evaluation, Insight Grader reclaims educator time for mentorship.`,
    problem: `Teachers spend substantial non-teaching hours manually evaluating repetitive assignments, resulting in delayed student feedback and teacher burnout without scalable personalization.`,
    solution: `Designed an intuitive 4-step grading pipeline: assignment bulk ingestion, rubric configuration, automated AI assessment, and one-click score adjustment with classroom analytics and voice feedback.`,
    challenge: `Teachers were skeptical of automated scoring and fearful of AI grading errors or lack of contextual understanding.`,
    challengeSolution: `Implemented a transparent Human-in-the-Loop UX model. The AI never finalizes grades unilaterally; instead, it provides rubric-mapped inline annotations, transparent reasoning tags, and seamless manual override buttons for full teacher agency.`,
    screens: [
      { src: "assets/img/p3_img1_X6.png", title: "4-Step Grading Pipeline UI" },
      { src: "assets/img/p3_img2_X12.png", title: "Rubric Configuration Journey" },
      { src: "assets/img/p3_img3_X14.png", title: "Classroom Analytics & Voice Feedback" },
      { src: "assets/img/slide_3.webp", title: "Competition Presentation Slide" }
    ],
    links: [
      { label: "Live Pitch Deck & Presentation", url: "https://owl-v6vv88.my.canva.site/", icon: "external" }
    ]
  },

  diabetsavior: {
    title: "DiabetSavior (HealthyBuddies)",
    tagline: "Preventive Diabetes Health & Insulin Tracking Mobile App",
    badge: "Google Solution Challenge 2023",
    badgeType: "google",
    sdg: "UN SDG 3: Good Health & Well-being",
    yearRole: "2023 · Hipster (UI/UX Designer) & Design Lead",
    techStack: ["Figma Design System", "Flutter", "Firebase", "Healthcare UX", "Mobile Design"],
    slideImg: "assets/img/slide_4.webp",
    description: `DiabetSavior is a comprehensive digital health management application developed for the Google Solution Challenge 2023. It directly tackles the daily adherence struggles of individuals diagnosed with Type 1 and Type 2 diabetes, providing medication reminders, blood glucose tracking, and insulin dosage calculation.`,
    problem: `Managing diabetes requires relentless daily vigilance. Users frequently miss medication timings, miscalculate insulin units, or fail to track fluctuating glucose trends due to overwhelming, confusing traditional logs.`,
    solution: `Designed dual tailored workflows in Figma specifically distinguishing Type 1 (intensive insulin logging & meal bolus) from Type 2 (lifestyle metrics & oral meds), built on an accessible, high-contrast healthcare design system.`,
    challenge: `Presenting critical, high-stakes medical metrics without triggering user anxiety or catastrophic data entry errors.`,
    challengeSolution: `Crafted progressive disclosure flows with explicit confirmation sheets for insulin units, clear color-coded glycemic zones (Hypo/Target/Hyper), and supportive, calm microcopy validated with diabetic users.`,
    screens: [
      { src: "assets/img/p4_img1_X6.png", title: "Type 1 Diabetes Dashboard" },
      { src: "assets/img/p4_img3_X12.png", title: "Type 2 Blood Glucose Tracker" },
      { src: "assets/img/p4_img5_X15.png", title: "Insulin Dosage Log Sheet" },
      { src: "assets/img/p4_img7_X18.png", title: "Medication Reminders Flow" },
      { src: "assets/img/p4_img9_X21.png", title: "Health Trends & Reports" },
      { src: "assets/img/p4_img11_X24.png", title: "Emergency & Profile Hub" }
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/Anandawahyan/HealthyBuddies", icon: "github" },
      { label: "YouTube Demo Video", url: "https://youtu.be/jrGaVbCF9dk?si=xWnW3Rc_TviKInCe", icon: "video" },
      { label: "Figma Prototype & Design System", url: "https://www.figma.com/design/39v5a9orqLcMcikeO2wsvg/Healthy-Buddies?node-id=0-1&t=4lIGKDlm5ayss5cg-1", icon: "figma" }
    ]
  },

  informaticsexpo: {
    title: "Informatics Expo",
    tagline: "Multi-Venue Tech Exhibition & Capstone Software Showcase",
    badge: "Lead PIC (3 Consecutive Editions)",
    badgeType: "lead",
    sdg: "SDG 9: Industry, Innovation & Infrastructure",
    yearRole: "2023 – 2025 · Overall Person in Charge (PIC) Student Lead",
    techStack: ["Agile / Scrum", "Sprint Planning", "Cross-Functional Leadership", "Stakeholder Alignment", "Minutes of Meeting (MoM)"],
    slideImg: "assets/img/slide_5.webp",
    description: `Informatics Expo is the premier flagship exhibition organized by the Department of Informatics at Universitas Islam Indonesia to showcase graduating students' semester-long capstone software. Mifta had the unique honor of being entrusted as the overall Person in Charge (PIC) three times, orchestrating events at Sleman City Hall and expanding to Pakuwon Mall Yogyakarta (the largest expo in department history).`,
    problem: `Coordinating 100+ exhibitor student teams, 30+ committee members, external venue management, and 800+ public visitors previously suffered from communication siloes, deadline slip, and on-site chaos.`,
    solution: `Institutionalized an Agile/Scrum event operations framework with bi-weekly sprint planning, daily standup checks, structured Minutes of Meeting (MoM), and dynamic risk registers.`,
    challenge: `Managing unforeseen on-site contingencies, audio-visual technical failures across 100 booth setups, and high-density foot traffic in commercial shopping malls.`,
    challengeSolution: `Established rapid escalation protocols, pre-flight dry runs for booth power and local networking, and cross-trained student liaison officers, achieving an unprecedented 98% attendee satisfaction rating.`,
    screens: [
      { src: "assets/img/p5_img1_X6.png", title: "Pakuwon Mall Showcase Main Stage" },
      { src: "assets/img/p5_img2_X8.png", title: "Sleman City Hall Exhibition Floor" },
      { src: "assets/img/p5_img3_X9.png", title: "Agile Coordination & Team Standups" },
      { src: "assets/img/slide_5.webp", title: "Event Retrospective Slide" }
    ],
    links: [
      { label: "Official Instagram @informatics_expo.uii", url: "https://instagram.com/informatics_expo.uii", icon: "instagram" }
    ]
  }
};

// Slide Presentation Data
const slideData = [
  {
    id: 1,
    title: "InStockCook — iOS Cooking Assistant (Apple Academy)",
    img: "assets/img/slide_1.webp",
    projectKey: "instockcook"
  },
  {
    id: 2,
    title: "YoloVision — Assistive AI Scanner (4th Place LEVITASI)",
    img: "assets/img/slide_2.webp",
    projectKey: "yolovision"
  },
  {
    id: 3,
    title: "Insight Grader — AI-Assisted Grading (3rd Place Hackathon)",
    img: "assets/img/slide_3.webp",
    projectKey: "insightgrader"
  },
  {
    id: 4,
    title: "DiabetSavior — Healthcare Design System (Google Solution Challenge)",
    img: "assets/img/slide_4.webp",
    projectKey: "diabetsavior"
  },
  {
    id: 5,
    title: "Informatics Expo — Agile Tech Exhibition (3x Lead PIC)",
    img: "assets/img/slide_5.webp",
    projectKey: "informaticsexpo"
  }
];

let currentSlideIdx = 0;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initFilterTabs();
  initSlideViewer();
  initModalHandlers();
  initContactInteractions();
  initMobileNav();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("mifta_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = storedTheme || (prefersDark ? "dark" : "light");
  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("mifta_theme", theme);
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    if (theme === "dark") {
      themeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
    } else {
      themeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }
}

/* --------------------------------------------------------------------------
   2. Project Filter Tabs
   -------------------------------------------------------------------------- */
function initFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCats = card.getAttribute("data-category") || "";
        if (category === "all" || cardCats.includes(category)) {
          card.style.display = "flex";
          if (card.classList.contains("featured")) card.style.display = "grid";
          setTimeout(() => { card.style.opacity = "1"; card.style.transform = "translateY(0)"; }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => { card.style.display = "none"; }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Slide Viewer
   -------------------------------------------------------------------------- */
function initSlideViewer() {
  const mainImg = document.getElementById("mainSlideImg");
  const slideTitle = document.getElementById("slideTitlePreview");
  const slideCounter = document.getElementById("slideCounterText");
  const prevBtn = document.getElementById("prevSlideBtn");
  const nextBtn = document.getElementById("nextSlideBtn");
  const thumbs = document.querySelectorAll(".thumb-item");

  if (!mainImg) return;

  function updateSlide(idx) {
    if (idx < 0) idx = slideData.length - 1;
    if (idx >= slideData.length) idx = 0;
    currentSlideIdx = idx;

    const data = slideData[currentSlideIdx];
    mainImg.style.opacity = "0.4";
    setTimeout(() => {
      mainImg.src = data.img;
      mainImg.alt = data.title;
      if (slideTitle) slideTitle.textContent = data.title;
      if (slideCounter) slideCounter.textContent = `Slide ${currentSlideIdx + 1} of ${slideData.length}`;
      mainImg.style.opacity = "1";
    }, 150);

    thumbs.forEach((thumb, tIdx) => {
      if (tIdx === currentSlideIdx) {
        thumb.classList.add("active");
      } else {
        thumb.classList.remove("active");
      }
    });
  }

  if (prevBtn) prevBtn.addEventListener("click", () => updateSlide(currentSlideIdx - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => updateSlide(currentSlideIdx + 1));

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener("click", () => updateSlide(idx));
  });

  const mainStage = document.querySelector(".slide-main-stage");
  if (mainStage) {
    mainStage.addEventListener("click", () => {
      openLightbox(slideData[currentSlideIdx].img, slideData[currentSlideIdx].title);
    });
  }
}

/* --------------------------------------------------------------------------
   4. Case Study Modal & Lightbox
   -------------------------------------------------------------------------- */
function initModalHandlers() {
  const modalBackdrop = document.getElementById("caseStudyModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  // Trigger buttons
  document.querySelectorAll("[data-project-target]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = el.getAttribute("data-project-target");
      openProjectModal(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeLightbox();
    }
  });
}

function openProjectModal(projectId) {
  const p = projectData[projectId];
  if (!p) return;

  const modal = document.getElementById("caseStudyModal");
  if (!modal) return;

  document.getElementById("modalBadge").textContent = p.badge;
  document.getElementById("modalSdg").textContent = p.sdg;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalTagline").textContent = p.tagline;
  document.getElementById("modalYearRole").textContent = p.yearRole;
  
  // Tech Stack chips
  const techContainer = document.getElementById("modalTechChips");
  techContainer.innerHTML = p.techStack.map(t => `<span class="tech-chip">${t}</span>`).join("");

  // Description, problem, solution
  document.getElementById("modalOverview").textContent = p.description;
  document.getElementById("modalProblem").textContent = p.problem;
  document.getElementById("modalSolution").textContent = p.solution;
  document.getElementById("modalChallenge").textContent = p.challenge;
  document.getElementById("modalChallengeSolution").textContent = p.challengeSolution;

  // Gallery
  const gallery = document.getElementById("modalGalleryList");
  if (p.screens && p.screens.length > 0) {
    gallery.innerHTML = p.screens.map(s => `
      <div class="modal-gallery-item" onclick="openLightbox('${s.src}', '${s.title.replace(/'/g, "\\'")}')" title="Click to enlarge">
        <img src="${s.src}" alt="${s.title}" loading="lazy" />
      </div>
    `).join("");
  } else {
    gallery.innerHTML = "";
  }

  // Links
  const linksContainer = document.getElementById("modalLinksList");
  linksContainer.innerHTML = p.links.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size:0.85rem; padding: 0.6rem 1.25rem;">
      ${l.label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>
  `).join("");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("caseStudyModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Fullscreen Image Lightbox
function openLightbox(imgSrc, title) {
  let lightbox = document.getElementById("globalLightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "globalLightbox";
    lightbox.className = "modal-backdrop";
    lightbox.innerHTML = `
      <div style="max-width: 92vw; max-height: 92vh; position: relative; display: flex; flex-direction: column; align-items: center;">
        <button id="lightboxClose" class="modal-close-btn" style="top:-3rem; right:0; color:#fff; background: rgba(0,0,0,0.5);">&times;</button>
        <img id="lightboxImg" src="" style="max-width: 100%; max-height: 85vh; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.8);" />
        <p id="lightboxCaption" style="color: #fff; margin-top: 0.8rem; font-size: 0.95rem; font-weight: 500;"></p>
      </div>
    `;
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.id === "lightboxClose") closeLightbox();
    });
  }

  document.getElementById("lightboxImg").src = imgSrc;
  document.getElementById("lightboxCaption").textContent = title || "";
  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("globalLightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
  }
}

/* --------------------------------------------------------------------------
   5. Contact Form & Clipboard Interactions
   -------------------------------------------------------------------------- */
function initContactInteractions() {
  // Copy Email
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("miftafauziia@gmail.com").then(() => {
        showToast("Email address copied: miftafauziia@gmail.com");
      }).catch(() => {
        showToast("Email: miftafauziia@gmail.com");
      });
    });
  }

  // Copy Phone
  const copyPhoneBtn = document.getElementById("copyPhoneBtn");
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("+6281230589309").then(() => {
        showToast("Phone number copied: +62 812-3058-9309");
      }).catch(() => {
        showToast("+62 812-3058-9309");
      });
    });
  }

  // Contact Form Submission (Mailto / Fallback)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("senderName").value.trim();
      const email = document.getElementById("senderEmail").value.trim();
      const subject = document.getElementById("senderSubject").value.trim();
      const message = document.getElementById("senderMessage").value.trim();

      const mailtoUrl = `mailto:miftafauziia@gmail.com?subject=${encodeURIComponent(subject || 'Job Opportunity: Contact from Portfolio')}&body=${encodeURIComponent(`Hello Mifta,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`)}`;
      
      showToast("Opening your email client to send message to Mifta...");
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);
    });
  }
}

// Toast notification display
function showToast(msg) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${msg}</span>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* --------------------------------------------------------------------------
   6. Mobile Navigation Menu
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.getElementById("mobileNavToggle");
  const navLinks = document.getElementById("navLinksMenu");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      const isOpen = navLinks.classList.contains("mobile-open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    // Close when clicking nav link
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }
}
