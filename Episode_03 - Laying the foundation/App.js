import React from "react";
import ReactDOM from "react-dom/client";

// This is a React Element
const heading = <h1>React Element</h1>;

//This is React Component
const Title = () => <h1>Title</h1>;
const x = 100;

const HeadingComponent = () => (
  <div id="container">
    {x + 123}
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">React Component</h1>
    {heading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeadingComponent()); // this will also work
root.render(<HeadingComponent />);
