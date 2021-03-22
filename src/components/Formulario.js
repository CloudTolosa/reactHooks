import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]:  event.target.value
        })
    }

    const enviarDatos = (event) => {
       event.preventDefault();
       console.log(datos.nombre + ' ' + datos.apellido )
    }


    return (
        <Fragment>
            <h1>Formulario con Validaciones</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        placeholder="ingrese su nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange = {handleInputChange}
                        >
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="ingrese apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange = {handleInputChange}
                        >
                    </input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Agregar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido} </h3>
        </Fragment>
    );
}

export default Formulario;