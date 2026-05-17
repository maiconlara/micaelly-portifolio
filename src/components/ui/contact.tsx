"use client";

import Link from "next/link";
import {
  RiArrowRightLine,
  RiMailFill,
  RiWhatsappFill,
} from "@remixicon/react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

type ContactCard = {
  icon: typeof RiWhatsappFill;
  label: string;
  description: string;
  value: string;
  href: string;
  external?: boolean;
};

const CONTACTS: ContactCard[] = [
  {
    icon: RiWhatsappFill,
    label: "WhatsApp",
    description: "Conversa rápida e direta",
    value: "+55 (51) 98037-0678",
    href: "https://wa.me/5551980370678",
    external: true,
  },
  {
    icon: RiMailFill,
    label: "Email",
    description: "Para orçamentos e parcerias",
    value: "micaellyfotoarte@gmail.com",
    href: "mailto:micaellyfotoarte@gmail.com",
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contato"
      className="relative overflow-hidden w-full flex py-24 md:py-32 flex-col items-center justify-start bg-green-primary gap-12 md:gap-16"
    >
      <div className="flex flex-col gap-12 md:gap-16 w-full max-w-[1920px] items-center justify-start">
        <Reveal>
          <div className="flex flex-col items-center gap-6">
            <SectionHeader label="Contato" tone="white" />
            <p className="text-white/90 font-text text-sm md:text-base text-center max-w-[640px] leading-relaxed px-6">
              Vamos transformar seus momentos em memórias eternas. Escolha o
              canal de sua preferência — respondo o mais breve possível.
            </p>
          </div>
        </Reveal>

        <div className="grid w-full max-w-[86vw] gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:max-w-[920px] auto-rows-fr">
          {CONTACTS.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.label} delay={i * 0.1} className="h-full">
                <Link
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  aria-label={`${card.label}: ${card.value}`}
                  className="group relative flex flex-col gap-6 h-full rounded-2xl bg-white p-6 md:p-8 border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center size-12 rounded-full bg-green-primary/10 text-green-primary transition-colors duration-300 group-hover:bg-green-primary group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-clean font-light text-green-primary">
                      {card.label}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <p className="font-text text-sm md:text-base text-gray-500">
                      {card.description}
                    </p>
                    <p className="font-text text-base md:text-lg font-medium text-green-primary break-all transition-colors duration-300 group-hover:text-[#3e6133]">
                      {card.value}
                    </p>
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] md:text-xs uppercase tracking-[0.3em] font-clean font-light text-green-primary">
                    Entrar em contato
                    <RiArrowRightLine
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
