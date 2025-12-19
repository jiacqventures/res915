import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
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
New Property Submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}, ${city}, ${state}, ${zip}
Condition: ${condition}
Timeline: ${timeline}
Asking Price: ${price}
Notes: ${notes}
`;

    // Send email using Resend
    await resend.emails.send({
      from: "RES915 <onboarding@resend.dev>",
      to: "jiacqventures@gmail.com",
      subject: `New Property Submission from ${name || "Seller"}`,
      text: body,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
