"use client";

import aniversario from "@/assets/galeria/aniversario.webp";
import aniversario2 from "@/assets/galeria/aniversario2.webp";
import aniversario3 from "@/assets/galeria/aniversario3.webp";
import aniversario4 from "@/assets/galeria/aniversario4.webp";
import aniversario5 from "@/assets/galeria/aniversario5.webp";
import aniversario6 from "@/assets/galeria/aniversario6.webp";
import aniversario7 from "@/assets/galeria/aniversario7.webp";

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
import show3 from "@/assets/galeria/show3.webp";
import show4 from "@/assets/galeria/show4.webp";

import produto from "@/assets/galeria/produto.png";
import produto2 from "@/assets/galeria/produto2.webp";

import GalleryItem from "@/components/ui/gallery-item";
import { PhotoProvider } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import { useEffect } from "react";

export const FullGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { src: aniversario, category: "Aniversário" },
    { src: ensaio3, category: "Ensaio" },
    { src: casamento5, category: "Casamento" },

    { src: aniversario4, category: "Aniversário" },
    { src: ensaio4, category: "Ensaio" },

    { src: casamento, category: "Casamento" },
    { src: aniversario2, category: "Aniversário" },
    { src: cenario, category: "Cenário" },

    { src: casamento3, category: "Casamento" },
    { src: produto2, category: "Produto" },

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

    // Externo
    { src: externo, category: "Externo" },

    // Gestante
    { src: aniversario5, category: "Aniversário" },
    { src: gestante2, category: "Gestante" },
    { src: aniversario6, category: "Aniversário" },
    { src: gestante3, category: "Gestante" },

    // Show
    { src: show, category: "Show" },
    { src: show2, category: "Show" },
    { src: show3, category: "Show" },
    { src: show4, category: "Show" },

    // Produto
    { src: produto, category: "Produto" },
  ];

  return (
    <div
      id="gallery"
      className="overflow-hidden min-h-screen w-full flex py-18 flex-col items-center justify-start bg-white gap-18 "
    >
      <div className="flex flex-col gap-18 w-full h-full max-w-[1920px] items-center justify-center">
        <PhotoProvider bannerVisible={true} maskOpacity={1}>
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-10 max-w-[86vw] w-full">
            {items.map((item, i) => (
              <GalleryItem
                key={i}
                src={item.src.src}
                category={item.category}
                textColor="text-gray-600"
              />
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};
