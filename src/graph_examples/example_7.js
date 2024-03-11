const { node_style, edge_style } = require("../utils/node_edge_conf").default;

const elements = [
  {
    data: {
      id: "node1",
      label: "node1",
    },
  },
  {
    data: {
      id: "node2",
      label: "node2",
    },
  },
];

for (let i = 1; i <= 50; i++) {
  elements.push({
    data: {
      id: "edge_" + i,
      label: "edge_" + i,
      source: "node1",
      target: "node2",
    },
  });
}

const stylesheet = [
  node_style,
  edge_style,
  {
    selector: "#edge_15",
    style: {
      "line-color": "red",
    },
  },
];

const layout = { name: "grid" };

const export_data = {
  elements,
  stylesheet,
  layout,
};

export default export_data;
