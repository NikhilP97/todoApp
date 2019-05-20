import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
const logOutUser = () => {
  firebase.auth().signOut();
};

const LogOut = () => {
  
  return(
    <NavLink
      to="/"
      style={{
      width: "120px",
      borderRadius: "3px",
      letterSpacing: "1.5px",
      margin: "0.8rem"
      }}
      className="btn btn-medium right waves-effect waves-light hoverable red accent-3"
      onClick={logOutUser} children="Log Out"
    >
      LogOut
    </NavLink>
  ) 
};

export default LogOut;