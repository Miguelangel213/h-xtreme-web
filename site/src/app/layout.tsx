import type { Metadata } from "next";
import { Archivo, Unbounded } from "next/font/google";
import { Cursor } from "@/components/cursor";
import { Preloader } from "@/components/preloader";
import "./globals.css";

const display = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const body = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "H-XTREME | Streetwear colombiano. Esto es identidad.",
  description:
    "Denim premium, hoodies, cargos y prendas customizadas. H-XTREME transforma la ropa en piezas únicas. No sigas tendencias. Impón las tuyas.",
  openGraph: {
    title: "H-XTREME | Streetwear colombiano",
    description: "Esto no es ropa común. Esto es identidad.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="stage min-h-screen p-3 text-foreground sm:p-5 md:p-8">
        <Preloader />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
