import React from 'react';

const TodoFAQ = () => (
  <div className="aside">
    <ul id="slide-out" className="side-nav">

      <div className="aside-items">
        <li><h4 className="header">TODO FAQ's: </h4> </li>
        <li><div className="divider" /></li>
        <li><a className="subheader">How to use:</a></li>
        <li className="waves-effect" >Use the checkboxes to mark todos as completed</li>
        <li><div className="divider" /></li>
        <li className="waves-effect" >Double click a Todo's name to edit it</li>
        <li><div className="divider" /></li>
        <li className="waves-effect" >Delete single todos with the trash symbol</li>
        <li><div className="divider" /></li>
        <li className="waves-effect" >Filter Todos with the 3 filters</li>
        <li><div className="divider" /></li>
        <li className="waves-effect" >Delete all completed todos with the red trash can symbol</li>
        <li><div className="divider" /></li>
        <li className="waves-effect" >Toggle All Todos</li>
      </div>
    </ul>
    <a href="#" data-activates="slide-out" className="button-collapse"><i className="small material-icons">menu</i></a>
  </div>
);

export default TodoFAQ;
