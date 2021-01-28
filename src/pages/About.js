import React from "react";
import lorem from "lorem-ipsum-french";

const About = () => {
  return (
    <div className="section about-section">
      <h2 className="section-title">About Us</h2>
      <p>{lorem(2)}</p>
    </div>
  );
};

export default About;
