function ListaHabilidades() {
  
  const habilidades = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "Git",
    "TypeScript",
    "HTML5",
    "Python"
  ];

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h2>🛠️ Habilidades Técnicas</h2>
      
      
      <p><strong>Total de habilidades:</strong> {habilidades.length}</p>
      
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {habilidades.map((habilidad, index) => (
          <li 
            key={index} 
            style={{
              backgroundColor: "#f0f0f0",
              margin: "5px 0",
              padding: "8px",
              borderRadius: "4px",
              display: "inline-block",
              width: "200px",
              textAlign: "center"
            }}
          >
            ✓ {habilidad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaHabilidades;