"use client";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: "01",
    title: "Mentoria: Método Despertar",
    desc: "Formação de elite para traders que buscam consistência. Um ano de acompanhamento estratégico focado em mentalidade e execução técnica.",
    tag: "PROGRAMA_ALPHA",
  },
  {
    id: "02",
    title: "Operações via API",
    desc: "Gestão profissional de capital com total transparência. Sua conta operada por quem entende o fluxo, sem custódia de terceiros.",
    tag: "GESTÃO_DE_CAPITAL",
  },
  {
    id: "03",
    title: "Bybit / Hash Hedge",
    desc: "Infraestrutura global de alta liquidez. Utilizamos as melhores ferramentas do mundo para garantir execução e proteção em tempo real.",
    tag: "INFRAESTRUTURA",
  },
];

export default function Servicos() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-vault-blue" />
        <span className="text-xs tracking-[0.3em] text-vault-blue font-mono uppercase">Capacidades_Operacionais</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-vault-white uppercase leading-tight">
        Sistemas de <br />
        <span className="text-vault-blue">Alta Performance.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-vault-border/50">
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            className="group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-vault-border/50 bg-vault-black hover:bg-vault-dark transition-colors duration-500 overflow-hidden"
          >
            {/* Hover Background Accent */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-vault-blue blur-[80px]" />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs text-vault-blue font-mono">[{card.id}]</span>
                <span className="text-[9px] text-vault-muted font-mono uppercase tracking-widest">{card.tag}</span>
              </div>

              <h3 className="text-2xl font-bold text-vault-white mb-6 uppercase tracking-tight group-hover:text-vault-blue transition-colors duration-300">
                {card.title}
              </h3>

              <p className="text-sm text-vault-muted leading-relaxed font-mono mb-12 min-h-[80px]">
                {card.desc}
              </p>

              <button className="flex items-center gap-4 text-[10px] text-vault-white font-mono uppercase tracking-[0.3em] group/btn">
                <span className="group-hover/btn:mr-2 transition-all duration-300">Solicitar Acesso</span>
                <span className="w-8 h-px bg-vault-blue" />
              </button>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div className="absolute top-2 right-2 w-px h-2 bg-vault-blue" />
               <div className="absolute top-2 right-2 w-2 h-px bg-vault-blue" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
