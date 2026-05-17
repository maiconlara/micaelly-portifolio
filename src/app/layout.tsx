import type { Metadata, Viewport } from "next";
import { Poppins, Mr_De_Haviland, Scheherazade_New } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/app/providers";
import { WhatsappFloating } from "@/components/ui/whatsapp-float";

const haviland = Mr_De_Haviland({
  variable: "--font-haviland",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const zalando = localFont({
  src: [
    {
      path: "../../public/ZalandoSansExpanded-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/ZalandoSansExpanded-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/ZalandoSansExpanded-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/ZalandoSansExpanded-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/ZalandoSansExpanded-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-zalando",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Micaelly da Rosa | Portfólio",
  description:
    "Portfólio profissional de fotografia de Micaelly da Rosa — capturando momentos, contando histórias.",
  applicationName: "Micaelly da Rosa | Portfólio",
  authors: [{ name: "Micaelly da Rosa" }],
  keywords: [
    "fotografia",
    "portfólio",
    "Micaelly da Rosa",
    "ensaio",
    "casamento",
    "aniversário",
    "gestante",
    "cosplay",
  ],
  openGraph: {
    title: "Micaelly da Rosa | Portfólio",
    description:
      "Portfólio profissional de fotografia de Micaelly da Rosa — capturando momentos, contando histórias.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#90a084",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Micaelly da Rosa" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`flex flex-col w-full min-h-screen items-center justify-center ${haviland.variable} ${poppins.variable} ${scheherazade.variable} ${zalando.variable} antialiased`}
      >
        <Providers>
          <Toaster />
          <WhatsappFloating />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
