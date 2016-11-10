(function(context){
    "use strict";

    var TheGraph = context.TheGraph;
    
    TheGraph.Editor = React.createClass({
        config: {},
        getDefaultProps: function() {
            return {
                width: 1024,
                height: 768,
                class: "app-svg"
            };
        },
        render: function () {

            var appOptions = TheGraph.merge(TheGraph.config.node.border, {
                width : this.props.nodeWidth, height: this.props.nodeHeight
            })
            var nodes = this.props.data.app.graph.nodes.map(function(node) {
                return (
                    <TheGraph.factories.node data={node} />
                );
            })
            return (
                <div>
                    <div>APP SVG</div>
                    <svg width={this.props.width} height={this.props.height} className={this.props.class} >
                        <g className="view" width={this.props.width} height={this.props.height}>
                            <g className="graph">
                                <g className="nodes">
                                    {nodes}
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            );
        }
    });

})(window);

