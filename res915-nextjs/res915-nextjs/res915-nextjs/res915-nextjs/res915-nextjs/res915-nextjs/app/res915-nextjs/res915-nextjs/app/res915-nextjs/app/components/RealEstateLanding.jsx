"use client";
import React, { useMemo, useState } from "react";

// ================= Landing (clean version) =================
function RealEstateLanding() {
  const ACCENT = "indigo"; // could try "emerald" | "sky" | "rose" | "cyan"

  // ---- COMPANY INFO ----
  const COMPANY = {
    name: "Real Estate Solutions",
    phone: "915-313-1093",
    email: "jiacqventures@gmail.com",
    city: "El Paso, TX",
    tagline: {
      en: "Creative real estate solutions that remove friction and unlock options.",
      es: "Soluciones creativas de bienes raíces que eliminan fricción y abren opciones.",
    },
  };

  const [lang, setLang] = useState("en");

  const t = useMemo(() => {
    return lang === "en"
      ? {
          nav: { home: "Home", how: "How We Help", services: "Solutions", contact: "Contact" },
          hero: {
            pre: "Sell, buy, or solve a sticky situation",
            titleStrong: "Real estate, the flexible way.",
            subtitle: COMPANY.tagline.en,
            ctaPrimary: "Get a free options review",
            ctaSecondary: "See how it works",
          },
          trust: {
            line: `Trusted by local homeowners, buyers & agents across the Borderland`,
          },
          how: {
            title: "How we help people",
            steps: [
              { title: "Quick Discovery Call", text: "We listen to your goals and constraints—payment, timing, repairs, credit, or loan status." },
              { title: "Options Map", text: "We outline multiple paths like Subject-To, Seller Finance, Novation, Cash, or Listing—side by side." },
              { title: "Clear Numbers", text: "Transparent terms (price, payment, timeline, risk) so you can pick what fits best." },
              { title: "Smooth Execution", text: "We coordinate escrow, docs, payoff tracking, insurance & ongoing support." },
            ],
          },
        }
      : {
          nav: { home: "Inicio", how: "Cómo Ayudamos", services: "Soluciones", contact: "Contacto" },
          hero: {
            pre: "Vende, compra o resuelve una situación difícil",
            titleStrong: "Bienes raíces, a tu manera.",
            subtitle: COMPANY.tagline.es,
            ctaPrimary: "Obtén una revisión gratuita",
            ctaSecondary: "Ver cómo funciona",
          },
          trust: {
            line: `Con la confianza de propietarios, compradores y agentes en la región fronteriza`,
          },
          how: {
            title: "Cómo ayudamos a las personas",
            steps: [
              { title: "Llamada De 5 Minutos", text: "Escuchamos tus metas — pago, tiempo, reparaciónes, crédito o el estado del préstamo." },
              { title: "Opciones Claras", text: "Presentamos múltiples rutas (Subject-To, Financiamiento del Vendedor, Novación, Cash o Listing)." },
              { title: "Números Transparentes", text: "Términos visibles — precio, pago, plazo y riesgo para elegir lo mejor." },
              { title: "Cierre Sin Estrés", text: "Coordinamos documentación, escrow, payoff, seguro y soporte después de cerrar." },
            ],
          },
        };
  }, [lang]);
   return (
    <main className="min-h-screen w-full font-sans">
      {/* Top Navigation */}
      <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b border-slate-200/40 bg-white/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-bold text-lg">
            {COMPANY.name}
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-" + ACCENT>{t.nav.home}</a>
            <a href="#how" className="hover:text-" + ACCENT>{t.nav.how}</a>
            <a href="#services" className="hover:text-" + ACCENT>{t.nav.services}</a>
            <a href="#contact" className="hover:text-" + ACCENT>{t.nav.contact}</a>
          </nav>
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className={`px-3 py-1 rounded border text-sm hover:bg-${ACCENT}-50`}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>
      </header>
{/* ===== HERO (updated) ===== */}
<section id="home" className="relative overflow-hidden pt-24 pb-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* Left text side */}
    <div>
      <p className="text-sm mb-3 text-slate-500">{t.hero.pre}</p>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        {t.hero.titleStrong}
      </h1>
      <p className="text-slate-600 mb-8 max-w-lg">{t.hero.subtitle}</p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className={`rounded px-5 py-3 text-sm font-semibold text-white bg-${ACCENT}-600 hover:bg-${ACCENT}-700`}
        >
          {t.hero.ctaPrimary}
        </a>
        <a
          href="#how"
          className={`rounded px-5 py-3 text-sm font-semibold border bg-white hover:bg-${ACCENT}-50 border-${ACCENT}-200 text-${ACCENT}-700`}
        >
          {t.hero.ctaSecondary}
        </a>
      </div>

      <div className="mt-6 text-sm text-slate-500">
        {COMPANY.phone} · {COMPANY.email}
      </div>
    </div>

    {/* Right side image or future visual */}
    <div className="relative hidden md:block">
      <div className={`absolute -left-10 -top-10 h-64 w-64 rounded-full bg-${ACCENT}-100 blur-2xl`}></div>
      <div className="relative bg-slate-100 rounded-xl h-72 flex items-center justify-center text-slate-400">
        {/* Placeholder for future image / metrics */}
        Coming soon
      </div>
    </div>

  </div>
</section>

     </section>

      {/* ===== HOW WE HELP ===== */}
</section>  

/* ===== SERVICES / SOLUTIONS (3 cards) ===== */
<section id="services" className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8">{t.services.title}</h2>

    <div className="grid gap-6 md:grid-cols-3">
      {t.services.cards.slice(0, 3).map((card, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-3">{card.name}</h3>

          <ul className="space-y-2 text-slate-600">
            {card.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-2">
                <span
                  className={`mt-1 inline-block h-2 w-2 rounded-full bg-${ACCENT}-500`}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <a
        href="#contact"
        className={`inline-block rounded-xl px-5 py-3 text-sm font-semibold text-white bg-${ACCENT}-600 hover:bg-${ACCENT}-700`}
      >
        {t.hero.ctaPrimary}
      </a>
    </div>
  </div>
</section>
  
  {/* ===== RECENTLY BOUGHT (carousel) ===== */}
<section id="deals" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8">Recently Bought</h2>

    {(() => {
      const items = [
        {
          img: "/deals/1.jpg",
          type: "Subject-To",
          benefit: "Saved the seller from foreclosure",
        },
        {
          img: "/deals/2.jpg",
          type: "Subject-To",
          benefit: "Helped a family relocate without selling traditionally",
        },
        {
          img: "/deals/3.jpg",
          type: "Subject-To",
          benefit: "Took over payments when the seller had no equity",
        },
      ];

      return (
        <div className="relative">
          {/* Track */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 gap-4">
            {items.map((d, idx) => {
              const anchor = `deal-${idx + 1}`;
              return (
                <article
                  id={anchor}
                  key={anchor}
                  className="snap-center shrink-0 w-[88%] sm:w-[70%] md:w-[46%] lg:w-[32%] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200">
                    <img
                      src={d.img}
                      alt={d.type}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        // hide broken image; gradient will show
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-4">
                    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold text-${ACCENT}-700 border-${ACCENT}-200 bg-${ACCENT}-50`}>
                      {d.type}
                    </div>
                    <p className="mt-2 text-slate-700">{d.benefit}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, i) => {
              const anchor = `#deal-${i + 1}`;
              return (
                <a
                  key={anchor}
                  href={anchor}
                  className={`h-2 w-2 rounded-full border border-slate-300 hover:bg-${ACCENT}-400`}
                  aria-label={`Go to deal ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      );
    })()}
  </div>
</section>
  
      {/* CONTACT SECTION */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            {lang === "en" ? "Contact Us" : "Contáctanos"}
          </h2>
          <p className="text-slate-600 mb-4">
            {lang === "en"
              ? "Call, text or email anytime."
              : "Llámanos, mándanos un texto o correo cuando gustes."}
          </p>
          <div className="text-lg font-medium">
            <div>{COMPANY.phone}</div>
            <div>{COMPANY.email}</div>
            <div>{COMPANY.city}</div>
          </div>
        </div>
      </section>
  
  {/* ===== FOOTER ===== */}
<footer className="py-6 text-center text-xs text-slate-500">
  <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
  <p className="mt-1">{COMPANY.phone} • {COMPANY.email}</p>
</footer>
   </main>
  );
}
