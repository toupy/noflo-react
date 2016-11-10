(function (context) {
    "use strict";

    var TheGraph = context.TheGraph;

    TheGraph.Editor = React.createClass({
        displayName: "Editor",

        config: {},
        getDefaultProps: function () {
            return {
                width: 1024,
                height: 768,
                class: "app-svg"
            };
        },
        render: function () {

            var appOptions = TheGraph.merge(TheGraph.config.node.border, {
                width: this.props.nodeWidth, height: this.props.nodeHeight
            });
            var nodes = this.props.data.app.graph.nodes.map(function (node) {
                console.log("NODE => ");
                console.log(node);
                return React.createElement(TheGraph.factories.node, { data: node });
            });
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    "APP SVG"
                ),
                React.createElement(
                    "svg",
                    { width: this.props.width, height: this.props.height, className: this.props.class },
                    React.createElement(
                        "g",
                        { className: "view", width: this.props.width, height: this.props.height },
                        React.createElement(
                            "g",
                            { className: "graph" },
                            React.createElement(
                                "g",
                                { className: "nodes" },
                                nodes
                            )
                        )
                    )
                )
            );
        }
    });
})(window);
