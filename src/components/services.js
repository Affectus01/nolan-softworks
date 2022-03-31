import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import websites from "../Images/websites.jpg";
import mobileApplications from "../Images/mobile-applications.jpg";
import desktopApplications from "../Images/desktop-applications.jpg";

export default class Services extends Component {
  render() {
    return (
      <div className="container-fluid h-100 p-0">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div id="websites" className="row p-5 align-items-center">
              <div className="col-12 col-lg-6 order-1">
                <img
                  className="m-auto d-block rounded"
                  src={websites}
                  alt="Websites"
                  title="Websites"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-12 col-lg-6 order-2">
                <h2 className="font-weight-bold">Websites</h2>
                <p>
                  Our websites will help your business grow online and guide
                  your customers with ease. We can build and manage a fully
                  custom site that follows all your business requirements and
                  needs. With a custom website, you will have 100% flexibility
                  with customizations as it's not restricted by a template.
                  Custom websites don't run on a Content Management System
                  (CMS), so all changes and edits will be made by Nolan
                  Softworks.
                </p>

                <p>
                  If you are looking for a website but would like to manage the
                  content updates in the future then I work with all website
                  vendors (WordPress, Wix, SquareSpace, etc.). I will be able to
                  build out your website with any default or prebuilt custom
                  template. If you would like to build a custom template then I
                  will be able to work with you to get the design and layout you
                  are looking for.
                </p>
                <p>
                  If you are interested in a website, fill out a quote, and we
                  will get back to you as soon as possible.
                </p>
                <Link
                  to="/request-quote"
                  className="btn btn-primary rounded-pill px-4 btn-full-width-mobile"
                >
                  Submit Quote
                </Link>
              </div>
            </div>
            <div className="row d-none">
              <div className="col-12 col-lg-6 order-1"></div>
              <div className="col-12 col-lg-6 order-2">
                <h2>Reviews & Reputation Management</h2>
              </div>
            </div>
            <div id="applications" className="row p-5 align-items-center">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <h2 className="font-weight-bold">Applications</h2>
                <p>
                  If you are looking for a custom desktop or web application,
                  then this would be the right place. All of our applications
                  are built with popular frameworks that allow us to build
                  high-performing applications and services. For our
                  infrastructure, we use Amazon Web Services. This ensures that
                  our applications are highly available and scalable as your
                  needs and requirements grow. If you are wanting to make
                  changes and updates to the application regularly, We also
                  offer application management to help keep your application up
                  to date.
                </p>
                <p>
                  If you are interested in a desktop application, fill out a
                  quote, and we will get back to you as soon as possible.
                </p>
                <Link
                  to="/request-quote"
                  className="btn btn-primary rounded-pill px-4 btn-full-width-mobile"
                >
                  Submit Quote
                </Link>
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <img
                  className="m-auto d-block rounded"
                  src={desktopApplications}
                  alt="Desktop Applications"
                  title="Desktop Applications"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div
              id="mobileApplications"
              className="row p-5 align-items-center mb-5"
            >
              <div className="col-lg-6 col-md-12 col-sm-12 order-1">
                <img
                  className="m-auto d-block rounded"
                  src={mobileApplications}
                  alt="Mobile Applications"
                  title="Mobile Applications"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 order-2 mb-5">
                <h2 className="font-weight-bold">Mobile Applications</h2>
                <p>
                  Mobile Applications are a great way to interact with your
                  users online and offline at the same time. All of our mobile
                  applications will use popular design practices to give a nice
                  and easy flow throughout the application. Mobile applications
                  aren't supposed to be complicated. This is so a user can
                  easily interact with the application while getting the same
                  value out of it. We build your mobile application as a
                  standalone or as a website companion app. We also offer mobile
                  application management where we can manage and update your
                  application if there are regular changes to be made.
                </p>
                <p>
                  If you are interested in a mobile application, fill out a
                  quote, and we will get back to you as soon as possible
                </p>
                <Link
                  to="/request-quote"
                  className="btn btn-primary rounded-pill px-4 btn-full-width-mobile"
                >
                  Submit Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
