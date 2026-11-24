// Contact form integration point.
// Paste your form endpoint here (Formspree, Getform, your own API, etc.).
// While this is empty, the site clearly tells visitors the form is not connected yet.
export const FORM_ENDPOINT = "";

export async function submitForm(data) {
  if (!FORM_ENDPOINT) return { ok: false, reason: "not-configured" };
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok ? { ok: true } : { ok: false, reason: "error" };
  } catch {
    return { ok: false, reason: "error" };
  }
}