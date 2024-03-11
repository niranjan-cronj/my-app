const { node_style, edge_style } = require("../utils/node_edge_conf").default;

edge_style.style.label = "data(label)";

const elements = [
  { data: { id: "node1", label: "node1" } },
  { data: { id: "node2", label: "node2" } },
  {
    data: {
      id: "left_to_right_edge",
      label: "left_to_right_edge",
      source: "node1",
      target: "node2",
    },
  },
  { data: { id: "node3", label: "node3" } },
  { data: { id: "node4", label: "node4" } },
  {
    data: {
      label: "right_to_left_edge",
      id: "right_to_left_edge",
      source: "node3",
      target: "node4",
    },
  },
  { data: { id: "node5", label: "node5" } },
  { data: { id: "node6", label: "node6" } },
  {
    data: {
      label: "bidirectional_edge",
      id: "bidirectional_edge",
      source: "node5",
      target: "node6",
    },
  },
  { data: { id: "node7", label: "node7" } },
  { data: { id: "node8", label: "node8" } },
  {
    data: {
      id: "edge_1",
      label: "bidirectional_1",
      source: "node7",
      target: "node8",
    },
  },
  {
    data: {
      id: "edge_2",
      label: "bidirectional_2",
      source: "node8",
      target: "node7",
    },
  },
  { data: { id: "node9", label: "node9" } },
  {
    data: {
      label: "loop_edge",
      id: "loop_edge",
      source: "node9",
      target: "node9",
    },
  },
];

const stylesheet = [
  node_style,
  edge_style,
  {
    selector: `edge[id="left_to_right_edge"]`,
    style: {
      ...edge_style.style,
      width: 3,
      "target-arrow-shape": "triangle",
    },
  },
  {
    selector: `edge[id="right_to_left_edge"]`,
    style: {
      ...edge_style.style,
      width: 3,
      "source-arrow-shape": "triangle",
    },
  },
  {
    selector: `edge[id="bidirectional_edge"]`,
    style: {
      ...edge_style.style,
      width: 3,
      "source-arrow-shape": "triangle",
      "target-arrow-shape": "triangle",
    },
  },
  {
    selector: `edge[id="loop_edge"]`,
    style: {
      // ...edge_style.style,
      width: 3,
      "source-arrow-shape": "triangle",
      "target-arrow-shape": "triangle",
      "loop-sweep": "40deg",
      "loop-direction": "0deg",
    },
  },
];

const layout = {
  name: "grid",
  columns: 4,
};

export default {
  elements,
  stylesheet,
  layout,
};
