'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor/Editor.jsx';
import EditorConfig from './Editor/EditorConfig.jsx';

window.editor = ReactDOM.render(
    <Editor class="app-svg" data={data}>
        <EditorConfig width="600px" height="600px" backgroundColor="#666666">

        </EditorConfig>
    </Editor>,
    document.getElementById('app')
);


