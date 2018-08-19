import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import StudentCard from '../cards/studentCard'
import LiquidCard from '../cards/liquidCard'
import AnywhereCard from '../cards/anywhereCard'

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = { anywhere: false, student: false, passed: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleIncome = this.handleIncome.bind(this);
        this.handleDOB = this.handleDOB.bind(this);
        this.handleEmployment = this.handleEmployment.bind(this);
        this.handlePostcode = this.handlePostcode.bind(this);
        this.handleHouseNumber = this.handleHouseNumber.bind(this);
    }

    handleSubmit(e) {

        this.setState({
            details: [
            this.state.nametitle, 
            this.state.firstname,
            this.state.lastname,
            this.state.dob,
            this.state.income,
            this.state.employment,
            this.state.housenumber,
            this.state.postcode
            ],
            anywhere: this.state.nametitle && this.state.firstname && this.state.lastname && this.state.dob && this.state.income && this.state.employment && this.state.housenumber && this.state.postcode,
            student: this.state.employment === "Student" ? true : false,        
            passed: this.state.income === "passed" ? true : false,    
        });

        e.preventDefault();

    }


    handleTitle(e){
        this.setState({
            nametitle: e.target.value
        });
    }

    handleFirstName(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    handleLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }

    handleDOB(e) {
        this.setState({
            dob: e.target.value
        });
    }

    handleIncome(e) {
        this.setState({
            income: e.target.value
        });
    }

    handleEmployment(e) {
        this.setState({
            employment: e.target.value
        });
    }

    handleHouseNumber(e) {
        this.setState({
            housenumber: e.target.value
        });
    }

    handlePostcode(e) {
        this.setState({
            postcode: e.target.value
        });
    }

    render() {
        const student = this.state.student;
        const anywhere = this.state.anywhere;
        const passed = this.state.passed;
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <Row className="input-title">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="title">
                                        <p>Tile<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <select type="text" className="input" name="title" value={this.state.nametitle} onChange={this.handleTitle} placeholder="Title" required>
                                        <option value="" disabled selected>Title</option>
                                        <option value="DR">Doctor</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Mrs">Mrs</option>
                                    </select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="input-first-name">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="firstName">
                                        <p>First Name<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <input type="text" className="input" name="firstName" value={this.state.firstname} onChange={this.handleFirstName} placeholder="First Name" required/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="input-last-name">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="lastName">
                                        <p>Last Name<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <input type="text" className="input" name="lastName" value={this.state.lastname} onChange={this.handleLastName} placeholder="Last Name" required/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="input-dob">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="dob">
                                        <p>Date Of Birth<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <input type="date" className="input" name="dob" value={this.state.dob} onChange={this.handleDOB} placeholder="Date Of Birth" required/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="input-income">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="income">
                                        <p>Annual Income<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <select type="number" className="input" name="income" value={this.state.income} onChange={this.handleIncome} required>
                                        <option value="" disabled selected> Annual Income</option>
                                        <option value="failed">£0 - £15,999</option>
                                        <option value="passed">£16,000 +</option>
                                    </select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="input-employment">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="employment">
                                        <p>Employment Status<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <select type="text" className="input" name="employment" value={this.state.employment} onChange={this.handleEmployment} required>
                                        <option value="" disabled selected>Employment Status</option>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Student">Student</option>
                                        <option value="Self Employed">Self Employeed</option>
                                        <option value="Unemployed">Unemployed</option>
                                    </select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="input-house-number">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="houseNumber">
                                        <p>House Number<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <input type="number" min="1" max="100,000" className="input" name="houseNumber" value={this.state.housenumber} onChange={this.handleHouseNumber} placeholder="House Number" required/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="input-postcode">
                        <Col sm={12}>
                            <Row>
                                <Col sm={6} className="label">
                                    <label htmlFor="postcode">
                                        <p>Postcode<span className="astrix">*</span></p>
                                    </label>
                                </Col>
                                <Col sm={6}>
                                    <input type="text" className="input" name="postcode" value={this.state.postcode} onChange={this.handlePostcode} placeholder="Postcode" required/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}></Col>
                        <Col sm={6} className="submit">
                            <input type="submit" className="submitButton" name="submit" value="Submit" />
                        </Col>
                    </Row>
                </form>
                {anywhere && !student && passed ? (
                    <div className="card-container">
                        <AnywhereCard />
                        <LiquidCard />
                    </div>
                ):(
                        <div className="d-none"></div>
                )}
                {anywhere && !student && !passed ? (
                    <div className="card-container">
                        <AnywhereCard />
                    </div>
                ) : (
                        <div className="d-none"></div>
                    )}
                {anywhere && student && !passed ? (
                    <div className="card-container">
                        <AnywhereCard />
                        <StudentCard />
                    </div>
                ) : (
                        <div className="d-none"></div>
                    )}
                {anywhere && student && passed ? (
                    <div className="card-container">
                        <AnywhereCard />
                        <StudentCard />
                        <LiquidCard />
                    </div>
                ) : (
                        <div className="d-none"></div>
                    )}
            </div>
        );
    }
}

export default UserInput;
