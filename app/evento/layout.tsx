import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./evento.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formação Trader — Fernando Barp",
  description: "Imersão presencial de 2 dias com Fernando Barp. Tudo que ele aprendeu em 7 anos de mercado financeiro em um único final de semana. São Miguel do Oeste, 25 e 26 de julho de 2026.",
  icons: {
    icon: "/about/about-1.png",
  },
  robots: { index: false, follow: false },
};

export default function EventoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={sora.className} style={{ fontFamily: sora.style.fontFamily }}>
      {children}
    </div>
  );
}
