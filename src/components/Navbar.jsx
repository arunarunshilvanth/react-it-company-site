import "./Navbar.css";
import narveeLogo from "../assets/narvee-logo.png";

import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { serviceGroups } from "../data/servicesData";

import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineMiscellaneousServices,
  MdOutlineContactMail,
} from "react-icons/md";
import { HiOutlineChip, HiOutlineMail } from "react-icons/hi";
import { BsInfoCircle, BsBriefcase } from "react-icons/bs";
import { Link } from "react-router-dom";

const techGroups = [
  {
    category: "PLATFORMS",
    items: [
      {
        label: "Open Source",
        href: "/technologies#open-source",
        shortDesc: "PHP, Laravel, WordPress & more.",
      },
      {
        label: "Mobile Technologies",
        href: "/technologies#mobile-technologies",
        shortDesc: "iOS, Android, Windows Phone & more.",
      },
    ],
  },
  {
    category: "ENGINEERING",
    items: [
      {
        label: "Microsoft Skills",
        href: "/technologies#microsoft-skills",
        shortDesc: ".NET, Azure, SQL Server & more.",
      },
      {
        label: "Emerging Technologies",
        href: "/technologies#emerging-technologies",
        shortDesc: "AI, ML, Blockchain, Cloud & IoT.",
      },
      {
        label: "Mobile Frameworks",
        href: "/technologies#mobile-frameworks",
        shortDesc: "React Native, Flutter, Ionic & more.",
      },
      {
        label: "Systems Programming",
        href: "/technologies#systems-programming",
        shortDesc: "Embedded C, RTOS, Microcontrollers.",
      },
    ],
  },
];

const aboutGroups = [
  {
    category: "WHO WE ARE",
    items: [
      {
        label: "Our Story",
        desc: "Established in 2013, delivering high-end technologies globally.",
        href: "/about",
      },
      {
        label: "Headquarters",
        desc: "Based in Hyderabad, India serving global clients.",
      },
      {
        label: "Our Process",
        desc: "Highly process-driven with strict quality controls.",
        href: "/about#our-journey",
      },
    ],
  },
  {
    category: "WHY NARVE TECH",
    items: [
      {
        label: "Culture of Quality",
        desc: "Innovation and quality drive everything we do.",
        href: "/about#culture-of-quality",
      },
      {
        label: "Experience",
        desc: "Enterprise-level software expertise.",
        href: "/about#wealth-of-experience",
      },
      {
        label: "Long-Term Clients",
        desc: "Strong relationships built on trust and quality.",
        href: "/about#long-term-clients",
      },
    ],
  },
];

const serviceIconMap = {
  "IT Consulting": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
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
      width="18"
      height="18"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Cloud Services": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  "Data & Analytics": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Cybersecurity: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "App Support": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  "Digital Transformation": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  "AI & Machine Learning": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  default: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
};

const techIconMap = {
  "Open Source": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  "Mobile Technologies": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  "Microsoft Skills": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "Emerging Technologies": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  "Mobile Frameworks": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "Systems Programming": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  default: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h4" />
    </svg>
  ),
};

