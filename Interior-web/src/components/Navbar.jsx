import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);      // mobile sidebar
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();                  // sticky fade-in

  // ---------- Sticky handling ----------
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade-in when page loads
  useEffect(() => {
    controls.start({ y: 0, opacity: 1 });
  }, [controls]);

  // ---------- Animation variants ----------
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sidebarVariants = {
    closed: { x: "100%" },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#c19a6b" },
  };

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <motion.nav
        className={`navbar ${isScrolled ? "sticky" : ""}`}
        variants={navVariants}
        initial="hidden"
        animate={controls}
      >
        {/* LOGO */}
        <div className="logo">
          Interior<span>Design</span>
        </div>

        {/* DESKTOP LINKS (centered) */}
        <ul className="nav-links desktop">
          <motion.li variants={linkVariants} whileHover="hover">
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li variants={linkVariants} whileHover="hover">
            <Link to="/about">About</Link>
          </motion.li>
          {/* <motion.li variants={linkVariants} whileHover="hover">
            <Link to="/services">Services</Link>
          </motion.li> */}
          <motion.li variants={linkVariants} whileHover="hover">
            <Link to="/design">Design</Link>
          </motion.li>
          <motion.li variants={linkVariants} whileHover="hover">
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>

        {/* RIGHT BUTTON */}
        <motion.button
          className="nav-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Quote
        </motion.button>

        {/* MOBILE TOGGLE */}
        <button
          className="toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="bar"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="bar"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="bar"
          />
        </button>
      </motion.nav>

      {/* ---------- MOBILE SIDEBAR ---------- */}
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <ul className="sidebar-links">
          {["Home", "About", /*"Services",*/ "Design", "Contact"].map((txt, i) => (
            <motion.li
              key={txt}
              custom={i}
              initial={{ opacity: 0, x: 50 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              <Link to={txt === "Home" ? "/" : `/${txt.toLowerCase()}`}>
                {txt}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;