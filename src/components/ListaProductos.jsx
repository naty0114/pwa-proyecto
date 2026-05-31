function ListaProductos() {
  // Array de objetos productos (al menos 5)
  const productos = [
    { id: 1, nombre: "Laptop", precio: 899.99, disponible: true },
    { id: 2, nombre: "Mouse", precio: 25.50, disponible: true },
    { id: 3, nombre: "Teclado", precio: 45.00, disponible: false },
    { id: 4, nombre: "Monitor", precio: 199.99, disponible: true },
    { id: 5, nombre: "Auriculares", precio: 79.90, disponible: false },
    { id: 6, nombre: "Webcam", precio: 59.99, disponible: true }
  ];

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px", borderRadius: "8px" }}>
      <h2>🛒 Lista de Productos</h2>
      
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#2196f3", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Nombre</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Precio</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{producto.nombre}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                ${producto.precio.toFixed(2)}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                <span style={{
                  color: producto.disponible ? "#4caf50" : "#f44336",
                  fontWeight: "bold"
                }}>
                  {producto.disponible ? "Disponible" : "Agotado"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;