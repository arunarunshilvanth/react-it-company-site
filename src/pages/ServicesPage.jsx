import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Navbar";
import { serviceGroups } from "../data/servicesData";
import "./ServicesPage.css";

const categoryIcons = {
  "WEB & DESIGN": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  "SOFTWARE & APPS": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "GROWTH & SUPPORT": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

const cardIcons = {
  "Web Design": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  ),
  "UI/UX Design": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  "Web Development": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Software Development": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "App Development": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  "E-commerce Development": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  "Digital Marketing": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  "Software Testing": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <path d="M9 12l2 2 4-4" />
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
    </svg>
  ),
  "US IT Recruitment": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
};

const serviceDetails = {
  "Web Design":
    "We create brand-aligned designs that engage your audience and communicate your message with clarity. Every layout and visual decision is grounded in user psychology and business intent.",
  "UI/UX Design":
    "We design responsive, user-centric interfaces that are both beautiful and built to perform. Our research-driven process ensures every interaction feels intuitive and every screen drives results.",
  "Web Development":
    "We transform designs into fast, reliable websites built on modern frameworks and clean, maintainable code. From simple landing pages to complex web applications — delivered with precision.",
  "Software Development":
    "End-to-end custom software built to solve real business problems and scale with your growth. We manage the full lifecycle — from architecture and development through to deployment and support.",
  "App Development":
    "We build high-performance mobile and web applications that automate processes and deliver measurable ROI. Cross-platform or native, every app is tested thoroughly and backed by post-launch support.",
  "E-commerce Development":
    "We deliver complete e-commerce solutions — from storefront design and payment integration to inventory and order management. Built for speed, security and conversion from day one.",
  "Digital Marketing":
    "We drive qualified traffic and measurable growth through SEO, content strategy and paid campaigns. Every decision is backed by data, and every result is reported with full transparency.",
  "Software Testing":
    "We ensure your software performs flawlessly through comprehensive functional, performance and regression testing. Quality is built into every phase — not bolted on at the end.",
  "US IT Recruitment":
    "We connect US businesses with pre-vetted technology talent across development, cloud, data and security roles. Fast placements, rigorous screening and a commitment to getting it right.",
};

export default function ServicesPage() {
  const navigate = useNavigate();

  const handleCardClick = (href) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      const path = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex); // e.g. "#web-design"
      if (window.location.pathname === path) {
        // already on this page — scroll directly
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          const navbarHeight =
            document.querySelector(".navbar")?.offsetHeight || 83;
          const top =
            el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        // different page — pass hash via state, not URL
        navigate(path, { state: { hash } });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className="sp-root">
      <Navbar />

      {/* HERO */}
      <section className="sp-hero">
        <div className="sp-hero-inner">
          <span className="sp-badge">Available Worldwide</span>
          <h1 className="sp-hero-title">
            Comprehensive <span className="sp-accent">Services</span>
            <br />
            Tailored for Your Business
          </h1>
          <p className="sp-hero-sub">
            Full-cycle services in all areas — combining technical expertise and
            cutting-edge solutions that deliver clear benefits for our clients.
          </p>
          <div className="sp-hero-btns">
            <button
              className="sp-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Talk to an expert
            </button>
            <button className="sp-btn-ghost" onClick={() => navigate("/")}>
              ← Back to Home
            </button>
          </div>
          <div className="sp-stats">
            <div className="sp-stat">
              <span className="sp-stat-num">9+</span>
              <span className="sp-stat-label">Services</span>
            </div>
            <div className="sp-stat-divider" />
            <div className="sp-stat">
              <span className="sp-stat-num">200+</span>
              <span className="sp-stat-label">Happy Clients</span>
            </div>
            <div className="sp-stat-divider" />
            <div className="sp-stat">
              <span className="sp-stat-num">500+</span>
              <span className="sp-stat-label">Projects Delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="sp-section" id="services-grid">
        <div className="sp-container">
          {serviceGroups.map((group) => (
            <div className="sp-group" key={group.category}>
              <div className="sp-group-header">
                <div className="sp-group-icon">
                  {categoryIcons[group.category]}
                </div>
                <div>
                  <h2 className="sp-group-title">{group.category}</h2>
                  <div className="sp-group-line" />
                </div>
              </div>
              <div className="sp-cards">
                {group.items.map((item) => {
                  const cardId = item.href.split("#")[1];
                  return (
                    <div
                      className="sp-card"
                      id={cardId}
                      key={item.label}
                      onClick={() => handleCardClick(item.href)}
                    >
                      <div className="sp-card-icon">
                        {cardIcons[item.label]}
                      </div>
                      <h3 className="sp-card-title">{item.label}</h3>
                      <p className="sp-card-desc">
                        {serviceDetails[item.label] || item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="sp-cta-strip">
        <div className="sp-cta-inner">
          <h2 className="sp-cta-title">Not sure which service fits?</h2>
          <p className="sp-cta-sub">
            Let us assess your needs and recommend the right solution.
          </p>
          <button
            className="sp-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Get a free consultation →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
