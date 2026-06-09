import { useEffect, useState, useRef } from "react";
import narveeLogo from "../assets/narvee-logo.png";
import "./NarveeLoader.css";

const MESSAGES_EARLY = [
  "Initializing systems...",
  "Setting up your workspace...",
];
const MESSAGES_MID = [
  "Loading your experience...",
  "Syncing data...",
  "Applying configurations...",
];
const MESSAGES_LATE = ["Almost ready...", "Finalizing..."];

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function NarveeLoader({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const [dots, setDots] = useState([]);

  // DOM refs — we drive progress directly for butter-smooth 60fps
  const fillRef = useRef(null);
  const glowRef = useRef(null);
  const pctRef = useRef(null);
  const msgRef = useRef(null);
  const sdotRefs = useRef([]);

  const rafRef = useRef(null);
  const startRef = useRef(null);
  const lastMsgRef = useRef(0);

  // Generate particles once
  useEffect(() => {
    setDots(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: (Math.random() * 4).toFixed(2),
        duration: (Math.random() * 4 + 3).toFixed(2),
        opacity: (Math.random() * 0.4 + 0.08).toFixed(2),
      })),
    );
  }, []);

  useEffect(() => {
    const DURATION = 2600; // ms — keep tight so it never feels stuck
    startRef.current = performance.now();
    lastMsgRef.current = performance.now();

    const setStage = (val) => {
      const stages = [0, 33, 66, 95];
      const activeIdx = stages.filter((s) => val >= s).length - 1;
      sdotRefs.current.forEach((el, i) => {
        if (!el) return;
        el.dataset.state =
          i === activeIdx ? "active" : i < activeIdx ? "done" : "";
      });
    };

    const rotateMessage = (now, val) => {
      if (now - lastMsgRef.current < 380 || val >= 97) return;
      const pool =
        val < 40 ? MESSAGES_EARLY : val < 80 ? MESSAGES_MID : MESSAGES_LATE;
      const next = pickRandom(pool);
      if (!msgRef.current || msgRef.current.textContent === next) return;
      msgRef.current.style.opacity = "0";
      setTimeout(() => {
        if (msgRef.current) {
          msgRef.current.textContent = next;
          msgRef.current.style.opacity = "1";
        }
      }, 150);
      lastMsgRef.current = now;
    };

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / DURATION, 1);
      const val = easeInOutCubic(t) * 100;
      const w = val.toFixed(2) + "%";

      // Drive DOM directly — no React state, no re-render overhead
      if (fillRef.current) fillRef.current.style.width = w;
      if (glowRef.current) glowRef.current.style.left = w;
      if (pctRef.current) pctRef.current.textContent = Math.round(val) + "%";

      rotateMessage(now, val);
      setStage(val);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Snap to 100, show "Ready!", then exit
        if (fillRef.current) fillRef.current.style.width = "100%";
        if (glowRef.current) glowRef.current.style.left = "100%";
        if (pctRef.current) pctRef.current.textContent = "100%";
        if (msgRef.current) {
          msgRef.current.style.opacity = "0";
          setTimeout(() => {
            if (msgRef.current) {
              msgRef.current.textContent = "Ready!";
              msgRef.current.style.opacity = "1";
            }
          }, 150);
        }
        setStage(100);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onComplete?.(), 580);
        }, 420);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  return (
    <div className={`nl-root${exiting ? " nl-exit" : ""}`}>
      {/* Floating particles */}
      <div className="nl-particles">
        {dots.map((d) => (
          <span
            key={d.id}
            className="nl-dot"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: d.size,
              height: d.size,
              "--op": d.opacity,
              animationDelay: `-${d.delay}s`,
              animationDuration: `${d.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Diagonal grid */}
      <div className="nl-grid" />

      {/* Center stage */}
      <div className="nl-center">
        {/* Orbiting rings */}
        <div className="nl-rings">
          <div className="nl-ring nl-ring-1" />
          <div className="nl-ring nl-ring-2" />
          <div className="nl-ring nl-ring-3" />
          <div className="nl-orbit-dot nl-orbit-1" />
          <div className="nl-orbit-dot nl-orbit-2" />
          <div className="nl-logo-disc">
            <img src={narveeLogo} alt="Narvee" className="nl-logo-img" />
          </div>
        </div>

        {/* Brand */}
        <div className="nl-brand">
          <h1 className="nl-brand-name">Narvee Tech</h1>
          <p className="nl-tagline">WE WORK FOR YOUR PROFIT</p>
        </div>

        {/* Progress bar — DOM refs, no React state */}
        <div className="nl-progress-wrap">
          <div className="nl-progress-track">
            <div className="nl-progress-fill" ref={fillRef} />
            <div className="nl-progress-glow" ref={glowRef} />
          </div>
          <div className="nl-progress-row">
            <span className="nl-msg" ref={msgRef}>
              Initializing systems...
            </span>
            <span className="nl-pct" ref={pctRef}>
              0%
            </span>
          </div>
        </div>

        {/* Stage dots — Apple-style progress indicator */}
        <div className="nl-stage-dots">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="nl-sdot"
              data-state={i === 0 ? "active" : ""}
              ref={(el) => (sdotRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
