import {combineReducers} from 'redux'
import { ADD_GRAPH_NODE, SELECT_GRAPH_NODE } from '../../actions/nodeActions.jsx'

/**
 *
 * @param state
 * @param action
 * @returns {number|*|NodeFilter}
 */
function nodes( state = [], action) {
    switch (action.type) {
        case ADD_GRAPH_NODE:
            return [
                ...state,
                {
                    label: action.label,
                    sublabel: "PR1 / it",
                    width: 72,
                    height: 72,
                    x: 10,
                    y: 10,
                    id: action.id,
                    selected: false,
                }
            ];
        case SELECT_GRAPH_NODE:
            return state.map((node, index) => {
                if(index === action.id) {
                    return Object.assign({}, node, {
                        selected: !node.selected
                    })
                }
                return node
            });
        default:
            return state
    }
}

function selection( state = 0, action ) {
    switch (action.type) {
        case SELECT_GRAPH_NODE:
            return action.id
        default:
            return state
    }
}

export const nodeApp = combineReducers({
    nodes: nodes,
    selectedNode: selection
});

export default nodeApp

