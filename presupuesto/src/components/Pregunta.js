import React, {Fragment, useState} from 'react';
import Error from './Error'
const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

    // definir state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value ));
    }

    // submit
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        // si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

    }


    return ( <Fragment>
        <h2>Coloca tu presupuesto</h2>
        {error ? <Error mensaje="El presupuesto es incorrecto."/> : null}

        <form onSubmit = {agregarPresupuesto}>
            <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
                onChange= {definirPresupuesto}
            />

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
        </form>
    </Fragment> );
}
 
export default Pregunta;