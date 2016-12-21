"use strict";

import React, { Component, PropTypes } from 'react';
import SVGTools from '../../../../tools/factories/svg/SVGFactory.jsx';
import Tools, {merge}from '../../../../tools/Tools.jsx';
import nodeConfig, {config, nodeSize}from '../../../../Components/graph/node/NodeConfig.jsx';

export default class NodeBase extends Component {

    render() {
        const { connectDragSource, isDragging, connectDragPreview } = this.props;
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

        var x = this.props.x;
        var y = this.props.y;
        /**
         *  Création du cadre
         */
        var nodePosition = "translate(" + x + ", " + y + ")";
        var backgroundRect = SVGTools.Rectangle(backgroundRectOptions);
        var innerRect = SVGTools.Rectangle(innerRectOptions);
        var borderRect = SVGTools.Rectangle(borderRectOptions);
        /**
         * @TODO valoriseer ce qui suit
         */
        var nodeIcon = SVGTools.Text(this.props.innerRect);
        var nodeLabelBackground = SVGTools.Rectangle(this.props.nodeLabelbackground.textBackgroundRect);
        var labelText = this.props.label;

        return (
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
                        {labelText}
                    </SVGTools.Text>
                </g>
            </g>
        );
    }

    static get defaultProps() {
        return {
            x: 10,
            y: 10,
            label: 'GHOST...',
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
