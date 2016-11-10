(function (context) {
    "use strict";

    var TheGraph = context.TheGraph;

    TheGraph.config.nodeSize = {
        defaultNodeRadius: 8,
        defaultNodeSize: 72
    };

    TheGraph.config.node = {
        background: {
            className: "node-bg"
        },
        border: {
            rx: TheGraph.config.nodeSize.defaultNodeRadius,
            ry: TheGraph.config.nodeSize.defaultNodeRadius,
            className: "node-border drag"
        },
        innerRect: {
            rx: TheGraph.config.nodeSize.defaultNodeRadius - 2,
            ry: TheGraph.config.nodeSize.defaultNodeRadius - 2,
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
        createNodeGroup: TheGraph.factories.createGroup

    };

    TheGraph.factories.node = React.createClass({
        displayName: "node",

        getDefaultProps: function () {
            return {
                nodeWidth: TheGraph.config.nodeSize.defaultNodeSize,
                nodeHeight: TheGraph.config.nodeSize.defaultNodeSize,
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
        },
        render: function () {
            /**
             * initialisation du module
             */
            var backgroundRectOptions = TheGraph.merge(TheGraph.config.node.background, {
                width: this.props.nodeWidth, height: this.props.nodeHeight + 25
            });
            var borderRectOptions = TheGraph.merge(TheGraph.config.node.border, {
                width: this.props.nodeWidth, height: this.props.nodeHeight
            });
            var innerRectOptions = TheGraph.merge(TheGraph.config.node.innerRect, {
                width: this.props.nodeWidth - 6, height: this.props.nodeHeight - 6
            });

            /**
             *  Création du cadre
             */
            var nodePosition = "translate(" + this.props.data.x + ", " + this.props.data.y + ")";
            var backgroundRect = TheGraph.factories.svg.Rectangle(backgroundRectOptions);
            var innerRect = TheGraph.factories.svg.Rectangle(innerRectOptions);
            var borderRect = TheGraph.factories.svg.Rectangle(borderRectOptions);

            /**
             * @TODO valoriseer ce qui suit
             */
            var nodeIcon = TheGraph.factories.svg.Text(this.props.innerRect);
            var nodeLabelBackground = TheGraph.factories.svg.Rectangle(this.props.nodeLabelbackground.textBackgroundRect);
            var labelText = TheGraph.factories.svg.Text(this.props.nodeLabelbackground.nodeLabel);

            return React.createElement(
                "g",
                { className: this.props.main.className, transform: nodePosition },
                borderRect,
                backgroundRect,
                innerRect,
                nodeIcon,
                React.createElement(
                    "g",
                    { className: "node-label-bg" },
                    nodeLabelBackground,
                    React.createElement(
                        TheGraph.factories.svg.Text,
                        {
                            x: this.props.nodeLabelbackground.nodeLabel.x,
                            y: this.props.nodeLabelbackground.nodeLabel.y
                        },
                        this.props.nodeLabelbackground.nodeLabel.text
                    )
                )
            );
        }
    });
})(window);
