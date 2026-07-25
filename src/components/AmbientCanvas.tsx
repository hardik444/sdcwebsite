"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    triggerColorBurst?: (x?: number, y?: number) => void;
  }
}

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;
    const mouse = { x: -1000, y: -1000, radius: 250 };

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseAlpha: number;
      alpha: number;
      angle: number;
    }

    interface BurstParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
    }

    const particles: Particle[] = [];
    const burstParticles: BurstParticle[] = [];
    const particleCount = 95;
    const colors = [
      "rgba(255, 69, 0, ",
      "rgba(255, 0, 127, ",
      "rgba(57, 255, 20, ",
      "rgba(0, 240, 255, ",
      "rgba(138, 0, 255, "
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.6 + 0.3,
        alpha: Math.random() * 0.6 + 0.3,
        angle: Math.random() * Math.PI * 2
      });
    }

    window.triggerColorBurst = (originX?: number, originY?: number) => {
      const burstColors = ["#FF4500", "#FF007F", "#39FF14", "#00F0FF", "#8A00FF", "#FFDF00"];
      const ox = originX ?? width / 2;
      const oy = originY ?? height / 2;

      for (let i = 0; i < 180; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 24 + 5;
        burstParticles.push({
          x: ox,
          y: oy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 10 + 3,
          color: burstColors[Math.floor(Math.random() * burstColors.length)],
          alpha: 1,
          decay: Math.random() * 0.015 + 0.008
        });
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const drawUVAurora = () => {
      time += 0.006;

      // Radial Plasma Aurora Blobs
      const x1 = width * (0.5 + Math.sin(time * 0.8) * 0.25);
      const y1 = height * (0.35 + Math.cos(time * 0.6) * 0.25);
      const grad1 = ctx.createRadialGradient(x1, y1, 20, x1, y1, 620);
      grad1.addColorStop(0, "rgba(255, 69, 0, 0.26)");
      grad1.addColorStop(0.5, "rgba(255, 0, 127, 0.16)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const x2 = width * (0.2 + Math.cos(time * 0.7) * 0.25);
      const y2 = height * (0.7 + Math.sin(time * 0.9) * 0.25);
      const grad2 = ctx.createRadialGradient(x2, y2, 30, x2, y2, 650);
      grad2.addColorStop(0, "rgba(57, 255, 20, 0.22)");
      grad2.addColorStop(0.5, "rgba(0, 240, 255, 0.18)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);
    };

    // Fluorescent UV Topographic Organic Wave Lines (Inspired by Reference Art)
    const drawTopographicWaves = () => {
      const lineColors = [
        "rgba(255, 69, 0, 0.35)",
        "rgba(255, 0, 127, 0.35)",
        "rgba(57, 255, 20, 0.32)",
        "rgba(0, 240, 255, 0.35)",
        "rgba(138, 0, 255, 0.35)",
        "rgba(255, 223, 0, 0.28)"
      ];

      const lineCount = 18;
      const stepY = height / lineCount;

      for (let i = 0; i < lineCount; i++) {
        const baseY = i * stepY;
        const color = lineColors[i % lineColors.length];

        ctx.save();
        ctx.beginPath();

        for (let x = 0; x <= width; x += 15) {
          const wave1 = Math.sin(x * 0.004 + time * 1.2 + i * 0.4) * 45;
          const wave2 = Math.cos(x * 0.008 - time * 0.9 + i * 0.3) * 25;
          const wave3 = Math.sin((x + baseY) * 0.002 + time * 0.5) * 35;

          const dx = mouse.x - x;
          const dy = mouse.y - baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let cursorOffset = 0;
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            cursorOffset = Math.sin(dist * 0.05 - time * 4) * force * 40;
          }

          const y = baseY + wave1 + wave2 + wave3 + cursorOffset;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.6;
        ctx.shadowBlur = 12;
        ctx.shadowColor = color.replace("0.35)", "0.8)");
        ctx.stroke();
        ctx.restore();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawUVAurora();
      drawTopographicWaves();

      // Render Burst Particles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const bp = burstParticles[i];
        bp.x += bp.vx;
        bp.y += bp.vy;
        bp.vx *= 0.96;
        bp.vy *= 0.96;
        bp.alpha -= bp.decay;

        if (bp.alpha <= 0) {
          burstParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(bp.x, bp.y, bp.size, 0, Math.PI * 2);
        ctx.fillStyle = bp.color;
        ctx.globalAlpha = bp.alpha;
        ctx.shadowBlur = 20;
        ctx.shadowColor = bp.color;
        ctx.fill();
        ctx.restore();
      }

      // Render Ambient Bio Spores & Connecting Neon Fibers
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.angle += 0.02;
        p.x += p.vx + Math.sin(p.angle) * 0.5;
        p.y += p.vy + Math.cos(p.angle) * 0.5;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 3;
          p.y -= (dy / dist) * force * 3;
          p.alpha = Math.min(1, p.baseAlpha + force * 0.6);
        } else {
          p.alpha = p.baseAlpha;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color + "0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ndx = p.x - p2.x;
          const ndy = p.y - p2.y;
          const ndist = Math.sqrt(ndx * ndx + ndy * ndy);
          if (ndist < 130) {
            const lineAlpha = (1 - ndist / 130) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color + lineAlpha + ")";
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-2]"
    />
  );
}
