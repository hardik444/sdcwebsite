"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${x}px`;
        spotlightRef.current.style.top = `${y}px`;
      }

      // 3D Perspective Tilt on .holo-card
      const holoCards = document.querySelectorAll<HTMLElement>(".holo-card");
      holoCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (e.clientY - cardY) / 20;
        const angleY = (cardX - e.clientX) / 20;

        const inner = card.querySelector<HTMLElement>(".holo-inner");
        if (inner && card.matches(":hover")) {
          inner.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        } else if (inner) {
          inner.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 bg-[#39FF14] rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#39FF14] transition-[width,height,background-color] duration-200"
      />
      <div
        ref={spotlightRef}
        className="fixed w-[180px] h-[180px] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 69, 0, 0.28) 0%, rgba(255, 0, 127, 0.2) 40%, rgba(0, 240, 255, 0.12) 70%, transparent 85%)",
        }}
      />
    </>
  );
}
