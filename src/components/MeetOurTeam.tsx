"use client";

import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: "board" | "tech" | "design" | "events" | "management" | "faculty";
  avatar: string;
  skills: string[];
  bio: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  // Faculty Advisors
  {
    id: 101,
    name: "Dr. Praveen Lalwani",
    role: "Faculty Advisor",
    category: "faculty",
    avatar: "https://vitbhopal.ac.in/file/2021/06/Dr.-Praveen-Lalwani_C.jpg",
    skills: ["Cyber Security", "Digital Forensics", "Research", "SCSE"],
    bio: "Assistant Professor at SCSE, VIT Bhopal University. Completed PhD from IIT (ISM) Dhanbad. Research interests include Cyber Security & Digital Forensics.",
    linkedin: "https://vitbhopal.ac.in",
  },
  {
    id: 102,
    name: "Dr. Shweta Saxena",
    role: "Faculty Advisor",
    category: "faculty",
    avatar: "https://vitbhopal.ac.in/file/2021/07/Shweta-Saxena__C.jpg",
    skills: ["Machine Learning", "Image Processing", "Health Informatics"],
    bio: "Doctorate from MANIT & M.Tech from RGPV Bhopal. Specialist in Machine Learning, Image Processing, and Health Informatics.",
    linkedin: "https://vitbhopal.ac.in",
  },

  // Executive Board & Team Leads copied from sdc-eight.vercel.app
  {
    id: 1,
    name: "Meet Bikhani",
    role: "President",
    category: "board",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    skills: ["Machine Learning", "Frontend Dev", "Leadership", "Event Mgmt"],
    bio: "Committed to lifelong learning, I lead with a focus on teamwork and effective event planning. My expertise spans Machine Learning and Frontend Programming.",
    linkedin: "http://www.linkedin.com/in/meetbikhani",
  },
  {
    id: 2,
    name: "Shubh Gupta",
    role: "Vice-President",
    category: "board",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    skills: ["Artificial Intelligence", "Machine Learning", "PyTorch", "Python"],
    bio: "Dedicated machine learning enthusiast at VIT Bhopal University. Aspires to make a meaningful impact in the rapidly evolving field of AI.",
    linkedin: "http://linkedin.com/in/ishubhgupta",
  },
  {
    id: 3,
    name: "Akshat Rastogi",
    role: "Treasurer",
    category: "board",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    skills: ["C++", "Java", "Python", "AIML", "Web Dev"],
    bio: "Deeply engrossed in AIML web development and research, fluent in coding with C++, Java, and Python. Merges tech-savvy skills with a passion for innovative solutions.",
    linkedin: "https://www.linkedin.com/in/akshat-rastogi-000000660000000006/",
  },
  {
    id: 4,
    name: "Rupal Mishra",
    role: "Secretary",
    category: "board",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    skills: ["UI/UX Design", "AIML Research", "Figma", "Design Systems"],
    bio: "Passionate about UI/UX design and AIML research. Merges creativity with technology for innovative user-centric solutions.",
    linkedin: "https://www.linkedin.com/in/rupal-m-1478461b1/",
  },
  {
    id: 5,
    name: "Sandeep Balabantaray",
    role: "Joint Secretary",
    category: "board",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    skills: ["AIML", "App Development", "Data Science", "Mobile Apps"],
    bio: "Passionate about AIML and App development, blending data science with mobile applications for innovative technology solutions.",
    linkedin: "https://www.linkedin.com/in/sandeep-balabantaray-69b60221b",
  },
  {
    id: 6,
    name: "Rishita Arora",
    role: "Coordinator & Event Team Lead",
    category: "events",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    skills: ["Event Mgmt", "Operations", "Team Leadership", "Coordination"],
    bio: "SDC Coordinator devoted to enhancing our software development club. Aspiring for managerial excellence through collaborative event coordination.",
    linkedin: "https://www.linkedin.com/in/rishita-arora-282882250",
  },
  {
    id: 7,
    name: "Harshita Jangde",
    role: "Sub-Coordinator & Social Media Lead",
    category: "events",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    skills: ["Software Dev", "Machine Learning", "Social Media", "PR"],
    bio: "Diligent developer passionate about Machine Learning and software engineering, driving seamless campus events and club outreach.",
    linkedin: "https://www.linkedin.com/in/harshita-jangde-b57520260",
  },
  {
    id: 8,
    name: "Prachi Tavse",
    role: "Manager & Content Team Lead",
    category: "management",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    skills: ["Content Creation", "Club Mgmt", "Teamwork", "Publicity"],
    bio: "SDC Manager dedicated to supporting our club's success through teamwork, structured content, and effective event management.",
    linkedin: "https://www.linkedin.com/in/prachi-tavse-32072a250/",
  },
  {
    id: 9,
    name: "Sahejpreet Kaur",
    role: "Sub-Manager",
    category: "management",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    skills: ["Event Planning", "Operations", "Collaboration", "Community"],
    bio: "Enthusiastic sub-manager assisting in organizing events and fostering a collaborative, high-energy environment for members.",
    linkedin: "https://www.linkedin.com/in/sahejpreet-kaur-214b35251",
  },
  {
    id: 10,
    name: "Asmi Vats",
    role: "Tech Team Lead",
    category: "tech",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    skills: ["Full Stack", "Problem Solving", "Web Architecture", "Python"],
    bio: "Determined second-year developer, fueled by passion and unafraid to tackle any complex technical challenge.",
    linkedin: "https://www.linkedin.com/in/asmivats/",
  },
  {
    id: 11,
    name: "Saanvi Goel",
    role: "Design Team Lead",
    category: "design",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    bio: "Specializing in UI/UX design, combining creativity and technology to craft inventive solutions and digital experiences.",
    linkedin: "https://www.linkedin.com/in/saanvi-goel-4b5b33251",
  },
];

