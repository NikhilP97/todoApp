import { Icon, Col } from 'react-materialize';
import React from 'react';
import TodoEdit from './todo-edit';


const TodoListItem = (props) => {
  const {
    checked, handleCheck, handleDelete, edit, handleDoubleClick, id,
  } = props;
  const checkedString = checked ? 'radio_button_checked' : 'radio_button_unchecked';
  const checkedClass = checked ? 'todo-line-through' : '';

  if (!edit) {
    return (
      <Col m={12} s={12}>
        <div className={`${'card-panel teal lighten-2 yellow-text '}${checkedClass}`}>
          <span onDoubleClick={() => handleDoubleClick(id)}>
            {props.title}
          </span>
          <span onClick={() => handleCheck(id, checked)} >

            <Icon className="right todo-checkbox" children={checkedString} />
          </span>
          <span onClick={() => handleDelete(id)}>
            <Icon className="right todo-checkbox" children="delete" />
          </span>

        </div>
      </Col>
    );
  }

  if (edit) {
    return (
      <Col m={12} s={12}>
        <div className={`${'card-panel teal lighten-2 yellow-text '}${checkedClass}`}>
          <TodoEdit title={props.title} handleEditSubmit={props.handleEditSubmit} id={id} />
        </div>
      </Col>
    );
  }

  return false;
};

export default TodoListItem;
