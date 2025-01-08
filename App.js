// ReactElement (Onject) => HTML(Browser Understands)

import React from "react";
import ReactDOM from "react-dom/client"; // "react-dom" throws error

// React.createElement => ReactElement - JS Object => HTMLElement(render)
// Using Core React
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React!"
);

// JSX - HTML like or XML like syntax
// JSX => (babel) => React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = <h1 id = "heading">Namaste React using JSX!</h1>

// Output of both should be same
console.log(heading); //object
console.log(jsxHeading); 

const Title = () => {
    return (
    <div>
        <h2>Nested Title Component!</h2>
    </div>
    );
};

const num = 10;

// React Functional Component 
const HeadingComponent = () => {
    return (
    <div id = "container">
        <h1>Namste React Functional Component!</h1>
        {/* <Title /> */}
        {/* <Title></Title> */}
        {Title()}
        <h3>Printing num - {num} though js code using curly braces!</h3>
        <h3>Since heading is a React element, which is just a JS object, hence we can print using curly braces - {heading}</h3>
    </div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
//root.render(jsxHeading);
root.render(<HeadingComponent />);
