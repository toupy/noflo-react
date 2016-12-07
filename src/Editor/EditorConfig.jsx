import React, {Component, PropTypes} from 'react';

export default class EditorConfig extends Component {

    constructor(props) {
        super(props);
        if(this.props.backgroundColor != undefined) {
            this.props.style.backgroundColor = this.props.backgroundColor
        }
    }

    render() {
        return null;
    }

    static get defaultProps() {
        return {
            style: {},
            width : 1024,
            height: 800,
            backgroundColor: "#000000"
        }
    }
}

EditorConfig.propTypes = {
    style: PropTypes.object,
};
