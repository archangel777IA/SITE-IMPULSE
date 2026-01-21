export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-muted flex flex-col gap-3">
        <div className="tracking-widest text-fg font-semibold">IMPULSE</div>
        <div>Som, imagem, estratégia e tecnologia integrados.</div>
        <div className="text-xs">© {new Date().getFullYear()} IMPULSE. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
