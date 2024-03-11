const { node_style, edge_style, node_partition_style } = require("../utils/node_edge_conf").default;

console.log("node_partition_style ===> ", node_partition_style);

const elements = [
  {
    data: {
      id: "Partition1_node",
      label: "Partition1_node",
    },
  },
  {
    data: {
      id: "Partition2_node_1",
      label: "Partition2_node_1",
    },
  },
  {
    data: {
      id: "Partition2_node_2",
      label: "Partition2_node_2",
    },
  },
  {
    data: {
      id: "Partition2_node_3",
      label: "Partition2_node_3",
    },
  },
  {
    data: {
      id: "different_partition_node_edge",
      label: "different_partition_node_edge",
      source: "Partition1_node",
      target: "Partition2_node_1",
    },
  },
  {
    data: {
      id: "same_partition_edge",
      label: "same_partition_edge",
      source: "Partition2_node_2",
      target: "Partition2_node_3",
    },
  },
];

const stylesheet = [
  node_style,
  edge_style,
  {
    selector: "#Partition1_node",
    style: {
      ...node_partition_style.style,
    },
  },
  {
    selector: "#different_partition_node_edge",
    style: {
      "line-color": "#ff3377",
      "target-arrow-color": "#ff3377",
    },
  },
];

const layout = {
  name: "grid",
};

export default {
  elements,
  stylesheet,
  layout,
};
