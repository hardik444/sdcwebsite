"use client";

import { useState, useRef } from "react";

interface LeaderboardUser {
  rank: number;
  name: string;
  xp: number;
  level: string;
  badges: string[];
  change: string;
}

const MOCK_LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: "Aarav Sharma", xp: 4850, level: "Lvl 12 Cyber Master", badges: ["🏆", "🔥", "⭐", "👑"], change: "+2" },
  { rank: 2, name: "Alex Chen (You)", xp: 3420, level: "Lvl 8 Senior Dev", badges: ["🏆", "🔥", "⭐"], change: "0" },
  { rank: 3, name: "Priya Sharma", xp: 3290, level: "Lvl 8 Tech Lead", badges: ["🏆", "🔥", "👑"], change: "+1" },
  { rank: 4, name: "Rahul Verma", xp: 2950, level: "Lvl 7 Open Source", badges: ["🔥", "⭐"], change: "-1" },
  { rank: 5, name: "Ananya Patel", xp: 2710, level: "Lvl 6 Full Stack", badges: ["🏆", "⭐"], change: "+3" },
  { rank: 6, name: "Devansh Gupta", xp: 2400, level: "Lvl 5 Hacker", badges: ["🔥"], change: "0" },
];

const USER_BADGES = [
  { icon: "🏆", title: "First Hackathon", desc: "Participated in SDC Flagship Hackathon", status: "unlocked" },
  { icon: "🔥", title: "5 Events Attended", desc: "Active member in campus workshops", status: "unlocked" },
  { icon: "⭐", title: "Open Source Contributor", desc: "Merged 3+ Pull Requests in SDC Repos", status: "unlocked" },
  { icon: "👑", title: "Top Developer", desc: "Ranked Top 5 in SDC Leaderboard", status: "locked" },
];

