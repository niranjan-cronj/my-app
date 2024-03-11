const { node_style, edge_style, alarm_icon_style } =
  require("../utils/node_edge_conf").default;

const elements = [
  {
    data: {
      id: "outer_node",
      label: "outer_node",
    },
    position: { x: 100, y: 100 },
  },
  {
    data: { id: "icon1", parent: "outer_node", label: "icon1" },
    position: { x: 180, y: 120 },
  },
];

const stylesheet = [
  node_style,
  edge_style,
  {
    selector: "#icon1",
    style: alarm_icon_style
  },
];

const layout = { name: "grid" };

const export_data = {
  elements,
  stylesheet,
  layout,
};

export default export_data;
