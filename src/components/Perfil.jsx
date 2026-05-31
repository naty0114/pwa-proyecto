function Perfil() {
  
  const nombre = "Ana García";
  const profesion = "Desarrolladora Frontend";
  const experiencia = 5;
  const disponible = true;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h2>{nombre}</h2>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Experiencia:</strong> {experiencia} años</p>
      <p>
        <strong>Estado:</strong>{" "}
        {disponible ? "Disponible para contratar" : "No disponible"}
      </p>
    </div>
  );
}

export default Perfil;