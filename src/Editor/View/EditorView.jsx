"use strict";

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

export default class EditorView extends Component {

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
        //
        const { width, height, className, style } = this.props;
        return (
            <svg width={width} height={height} className={className} style={style}>
                <g className="view" width="100%" height="100%">
                    {this.props.children}
                </g>
            </svg>
        )
    }
}