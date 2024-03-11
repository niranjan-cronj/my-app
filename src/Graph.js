import React from "react";
import CytoscapeComponent from "react-cytoscapejs";

function Graph({ graph_props, cyRef }) {
  const elements = graph_props.elements ? graph_props.elements : [];
  const stylesheet = graph_props.stylesheet ? graph_props.stylesheet : [];
  const layout = graph_props.layout ? graph_props.layout : { name: "random" };
  const node_listener = graph_props.node_listener
    ? graph_props.node_listener
    : false;
  const edge_listener = graph_props.edge_listener
    ? graph_props.edge_listener
    : false;

    console.log("node_listener is ===> ", node_listener);
    console.log("edge_listener is ===> ", edge_listener);

  console.log("layout ==> ", layout);

  return (
    <CytoscapeComponent
      elements={elements}
      stylesheet={stylesheet}
      style={{ width: "100%", height: "100%" }}
      layout={layout}
      cy={(cy) => {
        cyRef.current = cy;
        if (node_listener) cy.on("click", "node", node_listener);
        if (edge_listener) cy.on("click", "edge", edge_listener);
      }}
    />
  );
}

export default Graph;
