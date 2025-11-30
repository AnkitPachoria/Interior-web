import React from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import "./Pages.css";

const Home = () => {
  // ---------- 3D Tilt Card ----------
  const TiltCard = ({ children, className = "" }) => (
    <motion.div
      className={`tilt-card ${className}`}
      whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );

  // ---------- Parallax Container ----------
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
      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <motion.div
          className="container hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Redefining <span>Interior Luxury</span>
          </h1>
          <p>
            Crafting timeless interiors that reflect sophistication, comfort,
            and modern design — transforming every space into a masterpiece.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <ParallaxSection className="about-section">
        <div className="container about-content">
          <TiltCard>
            <img
              src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200"
              alt="Elegant living room with plush sofa and modern decor"
            />
          </TiltCard>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>About Our Studio</h2>
            <p>
              With over a decade of experience, we specialize in curating
              bespoke interiors for homes and offices that speak of timeless
              beauty and comfort.
            </p>
            <p>
              Every project reflects your individuality — we craft unique spaces
              that connect with your lifestyle.
            </p>
            <motion.button
              className="btn-outline"
              whileHover={{ backgroundColor: "#d1a46b", color: "#fff" }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* ==================== SERVICES ==================== */}
      <ParallaxSection className="services-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h2>
          <div className="services-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                title: "Residential Interiors",
                desc: "Cozy, elegant, and personalized homes crafted to perfection.",
                alt: "Luxurious residential living room with warm lighting",
              },
              {
                img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
                title: "Office Spaces",
                desc: "Functional and aesthetic designs for modern workplaces.",
                alt: "Modern open-plan office with ergonomic furniture",
              },
              {
                img: "https://plus.unsplash.com/premium_photo-1661880106258-f1e62559f4e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
                title: "Renovation & Styling",
                desc: "Complete transformations with premium materials and detailing.",
                alt: "Before-and-after renovation of a classic apartment",
              },
              {
                img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
                title: "Lighting & Decor",
                desc: "Enhancing ambiance through creative lighting and decor themes.",
                alt: "Ambient lighting setup in a stylish dining area",
              },
            ].map((s, i) => (
              <TiltCard key={i}>
                <div className="service-card">
                  <img src={s.img} alt={s.alt} />
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ==================== PROJECTS ==================== */}
      <ParallaxSection className="projects-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recent Projects
          </motion.h2>
          <div className="project-gallery">
            {[
              {
                img: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                title: "Luxury Living Room",
                alt: "High-end living room with velvet sofa and gold accents",
              },
              {
                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=958",
                title: "Modern Kitchen",
                alt: "Sleek minimalist kitchen with marble island",
              },
              {
                img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                title: "Minimal Bedroom",
                alt: "Serene minimalist bedroom with neutral tones",
              },
              {
                img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
                title: "Corporate Office",
                alt: "Contemporary corporate office with glass partitions",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img src={p.img} alt={p.alt} />
                <div className="overlay">
                  <p>{p.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ==================== STATS ==================== */}
      <ParallaxSection className="stats-section">
        <div className="container stats-grid">
          {[
            { num: "250+", txt: "Completed Projects" },
            { num: "10+", txt: "Years of Experience" },
            { num: "98%", txt: "Client Satisfaction" },
            { num: "15+", txt: "Design Awards" },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="stat"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{s.num}</h3>
              <p>{s.txt}</p>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>

      {/* ==================== TESTIMONIALS ==================== */}
      <ParallaxSection className="testimonials-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Clients Say
          </motion.h2>
          <div className="testimonials">
            {[
              {
                img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200",
                quote: "They transformed my flat into a luxurious home. Loved the attention to detail and quality.",
                name: "Sneha Kapoor",
                alt: "Portrait of client Sneha Kapoor",
              },
              {
                img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=200",
                quote: "Professional, creative, and responsive team. My workspace feels truly inspiring now.",
                name: "Arjun Verma",
                alt: "Portrait of client Arjun Verma",
              },
              {
                img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200",
                quote: "Elegant designs with a personal touch. They made my dream home come alive.",
                name: "Neha Bansal",
                alt: "Portrait of client Neha Bansal",
              },
            ].map((t, i) => (
              <TiltCard key={i}>
                <div className="testimonial">
                  <img src={t.img} alt={t.alt} />
                  <p>{t.quote}</p>
                  <h4>— {t.name}</h4>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ==================== TEAM ==================== */}
      <ParallaxSection className="team-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Creative Team
          </motion.h2>
          <div className="team-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600",
                name: "Elena Roy",
                role: "Lead Designer",
                alt: "Portrait of Lead Designer Elena Roy",
              },
              {
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
                name: "Marcus Lee",
                role: "Project Manager",
                alt: "Portrait of Project Manager Marcus Lee",
              },
              {
                img: "https://plus.unsplash.com/premium_photo-1683134197304-cea8255ca06a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                name: "Sofia Chen",
                role: "Interior Stylist",
                alt: "Portrait of Interior Stylist Sofia Chen",
              },
            ].map((m, i) => (
              <TiltCard key={i}>
                <div className="team-card">
                  <img src={m.img} alt={m.alt} />
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ==================== PROCESS ==================== */}
      <ParallaxSection className="process-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Design Process
          </motion.h2>
          <div className="process-steps">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and needs." },
              { step: "02", title: "Concept", desc: "Mood boards, sketches, and 3D renders." },
              { step: "03", title: "Execution", desc: "Procurement, installation, and styling." },
              { step: "04", title: "Handover", desc: "Final walkthrough and client delight." },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="process-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="step-number">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ==================== BLOG PREVIEW ==================== */}
      <ParallaxSection className="blog-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Design Insights
          </motion.h2>
          <div className="blog-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                title: "Top 5 Trends in Modern Kitchens 2025",
                excerpt: "Explore sustainable materials and smart storage solutions.",
                alt: "Modern kitchen showcasing 2025 design trends",
              },
              {
                img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
                title: "How to Choose the Perfect Sofa",
                excerpt: "Size, fabric, and style tips from our experts.",
                alt: "Elegant sofa in a luxurious living room",
              },
              {
                img: "https://images.unsplash.com/photo-1600563438938-a9a27216b0dc?w=800",
                title: "Lighting That Transforms Any Room",
                excerpt: "Layered lighting strategies for ambiance and function.",
                alt: "Artistic layered lighting in a cozy bedroom",
              },
            ].map((b, i) => (
              <TiltCard key={i}>
                <div className="blog-card">
                  <img src={b.img} alt={b.alt} />
                  <div className="blog-text">
                    <h3>{b.title}</h3>
                    <p>{b.excerpt}</p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ==================== CTA ==================== */}
      <ParallaxSection className="cta-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let’s Create Your Dream Space
          </motion.h2>
          <p>Book a free consultation and experience premium design aesthetics.</p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
      </ParallaxSection>
    </AnimatedPage>
  );
};

export default Home;