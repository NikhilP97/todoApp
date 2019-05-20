import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import LogOut from './LogOut';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black">
          {this.props.authenticated ? (
                <span>
                  <NavLink
                    to="/dashboard"
                    params={this.props.authenticated }
                    style={{
                    width: "200px",
                    borderRadius: "3px",
                    letterSpacing: "1px",
                    margin: "0.8rem"
                    }}
                    className="btn btn-medium left waves-effect waves-light hoverable blue accent-3"
                  >
                    My todo's
                  </NavLink>
                  
                  <LogOut />
                </span>
              ) : (
                <span>
                  <NavLink
                    to="/login"
                    style={{
                    width: "100px",
                    borderRadius: "3px",
                    letterSpacing: "0.5px",
                    margin: "0.8rem"
                    }}
                    className="btn btn-medium left waves-effect waves-light hoverable blue accent-3"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    margin: "0.8rem"
                    }}
                    className="btn btn-medium left waves-effect waves-light hoverable blue accent-3"
                  >
                    Register
                  </NavLink>
                </span>
              )}
            <NavLink
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center white-text"
            >
              <i className="material-icons">playlist_add_check</i>
              Qtodo
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;