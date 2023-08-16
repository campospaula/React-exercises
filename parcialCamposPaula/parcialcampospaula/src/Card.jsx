import { useState } from "react";
import React from "react";

const Card = ({ onAddUser }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombreInput = nombre.trim();
        const apellidoInput = apellido.trim();

        if (nombreInput.length < 3 || /^\s/.test(nombreInput) || apellidoInput.length < 3 || /^\s/.test(apellidoInput)) {
            setErrorMessage("Por favor chequea que la información sea correcta"); 
        } else {
            onAddUser({ nombre: nombreInput, apellido: apellidoInput });
            setNombre("");
            setApellido("");
            setErrorMessage(""); 
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {errorMessage && <p>{errorMessage}</p>}
                <div className="form-group">
                    <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /> 
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                    <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default Card;



