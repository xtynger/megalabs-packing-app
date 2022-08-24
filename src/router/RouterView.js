import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
import LoginScreen from '../components/LoginScreen'
import Orden from '../components/Orden'
import RegistrarUsuario from '../components/RegistrarUsuario'

class RouterView extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/orden" element={<Orden />} />
                <Route path="/registro" element={<RegistrarUsuario />} />
            </Routes>
        )
    }
}


export default RouterView 