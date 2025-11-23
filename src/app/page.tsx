import { About } from "@/components/ui/about";
import { Contact } from "@/components/ui/contact";
import { Gallery } from "@/components/ui/gallery";
import { Hero } from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <main className="flex flex-col ">
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
