import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import "./Pages.css";

const Services = () => {
  return (
    <AnimatedPage>
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Residential Interior Design</li>
          <li>Office & Commercial Design</li>
          <li>3D Visualization</li>
          <li>Custom Furniture Solutions</li>
        </ul>
      </section>
    </AnimatedPage>
  );
};

export default Services;
