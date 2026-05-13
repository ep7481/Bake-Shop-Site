export default function Hours() {
  return (
    <section id="hours" className="py-5 hours">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Hours + Location Box */}
          <div className="col-lg-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="section-eyebrow">Visit Us</div>
                <h2 className="section-title mb-4">Hours &amp; Location</h2>
                <ul className="list-unstyled small mb-4 ">
                  <li><strong>Sunday–Tuesday:</strong> CLOSED</li>
                  <li><strong>Wednesday:</strong> 7:00am–3:00pm</li>
                  <li><strong>Thursday:</strong> 7:00am–3:00pm</li>
                  <li><strong>Friday:</strong> 7:00am–3:00pm</li>
                  <li><strong>Saturday:</strong> 8:00am–2:00pm</li>
                </ul>
                <p className="mb-1">
                  <a
                    href="https://maps.google.com/?q=6%20Beaver%20Valley%20Pike%2C%20Willow%20Street%2C%20Pennsylvania"
                    target="_blank"
                    rel="noreferrer"
                  >
                    6 Beaver Valley Pike, Willow Street, Pennsylvania
                  </a>
                </p>
                <p className="text-muted small mb-0">
                  Parking available behind the shop.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <iframe
                title="Map"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=6%20Beaver%20Valley%20Pike%2C%20Willow%20Street%2C%20Pennsylvania&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
