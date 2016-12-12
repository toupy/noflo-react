'use strict';

import React from 'react';
import { render } from 'react-dom';
import Editor from './Editor/Editor.jsx';
import EditorConfig from './Editor/EditorConfig.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VisibleNodes from './Redux/Containers/VisibleNodes.jsx'
import AddNodeButton from './Redux/Components/AddNodeButton.jsx'
import nodeApp from './Redux/reducers/Node/reducers.jsx'
import { addGraphNode } from './Redux/actions/nodeActions.jsx';

let storeGraph = createStore(nodeApp);
let unsubscribeGraph = storeGraph.subscribe(() =>
    console.log(storeGraph.getState())
);

// Dispatch some actions
storeGraph.dispatch(addGraphNode('NODE TEST'));
storeGraph.dispatch(addGraphNode('NODE TEST1'));
storeGraph.dispatch(addGraphNode('NODE TEST2'));

render(
    <Provider store={storeGraph}>
        <Editor class="app-svg">
            <EditorConfig
                width="1000px" height="600px"
                top="120px" left="220px"
                backgroundColor="#666666"
                />
            <AddNodeButton />
        </Editor>
    </Provider>
,
    document.getElementById('app')
);



