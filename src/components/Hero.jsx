import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-tagline">Unlimited Audience, One Place</p>
        <h1 className="hero-title">
          We craft digital experiences that combine Design, Technology &
          Strategy
          <span className="hero-accent"> Narvee.</span>
        </h1>
        <p className="hero-subtitle">
          Quality means doing it right when no one is looking, We Promise You'll
          Be Impressed With Us
        </p>
        <div className="hero-buttons">
          <button
            className="hero-btn-primary"
            onClick={() => navigate("/services")}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
