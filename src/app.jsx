'use strict';

import React from 'react';
import { render } from 'react-dom';
import Editor from './Editor/Editor.jsx';
import EditorConfig from './Editor/EditorConfig.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './Redux/reducers/reducers.jsx'
import App from './Redux/Components/App.jsx'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './Redux/actions/actions.jsx';

render(
    <Editor class="app-svg" data={data}>
        <EditorConfig width="600px" height="600px" backgroundColor="#666666">

        </EditorConfig>
    </Editor>,
    document.getElementById('app')
);


let store = createStore(todoApp);

// Log the initial state

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('todoList')
)


