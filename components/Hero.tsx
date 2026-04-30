"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-12">
      {/* Background scan line */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="w-full h-1 bg-vault-blue/20 blur-sm animate-scan-line" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex-grow flex flex-col justify-center"
      >
        {/* Technical Label */}
        <motion.div variants={item} className="flex items-center gap-4 mb-8">
          <span className="text-[10px] md:text-xs tracking-[0.4em] text-vault-blue uppercase font-mono">
            Acessando Cofre Seguro_01
          </span>
          <span className="w-8 h-px bg-vault-blue" />
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          variants={item}
          className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.9] md:leading-[0.85] uppercase text-vault-white tracking-tight"
        >
          Multiplique.
          <br />
          <span className="text-vault-blue">Proteja.</span>
        </motion.h1>

        {/* Subtitle/Description */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.p 
            variants={item}
            className="max-w-md text-sm md:text-base text-vault-muted leading-relaxed font-mono"
          >
            Estratégias de elite para o mercado de criptoativos. 
            Construa um patrimônio inabalável com quem opera no campo de batalha desde 2019.
          </motion.p>

          <motion.div variants={item} className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="text-[10px] text-vault-muted uppercase tracking-widest font-mono">
              [ Fernando Barp — Fundador ]
            </span>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-vault-blue animate-pulse" />
              <span className="text-[10px] text-vault-blue font-mono">MERCADO_AO_VIVO_CONECTADO</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - part of the flow at the bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-auto pt-8 flex items-center gap-4"
      >
        <div className="h-px w-12 bg-vault-border" />
        <span className="text-[10px] text-vault-muted uppercase tracking-tighter font-mono">
          Role para descriptografar
        </span>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-vault-blue/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-px h-64 bg-gradient-to-b from-transparent via-vault-blue/20 to-transparent" />
    </section>
  );
}
