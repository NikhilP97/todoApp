import React, { Component } from 'react';
import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import LogOut from './LogOut';
import Navbar from "./Navbar";
import Background from './bg_white.png';

var sectionStyle = {
    
    backgroundImage: "url(" + ( Background ) + ")"
};

class Navigation extends Component {
  render() {
    return (
      
      <div className="App" style = {{ backgroundImage: 'url(' + Background + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'fixed'
              }}>
      <Router>

        <div>
          <Row>
            <Column>
              <Navbar authenticated={this.props.authenticated}/>
              
            </Column>
          </Row>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route authenticated={this.props.authenticated} path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default Navigation;

/*


{this.props.authenticated ? (
                <span>
                  <NavLink to="/dashboard" params={this.props.authenticated }>My todo's</NavLink>
                  <LogOut />
                </span>
              ) : (
                <span>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                </span>
              )}



*/




