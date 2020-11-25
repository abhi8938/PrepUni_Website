import "./App.css";
import "@vetixy/circular-std";

import Contact from "./pages/contact";
import Home from "./pages/home";
import Middle from "./pages/middle";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Home />
      <Middle />
      <Contact />
    </div>
  );
}

export default App;
