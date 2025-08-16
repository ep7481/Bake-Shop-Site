export default function Footer() {
  return (
    <footer className="py-4 small">
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center gap-2">
          <img src="/logo.png" alt="" width="28" height="28" className="rounded-circle"/>
          <strong>Bailey’s Bake Shoppe</strong>
        </div>
        <div className="text-muted">© <span id="year"></span> Bailey’s Bake Shoppe • All rights reserved</div>
      </div>
    </footer>
  );
}
