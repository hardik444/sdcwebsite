"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenJoinModal?: () => void;
  onOpenLoginModal?: () => void;
}

export default function Navbar({ onOpenJoinModal, onOpenLoginModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["hero", "events", "team", "campus-map", "dashboard", "roadmaps", "projects", "hackathon", "resources", "gallery"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "events", label: "Events" },
    { id: "team", label: "Team" },
    { id: "campus-map", label: "Map" },
    { id: "dashboard", label: "Dashboard" },
    { id: "roadmaps", label: "Roadmaps" },
    { id: "projects", label: "Projects" },
    { id: "hackathon", label: "Hackathon" },
    { id: "resources", label: "Resources" },
    { id: "gallery", label: "Gallery" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-brand flex items-center gap-2.5 mr-4 lg:mr-28">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#FF007F] shadow-[0_0_20px_#FF007F] shrink-0">
            <Image
              src="/sdc-logo.png"
              alt="SDC Logo"
              width={44}
              height={44}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-heading font-black text-white text-xl sm:text-3xl tracking-wider uppercase whitespace-nowrap drop-shadow-[0_0_18px_rgba(255,69,0,0.9)]">
            SDC
          </span>
        </a>

        {/* Desktop Dock Links */}
        <ul className="nav-dock-container hidden lg:flex ml-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions ml-auto hidden sm:flex items-center gap-3">
          <Link
            href="/auth?mode=login"
            className="btn-secondary text-xs px-3.5 py-1.5"
          >
            Login
          </Link>
          <Link
            href="/auth?mode=signup"
            className="btn-primary text-xs px-4 py-1.5"
          >
            Join SDC
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden ml-auto p-2 text-white text-xl focus:outline-none focus:text-[#39FF14]"
          aria-label="Toggle Mobile Menu"
        >
          <i className={`fas ${mobileMenuOpen ? "fa-times text-[#FF007F]" : "fa-bars text-[#39FF14]"}`}></i>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#06020e]/95 backdrop-blur-2xl z-[9999] lg:hidden flex flex-col p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF007F] shadow-[0_0_15px_#FF007F]">
                <Image src="/sdc-logo.png" alt="SDC Logo" width={40} height={40} />
              </div>
              <span className="font-heading font-black text-2xl text-white">SDC HUB</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center text-lg"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  activeSection === link.id
                    ? "bg-[#FF4500]/20 text-[#39FF14] border border-[#39FF14]/40"
                    : "text-zinc-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
            <Link
              href="/auth?mode=login"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary text-center text-xs py-3 w-full"
            >
              Login
            </Link>
            <Link
              href="/auth?mode=signup"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center text-xs py-3 w-full"
            >
              Join SDC
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
