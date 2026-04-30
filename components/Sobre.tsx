"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DATA = [
  { label: "COORDENADAS", value: "23.5505° S, 46.6333° W" },
  { label: "ESPECIALIDADE", value: "CRIPTODERIVATIVOS / ALAVANCAGEM" },
  { label: "OPERANDO_DESDE", value: "2019_ALPHA_PHASE" },
  { label: "REGIÕES", value: "DUBAI / ITÁLIA / BRASIL" },
  { label: "FOCO_CORE", value: "PROTEÇÃO E ESCALABILIDADE" },
];

export default function Sobre() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-vault-border/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: The Image/Dossier Visual */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-vault-blue/50" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-vault-blue/50" />
          
          <div className="relative overflow-hidden border border-vault-border bg-vault-dark/50">
            {/* Scanning Line Overlay */}
            <motion.div 
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-10 w-full h-1 bg-vault-blue/30 blur-sm pointer-events-none" 
            />
            
            <Image
              src="/fernando.png"
              alt="Fernando Barp Profile"
              width={600}
              height={800}
              className="w-full contrast-110 brightness-110 transition-all duration-700"
            />
          </div>

          <div className="mt-4 flex justify-between items-center font-mono text-[9px] text-vault-muted">
            <span>IMG_REF: FB_TRADER_77.RAW</span>
            <span>STATUS_SCAN: VERIFICADO</span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-vault-blue" />
              <span className="text-xs tracking-[0.3em] text-vault-blue font-mono uppercase">Dossiê_Perfil</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-vault-white uppercase leading-none">
              O Arquiteto por trás <br />
              <span className="text-vault-blue">das Operações.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12 border-l border-vault-border/50 pl-8">
              {DATA.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-[10px] text-vault-muted font-mono uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm text-vault-white font-mono">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <p className="text-base text-vault-muted leading-relaxed max-w-2xl">
                Fernando Barp não apenas opera o mercado; ele o decodifica. Desde 2019, 
                tem focado na intersecção entre tecnologia, análise fundamentalista e 
                gestão de risco agressiva, mas calculada.
              </p>
              <p className="text-base text-vault-muted leading-relaxed max-w-2xl font-mono italic text-sm">
                &quot;No mercado de cripto, a volatilidade é o combustível. A paciência é o filtro. 
                O resultado é a consequência de um sistema blindado.&quot;
              </p>
            </div>

            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-vault-white">5+</span>
                <span className="text-[10px] text-vault-muted font-mono uppercase tracking-tight">Anos de Mercado</span>
              </div>
              <div className="w-px h-12 bg-vault-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-vault-white">1k+</span>
                <span className="text-[10px] text-vault-muted font-mono uppercase tracking-tight">Alunos Mentorados</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
