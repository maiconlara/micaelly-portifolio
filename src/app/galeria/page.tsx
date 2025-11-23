import { FullGallery } from "@/components/ui/full-gallery";
import { SmallHero } from "@/components/ui/small-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micaelly da Rosa | Galeria Completa",
  description: "Minha galeria completa",
};


export default function Galeria() {



  return (
    <div className="flex flex-col h-full w-full bg-background">
      <main className="flex flex-col ">
        <SmallHero />
        <FullGallery />
      </main>
    </div>
  );
}
