export default function Hero() {
  return (
    <header id="home" className="hero-section text-center position-relative">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <img
          src="/logo.png"
          alt="Bailey's Bake Shoppe logo"
          className="hero-logo mb-4"
          data-reveal
        />

        <h1 className="hero-title mb-3" data-reveal data-reveal-delay="100">
          Store Front Now Open!
        </h1>

        <p className="hero-subtitle mb-4" data-reveal data-reveal-delay="200">
          Handcrafted cupcakes, cakes &amp; pastries in Lancaster County, PA
        </p>

        <a href="#menu" className="btn-hero" data-reveal data-reveal-delay="300">
          View Our Menu
        </a>
      </div>

      <svg className="hero-bottom-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="#ffffff" d="M0,80 C480,0 960,120 1440,40 L1440,120 L0,120 Z" />
      </svg>
    </header>
  );
}
