import React, { Fragment, useState } from "react";

const Formulario = () => {

    // State Citas
    const [cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

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
      console.log("enviando...");
    }

  return (
    <Fragment>
      <h2> Crear Citas </h2>

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
