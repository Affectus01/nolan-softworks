import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            commentsQuestions: '',
            mailSent: false,
            error: false
        }

        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChange(event) {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const sgMail = require('@sendgrid/mail');
        const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
        sgMail.setApiKey(SENDGRID_API_KEY);
        var fname = this.state.fname;
        var lname = this.state.lname;
        var phone = this.state.phone;
        var email = this.state.email;
        var commentsQuestions = this.state.commentsQuestions;
        var content = `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone}\nE-mail: ${email}\nComment & Questions: ${commentsQuestions} `
        const msg = {
            to: 'benjiman.nolan1@gmail.com',
            from: this.state.email,
            subject: 'New Contact Form',
            text: content
        };

        sgMail
            .send(msg, (error, result) => {
                if (error) {
                    console.error(error);
                    if (error.response) {
                        console.error(error.response.body)
                    }

                    this.setState({
                        error: true
                    })
                }
                else {
                    this.resetForm()
                    this.setState({
                        mailSent: true
                    })
                }
            });
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-start footer-fix">
                    <div className="col-lg-8 mt-1 mt-lg-5 text-center border border-dark rounded p-5 bg-secondary text-white shadow">
                        <h1 className="font-weight-bold">Contact</h1>
                        <p>Do you have questions or comments for me? I'd love to hear them! Fill out the form and I will get back to you as soon as possible.</p>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-row my-2">
                                <div className="col-12 col-lg-6 my-1 my-lg-0">
                                    <input className="form-control" onChange={this.onChange} type = "text" name="fname" placeholder="First Name*" pattern="(^$)|(^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][-a-zA-Z.' \u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{1,}$)" required />
                                </div>
                                <div className="col-12 col-lg-6 my-1 my-lg-0">
                                    <input className="form-control" onChange={this.onChange} type="text" name="lname" placeholder="Last Name*" pattern="(^$)|(^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][-a-zA-Z.' \u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{1,}$)" required />
                                </div>
                            </div>
                            <div className="form-row my-2">
                                <div className="col-12 col-lg-6 my-1 my-lg-0">
                                    <input className="form-control" onChange={this.onChange} type="tel" name="phone" placeholder="111-222-333" pattern="(^$)|(^\+?[1]?[-. ]?\(?[\d]{3}\)?[-. ]?[\d]{3}[-. ]?[\d]{4}[ a-zA-Z0-9.:]{0,20}$)" />
                                </div>
                                <div className="col-12 col-lg-6 my-1 my-lg-0">
                                    <input className="form-control" onChange={this.onChange} type="email" name="email" placeholder="Email*" pattern="(^$)|(^.*(\S+).*$)" required />
                                </div>
                            </div>
                            <textarea className="form-control my-2" onChange={this.onChange} rows="10" name="commentsQuestions" placeholder="Project Details*"></textarea>
                            <div className="">
                                {this.state.mailSent &&
                                    <div className="border border-success my-2">Thank you for contacting us!</div>
                                }
                                {this.state.error &&
                                    <div className="border border-warning my-2">Message failed to send!</div>
                                }
                            </div> 
                            <input className="btn btn-primary rounded-pill px-4 float-left" id="submitButton" onClick={this.handleSubmit} type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="col-lg-2 ml-0 ml-lg-1 border border-dark rounded p-5 bg-secondary text-white mt-1 mt-lg-5 mb-5 mb-lg-0 ">
                        <h5>Related Links</h5>
                        <Link className="d-block text-light p-2" to="/request-quote"><FontAwesomeIcon icon="file-invoice-dollar" size="lg" /> Request Quote</Link>
                        <Link className="d-block text-light p-2" to="/services"><FontAwesomeIcon icon="table" size="lg" /> Services</Link>
                    </div>
                </div>
            </div>
        );
    }
}