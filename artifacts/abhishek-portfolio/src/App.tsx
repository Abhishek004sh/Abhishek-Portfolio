import { useEffect, useRef, useState } from 'react';
import resumePdf from '@assets/Abhishek_CS_GLAU_(1)_1791457313659.pdf';
import { ArrowDownRight, ArrowDownToLine, ArrowUpRight, Menu, Plus, X } from 'lucide-react';

const links = {
  github: 'https://github.com/Abhishek004sh',
  linkedin: 'https://www.linkedin.com/in/abhishek-sharma-00b4a2225/',
  gitdocs: 'https://github.com/adi06112004/Gitdocs-fe',
  email: 'mailto:as6911904@gmail.com',
};

function AssetGuardIllustration() {
  return (
    <div className="mockup" role="img" aria-label="Abstract illustration of an AssetGuard workspace with asset, warranty, and subscription records">
      <div className="mock-frame" aria-hidden="true">
        <div className="mock-toolbar"><span><i className="mock-dot" />ASSETGUARD / WORKSPACE</span><span>OWNER · MEMBER</span></div>
        <div className="mock-columns">
          <div className="mock-sidebar" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="mock-main">
            <div className="mock-heading">Assets &amp; records</div>
            <div className="mock-row"><div className="mock-lines"><i /><i /></div><span className="mock-tag">ASSET</span></div>
            <div className="mock-row"><div className="mock-lines"><i /><i /></div><span className="mock-tag">WARRANTY</span></div>
            <div className="mock-row"><div className="mock-lines"><i /><i /></div><span className="mock-tag">SUBSCRIPTION</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GitDocsIllustration() {
  return (
    <div className="mockup gitdocs-art" role="img" aria-label="Abstract illustration of a GitDocs project document and branch history workspace">
      <div className="gitdocs-shell" aria-hidden="true">
        <div className="gitdocs-header"><span>GITDOCS / PROJECT</span><span>DOCUMENT WORKSPACE</span></div>
        <div className="gitdocs-layout">
          <div className="gitdocs-nav" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="gitdocs-doc">
            <h4>Document</h4><div className="doc-rule" /><div className="doc-rule" /><div className="doc-rule short" />
          </div>
        </div>
        <div className="branch-map" aria-hidden="true"><i className="branch-node" /><i className="branch-node second" /></div>
      </div>
    </div>
  );
}

function LabSection() {
  return (
    <section className="section" id="lab" aria-labelledby="lab-title">
      <div className="section-heading reveal">
        <div><p className="section-kicker">03 / Lab</p><h2 className="section-title" id="lab-title">Experiments</h2></div>
        <p className="section-aside">A small record of ongoing practice.</p>
      </div>
      <div className="lab reveal">
        <div className="lab-copy">
          <span className="lab-number">400+</span>
          <div><h3>Problem solving</h3><p>Data-structure and algorithm problems solved across LeetCode and GeeksforGeeks.</p></div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    <section className="section" id="resume" aria-labelledby="resume-title">
      <div className="section-heading reveal">
        <div><p className="section-kicker">04 / Document</p><h2 className="section-title" id="resume-title">Resume</h2></div>
        <p className="section-aside">A concise PDF snapshot of my background.</p>
      </div>
      <div className="resume-preview-wrap reveal">
        <iframe
          className="resume-preview"
          src={resumePdf}
          title="Abhishek Sharma resume preview"
          loading="lazy"
        >
          <p>Resume preview is unavailable in this browser. <a href={resumePdf}>Open the PDF</a>.</p>
        </iframe>
      </div>
      <div className="resume-actions">
        <a className="button" href={resumePdf} target="_blank" rel="noreferrer" data-testid="link-view-resume">View Resume <ArrowUpRight size={12} aria-hidden="true" /></a>
        <a className="button secondary" href={resumePdf} download="Abhishek-Sharma-Resume.pdf" data-testid="link-download-resume">Download PDF <ArrowDownToLine size={12} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

function ProjectArchive() {
  const [openProject, setOpenProject] = useState<string | null>('assetguard');
  const projects = [
    {
      id: 'assetguard',
      index: '01',
      name: 'AssetGuard',
      kind: 'FULL-STACK / MERN',
      summary: 'A workspace-based system for tracking personal and organizational assets, warranties, and subscriptions.',
      illustration: <AssetGuardIllustration />,
      repo: undefined,
      problem: 'Keeping personal and organizational asset records, warranties, subscriptions, and invoices organized within workspaces.',
      solution: 'A MERN application with OWNER / MEMBER role access, workspace-level data isolation, and REST workflows for assets, subscriptions, workspaces, and warranties. Invoice uploads use Cloudinary.',
      technologies: 'React · Node.js · Express · MongoDB · JWT · Cloudinary · REST APIs',
      challenge: 'Implementing workspace-level data isolation alongside distinct OWNER and MEMBER access across related workflows.',
      result: 'A full-stack application that brings asset records, warranty details, subscription tracking, and invoice uploads into a workspace.',
    },
    {
      id: 'gitdocs',
      index: '02',
      name: 'GitDocs',
      kind: 'FRONTEND / GIT-AWARE DOCS',
      summary: 'A document workspace shaped around familiar Git concepts: projects, documents, branches, versions, and commit history.',
      illustration: <GitDocsIllustration />,
      repo: links.gitdocs,
      problem: 'Organizing project documents alongside branch, version, and commit-history concepts.',
      solution: 'A React frontend organized around projects and documents, with branches, versions, and commit history as core workspace concepts. The README documents the API requirements.',
      technologies: 'React 19 · Redux Toolkit · React Router · Tailwind · Axios · Tiptap',
      challenge: 'The frontend depends on API functionality; its README documents the API requirements. This repository does not include an implemented backend.',
      result: 'A frontend repository for a Git-aware document workspace. The repository is frontend-only; no implemented backend or deployment is claimed.',
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project) => {
        const expanded = openProject === project.id;
        const panelId = `${project.id}-details`;
        return (
          <article className="project" key={project.id}>
            <h3 className="project-heading">
              <button
                className="project-trigger"
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenProject(expanded ? null : project.id)}
                data-testid={`button-project-${project.id}`}
              >
                <span className="project-index">{project.index}</span>
                <span className="project-name">{project.name}</span>
                <span className="project-kind">{project.kind}</span>
                <span className="project-toggle" aria-hidden="true"><Plus size={14} strokeWidth={1.5} /></span>
              </button>
            </h3>
              <div className="project-panel" id={panelId} role="region" aria-label={`${project.name} project details`} hidden={!expanded}>
                <div className="project-content">
                  <div>
                    <p className="project-summary">{project.summary}</p>
                    {project.repo && (
                      <a className="project-repo" href={project.repo} target="_blank" rel="noreferrer" data-testid="link-gitdocs-repository">
                        OPEN REPOSITORY <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    )}
                    <div className="status-label">PROJECT RECORD / {project.index}</div>
                  </div>
                  {project.illustration}
                  <div className="facts-grid">
                    <div className="fact"><h4 className="detail-label">Problem</h4><p>{project.problem}</p></div>
                    <div className="fact"><h4 className="detail-label">Solution</h4><p>{project.solution}</p></div>
                    <div className="fact tech-line"><h4 className="detail-label">Technologies</h4><p>{project.technologies}</p></div>
                    <div className="fact"><h4 className="detail-label">Challenges</h4><p>{project.challenge}</p></div>
                    <div className="fact"><h4 className="detail-label">Result</h4><p>{project.result}</p></div>
                  </div>
                </div>
              </div>
          </article>
        );
      })}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));

    const finePointer = window.matchMedia('(pointer: fine) and (min-width: 901px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cursorEnabled = finePointer.matches && !reducedMotion.matches;
    if (cursorEnabled) {
      document.body.classList.add('cursor-ready');
      const moveCursor = (event: PointerEvent) => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
        }
      };
      window.addEventListener('pointermove', moveCursor, { passive: true });
      return () => {
        observer.disconnect();
        window.removeEventListener('pointermove', moveCursor);
        document.body.classList.remove('cursor-ready');
      };
    }
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <div className="wrap nav-inner">
          <a className="wordmark" href="#top" aria-label="Abhishek Sharma, top">AS<span>/</span>SYS</a>
          <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Workspace navigation">
            <a href="#work" onClick={closeMenu}>Archive</a>
            <a href="#profile" onClick={closeMenu}>Profile</a>
            <a href="#lab" onClick={closeMenu}>Lab</a>
            <a href="#resume" onClick={closeMenu}>Resume</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={12} aria-hidden="true" /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </header>

      <main id="main" className="wrap workspace">
        <aside className="rail" aria-label="Workspace index">
          <div className="rail-mark" aria-hidden="true">AS</div>
          <div className="rail-title">WORKSPACE INDEX</div>
          <a href="#work">01 — Archive</a>
          <a href="#profile">02 — Profile</a>
          <a href="#lab">03 — Lab</a>
          <a href="#resume">04 — Resume</a>
          <a href="#contact">05 — Contact</a>
          <div className="rail-bottom">PERSONAL SYSTEM<br />SOFTWARE DEVELOPER</div>
        </aside>

        <div className="main-column">
          <section className="hero" aria-labelledby="hero-title">
            <div>
              <div className="terminal" aria-label="Terminal introduction">
                <div className="terminal-line"><span className="terminal-prompt">&gt;</span><span>INITIALIZING...</span></div>
                <div className="terminal-line"><span className="terminal-prompt">&gt;</span><span className="terminal-identity">DEVELOPER: ABHISHEK SHARMA</span></div>
                <div className="terminal-line"><span className="terminal-prompt">&gt;</span><span>ROLE: SOFTWARE DEVELOPER</span></div>
              </div>
              <p className="hero-topline">PERSONAL DEVELOPER SYSTEM / 001</p>
              <h1 id="hero-title" className="reveal">I BUILD SOFTWARE THAT <span>SOLVES REAL PROBLEMS.</span></h1>
            </div>
            <div className="hero-bottom">
              <div className="hero-action-group">
                <p className="hero-subline">A B.Tech Computer Science student focused on building useful software, understanding the systems beneath it, and getting the details right.</p>
                <a className="hero-archive-link" href="#work">Explore project archive <ArrowDownRight size={13} aria-hidden="true" /></a>
              </div>
              <p className="hero-intent">FOCUS / <strong>SOFTWARE DEVELOPMENT</strong><br />MODE / <strong>FULL-STACK · DSA</strong></p>
            </div>
          </section>

          <section className="section" id="work" aria-labelledby="work-title">
            <div className="section-heading reveal">
              <div><p className="section-kicker">01 / Project archive</p><h2 className="section-title" id="work-title">Selected systems</h2></div>
              <p className="section-aside">A record of software built around practical problems. Open a project to inspect the details.</p>
            </div>
            <ProjectArchive />
          </section>

          <section className="section" id="profile" aria-labelledby="profile-title">
            <div className="section-heading reveal">
              <div><p className="section-kicker">02 / Profile</p><h2 className="section-title" id="profile-title">How I work</h2></div>
              <p className="section-aside">A compact read on current focus and tools.</p>
            </div>
            <div className="profile-grid reveal">
              <div className="profile-block">
                <h3>Focus</h3>
                <p>Software Development / Full-Stack / DSA</p>
              </div>
              <div className="profile-block">
                <h3>Stack</h3>
                <div className="stack-list" aria-label="Technology stack">
                  {['Java', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Git'].map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </section>

          <LabSection />
          <ResumeSection />

          <section className="contact" id="contact" aria-labelledby="contact-title">
            <p className="section-kicker">05 / Open channel</p>
            <h2 className="contact-heading reveal" id="contact-title">LET'S BUILD<br /><span>SOMETHING USEFUL.</span></h2>
            <div className="contact-bottom">
              <div className="contact-links" aria-label="Contact and profile links">
                <a href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={11} aria-hidden="true" /></a>
                <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={11} aria-hidden="true" /></a>
                <a className="email-link" href={links.email}>as6911904@gmail.com <ArrowUpRight size={11} aria-hidden="true" /></a>
                <a href={resumePdf} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={11} aria-hidden="true" /></a>
              </div>
              <footer className="footer">ABHISHEK SHARMA · SOFTWARE DEVELOPER · <a href="#top">BACK TO TOP ↑</a></footer>
            </div>
          </section>
        </div>
      </main>
      <div className="cursor-dot" ref={cursorRef} aria-hidden="true" />
    </div>
  );
}

export default App;
