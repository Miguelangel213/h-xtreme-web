"use client";

import { Bookmark, Star } from "lucide-react";
import { useState } from "react";
import { Photo } from "./photo";

const sizes = ["S", "M", "L", "XL", "XXL"];
const views = [
  { label: "Vista completa", pos: "50% 45%" },
  { label: "Detalle superior", pos: "50% 18%" },
  { label: "Detalle calzado", pos: "50% 92%" },
];

export function ProductDetail() {
  const [size, setSize] = useState("L");
  const [view, setView] = useState(0);

  return (
    <section
      id="producto"
      className="grid gap-8 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-14 md:py-24"
    >
      <div>
        <div className="aspect-[4/3] rounded-2xl bg-[#dcdce0]">
          <Photo
            src="/images/look-6.jpg"
            alt="Cargo negro oversize con camiseta estampada"
            sizes="(min-width: 768px) 55vw, 100vw"
            position={views[view].pos}
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {views.map((v, i) => (
            <button
              key={v.label}
              type="button"
              aria-label={v.label}
              aria-pressed={view === i}
              onClick={() => setView(i)}
              className={`group btn-press aspect-[4/3] overflow-hidden rounded-xl bg-[#dcdce0] outline-offset-2 transition-opacity duration-150 ${
                view === i ? "outline outline-2 outline-black" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Photo
                src="/images/look-6.jpg"
                alt=""
                sizes="200px"
                position={v.pos}
                reveal={false}
                className="h-full w-full"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="md:pt-6">
        <h2 className="font-display text-2xl md:text-3xl">Cargo Street negro</h2>
        <p className="mt-3 flex items-center gap-2 text-xs">
          <span className="font-bold">4.9</span>
          <span className="flex" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-3.5 fill-primary text-primary" />
            ))}
          </span>
          <span className="text-muted-foreground">1.3k reseñas</span>
        </p>
        <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
          Cargo holgado en drill pesado, bolsillos amplios y bota ajustable. Se entrega tal cual o
          customizado con parches, tie dye o reconstrucción.
        </p>

        <fieldset className="mt-8">
          <legend className="text-xs font-medium">Talla</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => setSize(s)}
                className={`btn-press h-10 min-w-11 rounded-full border px-4 text-xs transition-colors duration-150 ${
                  size === s ? "border-black bg-white" : "border-black/15 hover:border-black/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>

        <p className="mt-8 text-xs text-muted-foreground">Precio</p>
        <p className="font-display text-2xl">$199.000</p>

        <div className="mt-4 flex gap-2">
          {/* TODO: conectar con WhatsApp / checkout real */}
          <a
            href="https://wa.me/57XXXXXXXXXX"
            className="btn-press flex h-12 flex-1 items-center justify-center bg-black text-xs font-bold uppercase tracking-widest text-white hover:bg-primary"
          >
            Agregar al carrito
          </a>
          <button
            type="button"
            aria-label="Guardar en favoritos"
            className="btn-press flex size-12 items-center justify-center border border-black/20 hover:border-black"
          >
            <Bookmark className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
