import { combineReducers } from 'redux'
import { ADD_NODE_PORT, SELECT_NODE_PORT } from '../../actions/portActions.jsx'
import _ from 'lodash'

/**
 *
 * @param state
 * @param action
 * @returns {number|*|NodeFilter}
 */
function ports( state = [], action) {
    switch (action.type) {
        case ADD_NODE_PORT:
            return [
                ...state,
                {
                    label: action.label,
                    id: action.id,
                    selected: false,
                }
            ];
        default:
            return state
    }
}

function selection( state = 0, action ) {
    switch (action.type) {
        case SELECT_NODE_PORT:
           return action.id;
        default:
            return state
    }
}

export const portApp = combineReducers({
    ports: ports,
    selectedPortId: selection
});

export default portApp

