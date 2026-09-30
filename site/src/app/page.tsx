import { Hammer, Scissors, Shirt } from "lucide-react";
import { Collection } from "@/components/collection";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { Photo } from "@/components/photo";
import { ProductDetail } from "@/components/product-detail";
import { Reveal } from "@/components/reveal";
import { ScrollWords } from "@/components/scroll-words";
import { Testimonials } from "@/components/testimonials";

const perks = [
  { icon: Shirt, text: "Denim y básicos con diseño propio" },
  { icon: Scissors, text: "Reconstrucción, tie dye y parches" },
  { icon: Hammer, text: "Pieza única, firmada y tuya" },
];

const gallery = [
  { src: "/images/look-8.jpg", pos: "50% 40%", alt: "Retrato en blanco y negro con camiseta oversize" },
  { src: "/images/look-3.jpg", pos: "62% 40%", alt: "Puffer amarillo frente a una ventana roja" },
  { src: "/images/look-6.jpg", pos: "50% 30%", alt: "Camiseta oversize con estampado y cargo negro" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[1240px] overflow-hidden rounded-2xl bg-background shadow-2xl shadow-black/30">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Collection />

        {/* MANIFIESTO */}
        <section id="manifiesto" className="px-5 py-24 md:px-14 md:py-40">
          <ScrollWords
            text="No vendemos ropa. Vendemos actitud. Cada prenda cuenta una historia y la tuya la escribes tú. No sigas tendencias. Impón las tuyas."
            hot={["actitud", "tuya", "Impón"]}
          />
        </section>

        <ProductDetail />
        <Testimonials />

        {/* TALLER */}
        <section
          id="taller"
          className="grid items-center gap-10 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-14 md:py-24"
        >
          <Photo
            src="/images/look-4.jpg"
            alt="Espalda de un bomber con parche bordado y gorro amarillo"
            sizes="(min-width: 768px) 45vw, 100vw"
            position="50% 78%"
            className="aspect-square rounded-xl bg-[#dcdce0]"
          />
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl">
              No solo hacemos ropa. La transformamos
            </h2>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground">
              H-XTREME mezcla moda urbana con procesos creativos sobre la tela. Traes una prenda o
              eliges una nuestra, y sale una pieza que nadie más tiene.
            </p>
            <ul className="mt-6 space-y-4">
              {perks.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-sm font-semibold">
                  <p.icon className="size-5" aria-hidden />
                  {p.text}
                </li>
              ))}
            </ul>
            {/* TODO: reemplazar con el número real de WhatsApp de H-XTREME */}
            <a
              href="https://wa.me/57XXXXXXXXXX"
              className="btn-press mt-8 inline-flex h-12 items-center bg-black px-8 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary"
            >
              Quiero la mía
            </a>
          </Reveal>
        </section>

        {/* GALERÍA */}
        <section className="px-5 pb-16 pt-8 md:px-14 md:pb-24">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <h2 className="font-display text-2xl md:text-4xl">
                Queremos ver
                <br />
                tu estilo
              </h2>
              <p className="max-w-[14rem] text-xs leading-snug text-muted-foreground">
                Etiquétanos y haz que te recuerden. Cada prenda cuenta una historia.
              </p>
            </div>
          </Reveal>
          <ul className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
            {gallery.map((g, i) => (
              <li key={g.src}>
                <div className="group">
                  <Photo
                    src={g.src}
                    alt={g.alt}
                    sizes="(min-width: 768px) 380px, 33vw"
                    position={g.pos}
                    delay={i * 0.1}
                    className="aspect-[3/4] rounded-lg bg-[#dcdce0]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-black/10 px-5 py-10 md:px-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl">
            H<span className="text-primary">-</span>XTREME
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 H-XTREME. Hecho en Colombia. Fotos: Unsplash.
          </p>
        </div>
      </footer>
    </div>
  );
}
