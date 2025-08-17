import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-brand text-cream">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-center text-cream">Get in touch</h2>
            <p className="text-center mb-4">
              For orders email{" "}
              <a className="text-cream" href="mailto:bailey@baileysbakeshoppe.com">
                bailey@baileysbakeshoppe.com
              </a>{" "}
              or use the form below.
            </p>

            {/* FormSubmit-powered form (no JS required, works on GitHub Pages) */}
            <form
              action="https://formsubmit.co/bailey@baileysbakeshoppe.com"
              method="POST"
              className="needs-validation"
            >
              {/* FormSubmit options */}
              <input type="hidden" name="_subject" value="New message from Bailey’s Bake Shoppe site" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Redirect after submit (make sure thank-you.html exists in /public) */}
              <input type="hidden" name="_next" value="https://baileysbakeshoppe.com/thank-you.html" />
              {/* Optional autoresponse to the sender */}
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for reaching out to Bailey’s Bake Shoppe! We received your message and will get back to you soon."
              />
              {/* Honeypot field (spam protection) */}
              <div style={{ display: "none" }}>
                <label>
                  Don’t fill this out if you’re human:
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
                  <button className="btn btn-cream btn-lg btn-pill mt-2" type="submit">
                    Send
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
