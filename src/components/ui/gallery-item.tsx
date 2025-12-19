import React, { useState } from "react";
import { PhotoView } from "react-photo-view";

interface GalleryItemProps {
  src: string;
  category: string;
  description?: string;
  textColor?: string;
}

const GalleryItem = React.forwardRef<HTMLDivElement, GalleryItemProps>(
  ({ src, category, description, textColor }, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div ref={ref} className="break-inside-avoid">
        <div className="flex flex-col gap-2 w-full">
          <PhotoView src={src}>
            <div className="relative w-full">
              {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded aspect-[3/4]" />
              )}
              <img
                src={src}
                alt={description}
                className={`w-full h-auto cursor-pointer object-cover rounded transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </div>
          </PhotoView>
          <p
            className={`text-xs tracking-widest uppercase font-clean  font-light mb-5 cursor-default ${
              textColor ? textColor : "text-gray-500"
            }`}
          >
            {category}
          </p>
        </div>
      </div>
    );
  }
);
GalleryItem.displayName = "GalleryItem";

export default GalleryItem;
