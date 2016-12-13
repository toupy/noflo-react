import React, { PropTypes } from 'react'

const SelectedNode = ({ nodes, selectedNode }) => {
    nodes.map( node => {
        if(node.id === selectedNode) {
            return node;
        }
    }

    );
    return (
        <div> SELECTED </div>
    );
}


SelectedNode.propTypes = {
   node: PropTypes.object.required
};

export default SelectedNode