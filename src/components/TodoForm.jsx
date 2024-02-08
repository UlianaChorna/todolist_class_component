import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo } = this.state;
    if (todo.trim() !== "") {
      this.props.onAdd(todo);
      this.setState({ todo: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  render() {
    const { todo } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <input
          type="text"
          value={todo}
          onChange={this.handleChange}
          placeholder="Enter a new todo"
          className="input"
        />
        <button type="submit" className="button button--add">
          Add
        </button>
      </form>
    );
  }
}
export default TodoForm;
