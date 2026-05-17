import Link from "next/link";
import whatsapp from "@/assets/whatsapp.png";
import Image from "next/image";

export const WhatsappFloating = () => {
  return (
    <Link
      href="https://wa.me/5551980370678"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 rounded-full shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/20 active:scale-95"
    >
      <Image
        src={whatsapp}
        alt=""
        width={80}
        height={80}
        sizes="80px"
        className="size-14 md:size-16"
      />
    </Link>
  );
};
