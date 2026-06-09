import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Navbar";
import { techGroups } from "../data/technologiesData";
import "./TechnologiesPage.css";

const categoryIcons = {
  "OPEN SOURCE": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10" />
      <path d="M12 2C9.5 4.5 8 8 8 12s1.5 7.5 4 10" />
    </svg>
  ),
  "MOBILE TECHNOLOGIES": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  "MICROSOFT SKILLS": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  "EMERGING TECHNOLOGIES": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  "MOBILE FRAMEWORKS": (
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
  "SYSTEMS PROGRAMMING": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      width="22"
      height="22"
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
};

const D = "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons";

// Apache Solr is not in devicon — using the real official logo SVG inline
const ApacheSolrIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="128" cy="128" r="128" fill="#D9411E" />
    <path
      d="M68 176 Q90 80 188 80"
      stroke="white"
      strokeWidth="12"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M68 196 Q100 96 200 96"
      stroke="#F7941D"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M68 156 Q85 68 178 68"
      stroke="white"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      opacity="0.6"
    />
    <circle cx="188" cy="80" r="14" fill="white" />
    <circle cx="68" cy="176" r="10" fill="#F7941D" />
  </svg>
);

const techIcons = {
  PHP: (
    <img src={`${D}/php/php-original.svg`} width="16" height="16" alt="PHP" />
  ),
  "Apache Solr": <ApacheSolrIcon />,
  CSS3: (
    <img
      src={`${D}/css3/css3-original.svg`}
      width="16"
      height="16"
      alt="CSS3"
    />
  ),
  Eclipse: (
    <img
      src={`${D}/eclipse/eclipse-original.svg`}
      width="16"
      height="16"
      alt="Eclipse"
    />
  ),
  "Yii 2.0": (
    <img
      src={`${D}/yii/yii-original.svg`}
      width="16"
      height="16"
      alt="Yii 2.0"
    />
  ),
  jQuery: (
    <img
      src={`${D}/jquery/jquery-original.svg`}
      width="16"
      height="16"
      alt="jQuery"
    />
  ),
  Symfony: (
    <img
      src={`${D}/symfony/symfony-original.svg`}
      width="16"
      height="16"
      alt="Symfony"
    />
  ),
  Zend: (
    <img
      src={`${D}/zend/zend-original.svg`}
      width="16"
      height="16"
      alt="Zend"
    />
  ),
  JavaScript: (
    <img
      src={`${D}/javascript/javascript-original.svg`}
      width="16"
      height="16"
      alt="JavaScript"
    />
  ),
  CodeIgniter: (
    <img
      src={`${D}/codeigniter/codeigniter-plain.svg`}
      width="16"
      height="16"
      alt="CodeIgniter"
    />
  ),
  Laravel: (
    <img
      src={`${D}/laravel/laravel-original.svg`}
      width="16"
      height="16"
      alt="Laravel"
    />
  ),
  Joomla: (
    <img
      src={`${D}/joomla/joomla-original.svg`}
      width="16"
      height="16"
      alt="Joomla"
    />
  ),
  Magento: (
    <img
      src={`${D}/magento/magento-original.svg`}
      width="16"
      height="16"
      alt="Magento"
    />
  ),
  HTML5: (
    <img
      src={`${D}/html5/html5-original.svg`}
      width="16"
      height="16"
      alt="HTML5"
    />
  ),
  WordPress: (
    <img
      src={`${D}/wordpress/wordpress-plain.svg`}
      width="16"
      height="16"
      alt="WordPress"
    />
  ),
  Drupal: (
    <img
      src={`${D}/drupal/drupal-original.svg`}
      width="16"
      height="16"
      alt="Drupal"
    />
  ),
  Nginx: (
    <img
      src={`${D}/nginx/nginx-original.svg`}
      width="16"
      height="16"
      alt="Nginx"
    />
  ),
  Apache: (
    <img
      src={`${D}/apache/apache-original.svg`}
      width="16"
      height="16"
      alt="Apache"
    />
  ),
};

const techStack = [
  "PHP",
  "Apache Solr",
  "CSS3",
  "Eclipse",
  "Yii 2.0",
  "jQuery",
  "Symfony",
  "Zend",
  "JavaScript",
  "CodeIgniter",
  "Laravel",
  "Joomla",
  "Magento",
  "HTML5",
  "WordPress",
  "Drupal",
  "Nginx",
  "Apache",
];

export default function TechnologiesPage() {
  const navigate = useNavigate();

  return (
    <div className="tp-root">
      <Navbar />

      <section className="tp-hero">
        <div className="tp-hero-inner">
          <span className="tp-badge">Our Tech Stack</span>
          <h1 className="tp-hero-title">
            Cutting-Edge <span className="tp-accent">Technologies</span>
            <br />
            Powering Your Vision
          </h1>
          <p className="tp-hero-sub">
            We specialize in both existing and emerging technologies, powering
            your application to perform optimally. Our expertise includes Open
            Source XAMP &amp; WAMP, Java, PHP, .Net and more. We also employ
            several custom and open-source tools for performance optimization
            and speeding up software deployment. Deploying the latest
            technologies, we deliver solutions that offer high levels of
            consistency in quality and performance.
          </p>
          <div className="tp-hero-btns">
            <button
              className="tp-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Talk to an expert
            </button>
            <button className="tp-btn-ghost" onClick={() => navigate("/")}>
              ← Back to Home
            </button>
          </div>
          <div className="tp-stats">
            <div className="tp-stat">
              <span className="tp-stat-num">15+</span>
              <span className="tp-stat-label">Technologies</span>
            </div>
            <div className="tp-stat-divider" />
            <div className="tp-stat">
              <span className="tp-stat-num">50+</span>
              <span className="tp-stat-label">Expert Developers</span>
            </div>
            <div className="tp-stat-divider" />
            <div className="tp-stat">
              <span className="tp-stat-num">8+</span>
              <span className="tp-stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-section">
        <div className="tp-container">
          {techGroups.map((group) => (
            <div
              className="tp-card"
              key={group.category}
              id={group.category.toLowerCase().replace(/\s+/g, "-")}
            >
              <div className="tp-card-icon">
                {categoryIcons[group.category]}
              </div>
              <h2 className="tp-card-title">{group.category}</h2>
              <div className="tp-card-line" />
              <p className="tp-card-desc">{group.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tp-ecosystem" id="tech-ecosystem">
        <div className="tp-ecosystem-inner">
          <span className="tp-ecosystem-badge">TECHNOLOGIES WE WORK WITH</span>
          <h2 className="tp-ecosystem-title">Our Technology Ecosystem</h2>
          <p className="tp-ecosystem-sub">
            Delivering solutions with the world's leading frameworks, platforms,
            and tools.
          </p>
          <div className="tp-ecosystem-tags">
            {techStack.map((tech) => (
              <span key={tech} className="tp-ecosystem-tag">
                <span className="tp-ecosystem-icon">{techIcons[tech]}</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="tp-cta-strip">
        <div className="tp-cta-inner">
          <h2 className="tp-cta-title">Ready to build with the best stack?</h2>
          <p className="tp-cta-sub">
            Let our engineers recommend the right technologies for your project.
          </p>
          <button
            className="tp-btn-primary"
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
