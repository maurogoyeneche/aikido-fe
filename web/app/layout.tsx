import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export const metadata: Metadata = {
  title: "Iwama Shinshin Aiki Shuren Kai Uruguay",
  description: "Aikido tradicional en Uruguay. Alumnos directos de Hitohira Saito soke.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className={`${manrope.className} flex min-h-full flex-col`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
