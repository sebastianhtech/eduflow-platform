import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduFlow | Gestión Educativa de Próxima Generación",
  description: "La plataforma SaaS definitiva para la gestión de escuelas e institutos superiores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-inter bg-background text-foreground selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
