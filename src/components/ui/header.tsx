import Link from "next/link";

export const Header = () => {
  return (
    <header className="hidden bg-transparent md:flex flex-row h-18 w-full items-center justify-center">
      <div className=" flex flex-row h-full w-full max-w-[86vw] 2xl:max-w-[1420px] items-center justify-center px-4 ">
        <div className="flex flex-row gap-20 items-center uppercase">
          <Link
            className="text-white font-light font-clean text-lg hover:text-green-secondary transition-colors"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="text-white font-light font-clean text-lg hover:text-green-secondary transition-colors"
            href="#about"
          >
            Sobre
          </Link>
          <Link
            className="text-white font-light font-clean text-lg hover:text-green-secondary transition-colors"
            href="#gallery"
          >
            Galeria
          </Link>
          <Link
            className="text-white font-light font-clean text-lg hover:text-green-secondary transition-colors"
            href="#contact"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
};
