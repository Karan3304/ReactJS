// nested html element using react,and siblings

{
  /* <div id="parent">
    <div id="child">
        <h1>I am first nested H1 TAG</h1>
        <h1>I am second nested H1 TAG</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    // this div have two h1 siblings
    React.createElement("h1", {}, "I am first nested H1 TAG"),
    React.createElement("h1", {}, "I am second nested H1 TAG"),
  ]),
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
