import React from 'react';
import './StylesFooter.css';

const Footer = () => {
    return(
        <footer>
            <div class = "contenedor">
                <h2 class = "titulo-seccion">Contacta Conmigo</h2>
            </div>
            <div class = "redes-sociales" id='redes-sociales'>
                <a href='https://es-la.facebook.com/'><img class = "logofacebook" src='./IMG/facebook.jpg'/></a>
                <a href='https://www.instagram.com/'><img class = "logoinstagram" src='./IMG/instagram.jpg'/></a>
                <a href='https://web.whatsapp.com/'><img class = "logowhatsapp" src='./IMG/wpp.jpg'/></a>
            </div>
            <div class = "contenedor">
                <p class = "copy">TODOS LOS DERECHOS ESTAN RESERVADOS...</p>
            </div>
        </footer>
        
    )
}

export default Footer;