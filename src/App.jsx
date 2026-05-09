import { useEffect, useState } from "react";
import { experience, profile, projects, skills, spotifyPlaylists, valuePills } from "./data/portfolio";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const githubUser = "dhruval30";
  const heatmapCacheKey = new Date().toISOString().slice(0, 13);
  const contributionGraphUrl =
    theme === "dark"
      ? `https://ghchart.rshah.org/f7ff4f/${githubUser}?v=${heatmapCacheKey}`
      : `https://ghchart.rshah.org/111318/${githubUser}?v=${heatmapCacheKey}`;
  const activityGraphUrl =
    theme === "dark"
      ? `https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=00000000&color=f4f7fb&line=f7ff4f&point=ff6f91&area=true&hide_border=true`
      : `https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=00000000&color=111318&line=00bcd4&point=ff4f86&area=true&hide_border=true`;

  const leadExperience = experience[0];

  return (
    <div id="top" className="site-shell">
      <div className="theme-canvas" aria-hidden="true" />
      <div className="theme-grid" aria-hidden="true" />
      <div className="theme-noise" aria-hidden="true" />

      <div className="site-frame">
        <header className="site-header">
          <a href="#top" className="brand-mark" aria-label="Dhruval Padia home">
            <span className="brand-dot" aria-hidden="true" />
            <span>dhruval</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <ExternalLink href={profile.resume}>Resume</ExternalLink>
            <button type="button" onClick={toggleTheme} aria-label="Toggle light and dark theme">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </nav>
        </header>

        <main className="site-main">
          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="live-pill" aria-hidden="true" />
                {profile.role}
              </p>
              <h1 id="hero-title" className="hero-title">
                <span>Dhruval</span>
                <span>Padia</span>
              </h1>
              <p className="hero-lede">{profile.about[0]}</p>

              <div className="hero-actions" aria-label="Primary actions">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  Email
                </a>
                <ExternalLink href={profile.github} className="btn btn-secondary">
                  GitHub
                </ExternalLink>
                <ExternalLink href={profile.resume} className="btn btn-secondary">
                  Resume
                </ExternalLink>
              </div>

              <p className="hero-email">{profile.email}</p>
            </div>

            <div className="hero-board" aria-label="Focus areas">
              <div className="board-card board-card-role">
                <span>Current Role</span>
                <strong>{leadExperience.company}</strong>
                <p>{leadExperience.title}</p>
              </div>

              <div className="board-card board-card-focus">
                <span>Focus Areas</span>
                <div className="hero-focus-list">
                  {valuePills.map((pill) => (
                    <strong key={pill}>{pill}</strong>
                  ))}
                </div>
              </div>

              <div className="board-card board-card-meta">
                <span>{profile.availability}</span>
                <strong>{profile.location}</strong>
              </div>
            </div>
          </section>

          <section className="ticker" aria-label="Capabilities">
            <div className="ticker-track">
              {[...valuePills, ...valuePills].map((pill, index) => (
                <span key={`${pill}-${index}`}>{pill}</span>
              ))}
            </div>
          </section>

          <section id="work" className="section-block" aria-labelledby="work-title">
            <div className="section-heading">
              <h2 id="work-title">Work</h2>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => {
                const hasGithub = project.githubLink !== "#";
                const hasLiveDemo = project.liveLink !== "#";

                return (
                  <article key={project.title} className={`project-card accent-${(index % 5) + 1}`}>
                    <div className="project-media">
                      <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="chip-row" aria-label={`${project.title} technologies`}>
                        {project.tags.slice(0, 6).map((tag) => (
                          <span key={`${project.title}-${tag}`} className="chip">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="project-links">
                        {hasGithub ? (
                          <ExternalLink href={project.githubLink}>
                            GitHub ↗︎
                          </ExternalLink>
                        ) : null}
                        {hasLiveDemo ? (
                          <ExternalLink href={project.liveLink}>
                            Live Demo ↗︎
                          </ExternalLink>
                        ) : (
                          <span>Live demo soon</span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="about" className="section-block" aria-labelledby="about-title">
            <div className="section-heading">
              <h2 id="about-title">About</h2>
            </div>

            <div className="about-grid">
              <article className="studio-note">
                <p>{profile.about[1] || profile.about[0]}</p>
              </article>

              <article className="current-note">
                <p className="eyebrow">Current Role</p>
                <h3>{leadExperience.company}</h3>
                <p>{leadExperience.title}</p>
                <span>{leadExperience.date}</span>
              </article>

              <article className="github-note">
                <div className="note-header">
                  <p className="eyebrow">GitHub Activity</p>
                  <ExternalLink href={profile.github}>
                    GitHub ↗︎
                  </ExternalLink>
                </div>
                <img src={contributionGraphUrl} alt="GitHub contribution graph" loading="lazy" />
                <img src={activityGraphUrl} alt="GitHub activity graph" loading="lazy" />
              </article>

              <article className="connect-note">
                <p className="eyebrow">Connect</p>

                <div className="connect-actions">
                  <a href={`mailto:${profile.email}`}>Email Me</a>
                  <ExternalLink href={profile.resume}>View Resume</ExternalLink>
                </div>

                <div className="connect-links">
                  <ExternalLink href={profile.github}>GitHub ↗︎</ExternalLink>
                  <ExternalLink href={profile.linkedin}>LinkedIn ↗︎</ExternalLink>
                </div>
              </article>

              <article className="experience-note">
                <div className="experience-title-row">
                  <p className="eyebrow">Experience</p>
                  <span>Priority</span>
                </div>
                <h3 className="experience-heading">Professional Experience</h3>
                <div className="experience-list">
                  {experience.map((item) => (
                    <div key={`${item.company}-${item.date}`} className="experience-item">
                      <div>
                        <h3>{item.company}</h3>
                        <p>{item.title}</p>
                      </div>
                      <span>{item.date}</span>
                      <ul>
                        {item.description.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section id="skills" className="section-block" aria-labelledby="skills-title">
            <div className="section-heading">
              <h2 id="skills-title">Skills</h2>
            </div>

            <div className="skill-grid">
              {skills.map((group, index) => (
                <article key={group.category} className={`skill-card accent-${(index % 5) + 1}`}>
                  <h3>{group.category}</h3>
                  <div className="chip-row">
                    {group.items.map((skill) => (
                      <span key={`${group.category}-${skill}`} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block music-block" aria-labelledby="music-title">
            <div className="section-heading">
              <h2 id="music-title">I am really proud of these, so I put them here.</h2>
            </div>

            <div className="music-grid">
              {spotifyPlaylists.map((playlist, index) => {
                const match = playlist.href.match(/playlist\/([a-zA-Z0-9]+)/);
                const embedSrc = match
                  ? `https://open.spotify.com/embed/playlist/${match[1]}?utm_source=generator`
                  : playlist.href;

                return (
                  <article key={playlist.href} className={`playlist-card accent-${index + 1}`}>
                    <div className="playlist-header">
                      <p>{playlist.label}</p>
                      <ExternalLink href={playlist.href}>Open ↗︎</ExternalLink>
                    </div>
                    <iframe
                      src={embedSrc}
                      width="100%"
                      height="352"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={`Spotify playlist: ${playlist.label}`}
                    />
                  </article>
                );
              })}
            </div>
          </section>

          <section id="contact" className="contact-band" aria-labelledby="contact-title">
            <h2 id="contact-title">
              <a href={`mailto:${profile.email}`}>
                Say hi!
                <br />
                Let&apos;s talk
              </a>
            </h2>

            <div className="contact-meta">
              <div>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <p>{profile.location}</p>
              </div>

              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>Email</a>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <ExternalLink href={profile.resume}>Resume</ExternalLink>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <p>Made with ❤️ </p>
          <br />
          <p>© {new Date().getFullYear()} {profile.name}</p>
        </footer>
      </div>

      <nav className="mobile-dock" aria-label="Mobile primary">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
        <button type="button" onClick={toggleTheme} aria-label="Toggle light and dark theme">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </div>
  );
}

export default App;
