import Link from "next/link";
import whatsapp from "@/assets/whatsapp.png";
import Image from "next/image";

export const WhatsappFloating = () => {
  return (
    <Link
      href="https://wa.me/5551980370678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full"
    >
      <Image
        src={whatsapp}
        alt="WhatsApp"
        width={640}
        height={640}
        className="size-16 hover:opacity-80 md:size-20  transition-opacity"
      />
    </Link>
  );
};
