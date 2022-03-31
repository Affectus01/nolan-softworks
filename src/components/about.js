import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profilepic from "../Images/profilepic.png";
import upwork from "../Images/upwork.png";

export default class About extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-start footer-fix">
            <div className="col-lg-8 border border-dark rounded p-5 bg-secondary text-white mt-1 mt-lg-5">
              <h1 className="font-weight-bold text-center">About</h1>
              <img
                className="mx-auto d-block my-2 rounded profile-pic"
                src={profilepic}
                alt="Profile Picture"
              />
              <p className="about-indent">
                My name is Ben Nolan and I live in the Kansas City metro area. I
                am a full-stack software engineer that has been building and
                developing websites and applications for quite some time. I have
                experience with quite a few website vendors and can work with
                about any templates provided. I also have experience working
                with .NET/C# applications and any of the Microsoft stack
                services. I mainly use React for the front-end of my
                applications. I also have experience with APIs and integrating
                them with my applications. I like to use Amazon Web Services for
                my infrastructure as it provides high availability for my
                applications.
              </p>
              <p className="text-center">
                If you have any questions, comments, or feedback you can{" "}
                <Link to="/contact">contact</Link> me directly.
              </p>
            </div>
            <div className="col-lg-2 ml-lg-1 border border-dark rounded p-5 bg-secondary text-white mt-1 mt-lg-5 mb-5 mb-lg-0 ">
              <h5>Related Links</h5>
              <a
                className="d-block text-light p-2 upwork-hover"
                target="_blank"
                href="https://www.upwork.com/o/profiles/users/~01478845fa36b49363/"
              >
                <img src={upwork} height="24px" width="24px" /> Upwork
              </a>
              <Link className="d-block text-light p-2" to="/contact">
                <FontAwesomeIcon icon="envelope" size="lg" /> Contact
              </Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
