"use client";

import { useState } from "react";

interface RoadmapTrack {
  id: string;
  title: string;
  icon: string;
  steps: { id: string; topic: string }[];
}

const ROADMAP_TRACKS: RoadmapTrack[] = [
  {
    id: "frontend",
    title: "Frontend Architecture & Motion",
    icon: "fa-laptop-code",
    steps: [
      { id: "fe-1", topic: "HTML5 Semantic Markup & Web Accessibility (a11y)" },
      { id: "fe-2", topic: "CSS Grid, Flexbox & CSS Custom Properties Design Systems" },
      { id: "fe-3", topic: "Modern JavaScript (ES6+), Async/Await & Event Loop" },
      { id: "fe-4", topic: "React 19, Server Components & Hooks State Architecture" },
      { id: "fe-5", topic: "TypeScript Type Systems, Interfaces & Generics" },
      { id: "fe-6", topic: "Framer Motion, Canvas & WebGL Performance Optimizations" },
    ],
  },
  {
    id: "backend",
    title: "Backend Systems & Microservices",
    icon: "fa-server",
    steps: [
      { id: "be-1", topic: "RESTful API & GraphQL Schema Architecture" },
      { id: "be-2", topic: "Node.js Express & Fastify High-Performance Servers" },
      { id: "be-3", topic: "PostgreSQL Relational Design & Indexing Optimization" },
      { id: "be-4", topic: "MongoDB & Redis Caching Layer Strategies" },
      { id: "be-5", topic: "Microservices & Event-Driven Architecture (Kafka / NATS)" },
      { id: "be-6", topic: "Go / Rust High Concurrency Backend Engineering" },
    ],
  },
  {
    id: "ai",
    title: "AI, LLMs & Autonomous Agents",
    icon: "fa-brain",
    steps: [
      { id: "ai-1", topic: "Python, NumPy, Pandas & Data Analysis Foundations" },
      { id: "ai-2", topic: "Machine Learning Fundamentals with Scikit-Learn" },
      { id: "ai-3", topic: "Deep Learning & Neural Networks with PyTorch" },
      { id: "ai-4", topic: "Transformer Architecture & Fine-tuning LLMs (HuggingFace)" },
      { id: "ai-5", topic: "Vector Databases (ChromaDB, Pinecone) & RAG Systems" },
      { id: "ai-6", topic: "Building Autonomous AI Agents with LangChain & LangGraph" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Native & DevOps Engineering",
    icon: "fa-cloud",
    steps: [
      { id: "cl-1", topic: "Linux Administration, Bash Scripting & Networking" },
      { id: "cl-2", topic: "Containerization with Docker & Multi-stage Builds" },
      { id: "cl-3", topic: "Kubernetes Cluster Administration & Helm Charts" },
      { id: "cl-4", topic: "Infrastructure as Code with Terraform & AWS" },
      { id: "cl-5", topic: "CI/CD Automation Pipelines (GitHub Actions)" },
      { id: "cl-6", topic: "Observability & Monitoring with Prometheus & Grafana" },
    ],
  },
];

export default function DeveloperRoadmaps() {
  const [completedSteps, setCompletedSteps] = useState<string[]>(["fe-1", "fe-2", "be-1"]);

  const toggleStep = (stepId: string) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter((id) => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  return (
    <section id="roadmaps" className="section-padding bg-[#0e051c]/60">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <i className="fas fa-route"></i> Career Paths
          </div>
          <h2 className="section-title">Developer Roadmaps</h2>
          <p className="section-subtitle">
            Interactive curated learning roadmaps for Frontend, Backend, AI/ML, and DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROADMAP_TRACKS.map((track) => {
            const completedCount = track.steps.filter((s) => completedSteps.includes(s.id)).length;
            const progressPct = Math.round((completedCount / track.steps.length) * 100);

            return (
              <div key={track.id} className="glass-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center text-lg">
                      <i className={`fas ${track.icon}`}></i>
                    </div>
                    <h3 className="text-lg font-bold text-white">{track.title}</h3>
                  </div>
                  <span className="font-bold text-[#FF007F] text-sm">{progressPct}%</span>
                </div>

                <div className="w-full h-1.5 bg-white/5 rounded-full mb-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF007F] to-[#00F0FF] transition-all duration-300"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <ul className="space-y-3">
                  {track.steps.map((step) => {
                    const isDone = completedSteps.includes(step.id);

                    return (
                      <li
                        key={step.id}
                        onClick={() => toggleStep(step.id)}
                        className={`flex items-start gap-3 text-xs sm:text-sm cursor-pointer ${
                          isDone ? "text-white line-through opacity-80" : "text-zinc-400"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isDone}
                          onChange={() => {}}
                          className="mt-0.5 accent-[#FF4500] cursor-pointer"
                        />
                        <span>{step.topic}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
