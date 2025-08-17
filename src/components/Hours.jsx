export default function Hours() {
  return (
    <section id="hours" className="py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Hours & Location</h2>
            <ul className="list-unstyled small">
              <li>HOURS TBD</li>
              <li></li>
              <li></li>
            </ul>
            <p className="mb-1">
              <a href="https://maps.google.com/?q=6%20Beaver%20Valley%20Pike%2C%20Willow%20Street%2C%20Pennsylvania" target="_blank" rel="noreferrer">
                6 Beaver Valley Pike, Willow Street, Pennsylvania
              </a>
            </p>
            <p className="text-muted small">Parking available behind the shop.</p>
          </div>
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <iframe title="Map" style={{border:0}} loading="lazy" allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=6%20Beaver%20Valley%20Pike%2C%20Willow%20Street%2C%20Pennsylvania&output=embed">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
