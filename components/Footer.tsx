"use client";

const LINKS = [
  { name: "Política de Privacidade", href: "#" },
  { name: "Termos de Uso", href: "#" },
  { name: "Aviso de Risco", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-vault-black border-t border-vault-border/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-mono text-vault-muted uppercase tracking-widest">
            © 2026 Fernando Barp — Todos os sistemas operacionais
          </p>
          <div className="flex gap-4">
            <span className="text-[9px] text-vault-blue font-mono uppercase">VLT_STRAT_ENCRIPT_LIGADO</span>
            <span className="text-[9px] text-vault-muted font-mono">LATÊNCIA: 12ms</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          {LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-mono text-vault-muted hover:text-vault-white transition-colors duration-300 uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
         <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-vault-border/50 to-transparent" />
      </div>
    </footer>
  );
}
