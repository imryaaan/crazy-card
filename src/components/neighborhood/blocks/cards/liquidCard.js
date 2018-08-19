import React, { Component } from 'react';

import Card from '../houses/card'
import liquid from '../../../../assets/liquid.jpg'


class LiquidCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Card image={liquid} title="Liquid Card" description="This credit card is only availble to customers with an income of £16000 or more." apr="33.9%" transferOffer=" 12 Months" purchaseOffer="6 Months" credit="£3000"/>
        );
    }
}

export default LiquidCard;
