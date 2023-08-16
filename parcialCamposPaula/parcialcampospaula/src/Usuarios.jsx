function Usuarios({usuarios}){
    return (
        <div>
          {usuarios.map((usuario, index) => (
            <div key={index} className="card">
              <h2>Bienvenido/a</h2>
              <h3> {usuario.nombre} {usuario.apellido}</h3>
            </div>
          ))}
        </div>
      );
    }
export default Usuarios;