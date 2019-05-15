import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Button, Subhead, Text } from 'rebass';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import classnames from "classnames";

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: {},
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/dashboard');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (

      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <NavLink to="/register">Register</NavLink>
              </p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="email" 
                   
                  value={email} 
                  onChange={this.handleInputChange}
                  
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  type="password"
                  name="password"
                  
                  value={password}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {error.message}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

export default withRouter(Login);


/*
<Container>
        <Flex>
          <Box>
            <Subhead>Log In</Subhead>
          </Box>
        </Flex>
        {error ? (
          <Flex>
            <Box>
              <Text>{error.message}</Text>
            </Box>
          </Flex>
        ) : null}
        <Flex>
          <Box>
            <form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={this.handleInputChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              />
              <NavLink
                to="/dashboard"
                className="btn waves-effect waves-light left"
                onClick={this.handleSubmit} children="Log In"
              >
                Login
              </NavLink>
            </form>
          </Box>
        </Flex>
      </Container>
*/