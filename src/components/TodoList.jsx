import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { todoItems, onDelete,onClickDone } = this.props;

    return (
      <ul className="todo__list">
        {todoItems.map(todo => (
           
          <TodoItem todo={todo}  key={todo.id} onDelete={() => onDelete(todo.id)} onClickDone={() => onClickDone(todo.id)} />
       
        ))}
      </ul>
    )}}

export default TodoList;