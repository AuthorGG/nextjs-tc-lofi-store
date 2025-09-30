"use client";

import { useCart } from "@/components/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1>Tu carrito está vacío 🛒</h1>
        <Link href="/" className="back">
          &larr; Volver a la tienda
        </Link>
      </div>
    );
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="container">
      <h1>🛒 Tu carrito</h1>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant.</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="cart-product">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  style={{ borderRadius: "8px" }}
                />
                <span>{item.title}</span>
              </td>
              <td>
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="qty-btn"
                >
                  ➖
                </button>
                <span className="qty">{item.qty}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="qty-btn"
                >
                  ➕
                </button>
              </td>
              <td>€ {item.price.toFixed(2)}</td>
              <td>€ {(item.qty * item.price).toFixed(2)}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="divider" />

      <div className="cart-summary">
        <p>
          <strong>Total: € {total.toFixed(2)}</strong>
        </p>
        <button className="clear-btn" onClick={clearCart}>
          🧹 Vaciar carrito
        </button>
      </div>

      <Link href="/" className="back">
        &larr; Seguir comprando
      </Link>
    </div>
  );
}
