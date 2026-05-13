export default function Hero() {
  return (
    <header id="home" className="hero d-flex align-items-center text-center">
      <div className="container">
        <img
          src="/logo.png"
          alt="Bailey’s Bake Shoppe logo"
          className="logo mb-2"
          data-reveal
        />

        <h1 className="hero-title" data-reveal data-reveal-delay="100">
          Cakes, cupcakes and pastries
          <br />
          <span className="accent">baked fresh</span> in Willow Street, PA
        </h1>

        <div className="mt-4" data-reveal data-reveal-delay="200">
          <a href="#menu" className="btn btn-brand btn-pill">
            View Menu
          </a>
        </div>
      </div>
    </header>
  );
}
