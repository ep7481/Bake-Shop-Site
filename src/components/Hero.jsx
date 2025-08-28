export default function Hero() {
  return (
    <header id="home" className="hero d-flex align-items-center text-center position-relative">
      <div className="blob b1"></div>
      <div className="blob b2"></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <img
          src="/logo.png"
          alt="Bailey’s Bake Shoppe logo"
          className="logo mb-3 sweet-zoom"
          data-reveal
        />

        <h1 className="display-5 fw-bold text-pink" data-reveal data-reveal-delay="100">
          Store Front Opening August 29th, 2025
        </h1>

        <a
          href="#menu"
          data-reveal
          data-reveal-delay="200"
        >
          View Menu
        </a>
      </div>
    </header>
  );
}
