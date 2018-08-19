import React, { Component } from 'react';

require('./scss/app.scss');

import Form from './components/neighborhood/form'
import SectionHeading from './components/sectionHeadings/sectionHeadings';

export default class App extends Component {
    render() {
        return ( 
            <div>
                <SectionHeading number="1" title="Crazy Cards" subtitle="Fill the form in and see what Credit Card you can apply for"/>
                <Form />
            </div>
        )
    }
}