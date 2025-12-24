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

    // Build the email body
    const body = `
      🏡 New Property Submission:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}, ${city}, ${state} ${zip}
      Condition: ${condition}
      Timeline: ${timeline}
      Price: ${price}
      Notes: ${notes}
    `;

    // Send email via Resend
    const data = await resend.emails.send({
      from: "RES915 <contact@res915.com>", // Must match your verified domain
      to: "jiacqventures@gmail.com",       // Your receiving inbox
      subject: "New Property Submission from RES915",
      text: body,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
