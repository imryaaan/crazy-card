import React, { Component } from 'react';

import Card from '../houses/card'
import anywhere from '../../../../assets/anywhere.png'

class AnywhereCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
           <Card image={anywhere} title="Anywhere Card" description="This credit card is available to all customers." apr="33.9%" transferOffer=" 0 Months" purchaseOffer="0 Months" credit="£300"/>
        );
    }
}

export default AnywhereCard;
