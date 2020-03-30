import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

export default class RequestQuote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            projectType: '',
            budget: '',
            completionDate: '',
            projectDetails: '',
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
            url: "http://localhost:3002/quote",
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
                    <div className="col-lg-8 mt-5 text-center p-5 border border-dark rounded bg-secondary text-white">
                        <h1 className="font-weight-bold">Request Quote</h1>
                        <p>Do you have a website or application that needs built?</p>
                        <p>Fill out the form and provide as much detail as you can for your project. I will review the information and get back to you as soon as possible.
                            I look forward to working with you!</p> 
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-row my-2">
                                <div className="col">
                                    <input className="form-control" onChange={this.onChange} type="text" name="fname" placeholder="First Name*" pattern="(^$)|(^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF][-a-zA-Z.' \u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]{1,}$)" required />
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
                            <div className="form-row my-2 align-items-center">
                                <div className="col">
                                    <select className="custom-select" onChange={this.onChange} name="projectType">
                                        <option value="Website" name="Website">Website</option>
                                        <option value="Application" name="Application">Application</option>
                                        <option value="Other" name="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <input className="form-control" onChange={this.onChange} type="text" name="budget" placeholder="Project Budget* (Hourly or Fixed Price)" required />
                                </div>
                                <div className="col">
                                    <input className="form-control" onChange={this.onChange} type="date" name="completionDate" required />
                                </div>
                                <div>
                                    <small>Anticipated Project Completion Date.</small>
                                </div>
                            </div>
                            <textarea className="form-control my-2" onChange={this.onChange} rows="10" name="projectDetails" placeholder="Project Details*"></textarea>
                            <div className="">
                                {this.state.mailSent &&
                                    <div className="border border-success my-2">Thank you for contacting us!</div>
                                }
                                {this.state.error &&
                                    <div className="border border-warning my-2">Message failed to send!</div>
                                }
                            </div>
                            <input className="btn btn-primary rounded-pill px-4 float-left" id="submitButton" id="submitButton" type="submit" value="Submit" />
				        </form>
                    </div>
                </div>
            </div>
        );
    }
}