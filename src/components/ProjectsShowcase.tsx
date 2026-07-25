"use client";

export default function ProjectsShowcase() {
  const projects = [
    {
      title: "NutriSphere AI Engine",
      cat: "AI & MACHINE LEARNING",
      color: "text-[#00F0FF]",
      desc: "Predictive behavioral nutrition engine powered by microservices architecture and real-time biometric telemetry.",
      tags: ["Python", "PyTorch", "FastAPI", "Docker"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "VIT CyberGate Pass",
      cat: "DEVTOOLS & PLATFORMS",
      color: "text-[#FF007F]",
      desc: "Instant QR code gate pass validation and event seat check-in system built for campus events.",
      tags: ["Next.js 15", "TypeScript", "Tailwind", "Canvas"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Solana Guild Vault",
      cat: "WEB3 & CRYPTO",
      color: "text-[#39FF14]",
      desc: "Decentralized treasury management and student hackathon prize distribution platform.",
      tags: ["Rust", "Solana", "Anchor", "Web3.js"],
      github: "https://github.com",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-cubes"></i> Open Source
          </div>
          <h2 className="section-title">Club Projects Showcase</h2>
          <p className="section-subtitle">
            Explore cutting-edge software applications built by SDC VIT Bhopal student developers.
          </p>
        </div>

        <div className="timeline-container">
          {projects.map((p, idx) => (
            <div key={idx} className="glass-card">
              <div className={`text-xs font-bold ${p.color} mb-2`}>{p.cat}</div>
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="event-desc">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t, tidx) => (
                  <span key={tidx} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex-1 text-xs py-2"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href={p.demo} className="btn-primary flex-1 text-xs py-2">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
