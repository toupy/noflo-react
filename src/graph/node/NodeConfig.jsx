

export default class NodeConfig {

}

export const nodeSize = {
    defaultNodeRadius: 8,
    defaultNodeSize: 72
}
export const config = {
    background: {
        className: "node-bg",
        rx: nodeSize.defaultNodeRadius,
        ry: nodeSize.defaultNodeRadius,
    },
    border: {
        rx: nodeSize.defaultNodeRadius,
        ry: nodeSize.defaultNodeRadius,
        className: "node-border drag"
    },
    innerRect: {
        rx: nodeSize.defaultNodeRadius - 2,
        ry: nodeSize.defaultNodeRadius - 2,
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