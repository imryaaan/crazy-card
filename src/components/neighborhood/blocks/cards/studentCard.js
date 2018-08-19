import React, { Component } from 'react';

import Card from '../houses/card'

import student from '../../../../assets/student.jpg'

class StudentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Card image={student} title="Student Life Card" description="This credit card is only availble to customers with an employment status of Student." apr="18.9%" transferOffer=" 0 Months" purchaseOffer="6 Months" credit="£1200"/>
        );
    }
}

export default StudentCard;
