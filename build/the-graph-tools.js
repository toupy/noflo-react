(function (context) {
    "use strict";

    var TheGraph = context.TheGraph = {
        factories: {
            svg: {}
        },
        config: {}
    };

    TheGraph.factories.createGroup = function (options, content) {
        var args = [options];
        if (Array.isArray(content)) {
            args = args.concat(content);
        }

        return React.DOM.g.apply(React.DOM.g, args);
    };
    TheGraph.factories.svg.Rectangle = function (options) {
        return React.DOM.rect(options);
    };

    TheGraph.factories.svg.Text = function (options) {
        return React.DOM.text(options);
    };

    // The `merge` function provides simple property merging.
    TheGraph.merge = function (src, dest, overwrite) {
        // Do nothing if neither are true objects.
        if (Array.isArray(src) || Array.isArray(dest) || typeof src !== 'object' || typeof dest !== 'object') return dest;

        // Default overwriting of existing properties to false.
        overwrite = overwrite || false;

        for (var key in src) {
            // Only copy properties, not functions.
            if (typeof src[key] !== 'function' && (!dest[key] || overwrite)) dest[key] = src[key];
        }

        return dest;
    };
})(window);
