import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


class Register extends Component {
  state = {
    firstname:'',
    lastname:'',
    email: '',
    password: '',
    error: {},
    firstNameError: null,
    lastNameError: null,
    emailError: null,
    pawdError: null
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let fieldNotFilled = false;

    if(this.state.firstname === ''){
    	this.setState({ firstNameError: "Please Enter your First Name" });
    	fieldNotFilled = true;
    }

    if(this.state.lastname === ''){
    	this.setState({ lastNameError: "Please Enter your Last Name" });
    	fieldNotFilled = true;
    }

    if(this.state.email === ''){
    	this.setState({ emailError: "Please Enter a valid Email ID" });
    	fieldNotFilled = true;
    }

    if(this.state.password === ''){
    	this.setState({ pawdError: "Please Enter 6 character long password" });
    	fieldNotFilled = true;
    }

    if(fieldNotFilled){
    	return;
    }
    
    const {firstname, lastname, email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (data) => {
      // here you ned to deconstruct user
      const { user } = data
      if (user) {
            user.updateProfile({
               displayName: firstname,
            }).then(
              (s)=> this.props.history.push('/')
            )
          }
      })
      .catch((error) => {
      	console.log("register error: ", error);
        this.setState({ error: error });
      });

  };
  
  render() {
    const { email, password, error } = this.state;
    return (

      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <NavLink to="/login" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </NavLink>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> your account
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <NavLink to="/login">Log In</NavLink>
              </p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="firstname" 
                  
                  value={this.state.firstname} 
                  onChange={this.handleInputChange} 
                />
                <label htmlFor="email">First Name</label>
              </div>
              <div>
	              <span className="red-text">
	                  {this.state.firstNameError}
	               </span>
	          </div>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="lastname" 
                   
                  value={this.state.lastname} 
                  onChange={this.handleInputChange} 
                />
                <label htmlFor="email">Last Name</label>
              </div>
              <div>
              	<span className="red-text">
                  {this.state.lastNameError}
               </span>
              </div>
              
              <div className="input-field col s12">
                <input
                  type="text"
                  name="email" 
                   
                  value={email} 
                  onChange={this.handleInputChange} 
                />
                <label htmlFor="email">Email</label>
              </div>
              <div>
              	<span className="red-text">
                  {this.state.emailError}
              </span>
              </div>
              
              <div className="input-field col s12">
                <input
                  type="password"
                  name="password"
                  
                  value={password}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="password">Password</label>
                <div>
                	<span className="red-text">
	                  {this.state.pawdError}
	               </span>
                </div>
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
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

export default withRouter(Register);



