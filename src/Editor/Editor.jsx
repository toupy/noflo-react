"use strict";

import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import MouseBackEnd from 'react-dnd-mouse-backend'
import { DragDropContext } from 'react-dnd';
import EditorConfig from './EditorConfig.jsx'
import { merge }from '../tools/Tools.jsx';
import Node from '../graph/Node.jsx';
import NodeDragLayer from '../graph/node/NodeDragLayer.jsx';


export class Editor extends Component {
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        /**
         * is there a Config react Element inside my Editor ?
         */
        let configComponent;
        /**
         * Does an EditorConfig Component exists ?
         */
        React.Children.forEach(this.props.children, function (child) {
            if(child.type === EditorConfig) {
                configComponent = child;
            }
        });
        if(configComponent) {
            /**
             * merge les propriétés de possibleConfig dans les propriétés du composant
             * @type {*}
             */
            this.configComponent = configComponent;
        }
        /**
         *
         * @type {Array}
         */
        var nodes = this.props.data.app.graph.nodes;
        this.state = {
            nodes: nodes
        }
    }

    /**
     * Default properties of an editor
     * @returns {{width: number, height: number, class: string}}
     */
    static get defaultProps() {
        return {
            width: 1024,
            height: 768,
            class: "app-svg",
            backgroundColor: "#0000000",
        };
    };

    render() {
        /**
         * Le composant ConfigEditor existe ? alors on prend la couleur de fond comme paramètre
         * @type {string|boolean|string|string|string|*}
         */
        const backgroundColor = (this.configComponent != undefined)?this.configComponent.props.backgroundColor:this.props.backgroundColor;
        const width = (this.configComponent != undefined)?this.configComponent.props.width:this.props.width;
        const height = (this.configComponent != undefined)?this.configComponent.props.height:this.props.height;

        /**
         *
         * @type {number}
         */
        var i = 0;
        var nodes = this.state.nodes.map(function (node) {
            i++;
            return (
                <Node data={node} key={'node_' + i}/>
            );
        });

        return (
            <div>
                <input type="button" value="AddNode" onClick={this.addNode.bind(this)}/>
                <svg width={width} height={height} className={this.props.class} style={{
                    backgroundColor: backgroundColor,
                    position: 'absolute',
                    left: '120px',
                    top: '120px'
                }}>
                    {this.props.children}
                    <g className="view" width="100%" height="100%">
                        <g className="graph">
                            <g className="nodes" id="nodes">
                                {nodes}
                                <NodeDragLayer/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }

    addNode() {
        this.setState(function(prevState, props) {
            nodes: prevState.nodes.push({
                label: "Node ADD",
                sublabel: "PR1 / it",
                width: 72,
                height: 72,
                x: 10,
                y: 10,
            })
        })
    }
}

Editor = DragDropContext(MouseBackEnd)(Editor);


/**
 * @link(See https://discuss.reactjs.org/t/how-to-determine-what-type-of-component-a-child-is/3951)
 */
// Editor.propTypes = {
//     children: function(props, propName, componentName) {
//         const prop = props[propName];
//
//         let error = null;
//         React.Children.forEach(prop, function (child) {
//             if(child.type === EditorConfig) {
//                 console.log('Find EditorConfig');
//                 console.log(child.props);
//             }
//         })
//     }
// };

export default Editor;
