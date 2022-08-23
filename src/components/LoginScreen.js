import React, { Component } from 'react'
import './LoginScreen.css';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router'


class LoginScreen extends Component {


    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            inicioSesion: false
        }
    }


    iniciarSesion = () => {
        const rutaServicio = "http://megalabs.digitalbroperu.com/serviciologinusuario.php";
        
        var formData = new FormData();
        formData.append("username", this.state.username);
        formData.append("password", this.state.password);

        fetch(rutaServicio, { method: 'POST', body: formData })
            .then(res => res.text())
            .then((result) => { console.log(result);
            this.evaluarSesion(result) 
            }
            )
            
    }


    evaluarSesion = (result) => {
        if (result === "-1") {
            alert("El usuario no existe")
        }
        else if (result === "-2") {
            alert("La contraseña es incorrecta")
        }
        else {
            alert("Bienvenido")
            this.setState({
                inicioSesion: true
            })
        }
    }




    render() {
        var redireccionar =
            this.state.inicioSesion === true ?
                <Navigate to='/home' replace={true} /> : ''
        return (
            <section id="login" className="padded">
                {redireccionar}
                <div>
                    <div className="wrapper">
                        <div className="logo">
                            <img src="https://www.loogistico.com/assets/img/clients/Megalabs.png" alt="" />
                        </div>
                        <div className="text-center mt-4 name">
                            Megalabs Picking
                        </div>
                        <form className="p-3 mt-3">
                            <div className="form-field d-flex align-items-center">
                                <span className="far fa-user"></span>
                                <input type="text" name="username" id="username" placeholder="Username" 
                                values={this.state.username}
                                onChange={(e) => this.setState({username: e.target.value})}/>
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <input type="password" name="password" id="password" placeholder="Password" 
                                values={this.state.password}
                                onChange={(e) => this.setState({password: e.target.value})}/>
                            </div>
                            <button className="btn mt-3" onClick= {() => this.iniciarSesion()}>Iniciar Sesion</button>
                        </form>
                        <div className="text-center fs-6">
                            {/* <a href="#">Olvide contraseña</a> or <a href="#">Sign up</a> */}
                            <a href="#">Olvide contraseña</a> or <a href="/registro">Registrar</a>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LoginScreen