export default function ClubDashboard() {
  const [showCertModal, setShowCertModal] = useState(false);
  const certCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateCertificate = () => {
    setShowCertModal(true);
    setTimeout(() => {
      const canvas = certCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 600;
      canvas.height = 400;

      ctx.fillStyle = "#06020e";
      ctx.fillRect(0, 0, 600, 400);

      ctx.strokeStyle = "#FF4500";
      ctx.lineWidth = 4;
      ctx.strokeRect(15, 15, 570, 370);

      ctx.strokeStyle = "#00F0FF";
      ctx.lineWidth = 1;
      ctx.strokeRect(22, 22, 556, 356);

      ctx.fillStyle = "#ffffff";
      ctx.font = 'bold 24px "Space Grotesk", sans-serif';
      ctx.textAlign = "center";
      ctx.fillText("SOFTWARE DEVELOPMENT CLUB", 300, 70);

      ctx.fillStyle = "#00F0FF";
      ctx.font = 'bold 14px "Space Grotesk", sans-serif';
      ctx.fillText("VIT BHOPAL UNIVERSITY", 300, 95);

      ctx.fillStyle = "#a1a1aa";
      ctx.font = "14px sans-serif";
      ctx.fillText("This Certificate of Accomplishment is Awarded To", 300, 140);

      ctx.fillStyle = "#FF4500";
      ctx.font = 'bold 30px "Space Grotesk", sans-serif';
      ctx.fillText("ALEX CHEN", 300, 190);

      ctx.fillStyle = "#f4f4f5";
      ctx.font = "14px sans-serif";
      ctx.fillText("For outstanding performance in Open Source Summer Sprint 2026", 300, 230);
      ctx.fillText("Earned Level 8 Senior Dev Rank with 3,420 XP", 300, 255);

      ctx.fillStyle = "#71717a";
      ctx.font = "12px sans-serif";
      ctx.fillText("Aarav Sharma (President)", 160, 330);
      ctx.fillText("Dr. S. K. Raman (Faculty Advisor)", 440, 330);

      ctx.strokeStyle = "#52525b";
      ctx.beginPath();
      ctx.moveTo(90, 310);
      ctx.lineTo(230, 310);
      ctx.moveTo(370, 310);
      ctx.lineTo(510, 310);
      ctx.stroke();
    }, 100);
  };

  return (
    <section id="dashboard" className="section-padding bg-[#0e051c]/60">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-trophy"></i> Member Portal
          </div>
          <h2 className="section-title">Dashboard & Gamification</h2>
          <p className="section-subtitle">
            Track your XP points, level rank, achievement badges, and verifiable SDC certificates.
          </p>
        </div>

        {/* Profile Card */}
        <div className="glass-card mb-8 border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.25)]">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF4500] via-[#FF007F] to-[#00F0FF] flex items-center justify-center font-bold text-white text-xl">
                AC
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Alex Chen</h3>
                <p className="text-sm text-[#39FF14]">Lvl 8 Senior Dev • VIT Bhopal (22BCE10089)</p>
              </div>
            </div>

            <button onClick={generateCertificate} className="btn-secondary text-xs px-4 py-2">
              <i className="fas fa-certificate text-[#FFDF00]"></i> View Certificates
            </button>
          </div>

          {/* XP Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
              <span>XP Level Progress (3,420 / 4,000 XP)</span>
              <span className="text-[#39FF14] font-bold">85.5%</span>
            </div>
            <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF4500] via-[#FF007F] to-[#00F0FF] shadow-[0_0_15px_#FF4500]"
                style={{ width: "85.5%" }}
              />
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <h3 className="text-xl font-bold text-white mb-4">Unlocked Badges</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {USER_BADGES.map((b, idx) => (
            <div
              key={idx}
              className={`glass-card p-4 text-center ${
                b.status === "locked" ? "opacity-40 border-white/10" : "border-[#FF007F]/40"
              }`}
            >
              <div className="text-3xl mb-2">{b.icon}</div>
              <h4 className="font-bold text-white text-sm mb-1">{b.title}</h4>
              <p className="text-xs text-zinc-400 mb-2">{b.desc}</p>
              <span
                className={`inline-block text-[10px] px-2 py-0.5 rounded-full uppercase font-semibold ${
                  b.status === "unlocked"
                    ? "bg-[#00F0FF]/15 text-[#00F0FF]"
                    : "bg-white/5 text-zinc-500"
                }`}
              >
                {b.status}
              </span>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <h3 className="text-xl font-bold text-white mb-4">SDC Member Leaderboard</h3>
        <div className="glass-card p-0 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/5 text-zinc-400 border-b border-white/10">
                <th className="p-3.5 text-center">Rank</th>
                <th className="p-3.5">Member Name</th>
                <th className="p-3.5">Level Rank</th>
                <th className="p-3.5">Badges</th>
                <th className="p-3.5">Total XP</th>
                <th className="p-3.5 text-center">Change</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LEADERBOARD.map((user) => (
                <tr
                  key={user.rank}
                  className={`border-b border-white/5 ${
                    user.name.includes("You") ? "bg-[#FF007F]/10 font-bold" : ""
                  }`}
                >
                  <td className="p-3.5 text-center">
                    {user.rank === 1 ? "👑 1" : user.rank === 2 ? "🥈 2" : user.rank === 3 ? "🥉 3" : user.rank}
                  </td>
                  <td className="p-3.5 text-white">{user.name}</td>
                  <td className="p-3.5 text-[#00F0FF]">{user.level}</td>
                  <td className="p-3.5">{user.badges.join(" ")}</td>
                  <td className="p-3.5 font-bold text-[#FF4500]">{user.xp} XP</td>
                  <td
                    className={`p-3.5 text-center font-semibold ${
                      user.change.includes("+") ? "text-[#39FF14]" : "text-amber-400"
                    }`}
                  >
                    {user.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Certificate View Modal */}
      {showCertModal && (
        <div className="modal-backdrop active" onClick={() => setShowCertModal(false)}>
          <div className="modal-box max-w-xl" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setShowCertModal(false)}>
              <i className="fas fa-times"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">SDC Certificate of Excellence</h3>

            <div className="text-center mb-4">
              <canvas
                ref={certCanvasRef}
                className="w-full rounded-xl border border-[#FF4500] shadow-[0_0_25px_#FF4500] mx-auto"
              />
            </div>

            <button
              onClick={() => alert("📥 Certificate Downloaded! Saved as SDC_Alex_Chen_Certificate.png")}
              className="btn-primary w-full text-xs py-2.5"
            >
              <i className="fas fa-download"></i> Download PNG Certificate
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
