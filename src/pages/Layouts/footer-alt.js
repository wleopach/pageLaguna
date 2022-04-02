
import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class FooterAlt extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="footer-alt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="float-left pull-none">
                                    <p className="copy-rights text-muted mb-3 mb-sm-0">{new Date().getFullYear()} - Laguna-ai</p>
                                    <p style={{display:"none"}} className="copy-rights text-muted mb-3 mb-sm-0">{new Date().getFullYear()} © Hiric - Themesbrand</p>
                                </div>
                                <div className="float-right pull-none ">
                                    <ul className="list-inline social m-0">
                                        <li className="list-inline-item"><Link to={{pathname: "https://www.facebook.com/Laguna-ai-106208701804570"}} className="social-icon" target="_blank"><i style={{color:"#FFFFFF"}} className="mdi mdi-facebook"></i></Link></li>
                                        <li className="list-inline-item"><Link to={{pathname: "https://twitter.com/Laguna_ai"}} className="social-icon" target="_blank"><i style={{color:"#FFFFFF"}} className="mdi mdi-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to={{pathname: "https://www.linkedin.com/company/laguna-ai/"}} className="social-icon" target="_blank" ><i style={{color:"#FFFFFF"}} className="mdi mdi-linkedin"></i></Link></li>
                                        <li className="list-inline-item"><Link to={{pathname: "https://www.instagram.com/laguna.ai/"}} className="social-icon" target="_blank"><i style={{color:"#FFFFFF"}} className="mdi mdi-instagram"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default FooterAlt;


