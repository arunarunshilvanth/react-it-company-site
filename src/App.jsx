import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";
import { Footer } from "./components/Navbar";
import "./index.css";
import CareersPage from "./pages/CareersPage";
import JobDetailPage from "./pages/JobDetailPage";
import NarveeLoader from "./components/NarveeLoader";

window.history.scrollRestoration = "manual";

// ✅ Module-level flag — survives route changes, NOT page refreshes
// This is the single source of truth for whether loader has run this session
let _loaderDone = sessionStorage.getItem("loaderShown") === "true";

function ScrollToTop() {
  const { pathname, hash, state } = useLocation();
  const targetHash = hash || state?.hash || "";

  useEffect(() => {
    if (targetHash) {
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) {
          const navbarHeight =
            document.querySelector(".navbar")?.offsetHeight || 83;
          const top =
            el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: "instant" });

          const highlightClass = el.classList.contains("sp-card")
            ? "sp-card--highlighted"
            : el.classList.contains("tp-card")
              ? "tp-card--highlight"
              : el.classList.contains("ab2-card")
                ? "ab2-card--highlighted"
                : null;

          if (highlightClass) {
            el.style.pointerEvents = "none";
            el.classList.add(highlightClass);
            setTimeout(() => {
              el.classList.remove(highlightClass);
              el.style.pointerEvents = "";
            }, 2000);
          }
        }
      }, 20);
    } else {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, targetHash]);

  return null;
}

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

function App() {
  // ✅ Initialize from the module-level flag (not sessionStorage directly)
  const [loaded, setLoaded] = useState(_loaderDone);

  const handleComplete = () => {
    sessionStorage.setItem("loaderShown", "true");
    _loaderDone = true; // ✅ Also update module-level flag
    setLoaded(true);
  };

  if (!loaded) {
    return <NarveeLoader onComplete={handleComplete} />;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/technologies/:slug" element={<TechnologiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:id" element={<JobDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
