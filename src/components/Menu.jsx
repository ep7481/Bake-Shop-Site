export default function Menu() {
  return (
    <section id="menu" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Menu & Prices</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Breads</h5>
                <ul className="list-unstyled small mb-0">
                  <li className="d-flex justify-content-between"><span>Sourdough loaf</span><span>$6</span></li>
                  <li className="d-flex justify-content-between"><span>Multigrain</span><span>$6.50</span></li>
                  <li className="d-flex justify-content-between"><span>Baguette</span><span>$3.50</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cakes</h5>
                <ul className="list-unstyled small mb-0">
                  <li className="d-flex justify-content-between"><span>6&quot; round (serves 6–8)</span><span>$30</span></li>
                  <li className="d-flex justify-content-between"><span>8&quot; round (serves 10–12)</span><span>$45</span></li>
                  <li className="d-flex justify-content-between"><span>Custom designs</span><span>From $60</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Pastries</h5>
                <ul className="list-unstyled small mb-0">
                  <li className="d-flex justify-content-between"><span>Croissant</span><span>$3.75</span></li>
                  <li className="d-flex justify-content-between"><span>Muffin</span><span>$3.25</span></li>
                  <li className="d-flex justify-content-between"><span>Cinnamon roll</span><span>$4.00</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
