import React, { Fragment, useState } from "react";
import uuid from 'uuid/dist/v4'

const Formulario = ({crearCita}) => {

    // State Citas
    const [cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false);

    // func

    const actualizarState = e => {
        actualizarCita({
          ...cita, [e.target.name]: e.target.value
        })
    }

    // valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //envio de formulario

    const submitCita = e => {
      e.preventDefault();
      
      // Validar
      if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
        actualizarError(true);
        return;
      }

      //actualizar error
      actualizarError(false);

      // Asignar ID
      cita.id = uuid();
      // Crear Cita

      crearCita(cita);

      // Reiniciar Form
    }

  return (
    <Fragment>
      <h2> Crear Citas </h2>
      
      { error? <p className="alerta-error"> Todos los campos son obligatorios. </p> : null }
      
      <form onSubmit={submitCita}>
        <label>Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange = {actualizarState}
          value = {mascota}
        />
        <label>"Dueño"</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Esclavo"
          onChange = {actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" onChange = {actualizarState} value = {fecha}/>
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" onChange = {actualizarState} value = {hora}/>

        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" onChange = {actualizarState} value = {sintomas}></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
