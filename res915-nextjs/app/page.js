"use client";

import { useMemo, useState } from "react";

const EMAIL = "jiacqventures@gmail.com";

export default function Home() {
  const [lang, setLang] = useState("en"); // "en" or "es"
  const t = useMemo(() => {
    return lang === "en"
      ? {
          title: "We Buy Houses Fast for Cash",
          subtitle: "Get a no-obligation cash offer today.",
          cta: "Get Cash Offer",
          name: "Your Name",
          email: "Your Email",
          phone: "Phone",
          address: "Property Address",
          city: "City",
          state: "State",
          zip: "ZIP",
          timeline: "Selling Timeline",
          condition: "Property Condition",
          price: "Asking Price",
          details: "Tell us about the property",
          sendingTo: "This sends us an email. No account needed.",
          toggle: "Español",
          successNote:
            "Your email app will open with all the info pre-filled. Just hit Send."
        }
      : {
          title: "¡Compramos Casas Rápido en Efectivo!",
          subtitle: "Obtén una oferta en efectivo sin compromiso hoy.",
          cta: "Obtener Oferta en Efectivo",
          name: "Tu Nombre",
          email: "Tu Correo",
          phone: "Teléfono",
          address: "Dirección de la Propiedad",
          city: "Ciudad",
          state: "Estado",
          zip: "C.P.",
          timeline: "Tiempo para Vender",
          condition: "Condición de la Propiedad",
          price: "Precio Deseado",
          details: "Cuéntanos sobre la propiedad",
          sendingTo: "Esto nos envía un correo. No necesitas cuenta.",
          toggle: "English",
          successNote:
            "Se abrirá tu app de correo con la info lista. Solo envía."
        };
  }, [lang]);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const fields = {
      name: fd.get("name") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      address: fd.get("address") || "",
      city: fd.get("city") || "",
      state: fd.get("state") || "",
      zip: fd.get("zip") || "",
      timeline: fd.get("timeline") || "",
      condition: fd.get("condition") || "",
      price: fd.get("price") || "",
      details: fd.get("details") || ""
    };

    const subject =
      lang === "en"
        ? "RES915 Cash Offer Request"
        : "Solicitud de Oferta en Efectivo - RES915";

    const bodyLines =
      lang === "en"
        ? [
            "Cash Offer Request",
            "-------------------",
            `Name: ${fields.name}`,
            `Email: ${fields.email}`,
            `Phone: ${fields.phone}`,
            `Address: ${fields.address}`,
            `City/State/ZIP: ${fields.city}, ${fields.state} ${fields.zip}`,
            `Timeline: ${fields.timeline}`,
            `Condition: ${fields.condition}`,
            `Asking Price: ${fields.price}`,
            "",
            "Details:",
            fields.details
          ]
        : [
            "Solicitud de Oferta en Efectivo",
            "-------------------------------",
            `Nombre: ${fields.name}`,
            `Correo: ${fields.email}`,
            `Teléfono: ${fields.phone}`,
            `Dirección: ${fields.address}`,
            `Ciudad/Estado/C.P.: ${fields.city}, ${fields.state} ${fields.zip}`,
            `Tiempo para vender: ${fields.timeline}`,
            `Condición: ${fields.condition}`,
            `Precio deseado: ${fields.price}`,
            "",
            "Detalles:",
            fields.details
          ];

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Open the user's email client with the prefilled message
    window.location.href = mailto;
  }

  return (
    <main style={{ maxWidth: 900, margin: "60px auto", padding: "0 16px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <h1 style={{ fontSize: 32, margin: 0 }}>RES915</h1>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          style={{
            border: "1px solid #ddd",
            background: "#fff",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          {t.toggle}
        </button>
      </header>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 28, margin: "0 0 6px" }}>{t.title}</h2>
        <p style={{ color: "#555", marginTop: 0 }}>{t.subtitle}</p>
      </section>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          background: "#fff",
          padding: 16,
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
        }}
      >
        <input name="name" placeholder={t.name} required />
        <input name="email" type="email" placeholder={t.email} required />
        <input name="phone" placeholder={t.phone} />
        <input name="address" placeholder={t.address} required />
        <input name="city" placeholder={t.city} />
        <input name="state" placeholder={t.state} />
        <input name="zip" placeholder={t.zip} />
        <input name="timeline" placeholder={t.timeline} />
        <input name="condition" placeholder={t.condition} />
        <input name="price" placeholder={t.price} />

        <textarea
          name="details"
          placeholder={t.details}
          style={{ gridColumn: "1 / -1", minHeight: 120 }}
        />

        <button
          type="submit"
          style={{
            gridColumn: "1 / -1",
            padding: "12px 16px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            fontSize: 16
          }}
        >
          {t.cta}
        </button>

        <p style={{ gridColumn: "1 / -1", color: "#666", fontSize: 13, margin: 0 }}>
          {t.sendingTo} ({EMAIL}) — {t.successNote}
        </p>
      </form>

      {/* quick styles so inputs look decent without Tailwind */}
      <style jsx>{`
        input,
        textarea {
          width: 100%;
          padding: 12px 10px;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
        }
        input:focus,
        textarea:focus {
          border-color: #999;
        }
      `}</style>
    </main>
  );
}
