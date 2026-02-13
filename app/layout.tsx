import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sindicato de Choferes Profesionales del Guayas",
  description: "Licencias Profesionales y Campus Virtual Hazte Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
