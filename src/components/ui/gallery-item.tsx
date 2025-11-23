import React from "react";
import { PhotoView } from "react-photo-view";

interface GalleryItemProps {
  src: string;
  category: string;
  description?: string;
  textColor?: string;
}

const GalleryItem = React.forwardRef<HTMLDivElement, GalleryItemProps>(
  ({ src, category, description, textColor }, ref) => {
    return (
      <div ref={ref} className="break-inside-avoid">
        <div className="flex flex-col gap-2 w-full">
          <PhotoView src={src}>
            <img
              src={src}
              alt={description}
              className="w-full h-auto cursor-pointer object-cover rounded"
            />
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
