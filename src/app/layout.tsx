import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMPULSE",
  description: "Som, imagem, estratégia e tecnologia integrados para artistas da cena eletrônica.",
  openGraph: {
    title: "IMPULSE",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
