import React from 'react';
import './styles/index.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      todoItems: []
    }
    this.TodoCompleted = this.TodoCompleted.bind(this);
  }



  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const jsonData = await response.json();
      const firstTenTodos = jsonData.slice(0, 10);
      this.setState({ todoItems: firstTenTodos });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  addItem=(todoItem) =>{
    const newTodoItems = [
      ...this.state.todoItems,
    
      {
        id: this.state.todoItems.length + 1,
        title: todoItem,
        completed: false,
      }
    ];
    this.setState({ todoItems: newTodoItems });
  }

  removeItem= (itemId)=> {
    const updatedTodoItems = this.state.todoItems.filter(
      (todo) => todo.id !== itemId
    );
    this.setState({ todoItems: updatedTodoItems });
  }

  TodoCompleted(itemId) {
    const completedItems = this.state.todoItems.map((todo) => {
      if (todo.id === itemId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    this.setState({ todoItems: completedItems });
  }


 render() {
  const { todoItems} = this.state;
  return (
    <div className="wrapper">
      <h1 className='nav__item'>Todo App</h1>
      <TodoForm onAdd={this.addItem} /> 
      <TodoList todoItems={todoItems} onDelete={this.removeItem} onClickDone={this.TodoCompleted}/> 
    </div>
  );
 } 
 
}

export default App;
