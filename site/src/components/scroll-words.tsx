"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

function Word({
  word,
  progress,
  range,
  hot,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  hot: boolean;
}) {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity: reduce ? 1 : opacity }} className={hot ? "text-primary" : ""}>
      {word}{" "}
    </motion.span>
  );
}

/** Text that lights up word by word as you scroll through it. */
export function ScrollWords({ text, hot = [] }: { text: string; hot?: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className="font-display text-[clamp(1.6rem,4.4vw,3.6rem)]">
      {words.map((w, i) => (
        <Word
          key={i}
          word={w}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          hot={hot.includes(w.replace(/[.,]/g, ""))}
        />
      ))}
    </p>
  );
}
