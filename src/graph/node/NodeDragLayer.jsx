import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import NodeBase from './base/NodeBase.jsx';

    /**
     *
     * @param monitor
     * @returns {{item, itemType, initialOffset, currentOffset: *, isDragging: *}}
     */
    function collect(monitor) {
        var clientOffset = monitor.getClientOffset();
        // console.log(clientOffset);
        if(clientOffset !== null) {
            // console.log(document.elementFromPoint(clientOffset.x, clientOffset.y));
        }
        // console.log('-------------------------------------------------------------');
        // console.log('monitor.getInitialClientOffset()');
        // console.log(monitor.getInitialClientOffset());
        // console.log('monitor.getInitialSourceClientOffset()');
        // console.log(monitor.getInitialSourceClientOffset());
        // console.log('monitor.getClientOffset()');
        // console.log(monitor.getClientOffset());
        // console.log('monitor.getDifferenceFromInitialOffset()');
        // console.log(monitor.getDifferenceFromInitialOffset());
        // console.log('monitor.getSourceClientOffset()');
        // console.log(monitor.getSourceClientOffset());
        // console.log('-------------------------------------------------------------');
        return {
            item: monitor.getItem(),
            itemType: monitor.getItemType(),
            /**
             *
             */
            initialClientOffset: monitor.getInitialClientOffset(),
            /**
             *
             */
            initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
            /**
             * while dragging, difference between the left top corner of the screen => 0,0 position of mouse
             */
            clientOffset: monitor.getClientOffset(),
            /**
             *
             */
            differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
            /**
             *
             */
            sourceClientOffset: monitor.getSourceClientOffset(),
            isDragging: monitor.isDragging()
        };
    }
    /**
     *
     */
    class NodeDragLayer extends Component{
        render() {
            const { item, itemType, isDragging } = this.props;
            const { initialClientOffset, initialSourceClientOffset, clientOffset, differenceFromInitialOffset,sourceClientOffset } = this.props;

            if (!isDragging) {
                return null;
            }

            return (
                <NodeBase x={clientOffset.x - 120} y={clientOffset.y - 120} style={{
                    opacity: isDragging ? 0.5 : 1
                }}/>
            );
        }
    }

    /**
     *
     * @type {{item: (*|boolean|string), itemType: (number|boolean|*), initialOffset: *, currentOffset: *, isDragging: *, snapToGrid: *}}
     */
    NodeDragLayer.propTypes = {
        item: PropTypes.object,
        itemType: PropTypes.string,
        // initialClientOffset: PropTypes.shape({
        //     x: PropTypes.number.isRequired,
        //     y: PropTypes.number.isRequired
        // }),
        // currentOffset: PropTypes.shape({
        //     x: PropTypes.number.isRequired,
        //     y: PropTypes.number.isRequired
        // }),
        // initialSourceClientOffset: PropTypes.shape({
        //     x: PropTypes.number.isRequired,
        //     y: PropTypes.number.isRequired
        // }),
        // differenceFromInitialOffset: PropTypes.shape({
        //     x: PropTypes.number.isRequired,
        //     y: PropTypes.number.isRequired
        // }),
        // sourceClientOffset: PropTypes.shape({
        //     x: PropTypes.number.isRequired,
        //     y: PropTypes.number.isRequired
        // }),
        // isDragging: PropTypes.bool.isRequired,
        // snapToGrid: PropTypes.bool.isRequired
    };

    export default DragLayer(collect)(NodeDragLayer);