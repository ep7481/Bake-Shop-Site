export default function Gallery() {
  return (
    <section id="gallery" className="gallery py-5 bg-cream">
      <div className="container">
        
        <div className="text-center mb-4">
          <h2 className="fw-bold text-pink">Gallery</h2>
          <p className="text-muted small mb-0">
            See more on Instagram →{" "}
            <a href="https://instagram.com/baileysbakeshoppe" target="_blank" rel="noreferrer">@baileysbakeshoppe</a>
          </p>
        </div>
        <div className="row g-3">
          {["/gallery1.jpeg","/gallery2.jpeg","/gallery3.jpeg","/gallery4.jpeg"].map((src, i) => (
            <div key={i} className="col-6 col-md-3">
              <img className="rounded-3 shadow-sm w-100 gallery-img" src={src} alt={`Gallery ${i+1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
