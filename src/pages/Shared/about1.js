import React, { Component } from "react";
import { Col, Row as div } from "reactstrap";
import { NavLink } from 'react-router-dom';


class About1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <div className="container">
            <div className="row">
              <Col lg="8" className="offset-lg-2">
                <h1 className="section-title text-center">
                  Acerca de nosotros
                </h1>
                <div className="section-title-border margin-t-20"></div>
                <p className="section-subtitle text-center font-secondary padding-t-30">
                  Fundamos LAGUNA-AI con el fin de adaptar toda empresa a la
                  cuarta revolución industrial. Pensando en esto, ofrecemos
                  servicios tecnológicos y estadísticos. Nos enfocamos en el
                  procesamiento de lenguaje natural, rama de la inteligencia
                  artificial que ayuda a las computadoras a entender,
                  interpretar y manipular el lenguaje humano. Para hacerlo,
                  nuestro equipo cuenta con profesionales en matemáticas,
                  estadística y ciencia de datos. <br /> <br /> Nos gusta
                  prestar servicios útiles y de calidad.
                </p>
              </Col>
            </div>
          </div>

          <div className="text-center mt-3">
            <NavLink to="/about">
              <button
                type="button"
                className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light"
              >
                ¡Conoce nuestro equipo!
              </button>
            </NavLink>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About1;
