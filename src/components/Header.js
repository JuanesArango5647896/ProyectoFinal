import React from 'react';
import Body from './Body.js';
import './StylesHeader.css';

const Header = () => {
    return(
        <header>
            <nav class="container">
                <img className = "logoheader" src='./IMG/logo.jpg'/>
                <ul class="menu">
                    <li><a href="#">Inicio</a></li>
                    <li>
                        <a href="#">Licores</a>
                        <ul className="menuHorin">
                            <li><a href="#guaro">Aguardiente</a></li>
                            <li><a href="#Ron">Ron</a></li>
                            <li><a href="#">Tequila</a></li>
                            <li><a href="#">Vodka</a></li>
                            <li><a href="#">Wizky</a></li>
                            <li><a href="#">Vino</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Sedes</a>
                        <ul class="menuHorin">
                            <li><a href="#medellin">Medellin</a></li>
                            <li><a href="#itagui">Itagui</a></li>
                            <li><a href="#bello">Bello</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Cocteles</a></li>
                    <li>
                        <a href="#redes-sociales">Contacto y redes</a>
                    </li>
                </ul>
            </nav>
            <div className='espacioMenu'></div>
        </header>
    )
}

export default Header;