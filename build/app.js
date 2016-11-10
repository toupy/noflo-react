/**
 * Created by frup68917 on 10/11/2016.
 */
// var Editor = ReactDOM.render(
//     React.createElement(TheGraph.Editor, {
//         width: 800,
//         height: 600
//     }),
//     document.getElementById('app')
// );

// var editor = ReactDOM.render(
//     <TheGraph.Editor height="600" class="app-svg"/>,
//     document.getElementById('app')
// );

var editor = ReactDOM.render(React.createElement(TheGraph.Editor, { height: "600", "class": "app-svg", data: data }), document.getElementById('app'));
