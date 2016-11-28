"use strict";

import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import MouseBackEnd from 'react-dnd-mouse-backend'
import { DragDropContext } from 'react-dnd';
import Tools, { merge }from './tools/Tools';
import nodeConfig, { config, nodeSize }from './graph/node/NodeConfig';
import Node from './Node.jsx';


export class Editor extends Component {

    static get defaultProps() {
        return {
            width: 1024,
            height: 768,
            class: "app-svg"
        };
    };

    render() {
        var appOptions = merge(config.border, {
            width: this.props.nodeWidth, height: this.props.nodeHeight
        });

        var i = 0;
        var nodes = this.props.data.app.graph.nodes.map(function (node) {
            i++;
            return (
                <Node data={node} key={i}/>
            );
        });

        return (
            <div>
                <div>APP SVG</div>
                <svg width={this.props.width} height={this.props.height} className={this.props.class}>
                    <g className="view" width={this.props.width} height={this.props.height}>
                        <g className="graph">
                            <g className="nodes">
                                {nodes}
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}

Editor = DragDropContext(MouseBackEnd)(Editor);

export default Editor;
