import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './index.css';
import ShaderComponent from "./shaders/oblivion"

 const App = () => {
    const [temps, setTemps] = useState(0.0);

    useEffect(() => {
        setInterval(setTemps(temps + 0.1), 1000);
      }, [temps])

    return (
        <div>
        <ShaderComponent
          style={{ width: "100%", height: "100vh" }}
          temps={temps}
        />
      </div>
    )
}
export default App

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
