import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Gallery from "./components/Gallery.jsx";
import Hours from "./components/Hours.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    // Update footer year
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();

    // --- Scroll reveal setup ---
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target); // reveal once
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <hr />
      <Gallery />
      <Hours />
      <Contact />
      <Footer />
    </>
  );
}
