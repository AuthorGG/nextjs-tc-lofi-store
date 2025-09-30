import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "@/components/CartContext";
import AddToCartButton from "@/components/AddToCartButton";

const mockItem = { id: "1", title: "Auriculares TC LOFI", price: 29.99 };

describe("AddToCartButton", () => {
  it("renders button and allows click", () => {
    render(
      <CartProvider>
        <AddToCartButton item={mockItem} />
      </CartProvider>
    );

    const button = screen.getByRole("button", { name: /Agregar al carrito/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    // Como prueba mínima: el botón sigue existiendo después del click
    expect(button).toBeEnabled();
  });
});
