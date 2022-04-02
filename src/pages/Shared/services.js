
import React, { Component } from 'react';
import { Col, Row as div } from 'reactstrap';


class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <div>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">Nuestros Servicios</h1>
                                <div className="section-title-border margin-t-20"></div>
                            </Col>
                        </div>
                        <div className="row margin-t-30">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-chat text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Chatbots inteligentes</h4>
                                            <p className="pt-2 text-muted">Asistentes conversacionales capaces de atender las necesidades de tus clientes 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-like2 text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Clasificación de textos</h4>
                                            <p className="pt-2 text-muted">Clasificación de datos no estructurados. Análisis de sentimientos y clasificación de PQR. Te ayudamos a entender como se relacionan tus clientes con tu producto.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-note2 text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Sumarización automática</h4>
                                            <p className="pt-2 text-muted">Algoritmos para la extracción y estructuración de información relevante en textos. Disminuye el tiempo dedicado al escrutinio del lenguaje.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="row justify-content-center">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-graph2 text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Análisis de datos</h4>
                                            <p className="pt-2 text-muted">Exploración y visualización de datos, análisis y modelización reportados en tableros de control. Extrae valor de la información de tu empresa.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-tools text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>Modelos analíticos</h4>
                                            <p className="pt-2 text-muted">Modelos de regresión lineal y logística, Análisis de series de tiempo, Redes Neuronales, Análisis topológico de datos</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Services;


