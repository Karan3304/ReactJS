import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="heading">this is the Title !!</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {/* OR also we can do this */}
    <Title></Title>
    {/* also */}
    {Title()}
    <h1 className="heading">this is the Component !!</h1>
  </div>
);

// this is component composition

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
