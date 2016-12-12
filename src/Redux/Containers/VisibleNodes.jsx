import { connect } from 'react-redux'
import Nodes from '../Components/SVG/Nodes.jsx'
import { addGraphNode } from '../actions/nodeActions.jsx'

const mapStateToProps = (state) => {
    return {
        nodes: state.nodes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNodeClick: () => {
            dispatch(addGraphNode('LABEL'))
        }
    }
};

/**
 * Connect nodes 's layout
 */
const VisibleNodes = connect(
    mapStateToProps,
)(Nodes);

export default VisibleNodes