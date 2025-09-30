import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getItemById, getItems } from "@/lib/data";
import ProductCarousel from "@/components/ProductCarrousel";
import AddToCartButton from "@/components/AddToCartButton";

export const dynamic = "force-dynamic";

export default async function ItemPage({ params }) {
  const item = await getItemById(params.id);

  if (!item) return notFound();

  const allItems = await getItems();
  const related = allItems.filter((i) => i.id !== params.id);

  return (
    <div className="container">
      <Link href="/" className="back">
        &larr; Volver
      </Link>

      <article className="detail">
        <div className="detail__media">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            className="detail__img"
            priority
          />
        </div>

        <div className="detail__body">
          <h1>{item.title}</h1>
          <p className="price">€ {item.price.toFixed(2)}</p>
          <p>{item.description}</p>

          <AddToCartButton item={item} />
        </div>
      </article>
      <hr className="divider" />
      <section className="box">
        <h2>Productos relacionados</h2>
        <ProductCarousel items={related} />
      </section>
    </div>
  );
}
