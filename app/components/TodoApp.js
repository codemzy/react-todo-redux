var React = require('react');
var moment = require('moment');

// components
var TodoList = require('./TodoList.js');
var TodoForm = require('./TodoForm.js');
var TodoSearch = require('./TodoSearch.js');

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
    
    _handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    
    _handleToggle(id) {
        var updatedTodos = this.state.todos.map(function(todo) {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : false;
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
    }
    
    render() {
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <img className="float-center" src="/img/todotiger.png" alt="todo tiger" />
                <div className="todowrap">
                    <TodoSearch onSearch={this._handleSearch.bind(this)} />
                    <TodoList todos={filteredTodos} onToggle={this._handleToggle.bind(this)} />
                    <TodoForm onAdd={this._handleAddTodo.bind(this)} />
                </div>
            </div>
        );
    }
}

module.exports = TodoApp;