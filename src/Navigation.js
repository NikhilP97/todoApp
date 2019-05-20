import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Navbar from "./Navbar";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar authenticated={this.props.authenticated}/>
          <Switch>
            <Route exact path="/" render={(props) => <Home authenticated={this.props.authenticated} {...props} />}/>
            <Route authenticated={this.props.authenticated} path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default Navigation;
