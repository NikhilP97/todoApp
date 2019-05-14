import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Button, Subhead, Text } from 'rebass';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


class Register extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
      <Container>
        <Flex>
          <Box>
            <Subhead>Register</Subhead>
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
                onClick={this.handleSubmit} children="Register"
              >
                Register
              </NavLink>
            </form>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default withRouter(Register);
