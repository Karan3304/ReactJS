
// const heading = React.createElement("h1", {}, "hello from reactJS");
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello from reactJS",
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);