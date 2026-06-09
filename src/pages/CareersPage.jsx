import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Navbar";
import { jobListings, categories } from "../data/careersData";
import "./CareersPage.css";

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const jobsRef = useRef(null);
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    window.scrollTo(0, 0);
    navigate(`/careers/${id}`);
  };

  const filtered =
    activeCategory === "All"
      ? jobListings
      : jobListings.filter((job) => job.category === activeCategory);

  return (
    <div className="car-root">
      <Navbar />

      {/* HERO */}
      <section className="car-hero">
        <div className="car-hero-inner">
          <span className="car-badge">Join Our Team</span>
          <h1 className="car-hero-title">
            It's Your Career.{" "}
            <span className="car-accent">We Help to Make</span>
            <br />
            It Different.
          </h1>
          <p className="car-hero-sub">
            We Never Stop Looking for Great Talent. Explore open roles and find
            where you fit in our growing team.
          </p>
          <Link to="/" className="car-back-home">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="car-stats">
        <div className="car-stat">
          <span className="car-stat-num">10+</span>
          <span className="car-stat-label">Open Positions</span>
        </div>
        <div className="car-stat-divider" />
        <div className="car-stat">
          <span className="car-stat-num">200+</span>
          <span className="car-stat-label">Team Members</span>
        </div>
        <div className="car-stat-divider" />
        <div className="car-stat">
          <span className="car-stat-num">5+</span>
          <span className="car-stat-label">Years of Growth</span>
        </div>
        <div className="car-stat-divider" />
        <div className="car-stat">
          <span className="car-stat-num">4</span>
          <span className="car-stat-label">Departments Hiring</span>
        </div>
      </div>

      {/* JOBS SECTION */}
      <section className="car-section" id="positions" ref={jobsRef}>
        <div className="car-container">
          {/* SIDEBAR */}
          <aside className="car-sidebar">
            <div className="car-sidebar-card">
              {/* E-Verify */}
              <div className="car-everify">
                <div className="car-everify-badge">E-Verify®</div>
                <p className="car-everify-text">
                  E-Verify® is a registered trademark of the U.S. Department of
                  Homeland Security.
                </p>
              </div>
            </div>

            {/* CULTURE CARD */}
            <div className="car-culture-card">
              <h3 className="car-culture-title">Why Narvee Tech?</h3>
              <ul className="car-culture-list">
                <li>🌎 Remote-friendly culture</li>
                <li>📈 Fast career growth</li>
                <li>🤝 Collaborative teams</li>
                <li>💡 Cutting-edge tech stack</li>
                <li>🏥 Competitive benefits</li>
              </ul>
            </div>
          </aside>

          {/* JOB LISTINGS */}
          <div className="car-jobs-col">
            <div className="car-jobs-header">
              <h2 className="car-jobs-heading">Open Positions</h2>
              <span className="car-jobs-count">
                {filtered.length} role{filtered.length !== 1 ? "s" : ""}{" "}
                available
              </span>
            </div>

            <div className="car-jobs-list">
              {filtered.map((job) => (
                <div className="car-job-card" key={job.id}>
                  <div className="car-job-top">
                    <div>
                      <span className="car-job-category">{job.category}</span>
                      <h3 className="car-job-title">{job.title}</h3>
                    </div>
                    <button
                      onClick={() => handleViewDetails(job.id)}
                      className="car-job-arrow"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      →
                    </button>
                  </div>
                  <p className="car-job-desc">{job.description}</p>
                  <div style={{ textAlign: "center", paddingTop: 8 }}>
                    <button
                      onClick={() => handleViewDetails(job.id)}
                      className="car-job-link"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="car-cta-strip">
        <div className="car-cta-inner">
          <h2 className="car-cta-title">Don't see a perfect fit?</h2>
          <p className="car-cta-sub">
            Send us your resume and we'll reach out when a matching role opens
            up.
          </p>
          <a
            href="mailto:hr@narveetech.com?subject=Job%20Application%20-%20Narvee%20Technologies&body=Hi%20Narvee%20Team%2C%0A%0AI%20am%20interested%20in%20joining%20your%20team.%20Please%20find%20my%20resume%20attached.%0A%0ARegards%2C"
            className="car-btn-primary"
          >
            Send Your Resume →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
