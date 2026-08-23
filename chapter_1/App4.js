// complicted nested structure

{
  /* <div id="parent">
    <div id="child1">
        <h1>I am first nested H1 TAG</h1>
        <h1>I am second nested H1 TAG</h1>
    </div>
    <div id="child2">
        <h1>I am first nested H1 TAG</h1>
        <h1>I am second nested H1 TAG</h1>
    </div>
</div> */
}

// here,the parent have two div child divs,so create an array of 2 child divs in the third argument of the parent

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
