export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>🚗 RIDA APP</h1>

      <input
        placeholder="Punto de recogida"
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />

      <input
        placeholder="Destino"
        style={{ display: "block", marginBottom: 10, width: "100%" }}
      />

      <button style={{ width: "100%" }}>
        Pedir viaje 🚀
      </button>
    </main>
  );
}
