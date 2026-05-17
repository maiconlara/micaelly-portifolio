"use client";

import { motion } from "motion/react";

export const SmallHero = () => {
  return (
    <section
      aria-label="Apresentação"
      className="relative overflow-hidden pt-32 pb-20 w-full flex items-center justify-center bg-transparent"
    >
      <div className="flex flex-col lg:flex-row w-full h-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full gap-6 select-none"
        >
          <div className="flex flex-col w-full gap-0 items-center justify-center">
            <p className="text-green-secondary text-6xl lg:text-9xl font-light uppercase font-name select-none text-center leading-[1.05]">
              Micaelly
            </p>
            <p className="text-green-secondary text-6xl lg:text-9xl font-light uppercase font-name select-none text-center leading-[1.05]">
              da Rosa
            </p>
          </div>
          <p className="text-white text-8xl lg:text-[10rem] font-normal font-title select-none text-start -mt-18 lg:-mt-28">
            Portifólio
          </p>
        </motion.div>
      </div>
    </section>
  );
};
