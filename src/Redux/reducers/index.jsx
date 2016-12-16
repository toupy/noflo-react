import { combineReducers } from 'redux'
import nodeApp from './Node/reducers.jsx'
import portApp from './Port/reducers.jsx'

export const editorApp = combineReducers({
    nodes: nodeApp,
    ports: portApp
});

export default editorApp