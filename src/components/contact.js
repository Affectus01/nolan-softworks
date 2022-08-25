import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Axios, db } from "../firebase/firebaseConfig";

function Contact() {
  const [formData, setFormData] = useState({});
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(false);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      fname: "",
      lname: "",
      phone: "",
      email: "",
      commentsQuestions: "",
    });
  };

  const sendEmail = () => {
    Axios.post(
      "https://us-central1-nolan-softworks.cloudfunctions.net/submit",
      formData
    )
      .then((response) => {
        db.collections("emails").add({
          name: formData.fname + formData.lname,
          phone: formData.phone,
          email: formData.email,
          commentsQuestions: formData.commentsQuestions,
          time: new Date(),
        });
        setMailSent(true);
        resetForm();
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  const resetForm = () => {
    document.getElementById("contact-form").reset();
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-start footer-fix">
        <div className="col-lg-8 mt-1 mt-lg-5 text-center border border-dark rounded p-5 bg-secondary text-white shadow">
          <h1 className="font-weight-bold">Contact</h1>
          <p>
            Do you have questions or comments for me? I'd love to hear them!
            Fill out the form and I will get back to you as soon as possible.
          </p>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-row my-2">
              <div className="col-12 col-lg-6 my-1 my-lg-0">
                <input
                  className="form-control"
                  onChange={updateInput}
                  type="text"
                  name="fname"
                  placeholder="First Name*"
                  pattern="(^$)|(^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][-a-zA-Z.' \u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{1,}$)"
                  required
                />
              </div>
              <div className="col-12 col-lg-6 my-1 my-lg-0">
                <input
                  className="form-control"
                  onChange={updateInput}
                  type="text"
                  name="lname"
                  placeholder="Last Name*"
                  pattern="(^$)|(^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][-a-zA-Z.' \u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{1,}$)"
                  required
                />
              </div>
            </div>
            <div className="form-row my-2">
              <div className="col-12 col-lg-6 my-1 my-lg-0">
                <input
                  className="form-control"
                  onChange={updateInput}
                  type="tel"
                  name="phone"
                  placeholder="111-222-333"
                  pattern="(^$)|(^\+?[1]?[-. ]?\(?[\d]{3}\)?[-. ]?[\d]{3}[-. ]?[\d]{4}[ a-zA-Z0-9.:]{0,20}$)"
                />
              </div>
              <div className="col-12 col-lg-6 my-1 my-lg-0">
                <input
                  className="form-control"
                  onChange={updateInput}
                  type="email"
                  name="email"
                  placeholder="Email*"
                  pattern="(^$)|(^.*(\S+).*$)"
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control my-2"
              onChange={updateInput}
              rows="10"
              name="commentsQuestions"
              placeholder="Project Details*"
            ></textarea>
            <div className="">
              {mailSent && (
                <div className="border border-success my-2">
                  Thank you for contacting us!
                </div>
              )}
              {error && (
                <div className="border border-warning my-2">
                  Message failed to send!
                </div>
              )}
            </div>
            <input
              className="btn btn-primary rounded-pill px-4 float-left"
              id="submitButton"
              onClick={updateInput}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="col-lg-2 ml-0 ml-lg-1 border border-dark rounded p-5 bg-secondary text-white mt-1 mt-lg-5 mb-5 mb-lg-0 ">
          <h5>Related Links</h5>
          <Link className="d-block text-light p-2" to="/request-quote">
            <FontAwesomeIcon icon="file-invoice-dollar" size="lg" /> Request
            Quote
          </Link>
          <Link className="d-block text-light p-2" to="/services">
            <FontAwesomeIcon icon="table" size="lg" /> Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
