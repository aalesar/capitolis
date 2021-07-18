import React from "react";
import {render} from "react-dom";
import Main from "./components/Main.js";

function App() {
    return <Main />;
}

render(<App />, document.querySelector("#root"));

