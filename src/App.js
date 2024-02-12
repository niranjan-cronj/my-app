import React, { useState, useRef } from "react";
import "./App.css";
import ButtonDiv from "./ButtonDiv";
import Graph from "./Graph";
import get_graph_data from "./graph_examples";

function App() {
  // const [button_id, updateGraph] = useState("");
  const [graph_props, set_graph_props] = useState(get_graph_data("example-1"));
  // let graph_props = get_graph_data(button_id ? button_id : "example-1");

  const cyRef = useRef(null);

  const handleZoomIn = () => {
    if (cyRef.current) {
      cyRef.current.zoom({
        level: cyRef.current.zoom() * 1.1, // Increase zoom level by 10%
      });
    }
  };

  const handleZoomOut = () => {
    if (cyRef.current) {
      cyRef.current.zoom({
        level: cyRef.current.zoom() * 0.9, // Decrease zoom level by 10%
      });
    }
  };

  function onClick(val) {
    console.log("Clicked on a button having id ", val.target.id);
    // console.log("button_id is ===> ", button_id);
    if (val.target.id == "zoom-in") {
      handleZoomIn();
      set_graph_props(graph_props);
    } else if (val.target.id == "zoom-out") {
      handleZoomOut();
      set_graph_props(graph_props);
    } else {
      let graph_data = get_graph_data(val.target.id);
      if (!graph_data) {
        alert("Something went wrong...");
        return
      }
      set_graph_props(graph_data);
    }
    // updateGraph(val.target.id);
  }

  console.log(`\nRunning react component. ${graph_props}...\n`);

  return (
    <>
      <ButtonDiv onClick={onClick} />
      <div id="main-div">
        <Graph graph_props={graph_props} cyRef={cyRef} />
      </div>
    </>
  );
}

export default App;
