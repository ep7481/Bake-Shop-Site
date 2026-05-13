const GALLERY_ITEMS = [
  { src: "/gallery1.jpeg", alt: "Assorted sweet treats from Bailey’s Bake Shoppe" },
  { src: "/gallery2.jpeg", alt: "Decorated cake with colorful icing" },
  { src: "/gallery3.jpeg", alt: "Fresh baked cookies displayed on a tray" },
  { src: "/gallery4.jpeg", alt: "Custom cupcakes decorated beautifully from Bailey’s Bake Shoppe" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery py-5 bg-cream">
      <div className="container">
        <div className="text-center mb-5" data-reveal>
          <div className="section-eyebrow">Gallery</div>
          <h2 className="section-title">From the Shoppe</h2>
          <p className="section-sub mb-0">
            A look at our custom cakes, cupcakes, and baked treats. See more on Instagram{" "}
            <a href="https://instagram.com/baileysbakeshoppe" target="_blank" rel="noreferrer" aria-label="Visit Bailey’s Bake Shoppe on Instagram">@baileysbakeshoppe</a>
          </p>
        </div>
        <div className="row g-3">
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className="col-6 col-md-3">
              <img className="rounded-3 shadow-sm w-100 gallery-img" src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