interface MeetOurTeamProps {
  onOpenJoinModal: () => void;
}

export default function MeetOurTeam({ onOpenJoinModal }: MeetOurTeamProps) {
  const [filter, setFilter] = useState("all");

  const filteredMembers =
    filter === "all" ? TEAM_MEMBERS : TEAM_MEMBERS.filter((m) => m.category === filter);

  return (
    <section id="team" className="section-padding bg-[#0e051c]/60">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-users-gear"></i> Core Officers & Faculty
          </div>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The presidents, leads, managers, and faculty advisors of Software Development Club (SDC) VIT Bhopal.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-pills">
          {[
            { id: "all", label: "All Members" },
            { id: "faculty", label: "Faculty Advisors" },
            { id: "board", label: "Executive Board" },
            { id: "tech", label: "Tech Lead" },
            { id: "design", label: "Design Lead" },
            { id: "events", label: "Events & PR" },
            { id: "management", label: "Management" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/company/sdcvitb/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
            className="filter-btn text-[#00F0FF] border-[#00F0FF] flex items-center gap-1.5"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/sdcvitb?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
            className="filter-btn text-[#FF007F] border-[#FF007F] flex items-center gap-1.5"
          >
            <i className="fab fa-instagram"></i> Instagram (@sdcvitb)
          </a>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {filteredMembers.map((member) => (
            <div key={member.id} className="holo-card">
              <div className="holo-inner">
                <div className="team-card-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.avatar} alt={member.name} loading="lazy" />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="event-desc text-center text-xs mb-3">{member.bio}</p>

                <div className="team-skills">
                  {member.skills.map((s, idx) => (
                    <span key={idx} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="team-socials mt-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="team-social-icon bg-[#00F0FF]/15 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black"
                    title={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onOpenJoinModal} className="btn-primary">
            <i className="fas fa-paper-plane"></i> Apply for SDC Core Team
          </button>
          <a
            href="https://www.linkedin.com/company/sdcvitb/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs py-3 px-5 border-[#00F0FF] text-[#00F0FF]"
          >
            <i className="fab fa-linkedin text-sm"></i> SDC LinkedIn
          </a>
          <a
            href="https://www.instagram.com/sdcvitb?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs py-3 px-5 border-[#FF007F] text-[#FF007F]"
          >
            <i className="fab fa-instagram text-sm"></i> Instagram (@sdcvitb)
          </a>
        </div>
      </div>
    </section>
  );
}
