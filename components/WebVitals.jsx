"use client";

import { useEffect } from "react";

export default function WebVitals() {
  useEffect(() => {
    (async () => {
      const { onCLS, onLCP } = await import("web-vitals");
      const send = async (metric) => {
        console.log(`[WebVitals] ${metric.name}:`, metric.value);
        try {
          await fetch("/api/vitals", {
            method: "POST",
            keepalive: true,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(metric),
          });
        } catch {}
      };
      onCLS(send);
      onLCP(send);
    })();
  }, []);

  return null;
}
