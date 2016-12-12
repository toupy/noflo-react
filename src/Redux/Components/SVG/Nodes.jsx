import React, { PropTypes } from 'react'
import Node from '../../../graph/Node.jsx'
import NodeDragLayer from '../../../graph/node/NodeDragLayer.jsx';

const Nodes = ({ nodes, otherNodes, onNodeClick, onNodeRightClick }) => {
    var toto = "toto";
    return (


    <g className="nodes" id="nodes">
        {nodes.map(node =>
            <Node
                data={node}
                key={node.id}
                onClick={console.log('click!')}
            />
        )}
        <NodeDragLayer/>
    </g>
    )
}
Nodes.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        sublabel: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default Nodes