'use strict';

import React from 'react';
import { render } from 'react-dom';
import Editor from './Editor/Editor.jsx';
import EditorConfig from './Editor/EditorConfig.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import editorApp from './Redux/reducers/index.jsx'
import { addGraphNode, selectGraphNode } from './Redux/actions/nodeActions.jsx';
import { addNodePort } from './Redux/actions/portActions.jsx';

let storeGraph = createStore( editorApp );
let unsubscribeGraph = storeGraph.subscribe(() =>
    console.log(storeGraph.getState())
);

// Dispatch some actions
storeGraph.dispatch(addGraphNode('NODE TEST', 'SubLabel', 10, 10));
storeGraph.dispatch(addGraphNode('NODE TEST1', 'SubLabel', 10, 200));
var node_2 = storeGraph.dispatch(addGraphNode('NODE TEST2', 'SubLabel', 200, 200));
var id_port = storeGraph.dispatch(addNodePort(node_2.id, 'port', 'IN'));
var id_port = storeGraph.dispatch(addNodePort(node_2.id, 'coreReducer', 'IN'));
var id_port = storeGraph.dispatch(addNodePort(node_2.id, 'coreAppMobile', 'OUT'));
storeGraph.dispatch(selectGraphNode(2));

render(
    <Provider store={storeGraph}>
        <Editor class="app-svg">
            <EditorConfig
                width="1000px" height="600px"
                top="120px" left="220px"
                backgroundColor="#111111"
                />
        </Editor>
    </Provider>
,
    document.getElementById('app')
);



