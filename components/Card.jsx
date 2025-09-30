import Image from "next/image";
import Link from "next/link";

export default function Card({ item }) {
  return (
    <article className="card">
      <Link href={`/items/${item.id}`} className="card__link">
        <div className="card__media">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 600px) 100vw, 33vw"
            className="card__img"
          />
        </div>
        <div className="card__body">
          <h3>{item.title}</h3>
          <p className="muted">€ {item.price.toFixed(2)}</p>
        </div>
      </Link>
    </article>
  );
}
