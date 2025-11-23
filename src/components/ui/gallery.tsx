"use client";
import GalleryItem from "@/components/ui/gallery-item";
import { PhotoProvider } from "react-photo-view";
import aniversario1 from "@/assets/aniversario1.png";
import aniversario2 from "@/assets/aniversario2.png";
import cenario from "@/assets/cenario.png";
import cosplay from "@/assets/cosplay.png";
import encontro from "@/assets/encontro.png";
import externo from "@/assets/externo.png";
import gestante from "@/assets/gestante.png";
import gestante2 from "@/assets/gestante2.png";
import gestante3 from "@/assets/gestante3.png";
import produto from "@/assets/produto.png";

import "react-photo-view/dist/react-photo-view.css";

export const Gallery = () => {
  const items = [
    {
      src: aniversario1,
      category: "Aniversário",
    },
    {
      src: aniversario2,
      category: "Aniversário",
    },
    {
      src: cenario,
      category: "Cenário",
    },
    {
      src: externo,
      category: "Externo",
    },
    {
      src: encontro,
      category: "Encontro",
    },
    {
      src: gestante,
      category: "Gestante",
    },
    {
      src: gestante2,
      category: "Gestante",
    },
    {
      src: gestante3,
      category: "Gestante",
    },
    {
      src: cosplay,
      category: "Cosplay",
    },
    {
      src: produto,
      category: "Produto",
    },
  ];

  return (
    <div
      id="gallery"
      className="overflow-hidden min-h-screen w-full flex pb-18 flex-col items-center justify-start bg-white gap-18 "
    >
      <div className="flex flex-col gap-18 w-full h-full max-w-[1920px] items-center justify-center">
        <div className="flex flex-col w-full items-center justify-center gap-5 max-w-[86vw]">
          <div className="flex flex-row w-full items-center justify-center gap-2">
            <p className="text-green-primary text-2xl uppercase  font-light font-clean cursor-default">
              Galeria
            </p>
          </div>
        </div>

        <PhotoProvider bannerVisible={true} maskOpacity={1}>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 max-w-[86vw] w-full">
            {items.map((item, i) => (
              <GalleryItem
                key={i}
                src={item.src.src}
                category={item.category}
              />
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};
