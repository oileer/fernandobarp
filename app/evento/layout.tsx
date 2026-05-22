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
  title: "[NOME_EVENTO] — Fernando Barp",
  description: "[DESCRIÇÃO_BREVE_DO_EVENTO]",
  robots: { index: false, follow: false },
};

export default function EventoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={sora.className} style={{ fontFamily: sora.style.fontFamily }}>
      {children}
    </div>
  );
}
