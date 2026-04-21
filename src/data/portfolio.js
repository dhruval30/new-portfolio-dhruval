export const profile = {
  name: "Dhruval Padia",
  role: "Software Developer",
  location: "India",
  availability: "Available for work",
  email: "padiadhruval@gmail.com",
  github: "https://github.com/dhruval30",
  linkedin: "https://www.linkedin.com/in/dhruvalpadia",
  resume: "/resume.pdf",
  about: [
    "Software dev. Build systems and AI agents. ML/DL, research. Music, literature. Collecting interests faster than I can commit to them.",
    "Curious and impact-focused Computer Science undergraduate with a passion for building clean, efficient systems that solve real problems. Experienced working across the stack, having shipped tools, full-fledged platforms, products and websites actively used by people. Dedicated to writing solid code, collaborating with great teams, and building solutions that make sense.",
  ],
};

export const valuePills = [
  "AI Agents",
  "RAG Systems",
  "Backend Development",
  "Full Stack Development",
  "Machine Learning",
  "Automation Workflows",
  "Product Strategy",
  "Clean Engineering",
];

export const skills = [
  {
    category: "Languages & Core Dev",
    items: ["Python", "JavaScript", "Java", "Bash", "Node.js", "Linux", "MERN Stack"],
  },
  {
    category: "Frameworks & AI",
    items: [
      "React",
      "Express.js",
      "Flask",
      "Django",
      "HTML/CSS",
      "Machine Learning",
      "Computer Vision",
      "NLP",
      "AI Agents",
      "Agentic Development",
      "Artificial Intelligence",
      "Large Language Model",
      "Agentic AI",
      "Retrieval Augmented Generation",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "PostgreSQL", "ArangoDB", "DBMS", "AWS", "GCP", "CI/CD"],
  },
  {
    category: "Collaboration & Tools",
    items: [
      "Git/GitHub",
      "Jira",
      "n8n",
      "Leadership",
      "Communication Skills",
      "Project Management",
      "Team Coordination",
      "Management",
    ],
  },
];

export const experience = [
  {
    title: "Jr. Full Stack Developer",
    company: "Numerize AI",
    date: "October 2025 - Present",
    description: [
      "Developing production-ready AI agents.",
      "Building and integrating RAG systems.",
      "Designing and implementing automation workflows; managing deployment and post-deployment monitoring.",
      "Practicing Agile development for rapid iterations and continuous delivery.",
    ],
  },
  {
    title: "Developer Intern",
    company: "Numerize AI",
    date: "June 2025 - September 2025",
    description: [
      "Contributed to the development of AI-powered solutions.",
      "Worked with a team to build and deploy machine learning models.",
      "Gained hands-on experience in a fast-paced tech environment.",
    ],
  },
  // {
  //   title: "R&D Intern",
  //   company: "Placera",
  //   date: "March 2025 - May 2025",
  //   description: [
  //     "Conducted feasibility analysis for HR technology solutions aimed at solving India hiring challenges.",
  //     "Evaluated technical feasibility, market viability, and implementation strategies for innovative HR tools.",
  //     "Researched emerging technologies to determine optimal development approaches.",
  //   ],
  // },
  {
    title: "Vice President",
    company: "Code{X} - The Programming Club",
    date: "June 2024 - June 2025",
    description: [
      "Managed projects, organized workshops, hackathons, and coding competitions.",
      "Oversaw operations, team coordination, and event execution.",
      "Fostered innovation and growth within the club community.",
    ],
  },
];

export const projects = [
  {
    title: "GitChat",
    description:
      "Codebase explorer. Combines GitHub API, LangChain, and LLaMA3 for semantic codebase search, file previews, and natural language querying. Includes custom compression to handle large repositories efficiently.",
    tags: ["Python", "JavaScript", "LangChain", "LLaMA", "NLP", "GitHub API"],
    image: "/images/gitchat.png",
    githubLink: "https://github.com/dhruval30/GitChat",
    liveLink: "https://gitgitchat.netlify.app/",
  },
  {
    title: "MeetScribe",
    description:
      "AI-powered meeting assistant that transcribes, summarizes, and analyzes discussions. Includes speaker diarization, sentiment detection, and action point extraction.",
    tags: ["Python", "Hugging Face", "LangChain", "spaCy", "LLM", "Speech to Text"],
    image: "/images/meetScribe.png",
    githubLink: "https://github.com/dhruval30/meetScribe",
    liveLink: "#",
  },
  {
    title: "GeoAI",
    description:
      "Deep learning project for semantic segmentation of satellite imagery, detecting water bodies, flood zones, and deforested regions using U-Net architectures.",
    tags: ["Python", "PyTorch", "Computer Vision", "Hugging Face", "Adversarial Learning"],
    image: "/images/geoai.png",
    githubLink: "https://github.com/dhruval30/geoai",
    liveLink: "#",
  },
  {
    title: "GenDet - Generator and Detector",
    description:
      "A dual-adversarial GAN that trains a generator to fool both a discriminator and a forensic deepfake detector to push the limits of generative realism and detection resistance.",
    tags: ["Python", "PyTorch", "GAN", "Computer Vision", "Digital Forensics"],
    image: "/images/dualgan.png",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "EventNet",
    description:
      "Secure event networking platform with authentication and MongoDB for user credential management, integrated with LinkedIn profiles for user matching.",
    tags: ["Node.js", "Express.js", "MongoDB", "LinkedIn API", "REST API"],
    image: "/images/eventnet.png",
    githubLink: "https://github.com/dhruval30/eventnet",
    liveLink: "#",
  },
  {
    title: "SOST Website",
    description:
      "A full-stack university website built with React and Django, featuring dynamic content powered by REST APIs with real-time updates.",
    tags: ["React", "Django", "REST API", "MongoDB"],
    image: "/images/sost.jpeg",
    githubLink: "https://github.com/Kshitij-0710/sot-info-frontend",
    liveLink: "https://www.sost.in",
  },
  {
    title: "AutoTT",
    description:
      "Converts weekly university HTML timetables into Outlook calendar events by scraping schedules and generating ICS files.",
    tags: ["Python", "BeautifulSoup", "ICS", "HTML Parsing", "Outlook"],
    image: "/images/autott.png",
    githubLink: "https://github.com/dhruval30/autott",
    liveLink: "#",
  },
  {
    title: "blogGPT",
    description:
      "A fully automated self-writing blog that publishes a new computer science post daily using Python, React, and LLMs.",
    tags: ["Python", "React", "LLM", "LLaMA 3", "MongoDB"],
    image: "/images/bloggpt.png",
    githubLink: "https://github.com/dhruval30/bloggpt",
    liveLink: "https://blog-gpt.netlify.app",
  },
  {
    title: "Reddit Reel Generator",
    description:
      "Automated video generator for Reddit posts: scraping, TTS narration, gameplay overlay, synced captions, and ready-to-upload exports.",
    tags: ["Python", "Web Scraping", "LLM", "TTS", "MoviePy", "Captioning"],
    image: "/images/reddit.jpg",
    githubLink: "https://github.com/dhruval30/redditreelbot",
    liveLink: "#",
  },
];
