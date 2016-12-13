"use strict";

import React, { Component } from 'react'
import MouseBackEnd from 'react-dnd-mouse-backend'
import { DragDropContext } from 'react-dnd'
import EditorConfig from './EditorConfig.jsx'
import EditorView from './View/EditorView.jsx'
import SelectedNode from '../Redux/Containers/SelectedNodeContainer.jsx'
import VisibleNodes from '../Redux/Containers/VisibleNodes.jsx'
import AddNodeButton from '../Redux/Components/AddNodeButton.jsx'


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
            this.configComponent = configComponent;
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
            top: 0,
            left: 0,
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
        const top = (this.configComponent != undefined)?this.configComponent.props.top:this.props.top;
        const left = (this.configComponent != undefined)?this.configComponent.props.left:this.props.left;

        return (
            <div>
                <AddNodeButton />
                <SelectedNode />
                <EditorView width={width} height={height} className={this.props.class} style={{ backgroundColor: backgroundColor, position: 'absolute', left: left, top: top }}>
                    <g className="graph">
                        <VisibleNodes />
                    </g>
                </EditorView>
            </div>
        );
    }
}

Editor = DragDropContext(MouseBackEnd)(Editor);

export default Editor;
