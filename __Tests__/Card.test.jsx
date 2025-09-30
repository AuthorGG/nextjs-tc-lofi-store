import { render, screen } from "@testing-library/react";
import Card from "@/components/Card";

const mockItem = {
  id: "1",
  title: "Auriculares TC LOFI",
  price: 29.99,
  image: "/items/tc-lofi-headphones.jpg",
};

describe("Card component", () => {
  it("renders product title and price", () => {
    render(<Card item={mockItem} />);

    // Verifica que el título esté en pantalla
    expect(screen.getByText(/Auriculares TC LOFI/i)).toBeInTheDocument();

    // Verifica que el precio esté renderizado
    expect(screen.getByText(/29.99/)).toBeInTheDocument();
  });
});
