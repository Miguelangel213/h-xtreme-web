"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/** Ring that trails the pointer and grows over links and buttons. Fine pointers only. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [big, setBig] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const transform = useMotionTemplate`translate3d(${sx}px, ${sy}px, 0)`;

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const enable = setTimeout(() => setEnabled(true), 0);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setBig(!!(e.target as HTMLElement | null)?.closest("a, button"));
    };
    window.addEventListener("pointermove", move);
    return () => {
      clearTimeout(enable);
      window.removeEventListener("pointermove", move);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{ transform }}
      className="pointer-events-none fixed left-0 top-0 z-[90] -ml-3 -mt-3 mix-blend-difference"
    >
      <div
        className="size-6 rounded-full bg-white transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ transform: big ? "scale(2.6)" : "scale(0.5)" }}
      />
    </motion.div>
  );
}
