import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import websites from '../Images/websites.jpg'
import mobileApplications from '../Images/mobile-applications.jpg'
import desktopApplications from '../Images/desktop-applications.jpg'

export default class Services extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div id="websites" className="row p-5 align-items-center">
                            <div className="col-12 col-lg-6 order-1">
                                <img className="m-auto d-block rounded" src={websites} alt="Websites" title="Websites" width="100%" height="100%" />
                            </div>
                            <div className="col-12 col-lg-6 order-2">
                                <h2 className="font-weight-bold">Websites</h2>
                                <p>I take great pride in every website that I build for my clients. All of my websites will help your business grow online and guide your customers with ease.
                                I can build and mange a fully custom site that follows all your business requirements and recommendations. With a custom website, you will have 100% flexability
                                with customizations as its not restricted by a template. Custom websites dont run on a Content Management System (CMS), so all changes and edits will be made by me.</p>

                                <p>If you are looking for a website but would like to manage the content updates in the future then I work with all website vendors (WordPress, Wix, SquareSpace, etc.). 
                                I will be able to build out your website with any default or prebuilt custom template. If you would like to build a custom template then I will be able to work with
                                you to get the design and layout you are looking for.</p>
                                <p>If you are interested in a website, fill out a quote and I will get back to you as soon as possible.</p>
                                <Link to="/request-quote" className="btn btn-primary rounded-pill px-4 btn-full-width-mobile">Submit Quote</Link>
                            </div>
                        </div>
                        <div className="row d-none">
                            <div className="col-12 col-lg-6 order-1">

                            </div>
                            <div className="col-12 col-lg-6 order-2">
                                <h2>Reviews & Reputation Management</h2>
                            </div>
                        </div>
                        <div id="applications" className="row p-5 align-items-center">
                            <div className="col-12 col-lg-6 order-2 order-lg-1">
                                <h2 className="font-weight-bold">Applications</h2>
                                <p>If you are looking for a custom desktop application then this would be the right place. All of my desktop application are built in Java and use the JavaFX GUI integration.
                                    JavaFX gives me the functionality to customize the layout and the look of the application with ease and with an appealing look. I connect all of my applications with 
                                    AWS for the database. I will charge you based off of the database storage that is used for your database structure. If you are wanting to make changes and updates to the
                                    application on a regular basis, I offer application management to help keep your application up to date.</p>
                                <p>If you are interested in a desktop application, fill out a quote and I will get back to you as soon as possible.</p>
                                <Link to="/request-quote" className="btn btn-primary rounded-pill px-4 btn-full-width-mobile">Submit Quote</Link>
                            </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                                <img className="m-auto d-block rounded" src={desktopApplications} alt="Desktop Applications" title="Desktop Applications" width="100%" height="100%" />
                            </div>
                        </div>
                        <div id="mobileApplications" className="row p-5 align-items-center mb-5">
                            <div className="col-lg-6 col-md-12 col-sm-12 order-1">
                                <img className="m-auto d-block rounded" src={mobileApplications} alt="Mobile Applications" title="Mobile Applications" width="100%" height="100%" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 order-2 mb-5">
                                <h2 className="font-weight-bold">Mobile Applications</h2>
                                <p>Mobile Applications are a great way to interact with your users online and offline at the same time. All my mobile applications use the material design GUI to give a nice and easy
                                    flow throughout the application. Mobile applications aren't supposed to be complicated. Its so a user can easily interact with the application while getting the same value out of it.
                                    I can build your mobile application as a standalone or as a website companion app. I also offer mobile application management where I can manage and update your application if
                                    there are regular changes to be made. At this time, I am currently only accepting Android Mobile Application quotes.</p>
                                <p>If you are interested in a mobile application, fill out a quote and I will get back to you as soon as possible</p>
                                <Link to="/request-quote" className="btn btn-primary rounded-pill px-4 btn-full-width-mobile">Submit Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}