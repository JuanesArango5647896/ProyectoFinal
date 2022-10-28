import React from 'react';
import './StylesFooter.css';

const Footer = () => {
    return(
        <footer>
            <div class = "contenedor">
                <h2 class = "titulo-seccion">Contacta Conmigo</h2>
            </div>
            <div class = "redes-sociales">
                <img className = "logofacebook" src='./IMG/facebook.jpg'/>
                <img className = "logoinstagram" src='./IMG/instagram.jpg'/>
                <img className = "logowhatsapp" src='./IMG/wpp.jpg'/>
            </div>
            <div class = "contenedor">
                <p class = "copy">TODOS LOS DERECHOS ESTAN RESERVADOS...</p>
            </div>
        </footer>
        
    )
}

export default Footer;