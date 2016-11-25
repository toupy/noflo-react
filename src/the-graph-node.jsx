import React from 'react';
import SVGTools from './tools/factories/svg/SVGFactory';
import Tools, { merge }from './tools/Tools';
import nodeConfig, { nodeSize }from './graph/node/NodeConfig';


(function(context) {
    "use strict";

    var TheGraph = context.TheGraph;

    TheGraph.config.node = {
        background: {
            className: "node-bg"
        },
        border: {
            rx: nodeSize.defaultNodeRadius,
            ry: nodeSize.defaultNodeRadius,
            className: "node-border drag"
        },
        innerRect: {
            rx: nodeSize.defaultNodeRadius - 2,
            ry: nodeSize.defaultNodeRadius - 2,
            x: 3,
            y: 3,
            className: "node-rect drag"
        },
        icon: {
            ref: "icon",
            className: "icon node-icon drag"
        },
        iconsvg: {
            className: "icon node-icon drag"
        },
        labelBackground: {
            className: "node-label-bg"
        },
        labelRect: {
            className: "text-bg-rect"
        },
        labelText: {
            className: "node-label"
        },
        sublabelBackground: {
            className: "node-sublabel-bg"
        },
        sublabelRect: {
            className: "text-bg-rect"
        },
        sublabelText: {
            className: "node-sublabel"
        }

    };

    TheGraph.factories.node = {
        createNodeGroup: SVGTools.createGroup,

    };

    TheGraph.factories.node = React.createClass({
        getDefaultProps: function() {
            return {
                nodeWidth: nodeSize.defaultNodeSize,
                nodeHeight: nodeSize.defaultNodeSize,
                main: {
                    className: "node drag",
                    x: 10,
                    y:10
                },
                nodeIcon: {
                    className: "icon node-icon drag",
                    x: 36,
                    y:36
                },
                nodeLabelbackground: {
                    textBackgroundRect: {
                        rx: 7,
                        ry: 7,
                        x: -20,
                        y: 80
                    },
                    nodeLabel:{
                        x: 36,
                        y: 87,
                        text: "componentPrototype"
                    }
                }
            };
        },
        render: function(){
            /**
             * initialisation du module
             */
            var backgroundRectOptions = merge(TheGraph.config.node.background, {
                width : this.props.nodeWidth, height: this.props.nodeHeight + 25
            });
            var borderRectOptions = merge(TheGraph.config.node.border, {
                width : this.props.nodeWidth, height: this.props.nodeHeight
            })
            var innerRectOptions = merge(TheGraph.config.node.innerRect ,{
                width : this.props.nodeWidth - 6, height: this.props.nodeHeight - 6
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

            return (
                <g className={this.props.main.className} transform={nodePosition}>
                    {borderRect}
                    {backgroundRect}
                    {innerRect}
                    {nodeIcon}
                    <g className="node-label-bg">
                        {nodeLabelBackground}
                        <TheGraph.factories.svg.Text
                            x={this.props.nodeLabelbackground.nodeLabel.x}
                            y={this.props.nodeLabelbackground.nodeLabel.y}
                        >
                            {this.props.nodeLabelbackground.nodeLabel.text}
                        </TheGraph.factories.svg.Text>
                    </g>
                </g>
            );
        }
    });
})(window)
