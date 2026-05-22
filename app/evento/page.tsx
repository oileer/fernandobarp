"use client";
import { useState, useEffect, useRef } from "react";

// ─── CONFIGURAÇÃO ──────────────────────────────────────────────────────────
const EVENTO = {
  nome: "Vou te ensinar em um final de semana tudo que aprendi em 7 anos de mercado financeiro",
  data: "25 e 26 de Julho de 2026",
  horario: "08:00 às 18:00",
  local: "Hotel Figueiras — Sala Araucária",
  cidade: "São Miguel do Oeste, SC",
  endereco: "R. Duque de Caxias, 311 - Centro, São Miguel do Oeste - SC, 89900-000",
  vagasTotal: 50,
  vagasRestantes: 10,
  videoUrl: "https://www.youtube.com/embed/Y3ywicffOj4",
  whatsapp: "5549999617022",
  mensagemWpp: "Olá Fernando! Quero garantir minha vaga no evento.",
};

const EXPERIENCIAS = [
  { title: "Mercado de criptomoedas e blockchain", text: "O que é blockchain, como as criptomoedas funcionam de verdade e por que esse mercado existe." },
  { title: "Análise gráfica", text: "Como ler um gráfico com precisão: identificar tendências, zonas de suporte e resistência e os padrões que antecipam os movimentos mais relevantes." },
  { title: "Indicadores e liquidez", text: "Quais indicadores Fernando usa, como interpretá-los sem ruído e como a liquidez do mercado influencia cada entrada — combinando dados técnicos e estrutura de mercado para operar com mais critério." },
  { title: "Gestão de risco", text: "As regras que definem quanto arriscar por operação, como posicionar o stop e por que a maioria dos traders perde não por falta de análise — mas por falta de controle." },
  { title: "Mentalidade", text: "Como desenvolver a disciplina e o equilíbrio emocional para executar a estratégia mesmo sob pressão — o diferencial dos traders consistentes." },
  { title: "Como usar cripto no dia a dia", text: "Como integrar criptomoedas à sua vida financeira de forma prática: custódia, transferências, pagamentos e como construir independência financeira real com ativos digitais." },
];

const PARA_QUEM = [
  "Você já opera ou está iniciando no mercado e quer desenvolver um método sólido, com consistência e critério nas decisões",
  "Você reconhece que decisões emocionais têm comprometido seus resultados e está pronto para mudar isso",
  "Você quer compreender como um trader profissional estrutura sua rotina, analisa o mercado e executa operações com disciplina",
  "Você deseja entender o mercado de criptoativos em profundidade — sua estrutura, seus ciclos e como ele pode contribuir para a construção do seu patrimônio",
  "Você está comprometido com um processo real de evolução — sem atalhos, sem promessas fáceis",
];

const NAO_PARA_QUEM = [
  "Você busca uma fórmula rápida para enriquecer sem esforço ou estudo",
  "Você não está disposto a desenvolver disciplina, praticar e respeitar uma estratégia",
  "Você quer apenas seguir sinais prontos sem compreender a lógica por trás das operações",
  "Você não está disponível para dedicar um final de semana completo ao seu desenvolvimento como trader",
  "Você acredita que o mercado cripto é especulação sem fundamento e não está aberto a entender seu funcionamento real",
];

const INVESTIMENTO = {
  preco: "R$ 1.497,00",
  precoParcelado: "12x de R$ 124,75",
  precoOriginal: "R$ 4.791,00",
};

const ENTREGAS = [
  { item: "Imersão presencial de um final de semana completo com Fernando Barp", valor: "R$ 1.497,00" },
  { item: "Treinamento online completo com acesso vitalício — para reforçar o aprendizado", valor: "R$ 2.997,00" },
  { item: "Acesso ao grupo VIP de acompanhamento pós-evento", valor: "R$ 297,00" },
];

