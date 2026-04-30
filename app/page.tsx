import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Mercado from "@/components/Mercado";
import Servicos from "@/components/Servicos";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Sobre />
      <Mercado />
      <Servicos />
      <CTA />
      <Footer />
    </main>
  );
}
