"use strict";

import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../../ItemTypes';
import SVGTools from '../../tools/factories/svg/SVGFactory.jsx';
import { merge }from '../../tools/Tools.jsx';
import { config, nodeSize }from '../graph/node/NodeConfig.jsx';



    const nodeSource = {
        beginDrag: function(props, monitor, component) {
            return {
                label: props.data.label,
                x: props.data.x,
                y: props.data.y,
            };
        },
        endDrag: function (props, monitor, component) {
            var dropPosition = monitor.getDifferenceFromInitialOffset();
            component.props.data.x = component.props.data.x + dropPosition.x;
            component.props.data.y = component.props.data.y + dropPosition.y;
        },
    };
    /**
     *
     * @param connect
     * @param monitor
     * @returns {{connectDragSource: *, isDragging: *, connectDragPreview: *}}
     */
    function collect(connect, monitor) {
        return {
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
            connectDragPreview: connect.dragPreview()
        };
    }

/**
 *
 */
export class Node extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
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
        });
        var innerRectOptions = merge(config.innerRect, {
            width: this.props.nodeWidth - 6, height: this.props.nodeHeight - 6
        });

        var x = this.props.data.x;
        var y = this.props.data.y;
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
        var nodeIcon = SVGTools.Text(this.props.iconsvg);
        var nodeLabelBackground = SVGTools.Rectangle(this.props.nodeLabelbackground.textBackgroundRect);
        var labelText = this.props.data.label;

        var inports = this.props.data.ports.filter( t => {
            return t.input_type == 'IN'
        });
        var inports_counter = inports.length + 1;
        var input_space = nodeSize.defaultNodeSize / inports_counter ;
        var outports = this.props.data.ports.filter( t => {
            return t.input_type == 'OUT'
        });
        var outports_counter = outports.length + 1;
        var output_space = nodeSize.defaultNodeSize / outports_counter;

        return connectDragSource(
            <g className={this.props.main.className} transform={nodePosition} style={
                {
                    cursor: 'pointer',
                }
            } onClick={this.props.onClick} >
                {backgroundRect}
                {borderRect}
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
                    <g className="inports">
                        {inports.map( (port, index) => {
                            const ypos = input_space * (index + 1);
                          return (
                              <circle className="node-ports" key={port.id} r="3" cy={ypos} cx="-2"/>
                          )
                        })}
                    </g>
                    <g className="outports">
                        {outports.map( (port, index) => {
                            const ypos = output_space * (index + 1);
                            return (
                                <circle className="node-ports" key={port.id} r="3" cy={ypos} cx="74"/>
                            )
                        })}
                    </g>
                </g>
            </g>

        );
    }

    static get defaultProps() {
        return {
            x: 10,
            y: 10,
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

/**
 *
 * @type {{label: *, isDragging: *, connectDragSource: *}}
 */
Node.propTypes = {
    label: PropTypes.string.isRequired,

    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};



export default DragSource(ItemTypes.NODE, nodeSource, collect)(Node);
