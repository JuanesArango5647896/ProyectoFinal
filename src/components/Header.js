import React from 'react';
import './StylesHeader.css';

const Header = () => {
    return(
        <header>
            <nav class="">
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
                            <li><a href="#">Medellin</a></li>
                            <li><a href="#">Itagui</a></li>
                            <li><a href="#">Bello</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Cocteles</a></li>
                    <li>
                        <a href="#">Contacto y redes</a>
                        <ul class="menuHorin">
                            <li><a href="#">WhastApp</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;