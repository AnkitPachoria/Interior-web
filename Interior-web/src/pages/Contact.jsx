import React, { useState } from "react";
import "./Pages.css";

const ContactSimple = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // ✅ INPUT HANDLE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }

    } catch (error) {
      console.error("ERROR:", error);
      alert("❌ Server Error");
    }

    setLoading(false);
  };

  return (
    <>

      {/* ✅ HERO BANNER */}
      <section className="contact-hero">
        <div className="contact-overlay"></div>

        <div className="contact-hero-content container">
          <h1>Get In Touch</h1>
          <p>We’d love to hear from you! Let’s bring your interior vision to life.</p>
        </div>
      </section>



      {/* ✅ FORM + IMAGE */}
      <section className="contact-form-section">
        <div className="container contact-form-wrapper">

          {/* LEFT IMAGE */}
          <div className="contact-form-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
              alt="Interior"
            />
          </div>


          {/* ✅ RIGHT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <h2>Send Us a Message</h2>

            {success && <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>}

            <div className="form-group">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* ✅ SPACING FIXED */}
            <input
              style={{ marginTop: "12px" }}
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              style={{ marginTop: "12px" }}
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* ✅ FIXED BUTTON */}
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </section>



      {/* ✅ GOOGLE MAP (FULL FIXED) */}
      <section className="contact-map">
        <div style={{ width: "100%", height: "450px" }}>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps?q=Mumbai&output=embed"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </>
  );
};

export default ContactSimple;
