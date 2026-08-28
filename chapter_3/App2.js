import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = (
  <h1 className="header" tabIndex="1">
    this is JSX
  </h1>
);

// we can make this react element a react component,as given below

const heading2 = () => (
  <h1 className="header" tabIndex="1">
    this is JSX
  </h1>
);
