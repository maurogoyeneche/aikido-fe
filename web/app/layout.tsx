import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export const metadata: Metadata = {
  title: "Iwama Shinshin Aiki Shuren Kai Uruguay",
  description: "Aikido tradicional en Uruguay. Alumnos directos de Hitohira Saito soke.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
