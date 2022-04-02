import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from './Scrollspy';
import logoA from '../../images/logo.png';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }

    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                <img id="logo" src={logoA} alt="Logo" width="100%" height="50px"></img> </Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display : this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                <ScrollspyNav
                                    scrollTargetIds={["home", "services", "about","contact"]}
                                    activeNavClass="active"
                                    scrollDuration="400"
                                    headerBackground="true"
                                    className={this.state.isOpen ? "navbar-nav ml-0 float-left" : "navbar-nav navbar-center"} >
                                        
                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item active"><a style={{fontSize:"18px"}} href="#home" className="nav-link">Inicio</a></li>
                                        <li className="nav-item"><a style={{fontSize:"18px"}} href="#services" className="nav-link">Servicios</a></li>
                                        <li className="nav-item"><a style={{fontSize:"18px"}} href="#about" className="nav-link">Acerca de nosotros</a></li>
                                        <li className="nav-item"><a style={{fontSize:"18px"}} href="#contact" className="nav-link">Contacto</a> </li>
                                    </ul>

                                </ScrollspyNav>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


