import React from 'react'
import './MainSidebar.css';
import { Link, Outlet, NavLink } from 'react-router-dom';

//rce para generar esta estructura automaticamente
{/* NAVLINK SE USA EN LOS ELEMNTOS A CLICKEAR PARA IR A OTRO COMPONENTE/PAGINA, Y SE ASIGNA LA PROPIEDAD "TO=" EN LUGAR DE "HREF=" PARA DIRECCIONAR LAS RUTAS SIN CARGAR TODOS LOS COMPONENTES, SINO COMO FI FUERA CARGA CON AJAX */ }
function MainSidebar() {
    return (


        <div className="l-navbar" id="nav-bar">
            <nav className="nav">
                <div> <a href="/" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Megalabs Picking</span> </a>
                    <div className="nav_list">
                        <NavLink to="/home" className="nav_link"> <i className='bx bx-home nav_icon'></i> <span className="nav_name">Inicio</span> </NavLink>
                        <NavLink to="/orden" className="nav_link"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Ordenes</span> </NavLink>
                        <NavLink to="1" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Usuarios</span> </NavLink>
                        <NavLink to="2" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Notificaciones</span> </NavLink>
                        <NavLink to="3" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Historico</span> </NavLink>
                        <NavLink to="5" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Estadisticas</span> </NavLink>
                    </div>
                </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">Cerrar Sesion</span> </a>
            </nav>
        </div>
    )
}

export default MainSidebar