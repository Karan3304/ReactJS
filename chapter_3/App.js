import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hii karan");
// console.log(heading);

// const jsxheading = <h1 className="header" tabIndex="1">this is JSX</h1>;

const jsxheading = (
  <h1 className="header" tabIndex="1">
    this is JSX
  </h1>
);
// console.log(jsxheading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxheading);

// React functional Component

// const HeadingComponent = () => {
//   return <h1 className="heading">Hello react component !!</h1>;
// };

// const HeadingComponent = () => <h1 className="heading">Hello react component !!</h1>

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Hello react component !!</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent);  // ERROR
root.render(<HeadingComponent />);
