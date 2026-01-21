import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Impulse",
  description: "Desenvolvimento artístico com estrutura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
