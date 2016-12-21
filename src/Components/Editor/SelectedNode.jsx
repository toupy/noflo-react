"use strict";
import React, { Component, PropTypes } from 'react';
import ListePorts from './ListePorts.jsx'

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
                <ListePorts ports={selectedNode.ports}/>
            </div>
        )
    }
};


SelectedNode.propTypes = {
    selectedNode: PropTypes.object.isRequired
};
