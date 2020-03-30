import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import city from '../Images/city-background.mp4'
import videoFallback from '../Images/hero-image.jpg'
import heroMobileImage from '../Images/hero-image.jpg'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid p-0 position-relative">
                <div className="background-overlay m-0 p-0 position-absolute w-100"></div>
                <video className="hero-video position-absolute" width="100%" height="600px" autoPlay muted loop>
                    <source src={city} type="video/mp4" />
                    <img src={videoFallback} title="Your browser does not support the <video> tag." />
                </video>
                <div className="hero-mobile-background position-absolute"></div>
                <div className="row text-white justify-content-center align-items-center hero-section">
                    <div className="col-lg-8">
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
                <div className="row py-4">
                    <div className="col-lg-4 text-center">
                            <FontAwesomeIcon icon="file-invoice-dollar" size="7x" color="gray" />
                            <h4 className="font-weight-bold pt-1">Request A Quote</h4>
                            <p>Need a website or application built?</p>
                        <Link to={process.env.PUBLIC_URL + '/request-quote'} className="btn btn-primary text-white rounded-pill px-4">Request Quote</Link>
                    </div>
                    <div className="col-lg-4 text-center border-left border-right border-dark">
                        <FontAwesomeIcon icon="table" size="7x" color="gray" />
                        <h4 className="font-weight-bold">Services</h4>
                        <p>Want to learn more about what is offered?</p>
                        <a href="/services" className="btn btn-primary text-white rounded-pill px-4">View Services</a>
                    </div>
                    <div className="col-lg-4 text-center">
                        <FontAwesomeIcon icon="comment" size="7x" color="gray" />
                        <h4 className="font-weight-bold">Contact Us</h4>
                        <p>Have a general question or comment?</p>
                        <a href="/contact" className="btn btn-primary text-white rounded-pill px-4">Contact</a>
                    </div>
                </div>
                <div className="row justify-content-center bg-primary py-5">
                    <div className="col-lg-5 text-center text-white">
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
                        <a href="/services#websites" className="btn btn-outline-light rounded-pill px-4 outline-light-text mt-2">View Details</a>
                    </div>
                </div>
                <div className="row justify-content-center bg-primary py-5 text-white">
                    <div className="col-lg-5 text-center">
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
                        <a href="/services#applications" className="btn btn-outline-light rounded-pill px-4 outline-light-text mt-2">View Details</a>
                    </div>
                </div>
                <div className="row justify-content-center bg-primary py-5 text-white">
                    <div className="col-lg-5 text-center">
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
                        <a href="/services#mobileApplications" className="btn btn-outline-light rounded-pill px-4 outline-light-text mt-2">View Details</a>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center seo-hero-image text-white">
                    <div className="col-lg-10 text-center seo-text">
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