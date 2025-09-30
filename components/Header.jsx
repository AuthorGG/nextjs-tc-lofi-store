"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="site-header">
      <nav className="container nav-bar">
        <Link href="/" className="brand">
          <Image
            src="/logo1.png"
            alt="Logo TC LOFI"
            width={120}
            height={40}
            priority
          />
        </Link>

        <h1 className="welcome-text">Bienvenid@ a TC LO-FI Store</h1>

        <Link href="/cart" className="cart-link">
          🛒 Carrito ({cart.reduce((sum, i) => sum + i.qty, 0)})
        </Link>
      </nav>
    </header>
  );
}
