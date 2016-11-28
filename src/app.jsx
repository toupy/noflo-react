'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor.jsx';

var editor = ReactDOM.render(
    <Editor height="600" width="600" class="app-svg" data={data}/>,
    document.getElementById('app')
);

