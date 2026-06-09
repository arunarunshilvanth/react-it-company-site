import "./Services.css";
import { useRef } from "react";
import {
  BsBrushFill,
  BsCodeSlash,
  BsLayoutWtf,
  BsCpuFill,
  BsPhoneFill,
  BsCartFill,
  BsGraphUpArrow,
  BsBugFill,
  BsPeopleFill,
} from "react-icons/bs";

const services = [
  {
    id: "web-design",
    icon: <BsBrushFill />,
    title: "Web Design",
    desc: "Our team creates attractive, appropriate and usable designs which engage your audience and ensure an effective transmission of your message.",
  },
  {
    id: "web-development",
    icon: <BsCodeSlash />,
    title: "Web Development",
    desc: "Our team of developers transforms designs into rich, interactive websites that are easy for visitors to use and easy for clients to maintain.",
    featured: true,
  },
  {
    id: "ui-ux-design",
    icon: <BsLayoutWtf />,
    title: "UI/UX Design",
    desc: "With years of experience designing responsive, user-centric websites, our design team builds sites that are both beautiful and successful.",
  },
  {
    id: "software-development",
    icon: <BsCpuFill />,
    title: "Software Development",
    desc: "We offer complete cycle of software programming services that include web development, product ideas, enhancement and support.",
  },
  {
    id: "app-development",
    icon: <BsPhoneFill />,
    title: "App Development",
    desc: "We specialize in delivering custom application development solutions that can automate your business processes and provide a superior ROI.",
  },
  {
    id: "ecommerce",
    icon: <BsCartFill />,
    title: "E-commerce",
    desc: "We offer complete e-commerce solutions to small and medium sized companies looking to sell goods and services on the web.",
  },
  {
    id: "digital-marketing",
    icon: <BsGraphUpArrow />,
    title: "Digital Marketing",
    desc: "We believe one of the most important steps in developing an effective website is digital marketing for maximum search engine visibility.",
  },
  {
    id: "software-testing",
    icon: <BsBugFill />,
    title: "Software Testing",
    desc: "We provide effective testing solutions to make sure your software delivers a high-quality, seamless and intuitive experience for your customers.",
  },
  {
    id: "us-it-recruitment",
    icon: <BsPeopleFill />,
    title: "US IT Recruitment",
    desc: "We have unique focus in delivering solutions. Driven by a passion for perfection and a commitment to doing it right.",
  },
];

const pills = [
  [
    { label: "Web Design", id: "web-design" },
    { label: "Web Development", id: "web-development" },
    { label: "UI/UX Design", id: "ui-ux-design" },
  ],
  [
    { label: "Software Development", id: "software-development" },
    { label: "App Development", id: "app-development" },
  ],
  [
    { label: "E-commerce Development", id: "ecommerce" },
    { label: "Digital Marketing", id: "digital-marketing" },
  ],
  [
    { label: "Software Testing", id: "software-testing" },
    { label: "US IT Recruitment", id: "us-it-recruitment" },
  ],
];

function Services() {
  const timer = useRef(null);
  const activePill = useRef(null);

  const handlePillClick = (id, el) => {
    const card = document.getElementById(id);
    if (!card) return;

    document
      .querySelectorAll(".service-card")
      .forEach((c) => c.classList.remove("svc-active"));
    if (activePill.current) activePill.current.classList.remove("active");
    el.classList.add("active");
    activePill.current = el;

    card.scrollIntoView({ behavior: "smooth", block: "center" });

    if (timer.current) clearTimeout(timer.current);
    setTimeout(() => {
      card.classList.add("svc-active");
      timer.current = setTimeout(
        () => card.classList.remove("svc-active"),
        2200,
      );
    }, 620);
  };

  const trackMouse = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty(
      "--mx",
      `${((e.clientX - r.left) / r.width) * 100}%`,
    );
    card.style.setProperty(
      "--my",
      `${((e.clientY - r.top) / r.height) * 100}%`,
    );
  };

  return (
    <>
      <section className="svc-hero" id="services">
        <div className="svc-noise" />
        <div className="svc-orb svc-orb-1" />
        <div className="svc-orb svc-orb-2" />
        <div className="svc-hero-inner">
          <div className="svc-hero-left">
            <div className="svc-badge">Available Worldwide</div>
            <h1>
              <br />
              <span className="svc-accent-text">Our Services</span>
            </h1>
            <p className="svc-sub">Flexible, well paying, remote roles.</p>
            <div className="svc-hero-btns">
              <button className="svc-btn-fill">
                Join our network <span>→</span>
              </button>
            </div>
          </div>
          <div className="svc-pills-wrap">
            <p className="svc-pills-label">Browse services</p>
            {pills.map((row, r) => (
              <div className="svc-pill-row" key={r}>
                {row.map(({ label, id }, i) => (
                  <span
                    className={`svc-pill${r === 0 && i === 0 ? " active" : ""}`}
                    key={i}
                    onClick={(e) => handlePillClick(id, e.currentTarget)}
                  >
                    {label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="svc-stats">
        <div className="svc-stats-left" />
        <div className="svc-stats-right" />
      </div>

      <section className="services">
        <div className="services-header">
          <span className="services-eyebrow">
            <span className="eyebrow-line" />
            What We Do
            <span className="eyebrow-line" />
          </span>
          <h2>Our Services</h2>
          <p>
            We provide full-cycle services in all the areas. Combining our
            technical expertise and profound knowledge of latest trends we offer
            cutting-edge web solutions that deliver clear benefits for our
            clients.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ id, icon, title, desc, featured }, i) => (
            <div
              className={`service-card${featured ? " featured" : ""}`}
              id={id}
              key={i}
              onMouseMove={trackMouse}
            >
              <div className="service-card-top">
                <div className="service-icon">{icon}</div>
                <span className="service-num">0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              {featured && (
                <a className="service-link" href="#">
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
