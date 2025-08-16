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
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <hr></hr>
      <Gallery />
      <hr></hr>
      <Hours />
      <Contact />
      <Footer />
    </>
  );
}
