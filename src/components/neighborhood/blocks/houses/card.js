import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './card.scss'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row className="show-grid card">
                <Col sm={12}>
                    <Row>
                        <Col sm={6} className="align-self-center">
                            <img src={this.props.image} />
                        </Col>
                        <Col sm={6}>
                            <div className={this.props.class}>
                                <h2 className="card-title">{this.props.title}</h2>
                                <ul>
                                    <li className="card-des">{this.props.description}</li>
                                    <li className="card-apr">{this.props.apr}</li>
                                    <li className="card-transfer">{this.props.transferOffer}</li>
                                    <li className="card-purchase">{this.props.purchaseOffer}</li>
                                    <li className="card-credit">{this.props.credit}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Card;
