import React from 'react';
import { Container, Flex, Box, Heading } from 'rebass';
import TodoList from './todo-list'; 
const Dashboard = (params) => {
	console.log("Dashboard params: ", params);
	console.log("Dashboard props: ", this.props);
  return (
  	
    <div className="todo-app ">
    	<div className="landing-copy col s12 center-align">
    	<h4>
	      <b>Hey there,</b> {params.authenticated.displayName}
	      <p className="flow-text grey-text text-darken-1">
	        Here are you're list of Todo's. 
	      </p>
	      
	    </h4>
	    </div>
        <TodoList
          user={params.authenticated}
         />
     </div>
  );
};

export default Dashboard;

/*

<div className="flow-text grey-text text-darken-1"> Double Click to edit them. </div>

*/
