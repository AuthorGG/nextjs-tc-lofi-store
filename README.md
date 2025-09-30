🛒 TC LO-FI Store - Demo Next.js

Proyecto demo de e-commerce desarrollado con Next.js (App Router) y React para practicar y demostrar diferentes funcionalidades modernas de frontend.

👉 Deploy en Vercel: https://nextjs-tc-lofi-store.vercel.app/

🚀 Funcionalidades principales

📦 Catálogo de productos con datos mock.

⚡ ISR (Incremental Static Regeneration) → listado de productos con revalidate cada 60s.

🌐 SSR (Server-Side Rendering) → detalle de producto.

🛒 Carrito de compra con Context API (agregar, quitar, modificar cantidades, vaciar).

🎞️ Animaciones con Framer Motion (transiciones entre páginas).

🎠 Carrusel de productos relacionados (Swiper.js).

🖼️ Optimización de imágenes con next/image.

📩 Formulario de suscripción con Server Actions.

📊 Métricas de rendimiento con Web Vitals (LCP, CLS) y Lighthouse.

🛠️ Tecnologías utilizadas

Next.js 15+ (App Router)

React 18

CSS global con variables

Framer Motion (animaciones)

Swiper.js (carrusel)

Context API (React) (carrito global)

next/image (optimización de imágenes)

Web Vitals + Lighthouse (rendimiento y métricas)

Vercel (deploy continuo desde GitHub)

🧪 Testing

Para asegurar la calidad del código se añadieron pruebas:

✅ Unit tests con Jest + React Testing Library:

Card.test.jsx → valida que un Card renderice correctamente el título y el precio.

AddToCartButton.test.jsx → comprueba que el botón “Agregar al carrito” se renderiza y responde al click.

🔜 Futuro: pruebas E2E con Cypress para validar el flujo completo de compra.
📦 Instalación y ejecución

Clonar el repo:

git clone https://github.com/TuUsuario/nextjs-tc-lofi-store.git
cd nextjs-tc-lofi-store

Instalar dependencias:

npm install

Modo desarrollo:

npm run dev

Build para producción:

npm run build
npm start

Ejecutar tests:

npm test

📌 Próximos pasos

Mejorar diseño responsive.

Añadir notificaciones tipo toast para feedback del carrito.

Extender pruebas con Cypress (E2E).

Integrar pagos simulados para completar el flujo e-commerce.
