import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";
import { Footer } from "./components/Navbar";
import "./index.css";

function HomeLayout({ loading, setLoading }) {
  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} minTime={2500} />}
      <div style={{ visibility: loading ? "hidden" : "visible" }}>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeLayout loading={loading} setLoading={setLoading} />}
      />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/technologies" element={<TechnologiesPage />} />
      <Route path="/technologies/:slug" element={<TechnologiesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
