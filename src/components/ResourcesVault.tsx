"use client";

export default function ResourcesVault() {
  const resources = [
    {
      title: "System Design Handbook",
      icon: "fa-file-code",
      color: "text-[#00F0FF]",
      desc: "Comprehensive guide to microservices, load balancing, database sharding & caching.",
      btnText: "Download PDF",
      btnIcon: "fa-download",
      link: "#",
    },
    {
      title: "Next.js Y2K Starter Kit",
      icon: "fa-github",
      color: "text-[#FF007F]",
      isFab: true,
      desc: "Pre-configured boilerplate with Framer Motion, Tailwind, Three.js & Lucide icons.",
      btnText: "Clone Repository",
      btnIcon: "fa-code-branch",
      link: "https://github.com",
    },
    {
      title: "DSA 150 Interview Matrix",
      icon: "fa-brain",
      color: "text-[#39FF14]",
      desc: "Selected LeetCode patterns for FAANG & high-growth tech startup interview prep.",
      btnText: "Open Sheet",
      btnIcon: "fa-external-link-alt",
      link: "#",
    },
  ];

  return (
    <section id="resources" className="section-padding">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-book-open"></i> Study Vault
          </div>
          <h2 className="section-title">Resources & Starter Kits</h2>
          <p className="section-subtitle">
            Curated developer guides, video courses, interview cheat sheets, and GitHub templates.
          </p>
        </div>

        <div className="timeline-container">
          {resources.map((r, idx) => (
            <div key={idx} className="glass-card">
              <i className={`${r.isFab ? "fab" : "fas"} ${r.icon} text-3xl ${r.color} mb-4`}></i>
              <h3 className="text-xl font-bold text-white mb-2">{r.title}</h3>
              <p className="event-desc">{r.desc}</p>
              <a href={r.link} className="btn-secondary text-xs px-4 py-2">
                <i className={`fas ${r.btnIcon}`}></i> {r.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
