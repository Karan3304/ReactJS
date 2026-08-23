const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    // this div have two h1 siblings
    React.createElement("h1", {}, "I am first nested H1 TAG"),
    React.createElement("h1", {}, "I am second nested H1 TAG"),
  ]),
  React.createElement("div", { id: "child2" }, [
    // this div have two h1 siblings
    React.createElement("h1", {}, "I am first nested H1 TAG"),
    React.createElement("h1", {}, "I am second nested H1 TAG"),
  ]),
]);

console.log(parent); // react element OR js object

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);
