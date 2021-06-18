
import "./App.scss";
import Home from "./pageHome/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Desktop from "./desktop/Desktop.js"
import MenuRoute from "./menu/Router.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <MenuRoute />  
    </div>
  );

  
}

export default App;
