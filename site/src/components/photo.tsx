"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * Photo that unrolls with a clip-path wipe while the image settles from 1.18 to 1.
 * Put it inside a `group` element to get the hover zoom.
 */
export function Photo({
  src,
  alt,
  sizes,
  className = "",
  position = "center",
  priority = false,
  delay = 0,
  reveal = true,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  position?: string;
  priority?: boolean;
  delay?: number;
  reveal?: boolean;
}) {
  const reduce = useReducedMotion();
  const animated = reveal && !reduce;

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={animated ? { clipPath: "inset(100% 0% 0% 0%)" } : false}
      whileInView={animated ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay, ease: EASE_OUT }}
    >
      <motion.div
        className="absolute inset-0"
        initial={animated ? { transform: "scale(1.18)" } : false}
        whileInView={animated ? { transform: "scale(1)" } : undefined}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.3, delay, ease: EASE_OUT }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectPosition: position }}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]"
        />
      </motion.div>
    </motion.div>
  );
}
