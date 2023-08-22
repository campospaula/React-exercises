import { useEffect, useState } from "react";

const Pedido = ({ showPizza, setShowPizza }) => {

useEffect(() => {

    setTimeout(function () {
    setShowPizza(true);
    console.log("El componente fue actualizado.");
    }, 2000);

});

return showPizza && <h3>Pizza Napolitana c/ jamón cocido</h3>;
};

export default Pedido;





