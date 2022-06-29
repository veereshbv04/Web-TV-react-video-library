import "./App.css";
import Router from "./router/Router"
import {Header, Navbar} from "./components/index"
import {useTheme} from "./contexts/index"
function App() {
  const {theme} = useTheme()
 
  return (
    <div className={theme}>
      <Header/>
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
