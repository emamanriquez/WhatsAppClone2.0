import React, { useState } from "react"; 
import './App.css'






function App() {

  const [username, setUsername] = useState(""); // es para almacenar el usuario ingresaso y setUsername actualiza el estado


  const handleUsernameChange = (event) => { // actualiza el valor actual del campo de entrada de nombre de usuario cada vez que el usuario modifica sel valor
    setUsername(event.target.value);
  };

  return (
    <>
      <div>
       <h1 className='text-2xl text-center mb-4'>Iniciar Sesion</h1>
       <input
       type="text"
       value={username}
       onChange={handleUsernameChange}
       placeholder="Usuario"
       className="w-full px-4 py-2 border rounded-md mb-4"
       />

       <button>Iniciar sesion</button>
      </div>
      
    </>
  )
}

export default App;
