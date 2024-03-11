const { node_style, edge_style } = require("../utils/node_edge_conf").default;

const elements = [
  {
    data: {
      id: "node_1",
      label: "node_1",
    },
  },
  {
    data: {
      id: "node_2",
      label: "node_2",
    },
  },
  {
    data: {
      id: "failed_edge",
      label: "failed_edge",
      source: "node_1",
      target: "node_2",
    },
  },
];

const stylesheet = [
  node_style,
  edge_style,
  {
    selector: `edge[id="failed_edge"]`,
    style: {
      ...edge_style.style,
      "line-color": "red",
      "target-arrow-color": "red",
      "target-arrow-shape": "triangle",
    },
  },
];

const layout = { name: "grid" };

export default {
  elements,
  stylesheet,
  layout,
};
