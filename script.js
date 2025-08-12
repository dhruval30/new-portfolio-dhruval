// This script handles all the parallax scroll animations.
const titleWrapper = document.querySelector(".title-wrapper");
const headlinePanel = document.querySelector(".headline-panel");
const infoPanel = document.querySelector(".info-panel");
const experienceSection = document.querySelector(".experience-section");
const experienceTitle = document.querySelector(".experience-title");
const experienceContainer = document.querySelector(".experience-container");
const projectsSection = document.querySelector(".projects-section");
const projectsTitle = document.querySelector(".projects-title");
const projectsGrid = document.querySelector(".projects-grid");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;


  const scrollFraction = Math.min(1, scrollTop / window.innerHeight);
  const scale = 1 + scrollFraction * 2;
  const heroOpacity = 1 - scrollFraction;
  const contentOpacity = Math.max(0, (scrollFraction - 0.5) * 2);
  const contentTranslateX = (1 - contentOpacity) * 50;


  let expProgress = 0;
  if (experienceSection) {
    const expRect = experienceSection.getBoundingClientRect();
    const animationStartPoint = window.innerHeight;
    const animationEndPoint = window.innerHeight / 2;
    const progress =
      (animationStartPoint - expRect.top) /
      (animationStartPoint - animationEndPoint);
    expProgress = Math.max(0, Math.min(1, progress));
  }
  const expOpacity = expProgress;
  const expTranslateX = (1 - expProgress) * 50;


  let projProgress = 0;
  if (projectsSection) {
    const projRect = projectsSection.getBoundingClientRect();
    const animationStartPoint = window.innerHeight;
    const animationEndPoint = window.innerHeight / 2;
    const progress =
      (animationStartPoint - projRect.top) /
      (animationStartPoint - animationEndPoint);
    projProgress = Math.max(0, Math.min(1, progress));
  }
  const projOpacity = projProgress;
  const projTranslateX = (1 - projProgress) * 50;

  window.requestAnimationFrame(() => {

    titleWrapper.style.transform = `scale(${scale})`;
    titleWrapper.style.opacity = heroOpacity;
    headlinePanel.style.opacity = contentOpacity;
    headlinePanel.style.transform = `translateX(-${contentTranslateX}px)`;
    infoPanel.style.opacity = contentOpacity;
    infoPanel.style.transform = `translateX(${contentTranslateX}px)`;


    if (experienceSection) {
      experienceTitle.style.opacity = expOpacity;
      experienceTitle.style.transform = `translateX(-${expTranslateX}px)`;
      experienceContainer.style.opacity = expOpacity;
      experienceContainer.style.transform = `translateX(${expTranslateX}px)`;
    }


    if (projectsSection) {
      projectsTitle.style.opacity = projOpacity;
      projectsTitle.style.transform = `translateX(-${projTranslateX}px)`;
      projectsGrid.style.opacity = projOpacity;
      projectsGrid.style.transform = `translateX(${projTranslateX}px)`;
    }
  });
});


function smoothScrollTo(targetSelector, duration) {
  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) return;
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
}

document
  .querySelector(".scroll-down-arrow")
  .addEventListener("click", function () {
    smoothScrollTo(".content-section", 1500);
  });


const skillsData = {
  "Programming Languages": {
    Python: '<i class="fab fa-python"></i>',
    JavaScript: '<i class="fab fa-js-square"></i>',
    Java: '<i class="fab fa-java"></i>',
    Elixir: '<i class="fas fa-flask"></i>',
  },
  "Frameworks & Libraries": {
    "Node.js/Express": '<i class="fab fa-node-js"></i>',
    "Flask/Django": '<i class="fas fa-code-branch"></i>',
    PyTorch: '<i class="fas fa-brain"></i>',
    TensorFlow: '<i class="fas fa-robot"></i>',
  },
  "Tools & Technologies": {
    AWS: '<i class="fab fa-aws"></i>',
    "Git & GitHub": '<i class="fab fa-github"></i>',
    MongoDB: '<i class="fas fa-database"></i>',
    DBMS: '<i class="fas fa-server"></i>',
    Linux: '<i class="fab fa-linux"></i>',
  },
  "Soft Skills": {
    Communication: '<i class="fas fa-comments"></i>',
    Leadership: '<i class="fas fa-user-tie"></i>',
    Management: '<i class="fas fa-tasks"></i>',
  },
};

