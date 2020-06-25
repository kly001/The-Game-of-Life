import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Game from './Game';


class NavigationBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <div>
              <nav className="navbar sticky-top navbar-expand-md bg-primary navbar-dark">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" exact to="/game" >The Game of Life</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav">
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" exact to="/game">Game</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="content">
              <Switch>
                <Route path="/" component={Home} exact />  
                <Route path="/game" component={Game} exact />
              </Switch>
            </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}
export default NavigationBar;