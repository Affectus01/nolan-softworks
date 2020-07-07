import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import profilepic from '../Images/profilepic.png'
import upwork from '../Images/upwork.png'

export default class About extends Component {
    render() {
        return (
            <Router>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-start footer-fix">
                    <div className="col-lg-8 border border-dark rounded p-5 bg-secondary text-white mt-1 mt-lg-5">
                        <h1 className="font-weight-bold text-center">About</h1>
                        <img className="mx-auto d-block my-2 rounded profile-pic" src={profilepic} alt="Profile Picture"/>
                        <p className="about-indent">My name is Ben Nolan and I live in the Kansas City metro area. I live here with my wife and twin boys.
                            I currently work for Dealer.com which is the number one leading website provider for the automotive industry.
                            Dealer.com's goal is to provide Digital Marketing strategies for dealeships to help them grow and adapt the digital shopping experience.
                            My responsibilty at Dealer.com is an Implementation Project Manager. In this role I lead and manage the projects for upgrading dealership
                            websites to our latest designs. I also have experience with colaberating and implementing these strategies with dealerships.
                            This gives me the ability to see how Digital Marketing, SEO, and SEM work with a successful business and website provider daily.</p>
                        <p className="about-indent">To give you the most control of your websites, I use WordPress as my primary website platorm for building sites. I can also adjust to the website platform of your choosing.
                            These would include, but not limited to Wix, SquareSpace, Shopify, Webflow, Weebly, and many more. This allows you to have the ability to make changes and updates
                            at your own convienience. I can also build out a custom website or web application with HTML, CSS, JavaScript, or React.js. You choose what option best works for you
                             and I will work with you to get your website or web application up and running.</p>
                        <p className="about-indent">I am also a sofware developer that has experience with designing and developing desktop and mobile applications.
                            I build my desktop applications with Java and JavaFX frameworks. I build my mobile applications on the Android platform.
                            I use MySQL for my databases which are then stored in the Amazon Web Services (AWS) Cloud Server.
                            I use AWS because it is reliable and scalable and offers a inexpensive way to run a database for my applications.</p>
                        <p className="text-center">If you have any questions, comments, or feedback you can <Link to="/contact">contact</Link> me directly.</p>
                    </div>
                        <div className="col-lg-2 ml-lg-1 border border-dark rounded p-5 bg-secondary text-white mt-1 mt-lg-5 mb-5 mb-lg-0 ">
                        <h5>Related Links</h5>
                        <a className="d-block text-light p-2 upwork-hover" target="_blank" href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/"><img src={upwork} height="24px" width="24px" /> Upwork</a>
                        <a className="d-block text-light p-2" target="_blank" href="https://www.linkedin.com/in/benjiman-nolan"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /> LinkedIn</a>
                        <a className="d-block text-light p-2" target="_blank" href="https://github.com/Affectus01"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /> GitHub</a>
                        <Link className="d-block text-light p-2" to="/contact"><FontAwesomeIcon icon="envelope" size="lg" /> Contact</Link>
                    </div>
                    </div>
                </div>
            </Router>
        );
    }
}