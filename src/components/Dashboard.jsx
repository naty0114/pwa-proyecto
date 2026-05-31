function Dashboard() {
 
  const usuario = {
    nombre: "Ana García",
    email: "ana.garcia@example.com",
    rol: "Desarrolladora Frontend"
  };

 
  const notificaciones = [
    { id: 1, mensaje: "Tu proyecto fue aprobado", leida: false },
    { id: 2, mensaje: "Nuevo mensaje de tu equipo", leida: false },
    { id: 3, mensaje: "Actualización del sistema disponible", leida: true },
    { id: 4, mensaje: "Reunión programada para mañana", leida: false },
    { id: 5, mensaje: "Completa tu perfil", leida: true }
  ];

  
  const actividadReciente = [
    { id: 1, accion: "Actualizaste tu perfil", fecha: "Hace 2 horas" },
    { id: 2, accion: "Completaste un ejercicio", fecha: "Ayer" },
    { id: 3, accion: "Subiste un nuevo proyecto", fecha: "Hace 3 días" }
  ];

  
  const notificacionesNoLeidas = notificaciones.filter(n => !n.leida).length;

  return (
    <>
      
      <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5"
      }}>
        <h2>👤 Información del Usuario</h2>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
      </div>

      
      <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#fff8e1"
      }}>
        <h2>🔔 Notificaciones</h2>
        <p>
          <strong>📬 Notificaciones no leídas:</strong> {notificacionesNoLeidas}
        </p>
        
        {notificacionesNoLeidas === 0 ? (
          <p>✅ No tienes notificaciones pendientes</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {notificaciones.map((notificacion) => (
              <li
                key={notificacion.id}
                style={{
                  padding: "10px",
                  margin: "5px 0",
                  backgroundColor: notificacion.leida ? "#e0e0e0" : "#fff3e0",
                  borderRadius: "5px",
                  fontWeight: notificacion.leida ? "normal" : "bold",
                  opacity: notificacion.leida ? 0.7 : 1
                }}
              >
                {notificacion.mensaje}
                {!notificacion.leida && (
                  <span style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "12px",
                    fontSize: "11px",
                    marginLeft: "10px"
                  }}>
                    NUEVA
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* SECCIÓN 3 - ACTIVIDAD RECIENTE */}
      <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#e8f5e9"
      }}>
        <h2>📊 Actividad Reciente</h2>
        
        {actividadReciente.length === 0 ? (
          <p>📝 No hay actividad reciente</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {actividadReciente.map((actividad) => (
              <li
                key={actividad.id}
                style={{
                  padding: "8px",
                  margin: "5px 0",
                  borderBottom: "1px solid #ddd"
                }}
              >
                <strong>✓ {actividad.accion}</strong>
                <span style={{
                  color: "#666",
                  fontSize: "12px",
                  marginLeft: "10px"
                }}>
                  ({actividad.fecha})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dashboard;