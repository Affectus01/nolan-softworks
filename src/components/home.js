import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import city from '../Images/city-background.mp4'
import videoFallback from '../Images/hero-image.jpg'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: ''
        }

        this.updateWidth = this.updateWidth.bind(this);
        this.toggleVideo = this.toggleVideo.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.windowWidth !== this.state.windowWidth) {
            this.toggleVideo();
        }
    }

    updateWidth() {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    toggleVideo() {
        if (this.state.windowWidth > 768) {
            console.log("windows " + this.state.windowWidth);
            document.getElementById("heroVideo").autoplay = true;
            document.getElementById("heroVideo").preload = "auto";
        }
    }

    render() {
        return (
            <div className="container-fluid p-0 position-relative" onLoad={this.updateWidth}>
                <div className="background-overlay m-0 p-0 position-absolute w-100"></div>
                <video id="heroVideo" className="hero-video position-absolute" width="100%" height="600px" preLoad="none" muted loop>
                    <source src={city} type="video/mp4" />
                    <img src={videoFallback} title="Your browser does not support the <video> tag." />
                </video>
                <div className="hero-mobile-background position-absolute"></div>
                <div className="row text-white justify-content-center align-items-center hero-section">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row">
                            <div className="col">
                                <h1 className="hero-text-header text-center">Welcome to Nolan Softworks</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h4 className="hero-text-body text-center">Website Design, Application Development, and much more!</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-0 py-lg-4">
                    <div className="col-lg-4 col-md-4 col-sm-12 py-3 py-lg-0 text-center">
                            <FontAwesomeIcon icon="file-invoice-dollar" size="7x" color="gray" />
                            <h4 className="font-weight-bold pt-1">Request A Quote</h4>
                            <p>Need a website or application built?</p>
                        <Link to="/request-quote" className="btn btn-primary text-white rounded-pill px-4 btn-full-width-mobile">Request Quote</Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 py-3 py-lg-0 text-center border-left border-right border-dark">
                        <FontAwesomeIcon icon="table" size="7x" color="gray" />
                        <h4 className="font-weight-bold">Services</h4>
                        <p>Want to learn more about what is offered?</p>
                        <Link to="/services" className="btn btn-primary text-white rounded-pill px-4 btn-full-width-mobile">View Services</Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 py-3 py-lg-0 text-center">
                        <FontAwesomeIcon icon="comment" size="7x" color="gray" />
                        <h4 className="font-weight-bold">Contact Us</h4>
                        <p>Have a general question or comment?</p>
                        <Link to="/contact" className="btn btn-primary text-white rounded-pill px-4 btn-full-width-mobile">Contact</Link>
                    </div>
                </div>
                <div className="row justify-content-center website-background py-5">
                    <div className="col-xl-5 col-lg-8 col-md-12 col-sm-12 text-center text-white">
                        <h3 className="font-weight-bold border-bottom border-white pb-1">Websites</h3>
                        <h5>Responsive and Custom Tailored Website Designs</h5>
                        <div className="row justify-content-center">
                            <div className="px-4">
                                <FontAwesomeIcon icon="tachometer-alt" size="5x" />
                                <h5 className="font-weight-bold">Fast</h5>
                            </div>
                            <div className="px-4">
                                <FontAwesomeIcon icon="desktop" size="5x" />
                                <FontAwesomeIcon icon="mobile-alt" size="5x" />
                                <h5 className="font-weight-bold">Responsive</h5>
                            </div>
                            <div className="px-4">
                                <FontAwesomeIcon icon={['fab', 'uikit']} size="5x" />
                                <h5 className="font-weight-bold">Intuitive</h5>
                            </div>
                        </div>
                        <p className="p-0 m-0">Custom & WordPress Websites</p>
                        <p className="p-0 m-0">SEO & Social Media</p>
                        <p className="p-0 m-0">Website Management</p>
                        <Link to="/services#websites" className="btn btn-outline-light rounded-pill px-4 outline-light-text mt-2 btn-full-width-mobile">View Details</Link>
                    </div>
                </div>
                <div className="row justify-content-center application-background py-5 text-white">
                    <div className="col-xl-5 col-lg-8 col-md-12 col-sm-12 text-center">
                        <h3 className="font-weight-bold border-bottom border-white pb-1">Applications</h3>
                        <h5>Desktop Application built for personal or business use</h5>
                        <div className="row justify-content-center">
                            <div className="px-4">
                                <FontAwesomeIcon icon="search" size="5x" />
                                <h5 className="font-weight-bold">Research</h5>
                            </div>
                            <div className="px-4">
                                <FontAwesomeIcon icon="drafting-compass" size="5x" />
                                <h5 className="font-weight-bold">Design</h5>
                            </div>
                            <div className="px-4">
                                <FontAwesomeIcon icon="code" size="5x" />
                                <h5 className="font-weight-bold">Develop</h5>
                            </div>
                        </div>
                        <p className="p-0 m-0">Custom Application</p>
                        <p className="p-0 m-0">Database Management</p>
                        <p className="p-0 m-0">Application Management</p>
                        <Link to="/services#applications" className="btn btn-outline-light rounded-pill px-4 outline-light-text mt-2 btn-full-width-mobile">View Details</Link>
                    </div>
                </div>
                <div className="row justify-content-center mobile-app-background py-5 text-white">
                    <div className="col-xl-5 col-lg-8 col-md-12 col-sm-12 text-center">
                        <h3 className="font-weight-bold border-bottom border-white pb-1">Mobile Applications</h3>
                        <h5>Sleek and User Friendly Mobile Applications</h5>
                        <div className="row justify-content-center">
                            <div className="px-4">
                                <FontAwesomeIcon icon="search" size="5x" />
                                <h5 className="font-weight-bold">Research</h5>
                            </div>
                            <div className="px-4">
                                <FontAwesomeIcon icon="drafting-compass" size="5x" />
                                <h5 className="font-weight-bold">Design</h5>
                            </div>
                            <div className="px-4">
                                <FontAwesomeIcon icon="code" size="5x" />
                                <h5 className="font-weight-bold">Develop</h5>
                            </div>
                            <div className="px-4">
                                <FontAwesomeIcon icon={['fab', 'connectdevelop']} size="5x" />
                                <h5 className="font-weight-bold">Connect</h5>
                            </div>
                        </div>
                        <p className="p-0 m-0">Custom Mobile Application</p>
                        <p className="p-0 m-0">Database Management</p>
                        <p className="p-0 m-0">Application Management</p>
                        <Link to="/services#mobileApplications" className="btn btn-outline-light rounded-pill px-4 outline-light-text mt-2 btn-full-width-mobile">View Details</Link>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center seo-hero-image text-white">
                    <div className="col-10 text-center seo-text">
                        <h2 className="font-weight-bold">Welcome to Nolan Softworks</h2>
                        <p>I am a software developer that serves the Leavenworth, Lansing, and Kansas City area. 
                            I design and develop websites, desktop applications, and mobile applications. 
                            My focus is to research a customers' needs and requirements. 
                            The research will help me design a mockup that is user friendly for the consumer. 
                            I utilize the findings from the research and design phases for the production of specific products including materials, systems, and methods. 
                            The research and designs will help me produce user friendly and successful products for the customer.</p>
                    </div>
                </div>
                <div className="seo-background-overlay m-0 p-0 position-absolute w-100"></div>
            </div>
        );
    }
}