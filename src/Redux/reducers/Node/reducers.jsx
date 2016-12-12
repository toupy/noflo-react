import {combineReducers} from 'redux'
import { ADD_GRAPH_NODE } from '../../actions/nodeActions.jsx'

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
                    id: action.id
                }
            ];
        default:
            return state
    }
}

export const nodeApp = combineReducers({
    nodes,
});

export default nodeApp

