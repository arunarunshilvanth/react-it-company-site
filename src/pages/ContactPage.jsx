import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import { Footer } from "../components/Navbar";

import { contactGroups } from "../data/contactData";

import "./ContactPage.css";

const categoryIcons = {
  "REACH US": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
};

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <div className="cp-root">
      <Navbar />

      {/* HERO */}
      <section className="cp-hero">
        <div className="cp-hero-inner">
          <span className="cp-badge">Get In Touch</span>

          <h1 className="cp-hero-title">
            Let's Build Something <span className="cp-accent">Great</span>
            <br />
            Together
          </h1>

          <p className="cp-hero-sub">
            Have a project in mind? We'd love to hear from you. Reach out and
            let's start a conversation.
          </p>
          <div className="cp-hero-btns">
            <button className="cp-btn-ghost" onClick={() => navigate("/")}>
              ← Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="cp-section">
        <div className="cp-container">
          {/* INFO CARDS */}
          <div className="cp-info-col">
            {contactGroups.map((group) => (
              <div className="cp-group" key={group.category}>
                <div className="cp-group-header">
                  <div className="cp-group-icon">
                    {categoryIcons[group.category]}
                  </div>

                  <div>
                    <h2 className="cp-group-title">{group.category}</h2>

                    <div className="cp-group-line" />
                  </div>
                </div>

                <div className="cp-cards">
                  {group.items.map((item) => (
                    <div className="cp-card" key={item.label}>
                      <h3 className="cp-card-title">{item.label}</h3>

                      <p className="cp-card-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* BUSINESS HOURS */}
          </div>

          {/* CONTACT FORM */}
          <div className="cp-form-col">
            <div className="cp-form-card">
              <h2 className="cp-form-title">Send us a message</h2>

              <p className="cp-form-sub">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <div className="cp-form">
                {/* NAME ROW */}
                <div className="cp-form-row">
                  <div className="cp-field">
                    <label className="cp-label">First Name</label>

                    <input
                      className="cp-input"
                      type="text"
                      placeholder="John"
                    />
                  </div>

                  <div className="cp-field">
                    <label className="cp-label">Last Name</label>

                    <input className="cp-input" type="text" placeholder="Doe" />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="cp-field">
                  <label className="cp-label">Email Address</label>

                  <input
                    className="cp-input"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                {/* PHONE */}
                <div className="cp-field">
                  <label className="cp-label">Phone Number</label>

                  <input
                    className="cp-input"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* SUBJECT */}
                <div className="cp-field">
                  <label className="cp-label">Subject</label>

                  <input
                    className="cp-input"
                    type="text"
                    placeholder="How can we help?"
                  />
                </div>

                {/* MESSAGE */}
                <div className="cp-field">
                  <label className="cp-label">Message</label>

                  <textarea
                    className="cp-input cp-textarea"
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </div>

                {/* BUTTON */}
                <button className="cp-submit-btn">Send Message →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cp-cta-strip">
        <div className="cp-cta-inner">
          <h2 className="cp-cta-title">Ready to get started?</h2>

          <p className="cp-cta-sub">
            Join 200+ businesses that trust Narvee for their technology needs.
          </p>

          <a href="tel:+14693006363" className="cp-btn-primary">
            Call us now →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
