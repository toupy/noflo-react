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
export function addNodePort ( label ) {
    return {
        type: ADD_NODE_PORT,
        label: label,
        id: nextPortId++
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