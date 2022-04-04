import React, { Component } from "react";
import { Col, Row as div } from "reactstrap";
import { NavLink } from 'react-router-dom';
import i18n from "i18next";
import { withTranslation } from "react-i18next";




class About1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
	this.t=this.props.t;
	
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <div className="container">
            <div className="row">
              <Col lg="8" className="offset-lg-2">
                <h1 className="section-title text-center">
                  {this.t('AN')}
                </h1>
                <div className="section-title-border margin-t-20"></div>
                <p className="section-subtitle text-center font-secondary padding-t-30">
                  {this.t('FL')} <br /> <br /> {this.t('NC')}
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
                {this.t('CN')}
              </button>
            </NavLink>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default withTranslation()(About1);
