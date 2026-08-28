import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React element</span>;

// const title = (
//   <h1 className="head">
//     {elem}
//     Hello Title
//     {/* <HeadingComponent/>  THIS WILL GIVE ERROR */}
//   </h1>
// );

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1>this is the header</h1>
  </div>
);

const title = (
  <h1 className="head">
    {elem}
    Hello Title
    {/* <HeadingComponent/>  Browser will froze because of infinite components loop */}
  </h1>
);

// this is component composition

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
