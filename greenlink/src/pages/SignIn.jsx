import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const [role, setRole] = useState("authority");
  const [showPw, setShowPw] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // You can add authentication logic here later
    navigate("/home", { state: { role } });
  };

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-logo">
          Green<span>Link</span>
        </div>

        <div className="nav-links">
  <Link to="/home">🏠 Home</Link>
  <Link to="/campus">🎓 College</Link>
  <Link to="/profile">👤 Profile</Link>
</div>
      </nav>

      {/* MAIN */}
      <main className="main">
        <div className="signin-card">

          {/* LEFT PANEL */}
          <div className="form-panel">
            <h1 className="brand-title">
              Green<span className="link-text">Link</span>
            </h1>

            <p className="tagline">
              Where campus meets sustainability
            </p>

            {/* ROLE TOGGLE */}
            <div className="role-toggle">
              <button
                className={`role-btn ${role === "authority" ? "active" : ""}`}
                onClick={() => setRole("authority")}
              >
                🏛️ Authority
              </button>

              <button
                className={`role-btn ${role === "student" ? "active" : ""}`}
                onClick={() => setRole("student")}
              >
                🎒 Student
              </button>
            </div>

            {/* INPUTS */}
            <div className="input-group">
              <div className="input-wrap">
                <input type="email" placeholder="Email address" />
              </div>

              <div className="input-wrap">
                <input
                  type={showPw ? "text" : "password"}
                  placeholder="Password"
                />
                <span
                  className="input-icon"
                  onClick={() => setShowPw(!showPw)}
                >
                  👁
                </span>
              </div>
            </div>

            <div className="forgot">Forgot Password?</div>

            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>

            <div className="divider">or continue with</div>

            <div className="social-row">
              <button className="social-btn"> G </button>
              <button className="social-btn"> in </button>
              <button className="social-btn"> f </button>
            </div>

            <p className="register-link">
              Not a member? <a href="#">Register now</a>
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="illustration-panel">
            <div className="leaf">🌿</div>
            <div className="leaf leaf2">🍃</div>
            <div className="leaf leaf3">🌱</div>
            <div className="plant">🌱</div>

            <div className="panel-caption">
              <p>
                Make your campus greener <br />
                with <strong>GreenLink</strong>
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}