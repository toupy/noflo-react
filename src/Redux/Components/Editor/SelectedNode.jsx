import React, { Component, PropTypes } from 'react';
import _ from 'lodash'

export default class SelectedNode extends Component {

    render () {
        const { nodes, selectedNodeId } = this.props;
        var node = _.find(nodes, {id: selectedNodeId});
        return (
            <div>
                <h2 className="label">{node.label}</h2>
                <h3 className="label">{node.sublabel}</h3>
                <strong>X : </strong>{node.x} <strong>Y : </strong>{node.y}
            </div>
        )
    }
};


SelectedNode.propTypes = {
    node: PropTypes.object.required,
    selectedNode: PropTypes.object.isRequired
};
