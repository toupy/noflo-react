"use strict";

import { connect } from 'react-redux'
import SelectedNode from '../Components/Editor/SelectedNode.jsx'

console.log("SelectedNode");
console.log(SelectedNode);

const mapStateToProps = (state) => {
    return {
        nodes: state.nodes,
        selectedNode: state.selectedNode,
    }
};


/**
 * Connect to the layout
 */
const SelectedNodeContainer = connect(
    mapStateToProps,
)(SelectedNode);

export default SelectedNodeContainer