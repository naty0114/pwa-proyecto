function ListaTareas() {

  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: false, prioridad: "alta" },
    { id: 2, titulo: "Hacer ejercicio", completada: true, prioridad: "media" },
    { id: 3, titulo: "Comprar comida", completada: false, prioridad: "alta" },
    { id: 4, titulo: "Leer un libro", completada: true, prioridad: "baja" },
    { id: 5, titulo: "Terminar laboratorio", completada: false, prioridad: "alta" },
    { id: 6, titulo: "Llamar a mamá", completada: false, prioridad: "media" },
    { id: 7, titulo: "Organizar escritorio", completada: true, prioridad: "baja" },
    { id: 8, titulo: "Actualizar CV", completada: false, prioridad: "media" }
  ];

  const tareasPendientes = tareas.filter(tarea => !tarea.completada);
  
  const tareasCompletadas = tareas.filter(tarea => tarea.completada);

  const obtenerColorPrioridad = (prioridad) => {
    if (prioridad === "alta") return "#f44336"; // rojo
    if (prioridad === "media") return "#ff9800"; // naranja
    return "#4caf50"; // verde para baja
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h2>📋 Lista de Tareas</h2>
      

      <div style={{ marginBottom: "30px" }}>
        <h3>⏳ Tareas Pendientes ({tareasPendientes.length})</h3>
        
        {tareasPendientes.length === 0 ? (
          <p>✅ No hay tareas pendientes. ¡Felicidades!</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {tareasPendientes.map((tarea) => (
              <li 
                key={tarea.id}
                style={{
                  backgroundColor: "#fff3e0",
                  margin: "8px 0",
                  padding: "10px",
                  borderRadius: "5px",
                  borderLeft: `5px solid ${obtenerColorPrioridad(tarea.prioridad)}`
                }}
              >
                <strong>{tarea.titulo}</strong>
                <span style={{
                  backgroundColor: obtenerColorPrioridad(tarea.prioridad),
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  marginLeft: "10px"
                }}>
                  {tarea.prioridad}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      
      <div>
        <h3>✅ Tareas Completadas ({tareasCompletadas.length})</h3>
        
        {tareasCompletadas.length === 0 ? (
          <p>📝 No hay tareas completadas aún. ¡A trabajar!</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {tareasCompletadas.map((tarea) => (
              <li 
                key={tarea.id}
                style={{
                  backgroundColor: "#e8f5e9",
                  margin: "8px 0",
                  padding: "10px",
                  borderRadius: "5px",
                  textDecoration: "line-through",
                  opacity: 0.7
                }}
              >
                {tarea.titulo}
                <span style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  marginLeft: "10px"
                }}>
                  {tarea.prioridad}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListaTareas;