import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import NodeBase from './base/NodeBase.jsx';

    /**
     *
     * @param monitor
     * @returns {{item, itemType, initialOffset, currentOffset: *, isDragging: *}}
     */
    function collect(monitor) {
        console.log('-------------------------------------------------------------');
        // console.log('monitor.getInitialClientOffset()');
        // console.log(monitor.getInitialClientOffset());
        console.log('monitor.getInitialSourceClientOffset()');
        console.log(monitor.getInitialSourceClientOffset());
        // console.log('monitor.getClientOffset()');
        // console.log(monitor.getClientOffset());
        // console.log('monitor.getSourceClientOffset()');
        // console.log(monitor.getSourceClientOffset());
        // console.log('monitor.getDifferenceFromInitialOffset()');
        // console.log(monitor.getDifferenceFromInitialOffset());
        console.log('-------------------------------------------------------------');
        return {
            /**
             *
             */
            item: monitor.getItem(),
            /**
             *
             */
            itemType: monitor.getItemType(),
            /**
             * coordonnées fixes : point
             * when dragging start, difference between the initial mouse position and the left top corner of the screen => 0,0 position of mouse
             */
            initialClientOffset: monitor.getInitialClientOffset(),
            /**
             * coordonnées fixes : point
             * when dragging start, difference between the initial element position and the left top corner of the screen => 0,0 position of mouse
             */
            initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
            /**
             *
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
        /**
         * Delta position du click de la souris sur l'élément que l'on drag
         * @param initialClientOffset
         * @param initialSourceClientOffset
         * @returns {{x: number, y: number}}
         */
        __getInitialElementPointerPosition(initialClientOffset, initialSourceClientOffset) {
            return {
                x: initialClientOffset.x - initialSourceClientOffset.x,
                y: initialClientOffset.y - initialSourceClientOffset.y
            }
        }
        render() {
            const { item, itemType, isDragging } = this.props;
            const { initialClientOffset, initialSourceClientOffset, clientOffset, differenceFromInitialOffset,sourceClientOffset } = this.props;

            if (!isDragging) {
                return null;
            }

            var mousePositionOnElementWhenFirstClick = this.__getInitialElementPointerPosition(initialClientOffset, initialSourceClientOffset);
            return (
                <NodeBase x={clientOffset.x - mousePositionOnElementWhenFirstClick.x - 120} y={clientOffset.y - mousePositionOnElementWhenFirstClick.y - 120} style={{
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