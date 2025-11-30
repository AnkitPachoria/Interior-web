import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import "./Pages.css";

const Design = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryData = [
    { id: 1, category: "Living", title: "Modern Living Room", img: "https://images.unsplash.com/photo-1600585154154-8a3f3d184c7d?w=1200" },
    { id: 2, category: "Office", title: "Corporate Office", img: "https://images.unsplash.com/photo-1505691723518-36a1cd67c3e1?w=1200" },
    { id: 3, category: "Kitchen", title: "Luxury Kitchen", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" },
    { id: 4, category: "Bedroom", title: "Cozy Bedroom", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200" },
    { id: 5, category: "Bathroom", title: "Minimal Bathroom", img: "https://images.unsplash.com/photo-1600607687920-4ce1c5c87340?w=1200" },
    { id: 6, category: "Living", title: "Luxury Lounge", img: "https://images.unsplash.com/photo-1600585154200-7d1a65c0c932?w=1200" },
    { id: 7, category: "Office", title: "Creative Studio", img: "https://images.unsplash.com/photo-1581090464777-9c03d9c05c59?w=1200" },
    { id: 8, category: "Kitchen", title: "Classic Kitchen", img: "https://images.unsplash.com/photo-1600585154205-7d1a65c0c930?w=1200" },
    { id: 9, category: "Bedroom", title: "Elegant Master Suite", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200" },
    { id: 10, category: "Living", title: "Minimalist Haven", img: "https://images.unsplash.com/photo-1600563438938-a9a27216b0dc?w=1200" },
  ];

  const filteredData =
    filter === "All" ? galleryData : galleryData.filter((item) => item.category === filter);

  // Tilt Card Component
  const TiltCard = ({ children }) => (
    <motion.div
      className="design-tilt-card"
      whileHover={{ scale: 1.03, rotateX: 5, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );

  return (
    <AnimatedPage>
      {/* HERO – PARALLAX BACKGROUND */}
      <section className="design-hero">
        <div className="design-hero-bg"></div>
        <div className="design-overlay"></div>
        <motion.div
          className="design-hero-content container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Design Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore our curated collection of modern, timeless, and luxurious interiors.
          </motion.p>
        </motion.div>
      </section>

      {/* FILTER BUTTONS */}
      <motion.section
        className="design-filter container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {["All", "Living", "Office", "Kitchen", "Bedroom", "Bathroom"].map((cat, i) => (
          <motion.button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.section>

      {/* GALLERY – MASONRY GRID */}
      <section className="design-gallery container">
        <motion.div layout className="design-grid">
          {filteredData.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <TiltCard>
                <div
                  className="design-card"
                  onClick={() => setSelectedImg(item)}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="design-overlay-card">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LIGHTBOX */}
      {selectedImg && (
        <motion.div
          className="design-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImg(null)}
        >
          <motion.div
            className="design-lightbox-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImg.img} alt={selectedImg.title} />
            <div className="lightbox-info">
              <h3>{selectedImg.title}</h3>
              <p>{selectedImg.category}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImg(null)}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatedPage>
  );
};

export default Design;