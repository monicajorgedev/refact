import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import top from './top'
import './App.css'
import empleados from '../public/data'


function App() {
  // const [count, setCount] = useState(0)
  // const [agrupar, sumarMas] = useState(1)
  // const [contabilizar, quitar] = useState(0)


  
 
    
    var almacenamiento = [];
    for (var i = 0; i < empleados.length; i++) {
      almacenamiento.push(
        <div key={i}>
          <p>Nombre: {empleados[i].name}</p>
          <p>Apellidos: {empleados[i].lastName}</p>
          <p>Hobbies: {empleados[i].hobbies.join(', ')}</p>
          <p>Edad: {empleados[i].age}</p>
        </div>
      );
      
    }

    
    

    const suma = (numberOne, numberTwo) => {
      return numberOne +  numberTwo
    }
   
  return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    
    <div className="contenedor">
      <div className="empleados">{almacenamiento}</div>
      <div className="calculadora">
        <Form onSubmit={suma}> 
          <input type="number"
          placeholder='Introduce un nº'
          >
             <button>Aquí tiene que enviar algo para que funcione</button>
          </input>
          {suma(21,21)}
        </Form> 
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 
    </div>
    /* <pie /> */
  );{/*{cocreta} */}
}

export default App