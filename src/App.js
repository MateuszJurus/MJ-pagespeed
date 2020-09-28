import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './routing/Home';
import Scores from './routing/Scores';

import './app.scss';
import './style.css';

const App = () => {

  return (

    <Router>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/scores">Scores</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Scores">
            <Scores />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