const FAQS = [
  {
    q: "Preciso ter experiência com trading para participar?",
    a: "Não. O evento foi desenhado para atender tanto quem está começando do zero quanto quem já opera e quer elevar o nível. Fernando constrói o conteúdo do básico ao avançado ao longo dos dois dias.",
  },
  {
    q: "O que está incluído no ingresso?",
    a: "Você recebe a imersão presencial completa de dois dias com Fernando Barp, acesso ao treinamento online com conteúdo vitalício e entrada no grupo VIP de acompanhamento pós-evento.",
  },
  {
    q: "As vagas são limitadas? Por quê?",
    a: "Sim. A limitação é intencional — Fernando quer garantir atenção real para cada participante durante os dois dias. São apenas 50 vagas e, quando esgotarem, não haverá novas inscrições para esta edição.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é feito de forma segura pelo link oficial do Instituto Barp. Aceitamos Pix e cripto. Após a confirmação, você recebe todos os detalhes do evento por e-mail ou whatsapp.",
  },
  {
    q: "O evento é presencial? Preciso me deslocar até São Miguel do Oeste?",
    a: "Sim, o evento é 100% presencial e não será gravado. Acontece nos dias 25 e 26 de Julho de 2026 no Hotel Figueiras — Sala Araucária, em São Miguel do Oeste, SC. A experiência presencial é parte fundamental do aprendizado.",
  },
  {
    q: "Existe alguma garantia?",
    a: "Sim. Se ao final do primeiro dia você sentir que o evento não está entregando o que foi prometido, basta nos comunicar e devolveremos o valor integral do seu investimento. Queremos que você esteja 100% seguro na sua decisão.",
  },
];

const vagasPct = Math.round(
  ((EVENTO.vagasTotal - EVENTO.vagasRestantes) / EVENTO.vagasTotal) * 100
);

function openWhatsApp() {
  window.open(
    `https://wa.me/${EVENTO.whatsapp}?text=${encodeURIComponent(EVENTO.mensagemWpp)}`,
    "_blank"
  );
}

// ─── FADE-UP ON SCROLL ──────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

