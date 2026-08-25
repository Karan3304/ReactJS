import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      { key: "h1-1" },
      "This is the OG react course 🚀",
    ),
    React.createElement("h1", { key: "h1-2" }, "I am second nested H1 TAG"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-1" }, "I am new first nested H1 TAG"),
    React.createElement("h1", { key: "h1-2" }, "I am new second nested H1 TAG"),
  ]),
]); 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);