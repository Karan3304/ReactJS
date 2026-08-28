import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="heading">this is the Title !!</h1>;

const title = <h1 className="head">Namastey...!</h1>;



const number = 1000;

const HeadingComponent = () => (
  <div id="container">
    {number}
    <h1>{900 + 876}</h1>
    <Title />
    {title}
    <h3>{console.log("hello")}</h3>
    <h1 className="heading">this is the Component !!</h1>
  </div>
);

// this is component composition

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
