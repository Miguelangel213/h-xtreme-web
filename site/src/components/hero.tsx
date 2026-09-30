"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Star } from "lucide-react";
import { useRef } from "react";
import { Photo } from "./photo";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
/** Wait for the preloader curtain before the hero starts moving. */
const START = 1.9;

const rise = (delay: number) => ({
  initial: { transform: "translateY(110%)" },
  animate: { transform: "translateY(0%)" },
  transition: { duration: 0.9, delay: START + delay, ease: EASE_OUT },
});

const fade = (delay: number) => ({
  initial: { opacity: 0, transform: "translateY(16px)" },
  animate: { opacity: 1, transform: "translateY(0px)" },
  transition: { duration: 0.7, delay: START + delay, ease: EASE_OUT },
});

export function Hero() {
  const card = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: card, offset: ["start start", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["scale(1) translateY(0px)", "scale(1.12) translateY(60px)"]);

  return (
    <section id="top" className="grid gap-4 px-5 pb-16 pt-8 md:grid-cols-[1fr_auto] md:px-14">
      <div
        ref={card}
        className="relative min-h-[520px] overflow-hidden rounded-2xl bg-black md:aspect-square md:min-h-[560px]"
      >
        <motion.div className="absolute inset-0" style={{ transform: reduce ? undefined : drift }}>
          <Photo
            src="/images/look-1.jpg"
            alt="Modelo con chaqueta oversize y jean frente a una pared de afiches"
            sizes="(min-width: 768px) 60vw, 100vw"
            position="50% 22%"
            priority
            delay={START - 0.3}
            className="h-full w-full"
          />
        </motion.div>
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.25))]"
        />

        <motion.p
          {...fade(0.5)}
          className="absolute left-6 top-6 max-w-[15rem] text-xs leading-snug text-white/90 md:left-8 md:top-8"
        >
          Denim premium, hoodies y piezas customizadas. Hecho para que te vean llegar.
        </motion.p>

        <h1 className="font-display absolute inset-x-6 bottom-24 text-[clamp(2.4rem,8vw,6rem)] text-white md:inset-x-8 md:bottom-28">
          <span className="block overflow-hidden pb-1">
            <motion.span {...rise(0.1)} className="block">
              Rompe
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span {...rise(0.22)} className="block">
              las reglas
            </motion.span>
          </span>
        </h1>

        <motion.div
          {...fade(0.7)}
          className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 md:bottom-6 md:left-8 md:right-6"
        >
          <a
            href="#coleccion"
            className="btn-press hidden h-11 items-center bg-white px-6 text-xs font-bold uppercase tracking-widest text-black hover:bg-primary hover:text-white sm:inline-flex"
          >
            Ver colección
          </a>
          <div className="ml-auto flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-4 text-xs">
            <span className="flex -space-x-2" aria-hidden>
              <span className="size-7 rounded-full border-2 border-white bg-primary" />
              <span className="size-7 rounded-full border-2 border-white bg-black" />
            </span>
            <span className="flex items-center gap-1 font-bold">
              <Star className="size-3.5 fill-primary text-primary" aria-hidden /> 4.9/5
            </span>
            <span className="hidden text-muted-foreground sm:inline">Reseñas de la comunidad</span>
          </div>
        </motion.div>
      </div>

      {/* Tall red block with the vertical wordmark */}
      <motion.div
        initial={{ opacity: 0, transform: "translateY(24px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.8, delay: START, ease: EASE_OUT }}
        className="flex items-center justify-center overflow-hidden rounded-2xl bg-primary p-4 md:min-h-[560px] md:w-[220px]"
        aria-hidden
      >
        <span className="font-display text-[clamp(4rem,14vw,9rem)] leading-none text-white md:rotate-180 md:text-[9.5rem] md:[writing-mode:vertical-rl]">
          XTRM
        </span>
      </motion.div>
    </section>
  );
}
