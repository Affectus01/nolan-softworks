import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class RequestForm extends Component {
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row">
                    <div className="col-lg-10">
                        <h1 className="font-weight-bold">Request Quote</h1>
                        <p>Do you have a website or application that needs built?</p>
                        <p>Fill out the form and provide as much detail as you can for your project. I will review the information and get back to you as soon as possible.
                            I look forward to working with you!</p> 
                        
                    </div>
                </div>
            </div>
        );
    }
}