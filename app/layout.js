import "./globals.css";
import { CartProvider } from "@/components/CartContext";

import Header from "@/components/Header";

export const metadata = {
  title: "Mini Catálogo | Next Demo",
  description: "Demo Next.js App Router (ISR, SSR, Server Actions, Motion)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Header />
          <main className="container">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
