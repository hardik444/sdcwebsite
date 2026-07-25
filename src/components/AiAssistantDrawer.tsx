"use client";

import { useState } from "react";

const SDC_KNOWLEDGE_BASE = [
  {
    keywords: ["join", "membership", "recruit", "apply"],
    answer:
      "🚀 To join SDC VIT Bhopal, click on the **'Join SDC'** button in the header or fill out our Core Team application drawer. Membership is open to all VIT Bhopal students across all branches!",
  },
  {
    keywords: ["event", "hackathon", "cyberhack", "workshop"],
    answer:
      "📅 Our flagship event **CYBERHACK 2026** is scheduled for August 14-16, 2026 with ₹5,00,000+ in prizes! Check the **Events** or **Hackathon Hub** section to register and get your instant QR Pass.",
  },
  {
    keywords: ["xp", "badge", "leaderboard", "points", "points system"],
    answer:
      "🏆 Every member earns XP by attending workshops (+100 XP), contributing to open source (+250 XP), or winning hackathons (+500 XP). Top rankers unlock exclusive badges and SDC swags!",
  },
  {
    keywords: ["certificate", "cert", "verification"],
    answer:
      "📜 SDC Certificates of Participation & Excellence are automatically issued to your **Club Dashboard**. You can preview, verify, and download your high-res PNG certificate anytime!",
  },
  {
    keywords: ["mentor", "lead", "president", "team"],
    answer:
      "👑 SDC is led by **Aarav Sharma** (President & Tech Lead), **Ananya Verma** (VP), and alumni advisors from Google, Amazon & Microsoft. Check out our **Meet Our Team** section to connect!",
  },
  {
    keywords: ["project", "showcase", "submit"],
    answer:
      "💡 Have a cool project? You can showcase it in our **Club Projects Showcase** section with tech stack tags, live demos, and GitHub links. Top projects get featured on SDC social channels!",
  },
];

export default function AiAssistantDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "bot" }>>([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hey Hacker! I'm SDC CyberBot. Ask me anything about upcoming hackathons, QR pass registration, XP leaderboards, or joining our core team!",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg = { id: Date.now(), sender: "user" as const, text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal("");

    const qLower = text.toLowerCase();
    let reply =
      "🤖 I'm SDC CyberBot! I'm trained on all Software Development Club VIT Bhopal guidelines. You can ask me about upcoming hackathons, event QR passes, XP badges, roadmaps, or team recruitment!";

    for (const item of SDC_KNOWLEDGE_BASE) {
      if (item.keywords.some((kw) => qLower.includes(kw))) {
        reply = item.answer;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: "bot", text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-trigger-btn"
        title="Open SDC CyberBot AI"
      >
        <i className="fas fa-robot"></i>
      </button>

      {/* AI Assistant Drawer */}
      <div className={`ai-drawer ${isOpen ? "active" : ""}`}>
        <div className="p-4 bg-[#39FF14]/15 border-b border-[#39FF14]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="fas fa-robot text-[#39FF14] text-xl"></i>
            <div>
              <h4 className="font-bold text-white text-sm">SDC CyberBot AI</h4>
              <span className="text-[10px] text-[#39FF14] font-semibold">Online • VIT Bhopal Trained</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#39FF14]">
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {/* Message Logs */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-2 text-xs ${m.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold shrink-0 ${
                  m.sender === "user" ? "bg-[#FF007F] text-white" : "bg-[#39FF14] text-black"
                }`}
              >
                {m.sender === "user" ? "U" : "AI"}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-xl border text-white ${
                  m.sender === "user"
                    ? "bg-[#FF007F]/15 border-[#FF007F]/30"
                    : "bg-[#39FF14]/10 border-[#39FF14]/25"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Prompt Chips */}
        <div className="px-3 py-2 flex gap-2 overflow-x-auto bg-black/20">
          {["How to join SDC?", "CYBERHACK details", "XP Badges"].map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              className="skill-tag cursor-pointer whitespace-nowrap text-xs hover:bg-[#39FF14]/20 hover:text-[#39FF14]"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-[#0a0a0f]/90 border-t border-white/10 flex gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask CyberBot..."
            className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#39FF14]"
          />
          <button onClick={() => handleSend()} className="btn-primary px-4 py-2 text-xs rounded-full">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}
