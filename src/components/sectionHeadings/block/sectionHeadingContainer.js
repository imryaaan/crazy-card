import React, { Component } from 'react'

import Title from './houses/title/title';
import Subtitle from './houses/subtitle/subtitle';
import Number from './houses/number/number';

class SectionHeadingContainer extends Component {

    render() {
        return (
            <div className='section-heading-container'>
                <div className="row">
                    <div className="col-md-4">
                        <Number number={this.props.number} />
                    </div>
                    <div className="col-md-8">
                        <Title title={this.props.title} />
                        <Subtitle subtitle={this.props.subtitle} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionHeadingContainer
