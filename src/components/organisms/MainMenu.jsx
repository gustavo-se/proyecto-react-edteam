import React from 'react'
import {NavLink} from 'react-router-dom'
import CartCounter from '../atoms/CartCounter'

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-gird-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
            <a href="/">
                <img src="https://ed.team/static/images/logo.svg" alt="Logo EDteam" className="main-logo"/>
            </a>
        </div>
        
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu">
                <ul>
                    <li><NavLink exact to="/" activeClassName="avtivo">Inicio</NavLink></li>
                    <li><NavLink to="/cursos" activeClassName="avtivo">Cursos</NavLink></li>
                    <li><NavLink to="/formulario" activeClassName="avtivo">Formulario</NavLink></li>
                    <li><NavLink to="/usuarios" activeClassName="avtivo">Usuarios</NavLink></li>
                    <CartCounter/> 
                </ul>
            </nav>
            <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
        </div>
    </header>
)
export default MainMenu