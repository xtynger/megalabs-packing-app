import React, { Component } from 'react'
import './LoginScreen.css';

class RegistrarUsuario extends Component {

    constructor(props) {
      super(props)
      this.state = {
        nombreAgregar: '',
        apellidoAgregar: '',
        correoAgregar: '',
        passwordAgregar: ''
      }
    }


    usuarioInsertar = (e) => { /* esto se usa para que la variable "e" sea el objeto que esta generando el evento y aqui definimos su funcion */
        e.preventDefault(); //Esto evita que la pagina se actualice cuando ejecuta el evento "onSubmit"
        const rutaServicio = "https://proyectosmegalabs.000webhostapp.com/servicioregistrarusuario.php"

        var formData = new FormData();
        formData.append("nombre", this.state.nombreAgregar);
        formData.append("apellido", this.state.apellidoAgregar);
        formData.append("correo", this.state.correoAgregar);
        formData.append("password", this.state.passwordAgregar);
        console.log(this.state.nombreAgregar);
        console.log(this.state.apellidoAgregar);
        console.log(this.state.correoAgregar);
        console.log(this.state.passwordAgregar);

        fetch(rutaServicio, { method: 'POST', body: formData })
            .then(
                res => res.text()
            )
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        nombreAgregar: '',
                        apellidoAgregar: '',
                        correoAgregar: '',
                        passwordAgregar: ''
                    })
                }
            )
    }

    dibujarFormularioRegistro() {
        return (
            <section id="registro">
                <div className="wrapper">
                    <form onSubmit={this.usuarioInsertar}>
                    <div className="text-center mt-4 name">
                       Registro de Usuario 
                    </div>
                        <div className="p-3 mt-3">
                            <div className="form-field d-flex align-items-center">
                                <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={this.state.nombreAgregar} onChange={(e) => this.setState({ nombreAgregar: e.target.value })} />
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <input type="text" className="form-control" id="apellido" placeholder="Apellido" value={this.state.apellidoAgregar} onChange={(e) => this.setState({ apellidoAgregar: e.target.value })} />
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <input type="email" className="form-control" id="correo" placeholder="correo" value={this.state.correoAgregar} onChange={(e) => this.setState({ correoAgregar: e.target.value })} />
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.passwordAgregar} onChange={(e) => this.setState({ passwordAgregar: e.target.value })} />
                            </div>
                        </div>
                        <button type="submit" className="btn mt-3">Registrar</button>
                    </form>
                </div>
            </section>
        )
    }

    render() {
        let contenidoFormularioAgregar = this.dibujarFormularioRegistro();
        return (
            <section id="registros">
                <div className='container'>
                    <div className='row'>
                        {contenidoFormularioAgregar}
                    </div>
                </div>
            </section>
        );
    }
}

export default RegistrarUsuario