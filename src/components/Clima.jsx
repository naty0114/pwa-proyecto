function Clima() {
  
  const temperatura = 22;

  
  let sensacion = "";
  let recomendacion = "";

  if (temperatura < 15) {
    sensacion = "frío";
    recomendacion = " Lleva abrigo";
  } else if (temperatura >= 15 && temperatura <= 25) {
    sensacion = "agradable";
    recomendacion = " Disfruta el día";
  } else {
    sensacion = "caluroso";
    recomendacion = " Mantente hidratado";
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h2>📊 Reporte del Clima</h2>
      <p><strong> Temperatura actual:</strong> {temperatura}°C</p>
      <p><strong> Sensación térmica:</strong> {sensacion}</p>
      <p><strong> Recomendación:</strong> {recomendacion}</p>
    </div>
  );
}

export default Clima;