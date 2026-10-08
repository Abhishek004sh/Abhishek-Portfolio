import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDownRight, ArrowUpRight, MapPin, Menu, X } from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Selected work' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <div className="wrap nav-inner">
          <a className="wordmark" href="#top" aria-label="Abhishek Sharma — back to top">AS<span>.</span></a>
          <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.id} className={activeSection === item.id ? 'active' : ''} href={`#${item.id}`} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>A little more about me <ArrowUpRight size={13} /></a>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="wrap hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="availability" /> Computer science student · GLA University</div>
            <h1 id="hero-title">Abhishek<span>Sharma.</span></h1>
            <p className="hero-intro">
              I’m a developer from Agra who learns by making things that solve <strong>real, everyday problems.</strong>
              Currently studying computer science, shipping full-stack experiments, and getting better one build at a time.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">See what I’m building <ArrowDownRight size={15} /></a>
              <a className="button-secondary" href="#journey">The short version <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract AS monogram illustration">
            <div className="orbit" />
            <div className="hero-grid" />
            <div className="hero-monogram" aria-hidden="true">A<span style={{ color: '#e66745' }}>S</span></div>
            <div className="art-note note-top"><small>Current coordinates</small>27.21° N / 78.00° E<br />Agra, India</div>
            <div className="art-note note-bottom"><small>On the workbench</small>AssetGuard<br />MERN · practical by design</div>
            <div className="hero-index">PORTFOLIO / 2025—26</div>
          </div>
        </section>

        <div className="ticker" aria-label="A few things about Abhishek">
          <div className="wrap ticker-track">
            <span><b>01 /</b> Full-stack builder</span><span><b>02 /</b> 400+ DSA problems</span>
            <span><b>03 /</b> Class of 2027</span><span><b>04 /</b> Agra, India</span>
          </div>
        </div>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-head">
              <div><div className="section-kicker">A little context</div><h2 className="section-title" id="about-title">Not just coursework.</h2></div>
              <p className="section-aside">A student first. A builder by habit. Still early in the journey—and very much in motion.</p>
            </div>
            <div className="about-grid">
              <p className="about-statement">
                The best way I’ve found to understand a concept is to <em>give it a job to do.</em>
              </p>
              <div className="about-detail">
                <p>I’m pursuing a B.Tech in Computer Science at GLA University in Mathura. Outside class, I like turning useful ideas into working software: designing the data model, building the API, and then making the interface make sense.</p>
                <p>Recently that’s meant an asset and warranty tracker, a deeper dive into generative AI, and a steady stretch of problem-solving practice. I’m interested in the unglamorous details that make a tool dependable.</p>
                <div className="stats">
                  <div className="stat"><strong>400<span style={{ color: '#e66745' }}>+</span></strong><span>DSA problems solved</span></div>
                  <div className="stat"><strong>2027</strong><span>Expected graduation</span></div>
                  <div className="stat"><strong>3</strong><span>Schools in Agra & Mathura</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section project-section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
              <div><div className="section-kicker">Selected work / 01</div><h2 className="section-title" id="work-title">Built to be useful.</h2></div>
              <p className="section-aside">A personal project about the small but costly things businesses lose track of.</p>
            </div>
            <article className="project-card">
              <div className="project-visual" aria-label="Illustration of the AssetGuard workspace dashboard">
                <div className="visual-grid" />
                <div className="asset-window">
                  <div className="window-top"><div className="window-logo">asset<span>guard</span></div><div className="window-tag">WORKSPACE / OWNER</div></div>
                  <div className="window-content">
                    <div className="window-label">Your workspace</div>
                    <div className="window-heading">Keep the details covered.</div>
                    <div className="asset-stats">
                      <div className="asset-stat"><b>24</b><small>Assets</small></div>
                      <div className="asset-stat"><b>08</b><small>Warranties</small></div>
                      <div className="asset-stat"><b>03</b><small>Renewals</small></div>
                    </div>
                    <div className="asset-row"><span>Office laptop · INV-042</span><span className="asset-status">WARRANTY ACTIVE</span></div>
                    <div className="asset-row"><span>Design suite · SUB-018</span><span>RENEWS 14 AUG</span></div>
                  </div>
                </div>
              </div>
              <div className="project-copy">
                <div className="project-meta"><span /> MERN application</div>
                <h3 id="assetguard-title">AssetGuard</h3>
                <p>A workspace-based platform for keeping assets, subscriptions, and warranty dates in one dependable place. Built around a simple idea: the information that protects a purchase should be easy to find.</p>
                <ul className="feature-list">
                  <li>OWNER and MEMBER roles keep workspace access clear.</li>
                  <li>Workspace data isolation across asset and subscription records.</li>
                  <li>REST APIs for assets, subscriptions, and warranty tracking.</li>
                  <li>Cloudinary invoice uploads alongside the records they belong to.</li>
                </ul>
                <div className="tech-list" aria-label="Technologies used">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'REST APIs'].map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="journey" aria-labelledby="journey-title">
          <div className="wrap">
            <div className="section-head">
              <div><div className="section-kicker">Where I’ve been learning</div><h2 className="section-title" id="journey-title">The foundation.</h2></div>
              <p className="section-aside">Academic milestones, a focused training stint, and the occasional challenge outside the syllabus.</p>
            </div>
            <div className="dual-column">
              <div>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-year">2023 — 2027</div>
                    <div><h3>B.Tech, Computer Science</h3><p>GLA University · Mathura</p><div className="result">78.4% · in progress</div></div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2023</div>
                    <div><h3>Intermediate</h3><p>Mount Litera Zee School · Agra</p><div className="result">88%</div></div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-year">2021</div>
                    <div><h3>High School</h3><p>Baluni Public School · Agra</p><div className="result">86.8%</div></div>
                  </div>
                </div>
                <div className="training-card">
                  <div className="small-label">Focused learning / June–July 2025</div>
                  <h3>Generative AI foundations & tools</h3>
                  <p>Completed a Job Oriented Value-Added Course at GLA University, Mathura, covering generative AI foundations and real-world tools and frameworks.</p>
                </div>
              </div>
              <div>
                <div className="section-kicker">Beyond the classroom</div>
                <div className="note-panel">
                  <label>Challenge accepted</label>
                  <p>Participated in the Tata Crucible campus quiz.</p>
                  <small>Curiosity doesn’t stay in one subject.</small>
                </div>
                <div className="note-panel" style={{ marginTop: 16, background: '#e9e6dd' }}>
                  <label>Daily practice</label>
                  <p>400+ data structures and algorithms problems solved—and counting.</p>
                  <small>Across LeetCode and GeeksforGeeks.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <div className="section-head">
              <div><div className="section-kicker">The tools & the habits</div><h2 className="section-title" id="skills-title">How I work.</h2></div>
              <p className="section-aside">Technologies I’ve put to use, paired with the working habits I’m trying to sharpen.</p>
            </div>
            <div className="dual-column">
              <div>
                <p className="skills-copy">I’m most at home building across the stack—moving from a React interface to an Express route, then thinking about what the data model needs to hold up.</p>
                <div className="skill-groups">
                  <div className="skill-group"><label>Languages</label><div className="skill-chips"><span className="skill-chip">Java</span><span className="skill-chip">JavaScript</span></div></div>
                  <div className="skill-group"><label>Frontend</label><div className="skill-chips"><span className="skill-chip">React.js</span><span className="skill-chip">HTML</span><span className="skill-chip">CSS</span></div></div>
                  <div className="skill-group"><label>Backend</label><div className="skill-chips"><span className="skill-chip">Node.js</span><span className="skill-chip">Express.js</span><span className="skill-chip">REST APIs</span><span className="skill-chip">JWT</span></div></div>
                  <div className="skill-group"><label>Databases & media</label><div className="skill-chips"><span className="skill-chip">MongoDB</span><span className="skill-chip">MySQL</span><span className="skill-chip">Cloudinary</span></div></div>
                  <div className="skill-group"><label>Foundations</label><div className="skill-chips"><span className="skill-chip">Data structures</span><span className="skill-chip">Algorithms</span><span className="skill-chip">Problem solving</span></div></div>
                </div>
              </div>
              <div>
                <div className="section-kicker">Professional strengths</div>
                <p className="skills-copy" style={{ marginTop: 18 }}>The habits I bring to new problems: clear communication, analytical thinking, and a willingness to adapt and keep learning.</p>
                <div className="soft-skills">
                  <span>Effective communication</span><span>Problem solving</span><span>Analytical thinking</span><span>Adaptability</span><span>Continuous learning</span>
                </div>
                <div className="note-panel">
                  <label>What I’m looking for</label>
                  <p>Room to contribute, good problems to learn from, and a team that cares how the details fit together.</p>
                  <small>Early-career developer · Class of 2027</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contact-wrap">
              <div>
                <div className="section-kicker">The next chapter</div>
                <h2 id="contact-title">Let’s make<br /><span>something</span><br />matter.</h2>
                <p className="contact-blurb">I’m working toward the next opportunity to learn by doing. If you’re building something thoughtful, I’d be glad to hear about it.</p>
              </div>
              <div className="contact-card">
                <small>Currently between</small>
                <div className="contact-location"><MapPin size={16} style={{ verticalAlign: '-3px', color: '#e66745', marginRight: 6 }} /> Agra & Mathura, India</div>
                <a className="contact-phone" href="tel:+917417004329" data-testid="link-phone-contact">+91 7417004329</a>
                <a className="button-primary" href="#work">Start with the work <ArrowUpRight size={14} /></a>
              </div>
            </div>
            <footer className="footer">
              <span>© {new Date().getFullYear()} Abhishek Sharma</span>
              <span>Made with curiosity, in India.</span>
              <a href="#top">Back to the top ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
