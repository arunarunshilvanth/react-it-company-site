import "./Contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const tiles = [
  {
    icon: <FaMapMarkerAlt />,
    label: "OUR OFFICE",
    val: "17440 Dallas Pkwy, Suite #122\nDallas, TX 75287",
    link: "https://maps.google.com/?q=17440+Dallas+Pkwy+Suite+122+Dallas+TX+75287",
    linkText: "Get directions →",
    color: "blue",
  },
  {
    icon: <FaPhone />,
    label: "CALL US",
    val: "+1 469 300 6363",
    link: "tel:+14693006363",
    linkText: "Call now →",
    color: "green",
  },
  {
    icon: <FaEnvelope />,
    label: "EMAIL US",
    val: "hr@narveetech.com",
    link: "mailto:hr@narveetech.com",
    linkText: "Send email →",
    color: "purple",
  },
];

function Contact() {
  return (
    <section className="ct" id="contact">
      <div className="ct-head">
        <div className="ct-badge">✦ GET IN TOUCH</div>
        <h2>
          Contact <em>Us</em>
        </h2>
        <p>Reach out and we'll respond within one business day.</p>
      </div>

      <div className="ct-tiles">
        {tiles.map(({ icon, label, val, link, linkText, color }) => (
          <div className={`ct-tile ct-tile--${color}`} key={label}>
            <div className="ct-tile-icon">{icon}</div>
            <div className="ct-tile-lbl">{label}</div>
            <div className="ct-tile-val">
              {val.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < val.split("\n").length - 1 && <br />}
                </span>
              ))}
            </div>
            <a
              className="ct-tile-link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {linkText}
            </a>
          </div>
        ))}
      </div>

      <div className="ct-avail">
        <span className="ct-avail-dot" />
        <span className="ct-avail-text">
          We're available Mon–Fri, 9am–6pm CST · Typically reply within a few
          hours
        </span>
      </div>

      <div className="ct-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.5!2d-96.8!3d32.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c3c3c3c3c3c%3A0x0!2s17440+Dallas+Pkwy+Suite+122+Dallas+TX+75287!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Narvee Tech Office Location"
        />
      </div>
    </section>
  );
}

export default Contact;
