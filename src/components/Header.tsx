import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-line bg-bg/70">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO / NOME */}
        <Link
          href="/"
          className="font-semibold tracking-widest hover:opacity-80 transition"
        >
          IMPULSE
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#about" className="hover:text-fg">Sobre</a>
          <a href="#problem" className="hover:text-fg">Problema</a>
          <a href="#levels" className="hover:text-fg">Níveis</a>
          <a href="#how" className="hover:text-fg">Como funciona</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button href="/diagnostico?src=top" variant="ghost">
            Diagnóstico
          </Button>
          <Button href="/diagnostico?src=top">
            Analisar
          </Button>
        </div>

      </div>
    </header>
  );
}
