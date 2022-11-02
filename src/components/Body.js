import React from "react";
import './stylesBody.css'

const Body = () => {

    return(
        <section className="principal"> 
            <div className="slider">
                <p>Servicio de licores todos los días de 4pm a 12pm</p>
                <ul>
                    <li><img src="./IMG/licores3.jpg"></img></li>
                    <li><img src="./IMG/licores2.jpg"></img></li>
                    <li><img src="./IMG/logo.jpg"></img></li>
                    <li><img src="./IMG/imagenes.jpg"></img></li>
                </ul>
            </div>
            <section className="sedes">
                <nav className="medellin" id="medellin">
                    <div>
                        <h1>Sede Medellin</h1>
                        <p>Disfruta de nuestra sede principal ubicada de la ciudad de Medellin</p>
                    </div>
                    <img src="./IMG/tiendaLicores.jpg"></img>
                </nav>
                <i className="disfruta">Disfruta</i>
                <br></br>
                <i className="conNosotros">Con Nosotros</i>
                <nav className="bello" id="bello">
                    <div>
                        <h1>Sede Bello</h1>
                        <p>Disfruta de nuestra sede de Bello, sera una experiencia sin igual</p>
                    </div>
                    <img src="./IMG/tiendaLicores2.jpg"></img>
                </nav>
                <i>Nueva Sede</i>
                <nav className="itagui" id="itagui">
                    <div>
                        <h1>Sede Itagui</h1>
                        <p>Disfruta de nuestra nueva sede ubicada en itagui, cerca de la estaciòn del metro</p>
                    </div>
                    <img src="./IMG/tiendaLicores3.jpg"></img>
                </nav>
            </section>
        </section>
    )
}

export default Body;