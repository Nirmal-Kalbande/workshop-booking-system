import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError("Passwords don't match."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username: form.username, email: form.email, password: form.password }),
        credentials: "include",
      });
      if (res.ok || res.redirected) navigate("/login");
      else setError("Registration failed. Username may already exist.");
    } catch {
      navigate("/login");
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-brand">
          <span className="brand-dot" />
          <span>FOSSEE Workshops</span>
        </div>
        <div className="auth-tagline">
          <h1>Start your<br /><em>journey</em> today.</h1>
          <p>Create a free account and get access to hundreds of open-source workshops powered by IIT Bombay.</p>
        </div>
        <div className="auth-stats">
          <div className="stat"><strong>Free</strong><span>Always</span></div>
          <div className="stat"><strong>Open</strong><span>Source</span></div>
          <div className="stat"><strong>Certified</strong><span>Courses</span></div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card-header">
            <h2>Create account</h2>
            <p>It's free and always will be</p>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handle} className="auth-form">
            <div className="field">
              <label>Username</label>
              <input type="text" placeholder="Choose a username" value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })} required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" placeholder="Create a password" value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })} required />
            </div>
            <div className="field">
              <label>Confirm Password</label>
              <input type="password" placeholder="Repeat your password" value={form.confirm}
                onChange={e => setForm({ ...form, confirm: e.target.value })} required />
            </div>
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? <span className="spinner" /> : "Create Account →"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
