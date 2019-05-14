import React from 'react';
import { Container, Flex, Box, Heading } from 'rebass';
import TodoList from './todo-list'; 
const Dashboard = (params) => {
	console.log("Dashboard params: ", params);
	console.log("Dashboard props: ", this.props);
  return (
    <div className="todo-app">
        <TodoList
          user={params.authenticated}
         />
      </div>
  );
};

export default Dashboard;
