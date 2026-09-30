import { X } from "lucide-react";

const words = ["Rompe las reglas", "Denim premium", "Pieza única", "Haz que te recuerden", "Tie dye", "Sin límites"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div aria-hidden className="overflow-hidden bg-black py-4 text-white">
      <div className="marquee-track flex gap-10">
        {[...row, ...row].map((w, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-10 whitespace-nowrap text-2xl md:text-4xl"
          >
            {w}
            <X className="size-6 text-primary md:size-8" strokeWidth={3} />
          </span>
        ))}
      </div>
    </div>
  );
}
