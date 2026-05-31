function MensajeBienvenida() {

  const usuario = { nombre: "Carlos", rol: "admin" };
  
  
    return (
      <div style={{ border: "1px solid #ff9800", padding: "20px", margin: "10px", borderRadius: "8px", backgroundColor: "#fff3e0" }}>
        <h2>🔐 Mensaje de Bienvenida</h2>
        <p>⚠️ Por favor, inicia sesión para continuar</p>
      </div>
    );
  }
  
  
  return (
    <div style={{ border: "1px solid #4caf50", padding: "20px", margin: "10px", borderRadius: "8px", backgroundColor: "#e8f5e9" }}>
      <h2>👋 Bienvenido, {usuario.nombre}</h2>
      <p><strong>📌 Rol:</strong> {usuario.rol}</p>
      
      
      {usuario.rol === "admin" && (
        <p style={{ backgroundColor: "#2196f3", color: "white", padding: "10px", borderRadius: "5px" }}>
          🔑 Tienes acceso completo al sistema
        </p>
      )}
    </div>
  );
}

export default MensajeBienvenida;