// ─── INTRO LOADER ────────────────────────────────────────────────────────────
function IntroLoader({ onDone }: { onDone: () => void }) {
  const doneRef = useRef(onDone);
  doneRef.current = onDone;
  const [phase, setPhase] = useState<"show" | "exit" | "gone">("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 2500);
    const t2 = setTimeout(() => { setPhase("gone"); doneRef.current(); }, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "gone") return null;
  return (
    <div className={`intro-overlay${phase === "exit" ? " exiting" : ""}`} aria-hidden="true">
      <div className="intro-content">
        <div className="intro-divider" />
        <span className="intro-label">Instituto Barp</span>
        <span className="intro-title">Apresenta</span>
        <div className="intro-divider-bottom" />
      </div>
    </div>
  );
}

// ─── FAQ ITEM ───────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid color-mix(in oklab, #3157e8 20%, transparent)", padding: "20px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          color: "#ecedf4",
          fontFamily: "Sora, sans-serif",
          fontSize: "1rem",
          fontWeight: 600,
          gap: 16,
        }}
      >
        <span>{q}</span>
        <span
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1px solid color-mix(in oklab, #3157e8 50%, transparent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3157e8",
            fontSize: "1.2rem",
            lineHeight: 1,
            transition: "transform 0.3s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div className={`faq-content ${open ? "open" : ""}`}>
        <p style={{ paddingTop: 12, color: "color-mix(in oklab, #ecedf4 50%, transparent)", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300 }}>
          {a}
        </p>
      </div>
    </div>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────
export default function EventoPage() {
  return (
    <div className="evento-root">
      <IntroLoader onDone={() => {}} />

      {/* Gradient triangles (background decorativos do original) */}
      <div className="bg-triangle bg-triangle-left">
        <div className="bg-triangle-inner" />
      </div>
      <div className="bg-triangle bg-triangle-right">
        <div className="bg-triangle-inner" />
      </div>

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <header style={{ borderBottom: "1px solid color-mix(in oklab, #3157e8 15%, transparent)" }}>
        <div className="main-grid">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 72 }}>
            <span style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "0.02em", color: "#ecedf4" }}>
              Instituto Barp
            </span>
          </div>
        </div>
      </header>

      {/* ── VSL SECTION ────────────────────────────────────────────── */}
      <section style={{ padding: "64px 0 48px", position: "relative" }}>
        <div className="main-grid">
          <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto", width: "100%" }}>

            {/* Badge */}
            <div style={{ marginBottom: 32 }}>
              <span className="badge-evento">
                Evento Presencial · {EVENTO.data}
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                marginBottom: 20,
                letterSpacing: "-0.02em",
                color: "#ecedf4",
              }}
            >
              7 anos de{" "}
              <b className="font-semibold bg-gradient-to-r from-[#3157E8]/30 to-[#0C216E]/30 px-2 rounded-lg xl:rounded-2xl decoration-clone">mercado financeiro</b>{" "}
              em um final de semana
            </h1>

            {/* Sub */}
            <p
              style={{
                color: "color-mix(in oklab, #ecedf4 55%, transparent)",
                fontSize: "clamp(0.95rem, 2vw, 1.125rem)",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 560,
                margin: "0 auto 48px",
              }}
            >
              Fernando Barp reúne pela primeira vez em um único final de semana, tudo que
              ele levou anos para aprender sobre trading, mercado cripto, mentalidade e construção de
              patrimônio real.
            </p>

            {/* VIDEO PLAYER */}
            <div
              className="card-blue"
              style={{
                width: "100%",
                aspectRatio: "16/9",
                backgroundColor: "#0c0d1f",
                marginBottom: 40,
                borderRadius: "1.5rem",
              }}
            >
              {EVENTO.videoUrl ? (
                <iframe
                  src={EVENTO.videoUrl}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", borderRadius: "1.5rem" }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      backgroundColor: "color-mix(in oklab, #3157e8 15%, transparent)",
                      border: "1px solid color-mix(in oklab, #3157e8 40%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#3157e8">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span style={{ color: "color-mix(in oklab, #ecedf4 40%, transparent)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    VSL em breve
                  </span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <button className="cta-btn" onClick={openWhatsApp}>
                Quero Garantir Minha Vaga
              </button>

              {/* Urgência + progress */}
              <p style={{ color: "color-mix(in oklab, #ecedf4 50%, transparent)", fontSize: "0.8rem" }}>
                Apenas{" "}
                <strong style={{ color: "#ecedf4" }}>{EVENTO.vagasRestantes} vagas</strong>{" "}
                disponíveis de {EVENTO.vagasTotal}
              </p>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${vagasPct}%` }} />
              </div>
              <p style={{ color: "color-mix(in oklab, #ecedf4 35%, transparent)", fontSize: "0.72rem" }}>
                {vagasPct}% das vagas preenchidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha divisória */}
      <div className="main-grid"><div className="gradient-line" /></div>

      {/* ── O QUE VOCÊ VAI VIVER ──────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div className="main-grid">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Conteúdo</span>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  marginTop: 12,
                  lineHeight: 1.2,
                  color: "#ecedf4",
                }}
              >
                O que você vai aprender
              </h2>
              <p style={{ color: "color-mix(in oklab, #ecedf4 50%, transparent)", marginTop: 12, fontWeight: 300, fontSize: "0.95rem" }}>
                Em um único final de semana presencial, Fernando vai abrir o método e estratégias lucrativas que usa para operar e construir patrimônio no mercado de criptoativos.
              </p>
            </div>
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
              gap: 16,
            }}
          >
            {EXPERIENCIAS.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.07}>
              <div
                className="btn-icon"
                style={{ padding: "24px 28px", display: "flex", gap: 16, alignItems: "flex-start", height: "100%" }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "color-mix(in oklab, #3157e8 15%, transparent)",
                    border: "1px solid color-mix(in oklab, #3157e8 40%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    color: "#3157e8",
                    fontWeight: 700,
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ position: "relative", zIndex: 10 }}>
                  <p style={{ color: "#ecedf4", fontSize: "0.875rem", fontWeight: 700, marginBottom: 6, lineHeight: 1.4 }}>{exp.title}</p>
                  <p style={{ color: "color-mix(in oklab, #ecedf4 65%, transparent)", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 300 }}>{exp.text}</p>
                </div>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONHEÇA FERNANDO BARP ─────────────────────────────────────── */}
      <section style={{ paddingTop: 80, paddingBottom: 20, position: "relative", overflow: "hidden" }}>
        <div className="sobre-line" />
        <div className="main-grid">
          <div className="sobre-rows">

            {/* Row 1 — Título + about-1 */}
            <FadeUp className="sobre-row">
              <div className="sobre-dot-center" />

              {/* Título */}
              <div style={{ position: "relative" }}>
                <div className="sobre-mobile-dot" />
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: "#ecedf4",
                  }}
                >
                  Conheça
                </h2>
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "#ecedf4",
                  }}
                >
                  Fernando Barp
                </p>
              </div>

              {/* Foto 1 */}
              <div
                className="card-blue"
                style={{ borderRadius: "1.5rem", overflow: "hidden" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about/about-1.png"
                  alt="Fernando Barp em ambiente urbano"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </FadeUp>

            {/* Row 2 — about-2 (esq) + texto 1+2 (dir) */}
            <FadeUp className="sobre-row">
              <div className="sobre-dot-center" />

              {/* Foto 2 — esquerda no desktop, abaixo no mobile */}
              <div
                className="card-blue sobre-img-col"
                style={{ borderRadius: "1.5rem", overflow: "hidden" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about/about-2.png"
                  alt="Fernando Barp trabalhando"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Texto — direita no desktop, primeiro no mobile */}
              <div className="sobre-text-col" style={{ position: "relative" }}>
                <div className="sobre-mobile-dot" />
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                    lineHeight: 1.85,
                    color: "#ecedf4",
                  }}
                >
                  Fernando Barp atua no mercado de criptoativos{" "}
                  <strong style={{ fontWeight: 700 }}>desde 2019</strong>, com
                  experiência focada em estratégias de trading e construção de
                  patrimônio.
                </p>
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                    lineHeight: 1.85,
                    color: "#ecedf4",
                    marginTop: 24,
                  }}
                >
                  Ao longo de sua trajetória, viveu em países como{" "}
                  <strong style={{ fontWeight: 700 }}>Dubai e Itália</strong>,
                  onde ampliou sua visão sobre o mercado global e aprofundou
                  sua compreensão sobre liberdade financeira.
                </p>
              </div>
            </FadeUp>

            {/* Row 3 — about-3 (esq) + texto 3 (dir) */}
            <FadeUp className="sobre-row">
              <div className="sobre-dot-center" />

              {/* Foto 3 */}
              <div
                className="card-blue sobre-img-col"
                style={{ borderRadius: "1.5rem", overflow: "hidden" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about/about-3.png"
                  alt="Fernando Barp olhando pela janela"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Texto */}
              <div className="sobre-text-col" style={{ position: "relative" }}>
                <div className="sobre-mobile-dot" />
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                    lineHeight: 1.85,
                    color: "#ecedf4",
                  }}
                >
                  Com anos de prática e vivência internacional, consolidou um
                  posicionamento sólido no universo das criptomoedas, sempre
                  pautado em{" "}
                  <strong style={{ fontWeight: 700 }}>
                    mentalidade, consistência e visão de longo prazo
                  </strong>
                  .
                </p>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ─────────────────────────────────────────────── */}
      <section className="bg-secondary-blue full-bleed" style={{ padding: "80px 0" }}>
        <div className="main-grid">
          <FadeUp>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                textAlign: "center",
                marginBottom: 48,
                lineHeight: 1.2,
                color: "#ecedf4",
              }}
            >
              Para quem é este evento
            </h2>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: 24 }}>
            <FadeUp>
              <div className="card-blue" style={{ padding: "32px 28px", borderRadius: "1rem" }}>
                <div className="section-label" style={{ marginBottom: 20 }}>✓ É para você se...</div>
                <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {PARA_QUEM.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "#ecedf4", fontSize: "0.9rem", lineHeight: 1.6, fontWeight: 300 }}>
                      <span style={{ color: "#3157e8", flexShrink: 0, marginTop: 2 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div
                style={{
                  padding: "32px 28px",
                  borderRadius: "1rem",
                  border: "1px solid color-mix(in oklab, #ecedf4 8%, transparent)",
                  backgroundColor: "color-mix(in oklab, #ecedf4 2%, transparent)",
                }}
              >
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "color-mix(in oklab, #ecedf4 40%, transparent)", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>
                  ✗ Não é para você se...
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {NAO_PARA_QUEM.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "color-mix(in oklab, #ecedf4 50%, transparent)", fontSize: "0.9rem", lineHeight: 1.6, fontWeight: 300 }}>
                      <span style={{ flexShrink: 0, marginTop: 2 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTO ───────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div className="main-grid">
          <FadeUp>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                textAlign: "center",
                marginBottom: 48,
                color: "#ecedf4",
              }}
            >
              Resultados
            </h2>
          </FadeUp>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: 24,
              alignItems: "center",
            }}
          >
            {/* Card de depoimento */}
            <FadeUp>
              <div style={{ position: "relative", paddingTop: 88 }}>
                {/* Ícone de aspas */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 64,
                    height: 64,
                    zIndex: 10,
                  }}
                >
                  <svg viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", stroke: "color-mix(in oklab, #3157e8 70%, transparent)" }}>
                    <path d="M4.567 57.966a8 8 0 0 1 .376 4.668l-4.26 13.16a4 4 0 0 0 4.944 4.672l13.652-3.992a8 8 0 0 1 4.396.368A40 40 0 1 0 4.567 57.966" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.599 40.6h.04" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40.599 40.6h.04" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M56.599 40.6h.04" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Card */}
                <div
                  className="btn-icon"
                  style={{ padding: "32px 28px", minHeight: 200 }}
                >
                  <div style={{ position: "relative", zIndex: 10 }}>
                    <p
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.95rem",
                        lineHeight: 1.85,
                        color: "#ecedf4",
                        marginBottom: 20,
                      }}
                    >
                      &ldquo;A mentoria transformou minha forma de ver o mercado: conquistei liberdade financeira e geográfica, desenvolvi controle emocional e aumentei minha assertividade. Hoje opero com clareza, foco e equilíbrio. Sou grato pelo conhecimento e profissionalismo do Fernando.&rdquo;
                    </p>
                    <p
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#ecedf4",
                      }}
                    >
                      Igor Mateus Meneghini
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Imagem */}
            <FadeUp delay={0.15}>
              <div
                className="card-blue"
                style={{ borderRadius: "1.5rem", overflow: "hidden", aspectRatio: "16/9" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about/mentorado.png"
                  alt="Igor Mateus Meneghini — aluno do Fernando Barp"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Linha divisória */}
      <div className="main-grid"><div className="gradient-line-sm" /></div>

      {/* ── VALOR + PREÇO ────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div className="main-grid">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Investimento</span>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  marginTop: 12,
                  lineHeight: 1.2,
                  color: "#ecedf4",
                }}
              >
                Tudo que você recebe
              </h2>
              <p style={{ color: "color-mix(in oklab, #ecedf4 50%, transparent)", marginTop: 12, fontWeight: 300, fontSize: "0.95rem" }}>
                Uma imersão completa com acesso a tudo que Fernando usa e ensina — presencialmente.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 24, alignItems: "start" }}>
            {/* Stack de valor */}
            <FadeUp>
            <div className="card-blue" style={{ padding: "32px 28px" }}>
              <div className="section-label" style={{ marginBottom: 20 }}>O que está incluso</div>
              <ul style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {ENTREGAS.map((e, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 16,
                      padding: "14px 0",
                      borderBottom: i < ENTREGAS.length - 1
                        ? "1px solid color-mix(in oklab, #3157e8 15%, transparent)"
                        : "none",
                    }}
                  >
                    <span style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#ecedf4", fontSize: "0.875rem", lineHeight: 1.5, fontWeight: 300 }}>
                      <span style={{ color: "#3157e8", flexShrink: 0, marginTop: 1 }}>✓</span>
                      {e.item}
                    </span>
                    <span style={{ flexShrink: 0, fontSize: "0.8rem", color: "color-mix(in oklab, #ecedf4 35%, transparent)", fontWeight: 600, whiteSpace: "nowrap" }}>
                      {e.valor}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Total */}
              <div
                style={{
                  marginTop: 20,
                  paddingTop: 20,
                  borderTop: "1px solid color-mix(in oklab, #3157e8 30%, transparent)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "color-mix(in oklab, #ecedf4 50%, transparent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Valor total
                </span>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "color-mix(in oklab, #ecedf4 40%, transparent)", textDecoration: "line-through" }}>
                  {INVESTIMENTO.precoOriginal}
                </span>
              </div>
            </div>
            </FadeUp>

            {/* Card de preço */}
            <FadeUp delay={0.15}>
            <div
              className="pricing-card"
              style={{
                borderRadius: "1rem",
                border: "1px solid color-mix(in oklab, #3157e8 70%, transparent)",
                background: "linear-gradient(160deg, #0d1030 0%, #0c0d1f 100%)",
                padding: "40px 32px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow decorativo */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, color-mix(in oklab, #3157e8 20%, transparent), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <span className="badge-evento" style={{ marginBottom: 24, display: "inline-block" }}>
                Oferta de lançamento
              </span>

              <p style={{ color: "color-mix(in oklab, #ecedf4 40%, transparent)", fontSize: "0.85rem", marginBottom: 16, textDecoration: "line-through" }}>
                de {INVESTIMENTO.precoOriginal}
              </p>

              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                  fontWeight: 800,
                  color: "#ecedf4",
                  lineHeight: 1,
                  marginBottom: 32,
                }}
              >
                {INVESTIMENTO.preco}
              </div>

              <div style={{ height: 1, background: "linear-gradient(to right, transparent, color-mix(in oklab, #3157e8 40%, transparent), transparent)", marginBottom: 32 }} />

              <button className="cta-btn" onClick={openWhatsApp} style={{ maxWidth: "100%" }}>
                Garantir minha vaga agora
              </button>

              <p style={{ color: "color-mix(in oklab, #ecedf4 35%, transparent)", fontSize: "0.72rem", marginTop: 16 }}>
                Pagamento seguro · {EVENTO.vagasRestantes} vagas restantes
              </p>
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DETALHES DO EVENTO ─────────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div className="main-grid">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label">Logística</span>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, marginTop: 12, color: "#ecedf4" }}>
                Data, local e horário
              </h2>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, calc(50% - 8px)), 1fr))", gap: 16, marginBottom: 32 }}>
            {[
              { label: "Data", value: EVENTO.data },
              { label: "Horário", value: EVENTO.horario },
              { label: "Local", value: EVENTO.local },
              { label: "Cidade", value: EVENTO.cidade },
            ].map((item, idx) => (
              <FadeUp key={item.label} delay={idx * 0.08}>
              <div
                className="btn-icon"
                style={{ padding: 24, textAlign: "center" }}
              >
                <div className="section-label" style={{ marginBottom: 8 }}>{item.label}</div>
                <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ecedf4", position: "relative", zIndex: 10 }}>
                  {item.value}
                </div>
              </div>
              </FadeUp>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "color-mix(in oklab, #ecedf4 40%, transparent)", fontSize: "0.85rem", fontWeight: 300 }}>
            {EVENTO.endereco}
          </p>
        </div>
      </section>

      {/* Linha divisória */}
      <div className="main-grid"><div className="gradient-line" /></div>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="bg-secondary-blue full-bleed" style={{ padding: "80px 0" }}>
        <div className="main-grid">
          <div style={{ maxWidth: 720, margin: "0 auto", width: "100%" }}>
            <FadeUp>
              <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, textAlign: "center", marginBottom: 48, color: "#ecedf4" }}>
                Perguntas frequentes
              </h2>
            </FadeUp>
            {FAQS.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <FaqItem q={faq.q} a={faq.a} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section
        className="full-bleed"
        style={{ backgroundColor: "#3157e8", padding: "80px 24px", textAlign: "center", position: "relative" }}
      >
        {/* Linha top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, #3157e8 0%, #fff 30%, #fff 70%, #3157e8 100%)", opacity: 0.15 }} />

        <FadeUp>
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(1.25rem, 3vw, 1.875rem)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.15,
            maxWidth: 600,
            margin: "0 auto 12px",
          }}
        >
          Você está a um dia de entender o mercado cripto e aproveitar o potencial dele para sua vida.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", fontWeight: 300, marginBottom: 36 }}>
          As vagas são limitadas — e quando acabarem, não haverá segunda chance para esta edição. {EVENTO.vagasRestantes} vagas restantes.
        </p>

        <button
          onClick={openWhatsApp}
          style={{
            display: "inline-block",
            padding: "18px 56px",
            backgroundColor: "#fff",
            color: "#3157e8",
            fontFamily: "Sora, sans-serif",
            fontSize: "1rem",
            fontWeight: 700,
            border: "none",
            borderRadius: "1rem",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Quero Garantir Minha Vaga Agora
        </button>
        </FadeUp>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        className="full-bleed bg-secondary-blue"
        style={{ padding: "32px 24px", position: "relative" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, #080912 0%, #3157e8 30%, #3157e8 70%, #080912 100%)" }} />
        <div className="main-grid">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ color: "color-mix(in oklab, #ecedf4 30%, transparent)", fontSize: "0.75rem" }}>
              {new Date().getFullYear()} © Fernando Barp — Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
