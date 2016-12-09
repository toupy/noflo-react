/**
 * actions types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
/**
 * other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
/**
 * action creators
 * @param text
 */

/**
 *
 * @param text
 * @returns {{type: string, text: *}}
 */
export function addTodo(text) {
    return { type: ADD_TODO, text }
}

/**
 *
 * @param index
 * @returns {{type: string, index: *}}
 */
export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

/**
 * 
 * @param filter
 * @returns {{type: string, filter: *}}
 */
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}