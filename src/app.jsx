var data = {
    app:{
        appName:"Mon appli",
        graph: {
            graphName: "Mon graph",
            nodes: [
                {
                    label: "Node 1",
                    sublabel: "PR1 / it",
                    width: 72,
                    height: 72,
                    x: 10,
                    y: 10

                },
                {
                    label: "Node 2",
                    sublabel: "PR2 / it2",
                    width: 72,
                    height: 72,
                    x: 150,
                    y: 110,
                },
                {
                    label: "Node 3",
                    sublabel: "PR3 / it3",
                    width: 72,
                    height: 72,
                    x: 300,
                    y: 10,
                }
            ]
        }
    }
}

var editor = ReactDOM.render(
    <TheGraph.Editor height="600" class="app-svg" data={data}/>,
    document.getElementById('app')
);
