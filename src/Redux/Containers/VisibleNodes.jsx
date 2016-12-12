import { connect } from 'react-redux'
import Nodes from '../Components/SVG/Nodes.jsx'
import { addGraphNode } from '../actions/nodeActions.jsx'

const mapStateToProps = (state) => {
    return {
        nodes: state.nodes,
        otherNodes: state.nodes,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNodeClick: () => {
            dispatch(addGraphNode('LABEL'))
        },
        onNodeRightClick: () => {
            dispatch(addGraphNode('LABEL'))
        }
    }
};

/**
 * Connect nodes 's layout
 */
const VisibleNodes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nodes);

export default VisibleNodes