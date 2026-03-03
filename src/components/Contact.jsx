export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <svg className="contact-top-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="#ffffff" d="M0,0 L1440,0 L1440,80 C960,120 480,0 0,80 Z" />
      </svg>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-3" data-reveal>Get In Touch</h2>
              <p data-reveal data-reveal-delay="100" style={{ color: "rgba(255,255,255,0.9)" }}>
                For orders email{" "}
                <a style={{ color: "#fff", textDecoration: "underline" }} href="mailto:bailey@baileysbakeshoppe.com">
                  bailey@baileysbakeshoppe.com
                </a>{" "}
                or use the form below.
              </p>
            </div>

            <form
              action="https://formsubmit.co/bailey@baileysbakeshoppe.com"
              method="POST"
              className="needs-validation"
              data-reveal
              data-reveal-delay="200"
            >
              {/* FormSubmit options */}
              <input type="hidden" name="_subject" value="New message from Bailey's Bake Shoppe site" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://baileysbakeshoppe.com/thank-you.html" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for reaching out to Bailey's Bake Shoppe! We received your message and will get back to you soon."
              />
              {/* Honeypot field (spam protection) */}
              <div style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human:
                  <input name="_honey" />
                </label>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input className="form-control" id="name" name="name" required />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="form-control" id="email" name="email" type="email" required />
                  <div className="invalid-feedback">Enter a valid email.</div>
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" name="message" rows={4} required />
                  <div className="invalid-feedback">Please add a brief message.</div>
                </div>

                <div className="col-12 d-grid d-sm-flex justify-content-sm-end">
                  <button className="btn btn-send btn-lg mt-2" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
