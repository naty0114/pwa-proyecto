function Pedido() {
 
  const estado = "pendiente";

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h2>📦 Estado de tu Pedido</h2>
      
      {/* Mostrar ícono y mensaje según el estado usando operador ternario */}
      <p>
        
        {estado === "pendiente" && "⏳"}
        {estado === "enviado" && "🚚"}
        {estado === "entregado" && "✅"}
        {estado === "cancelado" && "❌"}
      </p>
      
      <p>
        <strong>Mensaje:</strong>{" "}
        {estado === "pendiente" && "Tu pedido está siendo procesado"}
        {estado === "enviado" && "Tu pedido está en camino"}
        {estado === "entregado" && "Tu pedido ha sido entregado"}
        {estado === "cancelado" && "Tu pedido fue cancelado"}
      </p>
      
      {/* Renderizado condicional con && - solo si el estado es 'enviado' */}
      {estado === "enviado" && (
        <p style={{ backgroundColor: "#e3f2fd", padding: "10px", borderRadius: "5px" }}>
          🕒 Tiempo estimado de entrega: 2-3 días hábiles
        </p>
      )}
    </div>
  );
}

export default Pedido;