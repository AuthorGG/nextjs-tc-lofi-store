"use client";

// Simulamos un módulo pesado (cálculo + efecto visual)
import { useEffect, useMemo } from "react";

export default function Heavy3D() {
  // Simula carga pesada en cliente
  const heavy = useMemo(() => {
    let s = 0;
    for (let i = 0; i < 8e6; i++) s += Math.sqrt(i % 97);
    return s;
  }, []);

  useEffect(() => {
    console.log("Heavy3D ready. sum=", heavy);
  }, [heavy]);

  return (
    <div className="heavy">
      <div className="heavy__box" />
      <p>Contenido 3D/visual cargado bajo demanda.</p>
    </div>
  );
}
