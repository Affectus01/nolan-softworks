import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHome, faEnvelope, faFileInvoiceDollar, faTable, faComment, faTachometerAlt, faDesktop, faMobileAlt, faSearch, faDraftingCompass, faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import upwork from './Images/upwork.png'

import Home from './components/home.js'
import Services from './components/services.js'
import Contact from './components/contact.js'
import About from './components/about.js'
import RequestQuote from './components/request-quote.js'

library.add(fab, faHome, faEnvelope, faFileInvoiceDollar, faTable, faComment, faTachometerAlt, faDesktop, faMobileAlt, faSearch, faDraftingCompass, faCode, faBars, faTimes)

class App extends Component {
    render() {

        function toggleNav() {
            var navSize = document.getElementById("mobile-menu").style.display;
            if (navSize == 'none') {
                return openNav();
            }
            else {
                return closeNav();
            }
        }

        function openNav() {
            document.getElementById("mobile-menu").style.display = "block";
            document.getElementById("mobile-menu").style.width = "100%";
            document.getElementById("exit").style.display = "block";
            document.getElementById("bars").style.display = "none";
        }

        function closeNav() {
            document.getElementById("mobile-menu").style.display = "none";
            document.getElementById("mobile-menu").style.width = "0";
            document.getElementById("exit").style.display = "none";
            document.getElementById("bars").style.display = "block";
        }

        return (
            <Router>
                <div className="container-fluid p-0 position-relative">
                   <nav className="navbar navbar-expand navbar-dark bg-dark desktop-nav">
                        <a className="navbar-brand d-inline text-white border-right pr-4" href="/"><span>Nolan Softworks</span></a>
                        <a className="nav-item nav-link d-inlne text-light p-2" href="/"><FontAwesomeIcon icon="home" size="lg"/></a>
                        <a className="nav-item nav-link d-inline text-light p-2" href="/services">Services</a>
                        <a className="nav-item nav-link d-inline text-light p-2" href="/contact">Contact</a>
                        <a className="nav-item nav-link d-inline text-light p-2" href="/about">About</a>
                        <div className="ml-auto">
                            <a className="nav-item nav-link d-inline text-light p-2 upwork-hover" target="_blank" href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/"><img src={upwork} height="24px" width="24px"/></a>
                            <a className="nav-item nav-link d-inline text-light p-2" target="_blank" href="https://www.linkedin.com/in/benjiman-nolan"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a>
                            <a className="nav-item nav-link d-inline text-light p-2" target="_blank" href="https://github.com/Affectus01"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a>
                            <a className="nav-item nav-link d-inline text-light p-2" href="/contact"><FontAwesomeIcon icon="envelope" size="lg" /></a>
                        </div>
                    </nav>
                    <nav id="mobile-navbar" className="navbar navbar-expand navbar-dark bg-dark">
                        <a className="navbar-brand d-inline text-white" href="/"><span>Nolan Softworks</span></a>
                        <a id="bars" className="ml-auto p-2" onClick={toggleNav}><FontAwesomeIcon icon="bars" size="lg" color="white" /></a>
                        <a id="exit" className="ml-auto p-2" onClick={toggleNav}><FontAwesomeIcon icon="times" size="lg" color="white" /></a>
                        <div id="mobile-menu" className="navbar-dark bg-dark mobile-nav text-center h4">
                            <a className="nav-item nav-link text-light p-2" href="/">Home</a>
                            <a className="nav-item nav-link text-light p-2" href="/services">Services</a>
                            <a className="nav-item nav-link text-light p-2" href="/contact">Contact</a>
                            <a className="nav-item nav-link text-light p-2" href="/about">About</a>
                            <a className="nav-item nav-link text-light p-2 upwork-hover" target="_blank" href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/">UpWork</a>
                            <a className="nav-item nav-link text-light p-2" target="_blank" href="https://www.linkedin.com/in/benjiman-nolan">LinkedIn</a>
                            <a className="nav-item nav-link text-light p-2" target="_blank" href="https://github.com/Affectus01">Github</a>
                        </div>
                    </nav>
                    <footer className="navbar navbar-expand navbar-dark bg-dark justify-content-center position-absolute w-100 footer">
                        <p className="text-white m-0 p-2">@Copyright 2020 Nolan Softworks | Developed by <a className="text-light nav-item nav-link d-inline pl-0 ml-0" href="/about">Ben Nolan</a></p>
                    </footer>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/request-quote" component={RequestQuote} />
                </div>
            </Router>
        );
    }
}

export default App;
