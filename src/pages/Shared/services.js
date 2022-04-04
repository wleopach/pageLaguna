
import React, { Component } from 'react';
import { Col, Row as div } from 'reactstrap';
import i18n from "i18next";
import { withTranslation} from "react-i18next";


  
class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
		this.t=this.props.t;
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <div>
                            <Col lg="8" className="offset-lg-2">
                                <h1 className="section-title text-center">{this.t('NS')}</h1>
                                <div className="section-title-border margin-t-20"></div>
                            </Col>
                        </div>
                        <div className="row margin-t-30">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-chat text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>{this.t('CI')}</h4>
                                            <p className="pt-2 text-muted">{this.t('AC')}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-like2 text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>{this.t('CT')}</h4>
                                            <p className="pt-2 text-muted">{this.t('CD')}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-note2 text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>{this.t('SA')}</h4>
                                            <p className="pt-2 text-muted">{this.t('AE')}</p>
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
                                            <h4>{this.t('AD')}</h4>
                                            <p className="pt-2 text-muted">{this.t('EV')}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        <i className="pe-7s-tools text-custom"></i>
                                        <div className="media-body ml-4">
                                            <h4>{this.t('MA')}</h4>
                                            <p className="pt-2 text-muted">{this.t('MR')}</p>
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
export default withTranslation()(Services);


