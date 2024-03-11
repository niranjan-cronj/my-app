const { node_style, edge_style } = require("../utils/node_edge_conf").default;

let elements = [];
const layout = {
  name: "grid",
};

for (let i = 1; i <= 5000; i++) {
  elements.push({
    data: {
      id: "node_" + i,
      label: "node_" + i,
    },
  });

  if (i > 1) {
    elements.push({
      data: {
        lable: "edge_" + "node_" + (i - 1) + "_" + "node_" + i,
        id: "edge_" + "node_" + (i - 1) + "_" + "node_" + i,
        source: "node_" + (i - 1),
        target: "node_" + i,
      },
    });
    if (i % 5 === 0) {
      elements.push({
        data: {
          lable: "edge_" + "node_" + i + "_to_" + "node_" + (i - 1),
          id: "edge_" + "node_" + i + "_to_" + "node_" + (i - 1),
          source: "node_" + i,
          target: "node_" + (i - 1),
        },
      });
    }
  }
}

export default {
  elements: elements,
  stylesheet: [node_style, edge_style],
  layout,
};
