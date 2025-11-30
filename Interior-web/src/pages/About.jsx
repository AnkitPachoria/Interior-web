import React from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import "./Pages.css";

const About = () => {
  // Reusable 3D Tilt Card (subtle hover)
  const TiltCard = ({ children, className = "" }) => (
    <motion.div
      className={`tilt-card ${className}`}
      whileHover={{ scale: 1.03, rotateX: 4, rotateY: 4 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );

  // Parallax Section
  const ParallaxSection = ({ children, className = "" }) => (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );

  return (
    <AnimatedPage>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        <motion.div
          className="about-hero-content container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Our Studio</h1>
          <p>
            Creating timeless interiors with passion, innovation, and a touch of elegance.
          </p>
        </motion.div>
      </section>

      {/* STORY – SMALLER IMAGE */}
      <ParallaxSection className="about-story">
        <div className="container about-story-content">
          <TiltCard>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
              alt="Cozy modern living room with warm lighting and elegant furniture"
              className="story-img"
            />
          </TiltCard>
          <motion.div
            className="about-story-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>
              Founded in 2013, our design studio has been at the forefront of
              creating stunning interiors that reflect personality and purpose.
              We believe design is more than just beauty — it's about harmony,
              comfort, and balance.
            </p>
            <p>
              Over the years, we’ve completed hundreds of projects across homes,
              offices, and hospitality spaces, with a focus on quality and
              sustainability.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* MISSION & VISION */}
      <ParallaxSection className="about-mission">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Mission & Vision
          </motion.h2>
          <div className="about-mission-grid">
            <motion.div
              className="about-mission-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <i className="fa-solid fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>To create interiors that inspire and bring comfort while maintaining timeless elegance.</p>
            </motion.div>
            <motion.div
              className="about-mission-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <i className="fa-solid fa-eye"></i>
              <h3>Our Vision</h3>
              <p>To be the most trusted interior design brand known for creativity, precision, and innovation.</p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* TEAM – SAME SIZE CARDS */}
      <ParallaxSection className="about-team">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Designers
          </motion.h2>
          <div className="about-team-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600",
                name: "Riya Malhotra",
                role: "Creative Director",
                alt: "Portrait of Creative Director Riya Malhotra",
              },
              {
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
                name: "Arjun Mehta",
                role: "Lead Architect",
                alt: "Portrait of Lead Architect Arjun Mehta",
              },
              {
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a6?w=600",
                name: "Neha Kapoor",
                role: "Interior Specialist",
                alt: "Portrait of Interior Specialist Neha Kapoor",
              },
            ].map((member, i) => (
              <TiltCard key={i}>
                <div className="about-team-card">
                  <div className="team-img-wrapper">
                    <img src={member.img} alt={member.alt} />
                    <div className="team-overlay">
                      <p>{member.role}</p>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* WHY CHOOSE US */}
      <ParallaxSection className="about-why">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <div className="about-why-grid">
            {[
              { icon: "fa-gem", title: "Premium Quality", desc: "We use only the finest materials and finishes for long-lasting beauty." },
              { icon: "fa-brain", title: "Creative Concepts", desc: "Our designers bring fresh, unique ideas tailored to your personality." },
              { icon: "fa-clock", title: "On-Time Delivery", desc: "We respect deadlines — ensuring flawless execution on schedule." },
              { icon: "fa-handshake", title: "Trusted Team", desc: "10+ years of experience and a strong reputation in the design industry." },
            ].map((item, i) => (
              <TiltCard key={i}>
                <div className="about-why-card">
                  <i className={`fa-solid ${item.icon}`}></i>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA */}
      <ParallaxSection className="about-cta">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let’s Design Your Dream Space
          </motion.h2>
          <p>We bring vision, creativity, and precision together to transform your interiors.</p>
          <motion.button
            className="about-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Consultation
          </motion.button>
        </div>
      </ParallaxSection>
    </AnimatedPage>
  );
};

export default About;