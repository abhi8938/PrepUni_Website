import "./App.css";
import "@vetixy/circular-std";

import Contact from "./pages/contact";
import Home from "./pages/home";
import Middle from "./pages/middle";
import ReactGA from "react-ga";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Home />
      <Middle />
      <Contact />
      {ReactGA.initialize("G-LGTNF3TRYM", { debug: true })}
      <pre>
        ReactGA.initialize(
        {this.renderConfigs()}
        );
      </pre>
    </div>
  );
}

export default App;
