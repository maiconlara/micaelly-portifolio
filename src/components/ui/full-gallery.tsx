"use client";

import aniversario from "@/assets/galeria/aniversario.webp";
import aniversario2 from "@/assets/galeria/aniversario2.webp";
import aniversario3 from "@/assets/galeria/aniversario3.webp";
import aniversario4 from "@/assets/galeria/aniversario4.webp";
import aniversario5 from "@/assets/galeria/aniversario5.webp";
import aniversario6 from "@/assets/galeria/aniversario6.webp";

import casamento from "@/assets/galeria/casamento.webp";
import casamento2 from "@/assets/galeria/casamento2.webp";
import casamento3 from "@/assets/galeria/casamento3.webp";
import casamento4 from "@/assets/galeria/casamento4.webp";
import casamento5 from "@/assets/galeria/casamento5.webp";
import casamento6 from "@/assets/galeria/casamento6.webp";

import cenario from "@/assets/galeria/cenario.png";

import cosplay from "@/assets/galeria/cosplay.webp";
import cosplay2 from "@/assets/galeria/cosplay2.webp";
import cosplay3 from "@/assets/galeria/cosplay3.webp";
import cosplay4 from "@/assets/galeria/cosplay4.webp";
import cosplay5 from "@/assets/galeria/cosplay5.webp";
import cosplay6 from "@/assets/galeria/cosplay6.webp";

import encontro from "@/assets/galeria/encontro.png";
import encontro2 from "@/assets/galeria/encontro2.webp";

import ensaio from "@/assets/galeria/ensaio.webp";
import ensaio2 from "@/assets/galeria/ensaio2.webp";
import ensaio3 from "@/assets/galeria/ensaio3.webp";
import ensaio4 from "@/assets/galeria/ensaio4.webp";
import ensaio5 from "@/assets/galeria/ensaio5.webp";

import externo from "@/assets/galeria/externo.png";

import gestante2 from "@/assets/galeria/gestante2.png";
import gestante3 from "@/assets/galeria/gestante3.png";

import show from "@/assets/galeria/show.webp";
import show2 from "@/assets/galeria/show2.webp";

import GalleryItem from "@/components/ui/gallery-item";
import { PhotoProvider } from "react-photo-view";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

import "react-photo-view/dist/react-photo-view.css";

import type { StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";

type Item = { src: StaticImageData; category: string };

const ALL_ITEMS: Item[] = [
  { src: aniversario, category: "Aniversário" },
  { src: ensaio3, category: "Ensaio" },
  { src: casamento5, category: "Casamento" },
  { src: aniversario4, category: "Aniversário" },
  { src: ensaio4, category: "Ensaio" },
  { src: casamento, category: "Casamento" },
  { src: aniversario2, category: "Aniversário" },
  { src: cenario, category: "Cenário" },
  { src: casamento3, category: "Casamento" },
  { src: cosplay3, category: "Cosplay" },
  { src: casamento4, category: "Casamento" },
  { src: cosplay4, category: "Cosplay" },
  { src: casamento6, category: "Casamento" },
  { src: casamento2, category: "Casamento" },
  { src: cosplay, category: "Cosplay" },
  { src: cosplay2, category: "Cosplay" },
  { src: cosplay5, category: "Cosplay" },
  { src: cosplay6, category: "Cosplay" },
  { src: encontro, category: "Encontro" },
  { src: encontro2, category: "Encontro" },
  { src: ensaio, category: "Ensaio" },
  { src: aniversario3, category: "Aniversário" },
  { src: ensaio2, category: "Ensaio" },
  { src: ensaio5, category: "Ensaio" },
  { src: externo, category: "Externo" },
  { src: aniversario5, category: "Aniversário" },
  { src: gestante2, category: "Gestante" },
  { src: aniversario6, category: "Aniversário" },
  { src: gestante3, category: "Gestante" },
  { src: show, category: "Show" },
  { src: show2, category: "Show" },
];

const CATEGORY_ORDER = [
  "Todos",
  "Aniversário",
  "Casamento",
  "Cosplay",
  "Ensaio",
  "Encontro",
  "Gestante",
  "Show",
  "Cenário",
  "Externo",
];

export const FullGallery = () => {
  const [active, setActive] = useState<string>("Todos");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(() => {
    const present = new Set(ALL_ITEMS.map((i) => i.category));
    return CATEGORY_ORDER.filter((c) => c === "Todos" || present.has(c));
  }, []);

  const visible = useMemo(
    () =>
      active === "Todos"
        ? ALL_ITEMS
        : ALL_ITEMS.filter((i) => i.category === active),
    [active]
  );

  return (
    <section
      id="gallery"
      aria-label="Galeria completa"
      className="overflow-hidden min-h-screen w-full flex py-16 md:py-24 flex-col items-center justify-start bg-white gap-12 md:gap-16"
    >
      <div className="flex flex-col gap-12 md:gap-16 w-full h-full max-w-[1920px] items-center justify-center">
        <Reveal>
          <SectionHeader label="Galeria Completa" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-[86vw]">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.25em] font-clean font-light transition-all duration-300 ${
                    isActive
                      ? "bg-green-primary text-white border border-green-primary"
                      : "bg-white text-green-primary border border-green-primary/40 hover:border-green-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        <PhotoProvider bannerVisible={true} maskOpacity={1}>
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 max-w-[86vw] w-full">
            {visible.map((item, i) => (
              <GalleryItem
                key={`${item.category}-${i}`}
                src={item.src}
                category={item.category}
                textColor="text-gray-600"
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};
