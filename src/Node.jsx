"use strict";

import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import SVGTools from './tools/factories/svg/SVGFactory';
import Tools, {merge}from './tools/Tools';
import nodeConfig, {config, nodeSize}from './graph/node/NodeConfig';

console.log(DragSource);

const nodeSource = {
    beginDrag: function(props, monitor, component) {
        console.log('dragging');
        return {
            name: props.label
        };
    }
};

function collect(connect, monitor) {
    console.log(monitor.getInitialClientOffset());
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const propTypes = {
    // name: PropTypes.string.isRequired,

    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
};

export class Node extends Component {

    render() {
        const { connectDragSource, isDragging } = this.props;
        /**
         * initialisation du module
         */
        var backgroundRectOptions = merge(config.background, {
            width: this.props.nodeWidth, height: this.props.nodeHeight + 25
        });
        var borderRectOptions = merge(config.border, {
            width: this.props.nodeWidth, height: this.props.nodeHeight
        })
        var innerRectOptions = merge(config.innerRect, {
            width: this.props.nodeWidth - 6, height: this.props.nodeHeight - 6
        });
        /**
         *  Création du cadre
         */
        var nodePosition = "translate(" + this.props.data.x + ", " + this.props.data.y + ")";
        var backgroundRect = SVGTools.Rectangle(backgroundRectOptions);
        var innerRect = SVGTools.Rectangle(innerRectOptions);
        var borderRect = SVGTools.Rectangle(borderRectOptions);
        /**
         * @TODO valoriseer ce qui suit
         */
        var nodeIcon = SVGTools.Text(this.props.innerRect);
        var nodeLabelBackground = SVGTools.Rectangle(this.props.nodeLabelbackground.textBackgroundRect);
        var labelText = SVGTools.Text(this.props.nodeLabelbackground.nodeLabel);

        return connectDragSource(
            <g className={this.props.main.className} transform={nodePosition}>
                {borderRect}
                {backgroundRect}
                {innerRect}
                {nodeIcon}
                <g className="node-label-bg">
                    {nodeLabelBackground}
                    <SVGTools.Text
                        x={this.props.nodeLabelbackground.nodeLabel.x}
                        y={this.props.nodeLabelbackground.nodeLabel.y}
                    >
                        {this.props.nodeLabelbackground.nodeLabel.text}
                    </SVGTools.Text>
                </g>
            </g>
        );
    }

    static get defaultProps() {
        return {
            nodeWidth: nodeSize.defaultNodeSize,
            nodeHeight: nodeSize.defaultNodeSize,
            main: {
                className: "node drag",
                x: 10,
                y: 10
            },
            nodeIcon: {
                className: "icon node-icon drag",
                x: 36,
                y: 36
            },
            nodeLabelbackground: {
                textBackgroundRect: {
                    rx: 7,
                    ry: 7,
                    x: -20,
                    y: 80
                },
                nodeLabel: {
                    x: 36,
                    y: 87,
                    text: "componentPrototype"
                }
            }
        };
    }
}

Node.propTypes = propTypes;


export default DragSource(ItemTypes.NODE, nodeSource, collect)(Node);
