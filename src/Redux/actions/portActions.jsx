/**
 *
 * @type {number}
 */
let nextPortId = 0;
/**
 * actions types
 */
export const ADD_NODE_PORT = 'ADD_NODE_PORT';
export const SELECT_NODE_PORT = 'SELECT_NODE_PORT';
/**
 * @param text
 * @returns {{type: string, text: *}}
 */
export function addNodePort ( id, label, input_type = 'IN' ) {
    return {
        type: ADD_NODE_PORT,
        label: label,
        id: nextPortId++,
        node_id: id,
        input_type: input_type
    }
}
/**
 *
 * @param id
 * @returns {{type: string}}
 */
export function selectNodePort(id) {

    return {
        type: SELECT_NODE_PORT,
        id
    }
}