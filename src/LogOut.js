import React from 'react';
import { Button } from 'rebass';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
const logOutUser = () => {
	
  	firebase.auth().signOut();
};

const LogOut = () => {
	
  return(
  	<NavLink
  	to="/login"
  	className="btn waves-effect waves-light right"
   	onClick={logOutUser} children="Log Out"
    >
    LogOut
    </NavLink>
    


  	) 
};

export default LogOut;
