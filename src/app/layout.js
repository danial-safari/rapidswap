import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const localFonts = localFont({
  src: [
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplayHeavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplayBlack.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplayBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplaySemibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplayMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplayRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplayLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProDisplay/SFProDisplayUltralight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-SFProDisplay",
});

export const metadata = {
  title: "RapidSwap",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${localFonts.variable}`}>
      <body className="min-h-screen grid grid-rows-[68px_1fr_auto] md:grid-rows-[62px_1fr_auto] dark:bg-black dark:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
