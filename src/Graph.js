import React from "react";
import CytoscapeComponent from "react-cytoscapejs";

function Graph({ graph_props, cyRef }) {
  const elements = graph_props.elements ? graph_props.elements : [];
  const styles = graph_props.style ? graph_props.style : [];
  const stylesheet = graph_props.stylesheet ? graph_props.stylesheet : [];

  //   const elements = [
  //       { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
  //       { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
  //       {
  //         data: {
  //           source: "one",
  //           target: "two",
  //           label: "Edge from Node1 to Node2",
  //         },
  //       },
  //     ];

  const layout = {
    name: "grid",
    rows: 2, // Number of rows
    cols: 4, // Number of columns
  };

  return (
    <CytoscapeComponent
      elements={elements}
      stylesheet={stylesheet}
      style={{ width: "100%", height: "100%" }}
      layout={layout}
      cy={(cy) => {
        cyRef.current = cy;
      }}
    />
  );
}

export default Graph;
