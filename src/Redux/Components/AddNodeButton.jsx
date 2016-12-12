import React from 'react'
import { connect } from 'react-redux'
import { addGraphNode} from '../actions/nodeActions.jsx'

let AddNodeButton = ({ dispatch }) => {
    return(
        <div onClick={
            e => {
                dispatch(addGraphNode("Node"))
            }
        } >Add a node</div>
    )
};

AddNodeButton = connect()(AddNodeButton);

export default AddNodeButton;
