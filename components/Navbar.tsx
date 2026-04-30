"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { name: "Sobre", href: "#sobre" },
  { name: "Operações", href: "#operacoes" },
  { name: "Mentoria", href: "#servicos" },
  { name: "Telegram", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? "py-4 bg-vault-black/90 backdrop-blur-md border-vault-border/50" 
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 bg-vault-blue flex items-center justify-center">
             <div className="w-2 h-2 bg-vault-white" />
          </div>
          <span className="text-sm font-bold tracking-[0.2em] text-vault-white uppercase font-display">
            Fernando Barp
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="group flex flex-col items-center"
            >
              <span className="text-[10px] text-vault-muted font-mono uppercase tracking-[0.2em] group-hover:text-vault-blue transition-colors duration-300">
                {link.name}
              </span>
              <motion.div 
                className="h-px bg-vault-blue mt-1"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </a>
          ))}
        </div>

        {/* Technical Status (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-4 border-l border-vault-border/50 pl-12 font-mono text-[9px] text-vault-muted">
           <div className="flex flex-col">
              <span className="text-vault-blue uppercase">Conexão</span>
              <span>PROTEGIDA_SSL_256</span>
           </div>
           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <motion.div 
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-vault-white" 
          />
          <motion.div 
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-px bg-vault-white" 
          />
          <motion.div 
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-px bg-vault-white" 
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-vault-black border-b border-vault-border/50 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-mono text-vault-white uppercase tracking-widest flex items-center gap-4"
                >
                  <span className="text-vault-blue text-xs">0{i + 1}</span>
                  {link.name}
                </motion.a>
              ))}
              
              <div className="pt-8 border-t border-vault-border/30 flex items-center justify-between">
                <span className="text-[10px] text-vault-muted font-mono uppercase">Status: Online</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
