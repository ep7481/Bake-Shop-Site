export default function Menu() {
  return (
    <section id="menu" className="py-5" style={{ backgroundColor: "var(--brand)" }}>

      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Menu & Prices</h2>
        </div>

        {/* Flavors Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cake Flavors</h5>
                <p className="small mb-3">
                  Chocolate, Vanilla, Red Velvet, Confetti, Marble, Pumpkin,
                  Carrot, Blueberry, Coconut
                </p>

                <h5 className="card-title">Buttercream Icing Flavors</h5>
                <p className="small mb-3">
                  Vanilla, Chocolate, Espresso, Caramel, Oreo, Peanut Butter,
                  Cream Cheese, Maple
                </p>

                <h5 className="card-title">Fillings</h5>
                <p className="small mb-0">
                  Raspberry, Strawberry, Mixed Berry, Caramel, Peanut Butter,
                  Chocolate Ganache
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="row g-4">
          {/* Cakes */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cakes</h5>
                <ul className="list-unstyled small mb-0">
                  <li className="d-flex justify-content-between"><span>2 Layer 6&quot; Cake</span><span>$55</span></li>
                  <li className="d-flex justify-content-between"><span>2 Layer 8&quot; Cake</span><span>$70</span></li>
                  <li className="d-flex justify-content-between"><span>3 Layer 6&quot; Cake</span><span>$75</span></li>
                  <li className="d-flex justify-content-between"><span>3 Layer 8&quot; Cake</span><span>$100</span></li>
                  <li className="d-flex justify-content-between"><span>2 Tier (6&quot; & 8&quot;)</span><span>$210</span></li>
                  <li className="d-flex justify-content-between"><span>2 Tier (6&quot; & 10&quot;)</span><span>$245</span></li>
                  <li className="d-flex justify-content-between"><span>2 Tier (8&quot; & 10&quot;)</span><span>$275</span></li>
                  <li className="text-muted mt-2 small">* Customizations & Larger sizes available</li>
                  <li className="text-muted small">* Fillings +$10</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cupcakes */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cupcakes</h5>
                <ul className="list-unstyled small mb-0">
                  <li className="d-flex justify-content-between"><span>Single</span><span>$3</span></li>
                  <li className="d-flex justify-content-between"><span>6 Pack</span><span>$18</span></li>
                  <li className="d-flex justify-content-between"><span>12 Pack</span><span>$35</span></li>
                  <li className="d-flex justify-content-between"><span>Specialty 12 Pack</span><span>$40</span></li>
                  <li className="d-flex justify-content-between"><span>Mini 12 Pack*</span><span>$18</span></li>
                  <li className="text-muted small">* Custom orders only</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pastries */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pastries</h5>
                <ul className="list-unstyled small mb-0">
                  <li className="d-flex justify-content-between"><span>Chocolate Chunk Brownie</span><span>$6</span></li>
                  <li className="d-flex justify-content-between"><span>Scones</span><span>$5</span></li>
                  <li className="d-flex justify-content-between"><span>Cookie bar</span><span>$5</span></li>
                  <li className="d-flex justify-content-between"><span>Iced Cookie Bar</span><span>$6</span></li>
                  <li className="d-flex justify-content-between"><span>Rice Krispie Treats</span><span>$5</span></li>
                  <li className="d-flex justify-content-between"><span>Dessert cup</span><span>$6</span></li>
                  <li className="d-flex justify-content-between"><span>Tandy Cake</span><span>$7</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
