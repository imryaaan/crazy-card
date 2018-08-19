import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import UserInput from './blocks/userInput/userinput'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Grid>
                <Row className="show-grid crazy-card-container">
                    <Col sm={12}>
                        <UserInput />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Form;
