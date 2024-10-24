import React from 'react';
import Calculadora from './calculadora';
import './App.css';
import Header from './header';
import Footer from './footer';
import empleados from './assets/data/empleados';


function App() {
 
  //crea un array con los datos de los empleados
    var almacenamiento = [];
    for (var i = 0; i < empleados.length; i++) {
      almacenamiento.push(
        <div className="card" key={i}>
          <p>Nombre: {empleados[i].name}</p>
          <p>Apellidos: {empleados[i].lastName}</p>
          <p>Hobbies: {empleados[i].hobbies.join(', ')}</p>
          <p>Edad: {empleados[i].age}</p>
        </div>
      );
    }

  return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    <>
    <div className="contenedor">
    <Header />
      <div className="empleados">
        {almacenamiento}
      </div>
      <div className='calculadora'>
       <Calculadora />
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App