// ReactElement (Onject) => HTML(Browser Understands)

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "I'm an h1 tag in child1"),
        React.createElement("h2", {}, "I'm an h2 tag in child1"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag in child2"),
        React.createElement("h2", {}, "I'm an h2 tag in child2"),
    ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
