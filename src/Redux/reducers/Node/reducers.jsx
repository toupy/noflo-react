import {combineReducers} from 'redux'
import { ADD_GRAPH_NODE, SELECT_GRAPH_NODE } from '../../actions/nodeActions.jsx'
import _ from 'lodash'

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
                    sublabel: action.sublabel,
                    width: 72,
                    height: 72,
                    x: action.x,
                    y: action.y,
                    id: action.id,
                    selected: false,
                    ports: []
                }
            ];
        case SELECT_GRAPH_NODE:
            return state.map(t => {
                if(t.id === action.id) {
                    return Object.assign({}, t, {
                        selected: true
                    })
                }else{
                    return t;
                }
            });

        default:
            return state
    }
}
/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
function selection( state = 0, action ) {
    switch (action.type) {
        case SELECT_GRAPH_NODE:
           return action.id;
        default:
            return state
    }
}

export const nodeApp = combineReducers({
    nodes: nodes,
    selectedNodeId: selection
});

export default nodeApp

