import React from 'react';
import TodoList from './todo-list'; 
const Dashboard = (params) => {
	console.log("Dashboard params: ", params);
	// console.log("Dashboard props: ", this.props);
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