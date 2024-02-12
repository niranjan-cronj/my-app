import React from "react";

function Buttons({ onClick }) {
  // console.log("onClick is ", onClick);
  return (
    <div className="menu-div">
      <button id="clear" className="menu-items" onClick={onClick}>
        Clear
      </button>
      <button id="zoom-in" className="menu-items" onClick={onClick}>
        Zoom In
      </button>
      <button id="zoom-out" className="menu-items" onClick={onClick}>
        Zoom Out
      </button>
      <button id="example-1" className="menu-items" onClick={onClick}>
        Show Nodes and TLs
      </button>
      <button id="example-2" className="menu-items" onClick={onClick}>
        Show Nodes and TLs with number on top.
      </button>
      <button id="nodes_1000" className="menu-items" onClick={onClick}>
        Show Thousand nodes and TLs
      </button>
      <button id="nodes_5000" className="menu-items" onClick={onClick}>
        Show 5000 nodes and TLs with label
      </button>
      <button id="failed_con_tl_example" className="menu-items" onClick={onClick}>Failed Connection TL example</button>
      <button id="partition_node_example" className="menu-items" onClick={onClick}>
        Different partition node connection example
      </button>
      <button id="many_edges_example" className="menu-items" onClick={onClick}>Many TLs between two nodes</button>
      <button id="clickable_graph" className="menu-items" onClick={onClick}>Clickable graph</button>
      <button id="alarm_example" className="menu-items" onClick={onClick}>Alarm icon example</button>
    </div>
  );
}

export default Buttons;
