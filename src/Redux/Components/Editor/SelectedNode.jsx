"use strict";
import React, { Component, PropTypes } from 'react';

export default class SelectedNode extends Component {

    render () {
        const { selectedNode } = this.props;

        if(selectedNode === undefined){
            return (null)
        }

        return (
            <div>
                <h2 className="label">{selectedNode.label}</h2>
                <h3 className="label">{selectedNode.sublabel}</h3>
                <strong>X : </strong>{selectedNode.x} <strong>Y : </strong>{selectedNode.y}
            </div>
        )
    }
};


SelectedNode.propTypes = {
    node: PropTypes.object.required,
    selectedNode: PropTypes.object.isRequired
};
