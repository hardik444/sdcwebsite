"use client";

interface HeroSectionProps {
  onOpenJoinModal: () => void;
}

export default function HeroSection({ onOpenJoinModal }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          Build. <span className="text-gradient">Learn.</span> Ship.
        </h1>

        <p className="hero-subtitle">
          Building developers, products, startups, and the future. Experience the next generation of campus tech culture with 100+ active coders.
        </p>

        <div className="hero-ctas">
          <button onClick={onOpenJoinModal} className="btn-primary">
            Join SDC <i className="fas fa-arrow-right"></i>
          </button>
          <a href="#events" className="btn-secondary">
            Explore Events <i className="fas fa-compass"></i>
          </a>
        </div>

        {/* Live Stats Banner */}
        <div className="stats-banner">
          <div className="stat-item" style={{ borderColor: "rgba(255, 69, 0, 0.4)" }}>
            <div className="stat-number text-gradient">100+</div>
            <div className="stat-label">Active Members</div>
          </div>
          <div className="stat-item" style={{ borderColor: "rgba(57, 255, 20, 0.4)" }}>
            <div className="stat-number text-lime">45+</div>
            <div className="stat-label">Club Projects</div>
          </div>
          <div className="stat-item" style={{ borderColor: "rgba(0, 240, 255, 0.4)" }}>
            <div className="stat-number text-cyan">30+</div>
            <div className="stat-label">Workshops & Events</div>
          </div>
          <div className="stat-item" style={{ borderColor: "rgba(255, 0, 127, 0.4)" }}>
            <div className="stat-number text-magenta">₹5L+</div>
            <div className="stat-label">Hackathon Prizes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
