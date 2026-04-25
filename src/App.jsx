import { useEffect, useState } from "react";
import { experience, profile, projects, skills, spotifyPlaylists, valuePills } from "./data/portfolio";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

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

  const leadExperience = experience[0];
  const githubUser = "dhruval30";
  const heatmapCacheKey = new Date().toISOString().slice(0, 13);
  const contributionGraphUrl =
    theme === "dark"
      ? `https://ghchart.rshah.org/22c55e/${githubUser}?v=${heatmapCacheKey}`
      : `https://ghchart.rshah.org/0f172a/${githubUser}?v=${heatmapCacheKey}`;
  const activityGraphUrl =
    theme === "dark"
      ? `https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=00000000&color=94a3b8&line=22c55e&point=60a5fa&area=true&hide_border=true`
      : `https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&bg_color=00000000&color=334155&line=16a34a&point=0284c7&area=true&hide_border=true`;

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip text-[rgb(var(--text))]">
      <div className="theme-canvas" aria-hidden="true" />
      <div className="theme-grid" aria-hidden="true" />
      <div className="theme-noise" aria-hidden="true" />

      <button
        type="button"
        onClick={toggleTheme}
        className="glass fixed right-4 top-4 z-30 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] md:hidden"
        aria-label="Toggle light and dark theme"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>

      <div className="relative z-10 mx-auto w-[min(100%,1760px)] px-3 pb-16 pt-3 sm:px-5 lg:px-8 2xl:px-10">
        <header className="glass sticky top-4 z-20 hidden items-center justify-between rounded-full px-4 py-3 md:flex">
          <a href="#top" className="font-display text-base font-bold lowercase tracking-wide">
            dhruval
          </a>

          <nav className="flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-600 transition hover:bg-black/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-500/25 dark:text-emerald-300"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 rounded-full border border-black/15 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:border-black/30 dark:border-white/20 dark:text-slate-100 dark:hover:border-white/50"
              aria-label="Toggle light and dark theme"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </nav>
        </header>

        <main className="space-y-16 pt-2 sm:space-y-24 sm:pt-5">
          <section className="min-h-[86svh] pt-20 sm:pt-16 md:pt-28">
            <p className="section-kicker">{profile.role}</p>
            <h1 className="mt-5 font-display text-[clamp(3.3rem,11vw,11rem)] font-extrabold leading-[0.88] tracking-[-0.04em]">
              Dhruval
              <br />
              Padia
            </h1>

            <div className="mt-8 max-w-[88ch]">
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[1.35rem]">
                {profile.about[0]}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                <a href={`mailto:${profile.email}`} className="hover:text-slate-900 dark:hover:text-white">
                  Email
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                  GitHub
                </a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                  Resume
                </a>
                <span className="hidden h-3 w-px bg-black/20 dark:bg-white/20 sm:inline-block" />
                <span className="normal-case tracking-normal">{profile.email}</span>
              </div>
            </div>

            <div className="marquee-shell mt-12 -mx-3 sm:-mx-5 lg:-mx-8 2xl:-mx-10">
              <div className="marquee-track" aria-label="Expertise marquee">
                <div className="marquee-set">
                  {valuePills.map((pill) => (
                    <span key={`first-${pill}`} className="marquee-item">
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="marquee-set" aria-hidden="true">
                  {valuePills.map((pill) => (
                    <span key={`second-${pill}`} className="marquee-item">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="space-y-5">
            <header>
              <h2 className="mt-3 font-display text-[clamp(2.7rem,8vw,7rem)] font-extrabold tracking-[-0.04em]">Work</h2>
            </header>

            <div className="space-y-3 sm:space-y-4">
              {projects.map((project, index) => {
                const hasGithub = project.githubLink !== "#";
                const hasLiveDemo = project.liveLink !== "#";

                return (
                  <article key={project.title} className="glass overflow-hidden rounded-3xl">
                    <div className="grid min-h-[420px] lg:h-[34rem] lg:grid-cols-[0.95fr_1.05fr]">
                      <div className="relative order-1 h-[220px] sm:h-[280px] lg:order-2 lg:h-full">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full border border-white/20 bg-black/35 text-lg text-white backdrop-blur-sm">
                          ↗︎
                        </div>
                      </div>

                      <div className="order-2 flex h-full flex-col p-5 sm:p-7 lg:order-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{project.title}</h3>
                        <p className="mt-4 max-w-[68ch] text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={`${project.title}-${tag}`} className="outline-chip">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-2">
                          {hasGithub ? (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="outline-chip"
                            >
                              GitHub ↗︎
                            </a>
                          ) : null}

                          {hasLiveDemo ? (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="outline-chip"
                            >
                              Live Demo ↗︎
                            </a>
                          ) : (
                            <span className="text-xs font-semibold uppercase tracking-[0.11em] text-slate-500 dark:text-slate-400">
                              Live demo soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="about" className="space-y-5">
            <header>
              <h2 className="mt-3 font-display text-[clamp(2.7rem,8vw,7rem)] font-extrabold tracking-[-0.04em]">About</h2>
            </header>

            <div className="grid items-stretch gap-4 xl:grid-cols-2">
              <div className="glass flex h-full flex-col rounded-3xl p-5 sm:p-7">
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[1.12rem]">
                  {profile.about[1] || profile.about[0]}
                </p>

                {leadExperience ? (
                  <div className="mt-6 rounded-2xl border border-black/10 bg-white/65 p-4 dark:border-white/10 dark:bg-black/45">
                    <p className="section-kicker">Current Role</p>
                    <h3 className="mt-2 text-xl font-bold">{leadExperience.company}</h3>
                    <p className="text-base text-slate-700 dark:text-slate-200">{leadExperience.title}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
                      {leadExperience.date}
                    </p>
                  </div>
                ) : null}

                <div className="mt-6">
                  <p className="section-kicker">GitHub Activity</p>
                  <div className="mt-3 space-y-3">
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-black/45">
                      <img
                        src={contributionGraphUrl}
                        alt="GitHub contribution graph"
                        loading="lazy"
                        className="h-32 w-full object-contain p-2 sm:h-36"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-black/45">
                      <img
                        src={activityGraphUrl}
                        alt="GitHub activity graph"
                        loading="lazy"
                        className="h-44 w-full object-contain p-2 sm:h-52"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-black/10 bg-white/65 p-4 dark:border-white/10 dark:bg-black/45">
                  <p className="section-kicker">Connect</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-500/25 dark:text-emerald-300"
                    >
                      Email Me
                    </a>
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-black/15 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:border-black/30 dark:border-white/15 dark:bg-slate-950/50 dark:text-slate-200 dark:hover:border-white/40"
                    >
                      View Resume
                    </a>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                      GitHub ↗︎
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                      LinkedIn ↗︎
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass flex h-full flex-col rounded-3xl border border-emerald-400/35 bg-gradient-to-b from-emerald-200/35 via-white/75 to-white/70 p-5 dark:from-emerald-500/12 dark:via-black/55 dark:to-black/80 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="section-kicker">Experience</p>
                  <span className="rounded-full border border-emerald-500/35 bg-emerald-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                    Priority
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Professional Experience</h3>

                <div className="mt-4 space-y-3">
                  {experience.map((item) => (
                    <article
                      key={`${item.company}-${item.date}`}
                      className="rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-black/45"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-xl font-bold">{item.company}</h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500 dark:text-slate-400">
                          {item.date}
                        </p>
                      </div>

                      <p className="mt-1 text-base font-semibold text-slate-700 dark:text-slate-200">{item.title}</p>

                      <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.description.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="space-y-5">
            <header>
              <h2 className="mt-3 font-display text-[clamp(2.7rem,8vw,7rem)] font-extrabold tracking-[-0.04em]">Skills</h2>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              {skills.map((group) => (
                <article key={group.category} className="glass rounded-3xl p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-bold">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={`${group.category}-${skill}`} className="outline-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="space-y-8 pb-10 pt-6 sm:space-y-10 sm:pt-10">
            <h2 className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
              <a href={`mailto:${profile.email}`} className="hover:opacity-80">
                Say hi!
                <br />
                Let&apos;s talk ↗︎
              </a>
            </h2>

            <div className="flex flex-col gap-6 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <a href={`mailto:${profile.email}`} className="block font-medium hover:underline">
                  {profile.email}
                </a>
                <p className="mt-1">{profile.location}</p>
              </div>

              <div className="flex flex-wrap gap-4 text-[11px] font-semibold uppercase tracking-[0.12em]">
                <a href={`mailto:${profile.email}`} className="hover:text-slate-900 dark:hover:text-white">
                  Email
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                  GitHub
                </a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                  Resume
                </a>
              </div>
            </div>
          </section>

          <section className="pb-2">
            <div className="glass rounded-3xl p-4 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  {/* <p className="section-kicker">Personal Cut</p> */}
                  <h3 className="mt-2 text-xl font-bold text-slate-800 dark:text-slate-100 sm:text-2xl">
                    I am really proud of these, so I put them here.
                  </h3>
                </div>
                {/* <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-current" />
                </span> */}
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                {spotifyPlaylists.map((playlist) => {
                  const match = playlist.href.match(/playlist\/([a-zA-Z0-9]+)/);
                  const embedSrc = match
                    ? `https://open.spotify.com/embed/playlist/${match[1]}?utm_source=generator`
                    : playlist.href;

                  return (
                    <div
                      key={playlist.href}
                      className="overflow-hidden rounded-2xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-black/45"
                    >
                      <div className="flex items-center justify-between border-b border-black/10 px-3 py-2 dark:border-white/10">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-300">
                          {playlist.label}
                        </p>
                        <a
                          href={playlist.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Open ↗︎
                        </a>
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
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-8 border-t border-black/10 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:border-white/10 dark:text-slate-400">
          <p>Made with ❤️ </p>
          <br/>
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </div>
  );
}

export default App;
