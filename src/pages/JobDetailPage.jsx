import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Navbar";
import { jobListings } from "../data/careersData";

export default function JobDetailPage() {
  const { id } = useParams();
  const job = jobListings.find((j) => j.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return (
      <div style={{ minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
        <Navbar />
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <h2>Job not found.</h2>
          <Link
            to="/careers#positions"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to Careers
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f9fb",
        fontFamily: "Inter, Segoe UI, sans-serif",
      }}
    >
      <style>{`
        .jd-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }
        .jd-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: sticky;
          top: 90px;
        }
        @media (max-width: 768px) {
          .jd-grid {
            grid-template-columns: 1fr;
          }
          .jd-sidebar {
            position: static;
          }
          .jd-main-card {
            padding: 24px 20px !important;
          }
          .jd-hero {
            padding: 100px 16px 40px !important;
          }
          .jd-info-row {
            flex-direction: column !important;
            gap: 4px !important;
          }
          .jd-info-label {
            min-width: unset !important;
          }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section
        className="jd-hero"
        style={{
          background:
            "linear-gradient(135deg, #e8f4f8 0%, #cce8f0 50%, #b8dde8 100%)",
          padding: "90px 24px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(92,189,185,0.18)",
              color: "#1a6b68",
              border: "1px solid rgba(92,189,185,0.45)",
              borderRadius: 50,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 16px",
              marginBottom: 20,
            }}
          >
            {job.category}
          </span>

          <h1
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 800,
              color: "#0e2a40",
              lineHeight: 1.2,
              margin: "0 0 16px",
              letterSpacing: "-0.01em",
            }}
          >
            {job.title.toUpperCase()}{" "}
            <span style={{ color: "#5cbdb9" }}>OPPORTUNITIES</span>
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 60,
                height: 2,
                background: "#5cbdb9",
                borderRadius: 2,
                display: "inline-block",
              }}
            />
            <span
              style={{
                width: 8,
                height: 8,
                background: "#2563eb",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            <span
              style={{
                width: 60,
                height: 2,
                background: "#5cbdb9",
                borderRadius: 2,
                display: "inline-block",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{ fontSize: "0.9rem", color: "#3a6070", fontWeight: 500 }}
            >
              {"\uD83D\uDCCD"} {job.location}
            </span>
            <span
              style={{ fontSize: "0.9rem", color: "#3a6070", fontWeight: 500 }}
            >
              {"\uD83D\uDD50"} {job.experience} Experience
            </span>
            <span
              style={{
                background: "#eff6ff",
                color: "#1d4ed8",
                border: "1px solid #bfdbfe",
                borderRadius: 50,
                padding: "3px 12px",
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Full Time
            </span>
          </div>
        </div>
      </section>

      {/* DETAIL SECTION */}
      <section style={{ padding: "48px 24px 80px" }}>
        <div className="jd-grid">
          {/* MAIN CARD */}
          <div
            className="jd-main-card"
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "1px solid #e8ecf0",
              padding: "36px 40px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#0f172a",
                margin: "0 0 28px",
                letterSpacing: "-0.02em",
              }}
            >
              {job.title}
            </h2>

            {/* INFO ROWS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 32,
                paddingBottom: 28,
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {[
                { label: "Location", value: job.location },
                { label: "Min Experience", value: job.experience },
                { label: "Skills", value: job.skills.join(", ") },
                { label: "Education", value: job.education },
                { label: "Updated", value: job.updated },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="jd-info-row"
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <span
                    className="jd-info-label"
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      minWidth: 150,
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "#475569",
                      lineHeight: 1.5,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* RESPONSIBILITIES */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                marginBottom: 32,
              }}
            >
              {job.responsibilities.map((item, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "0.9rem",
                    color: "#334155",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong>{i + 1}.</strong> {item}
                </p>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <Link
                to="/careers#positions"
                style={{
                  display: "inline-block",
                  background: "#f1f5f9",
                  color: "#0f172a",
                  borderRadius: 8,
                  padding: "10px 20px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Back to Careers
              </Link>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="jd-sidebar">
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                border: "1px solid #e8ecf0",
                padding: "22px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#94a3b8",
                  margin: "0 0 12px",
                }}
              >
                Skills Required
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#eff6ff",
                      color: "#1d4ed8",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      borderRadius: 6,
                      padding: "4px 10px",
                      border: "1px solid #bfdbfe",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* APPLY SIDEBAR CARD */}
            <div
              style={{
                background: "#eff6ff",
                borderRadius: 14,
                border: "1px solid #bfdbfe",
                padding: "22px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#1e40af",
                  fontWeight: 600,
                  margin: "0 0 14px",
                }}
              >
                Ready to join Narvee?
              </p>
              <a
                href="https://jobs.narvee.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "11px 20px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Apply Now
              </a>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
