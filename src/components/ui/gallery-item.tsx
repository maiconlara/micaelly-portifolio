"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { PhotoView } from "react-photo-view";

interface GalleryItemProps {
  src: StaticImageData;
  category: string;
  description?: string;
  textColor?: string;
  sizes?: string;
  priority?: boolean;
}

const GalleryItem = React.forwardRef<HTMLDivElement, GalleryItemProps>(
  (
    {
      src,
      category,
      description,
      textColor,
      sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
      priority = false,
    },
    ref
  ) => {
    return (
      <div ref={ref} className="mb-8 break-inside-avoid">
        <div className="group flex flex-col gap-3 w-full">
          <div className="relative overflow-hidden rounded-md bg-neutral-100">
            <PhotoView src={src.src}>
              <Image
                src={src}
                alt={description ?? `Fotografia da categoria ${category}`}
                placeholder="blur"
                sizes={sizes}
                priority={priority}
                quality={80}
                className="w-full h-auto cursor-zoom-in object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </PhotoView>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex items-center gap-2 px-0.5">
            <span
              className={`h-px w-4 ${
                textColor ? "bg-current" : "bg-gray-400"
              } ${textColor ?? "text-gray-500"}`}
            />
            <p
              className={`text-[11px] tracking-[0.3em] uppercase font-clean font-light cursor-default ${
                textColor ?? "text-gray-500"
              }`}
            >
              {category}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
GalleryItem.displayName = "GalleryItem";

export default GalleryItem;
