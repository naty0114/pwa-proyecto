// Importar todos los componentes creados
import Perfil from "./components/Perfil";
import Clima from "./components/Clima";
import Pedido from "./components/Pedido";
import MensajeBienvenida from "./components/MensajeBienvenida";
import ListaHabilidades from "./components/ListaHabilidades";
import ListaProductos from "./components/ListaProductos";
import ListaTareas from "./components/ListaTareas";
import Tarjeta from "./components/Tarjeta";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fafafa",
      minHeight: "100vh"
    }}>
      
      {/* Título principal */}
      <h1 style={{
        textAlign: "center",
        color: "#2196f3",
        borderBottom: "3px solid #2196f3",
        paddingBottom: "10px",
        marginBottom: "30px"
      }}>
        📚 Laboratorio 2 - Fundamentos de React
      </h1>
      
      {/* Contenedor con grid para organizar mejor */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        gap: "20px"
      }}>
        
        {/* Ejercicio 1 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#2196f3",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 1: Perfil
          </div>
          <div style={{ padding: "15px" }}>
            <Perfil />
          </div>
        </div>
        
        {/* Ejercicio 2 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#ff9800",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 2: Clima
          </div>
          <div style={{ padding: "15px" }}>
            <Clima />
          </div>
        </div>
        
        {/* Ejercicio 3 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#4caf50",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 3: Pedido
          </div>
          <div style={{ padding: "15px" }}>
            <Pedido />
          </div>
        </div>
        
        {/* Ejercicio 4 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#9c27b0",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 4: Mensaje de Bienvenida
          </div>
          <div style={{ padding: "15px" }}>
            <MensajeBienvenida />
          </div>
        </div>
        
        {/* Ejercicio 5 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#f44336",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 5: Lista de Habilidades
          </div>
          <div style={{ padding: "15px" }}>
            <ListaHabilidades />
          </div>
        </div>
        
        {/* Ejercicio 6 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#00bcd4",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 6: Lista de Productos
          </div>
          <div style={{ padding: "15px" }}>
            <ListaProductos />
          </div>
        </div>
        
        {/* Ejercicio 7 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#8bc34a",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 7: Lista de Tareas
          </div>
          <div style={{ padding: "15px" }}>
            <ListaTareas />
          </div>
        </div>
        
        {/* Ejercicio 8 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            backgroundColor: "#e91e63",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 8: Tarjeta
          </div>
          <div style={{ padding: "15px" }}>
            <Tarjeta />
          </div>
        </div>
        
        {/* Ejercicio 9 */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          gridColumn: "span 2"
        }}>
          <div style={{
            backgroundColor: "#3f51b5",
            color: "white",
            padding: "10px 15px",
            fontWeight: "bold"
          }}>
            📌 Ejercicio 9: Dashboard
          </div>
          <div style={{ padding: "15px" }}>
            <Dashboard />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;