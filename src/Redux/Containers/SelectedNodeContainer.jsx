"use strict";

import { connect } from 'react-redux'
import SelectedNode from '../Components/Editor/SelectedNode.jsx'

const mapStateToProps = (state) => {
    return {
        nodes: state.nodes,
        selectedNodeId: state.selectedNodeId,
    }
};


/**
 * Connect to the layout
 */
const SelectedNodeContainer = connect(
    mapStateToProps,
)(SelectedNode);

export default SelectedNodeContainer
