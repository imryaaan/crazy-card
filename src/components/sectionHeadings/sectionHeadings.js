import React, { Component } from 'react'

import './sectionHeading.scss';
import SectionHeadingContainer from './block/sectionHeadingContainer';

class SectionHeading extends Component {
    
    render() {
        return (
            <div className='section-heading'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <SectionHeadingContainer title={this.props.title} subtitle={this.props.subtitle} number={this.props.number}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionHeading
