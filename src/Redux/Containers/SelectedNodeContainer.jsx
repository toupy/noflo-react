"use strict";
import { connect } from 'react-redux'
import SelectedNode from '../Components/Editor/SelectedNode.jsx'
import _ from 'lodash'

const mapStateToProps = (state) => {
    var node = _.find(state.nodes.nodes, {id: state.nodes.selectedNodeId});
    return {
        // nodes: state.nodes,
        selectedNode: node,
    }
};


/**
 * Connect to the layout
 */
const SelectedNodeContainer = connect(
    mapStateToProps,
)(SelectedNode);

export default SelectedNodeContainer
