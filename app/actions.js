"use server";

import { revalidatePath } from "next/cache";

export async function subscribe(formData) {
  const email = formData.get("email");
  // Aquí guardarías en DB/servicio externo.
  console.log("[subscribe] email:", email);

  // Revalida la home si quieres mostrar un mensaje o contador
  revalidatePath("/");
  return { ok: true, message: "¡Gracias por suscribirte!" };
}
