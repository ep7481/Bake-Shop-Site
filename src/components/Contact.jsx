import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e){
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    // For local dev we show success; on Netlify it will POST and redirect.
    setSent(true);
    form.reset();
    form.classList.remove("was-validated");
  }

  return (
    <section id="contact" className="py-5 bg-brand text-cream">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-center text-cream">Get in touch</h2>
            <p className="text-center mb-4">
              For orders email <a className="text-cream" href="mailto:bailey@baileysbakeshoppe.com">bailey@baileysbakeshoppe.com</a>
              {" "}or use the form below.
            </p>

            {/* Netlify-ready form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you.html"
              className="needs-validation"
              noValidate
              ref={formRef}
              onSubmit={onSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="d-none">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
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
                  <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                  <div className="invalid-feedback">Please add a brief message.</div>
                </div>
                <div className="col-12 d-grid d-sm-flex justify-content-sm-end">
                  <button className="btn btn-cream btn-lg btn-pill mt-2" type="submit">Send</button>
                </div>
              </div>
            </form>

            {sent && (
              <div className="alert alert-success mt-3" role="alert">
                Thanks! We received your message. (On production, you’ll be redirected to the Thank You page.)
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
