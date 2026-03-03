export default function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold" data-reveal>Menu &amp; Prices</h2>
        </div>

        {/* Flavors Section */}
        <div className="row mb-5" data-reveal>
          <div className="col-12">
            <div className="card flavor-card shadow-sm">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h5 className="fw-bold">Cake Flavors</h5>
                    <p className="small mb-0">
                      Chocolate, Vanilla, Red Velvet, Confetti, Marble, Pumpkin,
                      Carrot, Blueberry, Coconut
                    </p>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <h5 className="fw-bold">Buttercream Icing Flavors</h5>
                    <p className="small mb-0">
                      Vanilla, Chocolate, Espresso, Caramel, Oreo, Peanut Butter,
                      Cream Cheese, Maple
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="fw-bold">Fillings</h5>
                    <p className="small mb-0">
                      Raspberry, Strawberry, Mixed Berry, Caramel, Peanut Butter,
                      Chocolate Ganache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="row g-4">
          {/* Cakes */}
          <div className="col-md-4" data-reveal>
            <div className="card menu-card shadow-sm">
              <div className="card-header">Cakes</div>
              <div className="card-body">
                <div className="menu-item"><span className="item-name">2 Layer 6&quot; Cake</span><span className="item-price">$55</span></div>
                <div className="menu-item"><span className="item-name">2 Layer 8&quot; Cake</span><span className="item-price">$70</span></div>
                <div className="menu-item"><span className="item-name">3 Layer 6&quot; Cake</span><span className="item-price">$75</span></div>
                <div className="menu-item"><span className="item-name">3 Layer 8&quot; Cake</span><span className="item-price">$100</span></div>
                <div className="menu-item"><span className="item-name">2 Tier (6&quot; &amp; 8&quot;)</span><span className="item-price">$210</span></div>
                <div className="menu-item"><span className="item-name">2 Tier (6&quot; &amp; 10&quot;)</span><span className="item-price">$245</span></div>
                <div className="menu-item"><span className="item-name">2 Tier (8&quot; &amp; 10&quot;)</span><span className="item-price">$275</span></div>
                <p className="text-muted small mt-3 mb-1">* Customizations &amp; Larger sizes available</p>
                <p className="text-muted small mb-0">* Fillings +$10</p>
              </div>
            </div>
          </div>

          {/* Cupcakes */}
          <div className="col-md-4" data-reveal data-reveal-delay="100">
            <div className="card menu-card shadow-sm">
              <div className="card-header">Cupcakes</div>
              <div className="card-body">
                <div className="menu-item"><span className="item-name">Single</span><span className="item-price">$3</span></div>
                <div className="menu-item"><span className="item-name">6 Pack</span><span className="item-price">$18</span></div>
                <div className="menu-item"><span className="item-name">12 Pack</span><span className="item-price">$35</span></div>
                <div className="menu-item"><span className="item-name">Specialty 12 Pack</span><span className="item-price">$40</span></div>
                <div className="menu-item"><span className="item-name">Mini 12 Pack*</span><span className="item-price">$18</span></div>
                <p className="text-muted small mt-3 mb-0">* Custom orders only</p>
              </div>
            </div>
          </div>

          {/* Pastries */}
          <div className="col-md-4" data-reveal data-reveal-delay="200">
            <div className="card menu-card shadow-sm">
              <div className="card-header">Pastries</div>
              <div className="card-body">
                <div className="menu-item"><span className="item-name">Chocolate Chunk Brownie</span><span className="item-price">$6</span></div>
                <div className="menu-item"><span className="item-name">Scones</span><span className="item-price">$5</span></div>
                <div className="menu-item"><span className="item-name">Cookie Bar</span><span className="item-price">$5</span></div>
                <div className="menu-item"><span className="item-name">Iced Cookie Bar</span><span className="item-price">$6</span></div>
                <div className="menu-item"><span className="item-name">Rice Krispie Treats</span><span className="item-price">$5</span></div>
                <div className="menu-item"><span className="item-name">Dessert Cup</span><span className="item-price">$6</span></div>
                <div className="menu-item"><span className="item-name">Tandy Cake</span><span className="item-price">$8</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Notices */}
        <div className="row mt-5" data-reveal>
          <div className="col-12">
            <div className="card flavor-card shadow-sm">
              <div className="card-body p-4 text-center">
                <p className="mb-2 small">
                  Storefront flavors change weekly. Please check our{" "}
                  <a href="https://www.facebook.com/yourpage" target="_blank" rel="noreferrer">Facebook</a> or{" "}
                  <a href="https://instagram.com/baileysbakeshoppe" target="_blank" rel="noreferrer">Instagram</a>{" "}
                  for weekly storefront flavors.
                </p>
                <p className="mb-0 small fw-bold" style={{ color: "var(--pink-600)" }}>
                  All custom orders require at least 1 week notice with a 50% deposit at booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
