import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
                        <Link to={process.env.PUBLIC_URL + '/'}  className="navbar-brand d-inline text-white border-right pr-4"><span>Nolan Softworks</span></Link>
                        <Link to={process.env.PUBLIC_URL + '/'} className="nav-item nav-link d-inlne text-light p-2"><FontAwesomeIcon icon="home" size="lg" /></Link>
                        <Link to={process.env.PUBLIC_URL + '/services'} className="nav-item nav-link d-inline text-light p-2">Services</Link>
                        <Link to={process.env.PUBLIC_URL + '/contact'} className="nav-item nav-link d-inline text-light p-2">Contact</Link>
                        <Link to={process.env.PUBLIC_URL + '/about'} className="nav-item nav-link d-inline text-light p-2">About</Link>
                        <div className="ml-auto">
                            <a className="nav-item nav-link d-inline text-light p-2 upwork-hover" target="_blank" href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/"><img src={upwork} height="24px" width="24px"/></a>
                            <a className="nav-item nav-link d-inline text-light p-2" target="_blank" href="https://www.linkedin.com/in/benjiman-nolan"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a>
                            <a className="nav-item nav-link d-inline text-light p-2" target="_blank" href="https://github.com/Affectus01"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a>
                            <Link to={process.env.PUBLIC_URL + '/contact'} className="nav-item nav-link d-inline text-light p-2"><FontAwesomeIcon icon="envelope" size="lg" /></Link>
                        </div>
                    </nav>
                    <nav id="mobile-navbar" className="navbar navbar-expand navbar-dark bg-dark">
                        <Link to={process.env.PUBLIC_URL + '/'} className="navbar-brand d-inline text-white"><span>Nolan Softworks</span></Link>
                        <a id="bars" className="ml-auto p-2" onClick={toggleNav}><FontAwesomeIcon icon="bars" size="lg" color="white" /></a>
                        <a id="exit" className="ml-auto p-2" onClick={toggleNav}><FontAwesomeIcon icon="times" size="lg" color="white" /></a>
                        <div id="mobile-menu" className="navbar-dark bg-dark mobile-nav text-center h4">
                            <Link to={process.env.PUBLIC_URL + '/'} className="nav-item nav-link text-light p-2">Home</Link>
                            <Link to={process.env.PUBLIC_URL + '/services'} className="nav-item nav-link text-light p-2">Services</Link>
                            <Link to={process.env.PUBLIC_URL + '/contact'} className="nav-item nav-link text-light p-2">Contact</Link>
                            <Link to={process.env.PUBLIC_URL + '/about'} className="nav-item nav-link text-light p-2">About</Link>
                            <a className="nav-item nav-link text-light p-2 upwork-hover" target="_blank" href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/">UpWork</a>
                            <a className="nav-item nav-link text-light p-2" target="_blank" href="https://www.linkedin.com/in/benjiman-nolan">LinkedIn</a>
                            <a className="nav-item nav-link text-light p-2" target="_blank" href="https://github.com/Affectus01">Github</a>
                        </div>
                    </nav>
                    <footer className="navbar navbar-expand navbar-dark bg-dark justify-content-center position-absolute w-100 footer">
                        <p className="text-white m-0 p-2">@Copyright 2020 Nolan Softworks | Developed by <Link to={process.env.PUBLIC_URL + '/'} className="text-light nav-item nav-link d-inline pl-0 ml-0">Ben Nolan</Link></p>
                    </footer>
                    <Switch>
                        <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
                        <Route path={process.env.PUBLIC_URL + '/services'} component={Services} />
                        <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                        <Route path={process.env.PUBLIC_URL + '/request-quote'} component={RequestQuote} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
