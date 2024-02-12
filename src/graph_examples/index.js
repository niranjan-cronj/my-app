function get_graph_data(button_id) {
  if (button_id == "example-1") {
    console.log("In case of example-1");
    const example_1 = require("./example_1").default;
    console.log("example 1 ===> ", example_1);
    return example_1;
  } else if (button_id == "example-2") {
    console.log("In case of example-2");
    const example_2 = require("./example_2").default;
    console.log("example 2 ===> ", example_2);
    return example_2;
  } else if (button_id == "") {
    
  }
}

export default get_graph_data;
