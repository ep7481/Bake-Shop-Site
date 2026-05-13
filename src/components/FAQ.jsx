import { useState } from "react";

const FAQS = [
  {
    q: "How far in advance should I order a custom cake?",
    a: (
      <>
        All custom orders require at least <strong>1 week of notice</strong> with a{" "}
        <strong>50% deposit</strong> at booking. For weddings and larger events,
        please reach out as far in advance as possible to secure your date.
      </>
    ),
  },
  {
    q: "Where is Bailey’s Bake Shoppe located?",
    a: (
      <>
        Our storefront is at{" "}
        <a
          href="https://maps.google.com/?q=6%20Beaver%20Valley%20Pike%2C%20Willow%20Street%2C%20Pennsylvania"
          target="_blank"
          rel="noreferrer"
        >
          6 Beaver Valley Pike, Willow Street, PA 17584
        </a>
        , in Lancaster County, convenient for customers in Lancaster, York, and the
        surrounding communities.
      </>
    ),
  },
  {
    q: "What are your hours?",
    a: (
      <>
        Wednesday through Friday <strong>7:00am–3:00pm</strong>, and Saturday{" "}
        <strong>8:00am–2:00pm</strong>. We are closed Sunday through Tuesday.
      </>
    ),
  },
  {
    q: "Do you make custom wedding and event cakes?",
    a: (
      <>
        Yes! We make custom cakes for weddings, birthdays, showers, and special events.
        Larger sizes and full customization are available with at least 1 week’s notice
        and a 50% deposit. Email{" "}
        <a href="mailto:bailey@baileysbakeshoppe.com">bailey@baileysbakeshoppe.com</a>{" "}
        to discuss your event.
      </>
    ),
  },
  {
    q: "What cake flavors and frostings do you offer?",
    a: (
      <>
        <strong>Cake flavors:</strong> Chocolate, Vanilla, Red Velvet, Confetti,
        Marble, Pumpkin, Carrot, Blueberry, Coconut. <br />
        <strong>Buttercream icings:</strong> Vanilla, Chocolate, Espresso, Caramel,
        Oreo, Peanut Butter, Cream Cheese, Maple. <br />
        <strong>Fillings:</strong> Raspberry, Strawberry, Mixed Berry, Caramel,
        Peanut Butter, Chocolate Ganache.
      </>
    ),
  },
  {
    q: "How do I place a custom order?",
    a: (
      <>
        Email{" "}
        <a href="mailto:bailey@baileysbakeshoppe.com">bailey@baileysbakeshoppe.com</a>{" "}
        or use the contact form below. Walk-ins are welcome during open hours for
        in-stock cupcakes, pastries, and treats.
      </>
    ),
  },
  {
    q: "Do storefront flavors change?",
    a: (
      <>
        Yes. Storefront flavors rotate weekly. Follow{" "}
        <a
          href="https://instagram.com/baileysbakeshoppe"
          target="_blank"
          rel="noreferrer"
        >
          @baileysbakeshoppe
        </a>{" "}
        on Instagram or our{" "}
        <a
          href="https://www.facebook.com/p/Baileys-Bake-Shoppe-61550014198722/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook page
        </a>{" "}
        to see what’s available each week.
      </>
    ),
  },
  {
    q: "Do you serve customers outside Willow Street?",
    a: (
      <>
        Yes. Customers from Lancaster, York, Strasburg, Millersville, New Holland,
        Mount Joy, Quarryville, and throughout Lancaster County regularly pick up
        orders from our Willow Street storefront.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq py-5">
      <div className="container">
        <div className="text-center mb-5" data-reveal>
          <div className="section-eyebrow">Questions?</div>
          <h2 className="section-title">Frequently Asked</h2>
          <p className="section-sub">
            Everything you need to know about ordering, custom cakes, and finding us.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="faq-list" data-reveal>
              {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className={`faq-item ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon" aria-hidden="true">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      className="faq-answer"
                      hidden={!isOpen}
                    >
                      <div className="faq-answer-inner">{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
