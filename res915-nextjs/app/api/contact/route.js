export async function POST(req) {
  const entries = await req.json();
  // Build the mailto link dynamically
  const subject = encodeURIComponent(`New Property Submission from ${entries.name || "Seller"}`);
  const body = encodeURIComponent(
    `
Name: ${entries.name}
Email: ${entries.email}
Phone: ${entries.phone}

Address: ${entries.address}, ${entries.city}, ${entries.state}, ${entries.zip}

Condition: ${entries.condition}
Timeline: ${entries.timeline}
Asking Price: ${entries.price}

Notes:
${entries.notes}
    `
  );

  // Redirect to open user's email app
  const mailto = `mailto:jiacqventures@gmail.com?subject=${subject}&body=${body}`;
return Response.redirect(mailto, 302);
}
