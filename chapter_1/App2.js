// nested html element using react

{
  /* <div id="parent">
    <div id="child">
        <h1>I am nested H1 TAG</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am nested H1 TAG"),
  ),
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
