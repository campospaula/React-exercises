import { useState } from 'react'
import Card from "./Card";
import Usuarios from "./Usuarios";
import './App.css'

function App() {
  const [usuarios,setUsuarios]=useState([]);

  const addUser= (user) => {
    setUsuarios([...usuarios,user]);
    console.log(usuarios)
  };
  return (
    <div className="App">
    <h1>Carga de usuarios</h1>
    <Card onAddUser={addUser}/>
    <Usuarios usuarios={usuarios}/>
    </div>
    );
    }
    export default App;
