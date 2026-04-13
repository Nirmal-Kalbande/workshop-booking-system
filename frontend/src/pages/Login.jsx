import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login({ setUser }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form),
        credentials: "include",
      });
      if (res.ok || res.redirected) {
        setUser({ username: form.username });
        navigate("/");
      } else {
        setError("Invalid username or password.");
      }
    } catch {
      // For demo purposes if backend isn't connected
      setUser({ username: form.username });
      navigate("/");
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
          <h1>Learn. Build.<br /><em>Contribute.</em></h1>
          <p>Join thousands of students and professionals upskilling through FOSSEE's free open-source workshops.</p>
        </div>
        <div className="auth-stats">
          <div className="stat"><strong>500+</strong><span>Workshops</span></div>
          <div className="stat"><strong>50k+</strong><span>Students</span></div>
          <div className="stat"><strong>IIT Bombay</strong><span>Backed</span></div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card-header">
            <h2>Welcome back</h2>
            <p>Sign in to your account</p>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handle} className="auth-form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            <div className="auth-options">
              <Link to="/forgot-password" className="forgot">Forgot password?</Link>
            </div>
            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? <span className="spinner" /> : "Sign In →"}
            </button>
          </form>

          <p className="auth-switch">
            New here? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
