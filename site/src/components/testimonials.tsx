"use client";

import { useState } from "react";
import { ArrowButtons } from "./arrow-buttons";
import { Photo } from "./photo";

const reviews = [
  {
    quote:
      "Me llegó la chaqueta rebuild y en la calle me preguntan dónde la compré. Nadie tiene una igual. El diseño es tremendo y se siente pesada, de las buenas.",
    who: "Sebastián R., Bogotá",
    src: "/images/look-2.jpg",
    pos: "50% 55%",
  },
  {
    quote:
      "Les llevé un jean viejo y me lo devolvieron irreconocible. Eso era justo lo que buscaba. La atención fue rápida y el resultado, mejor de lo que imaginé.",
    who: "Valentina M., Medellín",
    src: "/images/look-9.jpg",
    pos: "60% 40%",
  },
  {
    quote:
      "El hoodie pesa, cae bien y el rojo no se destiñe. Ya voy por el tercero y ya le estoy pidiendo a mis amigos que se sumen.",
    who: "Andrés C., Cali",
    src: "/images/look-5.jpg",
    pos: "50% 45%",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const go = (d: number) => setI((v) => (v + d + reviews.length) % reviews.length);

  return (
    <section id="comunidad" className="px-5 py-16 md:px-14 md:py-24">
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-24">
          <p className="max-w-[10rem] text-xs leading-snug text-muted-foreground">
            Lo que dice la gente que ya lleva H-XTREME puesto.
          </p>
          <h2 className="font-display text-3xl md:text-5xl">
            Mira lo que
            <br />
            dicen de nosotros
          </h2>
        </div>
        <div className="hidden md:block">
          <ArrowButtons onPrev={() => go(-1)} onNext={() => go(1)} />
        </div>
      </div>

      <div className="mt-12 grid items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <Photo
          key={r.src}
          src={r.src}
          alt={`Foto de ${r.who}`}
          sizes="(min-width: 768px) 50vw, 100vw"
          position={r.pos}
          className="aspect-[3/2] rounded-xl bg-[#dcdce0]"
        />
        <figure key={i} aria-live="polite">
          <p className="font-display text-5xl leading-none text-primary" aria-hidden>
            “
          </p>
          <blockquote className="mt-3 max-w-sm text-sm leading-relaxed">{r.quote}</blockquote>
          <figcaption className="font-display mt-8 text-xs">{r.who}</figcaption>
        </figure>
      </div>

      <div className="mt-8 md:hidden">
        <ArrowButtons onPrev={() => go(-1)} onNext={() => go(1)} />
      </div>
    </section>
  );
}
