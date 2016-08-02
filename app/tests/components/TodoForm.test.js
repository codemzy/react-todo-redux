var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoForm = require('../../components/TodoForm.js');

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist();
    });
    
    // test if onAdd called with valid data
    it('should call onAdd if valid text entered', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm onAdd={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));
        todoForm.refs.text.value = 'Test';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('Test');
    });
    // test if onAdd called with invalid data
    it('should not call onAdd if no text entered', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm onAdd={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));
        todoForm.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
    
});