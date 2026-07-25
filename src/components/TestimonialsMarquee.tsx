"use client";

export default function TestimonialsMarquee() {
  const testimonials = [
    {
      text: "SDC VIT Bhopal completely transformed my tech career. I built my first open source project here and got placed at Microsoft!",
      author: "Rohan Verma",
      role: "Alumni @ Microsoft",
      roleColor: "text-[#00F0FF]",
    },
    {
      text: "The Y2K web design, hackathons, and XP leaderboards make learning code feel like playing an RPG game with your best friends!",
      author: "Sneha Iyer",
      role: "3rd Year CSE",
      roleColor: "text-[#FF007F]",
    },
    {
      text: "CYBERHACK 2025 was the best organized college hackathon in India. Top notch mentors, fast Wi-Fi, and insane prize pools!",
      author: "Karan Patel",
      role: "Hackathon Winner",
      roleColor: "text-[#39FF14]",
    },
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-quote-left"></i> Testimonials
          </div>
          <h2 className="section-title">What Students Say</h2>
        </div>

        <div className="flex gap-6 w-[200%] animate-marquee">
          {testimonials.concat(testimonials).map((item, idx) => (
            <div key={idx} className="glass-card w-[380px] shrink-0">
              <p className="text-sm text-zinc-400 mb-4">&quot;{item.text}&quot;</p>
              <h4 className="text-white font-bold text-base">{item.author}</h4>
              <span className={`text-xs font-semibold ${item.roleColor}`}>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
