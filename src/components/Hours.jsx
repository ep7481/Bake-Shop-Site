export default function Hours() {
  return (
    <section id="hours" className="hours-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold" data-reveal>Hours &amp; Location</h2>
        </div>
        <div className="row g-4 align-items-stretch">
          {/* Hours + Location Card */}
          <div className="col-lg-6" data-reveal>
            <div className="card hours-card shadow-sm h-100">
              <div className="card-body p-4">
                <ul className="list-unstyled hours-list mb-4">
                  <li><span className="day">Monday–Wednesday</span><span className="closed">CLOSED</span></li>
                  <li><span className="day">Thursday</span><span className="time">7:00 AM – 3:00 PM</span></li>
                  <li><span className="day">Friday</span><span className="time">7:00 AM – 3:00 PM</span></li>
                  <li><span className="day">Saturday</span><span className="time">8:00 AM – 3:00 PM</span></li>
                  <li><span className="day">Sunday</span><span className="time">8:00 AM – 12:00 PM</span></li>
                </ul>
                <div className="pt-3 border-top">
                  <p className="mb-1">
                    <a
                      href="https://maps.google.com/?q=6%20Beaver%20Valley%20Pike%2C%20Willow%20Street%2C%20Pennsylvania"
                      target="_blank"
                      rel="noreferrer"
                    >
                      6 Beaver Valley Pike, Willow Street, Pennsylvania
                    </a>
                  </p>
                  <p className="text-muted small mb-0">Parking available behind the shop.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="col-lg-6" data-reveal data-reveal-delay="100">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm" style={{ minHeight: "300px" }}>
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
