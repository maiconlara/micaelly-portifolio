import Image from "next/image";
import fadaframe from "@/assets/fadaframe.png";

export const About = () => {
  return (
    <div
      id="about"
      className="overflow-hidden min-h-screen w-full flex py-18 flex-col items-center justify-start bg-white gap-18 "
    >
      <div className="flex flex-col gap-18 w-full h-full max-w-[1920px] items-center justify-center">
        <div className="flex flex-col w-full items-center justify-center gap-5 max-w-[86vw]">
          <div className="flex flex-row w-full items-center justify-center gap-2">
            <p className="text-green-primary text-2xl uppercase  font-light font-clean cursor-default">
              Sobre Mim
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:justify-between w-full max-w-[86vw] xl:items-start items-center justify-center xl:h-[632px] gap-18 xl:gap-0">
          <div className="flex flex-col items-center justify-center xl:items-start xl:justify-start gap-20">
            <div>
              <div className="flex flex-col items-center w-full gap-8 select-none">
                <div className="flex flex-col w-full gap-0 items-center justify-center">
                  <p className="text-green-secondary text-6xl lg:text-7xl font-light uppercase font-name select-none text-center">
                    Micaelly da Rosa
                  </p>
                </div>
                <p className="hidden md:flex text-green-primary text-7xl lg:text-8xl font-normal font-title select-none text-start -mt-16">
                  Portifólio Profissional
                </p>
                <p className="flex md:hidden text-green-primary text-7xl lg:text-8xl font-normal font-title select-none text-start -mt-16">
                  Portifólio
                </p>
              </div>
            </div>

            <p className="font-text text-lg lg:max-w-[80%] text-justify text-green-primary leading-relaxed cursor-default">
              Atualmente sou estudande de Análise e Desenvolvimento de Sistemas,
              mas atuo na área de fotografia desde que estava no 8º ano do
              fundamental, onde me interessei por essa arte incrível de capturar
              momentos e contar histórias através das lentes.
            </p>
          </div>

          <Image
            height={843}
            width={959}
            alt="Frame de Fotos"
            src={fadaframe}
            priority
            quality={100}
            className="rounded-xl w-full h-auto object-cover max-w-[720px] select-none  pointer-events-none"
          />
        </div>

        {/* <Link
              target="_blank"
              href="https://www.linkedin.com/in/maiconlara/"
            >
              <InteractiveHoverButton>Acessar LinkedIn</InteractiveHoverButton>
            </Link> */}
      </div>
    </div>
  );
};
