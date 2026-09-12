import React from "react";
export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <h1>Build Your Ideal <span>Development Stack</span></h1>
        <p>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
        <div className="hero-actions">
          <a className="gradient-button" href="#technologies">Explore Technologies</a>
          <a className="outline-button" href="#about">Learn More</a>
        </div>
      </div>
      <div className="hero-art">
        <img src="/assets/banner-stack.png" alt="Colorful illustration of a modern development stack" />
      </div>
    </section>
  );
}
