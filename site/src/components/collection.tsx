"use client";

import { useEffect, useRef } from "react";
import { ArrowButtons } from "./arrow-buttons";
import { Photo } from "./photo";

const products = [
  { name: "Jacket Rebuild", price: "$329.000", src: "/images/look-1.jpg", pos: "50% 30%" },
  { name: "Hoodie Heavy", price: "$219.000", src: "/images/look-7.jpg", pos: "50% 70%" },
  { name: "Oversize Tee", price: "$99.000", src: "/images/look-8.jpg", pos: "50% 60%" },
  { name: "Cargo Street", price: "$199.000", src: "/images/look-6.jpg", pos: "50% 50%" },
  { name: "Bomber Parches", price: "$289.000", src: "/images/look-4.jpg", pos: "50% 75%" },
  { name: "Puffer Custom", price: "Pieza única", src: "/images/look-3.jpg", pos: "62% 50%" },
];

export function Collection() {
  const track = useRef<HTMLUListElement>(null);
  const paused = useRef(false);
  const visible = useRef(false);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // Autoplay: one card at a time, loops back at the end. Pauses on hover, focus,
  // touch, when off-screen, and for people who prefer reduced motion.
  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);

    const id = setInterval(() => {
      if (paused.current || !visible.current || document.hidden) return;
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.offsetWidth + 16;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: step, behavior: "smooth" });
    }, 3200);

    return () => {
      clearInterval(id);
      io.disconnect();
    };
  }, []);

  const pause = () => (paused.current = true);
  const resume = () => (paused.current = false);

  return (
    <section id="coleccion" className="px-5 py-16 md:px-14 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-24">
          <p className="max-w-[10rem] text-xs leading-snug text-muted-foreground">
            Piezas que no siguen tendencias. Elige la tuya y hazla única.
          </p>
          <h2 className="font-display text-3xl md:text-5xl">
            Elige la prenda
            <br />
            perfecta para ti
          </h2>
        </div>
        <div className="hidden md:block">
          <ArrowButtons onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
        </div>
      </div>

      <ul
        ref={track}
        onPointerEnter={pause}
        onPointerLeave={resume}
        onFocus={pause}
        onBlur={resume}
        onTouchStart={pause}
        onTouchEnd={() => setTimeout(resume, 4000)}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
      >
        {products.map((p, i) => (
          <li key={p.name} className="w-[75%] shrink-0 snap-start sm:w-[42%] lg:w-[31.5%]">
            <a href="#producto" className="group block">
              <Photo
                src={p.src}
                alt={p.name}
                sizes="(min-width: 1024px) 380px, 75vw"
                position={p.pos}
                delay={i < 3 ? i * 0.1 : 0}
                className="aspect-[4/5] rounded-xl bg-[#dcdce0]"
              />
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.price}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 md:hidden">
        <ArrowButtons onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
      </div>
    </section>
  );
}
