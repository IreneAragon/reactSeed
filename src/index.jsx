import React from "react";
import ReactDOM from "react-dom";
import logoImg from "./content/react2.png";

const var1 = "ES6";
const var2 = "works!";
const var3 = `Javascript: ${var1} ${var2}`;
document.write(var3);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

// Componente React
ReactDOM.render(<h1>React works!</h1>, document.getElementById("root"));
