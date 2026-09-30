"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const skip = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(skip);
    }
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const total = 1300;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / total, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-black p-6 text-white md:p-10"
          exit={{ transform: "translateY(-100%)" }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
        >
          <p className="font-display text-xl">
            H<span className="text-primary">-</span>XTREME
          </p>
          <div className="flex items-end justify-between">
            <p className="max-w-[12rem] text-xs uppercase tracking-widest text-white/60">
              Esto no es ropa común.
              <br />
              Esto es identidad.
            </p>
            <p className="font-display text-[26vw] leading-none tabular-nums md:text-[16vw]">
              {count}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
