"use client";

import { motion } from "motion/react";
import { RiArrowDownLine } from "@remixicon/react";

export const Hero = () => {
  return (
    <section
      aria-label="Apresentação"
      className="relative overflow-hidden min-h-screen w-full flex items-center justify-center bg-transparent"
    >
      <div className="flex flex-col lg:flex-row w-full h-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full gap-8 select-none"
        >
          <div className="flex flex-col w-full gap-0 items-center justify-center">
            <motion.p
              initial={{ letterSpacing: "0.18em", opacity: 0 }}
              animate={{ letterSpacing: "0em", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-green-secondary text-6xl lg:text-9xl font-light uppercase font-name select-none text-center leading-[1.05]"
            >
              Micaelly
            </motion.p>
            <motion.p
              initial={{ letterSpacing: "0.18em", opacity: 0 }}
              animate={{ letterSpacing: "0em", opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-green-secondary text-6xl lg:text-9xl font-light uppercase font-name select-none text-center leading-[1.05]"
            >
              da Rosa
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-8xl lg:text-[10rem] font-normal font-title select-none text-start -mt-18 lg:-mt-28"
          >
            Portifólio
          </motion.p>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-secondary hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-clean font-light">
          Explorar
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <RiArrowDownLine size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
};
