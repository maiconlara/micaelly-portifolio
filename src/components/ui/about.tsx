import Image from "next/image";
import fadaframe from "@/assets/fadaframe.png";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

export const About = () => {
  return (
    <section
      id="about"
      aria-label="Sobre"
      className="overflow-hidden min-h-screen w-full flex py-24 md:py-32 flex-col items-center justify-start bg-white gap-16 md:gap-20"
    >
      <div className="flex flex-col gap-16 md:gap-24 w-full h-full max-w-[1920px] items-center justify-center">
        <Reveal>
          <SectionHeader label="Sobre Mim" />
        </Reveal>

        <div className="flex flex-col xl:flex-row xl:justify-between w-full max-w-[86vw] xl:items-center items-center justify-center gap-16 xl:gap-20">
          <div className="flex flex-col items-center justify-center xl:items-start xl:justify-start gap-10 md:gap-12 xl:max-w-[46%]">
            <Reveal>
              <div className="flex flex-col items-center xl:items-start w-full gap-6 select-none">
                <div className="flex flex-col w-full gap-0 items-center xl:items-start justify-center">
                  <p className="text-green-secondary text-6xl lg:text-7xl font-light uppercase font-name select-none text-center xl:text-start leading-[1.05]">
                    Micaelly da Rosa
                  </p>
                </div>
                <p className="hidden md:flex text-green-primary text-7xl lg:text-8xl font-normal font-title select-none text-start -mt-12">
                  Portifólio Profissional
                </p>
                <p className="flex md:hidden text-green-primary text-7xl lg:text-8xl font-normal font-title select-none text-start -mt-12">
                  Portifólio
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-text text-base md:text-lg text-justify text-green-primary leading-relaxed cursor-default">
                Atualmente sou estudante de Análise e Desenvolvimento de
                Sistemas, mas atuo na área de fotografia desde que estava no 8º
                ano do fundamental, onde me interessei por essa arte incrível
                de capturar momentos e contar histórias através das lentes.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/galeria" prefetch>
                <InteractiveHoverButton>
                  Galeria Completa
                </InteractiveHoverButton>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="w-full xl:w-auto flex justify-center">
            <div className="relative w-full max-w-[720px] aspect-[959/843]">
              <Image
                src={fadaframe}
                alt="Frame de fotografias de Micaelly da Rosa"
                placeholder="blur"
                priority
                fetchPriority="high"
                quality={85}
                sizes="(min-width: 1280px) 720px, (min-width: 640px) 80vw, 100vw"
                fill
                className="rounded-xl object-cover select-none pointer-events-none"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
