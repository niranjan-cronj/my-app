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
  {
    data: {
      id: "edge_1",
      label: "edge_1",
      source: "node1",
      target: "node2",
    },
  },
  {
    data: {
      id: "edge_2",
      label: "edge_2",
      source: "node1",
      target: "node2",
    },
  },
];

const stylesheet = [
  node_style,
  edge_style,
];

const layout = { name: "grid" };

const node_listener = function (event) {
  console.log("Node clicked. Id is ", event.target.id());
  alert(`Clicked on node ${event.target.id()}.`);
};

const edge_listener = function (event) {
  console.log("Edge clicked. Id is ", event.target.id());
  alert(`Clicked on edge ${event.target.id()}.`);
};

const export_data = {
  elements,
  stylesheet,
  layout,
  node_listener,
  edge_listener,
};

export default export_data;
