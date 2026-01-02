import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    console.log("📨 Contact form API called!");

    const formData = await req.json();
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      zip,
      condition,
      timeline,
      price,
      notes,
    } = formData;

    const body = `
🏠 New Property Submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}, ${city}, ${state} ${zip}
Condition: ${condition}
Timeline: ${timeline}
Price: ${price}
Notes: ${notes}
`;

    console.log("⚡ Sending email via Resend...");

    const data = await resend.emails.send({
      from: "RES915 <send@res915.com>",
      to: "jiacqventures@gmail.com",
      subject: "New Property Submission from RES915",
      text: body,
    });

    console.log("✅ Resend response:", data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ Resend error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
