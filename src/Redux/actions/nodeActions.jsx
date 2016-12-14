/**
 * @type {number}
 */
let nextNodeId = 0;
/**
 *
 * @type {number}
 */
let nextPortId = 0;
/**
 * actions types
 */
export const ADD_GRAPH_NODE = 'ADD_GRAPH_NODE';
export const SELECT_GRAPH_NODE = 'SELECT_GRAPH_NODE';
export const ADD_NODE_PORT = 'ADD_NODE_PORT';
/**
 * @param text
 * @returns {{type: string, text: *}}
 */
export function addGraphNode(label,sublabel, posx = 10, posy = 10) {
    return {
        type: ADD_GRAPH_NODE,
        label: label,
        sublabel: sublabel,
        x: posx,
        y: posy,
        id: nextNodeId++
    }
}

/**
 *
 * @param id
 * @returns {{type: string}}
 */
export function selectGraphNode(id) {

    return {
        type: SELECT_GRAPH_NODE,
        id

    }
}
/**
 *
 * @param id
 * @returns {{type: string}}
 */
export function addNodePort(id) {

    return {
        type: ADD_NODE_PORT,
        id: nextNodeId++
    }
}