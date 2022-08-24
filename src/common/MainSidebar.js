import React from 'react'
import './MainSidebar.css';
import { Link } from 'react-router-dom';

//rce para generar esta estructura automaticamente

function MainSidebar() {
    return (
            <div className="l-navbar" id="nav-bar">
                <nav className="nav">
                    <div> <a href="/" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">Megalabs Picking</span> </a>
                        <div className="nav_list">
                            <a href="/orden" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Ordenes</span> </a>
                            <a href="#" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Usuarios</span> </a>
                            <a href="#" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Notificaciones</span> </a>
                            <a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Historico</span> </a>
                            <a href="#" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Archivos Cargados</span> </a>
                            <a href="#" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Estadisticas</span> </a>
                        </div>
                    </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">Cerrar Sesion</span> </a>
                </nav>
            </div>
    )
}

export default MainSidebar