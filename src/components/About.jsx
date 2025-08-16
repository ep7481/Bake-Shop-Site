export default function About() {
  return (
    <section className="py-5 bg-cream">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Handmade with love</h2>
            <p className="text-muted">
              Pastry Arts graduate from YTI. Storefront opening in Willow Street on <strong>August 29, 2025</strong>.
              Email orders to <a href="mailto:bailey@baileysbakeshoppe.com">bailey@baileysbakeshoppe.com</a>.
            </p>
            <ul className="list-unstyled mt-3 small">
              <li>• Sourdough loaves & baguettes</li>
              <li>• Custom cakes & cupcakes</li>
              <li>• Breakfast pastries</li>
              <li>• Coffee & espresso</li>
            </ul>
            <p className="mt-3 small mb-0">
              Follow us on Instagram:{" "}
              <a href="https://instagram.com/baileysbakeshoppe" target="_blank" rel="noreferrer">@baileysbakeshoppe</a>
            </p>
          </div>
          <div className="col-lg-6">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
              <img src="/gallery1.jpg" className="w-100 h-100" style={{objectFit:"cover"}} alt="Bakery display" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
