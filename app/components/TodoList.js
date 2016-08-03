var React = require('react');
var {connect} = require('react-redux');

// components
import Todo from './Todo.js';

export class TodoList extends React.Component {
    render() {
        var {todos} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <div className="todo-nomessage">
                        <p className="todo-name">No tasks found.</p>
                        <p>Add a task using the form below, or switch the toggle above to see completed tasks.</p>
                    </div>
                );
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} text={todo.text} id={todo.id} completed={todo.completed} createdAt={todo.createdAt} completedAt={todo.completedAt} />
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

// put todos from redux state onto this component
export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);