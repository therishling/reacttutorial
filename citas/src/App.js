import React,{ Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  // arreglo de citas wey
  const [citas, actualizarCitas] = useState([])

  // crear cita
  const crearCita = cita => {
    actualizarCitas([
      ...citas, cita
    ])
  }
  return (

    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
            crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
