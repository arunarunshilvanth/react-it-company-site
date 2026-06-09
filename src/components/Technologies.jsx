import "./technologies.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiPython,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiWordpress,
  SiDocker,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import {
  BsGlobe,
  BsPhoneFill,
  BsWindows,
  BsCpuFill,
  BsLayoutWtf,
  BsTerminalFill,
} from "react-icons/bs";

const chips = [
  { icon: <SiReact />, label: "React" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiPhp />, label: "PHP" },
  { icon: <SiLaravel />, label: "Laravel" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiWordpress />, label: "WordPress" },
  { icon: <SiAngular />, label: "Angular" },
  { icon: <SiVuedotjs />, label: "Vue" },
  { icon: <SiMysql />, label: "MySQL" },
];

const cells = [
  {
    num: "01",
    icon: <BsGlobe />,
    title: "Open Source",
    desc: "Years of expertise managing open source projects with performance and reliability at scale.",
    href: "/technologies#open-source",
  },
  {
    num: "02",
    icon: <BsPhoneFill />,
    title: "Mobile Technologies",
    desc: "Cross-platform development for iOS, Android, and Windows Phone with a single codebase.",
    href: "/technologies#mobile-technologies",
  },
  {
    num: "03",
    icon: <BsWindows />,
    title: "Microsoft Skills",
    desc: "Full Microsoft ecosystem integration from .NET and Azure to SharePoint and Power Platform.",
    href: "/technologies#microsoft-skills",
  },
  {
    num: "04",
    icon: <BsCpuFill />,
    title: "Emerging Technologies",
    desc: "AI, machine learning, and cloud automation to future-proof your digital products.",
    href: "/technologies#emerging-technologies",
  },
  {
    num: "05",
    icon: <BsLayoutWtf />,
    title: "Mobile Frameworks",
    desc: "React Native, Flutter, and Ionic apps maintaining full functionality across all frameworks.",
    href: "/technologies#mobile-frameworks",
  },
  {
    num: "06",
    icon: <BsTerminalFill />,
    title: "Systems Programming",
    desc: "Embedded systems and low-level programming for high-performance, mission-critical apps.",
    href: "/technologies#systems-programming",
  },
];

const stats = [
  { val: "15+", label: "Technologies" },
  { val: "200+", label: "Projects Delivered" },
  { val: "8+", label: "Years Experience" },
  { val: "50+", label: "Expert Developers" },
];

function Technologies() {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".tw-reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("tw-visible");
        }),
      { threshold: 0.1 },
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="tw" id="technology" ref={ref}>
      <div className="tw-head tw-reveal">
        <div className="tw-badge">
          <span className="tw-dot" /> Our Tech Stack
        </div>
        <h2>
          Powered by <em>cutting-edge</em>
          <br />
          technologies
        </h2>
        <p>
          We specialize in both existing and emerging technologies, powering
          your applications to perform optimally with consistency and quality.
        </p>
      </div>

      <div className="tw-marquee-wrap tw-reveal">
        <div className="tw-marquee">
          {[...chips, ...chips].map(({ icon, label }, i) => (
            <div className="tw-chip" key={i}>
              <span className="tw-chip-icon">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="tw-grid tw-reveal" style={{ transitionDelay: "0.15s" }}>
        {cells.map(({ num, icon, title, desc, href }, i) => (
          <div
            className="tw-cell"
            key={i}
            style={{ animationDelay: `${i * 0.07}s`, cursor: "pointer" }}
            onClick={() => navigate(href)}
          >
            <div className="tw-cell-num">{num}</div>
            <div className="tw-cell-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="tw-stats tw-reveal" style={{ transitionDelay: "0.25s" }}>
        {stats.map(({ val, label }) => (
          <div className="tw-stat" key={label}>
            <div className="tw-stat-val">{val}</div>
            <div className="tw-stat-lbl">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
