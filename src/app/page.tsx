"use client";

import { useState } from "react";
import AmbientCanvas from "@/components/AmbientCanvas";
import Navbar from "@/components/Navbar";
import EntryTerminalModal from "@/components/EntryTerminalModal";
import HeroSection from "@/components/HeroSection";
import EventTimeline from "@/components/EventTimeline";
import MeetOurTeam from "@/components/MeetOurTeam";
import InteractiveCampusMap from "@/components/InteractiveCampusMap";
import ClubDashboard from "@/components/ClubDashboard";
import DeveloperRoadmaps from "@/components/DeveloperRoadmaps";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import HackathonHub from "@/components/HackathonHub";
import ResourcesVault from "@/components/ResourcesVault";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import NewsletterConfetti from "@/components/NewsletterConfetti";
import AiAssistantDrawer from "@/components/AiAssistantDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* Interactive UV Cyber Entry Terminal Gateway */}
      <EntryTerminalModal onEnter={() => {}} />

      {/* Ambient UV Plasma Canvas & Cursor */}
      <AmbientCanvas />
      <div className="cyber-grid" />
      <div className="noise-overlay" />

      {/* Floating UV Cyber Dock Navbar */}
      <Navbar
        onOpenJoinModal={() => setShowJoinModal(true)}
        onOpenLoginModal={() => setShowLoginModal(true)}
      />

      {/* Main Feature Sections */}
      <HeroSection onOpenJoinModal={() => setShowJoinModal(true)} />
      <EventTimeline />
      <MeetOurTeam onOpenJoinModal={() => setShowJoinModal(true)} />
      <InteractiveCampusMap />
      <ClubDashboard />
      <DeveloperRoadmaps />
      <ProjectsShowcase />
      <HackathonHub />
      <ResourcesVault />
      <PhotoGallery />
      <TestimonialsMarquee />
      <NewsletterConfetti />
      <Footer />

      {/* Floating AI Assistant Drawer */}
      <AiAssistantDrawer />

      {/* Join Core Team Application Modal */}
      {showJoinModal && (
        <div className="modal-backdrop active" onClick={() => setShowJoinModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setShowJoinModal(false)}>
              <i className="fas fa-times"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Join SDC Core Team</h3>
            <p className="text-xs text-zinc-400 mb-4">
              Apply for technical, design, marketing, or event leadership roles.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("🚀 Application Submitted successfully! SDC Executive Board will review your profile.");
                setShowJoinModal(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#FF4500]"
              />
              <input
                type="text"
                placeholder="VIT Registration Number (e.g. 23BCE10123)"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#FF4500]"
              />
              <select
                required
                className="w-full p-3 rounded-lg bg-[#141420] border border-white/15 text-white text-xs focus:outline-none focus:border-[#FF4500]"
              >
                <option value="">Select Domain Preference</option>
                <option value="tech">Technical & Open Source Lead</option>
                <option value="design">UI/UX & 3D Motion Design</option>
                <option value="events">Events & Hackathon Operations</option>
                <option value="pr">PR, Growth & Social Media</option>
              </select>
              <textarea
                placeholder="Tell us about your technical projects & GitHub profile..."
                rows={3}
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#FF4500]"
              />
              <button type="submit" className="btn-primary w-full text-xs py-2.5 mt-2">
                <i className="fas fa-paper-plane"></i> Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Member Login Modal */}
      {showLoginModal && (
        <div className="modal-backdrop active" onClick={() => setShowLoginModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={() => setShowLoginModal(false)}>
              <i className="fas fa-times"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">SDC Member Login</h3>
            <p className="text-xs text-zinc-400 mb-4">Login using your VIT Bhopal student credentials.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Logged in as Alex Chen (Lvl 8 Senior Dev)");
                setShowLoginModal(false);
              }}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="College Email (e.g. alex.chen2022@vitbhopal.ac.in)"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#00F0FF]"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-[#00F0FF]"
              />
              <button type="submit" className="btn-primary w-full text-xs py-2.5 mt-2">
                <i className="fas fa-sign-in-alt"></i> Login to Dashboard
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
