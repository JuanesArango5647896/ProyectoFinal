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
                    <li><img src="./IMG/licores1.jpeg"></img></li>
                    <li><img src="./IMG/fotoLicores.jpeg"></img></li>
                </ul>
            </div>
            <section className="sedes">
                <b><i className="principal">Sede Principal</i></b>
                <nav className="medellin" id="medellin">
                    <div>
                        <h1>Sede Medellin</h1>
                        <p>Disfruta de nuestra sede principal ubicada de la ciudad de Medellin</p>
                    </div>
                    <img src="./IMG/tiendaLicores.jpg"></img>
                </nav>
                <b><i className="disfruta">Disfruta</i></b>
                <br></br>
                <b><i className="conNosotros">Con Nosotros</i></b>
                <nav className="bello" id="bello">
                    <div>
                        <h1>Sede Bello</h1>
                        <p>Disfruta de nuestra sede de Bello, sera una experiencia sin igual</p>
                    </div>
                    <img src="./IMG/tiendaLicores2.jpg"></img>
                </nav>
                <b><i className="nueva">Nueva Sede</i></b>
                <nav className="itagui" id="itagui">
                    <div>
                        <h1>Sede Itagui</h1>
                        <p>Disfruta de nuestra nueva sede ubicada en itagui, cerca de la estaciòn del metro</p>
                    </div>
                    <img src="./IMG/tiendaLicores3.jpg"></img>
                </nav>
            </section>
            <section className="opcionesLicores">
                <section className="guaro" id="guaro">
                    <nav className="tiposGuaro"><h1>Aguardiente: </h1></nav>
                    <nav className="guaroAzul">
                        <img src="./IMG/guaroAzul.jpg"></img>
                        <h2>Tapa Azul</h2>
                        <p>375ml (media): 22.000
                            <br></br>
                            1000ml (litro): 47.000
                            <br></br>
                            2000ml (Garrafa): 85.000
                        </p>
                    </nav>
                    <nav className="guaroRojo">
                        <img src="./IMG/guaroRojo.jpg"></img>
                        <h2>Tapa Roja</h2>
                        <p>375ml (media): 19.000
                            <br></br>
                            1000ml (litro): 43.000
                            <br></br>
                            2000ml (Garrafa): 80.000
                        </p>
                    </nav>
                    <nav className="guaroVerde">
                        <img src="./IMG/guaroVerde.jpg"></img>
                        <h2>Tapa Verde</h2>
                        <p>375ml (media): 20.000
                            <br></br>
                            1000ml (litro): 45.000
                            <br></br>
                            2000ml (Garrafa): 82.000
                        </p>
                    </nav>
                </section>
                <section className="ron" id="ron">
                    <nav className="tiposRon"><h1>Ron: </h1></nav>
                    <nav className="ronCaldas">
                        <img src="./IMG/ronCaldas.jpg"></img>
                        <h2>Ron Caldas</h2>
                        <p>375ml (media): 28.000
                            <br></br>
                            1000ml (litro): 58.000
                            <br></br>
                            2000ml (Garrafa): 98.000
                        </p>
                    </nav>
                    <nav className="ronMedellin">
                        <img src="./IMG/ronMedellin.jpg"></img>
                        <h2>Ron Medellín</h2>
                        <p>375ml (media): 25.000
                            <br></br>
                            1000ml (litro): 53.000
                            <br></br>
                            2000ml (Garrafa): 94.000
                        </p>
                    </nav>
                    <nav className="ronDictador">
                        <img src="./IMG/ronDictador.jpg"></img>
                        <h2>Ron Dictador</h2>
                        <p>375ml (media): 45.000
                            <br></br>
                            1000ml (litro): 90.000
                            <br></br>
                            2000ml (Garrafa): 190.000
                        </p>
                    </nav>
                </section>
                <section className="tequila" id="tequila">
                    <nav className="tiposTequila"><h1>Tequila: </h1></nav>
                    <nav className="joseCuervo">
                        <img src="./IMG/joseCuervo.jpg"></img>
                        <h2>Jose Cuervo</h2>
                        <p>375ml : 44.900
                            <br></br>
                            750ml : 76.500
                            <br></br>
                            990ml : 96.000
                        </p>
                    </nav>
                    <nav className="donJulio">
                        <img src="./IMG/donJulio.jpg"></img>
                        <h2>Don julio</h2>
                        <p>700ml: 355.000 </p>
                    </nav>
                    <nav className="tequila1800">
                        <img src="./IMG/1800.jpg"></img>
                        <h2>Tequila 1800</h2>
                        <p>750ml: 198.000</p>
                    </nav>
                </section>
            </section>
        </section>
    )
}

export default Body;