import Card from "@/components/Card";
import { getItems } from "@/lib/data";
import { subscribe } from "./actions";
import ProductCarousel from "@/components/ProductCarrousel";
export const revalidate = 60; // ISR

export default async function HomePage() {
  const items = await getItems();

  return (
    <>
      <h1>Catálogo</h1>
      <p className="muted">Regeneración automática cada 60s (ISR).</p>

      <section>
        <h2>Productos destacados</h2>
        <ProductCarousel items={items} />
      </section>

      <hr className="divider" />

      <section className="box">
        <h2>Suscríbete</h2>
        <form action={subscribe} className="form">
          <input
            type="email"
            name="email"
            required
            placeholder="tu@email.com"
            aria-label="Email"
          />
          <button type="submit">Enviar</button>
        </form>
        <p className="muted">Este form usa Server Actions.</p>
      </section>
    </>
  );
}
