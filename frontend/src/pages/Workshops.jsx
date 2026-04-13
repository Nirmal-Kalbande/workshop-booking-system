import { useState } from "react";
import { Link } from "react-router-dom";
import "./Workshops.css";

const MOCK_WORKSHOPS = [
  { id: 1, title: "Python for Scientific Computing", category: "Python", date: "Apr 20, 2026", seats: 45, level: "Beginner", duration: "2 days" },
  { id: 2, title: "Advanced Scilab Simulations", category: "Scilab", date: "Apr 25, 2026", seats: 30, level: "Advanced", duration: "3 days" },
  { id: 3, title: "Data Analysis with R", category: "R Language", date: "May 2, 2026", seats: 60, level: "Intermediate", duration: "2 days" },
  { id: 4, title: "OpenFOAM CFD Workshop", category: "OpenFOAM", date: "May 8, 2026", seats: 20, level: "Advanced", duration: "5 days" },
  { id: 5, title: "Chemical Process Simulation with DWSIM", category: "DWSIM", date: "May 14, 2026", seats: 35, level: "Intermediate", duration: "2 days" },
  { id: 6, title: "Circuit Design with eSim", category: "eSim", date: "May 20, 2026", seats: 50, level: "Beginner", duration: "1 day" },
];

const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
const CATS = ["All", "Python", "Scilab", "R Language", "OpenFOAM", "DWSIM", "eSim"];

export default function Workshops() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [cat, setCat] = useState("All");

  const filtered = MOCK_WORKSHOPS.filter(w => {
    const matchSearch = w.title.toLowerCase().includes(search.toLowerCase());
    const matchLevel = level === "All" || w.level === level;
    const matchCat = cat === "All" || w.category === cat;
    return matchSearch && matchLevel && matchCat;
  });

  return (
    <div className="workshops-page">
      <div className="workshops-header">
        <div className="workshops-header-inner">
          <h1>All Workshops</h1>
          <p>Browse and book from hundreds of free open-source workshops</p>
        </div>
      </div>

      <div className="workshops-body">
        {/* FILTERS */}
        <aside className="filters">
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search workshops..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="filter-input"
            />
          </div>
          <div className="filter-group">
            <label>Category</label>
            <div className="filter-pills">
              {CATS.map(c => (
                <button key={c} className={`pill ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <label>Level</label>
            <div className="filter-pills">
              {LEVELS.map(l => (
                <button key={l} className={`pill ${level === l ? "active" : ""}`} onClick={() => setLevel(l)}>{l}</button>
              ))}
            </div>
          </div>
        </aside>

        {/* CARDS */}
        <div className="workshops-grid">
          <div className="results-count">{filtered.length} workshop{filtered.length !== 1 ? "s" : ""} found</div>
          {filtered.length === 0 ? (
            <div className="empty-state">
              <span>🔍</span>
              <p>No workshops match your filters.</p>
              <button onClick={() => { setSearch(""); setLevel("All"); setCat("All"); }}>Clear filters</button>
            </div>
          ) : (
            filtered.map(w => (
              <div className="workshop-card" key={w.id}>
                <div className="wcard-top">
                  <span className="wcard-cat">{w.category}</span>
                  <span className={`wcard-level ${w.level.toLowerCase()}`}>{w.level}</span>
                </div>
                <h3 className="wcard-title">{w.title}</h3>
                <div className="wcard-meta">
                  <span>📅 {w.date}</span>
                  <span>⏱ {w.duration}</span>
                  <span>👥 {w.seats} seats left</span>
                </div>
                <div className="wcard-footer">
                  <Link to={`/workshops/${w.id}`} className="wcard-btn">View Details →</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
