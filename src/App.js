import "./App.css";

import Router from "./router/Router"
import {Header, Navbar} from "./components/index"

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
