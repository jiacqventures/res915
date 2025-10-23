'use client';

import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState('en');
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '',
    condition: '', timeline: '', price: '',
    notes: '',
  });

  const i18n = {
    en: {
      brand: 'RES915',
      toggle: 'Español',
      heroTitle: 'We Buy Houses Fast for Cash',
      heroSub: 'Skip repairs, fees, and uncertainty. Get a no-obligation cash offer today.',
      ctas: { top: 'Get Cash Offer', form: 'Get Cash Offer' },
      trust: [
        { h: 'No Repairs', p: 'Sell as-is. We handle the work.' },
        { h: 'No Fees', p: 'No commissions or closing costs.' },
        { h: 'Fast Close', p: 'You choose the date.' },
      ],
      stepsTitle: 'How It Works',
      steps: [
        { n: '1', t: 'Tell us about the property' },
        { n: '2', t: 'Get a cash offer' },
        { n: '3', t: 'Close on your timeline' },
      ],
      recentTitle: 'Recent Deals',
      faqTitle: 'FAQ',
      faqs: [
        { q: 'Do I need to clean or repair?', a: 'No. We buy as-is and handle everything after closing.' },
        { q: 'How fast can we close?', a: 'Often 7–14 days, or on your preferred date.' },
        { q: 'Are there any fees or commissions?', a: 'No agent fees or hidden costs.' },
      ],
      fields: {
        name: 'Your Name', email: 'Your Email', phone: 'Phone',
        address: 'Property Address', city: 'City', state: 'State', zip: 'ZIP',
        condition: 'Property Condition', timeline: 'Selling Timeline', price: 'Asking Price',
        notes: 'Tell us about the property',
      },
      note:
        "This sends us an email. No account needed. (jiacqventures@gmail.com) — Your email app will open with all the info pre-filled. Just hit Send.",
      footer: `© ${new Date().getFullYear()} RES915. All rights reserved.`,
    },
    es: {
      brand: 'RES915',
      toggle: 'English',
      heroTitle: '¡Compramos casas rápido y en efectivo!',
      heroSub: 'Sin reparaciones, sin comisiones y sin incertidumbre. Obtén una oferta hoy.',
      ctas: { top: 'Obtener oferta en efectivo', form: 'Obtener oferta en efectivo' },
      trust: [
        { h: 'Sin Reparaciones', p: 'Vende tal como está. Nosotros nos encargamos.' },
        { h: 'Sin Comisiones', p: 'Sin cargos ni costos ocultos.' },
        { h: 'Cierre Rápido', p: 'Tú eliges la fecha.' },
      ],
      stepsTitle: 'Cómo Funciona',
      steps: [
        { n: '1', t: 'Cuéntanos sobre la propiedad' },
        { n: '2', t: 'Recibe una oferta en efectivo' },
        { n: '3', t: 'Cierra en tu tiempo' },
      ],
      recentTitle: 'Casos Recientes',
      faqTitle: 'Preguntas Frecuentes',
      faqs: [
        { q: '¿Debo limpiar o reparar?', a: 'No. Compramos tal como está y manejamos todo después del cierre.' },
        { q: '¿Qué tan rápido cerramos?', a: 'A menudo 7–14 días, o en tu fecha preferida.' },
        { q: '¿Hay comisiones o tarifas?', a: 'No hay comisiones de agente ni costos ocultos.' },
      ],
      fields: {
        name: 'Tu Nombre', email: 'Tu Correo', phone: 'Teléfono',
        address: 'Dirección de la Propiedad', city: 'Ciudad', state: 'Estado', zip: 'Código Postal',
        condition: 'Condición de la Propiedad', timeline: 'Tiempo para Vender', price: 'Precio Deseado',
        notes: 'Cuéntanos sobre la propiedad',
      },
      note:
        "Esto nos envía un correo. No necesitas cuenta. (jiacqventures@gmail.com) — Tu app de correo se abrirá con todo pre-llenado. Solo envíalo.",
      footer: `© ${new Date().getFullYear()} RES915. Todos los derechos reservados.`,
    },
  }[lang];

  const deals = [
    { src: '/deals/1.jpg', caption: 'El Paso — As-Is, 7-day close' },
    { src: '/deals/2.jpg', caption: 'Las Cruces — Tenant in place' },
    { src: '/deals/3.jpg', caption: 'Socorro — Cosmetic repairs' },
  ];

  function updateField(k, v) { setForm((f) => ({ ...f, [k]: v })); }

      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tight">RES915</div>
        <button
          onClick={() => setLang((l) => (l === 'en' ? 'es' : 'en'))}
          className="text-sm rounded-full border px-3 py-1 hover:bg-neutral-200"
        >
          {i18n.toggle}
        </button>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-2 pb-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">{i18n.heroTitle}</h1>
            <p className="mt-3 text-neutral-600">{i18n.heroSub}</p>
            <a
              href="#offer"
              className="inline-block mt-5 rounded-xl bg-black px-5 py-3 text-white font-semibold hover:bg-black/90"
            >
              {i18n.ctas.top}
            </a>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {i18n.trust.map((it, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-4 shadow-sm border">
                  <div className="font-semibold">{it.h}</div>
                  <div className="text-sm text-neutral-600">{it.p}</div>
                </div>
              ))}
            </div>
          </div>

          {/* simple hero image using an existing deal photo if present */}
          <div className="hidden md:block">
            <img
              src="/deals/1.jpg"
              alt="RES915 example property"
              className="w-full rounded-2xl border shadow-sm object-cover h-72"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        <h2 className="text-xl font-bold mb-3">{i18n.stepsTitle}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {i18n.steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-white p-5 shadow-sm border">
              <div className="text-sm text-neutral-500">Step {s.n}</div>
              <div className="mt-1 font-semibold">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Deals gallery */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        <h2 className="text-xl font-bold mb-3">{i18n.recentTitle}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {deals.map((d, i) => (
            <figure key={i} className="rounded-2xl overflow-hidden border bg-white shadow-sm">
              <img src={d.src} alt={d.caption} className="w-full h-44 object-cover" />
              <figcaption className="p-3 text-sm text-neutral-700">{d.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Offer Form */}
      <section id="offer" className="max-w-6xl mx-auto px-4 pb-10">
<form
  action="/api/contact"
  method="POST"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;

    const res = await fetch("/api/contact", {
      method: "POST",
      body: new FormData(form),
    });

    btn.disabled = false;

    if (res.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  }}
  className="rounded-2xl bg-white p-6 shadow-sm border"
>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label={i18n.fields.name} value={form.name} onChange={(v) => updateField('name', v)} />
            <Field label={i18n.fields.email} value={form.email} onChange={(v) => updateField('email', v)} />
            <Field label={i18n.fields.phone} value={form.phone} onChange={(v) => updateField('phone', v)} />
            <Field label={i18n.fields.address} value={form.address} onChange={(v) => updateField('address', v)} />
            <Field label={i18n.fields.city} value={form.city} onChange={(v) => updateField('city', v)} />
            <Field label={i18n.fields.state} value={form.state} onChange={(v) => updateField('state', v)} />
            <Field label={i18n.fields.zip} value={form.zip} onChange={(v) => updateField('zip', v)} />
            <Field label={i18n.fields.timeline} value={form.timeline} onChange={(v) => updateField('timeline', v)} />
            <Field label={i18n.fields.condition} value={form.condition} onChange={(v) => updateField('condition', v)} />
            <Field label={i18n.fields.price} value={form.price} onChange={(v) => updateField('price', v)} />
          </div>

          <div className="mt-3">
            <label className="sr-only">{i18n.fields.notes}</label>
            <textarea
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
              rows={5}
              placeholder={i18n.fields.notes}
              value={form.notes}
              onChange={(e) => updateField('notes', e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-black px-4 py-3 text-white font-semibold hover:bg-black/90"
          >
            {i18n.ctas.form}
          </button>

          <p className="mt-3 text-xs text-neutral-500">{i18n.note}</p>
        </form>
      </section>

      {/* FAQs */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-3">{i18n.faqTitle}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {i18n.faqs.map((f, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-5 shadow-sm border">
              <div className="font-semibold">{f.q}</div>
              <div className="text-sm text-neutral-600 mt-1">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-600">
          {i18n.footer}
        </div>
      </footer>
    </main>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="sr-only">{label}</label>
      <input
        className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