const aboutIconMap = {
  "Our Story": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Headquarters: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  "Our Process": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  "Culture of Quality": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Experience: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  "Long-Term Clients": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

function getIcon(map, label) {
  return map[label] || map["default"];
}

const featuredPanels = {
  services: {
    stat1: { value: "500+", label: "Projects" },
    stat2: { value: "12+", label: "Years" },
    items: [],
  },
  tech: {
    stat1: { value: "30+", label: "Technologies" },
    stat2: { value: "99%", label: "Uptime" },
    viewAllHref: "/technologies#tech-ecosystem",
    viewAllLabel: "Our Technology Ecosystem",
    items: [
      {
        label: "Our Technology Ecosystem",
        desc: "World's leading frameworks, platforms & tools.",
      },
    ],
  },
  about: {
    stat1: { value: "200+", label: "Clients" },
    stat2: { value: "2013", label: "Founded" },
    viewAllHref: "/about#our-journey",
    viewAllLabel: "Our Full Story",
    items: [
      { label: "200+ Clients", desc: "Trusted by global enterprises." },
      { label: "Founded 2013", desc: "Delivering quality since day one." },
    ],
  },
};

function MegaDropdownContent({
  groups,
  iconMap,
  dropType,
  closeAll,
  descKey = "desc",
}) {
  const panel = featuredPanels[dropType];
  const navigate = useNavigate();
  const isServices = dropType === "services";

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeAll();
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      const path = href.slice(0, hashIndex);
      const hash = href.slice(hashIndex);
      if (window.location.pathname === path) {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          const navbarHeight =
            document.querySelector(".navbar")?.offsetHeight || 83;
          const top =
            el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        navigate(path, { state: { hash } });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className="nd-mega-inner">
      <div
        className="nd-cols-area"
        style={isServices ? { borderRight: "none", gridColumn: "1 / -1" } : {}}
      >
        {groups.map((group, gi) => (
          <div className="nd-col" key={group.category}>
            <p className="nd-col-heading">{group.category}</p>
            <div className="nd-col-divider" />
            {group.items.map((item, ii) => (
              <a
                key={item.label}
                href={item.href}
                className="nd-service-link"
                style={{ "--item-i": gi * 6 + ii }}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span className="nd-item-icon">
                  {getIcon(iconMap, item.label)}
                </span>
                <span className="nd-item-text">
                  <span className="nd-service-title">{item.label}</span>
                  <span className="nd-service-desc">{item[descKey]}</span>
                </span>
                <span className="nd-item-arrow">
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="11"
                    height="11"
                  >
                    <path d="M2 6h8M6 2l4 4-4 4" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>

      {!isServices && (
        <div className="nd-featured-panel">
          <p className="nd-fp-title">{panel.stat1.label} & More</p>
          {panel.items.map((item, i) => (
            <a
              key={item.label}
              href={panel.viewAllHref}
              className="nd-service-link"
              style={{ "--item-i": i + 8 }}
              onClick={(e) => handleNavClick(e, panel.viewAllHref)}
            >
              <span className="nd-item-text">
                <span className="nd-service-title">{item.label}</span>
                <span className="nd-service-desc">{item.desc}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [dropOpen, setDropOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const serviceTimer = useRef(null);
  const techTimer = useRef(null);
  const aboutTimer = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setDropOpen(false);
      setTechOpen(false);
      setAboutOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    document.body.classList.remove("drawer-open");
  }, [location.pathname]);

  const closeAll = () => {
    setDropOpen(false);
    setTechOpen(false);
    setAboutOpen(false);
  };

  const CLOSE_DELAY = 900;

  const openDrop = () => {
    clearTimeout(serviceTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    serviceTimer.current = setTimeout(() => setDropOpen(false), CLOSE_DELAY);
  };
  const openTech = () => {
    clearTimeout(techTimer.current);
    setTechOpen(true);
  };
  const closeTech = () => {
    techTimer.current = setTimeout(() => setTechOpen(false), CLOSE_DELAY);
  };
  const openAbout = () => {
    clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  };
  const closeAbout = () => {
    aboutTimer.current = setTimeout(() => setAboutOpen(false), CLOSE_DELAY);
  };

  const isActive = (href) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  const links = [
    { label: "Home", href: "/", icon: <AiOutlineHome /> },
    {
      label: "Services",
      href: "/services",
      icon: <MdOutlineMiscellaneousServices />,
      hasDropdown: "services",
    },
    {
      label: "Technologies",
      href: "/technologies",
      icon: <HiOutlineChip />,
      hasDropdown: "tech",
    },
    {
      label: "About",
      href: "/about",
      icon: <BsInfoCircle />,
      hasDropdown: "about",
    },
    { label: "Contact", href: "/contact", icon: <MdOutlineContactMail /> },
    { label: "Careers", href: "/careers", icon: <BsBriefcase /> },
    {
      label: "Email",
      href: "https://narveetech.com:2096",
      icon: <HiOutlineMail />,
    },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith("mailto:") || href.startsWith("tel:")) {
      window.location.href = href;
      return;
    }
    if (href.startsWith("https://") || href.startsWith("http://")) {
      window.open(href, "_blank", "noreferrer");
      return;
    }
    navigate(href);
  };

  const dropState = (t) =>
    t === "services" ? dropOpen : t === "tech" ? techOpen : aboutOpen;

  const dropHandlers = (t) =>
    t === "services"
      ? { onMouseEnter: openDrop, onMouseLeave: closeDrop }
      : t === "tech"
        ? { onMouseEnter: openTech, onMouseLeave: closeTech }
        : { onMouseEnter: openAbout, onMouseLeave: closeAbout };

  const dropData = {
    services: {
      groups: serviceGroups,
      iconMap: serviceIconMap,
      descKey: "desc",
    },
    tech: { groups: techGroups, iconMap: techIconMap, descKey: "shortDesc" },
    about: { groups: aboutGroups, iconMap: aboutIconMap, descKey: "desc" },
  };

  const openHandler = { services: openDrop, tech: openTech, about: openAbout };
  const closeHandler = {
    services: closeDrop,
    tech: closeTech,
    about: closeAbout,
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img
            src={narveeLogo}
            alt="Narvee Logo"
            className="navbar-logo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              setMobileOpen(false);
            }}
          />

          <button
            className={`hn-hamburger ${mobileOpen ? "hn-hamburger--open" : ""}`}
            onClick={() => {
              setMobileOpen((p) => {
                const next = !p;
                document.body.classList.toggle("drawer-open", next);
                return next;
              });
            }}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`hn-nav-collapse ${mobileOpen ? "hn-nav-collapse--open" : ""}`}
          >
            <ul className="navbar-nav ms-auto">
              {links.map(({ label, href, icon, hasDropdown }) =>
                hasDropdown ? (
                  <li
                    className="nav-item nd-services-item"
                    key={label}
                    {...(!mobileOpen ? dropHandlers(hasDropdown) : {})}
                    onClick={() => {
                      if (!mobileOpen) {
                        if (dropState(hasDropdown)) {
                          closeAll();
                        } else {
                          closeAll();
                          openHandler[hasDropdown]();
                        }
                      }
                    }}
                  >
                    <a
                      className={`nav-link ${dropState(hasDropdown) || isActive(href) ? "nd-active" : ""}`}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (mobileOpen) {
                          setMobileExpanded((prev) =>
                            prev === hasDropdown ? null : hasDropdown,
                          );
                        } else {
                          closeAll();
                          navigate(href);
                        }
                      }}
                    >
                      <span className="nav-emoji">{icon}</span>
                      <span className="nav-label">{label}</span>
                      {!mobileOpen && (
                        <svg
                          className={`nd-chevron ${dropState(hasDropdown) ? "nd-chevron--up" : ""}`}
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 4l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {mobileOpen && (
                        <svg
                          className={`nd-chevron ${mobileExpanded === hasDropdown ? "nd-chevron--up" : ""}`}
                          width="11"
                          height="11"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 4l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </a>

                    {mobileOpen && mobileExpanded === hasDropdown && (
                      <div className="hn-mobile-accordion">
                        {dropData[hasDropdown].groups.map((group) => (
                          <div
                            key={group.category}
                            className="hn-mobile-acc-group"
                          >
                            <p className="hn-mobile-acc-heading">
                              {group.category}
                            </p>
                            {group.items.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="hn-mobile-acc-link"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setMobileOpen(false);
                                  setMobileExpanded(null);
                                  document.body.classList.remove("drawer-open");
                                  const target = item.href || href;
                                  const hashIndex = target.indexOf("#");
                                  if (hashIndex !== -1) {
                                    navigate(target.slice(0, hashIndex), {
                                      state: { hash: target.slice(hashIndex) },
                                    });
                                  } else {
                                    navigate(target);
                                  }
                                }}
                              >
                                <span className="hn-mobile-acc-icon">
                                  {getIcon(
                                    dropData[hasDropdown].iconMap,
                                    item.label,
                                  )}
                                </span>
                                <span className="hn-mobile-acc-text">
                                  <span className="hn-mobile-acc-title">
                                    {item.label}
                                  </span>
                                  <span className="hn-mobile-acc-desc">
                                    {item[dropData[hasDropdown].descKey]}
                                  </span>
                                </span>
                              </a>
                            ))}
                          </div>
                        ))}
                        <a
                          className="hn-mobile-acc-viewall"
                          href={href}
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileOpen(false);
                            setMobileExpanded(null);
                            document.body.classList.remove("drawer-open");
                            navigate(href);
                          }}
                        >
                          View All {label} →
                        </a>
                      </div>
                    )}
                  </li>
                ) : (
                  <li className="nav-item" key={label}>
                    <a
                      className={`nav-link ${isActive(href) ? "nd-active" : ""}`}
                      href={href}
                      onClick={(e) => {
                        handleClick(e, href);
                        setMobileOpen(false);
                        document.body.classList.remove("drawer-open");
                      }}
                    >
                      <span className="nav-emoji">{icon}</span>
                      <span className="nav-label">{label}</span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </nav>

      {["services", "tech", "about"].map((type) => (
        <div
          key={type}
          className={`nd-mega ${dropState(type) ? "nd-mega--open" : ""}`}
          onMouseEnter={openHandler[type]}
          onMouseLeave={closeHandler[type]}
        >
          <MegaDropdownContent
            groups={dropData[type].groups}
            iconMap={dropData[type].iconMap}
            dropType={type}
            closeAll={closeAll}
            descKey={dropData[type].descKey}
          />
        </div>
      ))}
    </>
  );
}

export default Navbar;

// ── Icon components ───────────────────────────────────────────────────────────

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconLocation = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0a66c2"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const IconEmailContact = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0a66c2"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0a66c2"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconWebsite = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0a66c2"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export function Footer() {
  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setFooterVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (footerRef.current) io.observe(footerRef.current);
    return () => io.disconnect();
  }, []);

  const colDelays = ["0s", "0.12s", "0.24s", "0.36s"];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Careers", href: "/careers" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];
  const services = [
    { label: "Web Design", href: "/services#web-design" },
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "Web Development", href: "/services#web-development" },
    { label: "Software Development", href: "/services#software-development" },
    { label: "App Development", href: "/services#app-development" },
    { label: "E-commerce Development", href: "/services#ecommerce" },
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "Software Testing", href: "/services#software-testing" },
    { label: "US IT Recruitment", href: "/services#it-recruitment" },
  ];
  const technologies = [
    { label: "Open Source", href: "/technologies#open-source" },
    { label: "Mobile Technologies", href: "/technologies#mobile-technologies" },
    { label: "Microsoft Skills", href: "/technologies#microsoft-skills" },
    {
      label: "Emerging Technologies",
      href: "/technologies#emerging-technologies",
    },
    { label: "Mobile Frameworks", href: "/technologies#mobile-frameworks" },
    { label: "Systems Programming", href: "/technologies#systems-programming" },
    { label: "Our Technology Ecosystem", href: "/technologies#tech-ecosystem" },
  ];

  return (
    <div ref={footerRef}>
      <footer
        className={`hn-footer${footerVisible ? " hn-footer--visible" : ""}`}
      >
        {/* ── Brand bar ── */}

        <div className="hn-footer-divider" />

        {/* ── Link grid ── */}
        <div className="hn-footer-grid">
          <div
            className="hn-footer-col hn-footer-col-anim"
            style={{ animationDelay: colDelays[0] }}
          >
            <h4>Contact Info</h4>
            <a
              href="https://maps.google.com/?q=17440+Dallas+Pkwy+Suite+122+Dallas+TX+75287"
              target="_blank"
              rel="noreferrer"
              className="hn-contact-item"
            >
              <div className="hn-contact-icon">
                <IconLocation />
              </div>
              <div className="hn-contact-text">
                <strong>USA</strong>
                <span>
                  17440 Dallas Pkwy, Suite# 122,
                  <br />
                  Dallas, TX 75287
                </span>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to= hr@narveetech.com"
              target="_blank"
              rel="noreferrer"
              className="hn-contact-item"
            >
              <div className="hn-contact-icon">
                <IconEmailContact />
              </div>
              <div className="hn-contact-text">
                <strong>Email</strong>
                <span> hr@narveetech.com</span>
              </div>
            </a>
            <a href="tel:+14693006363" className="hn-contact-item">
              <div className="hn-contact-icon">
                <IconPhone />
              </div>
              <div className="hn-contact-text">
                <strong>Phone</strong>
                <span>+1 469 300 6363</span>
              </div>
            </a>
            <a
              href="https://narveetech.com"
              target="_blank"
              rel="noreferrer"
              className="hn-contact-item"
            >
              <div className="hn-contact-icon">
                <IconWebsite />
              </div>

              <div className="hn-contact-text">
                <strong>Website</strong>

                <span>narvee.com</span>
              </div>
            </a>
          </div>
          <div
            className="hn-footer-col hn-footer-col-anim"
            style={{ animationDelay: colDelays[1] }}
          >
            <h4>Quick Links</h4>
            {quickLinks.map(({ label, href }) => (
              <Link key={label} to={href}>
                <span className="hn-link-arrow">›</span>
                {label}
              </Link>
            ))}
          </div>

          <div
            className="hn-footer-col hn-footer-col-anim"
            style={{ animationDelay: colDelays[2] }}
          >
            <h4>Services</h4>
            {services.map(({ label, href }) => (
              <Link key={label} to={href}>
                <span className="hn-link-arrow">›</span>
                {label}
              </Link>
            ))}
          </div>
          <div
            className="hn-footer-col hn-footer-col-anim"
            style={{ animationDelay: colDelays[3] }}
          >
            <h4>Technologies</h4>
            {technologies.map(({ label, href }) => (
              <Link key={label} to={href}>
                <span className="hn-link-arrow">›</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <div className="hn-footer-bottom">
        <div className="hn-footer-bottom-inner">
          <img
            src={narveeLogo}
            alt="Narvee Logo"
            className="hn-footer-bottom-logo"
          />
          <p className="hn-footer-bottom-tagline">
            Delivering high-end technology solutions since 2013.
            <br />
            Trusted by enterprises worldwide.
          </p>
          <div className="hn-footer-bottom-socials">
            {[
              [
                "LinkedIn",
                <IconLinkedIn />,
                "https://www.linkedin.com/company/narveetech/",
              ],
              [
                "Facebook",
                <IconFacebook />,
                "https://www.facebook.com/narveegroup/",
              ],
              [
                "Instagram",
                <IconInstagram />,
                "https://www.instagram.com/narveegroup/",
              ],
            ].map(([label, icon, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hn-footer-bottom-social-btn"
                aria-label={label}
                onBlur={(e) => e.currentTarget.blur()}
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="hn-footer-bottom-divider" />
          <div className="hn-footer-bottom-meta">
            <p className="hn-footer-bottom-copy">
              © 2013 – 2026 <strong>Narvee Technologies Pvt. Ltd.</strong> All
              rights reserved.
            </p>
            <div className="hn-footer-bottom-links">
              <span>Privacy Policy</span>
              <span className="hn-footer-bottom-sep">·</span>
              <span>Terms &amp; Conditions</span>
              <span className="hn-footer-bottom-sep">·</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
