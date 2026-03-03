export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold" data-reveal>Gallery</h2>
          <p className="text-muted mt-3" data-reveal data-reveal-delay="100">
            See more on Instagram →{" "}
            <a href="https://instagram.com/baileysbakeshoppe" target="_blank" rel="noreferrer">
              @baileysbakeshoppe
            </a>
          </p>
        </div>
        <div className="row g-4">
          {["/gallery1.jpeg", "/gallery2.jpeg", "/gallery3.jpeg", "/gallery4.jpeg"].map((src, i) => (
            <div key={i} className="col-6 col-md-3" data-reveal data-reveal-delay={`${i * 100}`}>
              <div className="gallery-img-wrapper">
                <img src={src} alt={`Gallery ${i + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
