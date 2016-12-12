/**
 * @type {number}
 */
let nextNodeId = 0;
/**
 * actions types
 */
export const ADD_GRAPH_NODE = 'ADD_GRAPH_NODE';
/**
 * @param text
 * @returns {{type: string, text: *}}
 */
export function addGraphNode(label) {
    return {
        type: ADD_GRAPH_NODE,
        label,
        id: nextNodeId++
    }
}