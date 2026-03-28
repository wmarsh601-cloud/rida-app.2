"use client";

import { useState } from "react";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <main style={{ padding: 20 }}>
      <h1>🚗 RIDA APP</h1>

      <div style={{ marginTop: 20 }}>
        <input
          placeholder="📍 Punto de recogida"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          style={{ display: "block", marginBottom: 10, padding: 10, width: "100%" }}
        />

        <input
          placeholder="🏁 Destino"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ display: "block", marginBottom: 10, padding: 10, width: "100%" }}
        />

        <button
          style={{
            padding: 15,
            width: "100%",
            background: "black",
            color: "white",
            fontSize: 16,
          }}
        >
          Pedir viaje 🚀
        </button>
      </div>
    </main>
  );
}
