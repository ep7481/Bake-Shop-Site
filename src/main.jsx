import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";

createRoot(document.getElementById("root")).render(<App />);

// ---------------------------
// Scroll reveal initialization
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
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
});
