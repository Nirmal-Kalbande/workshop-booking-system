import { Link } from "react-router-dom";
import "./Home.css";

const features = [
  { icon: "⚡", title: "Live Workshops", desc: "Join real-time sessions led by IIT Bombay faculty and industry experts." },
  { icon: "📦", title: "Open Source Tools", desc: "Learn Scilab, Python, R, and more — all free, all open source." },
  { icon: "🎓", title: "Certified Learning", desc: "Get certificates recognized by academia and industry across India." },
  { icon: "🌐", title: "Remote Friendly", desc: "Attend from anywhere. All workshops are accessible online." },
];

const categories = [
  { name: "Python", count: "120+ workshops", color: "#3b82f6" },
  { name: "Scilab", count: "80+ workshops", color: "#10b981" },
  { name: "R Language", count: "60+ workshops", color: "#f59e0b" },
  { name: "OpenFOAM", count: "40+ workshops", color: "#ef4444" },
  { name: "DWSIM", count: "35+ workshops", color: "#8b5cf6" },
  { name: "eSim", count: "30+ workshops", color: "#ec4899" },
];

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">🏛️ Powered by IIT Bombay</div>
        <h1 className="hero-title">
          Free Workshops for<br />
          <span>Open Source</span> India
        </h1>
        <p className="hero-sub">
          FOSSEE brings world-class technical education to every corner of India —
          completely free, open source, and community-driven.
        </p>
        <div className="hero-actions">
          <Link to="/workshops" className="btn-primary">Browse Workshops →</Link>
          <Link to="/register" className="btn-ghost">Create Free Account</Link>
        </div>
        <div className="hero-numbers">
          <div className="num"><strong>500+</strong><span>Workshops</span></div>
          <div className="num-sep" />
          <div className="num"><strong>50,000+</strong><span>Students</span></div>
          <div className="num-sep" />
          <div className="num"><strong>300+</strong><span>Institutions</span></div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {["Python", "Scilab", "R Language", "OpenFOAM", "DWSIM", "eSim", "Osdag", "QGIS",
            "Python", "Scilab", "R Language", "OpenFOAM", "DWSIM", "eSim", "Osdag", "QGIS"].map((t, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="section features-section">
        <div className="section-label">Why FOSSEE?</div>
        <h2 className="section-title">Built for serious learners</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section categories-section">
        <div className="section-label">Explore Topics</div>
        <h2 className="section-title">What do you want to learn?</h2>
        <div className="categories-grid">
          {categories.map((c, i) => (
            <Link to="/workshops" key={i} className="category-card">
              <div className="cat-color" style={{ background: c.color }} />
              <div>
                <h3>{c.name}</h3>
                <span>{c.count}</span>
              </div>
              <div className="cat-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to start learning?</h2>
          <p>Join thousands of students already building with open source tools.</p>
          <Link to="/register" className="btn-primary large">Get Started — It's Free</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-dot" />
            FOSSEE <em>Workshops</em>
          </div>
          <p>Developed by FOSSEE group, IIT Bombay</p>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
