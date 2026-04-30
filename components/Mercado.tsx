"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Mercado() {
  const container = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Only inject script once and when container is ready
    if (container.current && !container.current.querySelector('script')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "America/Sao_Paulo",
        "theme": "dark",
        "style": "1",
        "locale": "br",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <section id="operacoes" className="py-24 px-6 md:px-12 lg:px-24 bg-vault-dark/30 border-y border-vault-border/30">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/3 sticky top-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-vault-blue" />
            <span className="text-xs tracking-[0.3em] text-vault-blue font-mono uppercase">Inteligência_de_Mercado</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-vault-white uppercase leading-tight">
            Navegue pelos <br />
            <span className="text-vault-blue">Ciclos Reais.</span>
          </h2>

          <div className="space-y-6 border-l border-vault-border/50 pl-6">
            <p className="text-sm text-vault-muted leading-relaxed font-mono">
              Não operamos no escuro. Utilizamos a tecnologia do TradingView para mapear cada movimento institucional no gráfico do Bitcoin.
            </p>
            <p className="text-sm text-vault-muted leading-relaxed font-mono">
              O gráfico ao lado é a nossa principal ferramenta de trabalho. Através dele, identificamos padrões de acumulação e distribuição antes que o movimento aconteça.
            </p>
          </div>
          
          <div className="mt-10 p-4 border border-vault-border/50 bg-vault-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-vault-muted uppercase font-mono tracking-tighter">Status do Mercado</span>
              <span className="text-[10px] text-vault-blue font-mono uppercase tracking-widest">Análise_Ativa</span>
            </div>
            <div className="w-full h-1 bg-vault-border overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-1/2 h-full bg-vault-blue"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 w-full h-[400px] md:h-[600px] relative border border-vault-border/50 bg-vault-black/50 overflow-hidden group">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-vault-blue z-10" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-vault-blue z-10" />
          
          <div className="w-full h-full p-1">
            <div 
              id="tradingview_widget" 
              ref={container} 
              className="w-full h-full"
            >
              {!isMounted && (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xs text-vault-muted font-mono animate-pulse uppercase tracking-widest">
                    Inicializando Terminal de Análise...
                  </span>
                </div>
              )}
              {/* Widget will be injected here */}
            </div>
          </div>

          {/* Technical Info Overlay */}
          <div className="absolute top-2 right-2 flex gap-4 pointer-events-none">
            <div className="px-2 py-1 bg-vault-black/80 border border-vault-border/50 text-[8px] text-vault-blue font-mono uppercase">
              ALPHA_STREAM: ON
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
