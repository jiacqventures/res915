import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const form = await req.formData();
    const name = form.get('name') || '';
    const email = form.get('email') || '';
    const phone = form.get('phone') || '';
    const address = form.get('address') || '';
    const message = form.get('message') || '';

    await resend.emails.send({
      from: 'Leads <onboarding@resend.dev>',
      to: 'jiacqventures@gmail.com',
      subject: `New lead from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Property Address:</strong> ${address}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response('Error sending email', { status: 500 });
  }
}
