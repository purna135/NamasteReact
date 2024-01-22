const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

// parent is a js Object not html code
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

// render method will take the obj created by React.createElement and convert it to HTML code and render it
root.render(parent)