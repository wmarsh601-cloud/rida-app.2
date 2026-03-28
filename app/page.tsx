const handleRide = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ride`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pickup,
        destination,
      }),
    });

    const data = await res.json();
    console.log(data);

    alert("🚗 Viaje solicitado!");
  } catch (err) {
    console.error(err);
    alert("Error al pedir viaje");
  }
};
