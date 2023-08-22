import { useState } from "react";
import Pedido from "./Pedido";
import "./App.css";

function App() {
  const [showPizza, setShowPizza] = useState(false);

  function cancelar(e) {
    e.preventDefault();
    setShowPizza(false);
    console.log("El componente fue desmontado.");
    alert("El pedido fue cancelado.")
  }

  return (
    <>
      <h1>Solicitud de Pedido:</h1>

      <Pedido showPizza={showPizza} setShowPizza={setShowPizza} />

      <button onClick={cancelar}>Cancelar pedido</button>
      
    </>
  );
}

export default App;
