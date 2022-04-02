import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

//Layout css
import '../css/colors/yellow.css';

import Particles from 'react-particles-js';

// Layouts
import Header from './Layouts/header';

import FooterAlt from './Layouts/footer-alt';

// Shared
import Services from './Shared/services';
import About1 from './Shared/about1';
import ContactUs from './Shared/contact-us';



class Index9 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('sticky-dark');
            document.getElementById('is-sticky').classList.add('is-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('sticky-dark');
            document.getElementById('is-sticky').classList.remove('is-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <Header />

                {/* Home Section */}
                <section className="section bg-home height-100vh" id="home">
                    <div className="bg-overlay"></div>
                    <div className="">
                        <div className="">
                            <div className="container slidero">
                                <Row>
                                    <Col lg="8" className="offset-lg-2 text-white text-center">
                                        <h4 className="home-small-title">Análisis de datos</h4>
                                        <h1 className="home-title">Especializados en procesamiento del lenguaje natural</h1>
                                        <p style={{color:"#FFFFFF"}} className="padding-t-15 home-desc mx-auto">Ofrecemos servicios tecnológicos y estadísticos. Nos enfocamos en el procesamiento de lenguaje natural, rama de la inteligencia artificial que ayuda a las computadoras a entender, interpretar y manipular el lenguaje humano.</p>
                                      </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                     
                    <Particles style={{ position: "absolute" }}
                        params={{"particles": {
                            "number": {
                              "value": 200,
                              "density": {
                                "enable": true,
                                "value_area": 800
                              }
                            },
                            "color": {
                              "value": "#ffffff"
                            },
                            "shape": {
                              "type": "circle",
                              "stroke": {
                                "width": 0,
                                "color": "#000000"
                              },
                              "polygon": {
                                "nb_sides": 5
                              }
                            },
                            "opacity": {
                              "value": 0,
                              "random": true,
                              "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 1,
                                "sync": false
                              }
                            },
                            "size": {
                              "value": 3,
                              "random": true,
                              "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                              }
                            },
                            "line_linked": {
                              "enable": true,
                              "distance": 150,
                              "color": "#ffffff",
                              "opacity": 0.4,
                              "width": 1
                            },
                            "move": {
                              "enable": true,
                              "speed": 4,
                              "direction": "none",
                              "random": false,
                              "straight": false,
                              "out_mode": "bounce",
                              "bounce": true,
                              "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                              }
                            }
                          },
                          "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                              "onhover": {
                                "enable": true,
                                "mode": "repulse"
                              },
                              "onclick": {
                                "enable": true,
                                "mode": "push"
                              },
                              "resize": true
                            },
                            "modes": {
                              "grab": {
                                "distance": 400,
                                "line_linked": {
                                  "opacity": 1
                                }
                              },
                              "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 0.5
                              },
                              "repulse": {
                                "distance": 80,
                                "duration": 0.5
                              },
                              "push": {
                                "particles_nb": 4
                              },
                              "remove": {
                                "particles_nb": 2
                              }
                            }
                          },
                          "retina_detect": true
                            
                        }} />

                </section>

                {/* Services */}
                <Services />

                {/* About Us */}
                <About1 />

                {/* ContactUs */}
                <ContactUs />

                {/* Footer Alt */}
                <FooterAlt />

            </React.Fragment >
        );
    }
}

export default Index9;


