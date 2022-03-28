import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faFileInvoiceDollar,
  faTable,
  faComment,
  faTachometerAlt,
  faDesktop,
  faMobileAlt,
  faSearch,
  faDraftingCompass,
  faCode,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import upwork from "./Images/upwork.png";

import Home from "./components/home.js";
import Services from "./components/services.js";
import Contact from "./components/contact.js";
import About from "./components/about.js";
import RequestQuote from "./components/request-quote.js";

library.add(
  fab,
  faHome,
  faEnvelope,
  faFileInvoiceDollar,
  faTable,
  faComment,
  faTachometerAlt,
  faDesktop,
  faMobileAlt,
  faSearch,
  faDraftingCompass,
  faCode,
  faBars,
  faTimes
);

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggleNav() {
    var navSize = document.getElementById("mobile-menu").style.display;
    if (navSize == "none") {
      return this.openNav();
    } else {
      return this.closeNav();
    }
  }

  openNav() {
    document.getElementById("mobile-menu").style.display = "block";
    document.getElementById("mobile-menu").style.width = "100%";
    document.getElementById("exit").style.display = "block";
    document.getElementById("bars").style.display = "none";
  }

  closeNav() {
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("mobile-menu").style.width = "0";
    document.getElementById("exit").style.display = "none";
    document.getElementById("bars").style.display = "block";
  }
  render() {
    return (
      <div className="container-fluid p-0 position-relative">
        <nav className="navbar navbar-expand navbar-dark bg-dark desktop-nav">
          <Link
            to="/"
            className="navbar-brand d-inline text-white border-right pr-4"
          >
            <span>Nolan Softworks</span>
          </Link>
          <Link to="/" className="nav-item nav-link d-inlne text-light p-2">
            <FontAwesomeIcon icon="home" size="lg" />
          </Link>
          <Link
            to="/services"
            className="nav-item nav-link d-inline text-light p-2"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="nav-item nav-link d-inline text-light p-2"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="nav-item nav-link d-inline text-light p-2"
          >
            About
          </Link>
          <div className="ml-auto">
            <a
              className="nav-item nav-link d-inline text-light p-2 upwork-hover"
              target="_blank"
              href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/"
            >
              <img src={upwork} height="24px" width="24px" />
            </a>
            <Link
              to="/contact"
              className="nav-item nav-link d-inline text-light p-2"
            >
              <FontAwesomeIcon icon="envelope" size="lg" />
            </Link>
          </div>
        </nav>
        <nav
          id="mobile-navbar"
          className="navbar navbar-expand navbar-dark bg-dark"
        >
          <Link to="/" className="navbar-brand d-inline text-white">
            <span>Nolan Softworks</span>
          </Link>
          <a id="bars" className="ml-auto p-2" onClick={this.toggleNav}>
            <FontAwesomeIcon icon="bars" size="lg" color="white" />
          </a>
          <a id="exit" className="ml-auto p-2" onClick={this.toggleNav}>
            <FontAwesomeIcon icon="times" size="lg" color="white" />
          </a>
          <div
            id="mobile-menu"
            className="navbar-dark bg-dark mobile-nav text-center h4"
          >
            <Link
              to="/"
              className="nav-item nav-link text-light p-2"
              onClick={this.toggleNav}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="nav-item nav-link text-light p-2"
              onClick={this.toggleNav}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="nav-item nav-link text-light p-2"
              onClick={this.toggleNav}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="nav-item nav-link text-light p-2"
              onClick={this.toggleNav}
            >
              About
            </Link>
            <a
              className="nav-item nav-link text-light p-2 upwork-hover"
              target="_blank"
              href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/"
              onClick={this.toggleNav}
            >
              UpWork
            </a>
          </div>
        </nav>
        <footer className="navbar navbar-expand navbar-dark bg-dark justify-content-center position-absolute w-100 footer">
          <p className="text-white m-0 p-2">@Copyright 2022 Nolan Softworks</p>
        </footer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/request-quote" component={RequestQuote} />
        </Switch>
      </div>
    );
  }
}

export default App;
