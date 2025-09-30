// Datos mock para el demo
export const items = [
  {
    id: "1",
    title: "Auriculares Lofi",
    price: 29.99,
    image: "/items/headphones.png",
    description:
      "Auriculares ligeros para sesiones de foco. Buen balance y comodidad.",
  },
  {
    id: "2",
    title: "Taza TC Cloud",
    price: 12.5,
    image: "/items/coffeecup.png",
    description:
      "Taza cerámica para café o té. Apta para microondas y lavavajillas.",
  },
  {
    id: "3",
    title: "Vinilo TC LOFI",
    price: 19.99,
    image: "/items/vinyl.png",
    description:
      "Vinilo coleccionable con beats exclusivos para relajarte y estudiar.",
  },
  {
    id: "4",
    title: "Sudadera TC LOFI",
    price: 39.99,
    image: "/items/sudadera.png",
    description:
      "Sudadera negra con bordado TC LOFI. Cálida, cómoda y estilosa.",
  },
  {
    id: "5",
    title: "Mousepad TC LOFI",
    price: 14.99,
    image: "/items/mousepad.png",
    description:
      "Mousepad XL para setup gamer o de programación, con acabado suave y base antideslizante.",
  },
  {
    id: "6",
    title: "TC LOGO T-Shirt",
    price: 14.99,
    image: "/items/camiseta.png",
    description: "Camisetra de TC LOFI. Estilo y comodidad.",
  },
];

export async function getItems() {
  // Simula latencia
  await new Promise((r) => setTimeout(r, 80));
  return items;
}

export async function getItemById(id) {
  await new Promise((r) => setTimeout(r, 40));
  return items.find((i) => i.id === id);
}
