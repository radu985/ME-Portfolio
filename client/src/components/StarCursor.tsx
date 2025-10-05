import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function StarCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.8 });
  const y = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.8 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  // Create a tiny sparkle trail
  useEffect(() => {
    const spawn = (xPos: number, yPos: number) => {
      const el = document.createElement("div");
      el.style.position = "fixed";
      el.style.left = `${xPos - 2}px`;
      el.style.top = `${yPos - 2}px`;
      el.style.width = "4px";
      el.style.height = "4px";
      el.style.pointerEvents = "none";
      el.style.borderRadius = "50%";
      el.style.background = "rgba(255, 215, 64, 0.9)";
      el.style.boxShadow = "0 0 8px rgba(255, 215, 64, 0.8)";
      el.style.zIndex = "9999";
      document.body.appendChild(el);

      const start = performance.now();
      const duration = 450;
      const animate = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        el.style.transform = `translateY(${p * -12}px) scale(${1 - p})`;
        el.style.opacity = String(1 - p);
        if (p < 1) rafRef.current = requestAnimationFrame(animate);
        else el.remove();
      };
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="fixed z-[9999] pointer-events-none"
      style={{ x, y, translateX: -10, translateY: -10 }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="m12 2 2.7 6.6 7 .6-5.3 4.5 1.7 6.8L12 17l-6.1 3.5 1.7-6.8L2.3 9.2l7-.6z" fill="#FFD54A"/>
        <path d="M12 2l2.7 6.6L12 17 9.3 8.6 12 2z" fill="#FFF3C0"/>
      </svg>
    </motion.div>
  );
}


