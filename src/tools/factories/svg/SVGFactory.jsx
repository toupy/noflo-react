import React from 'react';

export default class SVGFactory {
    /**
     * @param options
     * @returns {*}
     * @constructor
     */
    static Rectangle ( options) {
        /**
         *
         */
        return React.DOM.rect(options);
    }

    /**
     *
     * @param options
     * @returns {*}
     * @constructor
     */
    static Text (options) {
        return React.DOM.text(options);
    }

    static createGroup (options, content) {
        var args = [options];
        if (Array.isArray(content)) {
            args = args.concat(content);
        }

        return React.DOM.g.apply(React.DOM.g, args);
    }
}
