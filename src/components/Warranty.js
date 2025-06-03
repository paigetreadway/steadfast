import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Warranty.css";

const Warranty = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    isError: false,
  });

  const handleMessageChange = (e) => {
    const value = e.target.value;
    if (value.length <= 1000) {
      setMessageLength(value.length);
    }
  };

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
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <div className="warranty-form">
            <div className="contact-form">
              <h3>Submit a Warranty Request</h3>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="user_name">Name *</label>
                  <input type="text" id="user_name" name="user_name" required />
                </div>

                <div className="contact-row">
                  <div className="form-group">
                    <label htmlFor="user_email">Email *</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="user_phone">Phone</label>
                    <input type="tel" id="user_phone" name="user_phone" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="job_number">Job Number</label>
                  <input type="text" id="job_number" name="job_number" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength="1000"
                    onChange={handleMessageChange}
                  ></textarea>
                  <div className="character-count">
                    {messageLength}/1000 characters
                  </div>
                </div>

                {submitStatus.message && (
                  <div
                    className={`submit-status ${
                      submitStatus.isError ? "error" : "success"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
