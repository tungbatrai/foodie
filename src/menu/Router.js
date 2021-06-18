import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pageHome/home/Home.js";
import Desktop from "../desktop/Desktop.js";
import NotFound from "../not-found/Notfound.js";
import "./Router.scss"
const MenuRoute = () => {
  return (
    <Router>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-outline-success">
          <Link to="/home"> home </Link>
        </button>
        <button type="button" className="btn btn-outline-warning">
          <Link to="/desktop"> desktop </Link>
        </button>
        <button type="button" className="btn btn-outline-danger">
          <Link to="/notFound"> notFound </Link>
        </button>
      </div>
      <SettingPath />
    </Router>
  );
};
function SettingPath() {
  return (
    <div>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/home" children={<Home />} />
        <Route path="/desktop" children={<Desktop />} />
        <Route path="/notFound" children={<NotFound />} />
      </Switch>
    </div>
  );
}

export default MenuRoute;
