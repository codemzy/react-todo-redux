var React = require('react');
var moment = require('moment');

// components
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import TodoSearch from './TodoSearch.js';

// api
var TodoAPI = require('../api/TodoAPI.js');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    }
    
    componentDidUpdate() {
        TodoAPI.setTodos(this.state.todos);
    }
    
    _handleAddTodo(text) {
        var lastID = 0;
        if (this.state.todos.length > 0) {
            lastID = this.state.todos[this.state.todos.length-1].id;
        }
        var newID = lastID + 1;
        this.setState({
            todos: [
            ...this.state.todos,
            { id: newID, text: text, completed: false, createdAt: moment().unix(), completedAt: false }
            ]
        });
    }
    
    render() {
        return (
            <div>
                <img className="float-center" src="/img/todotiger.png" alt="todo tiger" />
                <div className="todowrap">
                    <TodoSearch />
                    <TodoList />
                    <TodoForm onAdd={this._handleAddTodo.bind(this)} />
                </div>
            </div>
        );
    }
}

module.exports = TodoApp;