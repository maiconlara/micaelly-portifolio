"use client";

import GalleryItem from "@/components/ui/gallery-item";
import { PhotoProvider } from "react-photo-view";
import aniversario1 from "@/assets/aniversario1.png";
import aniversario2 from "@/assets/aniversario2.png";
import cosplay from "@/assets/cosplay.png";
import gestante from "@/assets/gestante.png";

import "react-photo-view/dist/react-photo-view.css";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

const items = [
  { src: aniversario1, category: "Aniversário" },
  { src: aniversario2, category: "Aniversário" },
  { src: gestante, category: "Gestante" },
  { src: cosplay, category: "Cosplay" },
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      aria-label="Trabalhos"
      className="overflow-hidden min-h-screen w-full flex pt-8 pb-24 md:pb-32 flex-col items-center justify-start bg-white gap-16 md:gap-20"
    >
      <div className="flex flex-col gap-16 md:gap-20 w-full h-full max-w-[1920px] items-center justify-center">
        <Reveal>
          <SectionHeader label="Trabalhos" />
        </Reveal>

        <PhotoProvider bannerVisible={true} maskOpacity={1}>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-[86vw] w-full">
            {items.map((item, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="break-inside-avoid"
              >
                <GalleryItem src={item.src} category={item.category} />
              </Reveal>
            ))}
          </div>
        </PhotoProvider>

        <Reveal delay={0.1}>
          <Link href="/galeria" prefetch>
            <InteractiveHoverButton>Galeria Completa</InteractiveHoverButton>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
