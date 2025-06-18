import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Support.css";

const Support = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: "", isError: false });

    emailjs
      .sendForm(
        "service_csww8qs",
        "template_3dyhlyt",
        form.current,
        "F7F1yxZxPTPPJ7A6X"
      )
      .then((result) => {
        setSubmitStatus({
          message: "Message sent successfully! We will get back to you soon.",
          isError: false,
        });
        // Reset form
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus({
          message: "Failed to send message. Please try again later.",
          isError: true,
        });
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="support-container">
      <div className="support-content">
        <div className="support-info">
          <div className="support-left">
            <h2>Contact Us!</h2>
            <div className="support-details">
              <div className="support-item">
                <h3>Phone</h3>
                <p>
                  Ed: <a href="tel:615-542-2081">615-542-2081</a>
                  <br />
                  Allen: <a href="tel:615-542-0208">615-542-0208</a>
                </p>
              </div>
              <div className="support-item">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: By Appointment</p>
              </div>
              <div className="support-item">
                <h3>Service Area</h3>
                <p>Middle Tennessee</p>
              </div>
            </div>
          </div>

          <div className="support-right">
            <div className="support-form">
              <h3>Send us a Message</h3>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="support-form-group">
                  <label htmlFor="user_name">Name *</label>
                  <input type="text" id="user_name" name="user_name" required />
                </div>

                <div className="support-row">
                  <div className="support-form-group">
                    <label htmlFor="user_email">Email *</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                    />
                  </div>

                  <div className="support-form-group">
                    <label htmlFor="user_phone">Phone</label>
                    <input type="tel" id="user_phone" name="user_phone" />
                  </div>
                </div>

                <div className="support-form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                  ></textarea>
                </div>

                {submitStatus.message && (
                  <div
                    className={`support-submit-status ${
                      submitStatus.isError ? "error" : "success"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="support-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
