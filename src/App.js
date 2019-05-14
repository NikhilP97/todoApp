import React, { Component } from 'react';
import Navigation from './Navigation';
import firebase from './firebase';

class App extends Component {
  state = {
    authenticated: null,
    user: null,
  };
  componentDidMount() {
    console.log(this.state.authenticated);
    firebase.auth().onAuthStateChanged((authenticated) => {
      this.setState({ user: authenticated });
      authenticated
        ? this.setState(() => ({
            authenticated,
          }))
        : this.setState(() => ({
            authenticated: null,
          }));
      console.log(this.state.authenticated);
    });
  }
  render() {
    return <Navigation authenticated={this.state.authenticated} user={this.state.user} />;
  }
}

export default App;
