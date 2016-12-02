'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor/Editor.jsx';
import Node from './graph/Node.jsx';

var editor = ReactDOM.render(
    <Editor height="600" width="600" class="app-svg" data={data}/>,
    document.getElementById('app')
);