const skillsContainer = document.querySelector(".skills-categories-container");
for (const category in skillsData) {
  const categoryEl = document.createElement("div");
  categoryEl.classList.add("skill-category");
  const titleEl = document.createElement("h3");
  titleEl.textContent = category;
  categoryEl.appendChild(titleEl);

  const gridEl = document.createElement("div");
  gridEl.classList.add("skills-grid");

  for (const skill in skillsData[category]) {
    const item = document.createElement("div");
    item.classList.add("skill-card");
    item.innerHTML = `
            ${skillsData[category][skill]}
            <span>${skill}</span>
        `;
    gridEl.appendChild(item);
  }
  categoryEl.appendChild(gridEl);
  skillsContainer.appendChild(categoryEl);
}


const stardustCanvas = document.getElementById("stardust-canvas");
const stardustCtx = stardustCanvas.getContext("2d");
let stars = [];
let stardustAnimationId;

function resizeStardustCanvas() {
  if (!stardustCanvas) return;
  stardustCanvas.width = stardustCanvas.offsetWidth;
  stardustCanvas.height = stardustCanvas.offsetHeight;
}

class Star {
  constructor() {
    this.x = Math.random() * stardustCanvas.width;
    this.y = Math.random() * stardustCanvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedY = Math.random() * 0.5 + 0.2;
  }
  update() {
    this.y += this.speedY;
    if (this.y > stardustCanvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * stardustCanvas.width;
    }
  }
  draw() {
    stardustCtx.fillStyle = "rgba(255, 77, 77, 0.7)";
    stardustCtx.beginPath();
    stardustCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    stardustCtx.fill();
  }
}

function initStars() {
  stars = [];
  const numberOfStars = (stardustCanvas.width * stardustCanvas.height) / 9000;
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new Star());
  }
}

function animateStars() {
  stardustCtx.clearRect(0, 0, stardustCanvas.width, stardustCanvas.height);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw();
  }
  stardustAnimationId = requestAnimationFrame(animateStars);
}

const skillsSection = document.querySelector(".skills-section");
const starObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        resizeStardustCanvas();
        initStars();
        animateStars();
      } else {
        if (stardustAnimationId) {
          cancelAnimationFrame(stardustAnimationId);
        }
      }
    });
  },
  { threshold: 0.1 }
);

if (skillsSection) starObserver.observe(skillsSection);


const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const skillCards = entry.target.querySelectorAll(".skill-card");

      if (entry.isIntersecting) {
        skillCards.forEach((card, index) => {
          card.classList.remove("exit-to-right");
          card.classList.add("visible");
          card.style.transitionDelay = `${index * 50}ms`;
        });
      } else {
        if (entry.boundingClientRect.top > 0) {
          skillCards.forEach((card) => {
            card.classList.remove("visible");
            card.classList.add("exit-to-right");
          });
        } else {
          skillCards.forEach((card) => {
            card.classList.remove("visible");
            card.classList.remove("exit-to-right");
          });
        }
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".skill-category").forEach((el) => {
  cardObserver.observe(el);
});

if (skillsContainer) {
  skillsContainer.addEventListener("transitionend", (e) => {
    if (
      e.target.classList.contains("skill-card") &&
      e.propertyName === "transform"
    ) {
      if (e.target.classList.contains("exit-to-right")) {
        e.target.classList.remove("exit-to-right");
      }
    }
  });
}

