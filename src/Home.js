import React from 'react';
import { Container, Row, Column, Heading } from 'rebass';

const Home = () => {
  return (
    <div className="landing-copy col s12 center-align">
		<h3>
	      Welcome to <b>Qtodo</b>
	    </h3>
	    <h4>
	      <div className="flow-text grey-text text-darken-1">
	        If you have an account get started by logging in right away. 
	      </div>
	      <div className="flow-text grey-text text-darken-2">
	        If you don't, create an Account and Register yourself. 
	      </div>
	      
	    </h4>
	</div>
  );
};

export default Home;
