"use client";

import Image from "next/image";
import heart from "@/assets/heartWhite.png";

const AnimateIcon = () => {
  return (
    <div className="animate-bounce-custom bg-transparent">
      <Image
        width={500}
        height={500}
        src={heart}
        className="h-auto w-60"
        alt="Coração"
      />
    </div>
  );
};

export default AnimateIcon;
