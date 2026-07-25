"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [istClock, setIstClock] = useState("--:--:-- IST");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setIstClock(now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" }) + " IST");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="editorial-footer">
      <div className="container">
        <div className="footer-big-text">SDC VIT BHOPAL</div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-base font-bold text-white mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#events" className="hover:text-[#FF4500]">Events & QR Passes</a></li>
              <li><a href="#team" className="hover:text-[#FF4500]">Meet Core Team</a></li>
              <li><a href="#campus-map" className="hover:text-[#FF4500]">Campus Locations</a></li>
              <li><a href="#dashboard" className="hover:text-[#FF4500]">Member Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-3">Community Links</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/sdcvitb/posts/?feedView=all"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00F0FF] text-[#00F0FF] font-semibold"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn Official Page
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sdcvitb?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF007F] text-[#FF007F] font-semibold"
                >
                  <i className="fab fa-instagram"></i> Instagram (@sdcvitb)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-3">Contact HQ</h4>
            <p className="text-zinc-400 text-sm mb-2">
              Room 214, AB-1 Academic Block,<br />
              VIT Bhopal University, MP - 466114
            </p>
            <p className="text-[#00F0FF] text-sm mb-3">sdc@vitbhopal.ac.in</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/company/sdcvitb/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-xs px-3 py-1.5 inline-flex items-center gap-1.5 border-[#00F0FF] text-[#00F0FF]"
              >
                <i className="fab fa-linkedin text-sm"></i> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/sdcvitb?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-xs px-3 py-1.5 inline-flex items-center gap-1.5 border-[#FF007F] text-[#FF007F]"
              >
                <i className="fab fa-instagram text-sm"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 text-xs text-zinc-500 gap-4">
          <div>© 2026 Software Development Club (SDC) VIT Bhopal. All rights reserved.</div>
          <div className="font-mono text-[#39FF14] font-bold">{istClock}</div>
        </div>
      </div>
    </footer>
  );
}
