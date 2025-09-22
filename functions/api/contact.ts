// functions/api/contact.ts
export const onRequestPost: PagesFunction = async (ctx) => {
  const data = await ctx.request.formData();
  const name = String(data.get("name") || "");
  const email = String(data.get("email") || "");
  const message = String(data.get("message") || "");
  const honeypot = String(data.get("company") || "");

  if (honeypot) return new Response("OK", { status: 200 }); // silent drop
  if (!name || !email || !message) return new Response("Missing fields", { status: 400 });

  console.log({ name, email, message, ts: Date.now() });
  return new Response("Thanks! We’ll be in touch.", { status: 200 });
};