const experienceData = [
  {
    id: "sc",
    title: "Developer Intern",
    company: "Numerize AI",
    date: "July 2025 - Present",
    icon: "fas fa-robot",
    description: [
      "Currently contributing to the development of AI-powered solutions.",
      "Working with a team to build and deploy machine learning models.",
      "Gaining hands-on experience in a fast-paced tech environment.",
    ],
  },
  {
    id: "mh",
    title: "R&D Intern",
    company: "Placera",
    date: "March 2025 - May 2025",
    icon: "fas fa-search-location",
    description: [
      "Conducted feasibility analysis for HR technology solutions aimed at solving India’s hiring challenges",
      "Evaluated technical feasibility, market viability, and implementation strategies for innovative HR tools",
      "Performed comprehensive research on emerging technologies to determine optimal development approaches",
    ],
  },
  {
    id: "cw",
    title: "Vice President",
    company: "Code{X} - The Programming Club",
    date: "June 2024 - Present",
    icon: "fas fa-code",
    description: [
      "Managed projects, organized workshops, hackathons, and coding competitions",
      "Oversaw operations, team coordination, and event execution",
      "Fostered innovation and growth within the club community",
    ],
  },
];

const jobListContainer = document.querySelector(".job-list");
const jobDetailsContainer = document.querySelector(".job-details");

if (jobListContainer && jobDetailsContainer) {
  experienceData.forEach((job) => {
    const button = document.createElement("button");
    button.className = "job-button";
    button.dataset.id = job.id;
    button.innerHTML = `
            <div class="job-button-icon"><i class="${job.icon}"></i></div>
            <div class="job-button-text">
                ${job.title}
                <br>
                <small>${job.company}</small>
            </div>
        `;
    jobListContainer.appendChild(button);

    const details = document.createElement("div");
    details.className = "job-details-content";
    details.id = job.id;

    let listItems = "";
    job.description.forEach((point) => {
      listItems += `<li>${point}</li>`;
    });

    details.innerHTML = `
            <h3>${job.title}</h3>
            <div class="company-info">${job.company} | ${job.date}</div>
            <ul>${listItems}</ul>
        `;
    jobDetailsContainer.appendChild(details);
  });

  jobListContainer.querySelector(".job-button").classList.add("active");
  jobDetailsContainer
    .querySelector(".job-details-content")
    .classList.add("active");

  jobListContainer.addEventListener("click", (e) => {
    const button = e.target.closest(".job-button");
    if (!button || button.classList.contains("active")) return;

    const currentActiveContent = jobDetailsContainer.querySelector(
      ".job-details-content.active"
    );
    if (currentActiveContent) {
      currentActiveContent.classList.add("is-exiting");

      currentActiveContent.addEventListener(
        "animationend",
        () => {
          currentActiveContent.classList.remove("active", "is-exiting");

          const currentActiveButton =
            jobListContainer.querySelector(".job-button.active");
          if (currentActiveButton)
            currentActiveButton.classList.remove("active");

          button.classList.add("active");
          const newActiveContent = jobDetailsContainer.querySelector(
            `#${button.dataset.id}`
          );
          if (newActiveContent) newActiveContent.classList.add("active");
        },
        { once: true }
      );
    }
  });
}

