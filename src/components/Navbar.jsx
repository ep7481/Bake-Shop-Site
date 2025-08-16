export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-cream sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <img src="/logo.png" alt="Bailey’s Bake Shoppe" width="36" height="36" className="rounded-circle" />
          <span className="brand">Bailey’s Bake Shoppe</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#hours">Hours</a></li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-white ms-lg-3 px-3 py-2 btn-pill" href="#contact">Order / Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
