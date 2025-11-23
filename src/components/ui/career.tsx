import { RiLineChartLine } from "@remixicon/react";
import { CareerCard } from "./career-card";
import { CareerItem } from "@/types/career";
import { ReactIcon } from "@/assets/react-icon";
import { NextIcon } from "@/assets/next-icon";
import { TypeScriptIcon } from "@/assets/typescript-icon";
import { TailwindIcon } from "@/assets/tailwind-icon";
import { JavaScriptIcon } from "@/assets/javascript-icon";
import { PrismicIcon } from "@/assets/prismic-icon";
import { ShadcnIcon } from "@/assets/shadcn-icon";
import { VueIcon } from "@/assets/vue-icon";
import { RiCodeSSlashLine } from "@remixicon/react";
import { FigmaIcon } from "@/assets/figma-icon";
import { GitIcon } from "@/assets/git-icon";
import { GitHubIcon } from "@/assets/github-icon";
import { PleskIcon } from "@/assets/plesk-icon";
import { ViteIcon } from "@/assets/vite-icon";
import { CypressIcon } from "@/assets/cypress-icon";
import { ChakraIcon } from "@/assets/chakra-icon";
import { LaravelIcon } from "@/assets/laravel-icon";
import { PhpIcon } from "@/assets/php-icon";
import { MySQLIcon } from "@/assets/mysql-icon";

export const Career = () => {
  const CareerData: CareerItem[] = [
    {
      title: "Desevolvedor Frontend Pleno",
      icon: (
        <RiCodeSSlashLine
          size={30}
          className="text-purple-light min-w-[30px] min-h-[30px]"
        />
      ),
      company: "BeLogic",
      date: "Mar 2025 - Presente",
      description: [
        "Levantamento de requisitos para o escopo dos projetos.",
        "Estimativa de esforço e orçamento para novas tarefas da equipe.",
        "Construção da parte frontend dos sistemas em Next.js, TypeScript e React.js.",
      ],
      technologies: [
        { name: "React", icon: <ReactIcon size={32} /> },
        { name: "Next.js", icon: <NextIcon size={30} /> },
        { name: "TypeScript", icon: <TypeScriptIcon size={28} /> },
        { name: "Tailwind", icon: <TailwindIcon size={30} /> },
        { name: "Shadcn UI", icon: <ShadcnIcon size={30} /> },
        { name: "Prismic", icon: <PrismicIcon size={28} /> },
        { name: "JavaScript", icon: <JavaScriptIcon size={28} /> },
        { name: "Figma", icon: <FigmaIcon size={30} /> },
        { name: "Plesk", icon: <PleskIcon size={40} /> },
        { name: "Git", icon: <GitIcon size={30} /> },
        { name: "GitHub", icon: <GitHubIcon size={30} /> },
        { name: "Vue.js", icon: <VueIcon size={30} /> },
      ],
    },
    {
      title: "Desevolvedor Frontend Junior",
      icon: (
        <RiCodeSSlashLine
          size={30}
          className="text-purple-light min-w-[30px] min-h-[30px]"
        />
      ),
      company: "BeLogic",
      date: "Jun 2024 - Mar 2025",
      description: [
        "Construção da parte frontend dos sistemas em Next.js, TypeScript e React.js.",
        "Desenvolvimento de CMS personalizado ao cliente.",
        "Desenvolvimentos de aplicações com foco em mobile, funcionais em outros dispositivos.",
      ],
      technologies: [
        { name: "React", icon: <ReactIcon size={32} /> },
        { name: "Next.js", icon: <NextIcon size={30} /> },
        { name: "TypeScript", icon: <TypeScriptIcon size={28} /> },
        { name: "Tailwind", icon: <TailwindIcon size={30} /> },
        { name: "Shadcn UI", icon: <ShadcnIcon size={30} /> },
        { name: "Prismic", icon: <PrismicIcon size={28} /> },
      ],
    },
    {
      title: "Coordenador de TI",
      icon: (
        <RiCodeSSlashLine
          size={30}
          className="text-purple-light min-w-[30px] min-h-[30px]"
        />
      ),
      company: "Adam Robo",
      date: "Mar 2024 - Jun 2024",
      description: [
        "Elaboração da arquitetura do Frontend e tambem o CI/CD com o Github Actions.",
        "Gerenciamento dos projetos cobrindo todo o escopo de requisitos, como diagramas, prototipação, decisão das tecnologias a serem utilizadas.",
        "Treinamento de novos membros para utilizarem React com TypeScript.",
      ],
      technologies: [
        { name: "React", icon: <ReactIcon size={32} /> },
        { name: "TypeScript", icon: <TypeScriptIcon size={28} /> },
        { name: "Chakra Ui", icon: <ChakraIcon size={34} /> },
        { name: "Figma", icon: <FigmaIcon size={30} /> },
        { name: "Vite", icon: <ViteIcon size={28} /> },
        { name: "Cypress", icon: <CypressIcon size={28} /> },
        { name: "Laravel", icon: <LaravelIcon size={28} /> },
        { name: "PHP 8", icon: <PhpIcon size={32} /> },
        { name: "MySQL", icon: <MySQLIcon size={30} /> },
      ],
    },
    {
      title: "Desevolvedor Frontend Junior",
      icon: (
        <RiCodeSSlashLine
          size={30}
          className="text-purple-light min-w-[30px] min-h-[30px]"
        />
      ),
      company: "Adam Robo",
      date: "Jun 2023 - Mar 2024",
      description: [
        "Desenvolvimento de aplicações web usando React e TypeScript.",
        "Prototipação e design no Figma e soluções tecnológicas em geral.",
        "Testes end-to-end utilizando Cypress.",
      ],
      technologies: [
        { name: "React", icon: <ReactIcon size={32} /> },
        { name: "TypeScript", icon: <TypeScriptIcon size={28} /> },
        { name: "Chakra Ui", icon: <ChakraIcon size={34} /> },
        { name: "Figma", icon: <FigmaIcon size={30} /> },
        { name: "Vite", icon: <ViteIcon size={28} /> },
        { name: "Cypress", icon: <CypressIcon size={28} /> },
      ],
    },
  ];

  return (
    <div
      id="career"
      className="relative overflow-hidden min-h-[calc(100vh-72px)] w-full flex pb-18 flex-col items-center justify-start bg-black gap-18"
    >
      <div className="flex flex-col w-full items-center justify-center gap-5 max-w-[86vw]">
        <div className="flex flex-row w-full items-center justify-center gap-2">
          <RiLineChartLine size={18} className="text-white" />
          <p className="text-white text-lg font-medium font-text cursor-default">
            Carreira
          </p>
        </div>
        <p className="text-white text-center text-4xl font-semibold font-title cursor-default">
          Experiência profissional
        </p>
      </div>

      <div className="flex flex-col w-full max-w-[86vw] 2xl:max-w-[1080px] items-center justify-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 place-items-center">
          {CareerData.map((careerItem, index) => (
            <CareerCard key={index} careerItem={careerItem} />
          ))}
        </div>
      </div>
    </div>
    
  );
};
