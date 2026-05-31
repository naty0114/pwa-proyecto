function Tarjeta() {
  
  const datos = {
    titulo: "React Avanzado",
    descripcion: "Aprende a construir aplicaciones web modernas con React, hooks, context API y más. Este curso incluye proyectos prácticos y ejercicios reales.",
    etiquetas: ["React", "JavaScript", "Frontend", "Hooks", "Context API"],
    destacado: true
  };

  return (
    <div style={{
      border: datos.destacado ? "2px solid #2196f3" : "1px solid #ccc",
      borderRadius: "12px",
      padding: "20px",
      margin: "10px",
      backgroundColor: datos.destacado ? "#e3f2fd" : "#ffffff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      maxWidth: "350px",
      fontFamily: "Arial, sans-serif"
    }}>
      
      
      <h3 style={{
        margin: "0 0 10px 0",
        color: "#333",
        borderBottom: "2px solid #eee",
        paddingBottom: "8px"
      }}>
        {datos.titulo}
      </h3>
      
      {/* Descripción */}
      <p style={{
        color: "#666",
        lineHeight: "1.5",
        marginBottom: "15px"
      }}>
        {datos.descripcion}
      </p>
      
      
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "15px"
      }}>
        {datos.etiquetas.map((etiqueta, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#e0e0e0",
              color: "#333",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold"
            }}
          >
            #{etiqueta}
          </span>
        ))}
      </div>
      
      
      {datos.destacado && (
        <div style={{
          backgroundColor: "#2196f3",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          textAlign: "center",
          fontSize: "12px",
          fontWeight: "bold"
        }}>
           CURSO DESTACADO
        </div>
      )}
    </div>
  );
}

export default Tarjeta;