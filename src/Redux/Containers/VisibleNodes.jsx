import { connect } from 'react-redux'
import Nodes from '../Components/SVG/Nodes.jsx'
import { addGraphNode, selectGraphNode } from '../actions/nodeActions.jsx'

const mapStateToProps = (state) => {
    return {
        nodes: state.nodes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNodeClick: (id) => {
            dispatch(selectGraphNode(id))
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