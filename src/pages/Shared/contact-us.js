
import React, { Component} from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import emailjs from '@emailjs/browser';
import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import i18n from "i18next";
import { withTranslation} from "react-i18next";


class ContatUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nonVisible: true
        };
        this.t=this.props.t;
    }

    handleSubmit = (event, errors, values) => {

        this.setState({nonVisible: false})

        emailjs.send('service_tjyqkyc', 'template_xee9czy', values, 'user_4ktiAfiGoAzJWwLCblbSL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }

    render() {
        return (
            <React.Fragment>
                <section className="section " id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">{this.t('C')}</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-center font-secondary padding-t-30">{this.t('QO')} </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="custom-form mt-4 pt-4">
                                    <div id="message"></div>
                                    <AvForm id="contact-form" onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                   <AvField type="text" name="names" className="form-control"  placeholder={this.t('N')}  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                <AvField type="email" name="email" className="form-control"  placeholder={this.t('CE')} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                <AvField type="text" name="enterprise" className="form-control"  placeholder={this.t('E')}  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                <AvField type="text"   name="subject" className="form-control"  placeholder={this.t('A')}  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <AvInput type="textarea" name="comments"  id="comments" rows="4"  className="form-control" placeholder={this.t('TM')}></AvInput>
                                                </div>
                                            </div>
                                        </div>
                                        <p hidden={this.state.nonVisible} className="section-subtitle text-center font-secondary padding-t-30">{this.t('ME')}</p>
                                        <div className="row">
                                            <div className="col-lg-12 text-right">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value={this.t('EM')} />
                                                <div id="simple-msg"></div>
                                            </div>
                                        </div>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default withTranslation()(ContatUs);


