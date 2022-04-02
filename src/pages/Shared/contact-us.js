
import React, { Component} from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import emailjs from '@emailjs/browser';
import AvInput from 'availity-reactstrap-validation/lib/AvInput';

class ContatUs extends Component {

    constructor() {
        super();
        this.state = {
            nonVisible: true
        }
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
                                <h1 className="section-title text-center">Contáctanos</h1>
                                <div className="section-title-border margin-t-20"></div>
                                <p className="section-subtitle text-center font-secondary padding-t-30">Queremos ofrecerte nuestros servicios de acuerdo a tus necesidades, contáctanos ahora para recibir asesoría. </p>
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
                                                   <AvField type="text" name="names" className="form-control"  placeholder="Nombre*"  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                <AvField type="email" name="email" className="form-control"  placeholder="Correo electrónico*"  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group mt-2">
                                                <AvField type="text" name="enterprise" className="form-control"  placeholder="Empresa*"  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                <AvField type="text"   name="subject" className="form-control"  placeholder="Asunto*"  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <AvInput type="textarea" name="comments"  id="comments" rows="4"  className="form-control" placeholder="Tu mensaje..."></AvInput>
                                                </div>
                                            </div>
                                        </div>
                                        <p hidden={this.state.nonVisible} className="section-subtitle text-center font-secondary padding-t-30">¡Mensaje enviado!</p>
                                        <div className="row">
                                            <div className="col-lg-12 text-right">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Enviar Mensaje" />
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

export default ContatUs;


