import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import NodeBase from './base/NodeBase.jsx';
    /**
     *
     * @param connect
     * @param monitor
     * @returns {{connectDragSource: *, isDragging: *, connectDragPreview: *}}
     */
    function collect(monitor) {
        console.log(monitor.getInitialClientOffset());
        console.log(monitor.getInitialSourceClientOffset());
        console.log(monitor.getClientOffset());
        console.log(monitor.getDifferenceFromInitialOffset());
        console.log(monitor.getSourceClientOffset());
        return {
            item: monitor.getItem(),
            itemType: monitor.getItemType(),
            initialOffset: monitor.getInitialClientOffset(),
            currentOffset: monitor.getSourceClientOffset(),
            isDragging: monitor.isDragging()
        };
    }
    /**
     *
     */
    class NodeDragLayer extends Component{
        render() {
            var options = {
                label: "GHOST",
                sublabel: "in the SHELL",
                width: 72,
                height: 72,
                x: 10,
                y: 10,
            };

            const { item, itemType, isDragging } = this.props;
            const { initialOffset, currentOffset } = this.props;

            if (!isDragging) {
                return null;
            }

            return (
                <NodeBase x={currentOffset.x} y={currentOffset.y}/>
            );
        }
    }

    /**
     *
     * @type {{item: (*|boolean|string), itemType: (number|boolean|*), initialOffset: *, currentOffset: *, isDragging: *, snapToGrid: *}}
     */
    NodeDragLayer. propTypes = {
        item: PropTypes.object,
        itemType: PropTypes.string,
        initialOffset: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }),
        currentOffset: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }),
        isDragging: PropTypes.bool.isRequired,
        // snapToGrid: PropTypes.bool.isRequired
    };

    export default DragLayer(collect)(NodeDragLayer);