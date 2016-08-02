var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('../../components/TodoApp.js');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
    
    it('should add todo to the todos state on _handleAddTodo', () => {
        var todoText = "Test text";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: []});
        todoApp._handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });
    
    it('should toggle completed value when _handleToggle called', () => {
        var todoData = {id: 11, text: 'Test text', completed: false, createdAt: '', completedAt: '' };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});
        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp._handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });
    
    it('completedAt should be removed when toggle from completed to incomplete', () => {
        var todoData = {id: 11, text: 'Test text', completed: true, createdAt: '', completedAt: 1234 };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});
        todoApp._handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toBe(false);
    });
});