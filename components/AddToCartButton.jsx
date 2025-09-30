"use client";

import { useCart } from "./CartContext";

export default function AddToCartButton({ item }) {
  const { addToCart } = useCart();

  return (
    <button className="add-btn" onClick={() => addToCart(item)}>
      ➕ Agregar al carrito
    </button>
  );
}
