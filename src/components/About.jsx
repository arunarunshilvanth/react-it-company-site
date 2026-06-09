import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import cultereLogo from "../assets/culture.jpg";
import customer from "../assets/customer.jpg";
import wealth from "../assets/wealth.jpg";
import "./About.css";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Counter({ target, suffix, isVisible }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const num = parseInt(target, 10);
    const dur = 1800;
    const start = performance.now();
    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setVal(Math.floor(ease(p) * num));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(num);
    };
    requestAnimationFrame(tick);
  }, [isVisible, target]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

const stats = [
  {
    val: "10",
    suffix: "+",
    label: "Years of Excellence",
    icon: "◆",
    sublabel: "Est. 2013",
  },
  {
    val: "500",
    suffix: "+",
    label: "Projects Delivered",
    icon: "◆",
    sublabel: "Globally",
  },
  {
    val: "100",
    suffix: "+",
    label: "Happy Clients",
    icon: "◆",
    sublabel: "Worldwide",
  },
  {
    val: "99",
    suffix: "%",
    label: "Client Satisfaction",
    icon: "◆",
    sublabel: "Retention",
  },
];

const cards = [
  {
    img: cultereLogo,
    tag: "QUALITY",
    num: "01",
    id: "culture-of-quality",
    title: "A Culture of Quality",
    desc: "A culture of quality drives everything we do — from technology to processes to human resource practices. We constantly seek to raise the bar by introducing novel concepts and stringent controls.",
    accent: "#0a66c2",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    img: wealth,
    tag: "EXPERIENCE",
    num: "02",
    id: "wealth-of-experience",
    title: "Wealth of Experience",
    desc: "Our team has a wealth of experience in developing commercial-grade software. As your trusted development partner, we support every step of your project journey to ensure lasting success.",
    accent: "#0d5aac",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    img: customer,
    tag: "CLIENTS",
    num: "03",
    id: "long-term-clients",
    title: "Satisfied Customers Long-Term",
    desc: "We build strong, lasting relationships with clients to truly understand their needs. Investing extra time upfront creates satisfied customers long-term — and that's good for everyone.",
    accent: "#1a7ed8",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="22"
        height="22"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "2013",
    event: "Founded in Hyderabad by young dynamic professionals",
  },
  {
    year: "2016",
    event: "Expanded to international markets across Asia & Europe",
  },
  { year: "2019", event: "Crossed 300+ successful project deliveries" },
  { year: "2022", event: "Achieved ISO 9001:2015 certification" },
  { year: "2025", event: "500+ projects · 100+ clients · 12 countries served" },
];

