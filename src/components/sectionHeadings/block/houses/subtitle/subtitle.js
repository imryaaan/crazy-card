import React, { Component } from 'react'

class Subtitle extends Component {
    render() {
        return (
            <div className='subtitle'>
                {this.props.subtitle}
            </div>
        )
    }
}

export default Subtitle
