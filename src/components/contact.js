import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

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
        axios({
            method: "POST",
            url: "http://localhost:3002/contact",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                this.resetForm()
                this.setState({
                    mailSent: true
                })
            } else if (response.data.status === 'fail') {
                this.setState({
                    error: true
                })
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-start footer-fix">
                    <div className="col-lg-8 mt-5 text-center border border-dark rounded p-5 bg-secondary text-white shadow">
                        <h1 className="font-weight-bold">Contact</h1>
                        <p>Do you have questions or comments for me? I'd love to hear them! Fill out the form and I will get back to you as soon as possible.</p>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-row my-2">
                                <div className="col">
                                    <input className="form-control" onChange={this.onChange} type = "text" name="fname" placeholder="First Name*" pattern="(^$)|(^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][-a-zA-Z.' \u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{1,}$)" required />
                                </div>
                                <div className="col">
                                    <input className="form-control" onChange={this.onChange} type="text" name="lname" placeholder="Last Name*" pattern="(^$)|(^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][-a-zA-Z.' \u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{1,}$)" required />
                                </div>
                            </div>
                            <div className="form-row my-2">
                                <div className="col">
                                    <input className="form-control" onChange={this.onChange} type="tel" name="phone" placeholder="111-222-333" pattern="(^$)|(^\+?[1]?[-. ]?\(?[\d]{3}\)?[-. ]?[\d]{3}[-. ]?[\d]{4}[ a-zA-Z0-9.:]{0,20}$)" />
                                </div>
                                <div className="col">
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
                    <div className="col-lg-2 ml-1 border border-dark rounded p-5 bg-secondary text-white mt-5">
                        <h5>Related Links</h5>
                        <Link className="d-block text-light p-2" to="/request-quote"><FontAwesomeIcon icon="file-invoice-dollar" size="lg" /> Request Quote</Link>
                        <Link className="d-block text-light p-2" to="/services"><FontAwesomeIcon icon="table" size="lg" /> Services</Link>
                    </div>
                </div>
            </div>
        );
    }
}