function WhyCard({ card, index }) {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      ref={ref}
      id={card.id}
      className={`ab2-card ${visible ? "ab2-card--visible" : ""}`}
      style={{ "--delay": `${index * 0.14}s`, "--accent": card.accent }}
    >
      <div className="ab2-card-img-wrap">
        <img src={card.img} alt={card.title} className="ab2-card-img" />
        <div className="ab2-card-img-overlay" />
        <span className="ab2-card-num-bg">{card.num}</span>
        <span className="ab2-card-tag-pill">{card.tag}</span>
      </div>
      <div className="ab2-card-body">
        <div className="ab2-card-icon-wrap">{card.icon}</div>
        <h3 className="ab2-card-title">{card.title}</h3>
        <div className="ab2-card-rule" />
        <p className="ab2-card-desc">{card.desc}</p>
        <div className="ab2-card-footer">
          <span className="ab2-card-num-label">{card.num}</span>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [heroRef, heroVisible] = useReveal(0.05);
  const [statsRef, statsVisible] = useReveal(0.2);
  const [tlRef, tlVisible] = useReveal(0.1);
  const [missionRef, missionVis] = useReveal(0.1);

  return (
    <section className="ab2" id="about">
      <div className="ab2-bg-grid" aria-hidden="true" />
      <div className="ab2-bg-blob ab2-blob-1" aria-hidden="true" />
      <div className="ab2-bg-blob ab2-blob-2" aria-hidden="true" />
      <div className="ab2-bg-blob ab2-blob-3" aria-hidden="true" />

      {/* HERO */}
      <div className="ab2-hero" ref={heroRef} id="our-story">
        <div className={`ab2-hero-left ${heroVisible ? "ab2-reveal" : ""}`}>
          <div className="ab2-eyebrow">
            <span className="ab2-eyebrow-dot" />
            <span className="ab2-eyebrow-text">ABOUT NARVEE</span>
            <span className="ab2-eyebrow-line" />
          </div>
          <h1 className="ab2-hero-title">
            Growing Power
            <br />
            in IT
            <span className="ab2-hero-since">
              {" "}
              Since <em>2013</em>
            </span>
          </h1>
          <p className="ab2-hero-lead">
            Narvee Technologies is one of the growing powers in IT — a complete
            solution provider delivering high-end technologies across the global
            IT sector.
          </p>
          <div className="ab2-hero-tags">
            {[
              "Software Development",
              "Cloud Solutions",
              "Enterprise Apps",
              "AI & Analytics",
            ].map((t) => (
              <span className="ab2-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`ab2-hero-right ${heroVisible ? "ab2-reveal ab2-reveal--delay" : ""}`}
        >
          <div className="ab2-story-card">
            <div className="ab2-story-accent" />
            <div className="ab2-story-num">
              10<sup>+</sup>
            </div>
            <div className="ab2-story-label">Years Delivering Excellence</div>
            <div className="ab2-story-divider" />
            <p className="ab2-story-body">
              Headquartered in Hyderabad, India, we serve national and
              international companies with software development, web & mobile
              applications, ecommerce solutions, and enterprise planning — built
              by teams who believe quality is non-negotiable.
            </p>
            <p className="ab2-story-body">
              Our highly process-driven approach and rigorous quality controls
              set us apart. Every team member undergoes regular training to stay
              ahead of emerging technologies and tackle challenges with clarity
              and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* STATS BAND */}
      <div className="ab2-stats-band" ref={statsRef}>
        <div className="ab2-stats-inner">
          {stats.map(({ val, suffix, label, sublabel }, i) => (
            <div
              key={label}
              className={`ab2-stat ${statsVisible ? "ab2-stat--visible" : ""}`}
              style={{ "--i": i }}
            >
              <div className="ab2-stat-value">
                <Counter
                  target={val}
                  suffix={suffix}
                  isVisible={statsVisible}
                />
              </div>
              <div className="ab2-stat-label">{label}</div>
              <div className="ab2-stat-sub">{sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY NARVEE CARDS */}
      <div className="ab2-section">
        <div className="ab2-section-header">
          <div className="ab2-eyebrow ab2-eyebrow--center">
            <span className="ab2-eyebrow-dot" />
            <span className="ab2-eyebrow-text">WHY CHOOSE US</span>
            <span className="ab2-eyebrow-dot" />
          </div>
          <h2 className="ab2-section-title">What Sets Us Apart</h2>
          <p className="ab2-section-sub">
            Three pillars that define how we work and why clients return.
          </p>
        </div>
        <div className="ab2-cards-grid">
          {cards.map((card, i) => (
            <WhyCard card={card} index={i} key={card.num} />
          ))}
        </div>
      </div>

      {/* MISSION + VISION */}
      <div className="ab2-mv-section" ref={missionRef} id="our-process">
        <div
          className={`ab2-mv-card ab2-mv-mission ${missionVis ? "ab2-reveal" : ""}`}
          style={{ "--d": "0s" }}
        >
          <div className="ab2-mv-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="28"
              height="28"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <span className="ab2-mv-tag">OUR MISSION</span>
          <h3 className="ab2-mv-title">
            To empower businesses through innovative technology
          </h3>
          <p className="ab2-mv-body">
            We strive to be the most trusted technology partner for businesses
            worldwide — delivering solutions that are reliable, scalable, and
            impactful.
          </p>
          <div className="ab2-mv-line" />
          <ul className="ab2-mv-list">
            {[
              "End-to-end delivery ownership",
              "Process-first engineering",
              "Client-centric approach",
            ].map((item) => (
              <li key={item}>
                <span className="ab2-mv-check">
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="11"
                    height="11"
                  >
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`ab2-mv-card ab2-mv-vision ${missionVis ? "ab2-reveal" : ""}`}
          style={{ "--d": "0.16s" }}
        >
          <div className="ab2-mv-icon ab2-mv-icon--green">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="28"
              height="28"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <span className="ab2-mv-tag ab2-mv-tag--green">OUR VISION</span>
          <h3 className="ab2-mv-title">
            To be a global leader in enterprise technology services
          </h3>
          <p className="ab2-mv-body">
            Our vision is to help businesses of all sizes harness the power of
            technology — creating efficiencies, unlocking new markets, and
            driving sustainable growth.
          </p>
          <div className="ab2-mv-line ab2-mv-line--green" />
          <ul className="ab2-mv-list">
            {[
              "Global delivery excellence",
              "Innovation-led culture",
              "Sustainable tech practices",
            ].map((item) => (
              <li key={item}>
                <span className="ab2-mv-check ab2-mv-check--green">
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="11"
                    height="11"
                  >
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="ab2-timeline-section" id="our-journey" ref={tlRef}>
        <div className="ab2-section-header">
          <div className="ab2-eyebrow ab2-eyebrow--center">
            <span className="ab2-eyebrow-dot" />
            <span className="ab2-eyebrow-text">OUR JOURNEY</span>
            <span className="ab2-eyebrow-dot" />
          </div>
          <h2 className="ab2-section-title">A Decade of Milestones</h2>
        </div>
        <div className="ab2-timeline">
          <div className="ab2-tl-rail" />
          {timeline.map(({ year, event }, i) => (
            <div
              key={year}
              className={`ab2-tl-item ${i % 2 === 0 ? "ab2-tl-left" : "ab2-tl-right"} ${tlVisible ? "ab2-tl-visible" : ""}`}
              style={{ "--ti": i }}
            >
              <div className="ab2-tl-dot">
                <div className="ab2-tl-dot-inner" />
              </div>
              <div className="ab2-tl-card">
                <span className="ab2-tl-year">{year}</span>
                <p className="ab2-tl-event">{event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BAND */}
      <div className="ab2-cta-band">
        <div className="ab2-cta-orb ab2-cta-orb-1" />
        <div className="ab2-cta-orb ab2-cta-orb-2" />
        <div className="ab2-cta-inner">
          <span className="ab2-cta-eyebrow">READY TO BUILD TOGETHER?</span>
          <h2 className="ab2-cta-title">Let's start your next project</h2>
          <p className="ab2-cta-sub">
            Tell us about your challenge and we'll craft a solution tailored to
            your business.
          </p>
          <div className="ab2-cta-actions">
            <Link to="/contact" className="ab2-cta-btn ab2-cta-btn--primary">
              Get in Touch
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="14"
                height="14"
              >
                <path d="M3 8h10M8 3l5 5-5 5" />
              </svg>
            </Link>
            <Link to="/services" className="ab2-cta-btn ab2-cta-btn--ghost">
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
