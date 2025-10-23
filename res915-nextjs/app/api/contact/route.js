// app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const form = await req.formData();

    // simple bot honeypot (must be empty)
    if (form.get("company")) {
      return Response.json({ ok: true }); // silently ignore bots
    }

    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const phone = form.get("phone") || "";
    const address = form.get("address") || "";
    const city = form.get("city") || "";
    const state = form.get("state") || "";
    const zip = form.get("zip") || "";
    const condition = form.get("condition") || "";
    const timeline = form.get("timeline") || "";
    const price = form.get("price") || "";
    const notes = form.get("notes") || "";

    const subject = `Cash Offer Request — ${address || "New Lead"}`;

    const text = `
Name/Nombre: ${name}
Email: ${email}
Phone/Teléfono: ${phone}
Address/Dirección: ${address}
City/Ciudad: ${city}
State/Estado: ${state}
ZIP/Código Postal: ${zip}
Condition/Condición: ${condition}
Timeline/Tiempo: ${timeline}
Asking Price/Precio Deseado: ${price}

Notes/Notas:
${notes}
    `.trim();

    const html = `
      <h2>New Website Lead</h2>
      <p><b>Name/Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone/Teléfono:</b> ${phone}</p>
      <p><b>Address/Dirección:</b> ${address}</p>
      <p><b>City/Ciudad:</b> ${city}</p>
      <p><b>State/Estado:</b> ${state}</p>
      <p><b>ZIP/Código Postal:</b> ${zip}</p>
      <p><b>Condition/Condición:</b> ${condition}</p>
      <p><b>Timeline/Tiempo:</b> ${timeline}</p>
      <p><b>Asking Price/Precio Deseado:</b> ${price}</p>
      <hr />
      <p><b>Notes/Notas:</b></p>
      <p>${(notes || "").replace(/\n/g, "<br/>")}</p>
    `;

    // Use the Resend sandbox sender (works without domain verification)
    const send = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["jiacqventures@gmail.com"],
      reply_to: email || undefined,
      subject,
      text,
      html,
    });

    if (send.error) {
      console.error("Resend error:", send.error);
      return Response.json({ ok: false, error: "email_failed" }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
