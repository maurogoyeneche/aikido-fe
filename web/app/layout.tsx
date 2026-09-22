import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iwama Shinshin Aiki Shuren Kai Uruguay",
  description: "Aikido tradicional en Uruguay. Alumnos directos de Hitohira Saito soke.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} flex min-h-full flex-col font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
