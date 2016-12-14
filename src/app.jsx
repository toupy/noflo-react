'use strict';

import React from 'react';
import { render } from 'react-dom';
import Editor from './Editor/Editor.jsx';
import EditorConfig from './Editor/EditorConfig.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import nodeApp from './Redux/reducers/Node/reducers.jsx'
import { addGraphNode, selectGraphNode, addNodePort } from './Redux/actions/nodeActions.jsx';

let storeGraph = createStore(nodeApp);
let unsubscribeGraph = storeGraph.subscribe(() =>
    console.log(storeGraph.getState())
);

// Dispatch some actions
storeGraph.dispatch(addGraphNode('NODE TEST', 'SubLabel', 10, 10));
storeGraph.dispatch(addGraphNode('NODE TEST1', 'SubLabel', 10, 200));
var id = storeGraph.dispatch(addGraphNode('NODE TEST2', 'SubLabel', 200, 200));
var id_port = storeGraph.dispatch(addNodePort(id));
// storeGraph.dispatch(selectGraphNode(2));

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



