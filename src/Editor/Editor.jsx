"use strict";

import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import MouseBackEnd from 'react-dnd-mouse-backend'
import { DragDropContext } from 'react-dnd';
import Tools, { merge }from '../tools/Tools.jsx';
import nodeConfig, { config, nodeSize }from '../graph/node/NodeConfig.jsx';
import Node from '../graph/Node.jsx';
import NodeBase from '../graph/node/base/NodeBase.jsx';
import NodeDragLayer from '../graph/node/NodeDragLayer.jsx';


export class Editor extends Component {

    constructor(props) {
        super(props);
        // this.dragShadowNodeProperties =  {
        //     label: "NODE SHADOW",
        //     sublabel: "drag_event",
        //     width: 72,
        //     height: 72,
        //     x: 10,
        //     y: 200
        //
        // };
        // this.dragShadowData = <NodeBase data={this.dragShadowNodeProperties} key="99999"/>;
    }

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
                <Node data={node} key={'node_' + i}/>
            );
        });

        return (
            <div>
                <div>APP SVG</div>
                <svg width={this.props.width} height={this.props.height} className={this.props.class}>
                    <g className="view" width={this.props.width} height={this.props.height}>
                        <g className="graph">
                            <g className="nodes" id="nodes">
                                {nodes}
                                {this.dragShadowData}
                                <NodeDragLayer/>
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
