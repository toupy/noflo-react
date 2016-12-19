"use strict";
import React, { Component, PropTypes } from 'react';

export default class ListePorts extends Component {

    render () {
        const { ports } = this.props;

        if(ports == undefined){
            return (null)
        }

        return (
            <div>
                <h3 className="label">Liste des ports : </h3>
                <ul>
                    {ports.map( port =>
                        <li>
                            {port.id} : {port.label}
                            {port.input_type=='IN'?"->" + port.input_type:"<-" + port.input_type}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
};


ListePorts.propTypes = {
    ports: PropTypes.array.isRequired
};