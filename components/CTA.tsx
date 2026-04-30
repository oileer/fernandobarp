"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-vault-blue overflow-hidden">
      {/* Decorative background numbers/text */}
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <span className="text-[120px] font-bold text-vault-white leading-none tracking-tighter">01010</span>
      </div>

      <div className="relative z-10 flex flex-col items-start max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-vault-white" />
          <span className="text-xs tracking-[0.4em] text-vault-white/80 font-mono uppercase">Iniciar_Contato</span>
        </div>

        <h2 className="text-4xl md:text-7xl font-bold mb-12 text-vault-white uppercase leading-[0.9] tracking-tighter">
          Pronto para blindar <br />
          seu patrimônio?
        </h2>

        <p className="text-lg text-vault-white/80 mb-12 font-mono max-w-xl">
          As vagas para a mentoria e gestão via API são limitadas para garantir a qualidade operacional. 
          Solicite sua análise de perfil agora.
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-5 bg-vault-white text-vault-blue font-mono text-sm uppercase tracking-[0.3em] overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-vault-white">Entrar em Contato</span>
          <div className="absolute inset-0 bg-vault-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.button>
      </div>

      {/* Grid pattern overlay for the blue section */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </section>
  );
}
