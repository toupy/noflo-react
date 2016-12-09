/**
 * actions types
 */
export const ADD_GRAPH_NODE = 'ADD_GRAPH_NODE';


/**
 *
 * @param text
 * @returns {{type: string, text: *}}
 */
export function addGraphNode(text) {
    return { type: ADD_GRAPH_NODE, text }
}