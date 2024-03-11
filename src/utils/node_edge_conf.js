import data from "./images_icon.js";
const { node_default, node_partition, icon_uri } = data;
console.log("node_default ====> ", node_default);

const node_style = {
  selector: "node",
  style: {
    label: "data(label)",
    "background-image": node_default,
    // "background-fit": "contain",
    "background-fit": "cover",
    width: "50px",
    height: "50px",
    "background-color": "#666",
    "border-color": "#000000",
    "border-width": 1,
    //   "border-style": "double",
    "border-style": "solid",
    "text-background-padding": 2,
    shape: "rectangle",
    "text-margin-y": 8, // Adjust up and down of node (text)label.
    "padding-bottom": "10px",
    "text-valign": "bottom", // Align the label to the bottom of the node
    "text-halign": "center", // Center the label horizontally
  },
};

const edge_style = {
  selector: "edge",
  style: {
    "curve-style": "bezier",
    // label: "data(label)",
    "line-color": "#000000",
    //   "control-point-distances": "30px",
    "control-point-weights": "0.5",
    "text-outline-color": "#ff0000",
    "text-background-color": "#ff0000",
    "text-valign": "top",
    "text-margin-y": -10,
    "target-arrow-color": "#000000",
    "source-arrow-color": "#000000",
    "target-arrow-shape": "triangle"
  },
};

const node_partition_style = JSON.parse(JSON.stringify(node_style));
node_partition_style.style = {
  ...node_style.style,
  "background-image": node_partition,
  "border-color": "#ff3377",
};

const alarm_icon_style = {
  "background-image": icon_uri,
  "background-fit": "cover",
  label: "",
  shape: "circle",
  //   position: "absolute",
  //   top: "0", // Align the top edge of the inner node with the top edge of the outer node
  //   right: "0", // Align the right edge of the inner node with the right edge of the outer node
  //   "z-index": "10", // Ensure that the inner node appears above the outer node
  // "background-offset-y": "2px",
  width: "10px",
  height: "10px",
  // "padding-left": "20px",
};

console.log("Is this problem ? ===> ", node_partition_style);

const export_data = {
  node_style,
  edge_style,
  node_partition_style,
  alarm_icon_style
};

export default export_data;
