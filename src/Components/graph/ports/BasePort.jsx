import React, { Component, PropTypes} from 'react'

export default class BasePort extends Component {

    render() {
        const { cx, cy, r } = this.props
        return (
            <circle r="2.5"/>
        )
    }
}

BasePort.propTypes = {
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired
}