// --- PROJECTS SECTION SCRIPT ---
const projectsData = [
  {
    title: "GitChat",
    description:
      "Codebase explorer. Combines GitHub’s API, LangChain, and LLaMA3 for semantic codebase search, file previews, and natural language querying. Includes custom compression to handle large repositories efficiently.",
    tags: ["Python", "JS", "Langchain", "LLama", "NLP", "GitHub API"],
    image: "images/gitchat.png",
    githubLink: "https://github.com/dhruval30/GitChat",
    liveLink: "https://gitgitchat.netlify.app/",
  },
  {
    title: "MeetScribe",
    description:
      "AI-powered meeting assistant that transcribes, summarizes, and analyzes discussions. Includes speaker diarization, sentiment detection, and action point extraction.",
    tags: [
      "Python",
      "Huggingface",
      "Langchain",
      "Spacy",
      "LLM",
      "Speech to Text",
    ],
    image: "images/meetScribe.png",
    githubLink: "https://github.com/dhruval30/meetScribe",
    liveLink: "#",
  },
  {
    title: "GeoAI",
    description:
      "Deep learning project for semantic segmentation of satellite imagery — detecting water bodies, flood zones, and deforested regions using U-Net architectures. A step toward smarter environmental monitoring.",
    tags: [
      "Python",
      "PyTorch",
      "GAN",
      "Computer Vision",
      "HuggingFace",
      "Adversarial Learning",
    ],
    image: "images/geoai.png",
    githubLink: "https://github.com/dhruval30/geoai",
    liveLink: "#",
  },
  {
    title: "GenDet - Generator and Detector",
    description:
      "A dual-adversarial GAN that trains a generator to fool both a traditional discriminator and a forensic deepfake detector. The goal: synthesize images that are perceptually and forensically indistinguishable from real ones, pushing the limits of generative realism and detection resistance.",
    tags: [
      "Python",
      "PyTorch",
      "GAN",
      "Computer Vision",
      "Adversarial Learning",
      "Deep Learning",
      "Digital Forensics",
    ],
    image: "images/dualgan.png",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "EventNet",
    description:
      "Secure event networking platform with authentication and MongoDB for user credential management, integrated with LinkedIn profiles for optimal user matching.",
    tags: ["NodeJS", "ExpressJS", "MongoDB", "Linkedin API", "Restful API"],
    image: "images/eventnet.png",
    githubLink: "https://github.com/dhruval30/eventnet",
    liveLink: "#",
  },
  {
    title: "SOST Website",
    description:
      "A full-stack univeristy website built with React and Django, featuring dynamic content powered by REST APIs. Showcases achievements, placements, research, and projects in real-time with a sleek, responsive design.",
    tags: ["React JS", "Django", "Restful API", "MongoDB"],
    image: "images/sost.jpeg",
    githubLink: "https://github.com/Kshitij-0710/sot-info-frontend",
    liveLink: "https://www.sost.in",
  },
  {
    title: "AutoTT",
    description:
      "A cool side project that turns weekly university HTML timetables into Outlook calendar events. Scrapes your schedule and generates .ics files. Built for convenience and a bit of fun.",
    tags: [
      "Python",
      "BeautifulSoup",
      "ICS",
      "HTML Parsing",
      "Outlook Integration",
    ],
    image: "images/autott.png",
    githubLink: "https://github.com/dhruval30/autott",
    liveLink: "#",
  },
  {
    title: "blogGPT",
    description:
      "Fully automated self-writing blog that publishes a new computer science post every day. Picks a topic, generates a full Markdown article, and serves it to the frontend all on by itself. Built with Python, React, and LLMs to create a growing, readable CS knowledge base.",
    tags: ["Python", "React", "LLM", "LLaMA 3", "MongoDB"],
    image: "images/bloggpt.png",
    githubLink: "https://github.com/dhruval30/bloggpt",
    liveLink: "https://blog-gpt.netlify.app",
  },
  {
    title: "Reddit Reel Generator",
    description:
      "Fully automated video generator for Reddit posts. Scrapes chaotic or emotional posts, converts them to natural voice with TTS, adds background gameplay (Minecraft/Subway Surfers), generates synced captions, and compiles everything into a ready-to-upload video.",
    tags: ["Python", "Web Scraping", "LLM", "TTS", "MoviePy", "Captioning"],
    image: "images/reddit.jpg",
    githubLink: "https://github.com/dhruval30/redditreelbot",
    liveLink: "#",
  },
];

const projectsGridContainer = document.querySelector(".projects-grid");

if (projectsGridContainer) {
  projectsData.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const tagsHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");

    card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1a1a1a/ff4d4d?text=Image+Not+Found';">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" target="_blank" title="GitHub Repository"><i class="fab fa-github"></i></a>
                    <a href="${project.liveLink}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
    projectsGridContainer.appendChild(card);
  });
}

window.addEventListener("resize", () => {
  if (
    skillsSection &&
    skillsSection.getBoundingClientRect().top < window.innerHeight &&
    skillsSection.getBoundingClientRect().bottom > 0
  ) {
    resizeStardustCanvas();
    initStars();
  }
});
