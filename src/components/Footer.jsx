export default function Footer() {
  return (
    <footer className="bakery-footer small">
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center gap-2">
          <img src="/logo.png" alt="" width="32" height="32" className="rounded-circle" />
          <span className="brand-text">Bailey's Bake Shoppe</span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.5)" }}>
          &copy; <span id="year"></span> Bailey's Bake Shoppe &bull; All rights reserved
        </div>
      </div>
    </footer>
  );
}
